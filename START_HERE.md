# 🎯 START HERE: GHL Integration

## ✅ What's Done
Your quiz form now sends leads to GoHighLevel automatically!

---

## 🚀 Get It Working (2 Steps)

### 1. Get Your GHL Webhook URL
GoHighLevel Dashboard → Settings → Workflows → Create Workflow → Add Webhook Trigger → **Copy URL**

### 2. Create .env File
Create a file named `.env` in this folder:
```bash
VITE_GHL_WEBHOOK_URL=paste_your_webhook_url_here
```

**That's it!** Test with `npm run dev`

---

## 📚 Documentation Guide

| Read This | When You Need To |
|-----------|------------------|
| **QUICK_START.md** | Get started in 5 minutes |
| **SETUP_CHECKLIST.md** | Follow step-by-step setup |
| **README_GHL_INTEGRATION.md** | Understand everything |
| **GHL_SETUP.md** | Configure advanced options |
| **INTEGRATION_FLOW.md** | See technical details |

---

## 🧪 Quick Test

```bash
# 1. Create .env file with webhook URL
# 2. Start server
npm run dev

# 3. Complete quiz at http://localhost:5173/quiz
# 4. Check browser console (F12) for:
#    ✅ Lead successfully submitted to GoHighLevel
# 5. Check GHL dashboard for new contact
```

---

## ✨ What Data Goes to GHL

When someone completes the quiz:
- ✅ Name, email, phone
- ✅ All quiz answers (concern, timeline, etc.)
- ✅ Tags: quiz-lead, dental-implants, free-consultation
- ✅ Source: Dental Quiz

---

## 🎯 Deploy to Production

Netlify Dashboard → Site Settings → Environment Variables → Add:
- Key: `VITE_GHL_WEBHOOK_URL`
- Value: Your webhook URL
- Then: Redeploy site

---

## 🐛 Not Working?

1. Check `.env` file is in project root (not src/)
2. Restart dev server after creating `.env`
3. Verify webhook URL is correct
4. Make sure GHL workflow is published (not draft)
5. Check browser console (F12) for error messages

---

## 💡 Quick Tips

- **Test First:** Use fake data to test before going live
- **Check Console:** Browser console shows all tracking events
- **GHL Workflow:** Configure actions in GHL after webhook triggers
- **Tags Matter:** Use tags to segment leads in GHL
- **Backup Works:** Leads also go to Netlify Forms as backup

---

## 📱 Questions?

1. **Setup help?** → Read `QUICK_START.md`
2. **Step-by-step?** → Read `SETUP_CHECKLIST.md`
3. **Full guide?** → Read `README_GHL_INTEGRATION.md`
4. **Add more forms?** → Check `src/utils/ghl.js`

---

## 🎉 Ready to Go!

Just add your webhook URL to `.env` and you're capturing leads! 🚀

**Estimated Setup Time:** 5 minutes  
**Files to Configure:** 1 (`.env` file)  
**Result:** Automatic lead capture to GoHighLevel

---

**Start with QUICK_START.md →**




