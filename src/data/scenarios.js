// BinaDarKe - Multi-Language Anti-Scam Training Scenarios

export const GUIDED_SCENARIOS_DATA = {
  roman: {
    title: "Ehsaas / Benazir Scheme Inaam Fraud",
    sender: "+92 300 0928371",
    senderStatus: "Ghair-Tasdeeq Shuda Number",
    simInfo: "WhatsApp • 10:14 AM",
    rawMessage: {
      greeting: "Mubarak Ho! Aapka Ehsaas Scheme mein",
      highlightAmount: "Rs. 50,000 Inaam",
      bodyText: "nikla hai! Abhi foran is link par click kar ke apna Bank account aur",
      highlightPin: "ATM PIN darj karain",
      highlightUrgency: "warna inaam cancel ho jayega:",
      fakeLink: "http://bit.ly/ehsaas-inam-claim-2026",
      linkText: "Yahan click karke dekhein (Mehfooz Sandbox Test)"
    },
    redFlags: [
      {
        id: "lalach",
        step: 1,
        title: "Ghair-Mamooli Inaam (Lalach Dena)",
        tag: "Khatra",
        description: "Aap ne kisi scheme mein hissa nahi liya tha, to 50,000 kaise nikal aye? Muft mein koi kisi ko paisa nahi deta.",
        audioText: "Pehli nishani: Ghair mamooli inaam ka lalach. Agar aapne lottery ka form nahi bhara to inaam nikalna na-mumkin hai."
      },
      {
        id: "pin",
        step: 2,
        title: "Khufia PIN Mangna",
        tag: "Sakht Mana",
        description: "Bank ka branch manager ya governor bhi phone ya SMS par ATM PIN ya OTP nahi maang sakta. Ye maangna 100% fraud hai.",
        audioText: "Doosri nishani: Khufia PIN mangna. ATM PIN sirf machine mein enter karte hain, kisi insaan ya website ko nahi dete."
      },
      {
        id: "jaldi",
        step: 3,
        title: "Jaldbazi aur Darr Paida Karna",
        tag: "Dabaao",
        description: "'Warna abhi cancel ho jayega' keh kar wo chahte hain ke aap sochain na aur ghabrahat mein foran ghalti kar bethein.",
        audioText: "Teesri nishani: Jaldbazi machana. Fraud hamesha jaldi machate hain taake aap kisi bachay ya dost se mashwara na kar sakein."
      },
      {
        id: "link",
        step: 4,
        title: "Naqli Web Link (Fake URL)",
        tag: "Mashkook",
        description: "Asli sarkari websites hamesha .gov.pk par khatam hoti hain. bit.ly ya ajeeb naam walay link hamesha choron ke banaye hotay hain.",
        audioText: "Chouthi nishani: Mashkook link. Kisi bhi anjanay link par click karne se mobile ka data chori ho sakta hai."
      }
    ]
  },

  urdu: {
    title: "احساس اسکیم کے نام پر جعلی انعامی فراڈ",
    sender: "+92 300 0928371",
    senderStatus: "غیر تصدیق شدہ رابطہ",
    simInfo: "واٹس ایپ • ۱۰:۱۴ صبح",
    rawMessage: {
      greeting: "مبارک ہو! آپ کا احساس اسکیم میں",
      highlightAmount: "۵۰،۰۰۰ روپے انعام",
      bodyText: "نکلا ہے! ابھی فوری طور پر اس لنک پر کلک کر کے بینک اکاؤنٹ اور",
      highlightPin: "اے ٹی ایم پن (PIN) درج کریں",
      highlightUrgency: "ورنہ انعام منسوخ کر دیا جائے گا:",
      fakeLink: "http://bit.ly/ehsaas-inam-claim-2026",
      linkText: "یہاں کلک کر کے دیکھیں (محفوظ ٹیسٹ)"
    },
    redFlags: [
      {
        id: "lalach",
        step: 1,
        title: "غیر معمولی انعام کا لالچ",
        tag: "خطرہ",
        description: "جب آپ نے کسی اسکیم میں حصہ نہیں لیا، تو ۵۰ ہزار کیسے نکل آئے؟ مفت میں کوئی رقم نہیں دیتا۔",
        audioText: "پہلی نشانی: غیر معمولی انعام کا لالچ۔ اگر آپ نے لاٹری کا فارم نہیں بھرا تو انعام ملنا ناممکن ہے۔"
      },
      {
        id: "pin",
        step: 2,
        title: "خفیہ پاس ورڈ / پن مانگنا",
        tag: "سخت منع",
        description: "بینک کا مینیجر بھی فون یا ایس ایم ایس پر اے ٹی ایم پن یا او ٹی پی نہیں مانگ سکتا۔ یہ مانگنا خالصتاً فراڈ ہے۔",
        audioText: "دوسری نشانی: خفیہ پن مانگنا۔ اے ٹی ایم پن صرف مشین میں درج کیا جاتا ہے، کسی کو بتایا نہیں جاتا۔"
      },
      {
        id: "jaldi",
        step: 3,
        title: "جلد بازی اور خوف پھیلانا",
        tag: "دباؤ",
        description: "'ورنہ منسوخ ہو جائے گا' کہہ کر وہ چاہتے ہیں کہ آپ گھبراہٹ میں آ کر سوچنے کا وقت نہ پائیں۔",
        audioText: "تیسری نشانی: جلد بازی مچانا۔ جعل ساز ہمیشہ جلدی مچاتے ہیں تاکہ آپ کسی سے مشورہ نہ کر سکیں۔"
      },
      {
        id: "link",
        step: 4,
        title: "جعلی ویب لنک",
        tag: "مشکوک",
        description: "اصلی سرکاری ویب سائٹس ہمیشہ gov.pk پر ختم ہوتی ہیں۔ bit.ly یا عجیب لنکس ہمیشہ دھوکہ دہی کے لیے بنائے جاتے ہیں۔",
        audioText: "چوتھی نشانی: مشکوک لنک۔ کسی انجانے لنک پر کلک کرنے سے موبائل کا ڈیٹا چوری ہو سکتا ہے۔"
      }
    ]
  },

  en: {
    title: "Fake Government Scheme Prize Scam",
    sender: "+92 300 0928371",
    senderStatus: "Unverified Number",
    simInfo: "WhatsApp • 10:14 AM",
    rawMessage: {
      greeting: "Congratulations! You have won a cash prize of",
      highlightAmount: "PKR 50,000",
      bodyText: "in the scheme. Click this link immediately, enter your account number and",
      highlightPin: "enter your ATM PIN",
      highlightUrgency: "or your prize will be cancelled:",
      fakeLink: "http://bit.ly/ehsaas-inam-claim-2026",
      linkText: "Click here to test (100% Safe Sandbox)"
    },
    redFlags: [
      {
        id: "lalach",
        step: 1,
        title: "Unsolicited Prize Lure",
        tag: "Danger",
        description: "If you never entered a raffle or scheme, you cannot suddenly win. Legitimate institutions do not hand out free cash.",
        audioText: "First red flag: The lure of unexpected prizes. If you did not enter a lottery, you cannot win one."
      },
      {
        id: "pin",
        step: 2,
        title: "Demanding Confidential PIN",
        tag: "Strictly Prohibited",
        description: "Not even a bank branch manager is authorized to ask for your ATM PIN or OTP. Any such request is a confirmed scam.",
        audioText: "Second red flag: Requesting confidential PINs. Your ATM PIN must only be entered at trusted bank hardware."
      },
      {
        id: "jaldi",
        step: 3,
        title: "Artificial Urgency & Pressure",
        tag: "High Pressure",
        description: "Phrases like 'Act now or it expires' are designed to trigger panic and prevent you from consulting family.",
        audioText: "Third red flag: Artificial pressure. Scammers hurry you so that you don't take time to verify with your children."
      },
      {
        id: "link",
        step: 4,
        title: "Suspicious / Fake Web Link",
        tag: "Suspicious",
        description: "Official Pakistani government websites strictly end with .gov.pk. Shortened URLs like bit.ly are red flags.",
        audioText: "Fourth red flag: Suspicious URL. Clicking unknown shortened links can compromise your phone security."
      }
    ]
  }
};

