/**
 * Rule-Based Scam Detection Engine
 * Fully transparent, local, client-side heuristic pattern analyzer.
 * IMPORTANT: This is a rule-based checker. It cannot guarantee safety.
 */

export const HEURISTIC_RULES = [
  {
    id: 'credential_theft',
    severity: 'critical',
    title: {
      roman: "Khufia Credentials / PIN Maangna",
      urdu: "خفیہ پاس ورڈ یا او ٹی پی مانگنا",
      en: "Secret Credential / PIN Request"
    },
    description: {
      roman: "Bank ka koi bhi officer ya scheme phone ya message par OTP, ATM PIN ya password nahi maangti. Ye 100% fraud hai.",
      urdu: "بینک کا مینیجر بھی کبھی فون یا میسج پر او ٹی پی، اے ٹی ایم پن یا پاس ورڈ نہیں مانگ سکتا۔ یہ خالصتاً دھوکہ ہے۔",
      en: "Legitimate banks and services never request your SMS OTP, ATM PIN, or passwords over text."
    },
    patterns: [
      /\b(otp|one[- ]time[- ]password)\b/i,
      /\b(atm[- ]?pin|pin code|secret pin)\b/i,
      /\b(password|passcode)\b/i,
      /\b(cnic|shanakhti[- ]card|shanakht)\b/i,
      /\b(cvv|cvv2|card expiry|card number)\b/i,
      /او\s*ٹی\s*پی/,
      /اے\s*ٹی\s*ایم\s*پن/,
      /پاس\s*ورڈ/,
      /شناختی\s*کارڈ/,
      /خفیہ\s*کوڈ/
    ]
  },
  {
    id: 'urgency_threat',
    severity: 'high',
    title: {
      roman: "Jaldbazi aur Darr Paida Karna",
      urdu: "جلد بازی اور خوف و ہراس کا دباؤ",
      en: "Artificial Urgency & Threat Pressure"
    },
    description: {
      roman: "Fauran karo warna account band ho jayega keh kar sochne aur mashwara karne ka waqt cheena jata hai.",
      urdu: "'فوری کریں ورنہ اکاؤنٹ بلاک ہو جائے گا' کہہ کر گھبراہٹ پیدا کی جاتی ہے تاکہ آپ کسی سے مشورہ نہ کر سکیں۔",
      en: "Creating artificial panic ('act now or account will be suspended') to rush you before verifying."
    },
    patterns: [
      /\b(fauran|urgent|immediately|jaldi|foran)\b/i,
      /\b(block|blocked|suspension|suspended|freeze|band ho jayega)\b/i,
      /\b(last chance|aakhri tareekh|final warning|police case|legal action)\b/i,
      /\b(within 24 hours|expire|expiring|cancel ho jayega)\b/i,
      /فوری/,
      /جلدی/,
      /بلاک/,
      /معطل/,
      /آخری\s*تاریخ/,
      /وارننگ/
    ]
  },
  {
    id: 'prize_lottery',
    severity: 'high',
    title: {
      roman: "Ghair-Mamooli Inaam / Scheme Ka Lalach",
      urdu: "غیر معمولی انعام یا لاٹری کا لالچ",
      en: "Unsolicited Prize & Scheme Bait"
    },
    description: {
      roman: "Bina kisi ticket ya lottery bhare achanak lakhon rupay nikalne ka dawa fraud hota hai.",
      urdu: "جب آپ نے کسی قرعہ اندازی میں حصہ ہی نہیں لیا تو رقم کیسے نکلی؟ یہ جعل سازوں کا روایتی جال ہے۔",
      en: "Unexpected lottery wins, cash grants, or prize claims when you never bought a ticket."
    },
    patterns: [
      /\b(inaam|prize|winner|lottery|jeeto|qurandazi)\b/i,
      /\b(ehsaas|bisp|benazir income|rashan program)\b/i,
      /\b(50[,0-9]*\s*(hazar|lakh|rupees|rs|pkr))\b/i,
      /\b(congratulations|mubarak|inam nikla)\b/i,
      /انعام/,
      /لاٹری/,
      /مبارک/,
      /بے\s*نظیر/,
      /احساس/,
      /قرعہ\s*اندازی/
    ]
  },
  {
    id: 'money_advance',
    severity: 'medium',
    title: {
      roman: "Advance Fees / Tax Bhejne Ka Mutalba",
      urdu: "پیشگی فیس یا ٹیکس کی رقم کا مطالبہ",
      en: "Advance Fee or Money Transfer Request"
    },
    description: {
      roman: "Inaam ya parcel lene ke liye pehle EasyPaisa ya JazzCash par paise bhejna fraud ki paki nishani hai.",
      urdu: "انعام یا پارسل وصول کرنے کے لیے پہلے ایزی پیسہ یا جاز کیش پر فیس مانگنا فراڈ کی یقینی علامت ہے۔",
      en: "Requiring advance transfer fees via EasyPaisa or JazzCash to release funds or parcel delivery."
    },
    patterns: [
      /\b(advance tax|advance fee|delivery charges|processing fee)\b/i,
      /\b(send money|paise bhejo|rakam transfer|bhejain)\b/i,
      /\b(easypaisa kar do|jazzcash kar dein)\b/i,
      /پیشگی\s*فیس/,
      /رقم\s*بھیجیں/,
      /ٹیکس\s*جمع/
    ]
  },
  {
    id: 'suspicious_link',
    severity: 'high',
    title: {
      roman: "Mashkook ya Mukhtasir Web Link",
      urdu: "مشکوک یا مختصر ویب لنک",
      en: "Suspicious or Shortened URL"
    },
    description: {
      roman: "Official Pakistani websites .gov.pk ya direct bank domain use karti hain. bit.ly, .xyz, ya ajnabi links khatarnaak hotay hain.",
      urdu: "سرکاری ادارے ہمیشہ gov.pk استعمال کرتے ہیں۔ bit.ly یا .xyz لنکس دھوکہ دہی اور ڈیٹا چوری کے لیے ہوتے ہیں۔",
      en: "Shortened or odd top-level domains (.xyz, bit.ly, .top) masking phishing destinations."
    },
    patterns: [
      /https?:\/\/[^\s]+/i,
      /\b(bit\.ly|tinyurl\.com|t\.co|goo\.gl|is\.gd|cutt\.ly)\/[^\s]+/i,
      /[a-zA-Z0-9-]+\.(xyz|top|buzz|club|tk|ml|ga|work|click)\b/i
    ]
  },
  {
    id: 'unknown_mobile_sender',
    severity: 'medium',
    title: {
      roman: "Aam Mobile Number se Sarkari/Bank Dawa",
      urdu: "عام موبائل نمبر سے سرکاری یا بینک پیغام",
      en: "Personal Mobile Number Impersonating Organization"
    },
    description: {
      roman: "Asli banks aur idaray 0300/0333 aam mobile number se nahi balke official SMS mask (jaise HBL, SBP, PTA) se message bhejte hain.",
      urdu: "اصلی بینک اور ادارے کبھی 0300 جیسے عام موبائل نمبرز سے رابطہ نہیں کرتے، بلکہ ان کا مخصوص نام (Masking) ہوتا ہے۔",
      en: "Government departments and banks broadcast via branded SMS masks, not personal 03xx numbers."
    },
    patterns: [
      /(?:\+92|0092|0)?3[0-9]{2}[- ]?[0-9]{7}\b/,
      /\b03[0-9]{9}\b/
    ]
  }
];

