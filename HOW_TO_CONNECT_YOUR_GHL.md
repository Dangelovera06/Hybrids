# 🔗 How to Connect YOUR GoHighLevel Account

## Step-by-Step: Get YOUR Unique Webhook URL

### 1. Login to YOUR GoHighLevel Account
Go to: https://app.gohighlevel.com/
(Use YOUR credentials)

### 2. Navigate to Workflows/Automations
**Path:** Settings → Automations → Workflows
or
**Direct:** Click "Automations" in left sidebar → "Workflows"

### 3. Create New Workflow
- Click **"+ New Workflow"** (top right)
- Name it: **"Website Quiz Leads"** (or whatever you want)
- Click **"Create"**

### 4. Add Webhook Trigger
- Click **"Add Trigger"** 
- Select **"Custom Webhook"** or **"Webhook"**
- You'll see a webhook URL like:
  ```
  https://services.leadconnectorhq.com/hooks/ABC123DEF456...
  ```
- Click **"Copy"** to copy this URL
- **SAVE THIS URL** - this is YOUR unique connection point

### 5. Verify It's YOUR Account
Look at the top of the GHL dashboard - you'll see:
- Your business name
- Your location name
- Your account details

This confirms the webhook belongs to YOUR account.

### 6. Configure Workflow Actions (Optional but Recommended)
After the webhook trigger, add actions:
- **Create/Update Contact** (automatic)
- **Apply Tags** → Add tags like: quiz-lead, dental-implants
- **Notify Team** → Email or SMS notification
- **Assign to User** → Assign to sales rep
- **Send Welcome SMS** → Message to the lead
- **Create Task** → Follow-up reminder

### 7. Publish Your Workflow
- Click **"Publish"** or **"Activate"** (top right)
- Make sure toggle is ON (not paused)

### 8. Test Your Webhook (Optional)
In GHL workflow editor:
- Look for "Test Webhook" button
- Click it to see sample data format
- Or submit a test through your quiz

---

## 🔐 Why This is Secure & Goes to YOU

### Your Webhook URL Contains:
1. **Your Account ID** - Embedded in the URL
2. **Your Location ID** - Specific to your business
3. **Unique Token** - Random string that identifies YOUR workflow

### It's Like:
- **Email Address:** Only emails to your@email.com go to you
- **Phone Number:** Only calls to your number reach you
- **Webhook URL:** Only data sent to YOUR webhook goes to YOU

### Nobody Else Can Access:
- ❌ I don't have access to your GHL account
- ❌ Other users can't see your leads
- ❌ Your webhook URL is private to you
- ❌ Each GHL account gets unique URLs

---

## 📋 Put YOUR Webhook in .env File

After getting YOUR webhook URL from steps above:

### Create .env file:
```bash
# Replace this entire URL with YOUR actual webhook URL from GHL
VITE_GHL_WEBHOOK_URL=https://services.leadconnectorhq.com/hooks/YOUR_ACTUAL_WEBHOOK_ID_HERE
```

### Example (with fake URL):
```bash
# This is YOUR unique URL from YOUR GHL account
VITE_GHL_WEBHOOK_URL=https://services.leadconnectorhq.com/hooks/aBc123DeF456gHi789jKl012mNo345pQr678sTu901
```

### Where to Put .env File:
```
smile-flow-07946090/          ← Your project root
├── .env                       ← CREATE THIS FILE HERE
├── src/
├── public/
├── package.json
└── README.md
```

**DO NOT** put it in:
- ❌ `/src/.env` 
- ❌ `/public/.env`
- ❌ Any subdirectory

**Must be** in the root folder next to `package.json`

---

## 🧪 Test That It's Working

### 1. Restart Dev Server
```bash
# Stop current server (Ctrl+C)
# Start again
npm run dev
```

### 2. Complete Quiz
- Go to: http://localhost:5173/quiz
- Fill out with test data:
  - Name: Test User
  - Email: test@yourdomain.com
  - Phone: (555) 123-4567

