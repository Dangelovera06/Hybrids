# GoHighLevel (GHL) Integration Setup Guide

## Current Implementation Status

✅ **GHL External Tracking Script** - Already loaded in `index.html` (line 70-74)
✅ **Quiz Form Updated** - Now sends submissions directly to GHL webhook
✅ **Facebook Pixel Tracking** - Already configured and tracking leads
✅ **Netlify Forms** - Configured as backup for form submissions

---

## 🚀 Quick Setup: GHL Webhook (Recommended)

### Step 1: Get Your GHL Webhook URL

1. **Login to GoHighLevel Dashboard**
2. **Navigate to:** Settings → Workflows (or Automations)
3. **Create New Workflow:**
   - Click "Create Workflow"
   - Name it: "Website Quiz Leads"
4. **Add Webhook Trigger:**
   - Click "Add Trigger"
   - Select "Webhook"
   - Copy the webhook URL (looks like: `https://services.leadconnectorhq.com/hooks/XXXXXX`)
5. **Configure Workflow Actions:**
   - Add Contact to GHL
   - Send notification email
   - Assign to team member
   - Add tags: `quiz-lead`, `dental-implants`
   - Start nurture sequence

### Step 2: Configure Environment Variables

Create a `.env` file in the root of your project:

```bash
# Copy this entire block into your .env file
VITE_GHL_WEBHOOK_URL=https://services.leadconnectorhq.com/hooks/YOUR_WEBHOOK_ID_HERE
```

**Important:** Replace `YOUR_WEBHOOK_ID_HERE` with the actual webhook URL from Step 1.

### Step 3: Configure Netlify Environment Variables

For production deployment:

1. **Go to Netlify Dashboard** → Your Site → Site Settings → Environment Variables
2. **Add New Variable:**
   - Key: `VITE_GHL_WEBHOOK_URL`
   - Value: Your GHL webhook URL
3. **Redeploy your site** for changes to take effect

---

## 📊 What Data is Being Sent to GHL

When someone completes the quiz, the following data is sent:

```javascript
{
  firstName: "John",           // First name from split
  lastName: "Doe",             // Last name from split
  name: "John Doe",            // Full name
  email: "john@example.com",   // Email address
  phone: "(772) 123-4567",     // Phone number
  
  // Custom Fields (Quiz Answers)
  concern: "Missing one or more teeth",
  notCandidate: "No",
  timeline: "As soon as possible",
  
  // Lead Source Tracking
  source: "Dental Quiz",
  leadSource: "Website Quiz",
  
  // Tags for segmentation
  tags: ["quiz-lead", "dental-implants"]
}
```

---

## 🎯 Alternative Integration Methods

### Option 2: GHL API Integration (More Advanced)

If you need more control, use the GHL API directly:

```javascript
// In Quiz.jsx or a separate API utility
const submitToGHLAPI = async (formData) => {
  const GHL_API_KEY = import.meta.env.VITE_GHL_API_KEY;
  const GHL_LOCATION_ID = import.meta.env.VITE_GHL_LOCATION_ID;
  
  const response = await fetch(`https://rest.gohighlevel.com/v1/contacts/`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${GHL_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      locationId: GHL_LOCATION_ID,
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      source: 'Website Quiz',
      tags: ['quiz-lead', 'dental-implants'],
      customFields: [
        { key: 'concern', value: formData.concern },
        { key: 'timeline', value: formData.timeline }
      ]
    })
  });
  
  return response.json();
};
```

**Environment Variables Needed:**
```bash
VITE_GHL_API_KEY=your_api_key_here
VITE_GHL_LOCATION_ID=your_location_id_here
```

### Option 3: Zapier Integration

If you prefer Zapier:

1. **Create Zap:** Netlify Forms → GoHighLevel
2. **Trigger:** Netlify Form Submission (dental-quiz)
3. **Action:** Create/Update Contact in GoHighLevel
4. **Map Fields:** name → Full Name, email → Email, etc.
5. **Add Tags:** quiz-lead, dental-implants

---

## 🧪 Testing Your Integration

### Local Testing

1. **Create `.env` file** with your webhook URL
2. **Run dev server:**
   ```bash
   npm run dev
   ```
3. **Complete the quiz** with test data
4. **Check browser console** for:
   - ✅ Lead submitted to GoHighLevel
   - Check GHL dashboard for new contact

### Production Testing

1. **Deploy to Netlify** with environment variables set
2. **Complete quiz** on live site
3. **Verify in GHL:**
   - New contact created
   - Tags applied
   - Workflow triggered

---

## 🔍 Debugging

### Check Browser Console

After submitting the quiz, look for these console logs:

- `✅ Form submitted successfully to Netlify` - Netlify form backup
- `✅ Lead submitted to GoHighLevel` - GHL webhook success
- `⚠️ GHL Webhook URL not configured` - Environment variable missing
- `❌ GHL submission failed:` - Check webhook URL or GHL settings

### Common Issues

**Issue:** "GHL Webhook URL not configured"
- **Solution:** Create `.env` file with `VITE_GHL_WEBHOOK_URL`

**Issue:** "GHL submission failed: 404"
- **Solution:** Verify webhook URL is correct and workflow is active

**Issue:** Data not showing in GHL
- **Solution:** Check workflow is published and active

---

## 🎨 Customizing the Integration

### Adding More Fields

Edit `src/pages/Quiz.jsx` line 88-101:

```javascript
const ghlPayload = {
  // ... existing fields ...
  
  // Add new custom fields here
  preferredDate: userInfo.preferredDate,
  referralSource: answers.referralSource,
  // etc.
};
```

### Changing Tags

Edit line 100 in `Quiz.jsx`:

```javascript
tags: ['quiz-lead', 'dental-implants', 'high-intent', 'port-st-lucie']
```

### Adding to Different Campaigns

In your GHL workflow, configure actions to:
- Add to specific campaigns
- Assign to specific team members
- Trigger SMS sequences
- Send welcome emails

---

## 📞 Support

If you run into issues:

1. **Check GHL workflow** is published and active
2. **Verify webhook URL** in environment variables
3. **Test webhook** with a tool like Postman or curl
4. **Check browser console** for error messages

---

## ✨ What's Already Working

Your site already has:

1. ✅ **Meta Pixel Tracking** - Facebook ads conversion tracking
2. ✅ **GHL External Tracking** - Visitor behavior analytics  
3. ✅ **Netlify Forms** - Form submission backup/logging
4. ✅ **Wistia Video Tracking** - Video engagement tracking

Once you add the webhook URL, you'll have **complete lead capture** to GHL! 🎉




