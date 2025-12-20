# 🔄 Lead Capture Flow Diagram

## Current Integration Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                      User Completes Quiz                         │
│                    (Quiz.jsx Form Submit)                        │
└─────────────────────┬───────────────────────────────────────────┘
                      │
                      ├──── Submission Happens in Parallel ────────┐
                      │                                             │
                      ▼                                             ▼
        ┌─────────────────────────┐              ┌──────────────────────────┐
        │   1. NETLIFY FORMS      │              │   2. GOHIGHLEVEL (GHL)   │
        │                         │              │                          │
        │  • Backup/Archive       │              │  • Creates Contact       │
        │  • Email notifications  │              │  • Applies Tags          │
        │  • Spam filtering       │              │  • Triggers Workflow     │
        │  • Easy export          │              │  • Assigns to Team       │
        └─────────────────────────┘              │  • Starts Nurture        │
                                                 └──────────────────────────┘
                                                             │
                      ┌──────────────────────────────────────┤
                      │                                      │
                      ▼                                      ▼
        ┌─────────────────────────┐              ┌──────────────────────────┐
        │  3. FACEBOOK PIXEL      │              │  4. GHL ANALYTICS        │
        │                         │              │                          │
        │  • Tracks "Lead" event  │              │  • Page tracking         │
        │  • Ad optimization      │              │  • Visitor behavior      │
        │  • Conversion tracking  │              │  • Attribution data      │
        │  • Retargeting lists    │              │  • Funnel analytics      │
        └─────────────────────────┘              └──────────────────────────┘
```

---

## 📊 Data Flow Details

### 1️⃣ Netlify Forms (Backup)
**Purpose:** Archive and spam filtering
**Data Sent:**
- name, email, phone
- concern, notCandidate, timeline

**Benefits:**
- ✅ Automatic spam filtering
- ✅ Email notifications
- ✅ Easy CSV export
- ✅ No setup required

### 2️⃣ GoHighLevel Webhook (Primary)
**Purpose:** Lead management and follow-up
**Data Sent:**
```javascript
{
  firstName: "John",
  lastName: "Doe", 
  email: "john@example.com",
  phone: "(772) 123-4567",
  source: "Dental Quiz",
  tags: ["quiz-lead", "dental-implants"],
  // Custom fields
  concern: "Missing teeth",
  timeline: "ASAP",
  notCandidate: "No"
}
```

**GHL Actions:**
- ✅ Create/update contact
- ✅ Apply tags for segmentation
- ✅ Trigger automated workflows
- ✅ Assign to team member
- ✅ Send welcome messages
- ✅ Create follow-up tasks

### 3️⃣ Facebook Pixel
**Purpose:** Ad conversion tracking
**Events Tracked:**
- `Lead` - Quiz completion
- `QuizCompleted` - Custom event
- `InitiateCheckout` - CTA clicks
- `VideoPlay` - Video engagement

**Benefits:**
- ✅ Optimize ad delivery
- ✅ Build lookalike audiences
- ✅ Track ROI
- ✅ Retarget visitors

### 4️⃣ GHL External Tracking
**Purpose:** Visitor analytics
**Tracking ID:** `tk_410a83de53874bb5856b53ade6fbef9c`

**Benefits:**
- ✅ Understand visitor journey
- ✅ Page view tracking
- ✅ Attribution modeling
- ✅ Funnel analysis

---

## 🔐 Why Multiple Systems?

### Redundancy
If one system fails, others still capture the lead

### Different Purposes
- **Netlify:** Archive & backup
- **GHL:** Lead management & follow-up
- **Facebook:** Ad optimization
- **Analytics:** Understanding visitor behavior

### Data Enrichment
Each system adds different insights about the lead

---

## 📈 Complete User Journey

```
1. User lands on site
   └─→ GHL External Tracking starts
   └─→ Facebook Pixel fires PageView

2. User watches video
   └─→ Facebook Pixel fires VideoPlay
   └─→ Video progress tracked (25%, 50%, 75%, 100%)

3. User clicks "Get Free Consultation"
   └─→ Facebook Pixel fires InitiateCheckout
   └─→ Redirects to Quiz

4. User completes quiz
   └─→ Netlify Forms receives submission ✅
   └─→ GHL Webhook creates contact ✅
   └─→ Facebook Pixel fires Lead event ✅
   └─→ GHL External Tracking logs event ✅

5. GHL Workflow triggers
   └─→ Tags applied
   └─→ Team notified
   └─→ Welcome SMS/Email sent
   └─→ Follow-up task created

6. Team follows up
   └─→ Uses GHL contact record
   └─→ All quiz answers visible
   └─→ Complete visitor history
