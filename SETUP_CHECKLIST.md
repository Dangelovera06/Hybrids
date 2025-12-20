# ✅ GHL Integration Setup Checklist

## What Was Implemented

✅ **GHL Webhook Integration** - Quiz submissions now go directly to GoHighLevel
✅ **Reusable Utility Functions** - `submitLeadToGHL()` and `trackGHLEvent()` in `src/utils/ghl.js`
✅ **Clean Code Structure** - Modular and easy to maintain
✅ **Error Handling** - Graceful fallbacks if GHL is unavailable
✅ **Multiple Tracking** - Netlify Forms backup + Facebook Pixel + GHL

---

## 🚀 Quick Start (3 Steps)

### 1. Get Your GHL Webhook URL

1. Login to **GoHighLevel Dashboard**
2. Go to **Settings → Workflows** (or Automations)
3. Click **"Create Workflow"**
4. Name it: **"Website Quiz Leads"**
5. Add trigger: **"Webhook"**
6. **Copy the webhook URL** (looks like: `https://services.leadconnectorhq.com/hooks/XXXXXX`)

### 2. Create .env File

Create a file named `.env` in the root of your project:

```bash
VITE_GHL_WEBHOOK_URL=https://services.leadconnectorhq.com/hooks/YOUR_ACTUAL_WEBHOOK_ID
```

**Replace** `YOUR_ACTUAL_WEBHOOK_ID` with the URL from Step 1.

### 3. Test Locally

```bash
# Restart your dev server
npm run dev

# Complete the quiz with test data
# Check the browser console for: ✅ Lead successfully submitted to GoHighLevel
# Check your GHL dashboard for the new contact
```

---

## 🌐 Deploy to Production (Netlify)

1. Go to **Netlify Dashboard** → Your Site → **Site Settings**
2. Click **Environment Variables**
3. Add new variable:
   - **Key:** `VITE_GHL_WEBHOOK_URL`
   - **Value:** Your webhook URL from GHL
4. Click **"Redeploy site"** to apply changes

---

## 📊 What Data Gets Sent to GHL

When someone completes the quiz:

```javascript
{
  // Contact Info
  firstName: "John",
  lastName: "Doe",
  name: "John Doe",
  email: "john@example.com",
  phone: "(772) 123-4567",
  
  // Quiz Answers (Custom Fields)
  concern: "Missing one or more teeth",
  notCandidate: "No",
  timeline: "As soon as possible",
  quizCompletedAt: "2024-01-15T10:30:00.000Z",
  
  // Lead Source
  source: "Dental Quiz",
  leadSource: "Website Quiz",
  
  // Tags for Segmentation
  tags: ["quiz-lead", "dental-implants", "free-consultation"]
}
```

---

## 🧪 Testing Checklist

### Local Testing
- [ ] Created `.env` file with webhook URL
- [ ] Ran `npm run dev`
- [ ] Completed quiz with test data
- [ ] Saw "✅ Lead successfully submitted to GoHighLevel" in console
- [ ] Verified contact appeared in GHL dashboard
- [ ] Checked that tags were applied correctly

### Production Testing
- [ ] Added `VITE_GHL_WEBHOOK_URL` to Netlify environment variables
- [ ] Redeployed site
- [ ] Completed quiz on live site
- [ ] Verified lead appeared in GHL
- [ ] Confirmed workflow triggered (if configured)

---

## 🔧 Configure Your GHL Workflow

In your GHL workflow, add these actions:

1. **Create/Update Contact** ✅ (Automatic with webhook)
2. **Apply Tags:** `quiz-lead`, `dental-implants`, `free-consultation`
3. **Assign to Team Member:** Select who should get the lead
4. **Send Notification:** Email or SMS to your team
5. **Add to Campaign:** Your nurture sequence
6. **Send Welcome SMS/Email:** To the lead
7. **Create Task:** Schedule follow-up call

---

## 🎯 Console Messages You'll See

After quiz submission, check the browser console:

### ✅ Success Messages:
```
✅ Form submitted successfully to Netlify
📤 Sending lead to GoHighLevel: {email: "...", source: "..."}
✅ Lead successfully submitted to GoHighLevel
🎯 Lead event fired for quiz submission
📋 QuizCompleted custom event fired
✅ GHL event tracked: Lead
```

### ⚠️ Warning Messages:
```
⚠️ GHL Webhook URL not configured in environment variables
```
**Fix:** Create `.env` file with `VITE_GHL_WEBHOOK_URL`

### ❌ Error Messages:
```
❌ GHL submission failed: [error details]
```
**Fix:** Check that webhook URL is correct and workflow is published in GHL

---

## 📁 Files Changed/Created

### New Files:
- ✅ `src/utils/ghl.js` - Reusable GHL integration utilities
- ✅ `GHL_SETUP.md` - Detailed setup documentation
- ✅ `SETUP_CHECKLIST.md` - This checklist
- ✅ `.env.local.example` - Example environment file

### Modified Files:
- ✅ `src/pages/Quiz.jsx` - Added GHL webhook submission

---

## 🔄 Adding GHL to Other Forms

If you want to add GHL integration to other forms:

```javascript
import { submitLeadToGHL } from '@/utils/ghl';

const handleSubmit = async (e) => {
  e.preventDefault();
  
  await submitLeadToGHL({
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    source: 'Contact Form',        // Change this
    leadSource: 'Website Contact',  // Change this
    tags: ['contact-lead'],         // Change these tags
    customFields: {
      message: formData.message,
      // Add any other fields
    }
  });
  
  // Show success message
};
```

---

## 💡 Tips & Best Practices

### Lead Source Names
Use clear, descriptive names for `source` and `leadSource`:
- ✅ "Dental Quiz", "Contact Form", "Free Consultation"
- ❌ "form1", "submission", "lead"

### Tags Strategy
Use tags for:
- **Lead Type:** `quiz-lead`, `contact-lead`, `phone-lead`
- **Service Interest:** `dental-implants`, `all-on-4`, `smile-makeover`
- **Intent Level:** `hot-lead`, `warm-lead`, `cold-lead`
- **Campaign:** `free-consultation`, `special-offer`

### Custom Fields
Add any custom data that helps you qualify or follow up:
- Quiz answers
- Preferred contact time
- Budget range
- Urgency level
- Referral source

---

## 📞 Need Help?

### Check These First:
1. Is the `.env` file in the project root?
2. Did you restart the dev server after creating `.env`?
3. Is the webhook URL correct and workflow published in GHL?
4. Are there any error messages in the browser console?

### Debugging Commands:
```bash
# Check if .env file exists
ls -la .env

# Restart dev server
npm run dev

# Build for production (to test)
npm run build
```

---

## ✨ What's Already Working

Your site already has these tracking/integrations:

1. ✅ **Facebook Pixel** - Ad conversion tracking
2. ✅ **GHL External Tracking** - Visitor analytics (tracking ID: `tk_410a83de53874bb5856b53ade6fbef9c`)
3. ✅ **Netlify Forms** - Form submission backup
4. ✅ **Wistia Video Tracking** - Video engagement metrics

Once you add the webhook URL, your complete lead capture system is ready! 🎉

---

## 🎉 You're Done When...

- [x] Quiz submissions appear in GHL dashboard
- [x] Tags are correctly applied to new contacts
- [x] Your workflow triggers automatically
- [x] Team receives notifications
- [x] No error messages in console

**Need the detailed docs?** → See `GHL_SETUP.md` for more information!