export const SOLO_SCENARIOS_DATA = {
  roman: [
    {
      id: "solo-1",
      scenarioNum: 1,
      category: "Bank SMS Alert",
      sender: "HBL-Alert",
      simInfo: "SIM 1 • 02:45 PM",
      senderNumber: "+92 345 0098112",
      senderStatus: "Ghair-Tasdeeq Shuda Number",
      isScam: true,
      message: "“Moaziz Sarif! Aapka Bank Account mashkook transaction ki waja se 24 ghante mein block kiya ja raha hai. Account bahal rakhne ke liye abhi call karein: 0345-0098112 ya apna CNIC aur OTP verify karein.”",
      audioText: "Sawal number aik: SMS aya hai ke aapka bank account 24 ghante mein block kiya ja raha hai. Fauran call karein aur OTP batayein. Faisla kijiye: Mehfooz hai ya dhoka?",
      hint: "Asli Bank hamesha official 4-digit shortcode se SMS bhejta hai, aam 11-digit mobile number se nahi! Aur bank kabhi phone par OTP nahi maangta.",
      correctChoice: "scam",
      feedback: {
        scamTitle: "Shabash! Zabardast Pehchan!",
        scamDesc: "Aap bilkul sahi hain! Asli bank kabhi bhi aam mobile number se 'Account Block' ki dhamki nahi deta aur na hi OTP maangta hai.",
        safeTitle: "Zara Thehrein! Ye Dhoka Tha",
        safeDesc: "Ye message bilkul jaali hai. Asli bank hamesha official UAN se baat karta hai aur OTP maangna bank rules ke sakht khilaf hai.",
        redFlags: ["Aam mobile number (0345...)", "Account block ka khauf", "OTP aur CNIC ka mutalba"]
      }
    },
    {
      id: "solo-2",
      scenarioNum: 2,
      category: "WhatsApp Lottery Trap",
      sender: "Jeeto Pakistan Official",
      simInfo: "WhatsApp • 11:20 AM",
      senderNumber: "+92 312 8847192",
      senderStatus: "Ghair Mehfooz Contact",
      isScam: true,
      message: "“Mubarak ho! Fahad Mustafa show se aapka 10 tola sona aur Suzuki Alto car nikli hai. Car receive karne ke liye Rs. 2,500 delivery tax is EasyPaisa number par send karein aur receipt WhatsApp karein.”",
      audioText: "Sawal number do: WhatsApp par message aya hai ke aapki car aur sona nikla hai, sirf 2500 delivery tax bhejein. Kya ye mehfooz hai ya dhoka?",
      hint: "Asli inaam lene ke liye pehle koi advance fees ya EasyPaisa nahi mangta. Ye 'Advance Fee Scam' hai jo lakhoon logon ko loot chuka hai.",
      correctChoice: "scam",
      feedback: {
        scamTitle: "Wah! Fraud Pakar Liya!",
        scamDesc: "Inaam ke naam par advance tax mangna Pakistan mein sab se aam fraud hai. Kisi ko EasyPaisa ya JazzCash na bhejein.",
        safeTitle: "Hoshiyar! Ye Paka Fraud Hai",
        safeDesc: "Koi bhi TV show WhatsApp par car jeetne ka keh kar advance delivery tax nahi mangta. Ye EasyPaisa account foran block karwana chahiye.",
        redFlags: ["Muft inaam ka lalach", "Advance delivery tax mutalba", "Personal EasyPaisa transfer"]
      }
    },
    {
      id: "solo-3",
      scenarioNum: 3,
      category: "Asli Bank Alert (Legitimate)",
      sender: "MEEZAN BANK",
      simInfo: "Official 8444 • 06:12 PM",
      senderNumber: "8444 (Official Short Code)",
      senderStatus: "Tasdeeq Shuda Bank Shortcode",
      isScam: false,
      message: "“Dear Customer, Debit Card ending 5419 was used for PKR 1,850 at PSO FUEL STATION on 31-Oct 18:11. Available Balance: PKR 14,200. If NOT done by you, please call Meezan Helpline 111-331-331 immediately.”",
      audioText: "Sawal number teen: SMS aya hai ke aapke card se petrol pump par 1850 rupay ki payment hui hai. Koi link ya OTP nahi maanga gaya. Kya ye mehfooz bank alert hai ya dhoka?",
      hint: "Ghor se dekhein: Isme na koi link hai, na OTP maanga gaya hai. Ye official 4-digit code se aaya hua asli kharche ka notification hai.",
      correctChoice: "safe",
      feedback: {
        safeTitle: "Bilkul Durust! Ye Asli Bank Alert Hai",
        safeDesc: "Aapne bilkul theek pehchana! Ye legitimate transaction notification hai. Isme bank ne koi password ya link nahi bheja, sirf kharche ki itla di hai.",
        scamTitle: "Acha Andaza, Lekin Ye Asli Hai!",
        scamDesc: "Ye fraud nahi balke aapke bank ka asli alert hai. Bank sirf bata raha hai ke petrol pump par card use hua. Isme koi link ya OTP nahi manga gaya.",
        redFlags: ["Official 4-digit shortcode", "Sirf transaction ki itla", "Koi mashkook link ya PIN nahi"]
      }
    },
    {
      id: "solo-4",
      scenarioNum: 4,
      category: "Bijli Bill Fake Disconnection",
      sender: "WAPDA-ALERT",
      simInfo: "SMS • 08:30 PM",
      senderNumber: "+92 301 9928341",
      senderStatus: "Ghair-Tasdeeq Shuda",
      isScam: true,
      message: "“Moaziz Sarif! Aapka bijli ka meter pichle mahine ke ghair-ada bill ki waja se aaj raat 9:30 baje kaat diya jayega. Fauran supply bahal rakhne ke liye Bill Officer se WhatsApp karein: http://bit.ly/wapda-bill-pay”",
      audioText: "Sawal number char: Message aya hai ke bijli ka meter aaj raat kat jayega, abhi WhatsApp link par bill officer se rabta karein. Kya ye mehfooz hai ya dhoka?",
      hint: "Bijli companiyan (jaise K-Electric ya LESCO) kabhi aadhi raat ko anjanay WhatsApp link se meter kaatne ki dhamki nahi detein.",
      correctChoice: "scam",
      feedback: {
        scamTitle: "Shabash! Bijli Scam Pakar Liya!",
        scamDesc: "Aap bilkul be-khauf rahe! Ye meter kaatne ki dhamki de kar jaali link khulwate hain jahan se banking password chori hotay hain.",
        safeTitle: "Dhyan Dein! Ye Naqli Alert Tha",
        safeDesc: "WAPDA ya K-Electric kabhi WhatsApp link par payment nahi letay. Bill hamesha bank app ya official consumer number se ada hota hai.",
        redFlags: ["Raat ke waqt disconnection ka khauf", "Fake bit.ly WhatsApp link", "Aam mobile number"]
      }
    },
    {
      id: "solo-5",
      scenarioNum: 5,
      category: "TCS Courier Trap",
      sender: "TCS-Express",
      simInfo: "SMS • 01:15 PM",
      senderNumber: "+92 321 4455667",
      senderStatus: "Unverified Sender",
      isScam: true,
      message: "“Aapka zaroori parcel ghalat address ki waja se TCS warehouse mein ruk gaya hai. Re-delivery schedule karne aur address theek karne ke liye 24 ghante ke andar update karein: http://tcs-track-redelivery.top”",
      audioText: "Sawal number paanch: SMS aya hai ke aapka parcel ruk gaya hai, address update karne ke liye is link par click karein. Faisla kijiye: Mehfooz ya Dhoka?",
      hint: "Agar aapne koi parcel mangwaya hi nahi to kahan se aya? Aur link ka aakhri hissa dekhein: '.top' naqli website hoti hai, asli TCS 'tcsexpress.com' hoti hai.",
      correctChoice: "scam",
      feedback: {
        scamTitle: "Behtareen! Akhri Sawal Bhi Durust!",
        scamDesc: "Aapne naqli web address (.top) aur anjanay parcel ka fraud foran pakar liya. Ab aap full trained hain!",
        safeTitle: "Zara Sochain: Parcel Kahan Se Aya?",
        safeDesc: "Jab aapne koi parcel mangwaya hi nahi, to ruk kaise gaya? Ye link kholne par credit card details maangte hain.",
        redFlags: ["Ghair-mutawaqqa parcel", "Naqli domain (.top)", "Jaldi address update ka bahana"]
      }
    }
  ],

  urdu: [
    {
      id: "solo-1",
      scenarioNum: 1,
      category: "بینک ایس ایم ایس فراڈ",
      sender: "HBL-Alert",
      simInfo: "سم ۱ • ۰۲:۴۵ دوپہر",
      senderNumber: "+92 345 0098112",
      senderStatus: "غیر تصدیق شدہ موبائل نمبر",
      isScam: true,
      message: "“معزز صارف! مشکوک سرگرمی کی وجہ سے آپ کا بینک اکاؤنٹ ۲۴ گھنٹوں میں بند کر دیا جائے گا۔ اکاؤنٹ بحال رکھنے کے لیے فوری کال کریں: 0345-0098112 یا شناختی کارڈ اور او ٹی پی تصدیق کریں۔”",
      audioText: "سوال نمبر ایک: میسج آیا ہے کہ آپ کا بینک اکاؤنٹ بند کیا جا رہا ہے، فوری کال کر کے او ٹی پی بتائیں۔ فیصلہ کریں: یہ محفوظ ہے یا دھوکہ؟",
      hint: "اصلی بینک ہمیشہ چار ہندسوں والے سرکاری کوڈ سے میسج کرتا ہے، عام ۱۱ ہندسوں والے موبائل نمبر سے نہیں۔ اور بینک کبھی او ٹی پی نہیں مانگتا۔",
      correctChoice: "scam",
      feedback: {
        scamTitle: "شاباش! بہترین پہچان!",
        scamDesc: "آپ بالکل درست ہیں! اصلی بینک کبھی عام موبائل نمبر سے اکاؤنٹ بلاک کرنے کی دھمکی نہیں دیتا۔",
        safeTitle: "ذرا ٹھہریں! یہ دھوکہ تھا",
        safeDesc: "یہ پیغام جعلی تھا۔ بینک کے قواعد کے مطابق کبھی فون پر او ٹی پی نہیں مانگا جا سکتا۔",
        redFlags: ["عام موبائل نمبر (0345)", "اکاؤنٹ بلاک کی دھمکی", "او ٹی پی اور شناختی کارڈ کا مطالبہ"]
      }
    },
    {
      id: "solo-2",
      scenarioNum: 2,
      category: "واٹس ایپ لاٹری فراڈ",
      sender: "Jeeto Pakistan Official",
      simInfo: "واٹس ایپ • ۱۱:۲۰ صبح",
      senderNumber: "+92 312 8847192",
      senderStatus: "غیر محفوظ نمبر",
      isScam: true,
      message: "“مبارک ہو! فہد مصطفیٰ شو سے آپ کی آلٹو کار اور سونا نکلا ہے۔ گاڑی وصول کرنے کے لیے ۲۵۰۰ روپے ڈلیوری ٹیکس اس ایزی پیسہ نمبر پر بھیجیں اور رسید دکھائیں۔”",
      audioText: "سوال نمبر دو: واٹس ایپ پر پیغام آیا ہے کہ آپ کی کار نکلی ہے، صرف پچیس سو روپے ٹیکس بھیجیں۔ کیا یہ محفوظ ہے یا دھوکہ؟",
      hint: "اصلی انعام لینے کے لیے کبھی پیشگی رقم یا ایزی پیسہ نہیں مانگا جاتا۔ یہ فراڈ کا عام ہتھکنڈا ہے۔",
      correctChoice: "scam",
      feedback: {
        scamTitle: "واہ! فراڈ کو بروقت پکڑ لیا!",
        scamDesc: "انعام کے نام پر پیشگی فیس مانگنا سب سے بڑا فراڈ ہے۔ کبھی کسی کو ایزی پیسہ نہ بھیجیں۔",
        safeTitle: "ہوشیار! یہ پکا فراڈ ہے",
        safeDesc: "کوئی بھی ٹی وی شو واٹس ایپ پر کار جیتنے کا کہہ کر پیشگی ڈلیوری فیس نہیں مانگتا۔",
        redFlags: ["مفت انعام کا جھانسہ", "پیشگی ڈلیوری فیس کا مطالبہ", "ذاتی ایزی پیسہ اکاؤنٹ"]
      }
    },
    {
      id: "solo-3",
      scenarioNum: 3,
      category: "اصلی بینک الرٹ (محفوظ)",
      sender: "MEEZAN BANK",
      simInfo: "سرکاری شارٹ کوڈ ۸۴۴۴ • ۰۶:۱۲ شام",
      senderNumber: "8444 (Official Short Code)",
      senderStatus: "تصدیق شدہ بینک کوڈ",
      isScam: false,
      message: "“Dear Customer, Debit Card ending 5419 was used for PKR 1,850 at PSO FUEL STATION on 31-Oct 18:11. Available Balance: PKR 14,200. If NOT done by you, please call Meezan Helpline 111-331-331 immediately.”",
      audioText: "سوال نمبر تین: پیغام آیا ہے کہ آپ کے کارڈ سے پٹرول پمپ پر ۱۸۵۰ روپے کی ادائیگی ہوئی ہے۔ کوئی لنک یا پاس ورڈ نہیں مانگا گیا۔ کیا یہ محفوظ ہے یا دھوکہ؟",
      hint: "غور سے دیکھیں: اس میں نہ کوئی لنک ہے، نہ کوئی پاس ورڈ مانگا گیا ہے۔ یہ بینک کا اصلی تصدیقی میسج ہے۔",
      correctChoice: "safe",
      feedback: {
        safeTitle: "بالکل درست! یہ اصلی بینک میسج ہے",
        safeDesc: "آپ نے درست پہچانا! اس میں بینک نے کوئی پن یا لنک نہیں بھیجا، صرف خرچے کی اطلاع دی ہے۔",
        scamTitle: "اچھی کوشش، لیکن یہ اصلی میسج ہے",
        scamDesc: "یہ فراڈ نہیں تھا بلکہ بینک کی طرف سے خرچے کا باقاعدہ نوٹیفکیشن تھا۔",
        redFlags: ["سرکاری ۴ ہندسوں کا کوڈ", "صرف ادائیگی کی اطلاع", "کوئی مشکوک لنک یا پن نہیں"]
      }
    },
    {
      id: "solo-4",
      scenarioNum: 4,
      category: "بجلی کا بل جعلی کٹوتی",
      sender: "WAPDA-ALERT",
      simInfo: "ایس ایم ایس • ۰۸:۳۰ رات",
      senderNumber: "+92 301 9928341",
      senderStatus: "غیر تصدیق شدہ",
      isScam: true,
      message: "“معزز صارف! عدم ادائیگی کی وجہ سے آپ کا بجلی کا میٹر آج رات ۹:۳۰ بجے کاٹ دیا جائے گا۔ بجلی بحال رکھنے کے لیے فوری واٹس ایپ لنک پر بل آفیسر سے رابطہ کریں: http://bit.ly/wapda-bill-pay”",
      audioText: "سوال نمبر چار: میسج آیا ہے کہ بجلی کا میٹر کٹ جائے گا، فوری واٹس ایپ لنک پر رابطہ کریں۔ کیا یہ محفوظ ہے یا دھوکہ؟",
      hint: "بجلی کی کمپنیاں کبھی بھی آدھی رات کو واٹس ایپ لنک پر میٹر کاٹنے کی دھمکی نہیں دیتیں۔",
      correctChoice: "scam",
      feedback: {
        scamTitle: "شاباش! میٹر کٹنے کا فراڈ پکڑ لیا!",
        scamDesc: "آپ بالکل بے خوف رہے! یہ میٹر کاٹنے کی دھمکی دے کر جعلی لنک سے بینکنگ چوری کرتے ہیں۔",
        safeTitle: "دھیان دیں! یہ جعلی نوٹس تھا",
        safeDesc: "واپڈا یا کے الیکٹرک کبھی واٹس ایپ لنک پر بل وصول نہیں کرتے۔",
        redFlags: ["رات کے وقت کٹوتی کا خوف", "جعلی bit.ly لنک", "عام موبائل نمبر"]
      }
    },
    {
      id: "solo-5",
      scenarioNum: 5,
      category: "ٹی سی ایس پارسل کا جھانسہ",
      sender: "TCS-Express",
      simInfo: "ایس ایم ایس • ۰۱:۱۵ دوپہر",
      senderNumber: "+92 321 4455667",
      senderStatus: "غیر مصدقہ نمبر",
      isScam: true,
      message: "“آپ کا ضروری پارسل غلط پتے کی وجہ سے رک گیا ہے۔ پتے کی تصدیق کے لیے ۲۴ گھنٹوں میں اس لنک پر تفصیلات درست کریں: http://tcs-track-redelivery.top”",
      audioText: "سوال نمبر پانچ: پیغام آیا ہے کہ آپ کا پارسل رک گیا ہے، ایڈریس اپ ڈیٹ کرنے کے لیے لنک پر کلک کریں۔ فیصلہ کریں: محفوظ یا دھوکہ؟",
      hint: "جب آپ نے کوئی پارسل منگوایا ہی نہیں، تو رک کیسے گیا؟ اور لنک کے آخر میں .top جعلی ویب سائٹ کا نشان ہے۔",
      correctChoice: "scam",
      feedback: {
        scamTitle: "شاندار! آخری سوال بھی درست!",
        scamDesc: "آپ نے جعلی ویب پتہ (.top) اور غیر متوقع پارسل کا فراڈ فوری پہچان لیا۔",
        safeTitle: "ذرا سوچیں: پارسل کہاں سے آیا؟",
        safeDesc: "جب آپ نے کچھ منگوایا ہی نہیں تھا، تو پارسل کا سوال ہی پیدا نہیں ہوتا۔ یہ کریڈٹ کارڈ چرانے کا حربہ تھا۔",
        redFlags: ["غیر متوقع پارسل", "جعلی ڈومین (.top)", "فوری تفصیلات مانگنا"]
      }
    }
  ],

  en: [
    {
      id: "solo-1",
      scenarioNum: 1,
      category: "Bank Account Block Scam",
      sender: "HBL-Alert",
      simInfo: "SIM 1 • 02:45 PM",
      senderNumber: "+92 345 0098112",
      senderStatus: "Unverified Mobile Number",
      isScam: true,
      message: "“Dear Customer! Your Bank Account is being suspended within 24 hours due to suspicious transactions. To keep it active, call: 0345-0098112 immediately or verify your CNIC and OTP.”",
      audioText: "Question 1: You received an SMS claiming your bank account will be blocked in 24 hours unless you call and verify OTP. Is this Safe or a Scam?",
      hint: "Official banks only send SMS via authorized 4-digit shortcodes, never standard 11-digit mobile numbers! And banks never request your OTP.",
      correctChoice: "scam",
      feedback: {
        scamTitle: "Excellent! You Spotted the Fraud!",
        scamDesc: "You are correct! Genuine banks never threaten immediate account suspension from personal cell numbers or demand your OTP.",
        safeTitle: "Careful! This was a Trap",
        safeDesc: "This was a malicious message. Bank regulations strictly prohibit requesting customer OTPs or passwords.",
        redFlags: ["Standard 11-digit mobile number", "Urgent panic of account suspension", "Demanding confidential OTP and CNIC"]
      }
    },
    {
      id: "solo-2",
      scenarioNum: 2,
      category: "WhatsApp Lottery Advance Fee",
      sender: "Jeeto Pakistan Official",
      simInfo: "WhatsApp • 11:20 AM",
      senderNumber: "+92 312 8847192",
      senderStatus: "Unverified WhatsApp Contact",
      isScam: true,
      message: "“Congratulations! You have won a Suzuki Alto car and gold in the game show. To receive your vehicle, send PKR 2,500 delivery tax to this EasyPaisa number and share the screenshot.”",
      audioText: "Question 2: A WhatsApp message claims you won a car and demands PKR 2,500 advance delivery tax via EasyPaisa. Safe or Scam?",
      hint: "Legitimate lotteries and TV shows never demand advance tax transfers to private EasyPaisa accounts. This is an advance fee trap.",
      correctChoice: "scam",
      feedback: {
        scamTitle: "Spot On! Advance Fee Scam Caught!",
        scamDesc: "Demanding advance fees or tax transfers for prizes is one of the most common cyber frauds in Pakistan.",
        safeTitle: "Warning! This is 100% Fraud",
        safeDesc: "TV game shows never award cars via unsolicited WhatsApp messages or require personal mobile wallet transfers.",
        redFlags: ["Free prize lure", "Advance tax requirement", "Private EasyPaisa transfer request"]
      }
    },
    {
      id: "solo-3",
      scenarioNum: 3,
      category: "Official Bank Transaction Alert",
      sender: "MEEZAN BANK",
      simInfo: "Official Shortcode 8444 • 06:12 PM",
      senderNumber: "8444 (Official Short Code)",
      senderStatus: "Verified Bank Code",
      isScam: false,
      message: "“Dear Customer, Debit Card ending 5419 was used for PKR 1,850 at PSO FUEL STATION on 31-Oct 18:11. Available Balance: PKR 14,200. If NOT done by you, please call Meezan Helpline 111-331-331 immediately.”",
      audioText: "Question 3: An SMS states that PKR 1,850 was charged to your debit card at a fuel station. No link or OTP is requested. Safe or Scam?",
      hint: "Inspect carefully: There is no suspicious link, no demand for password or OTP. It is an authentic notification from a registered 4-digit shortcode.",
      correctChoice: "safe",
      feedback: {
        safeTitle: "Correct! This is a Genuine Bank Alert",
        safeDesc: "You accurately recognized legitimate transaction telemetry. The bank is merely informing you of an expenditure.",
        scamTitle: "Good Caution, But This is Real!",
        scamDesc: "This is a legitimate bank SMS notifying you of a card purchase. Notice the lack of shady links or OTP demands.",
        redFlags: ["Official registered 4-digit code", "Pure transaction receipt", "Zero suspicious URLs or credentials demanded"]
      }
    },
    {
      id: "solo-4",
      scenarioNum: 4,
      category: "Fake Electricity Bill Disconnection",
      sender: "WAPDA-ALERT",
      simInfo: "SMS • 08:30 PM",
      senderNumber: "+92 301 9928341",
      senderStatus: "Unverified Sender",
      isScam: true,
      message: "“Dear Consumer! Your electricity meter will be disconnected tonight at 9:30 PM due to unpaid dues. To prevent disruption, contact the Bill Officer via WhatsApp link immediately: http://bit.ly/wapda-bill-pay”",
      audioText: "Question 4: An SMS threatens meter disconnection tonight at 9:30 PM and asks you to click a WhatsApp link. Safe or Scam?",
      hint: "Power utility providers (like K-Electric or LESCO) never threaten sudden midnight disconnection over unverified WhatsApp links.",
      correctChoice: "scam",
      feedback: {
        scamTitle: "Brilliant! Utility Scam Neutralized!",
        scamDesc: "You remained calm! Scammers induce panic over power disconnections to trick elders into phishing links.",
        safeTitle: "Beware! This is Phishing",
        safeDesc: "Utility companies never collect payments via bit.ly WhatsApp links. Official bills are cleared via bank apps.",
        redFlags: ["Nighttime urgency panic", "Shortened bit.ly URL", "Unregistered mobile phone sender"]
      }
    },
    {
      id: "solo-5",
      scenarioNum: 5,
      category: "Courier Delivery Phishing Link",
      sender: "TCS-Express",
      simInfo: "SMS • 01:15 PM",
      senderNumber: "+92 321 4455667",
      senderStatus: "Unverified Number",
      isScam: true,
      message: "“Your urgent shipment is detained at the TCS depot due to incorrect address information. Update your delivery address within 24 hours: http://tcs-track-redelivery.top”",
      audioText: "Question 5: An SMS claims your delivery parcel is stuck and asks you to update your address on a .top web link. Safe or Scam?",
      hint: "If you didn't order any parcel, how did it arrive? Furthermore, notice the domain ending: '.top' is a rogue domain, not official 'tcsexpress.com'.",
      correctChoice: "scam",
      feedback: {
        scamTitle: "Outstanding! Final Scam Spotted!",
        scamDesc: "You spotted both the rogue domain extension (.top) and unexpected parcel lure. You are fully prepared!",
        safeTitle: "Think Twice: Did you order anything?",
        safeDesc: "If you never ordered a parcel, it cannot be held at a warehouse. This link attempts to steal credit card details.",
        redFlags: ["Unsolicited parcel claim", "Malicious .top top-level domain", "Urgent address update pressure"]
      }
    }
  ]
};

