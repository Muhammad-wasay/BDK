# BinaDarKe (بنا ڈر کے) • Target User Field Observation Notes & Consent Template
> **Purpose**: Standardized template for recording genuine observations from parents and elders using mobile devices and digital wallets in Pakistan.
> **Strict Ethical Rule**: Zero fabricated interviews. All real feedback requires explicit user consent before public display.

---

## 🔒 Ethics, Privacy & Consent Protocol

1. **Informed Consent**: Every participant must be informed prior to the session that observations are gathered strictly for usability research and accessibility improvements for the Build4Better hackathon (NED University).
2. **Zero Sensitive Data**: Never collect, record, or store CNIC numbers, mobile numbers, passwords, OTPs, PINs, card numbers, or real banking details.
3. **Attribution Choice**: Always ask how the participant wishes to be identified (e.g., generic attribution *"Parent, Karachi"*, *"Grandparent, Lahore"*, or anonymous). Never display real names without explicit signed consent.
4. **Publishing Gate**: Quotes may only be rendered in the app's `src/data/testimonials.js` when `consent === true`. If no consented quotes are available, the app gracefully falls back to the transparently labelled Abba Ji persona card.

---

## 📋 Interview & Field Observation Template

Copy this template for each session conducted with a family member or community elder:

```markdown
### Field Observation [Number]
* **Date**: YYYY-MM-DD
* **Relationship**: [Parent / Grandparent / Uncle / Community Elder]
* **Participant Context**: [Approximate age, city, primary language, e.g. Age 66, Karachi, Urdu speaker]
* **Device Used**: [Budget Android model, e.g., Infinix Hot 12, screen font size setting, display condition]
* **Digital Task Attempted**: [e.g. Reading an incoming electricity bill SMS, reviewing a purported prize link, or handling a fake bank call]
* **What They Got Stuck On (Observed Friction)**: 
  [Describe specific confusion: e.g. couldn't locate sender name; confused by shortened URL bit.ly/xyz; felt urgent panic to tap button without reading]
* **Exact Words in Their Own Language**: 
  > "[Record verbatim in Urdu script, Roman Urdu, or native language as spoken by the participant]"
* **Consent Given**: [Yes / No - Verified explicit consent to include anonymous observation in research]
* **How They Asked to Be Named**: [e.g. "Parent, Karachi" / "Retired teacher, Rawalpindi" / "Anonymous"]
* **Direct UI/UX Improvement Made in BinaDarKe**: 
  [How this observation directly informed our design: e.g. enlarged touch target, added Urdu voiceover, simplified warning text]
```

---

## 📝 Field Observation Log (Team Submissions)

### Observation 1: [TODO - Pending Field Interview]
* **Date**: [YYYY-MM-DD]
* **Relationship**: Parent
* **Participant Context**: Age 64, Karachi (Urdu / Roman Urdu)
* **Device Used**: Budget Android (Infinix Hot 12, large system font, cracked screen protector)
* **Digital Task Attempted**: Differentiating between an official K-Electric bill notification and an unsolicited prize scam SMS
* **What They Got Stuck On**: 
  * Confused by bit.ly shortened links; unable to distinguish between official verified alphanumeric sender IDs and standard 11-digit mobile numbers (0300-xxxxxxx).
* **Exact Words in Their Own Language**: 
  > *"[TODO: Team to record exact words spoken by participant during field testing]"*
* **Consent Given**: [Pending verified interview]
* **How They Asked to Be Named**: "Parent, Karachi"
* **Direct UI/UX Improvement Made in BinaDarKe**: 
  * Added high-contrast sender verification pills ("Ghair-Tasdeeq Shuda" in red vs "Official UAN" in green) on all practice screens.

---

### Observation 2: [TODO - Pending Field Interview]
* **Date**: [YYYY-MM-DD]
* **Relationship**: Grandparent
* **Participant Context**: Age 71, Lahore (Punjabi / Urdu)
* **Device Used**: Redmi 10A (Display zoomed, high audio volume)
* **Digital Task Attempted**: Inspecting an incoming simulated WhatsApp payment receipt
* **What They Got Stuck On**: 
  * Reluctant to tap anything on screen due to deep-seated anxiety: *"Mujhe darr lagta hai koi ghalt button dab gaya to mere pension ke paise kat jayenge."*
* **Exact Words in Their Own Language**: 
  > *"[TODO: Team to record exact words spoken by participant during field testing]"*
* **Consent Given**: [Pending verified interview]
* **How They Asked to Be Named**: "Grandparent, Lahore"
* **Direct UI/UX Improvement Made in BinaDarKe**: 
  * Created persistent zero-risk safety guarantees: "Yahan ghalti karne par bhi 0 rupay ka nuqsan hoga" prominently on every screen.

---

### Observation 3: [TODO - Pending Field Interview]
* **Date**: [YYYY-MM-DD]
* **Relationship**: Parent
* **Participant Context**: Age 62, Rawalpindi (Urdu)
* **Device Used**: Samsung Galaxy A03
* **Digital Task Attempted**: Branching phone call simulator claiming bank account is suspended
* **What They Got Stuck On**: 
  * Caller used aggressive authoritative urgency; participant felt overwhelmed and was about to read the 4-digit verification code from notifications.
* **Exact Words in Their Own Language**: 
  > *"[TODO: Team to record exact words spoken by participant during field testing]"*
* **Consent Given**: [Pending verified interview]
* **How They Asked to Be Named**: "Parent, Rawalpindi"
* **Direct UI/UX Improvement Made in BinaDarKe**: 
  * Built interactive branching call simulator teaching users to say: *"Aap kis branch se bol rahe hain? Main bank ki official helpline par call back karta hoon."*