### 3. Check Browser Console
Press **F12** → **Console** tab

Look for:
```
✅ Lead successfully submitted to GoHighLevel
```

### 4. Check YOUR GHL Dashboard
- Go to: **Contacts** in YOUR GHL
- Look for "Test User" 
- Should appear within seconds
- Check tags are applied
- Verify workflow triggered

### 5. Check Workflow Runs
In GHL:
- Go to your workflow
- Click "Logs" or "History"
- Should see recent execution
- Can view data received

---

## 🚨 Common Mistakes to Avoid

### ❌ Wrong Webhook URL
**Problem:** Copying example URL instead of YOUR actual URL
**Fix:** Must get URL from YOUR GHL account workflow

### ❌ Webhook Not Published
**Problem:** Created workflow but didn't publish it
**Fix:** Click "Publish" or "Activate" toggle in workflow

### ❌ Wrong GHL Location
**Problem:** Multiple locations, using wrong one
**Fix:** Switch to correct location in GHL, get webhook from there

### ❌ .env File in Wrong Place
**Problem:** Put .env inside /src/ folder
**Fix:** Move to project root (next to package.json)

### ❌ Forgot to Restart Server
**Problem:** Created .env but server still running
**Fix:** Stop server (Ctrl+C) and restart (npm run dev)

---

## 🌐 Deploy to Production (Netlify)

Once working locally, deploy:

### 1. Go to Netlify Dashboard
https://app.netlify.com/ → Your Site

### 2. Site Settings
Click **"Site settings"** → **"Environment variables"**

### 3. Add Variable
- Click **"Add a variable"**
- **Key:** `VITE_GHL_WEBHOOK_URL`
- **Value:** Paste YOUR webhook URL from GHL
- Click **"Create variable"**

### 4. Redeploy
- Go back to **"Deploys"** tab
- Click **"Trigger deploy"** → **"Deploy site"**

### 5. Test Production
- Go to your live site URL
- Complete quiz
- Check GHL for new contact

---

## 🔍 How to Verify It's YOUR GHL

### In GHL Dashboard:
1. Look at top left corner
2. See YOUR business name
3. See YOUR location name
4. See YOUR profile

### In Workflow:
1. Breadcrumb shows: Your Location → Workflows
2. Webhook URL in YOUR workflow
3. Contacts appear in YOUR contacts list

### Test With Unique Data:
1. Submit quiz with your personal email
2. Check it appears in YOUR GHL contacts
3. You receive notifications (if configured)

---

## 📞 Need More Help?

### Can't Find Workflows?
- Some GHL plans: "Automations" → "Workflows"
- Other GHL plans: "Marketing" → "Workflows"
- Or search for "Workflow" in GHL search bar

### Don't Have Workflow Access?
- Check your GHL plan (some features require higher tiers)
- Contact GHL support: support@gohighlevel.com
- Ask account admin to give you workflow permissions

### Still Confused?
Watch this official GHL video:
- Search YouTube: "GoHighLevel Webhook Tutorial"
- Or search in GHL: Help → "Webhooks"

---

## ✅ Checklist: I've Connected MY GHL

- [ ] Logged into MY GoHighLevel account
- [ ] Created workflow in MY account
- [ ] Got MY unique webhook URL
- [ ] Verified MY business name shows in GHL
- [ ] Created .env file in project root
- [ ] Pasted MY webhook URL into .env
- [ ] Restarted dev server (npm run dev)
- [ ] Tested with sample data
- [ ] Saw "✅ Lead successfully submitted" in console
- [ ] Found test lead in MY GHL contacts
- [ ] Verified tags applied correctly
- [ ] Checked workflow executed in MY account

---

## 🎉 Once This Works

Your quiz submissions will:
1. ✅ Go directly to YOUR GHL account (not anyone else's)
2. ✅ Create contacts in YOUR GHL
3. ✅ Trigger YOUR workflows
4. ✅ Notify YOUR team
5. ✅ Appear in YOUR pipeline

**The webhook URL is the key** - it's YOUR unique connection!




