# 🚀 Quick Start: Get GHL Working in 5 Minutes

## Step 1: Get Webhook URL (2 min)
1. Login to **GoHighLevel**
2. Go to **Settings → Workflows**
3. Click **"+ Create Workflow"**
4. Add **"Webhook"** trigger
5. **Copy the webhook URL**

## Step 2: Create .env File (1 min)
Create a file named `.env` in your project root:

```bash
VITE_GHL_WEBHOOK_URL=paste_your_webhook_url_here
```

## Step 3: Test Locally (2 min)
```bash
npm run dev
```
Then:
1. Complete the quiz with test data
2. Open browser console (F12)
3. Look for: ✅ **Lead successfully submitted to GoHighLevel**
4. Check GHL dashboard for new contact

## Step 4: Deploy to Netlify
1. Netlify Dashboard → Site Settings → **Environment Variables**
2. Add: `VITE_GHL_WEBHOOK_URL` = your webhook URL
3. **Redeploy site**

---

## ✅ You're Done!

Quiz submissions now go directly to GoHighLevel 🎉

---

## 📚 Need More Help?

- **Quick Checklist:** See `SETUP_CHECKLIST.md`
- **Detailed Guide:** See `GHL_SETUP.md`  
- **Technical Details:** See `INTEGRATION_FLOW.md`
- **Code Examples:** See `src/utils/ghl.js`

---

## 🐛 Troubleshooting

### Not Working?
1. Check `.env` file exists in project root
2. Restart dev server after creating `.env`
3. Verify webhook URL is correct
4. Check GHL workflow is published (not draft)

### Still Not Working?
Check browser console for error messages:
- Press F12 → Console tab
- Complete quiz
- Look for red error messages
- Share error message for help

---

**That's it! Your GHL integration is ready to capture leads! 🚀**