export const PAKISTAN_HELPLINES_DATA = {
  confirmationNote: {
    roman: "Barah-e-karam call karne se pehle idaray ki official website se tasdeeq kar lein.",
    urdu: "براہ کرم رابطہ کرنے سے پہلے متعلقہ ادارے کی سرکاری ویب سائٹ سے نمبر کی تصدیق کر لیں۔",
    en: "Please confirm these contact channels on the official websites before calling."
  },
  roman: [
    {
      name: "FIA NR3C Cyber Crime Wing",
      number: "1991",
      tel: "tel:1991",
      desc: "Online financial fraud, fake banking calls, aur identity theft report karne ke liye official sarkari helpline.",
      badge: "Sarkari FIA NR3C",
      color: "bg-emerald-50 text-emerald-800 border-emerald-200",
      sourceUrl: "https://complaint.fia.gov.pk",
      sourceLabel: "complaint.fia.gov.pk",
      lastChecked: "October 2026"
    },
    {
      name: "State Bank of Pakistan (SBP) Consumer Protection",
      number: "111-727-273 / 1025",
      tel: "tel:111727273",
      desc: "Bank dispute ya fraud report na sunnay par central regulator (SBP) shikayat darj karwayein.",
      badge: "Central Bank SBP",
      color: "bg-blue-50 text-blue-800 border-blue-200",
      sourceUrl: "https://www.sbp.org.pk",
      sourceLabel: "sbp.org.pk",
      lastChecked: "October 2026"
    },
    {
      name: "PTA Anti-Spam Complaint Cell",
      number: "SMS: 9000 / 0800-55055",
      tel: "tel:080055055",
      desc: "Dhokay baaz SIMs, fake lottery SMS, aur spam broadcasts ko block karwane ke liye.",
      badge: "PTA Telecom",
      color: "bg-purple-50 text-purple-800 border-purple-200",
      sourceUrl: "https://www.pta.gov.pk",
      sourceLabel: "pta.gov.pk",
      lastChecked: "October 2026"
    }
  ],

  urdu: [
    {
      name: "ایف آئی اے این آر تھری سی سائبر کرائم",
      number: "1991",
      tel: "tel:1991",
      desc: "آن لائن فراڈ، جعلی بینک کالز اور شناخت چوری کی سرکاری ہنگامی رپورٹنگ۔",
      badge: "سرکاری ایف آئی اے",
      color: "bg-emerald-50 text-emerald-800 border-emerald-200",
      sourceUrl: "https://complaint.fia.gov.pk",
      sourceLabel: "complaint.fia.gov.pk",
      lastChecked: "اکتوبر ۲۰۲۶"
    },
    {
      name: "اسٹیٹ بینک آف پاکستان شکایات و تحفظ",
      number: "111-727-273 / 1025",
      tel: "tel:111727273",
      desc: "اگر بینک فراڈ کے بعد شکایت نہ سنے تو مرکزی ریگولیٹر (SBP) کو رجوع کریں۔",
      badge: "مرکزی بینک",
      color: "bg-blue-50 text-blue-800 border-blue-200",
      sourceUrl: "https://www.sbp.org.pk",
      sourceLabel: "sbp.org.pk",
      lastChecked: "اکتوبر ۲۰۲۶"
    },
    {
      name: "پی ٹی اے اینٹی اسپام و غیر قانونی سم سیل",
      number: "SMS: 9000 / 0800-55055",
      tel: "tel:080055055",
      desc: "جعلی انعامی پیغامات اور فراڈیوں کی سم بلاک کروانے کا باضابطہ چینل۔",
      badge: "پی ٹی اے",
      color: "bg-purple-50 text-purple-800 border-purple-200",
      sourceUrl: "https://www.pta.gov.pk",
      sourceLabel: "pta.gov.pk",
      lastChecked: "اکتوبر ۲۰۲۶"
    }
  ],

  en: [
    {
      name: "FIA NR3C Cyber Crime Wing",
      number: "1991",
      tel: "tel:1991",
      desc: "Official federal helpline for reporting online fraud, unauthorized transfers, and social engineering.",
      badge: "Govt FIA NR3C",
      color: "bg-emerald-50 text-emerald-800 border-emerald-200",
      sourceUrl: "https://complaint.fia.gov.pk",
      sourceLabel: "complaint.fia.gov.pk",
      lastChecked: "October 2026"
    },
    {
      name: "State Bank of Pakistan (SBP) Consumer Protection",
      number: "111-727-273 / 1025",
      tel: "tel:111727273",
      desc: "Escalate unresolved bank disputes and unauthorized transactions to the banking ombudsman and central regulator.",
      badge: "State Bank Regulatory",
      color: "bg-blue-50 text-blue-800 border-blue-200",
      sourceUrl: "https://www.sbp.org.pk",
      sourceLabel: "sbp.org.pk",
      lastChecked: "October 2026"
    },
    {
      name: "PTA Anti-Spam / Illegal Numbers",
      number: "SMS: 9000 / 0800-55055",
      tel: "tel:080055055",
      desc: "Report and blacklist fraudulent SIM cards and deceptive SMS lottery campaigns directly to PTA.",
      badge: "PTA Telecom",
      color: "bg-purple-50 text-purple-800 border-purple-200",
      sourceUrl: "https://www.pta.gov.pk",
      sourceLabel: "pta.gov.pk",
      lastChecked: "October 2026"
    }
  ]
};