```

---

## 🛠️ Technical Implementation

### Files Involved

```
src/pages/Quiz.jsx
├─→ Imports: submitLeadToGHL, trackGHLEvent
├─→ Submits to: Netlify Forms
├─→ Submits to: GHL Webhook
├─→ Tracks: Facebook Pixel events
└─→ Tracks: GHL analytics events

src/utils/ghl.js
├─→ submitLeadToGHL() - Send to webhook
├─→ trackGHLEvent() - Analytics tracking
└─→ submitLeadToGHLAPI() - Alternative API method

index.html
├─→ Facebook Pixel script
├─→ GHL External Tracking script
└─→ Wistia video tracking
```

### Environment Variables

```bash
# Required
VITE_GHL_WEBHOOK_URL=https://services.leadconnectorhq.com/hooks/XXXXX

# Optional (for API method)
VITE_GHL_API_KEY=your_api_key
VITE_GHL_LOCATION_ID=your_location_id
```

---

## 🎯 Success Criteria

Your integration is working correctly when:

1. ✅ Quiz submission appears in **Netlify Forms** dashboard
2. ✅ New contact created in **GHL** with correct tags
3. ✅ **GHL Workflow** triggers automatically
4. ✅ Team receives **notification** (email/SMS)
5. ✅ **Facebook Pixel** fires Lead event (check Events Manager)
6. ✅ No errors in **browser console**

---

## 🔄 Workflow Example in GHL

Here's a recommended workflow setup:

```
TRIGGER: Webhook Received
│
├─→ ACTION 1: Create/Update Contact
│   └─ Use: firstName, lastName, email, phone
│
├─→ ACTION 2: Apply Tags
│   └─ Tags: quiz-lead, dental-implants, free-consultation
│
├─→ ACTION 3: Add Custom Fields
│   └─ Store: concern, timeline, notCandidate
│
├─→ ACTION 4: Assign to Team
│   └─ Assign to: Sales Rep (round-robin or specific)
│
├─→ ACTION 5: Send Internal Notification
│   └─ Email to: team@yourdental.com
│   └─ SMS to: Office manager
│
├─→ ACTION 6: Send Welcome Message
│   └─ SMS to Contact: "Thanks for your interest! We'll call you soon."
│
├─→ ACTION 7: Create Task
│   └─ Task: "Call quiz lead - {{contact.firstName}}"
│   └─ Due: Within 1 hour
│   └─ Assigned to: Sales team
│
└─→ ACTION 8: Add to Nurture Campaign
    └─ Campaign: "Free Consultation Follow-up"
    └─ Day 1: Welcome email
    └─ Day 2: Case studies
    └─ Day 4: Reminder to schedule
```

---

## 📱 Testing Tips

### Quick Test Checklist

```bash
# 1. Start dev server
npm run dev

# 2. Open browser console (F12)

# 3. Complete quiz with test data:
Name: Test User
Email: test@example.com
Phone: (772) 123-4567

# 4. Look for these console messages:
✅ Form submitted successfully to Netlify
📤 Sending lead to GoHighLevel
✅ Lead successfully submitted to GoHighLevel
🎯 Lead event fired for quiz submission
✅ GHL event tracked: Lead

# 5. Check GHL Dashboard:
- New contact "Test User" should appear
- Tags should be applied
- Workflow should trigger
```

### Common Issues & Fixes

| Issue | Cause | Solution |
|-------|-------|----------|
| ⚠️ GHL Webhook URL not configured | `.env` file missing | Create `.env` with webhook URL |
| ❌ GHL submission failed: 404 | Webhook URL wrong | Verify URL in GHL workflow |
| ❌ GHL submission failed: 500 | GHL workflow inactive | Publish workflow in GHL |
| Data not appearing in GHL | Wrong location/account | Check webhook belongs to correct location |

---

## 🚀 Next Steps

Once your integration is working:

1. **Configure GHL Workflow** - Add all actions above
2. **Test with Real Data** - Submit test lead and follow entire process
3. **Monitor Performance** - Check conversion rates in GHL
4. **Optimize Follow-up** - Adjust timing based on response rates
5. **A/B Test** - Try different welcome messages/tags

---

## 📞 Support Resources

- **Netlify Forms:** https://docs.netlify.com/forms/setup/
- **GoHighLevel Docs:** https://highlevel.com/docs
- **Facebook Pixel:** https://www.facebook.com/business/help/pixel
- **This Project:**
  - `GHL_SETUP.md` - Detailed setup guide
  - `SETUP_CHECKLIST.md` - Quick start checklist
  - `src/utils/ghl.js` - Code documentation

---

**🎉 Your lead capture system is now enterprise-grade!**