export function analyzeMessage(text) {
  if (!text || typeof text !== 'string' || !text.trim()) {
    return {
      flagsFound: [],
      matchedSpans: [],
      summary: 'empty',
      redFlagCount: 0
    };
  }

  const flagsFound = [];
  const matchedSpans = [];

  for (const rule of HEURISTIC_RULES) {
    let ruleMatched = false;
    const triggers = [];

    for (const pattern of rule.patterns) {
      const globalRegex = new RegExp(pattern.source, pattern.flags.includes('g') ? pattern.flags : `${pattern.flags}g`);
      let match;
      while ((match = globalRegex.exec(text)) !== null) {
        ruleMatched = true;
        const matchedText = match[0];
        triggers.push(matchedText);
        matchedSpans.push({
          ruleId: rule.id,
          text: matchedText,
          start: match.index,
          end: match.index + matchedText.length,
          severity: rule.severity
        });
      }
    }

    if (ruleMatched) {
      flagsFound.push({
        id: rule.id,
        severity: rule.severity,
        title: rule.title,
        description: rule.description,
        triggers: Array.from(new Set(triggers))
      });
    }
  }

  // Sort spans by start index
  matchedSpans.sort((a, b) => a.start - b.start);

  return {
    flagsFound,
    matchedSpans,
    redFlagCount: flagsFound.length,
    hasCritical: flagsFound.some((f) => f.severity === 'critical')
  };
}