export const ELDER_GOLDEN_RULES_DATA = {
  roman: [
    {
      id: 1,
      title: "OTP aur PIN Kisi Ko Na Batayein",
      desc: "Chahe call karne wala khud ko bank officer kahe—OTP sirf chor maangte hain!"
    },
    {
      id: 2,
      title: "Pehle Rukain aur Saans Lain",
      desc: "Jaldbazi mein faisla na karein. Thora ruk kar ghar mein kisi bachay se zaroor poochein."
    },
    {
      id: 3,
      title: "Anjanay Link Par Ungli Na Lagayein",
      desc: "SMS ya WhatsApp par aaye neelay links ko bina tasdeeq kiye kabhi click mat karein."
    },
    {
      id: 4,
      title: "Inaam ke Liye Paise Mat Bhejein",
      desc: "Asli inaam ke liye kabhi pehle advance tax ya EasyPaisa nahi bhejna parta."
    }
  ],

  urdu: [
    {
      id: 1,
      title: "او ٹی پی اور پن کسی کو نہ بتائیں",
      desc: "چاہے فون کرنے والا خود کو بینک مینیجر کہے—او ٹی پی صرف چور مانگتے ہیں!"
    },
    {
      id: 2,
      title: "پہلے رکیں اور سانس لیں",
      desc: "جلد بازی میں فیصلہ مت کریں۔ پہلے گھر میں بچوں یا قابل اعتماد فرد سے مشورہ کریں۔"
    },
    {
      id: 3,
      title: "انجانے لنک پر کلک نہ کریں",
      desc: "میسج میں آئے نیلے رنگ کے لنکس کو بغیر تصدیق کے کبھی مت کھولیں۔"
    },
    {
      id: 4,
      title: "انعام حاصل کرنے کے لیے پیسے نہ بھیجیں",
      desc: "اصلی انعام کے لیے کبھی پیشگی ٹیکس یا رقم نہیں بھیجنی پڑتی۔"
    }
  ],

  en: [
    {
      id: 1,
      title: "Never Share OTP or ATM PIN",
      desc: "Even if a caller claims to be a bank manager, never disclose your one-time passwords."
    },
    {
      id: 2,
      title: "Pause and Take a Breath",
      desc: "Do not rush under pressure. Always verify with your family or official bank branches."
    },
    {
      id: 3,
      title: "Avoid Unverified Web Links",
      desc: "Do not click shortened or strange links received via SMS or WhatsApp messages."
    },
    {
      id: 4,
      title: "Never Pay Upfront for Prizes",
      desc: "Legitimate lotteries or promotions will never demand advance delivery fees via mobile wallets."
    }
  ]
};
