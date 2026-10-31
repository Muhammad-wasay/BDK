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
    "id": "solo-1",
    "scenarioNum": 1,
    "category": "Bank Threat Alert",
    "sender": "HBL-Alert",
    "simInfo": "SIM 1 • 02:45 PM",
    "senderNumber": "+92 345 0098112",
    "senderStatus": "Ghair-Tasdeeq Shuda Number",
    "isScam": true,
    "message": "“Moaziz Sarif! Aapka Bank Account mashkook transaction ki waja se 24 ghante mein block kiya ja raha hai. Account bahal rakhne ke liye abhi call karein: 0345-0098112 ya apna CNIC aur OTP verify karein.”",
    "audioText": "Sawal number aik: SMS aya hai ke aapka bank account block kiya ja raha hai. Fauran is mobile number par call karein aur OTP batayein. Faisla kijiye: Mehfooz hai ya dhoka?",
    "hint": "Asli bank hamesha official 4-digit shortcode se SMS bhejta hai, aam 11-digit mobile number se nahi! Aur bank kabhi phone par OTP nahi maangta.",
    "correctChoice": "scam",
    "feedback": {
      "scamTitle": "Shabash! Zabardast Pehchan!",
      "scamDesc": "Aap bilkul sahi hain! Asli bank kabhi bhi aam mobile number se 'Account Block' ki dhamki nahi deta aur na hi OTP maangta hai.",
      "safeTitle": "Zara Thehrein! Ye Dhoka Tha",
      "safeDesc": "Ye message bilkul jaali hai. Asli bank hamesha official UAN se baat karta hai aur OTP maangna bank rules ke sakht khilaf hai.",
      "redFlags": [
        "Aam mobile number (0345...)",
        "Account block ka khauf",
        "OTP aur CNIC ka mutalba"
      ],
      "whatToDoNext": "SMS foran delete karein. Agar koi shak ho to apne ATM card ke peeche likhi bank helpline par call karein."
    },
    "teachBack": {
      "question": "Ye message fraud kyun hai? Sahi waja chunein:",
      "options": [
        {
          "id": "opt-1",
          "text": "Asli bank aam 11-digit mobile number se dhamki nahi deta aur na OTP maangta hai",
          "isCorrect": true,
          "explanation": "Bilkul durust! Bank hamesha branded shortcode se SMS karta hai aur OTP kabhi nahi maangta."
        },
        {
          "id": "opt-2",
          "text": "Kyunke SMS mein bank ka naam nahi likha",
          "isCorrect": false,
          "explanation": "Scammers aksar HBL ya doosray bankon ka naam istemal karte hain, is liye sender number dekhna zaroori hai."
        },
        {
          "id": "opt-3",
          "text": "Kyunke 24 ghante ka waqt diya gaya hai",
          "isCorrect": false,
          "explanation": "Jaldi machana ek nishani zaroor hai, lekin sab se barra fraud nishan OTP maangna aur mobile number hai."
        }
      ]
    }
  },
  {
    "id": "solo-2",
    "scenarioNum": 2,
    "category": "Ehsaas / BISP Fraud",
    "sender": "Benazir Support",
    "simInfo": "WhatsApp • 11:20 AM",
    "senderNumber": "+92 301 7782194",
    "senderStatus": "Ghair-Tasdeeq Shuda Contact",
    "isScam": true,
    "message": "“Mubarak Ho! Aapka Benazir Kafalat Scheme mein Rs. 45,000 ka imdad fund manzoor ho gaya hai. Abhi claim karne ke liye is link par apna CNIC aur JazzCash PIN darj karein: bit.ly/bisp-fund-2026”",
    "audioText": "Sawal number do: WhatsApp par message aaya hai ke aapka 45,000 rupaye ka imdad fund nikla hai, link par click kar ke PIN darj karein. Faisla kijiye: Mehfooz hai ya dhoka?",
    "hint": "Sarkari BISP/Ehsaas scheme ka official code sirf 8171 hai! Kisi anjanay link par apna secret wallet PIN darj karna 100% fraud hai.",
    "correctChoice": "scam",
    "feedback": {
      "scamTitle": "Aapne Dhoka Pakar Liya!",
      "scamDesc": "Bohat khoob! BISP ya koi bhi sarkari idara bit.ly link bhej kar aapka secret PIN nahi maangta.",
      "safeTitle": "Hoshiyar Rahiye! Ye Fraud Hai",
      "safeDesc": "Muft paison ka lalach de kar chor aapke wallet ka PIN chori karna chahte hain.",
      "redFlags": [
        "Ghair-tasdeeq shuda WhatsApp number",
        "Ghair-mamooli imdad ka lalach",
        "Secret wallet PIN maangna",
        "bit.ly naqli web link"
      ],
      "whatToDoNext": "Sender ko foran block karein. BISP ki maloomat sirf official 8171 SMS se check karein."
    },
    "teachBack": {
      "question": "BISP ke is message mein sab se bara khatra kya hai?",
      "options": [
        {
          "id": "opt-1",
          "text": "Aap se aapka secret wallet PIN aur CNIC bit.ly link par maanga gaya",
          "isCorrect": true,
          "explanation": "Shabash! Secret PIN darj karne se aapke wallet ke saaray paise foran nikal jayenge."
        },
        {
          "id": "opt-2",
          "text": "Imdad ki raqam 45,000 bohat kam hai",
          "isCorrect": false,
          "explanation": "Raqam kam ya zyada hona nahi, balke muft lalach aur PIN maangna fraud ki asal nishani hai."
        },
        {
          "id": "opt-3",
          "text": "Ye WhatsApp par aaya hai",
          "isCorrect": false,
          "explanation": "WhatsApp par aana mashkook hai, lekin asal khatra PIN chori karne ka link hai."
        }
      ]
    }
  },
  {
    "id": "solo-3",
    "scenarioNum": 3,
    "category": "Asli Bank Notification",
    "sender": "MEEZAN BANK",
    "simInfo": "SIM 1 • 06:12 PM",
    "senderNumber": "Official Bank Channel",
    "senderStatus": "Tasdeeq Shuda Bank Channel",
    "isScam": false,
    "message": "“Moaziz Sarif! Aapke debit card ending *4102 se Rs. 2,450 ki transaction Imtiaz Super Market par kamyab rahi. Baqaya balance Rs. 43,120. Agar ye aapne nahi kiya to 111-331-331 par call karein.”",
    "audioText": "Sawal number teen: Meezan Bank ka SMS aya hai ke aapke card se 2450 rupaye ki shopping hui hai aur helpline number diya hai. Faisla kijiye: Mehfooz hai ya dhoka?",
    "hint": "Ghaur karein: Is message mein koi link nahi, koi OTP ya PIN nahi maanga gaya, card ke sirf aakhri 4 digits hain, aur official UAN number diya gaya hai.",
    "correctChoice": "safe",
    "feedback": {
      "scamTitle": "Ye Asal Mein Mehfooz Tha!",
      "scamDesc": "Ye Meezan Bank ka asli transaction alert tha jo shopping ke foran baad aata hai. Har message dhoka nahi hota!",
      "safeTitle": "Zabardast! Sahi Faisla!",
      "safeDesc": "Aapne bilkul theek samjha. Ye asli bank raseed hai jismein koi khufia code nahi maanga gaya.",
      "redFlags": [
        "Official branded sender name",
        "Koi link ya button nahi",
        "Koi PIN ya password nahi maanga",
        "Official UAN helpline 111-331-331"
      ],
      "whatToDoNext": "Ise mehfooz samjhein aur record ke liye rakhein. Agar ye khareedari aapne nahi ki to card ke peeche diye number par call karein."
    },
    "teachBack": {
      "question": "Ye bank message mehfooz kyun hai?",
      "options": [
        {
          "id": "opt-1",
          "text": "Ye sirf shopping ki raseed hai, is mein koi OTP, PIN ya mashkook link nahi hai",
          "isCorrect": true,
          "explanation": "Bilkul sahi! Asli bank alert sirf khareedari ki ittela deta hai, sensitive data nahi maangta."
        },
        {
          "id": "opt-2",
          "text": "Kyunke is mein Imtiaz Super Market ka naam likha hai",
          "isCorrect": false,
          "explanation": "Store ka naam fraud messages mein bhi likha ho sakta hai; asli nishan link aur PIN na maangna hai."
        },
        {
          "id": "opt-3",
          "text": "Kyunke is mein baqaya balance Rs. 43,120 likha hai",
          "isCorrect": false,
          "explanation": "Balance likhna aam transaction notification ka hissa hota hai."
        }
      ]
    }
  },
  {
    "id": "solo-4",
    "scenarioNum": 4,
    "category": "Electricity Bill Threat",
    "sender": "WAPDA-ALERT",
    "simInfo": "SIM 2 • 08:30 PM",
    "senderNumber": "+92 308 9123847",
    "senderStatus": "Ghair-Tasdeeq Shuda Mobile Number",
    "isScam": true,
    "message": "“Bijli Sarif Notice: Aapka pichla bill ada nahi hua. Aaj raat 10 baje connection kaat diya jayega. Fauran SDO Afzal ko is number 0308-9123847 par JazzCash karein.”",
    "audioText": "Sawal number char: SMS aya hai ke pichla bill ada nahi hua, raat 10 baje bijli kaat di jayegi, foran officer ko JazzCash karein. Faisla kijiye: Mehfooz hai ya dhoka?",
    "hint": "Bijli companiyan (K-Electric, LESCO waghera) kabhi kisi afsar ke zaati JazzCash par paise nahi mangwateen! Bill hamesha bank counter ya official app se ada hota hai.",
    "correctChoice": "scam",
    "feedback": {
      "scamTitle": "Shabash! Fraud Pakar Liya!",
      "scamDesc": "Aapne bilkul theek pehchana! Bijli ka bill kisi shakhs ke personal mobile wallet par transfer nahi hota.",
      "safeTitle": "Khatra! Ye Fraud Tha",
      "safeDesc": "Raat 10 baje bijli kaatne ka darr dikha kar chor aapse apne personal number par paise mangwa raha tha.",
      "redFlags": [
        "SDO ke personal JazzCash ka mutalba",
        "Raat 10 baje bijli kaatne ki dhamki",
        "Ghair-tasdeeq shuda mobile number"
      ],
      "whatToDoNext": "Apne physical bijli ke bill par consumer number check karein ya bank app mein bill search kar ke status dekhein."
    },
    "teachBack": {
      "question": "Bijli ke is SMS mein fraud ka sab se bara sabot kya hai?",
      "options": [
        {
          "id": "opt-1",
          "text": "Bijli ka bill kisi afsar ke personal JazzCash number par mangwaya ja raha hai",
          "isCorrect": true,
          "explanation": "Durust! Sarkari bills hamesha 13/14-digit consumer number ke zariye bank ya authorized app mein jama hotay hain."
        },
        {
          "id": "opt-2",
          "text": "Bijli kaatne ka waqt raat 10 baje likha hai",
          "isCorrect": false,
          "explanation": "Dhamki darr paida karti hai, magar kisi ke personal account par paise bhejna seedha fraud hai."
        },
        {
          "id": "opt-3",
          "text": "WAPDA-ALERT ka naam likha hai",
          "isCorrect": false,
          "explanation": "Scammers WAPDA ya K-Electric ka naam use karte hain taake log bina socho-samjhe dar jayein."
        }
      ]
    }
  },
  {
    "id": "solo-5",
    "scenarioNum": 5,
    "category": "Fake Courier Parcel",
    "sender": "TCS-Express",
    "simInfo": "SIM 1 • 03:15 PM",
    "senderNumber": "+92 333 4410982",
    "senderStatus": "Ghair-Tasdeeq Shuda Contact",
    "isScam": true,
    "message": "“Aapka parcel pata na-mukammal hone ki wajah se warehouse mein ruk gaya hai. Re-delivery ke liye 48 ghante ke andar Rs. 150 ada karein: tcs-tracking-delivery.cc/pay”",
    "audioText": "Sawal number paanch: Courier company ka SMS aaya hai ke parcel ruk gaya hai, 150 rupaye fees ada karne ke liye link par jayein. Faisla kijiye: Mehfooz hai ya dhoka?",
    "hint": "Pehle sochein: Kya aapne koi parcel mangwaya tha? Aur courier wale pata theek karne ke liye 150 rupaye online ada karne ka link nahi bhejte.",
    "correctChoice": "scam",
    "feedback": {
      "scamTitle": "Aapne Parcel Fraud Pakar Liya!",
      "scamDesc": "Aap bilkul sahi hain! Chhotay se 150 rupaye ka lalach de kar wo aapse card details le kar hazaron rupaye chori karna chahte hain.",
      "safeTitle": "Hoshiyar Rahiye! Ye Phanda Tha",
      "safeDesc": "Fake parcel SMS ka maqsad naqli website par aapke ATM card ka number aur CVV code haasil karna hota hai.",
      "redFlags": [
        "Naqli domain (.cc)",
        "Chhota sa 150 rupaye ka mutalba",
        "Anjana parcel jo aapne nahi mangwaya"
      ],
      "whatToDoNext": "Link par hargiz click na karein. Agar koi parcel waqai aana tha to official TCS helpline 111-123-456 par tracking number puchiye."
    },
    "teachBack": {
      "question": "Scammer sirf Rs. 150 ki choti si raqam kyun maang raha hai?",
      "options": [
        {
          "id": "opt-1",
          "text": "Taake aap shaq na karein aur link par apna ATM card darj kar dein",
          "isCorrect": true,
          "explanation": "Zabardast! Choti raqam dekh kar log ahtiyat chhor dete hain aur card details chor ke paas chali jaati hain."
        },
        {
          "id": "opt-2",
          "text": "Kyunke courier redelivery fees waqai 150 rupaye hoti hai",
          "isCorrect": false,
          "explanation": "Courier wale aam tor par cash on delivery letay hain ya phone par rabta karte hain, naqli .cc link nahi bhejte."
        },
        {
          "id": "opt-3",
          "text": "Kyunke warehouse ka kharcha kam hota hai",
          "isCorrect": false,
          "explanation": "Ye scammer ka banaya hua bahana hota hai."
        }
      ]
    }
  },
  {
    "id": "solo-6",
    "scenarioNum": 6,
    "category": "OTP Theft Scam",
    "sender": "Anjana Contact",
    "simInfo": "WhatsApp • 04:50 PM",
    "senderNumber": "+92 321 8892144",
    "senderStatus": "Ghair-Tasdeeq Shuda Contact",
    "isScam": true,
    "message": "“Salam bhai, ghalti se mera EasyPaisa verification code aapke number par aa gaya hai. Meherbani karke wo 4-digit code yahan SMS kar dein, beemar maa ki dawai ke paise phans gaye hain!”",
    "audioText": "Sawal number che: Koi anjana shakhs keh raha hai ke ghalti se uska code aapke number par aa gaya hai, wo code bhej dein. Faisla kijiye: Mehfooz hai ya dhoka?",
    "hint": "Aapke number par jo code aata hai, wo AAPKE account ka OTP hota hai! Ghalti se kisi aur ka OTP aapko kabhi nahi aa sakta.",
    "correctChoice": "scam",
    "feedback": {
      "scamTitle": "Shabash! Bohat Bara Fraud Nakaam Banaya!",
      "scamDesc": "Aapne bilkul sahi pehchana! Scammer aapke wallet mein login karne ki koshish kar raha tha aur code maang raha tha.",
      "safeTitle": "Bari Ghalatfehmi! Ye 100% Dhoka Hai",
      "safeDesc": "Beemar maa ka bahana jazbaati dabaao ke liye hai. Agar aapne code diya to aapka pura account khali ho jata.",
      "redFlags": [
        "Aapke phone par aaya hua OTP maangna",
        "Jazbaati kahani (beemar maa ki dawai)",
        "Ghair-tasdeeq shuda anjana number"
      ],
      "whatToDoNext": "Code hargiz na batayein. Fauran message delete karein aur rabta block karein."
    },
    "teachBack": {
      "question": "Agar kisi anjanay ko apna SMS verification code (OTP) bata diya jaye to kya hoga?",
      "options": [
        {
          "id": "opt-1",
          "text": "Chor aapke EasyPaisa ya WhatsApp account par qabza kar ke saaray paise nikaal lega",
          "isCorrect": true,
          "explanation": "Durust! OTP dar-asal aapke account ki chaabi hai. Chaabi kisi ko nahi di jaati."
        },
        {
          "id": "opt-2",
          "text": "Uski beemar maa ki dawai khareedi ja sakegi",
          "isCorrect": false,
          "explanation": "Ye sirf jhooti hamdardi haasil karne ka fraud hathkanda hai."
        },
        {
          "id": "opt-3",
          "text": "Kuch nahi hoga kyunke wo sirf 4 digit ka aam number hai",
          "isCorrect": false,
          "explanation": "OTP aam number nahi hota, ye login aur transaction ki aakhri verification chaabi hota hai."
        }
      ]
    }
  },
  {
    "id": "solo-7",
    "scenarioNum": 7,
    "category": "Gas Bill Threat",
    "sender": "SSGC-Notice",
    "simInfo": "SIM 2 • 01:20 PM",
    "senderNumber": "+92 312 6543210",
    "senderStatus": "Ghair-Tasdeeq Shuda Contact",
    "isScam": true,
    "message": "“SSGC Consumer Alert: Gas meter inspection jurmana Rs. 6,800 baqaya hai. Meter katne se bachne ke liye foran ssgc-bill-clearance.cc par ja kar card se payment karein.”",
    "audioText": "Sawal number saat: Gas meter ka 6800 jurmana baqaya hone aur meter katne ka SMS aya hai. Link par card se adayegi ka kaha gaya hai. Faisla kijiye: Mehfooz hai ya dhoka?",
    "hint": "Sui gas ka official domain .cc par kabhi nahi hota, balke .com.pk hota hai! Aur meter jurmana physical bill par darj ho kar aata hai.",
    "correctChoice": "scam",
    "feedback": {
      "scamTitle": "Zabardast! Gas Scam Pakar Liya!",
      "scamDesc": "Aap bilkul sahi hain! Naqli web link .cc par bhej kar card chori karne ki koshish ki ja rahi thi.",
      "safeTitle": "Hoshiyar! Ye Naqli Notice Hai",
      "safeDesc": "Sarkari gas companiyan anjanay web links se card payment nahi mangwateen.",
      "redFlags": [
        "Naqli domain link (.cc)",
        "Meter katne ka achanak darr",
        "Aam mobile number se alert"
      ],
      "whatToDoNext": "Link open na karein. Apne gas bill par diye consumer number se bank app ya bill counter par check karein."
    },
    "teachBack": {
      "question": "Is notice mein gas meter katne se kyu nahi darna chahiye?",
      "options": [
        {
          "id": "opt-1",
          "text": "Kyunke sarkari gas company .cc web link par card payment nahi mangwati",
          "isCorrect": true,
          "explanation": "Sahi pehchana! Tamam sarkari idaray consumer number ke tehat certified channels se bill letay hain."
        },
        {
          "id": "opt-2",
          "text": "Kyunke gas kabhi band nahi ho sakti",
          "isCorrect": false,
          "explanation": "Gas band ho sakti hai magar official notice aur bill ke zariye, naqli SMS link ke zariye nahi."
        },
        {
          "id": "opt-3",
          "text": "Kyunke jurmana 6,800 rupaye bohat zyada hai",
          "isCorrect": false,
          "explanation": "Asal nishani naqli domain aur payment ka tareeqa-e-kaar hai."
        }
      ]
    }
  },
  {
    "id": "solo-8",
    "scenarioNum": 8,
    "category": "Emergency Impersonation",
    "sender": "Unknown Number",
    "simInfo": "WhatsApp • 09:40 PM",
    "senderNumber": "+92 334 5678901",
    "senderStatus": "Ghair-Tasdeeq Shuda Number",
    "isScam": true,
    "message": "“Salam Chacha ji, main Asad bol raha hoon. Hospital mein dost ka shadeed accident ho gaya hai, foran Rs. 15,000 is EasyPaisa par bhej dein, Abu ko abhi mat batayiye ga!”",
    "audioText": "Sawal number aath: Naye number se bhatijay Asad ka message aya hai ke dost ka accident ho gaya hai, foran 15,000 rupaye bhej dein aur kisi ko na batayein. Faisla kijiye: Mehfooz hai ya dhoka?",
    "hint": "Fraud ka aam tareeqa: 'Kisi ko mat batana' aur achanak hospital emergency ka darr. Hamesha pehle rishtedaar ke asal number par call kar ke tasdeeq karein!",
    "correctChoice": "scam",
    "feedback": {
      "scamTitle": "Aapne Jazbaati Trap Nakaam Banaya!",
      "scamDesc": "Aap bilkul sahi hain! Scammers rishtedaaron ke naam par darr aur ghabrahat phaila kar paise lootte hain.",
      "safeTitle": "Zara Rukein! Ye Dhoka Ho Sakta Hai",
      "safeDesc": "Jab bhi koi kahe 'Abu ko mat batana' to samjh lein ke mashkook baat hai. Pehle ghar walon se puchiye.",
      "redFlags": [
        "Anjanay number se rishtedaar hone ka daawa",
        "'Kisi ko mat batana' ki shart",
        "Emergency mein foran EasyPaisa ka mutalba"
      ],
      "whatToDoNext": "Paise hargiz na bhein. Asad ke purane asal number par call karein ya uske Abu se rabta karein."
    },
    "teachBack": {
      "question": "Jab koi anjana number rishtedaar ban kar emergency mein paise maange to pehla qadam kya hona chahiye?",
      "options": [
        {
          "id": "opt-1",
          "text": "Us rishtedaar ke pehle se mehfooz shuda asal number par call kar ke tasdeeq karein",
          "isCorrect": true,
          "explanation": "Behtareen! 99% aukaat mein rishtedaar bilkul theek apne ghar hota hai aur number chor ka hota hai."
        },
        {
          "id": "opt-2",
          "text": "Foran 15,000 rupaye EasyPaisa kar dein taake der na ho",
          "isCorrect": false,
          "explanation": "Aisa karne se aapke paise chor ke paas chale jayenge jo kabhi wapas nahi milenge."
        },
        {
          "id": "opt-3",
          "text": "SMS ka reply kar ke mazeed tafseelat puchein",
          "isCorrect": false,
          "explanation": "Scammer SMS par mazeed jhooti kahaniyan banata hai; asal number par direct call karna zaroori hai."
        }
      ]
    }
  },
  {
    "id": "solo-9",
    "scenarioNum": 9,
    "category": "Part-Time Job Scam",
    "sender": "International Recruitment",
    "simInfo": "WhatsApp • 10:05 AM",
    "senderNumber": "+44 7911 123456",
    "senderStatus": "Ghair-Mulki Ghair-Tasdeeq Number (+44)",
    "isScam": true,
    "message": "“Assalam-o-Alaikum! Ghar bethe YouTube aur TikTok videos like kar ke rozana Rs. 4,000 se 9,000 kamayein. Koi taleem ya tajruba zaroori nahi. Free registration ke liye Telegram link join karein.”",
    "audioText": "Sawal number nau: Bartania ke number se job offer aayi hai ke rozana video like kar ke hazaron rupaye kamayein. Faisla kijiye: Mehfooz hai ya dhoka?",
    "hint": "Sirf video like karne ke 9,000 rupaye rozana koi nahi deta! Ye 'Task Scam' hota hai jo shuru mein 200 rupaye de kar baad mein lakhon rupaye maangta hai.",
    "correctChoice": "scam",
    "feedback": {
      "scamTitle": "Shabash! Online Job Trap Pakar Liya!",
      "scamDesc": "Aapne bilkul theek pehchana! Ghair-mulki numbers se aane wali ye aasan job offers bilkul farzi hoti hain.",
      "safeTitle": "Hoshiyar Rahiye! Ye Task Scam Hai",
      "safeDesc": "Muft ke paise ka lalach de kar ye aapse shuru mein task karwate hain aur phir security deposit ke naam par loot lete hain.",
      "redFlags": [
        "Ghair-mulki (+44 UK) anjana number",
        "Bina kisi mehnat ke 9,000 rozana ka jhoota waada",
        "Telegram group join karne ka link"
      ],
      "whatToDoNext": "WhatsApp par foran 'Report & Block' karein. Anjanay task groups mein shamil na hon."
    },
    "teachBack": {
      "question": "Online 'video like kar ke rozana hazaron kamayein' schemes ka asal maqsad kya hota hai?",
      "options": [
        {
          "id": "opt-1",
          "text": "Lalach de kar shamil karna aur baad mein security deposit ke naam par paise hathiyana",
          "isCorrect": true,
          "explanation": "Durust! Isay 'Task-Based Pig Butchering' scam kehte hain jo poori dunya mein logon ko loot raha hai."
        },
        {
          "id": "opt-2",
          "text": "Pakistan mein berozgari khatam karna",
          "isCorrect": false,
          "explanation": "Ye professional cyber criminal giroh hain jo kisi ka bhala nahi karte."
        },
        {
          "id": "opt-3",
          "text": "YouTube ke likes mein izafa karna",
          "isCorrect": false,
          "explanation": "Likes sirf dhoka dene ka ek bahana hota hai."
        }
      ]
    }
  },
  {
    "id": "solo-10",
    "scenarioNum": 10,
    "category": "Overpayment Refund Trap",
    "sender": "Anjana Contact",
    "simInfo": "WhatsApp • 05:25 PM",
    "senderNumber": "+92 306 7891234",
    "senderStatus": "Ghair-Tasdeeq Shuda Contact",
    "isScam": true,
    "message": "“Bhai ghalti se maine aapke EasyPaisa account par Rs. 25,000 transfer kar diye hain! Ye screenshot dekhein. Meri family pareshan hai, meherbani karke Rs. 23,000 wapas bhej dein, 2000 aap rakh lein.”",
    "audioText": "Sawal number das: Kisi ne screenshot bhej kar kaha hai ke ghalti se 25,000 bhej diye hain, 23,000 wapas kar dein aur 2000 aap rakh lein. Faisla kijiye: Mehfooz hai ya dhoka?",
    "hint": "Screenshots computer par do minute mein jaali banaye ja saktay hain! Hamesha pehle apni EasyPaisa app khol kar apna asal balance aur transaction history dekhein.",
    "correctChoice": "scam",
    "feedback": {
      "scamTitle": "Behtareen! Refund Scam Nakaam!",
      "scamDesc": "Aapne bilkul sahi pehchana! Wo jhoota screenshot bhej kar aapse aapke asal paise transfer karwana chahta tha.",
      "safeTitle": "Khatra! Bheja Gaya Screenshot Jaali Hai",
      "safeDesc": "Jab tak aapke account mein waqai official SMS aur app mein raqam na dikhayi de, ek rupya bhi wapas na bhein.",
      "redFlags": [
        "Photoshopped screenshot raseed",
        "Wapas bhejne ki shadeed jaldi",
        "2,000 rupaye rishwat/inaam ka lalach"
      ],
      "whatToDoNext": "Apni app mein balance check karein. Agar koi raqam nahi aayi to foran samjh jayein ke fraud tha."
    },
    "teachBack": {
      "question": "Jab koi ghalti se transfer ka screenshot bhej kar paise wapas maange to sab se ahem usool kya hai?",
      "options": [
        {
          "id": "opt-1",
          "text": "Apni banking app khol kar balance aur transaction history khud check karein, screenshot par bharosa na karein",
          "isCorrect": true,
          "explanation": "Zabardast! Asli balance dekhay baghair bhejna sab se bari ghalti hoti hai."
        },
        {
          "id": "opt-2",
          "text": "Foran 23,000 wapas bhej dein taake 2000 ka faida ho",
          "isCorrect": false,
          "explanation": "Aisa karne se aapke apne 23,000 rupaye zaya ho jayenge kyunke samne wale ne koi paisa nahi bheja tha."
        },
        {
          "id": "opt-3",
          "text": "Screenshot ko zoom kar ke dekhein",
          "isCorrect": false,
          "explanation": "Jaali raseedein asani se ban jaati hain, is liye asal bank app check karna hi wahid hal hai."
        }
      ]
    }
  },
  {
    "id": "solo-11",
    "scenarioNum": 11,
    "category": "Regulatory Impersonation",
    "sender": "SBP-Notice",
    "simInfo": "SIM 1 • 11:45 AM",
    "senderNumber": "+92 300 9876543",
    "senderStatus": "Ghair-Tasdeeq Shuda Mobile Number",
    "isScam": true,
    "message": "“State Bank of Pakistan Verification Notice: Aapka CNIC biometric verify na hone ki waja se tamam accounts freeze ho chuke hain. Fauran Head Office helpline officer se rabta karein: 0300-9876543”",
    "audioText": "Sawal number gyarah: SMS aya hai ke State Bank ne aapke tamam accounts freeze kar diye hain aur 0300 wale number par call karne ko kaha hai. Faisla kijiye: Mehfooz hai ya dhoka?",
    "hint": "State Bank of Pakistan (SBP) aam shehriyon ke zaati bank accounts operate nahi karta aur na hi aam 0300 mobile number se helpline chalata hai!",
    "correctChoice": "scam",
    "feedback": {
      "scamTitle": "Shabash! SBP Fraud Pakar Liya!",
      "scamDesc": "Aapne bilkul sahi pehchana! State Bank kabhi aam mobile number se aam shehri ko aisi dhamkiyan nahi bhejta.",
      "safeTitle": "Hoshiyar Rahiye! Ye Naqli Notice Hai",
      "safeDesc": "State Bank central bank hai, wo individual accounts manage nahi karta. Ye fraud ka bahana hai.",
      "redFlags": [
        "State Bank ke naam ka ghalat istemal",
        "Tamam accounts freeze karne ka khauf",
        "Helpline ke naam par aam 11-digit mobile number"
      ],
      "whatToDoNext": "SMS ko nazar-andaz karein. Apne bank branch ja kar tasalli kar lein, aapka account bilkul theek hoga."
    },
    "teachBack": {
      "question": "State Bank of Pakistan ke baare mein kon si baat 100% sach hai?",
      "options": [
        {
          "id": "opt-1",
          "text": "SBP aam shehriyon ke accounts operate nahi karta aur na aam mobile se dhamki deta hai",
          "isCorrect": true,
          "explanation": "Shabash! SBP sirf commercial bankon ka nigran idara hai, aam customer ka account commercial bank mein hota hai."
        },
        {
          "id": "opt-2",
          "text": "SBP SMS par biometric verification karta hai",
          "isCorrect": false,
          "explanation": "Biometric tasdeeq sirf bank branch ya biometric device par physical angutha laga kar hoti hai."
        },
        {
          "id": "opt-3",
          "text": "SBP ka helpline officer 0300 number par bethta hai",
          "isCorrect": false,
          "explanation": "SBP ka official UAN 111-727-273 hai, koi aam mobile number nahi."
        }
      ]
    }
  },
  {
    "id": "solo-12",
    "scenarioNum": 12,
    "category": "Remote Access Trap",
    "sender": "Bank Technical Desk",
    "simInfo": "SIM 1 • 04:10 PM",
    "senderNumber": "+92 340 5544332",
    "senderStatus": "Ghair-Tasdeeq Shuda Contact",
    "isScam": true,
    "message": "“Bank Helpline: Aapki digital banking app update mein masla aa raha hai. Masla hal karne ke liye Play Store se 'AnyDesk' app download karein aur 9-digit code support ko batayein.”",
    "audioText": "Sawal number barah: SMS aya hai ke banking app update karne ke liye AnyDesk app install karein aur 9 digit code batayein. Faisla kijiye: Mehfooz hai ya dhoka?",
    "hint": "KABHI BHI kisi ke kehne par AnyDesk, TeamViewer ya RustDesk install na karein! Is se doosra shakhs aapke mobile ki poori screen dekh aur chala sakta hai.",
    "correctChoice": "scam",
    "feedback": {
      "scamTitle": "Zabardast Pehchan! Remote App Trap!",
      "scamDesc": "Aapne bilkul theek pehchana! AnyDesk ya QuickSupport install karwane ka maqsad aapka phone control karna hota hai.",
      "safeTitle": "Sakht Khatra! Phone Hack Ho Sakta Hai",
      "safeDesc": "AnyDesk download kar ke code dene ka matlab apna mobile chor ke haath mein pakra dena hai.",
      "redFlags": [
        "AnyDesk / TeamViewer install karne ka mutalba",
        "9-digit screen-sharing code maangna",
        "Ghair-tasdeeq shuda helpline SMS"
      ],
      "whatToDoNext": "Koi aisi app install na karein. Agar ghalti se download ho gayi ho to foran uninstall kar dein."
    },
    "teachBack": {
      "question": "Kisi anjanay ke kehne par mobile mein AnyDesk install karne ka kya nuqsan hai?",
      "options": [
        {
          "id": "opt-1",
          "text": "Chor aapke mobile ki poori screen dekh kar khud OTP parh lega aur bank khali kar dega",
          "isCorrect": true,
          "explanation": "Bilkul sahi! Remote screen-sharing apps ke zariye chor aapke har secret message aur password ko live dekh sakta hai."
        },
        {
          "id": "opt-2",
          "text": "Mobile ki battery jaldi khatam ho jayegi",
          "isCorrect": false,
          "explanation": "Battery ahem nahi, asal baat aapke bank aur data ki mukammal chori hai."
        },
        {
          "id": "opt-3",
          "text": "Banking app ka icon gayab ho jayega",
          "isCorrect": false,
          "explanation": "Ye app screen share karne ke liye hoti hai jo choron ka hathkanda ban chuki hai."
        }
      ]
    }
  },
  {
    "id": "solo-13",
    "scenarioNum": 13,
    "category": "Asli Bijli Bill Reminder",
    "sender": "KELECTRIC",
    "simInfo": "SIM 1 • 10:15 AM",
    "senderNumber": "Official Channel",
    "senderStatus": "Tasdeeq Shuda Utility Channel",
    "isScam": false,
    "message": "“Moaziz Sarif, Consumer No. 0400012345678 ka Mahana Bill Rs. 4,820 ada karne ki aakhri tareekh 15 Nov hai. Barwaqt adayegi se late surcharge se bachein. Shukriya.”",
    "audioText": "Sawal number terah: K-Electric ka SMS aya hai ke aapke consumer number ka bill 4820 rupaye hai aur aakhri tareekh 15 Nov hai. Faisla kijiye: Mehfooz hai ya dhoka?",
    "hint": "Ghaur karein: Is message mein aapka 13-digit consumer number mojood hai, aakhri tareekh di gayi hai, koi foran connection katne ki dhamki nahi, aur na kisi mobile wallet par paise mangwaye gaye hain.",
    "correctChoice": "safe",
    "feedback": {
      "scamTitle": "Ye Message Mehfooz Tha!",
      "scamDesc": "Ye K-Electric ka ba-qaida mahana bill reminder tha. Asli utility messages mein aisi aasan ittela hoti hai.",
      "safeTitle": "Shabash! Durust Faisla!",
      "safeDesc": "Aapne bilkul theek pehchana. Is mein koi darr, dhamki ya kisi ke personal wallet par transfer ka mutalba nahi hai.",
      "redFlags": [
        "Official utility branded sender",
        "Makhsoos 13-digit consumer number",
        "Aakhri tareekh ka ba-qaida waqt",
        "Kisi personal wallet ya link ka zikr nahi"
      ],
      "whatToDoNext": "Is message ko normal samjhein aur aakhri tareekh se pehle apne bank app ya bill counter par ada kar dein."
    },
    "teachBack": {
      "question": "Ye bijli bill message scam kyun nahi hai?",
      "options": [
        {
          "id": "opt-1",
          "text": "Is mein makhsoos consumer number aur aakhri tareekh hai, koi personal JazzCash ya foran katne ki dhamki nahi",
          "isCorrect": true,
          "explanation": "Durust! Asli idaray sirf tareekh aur consumer bill ki ittela dete hain, aam mobile number par transfer nahi mangte."
        },
        {
          "id": "opt-2",
          "text": "Kyunke is mein late surcharge ka zikr hai",
          "isCorrect": false,
          "explanation": "Late surcharge aam bill ka qanooni hissa hota hai, koi dhamki nahi."
        },
        {
          "id": "opt-3",
          "text": "Kyunke bill ki raqam 4,820 rupaye munasib hai",
          "isCorrect": false,
          "explanation": "Raqam nahi, balke payment ka tareeqa aur consumer number iske asli hone ka sabot hai."
        }
      ]
    }
  },
  {
    "id": "solo-14",
    "scenarioNum": 14,
    "category": "Asli Verification Code (OTP)",
    "sender": "WhatsApp",
    "simInfo": "SMS • 07:40 PM",
    "senderNumber": "Official Channel",
    "senderStatus": "Tasdeeq Shuda Shortcode",
    "isScam": false,
    "message": "“492-018 aapka WhatsApp verification code hai. Ye code kisi ke sath share mat karein. WhatsApp team aapse kabhi ye code nahi maangti.”",
    "audioText": "Sawal number chodah: WhatsApp ka official SMS aya hai jismein 6 digit ka code hai aur wazeh hidayat hai ke kisi ko na dein. Faisla kijiye: Mehfooz hai ya dhoka?",
    "hint": "Ye message tab aata hai jab AAP KHUD WhatsApp par apna number login karte hain. Is par wazeh likha hai: 'Kisi ke sath share mat karein'.",
    "correctChoice": "safe",
    "feedback": {
      "scamTitle": "Ye Message Mehfooz Hai!",
      "scamDesc": "Ye official WhatsApp ka registration code hai jo aapke khud login shuru karne par aata hai.",
      "safeTitle": "Aapne Bilkul Sahi Samjha!",
      "safeDesc": "Message khud mehfooz hai, lekin yaad rakhein: Ye code KISI BHI doosray shakhs ko nahi batana!",
      "redFlags": [
        "Official WhatsApp sender",
        "Wazeh naseehat: 'Kisi ke sath share mat karein'",
        "Koi naqli link ya fees ka mutalba nahi"
      ],
      "whatToDoNext": "Agar ye code aapne khud login karte waqt mangwaya tha to apni WhatsApp screen mein darj karein. Kisi aur ko hargiz na dein."
    },
    "teachBack": {
      "question": "Official verification code (OTP) aane par sab se ahem hidayat kya hoti hai?",
      "options": [
        {
          "id": "opt-1",
          "text": "Code sirf apni mobile app mein khud darj karein aur kisi bhi call ya message par kisi ko na dein",
          "isCorrect": true,
          "explanation": "Bilkul durust! Code aapke apne hath se enter karne ke liye hota hai, doosron ko batane ke liye nahi."
        },
        {
          "id": "opt-2",
          "text": "Code ko foran status par laga dein",
          "isCorrect": false,
          "explanation": "Aisa karne se har koi aapka account login kar lega."
        },
        {
          "id": "opt-3",
          "text": "Phone aane par verification officer ko bata dein",
          "isCorrect": false,
          "explanation": "Asli WhatsApp ya bank ka koi officer kabhi phone par code nahi maang sakta."
        }
      ]
    }
  },
  {
    "id": "solo-15",
    "scenarioNum": 15,
    "category": "ATM Security Phishing",
    "sender": "Card-Security",
    "simInfo": "SIM 1 • 09:15 AM",
    "senderNumber": "+92 331 9988776",
    "senderStatus": "Ghair-Tasdeeq Shuda Number",
    "isScam": true,
    "message": "“Bank Security Alert: Aapka ATM card kal raat skimming machine par istemal hone ka khatra hai. Apna card mehfooz karne ke liye apna purana PIN darj karke foran naya PIN banayein: atm-pin-reset.online”",
    "audioText": "Sawal number pandrah: SMS aya hai ke ATM card skim hone ka khatra hai, web link par purana PIN darj kar ke naya PIN banayein. Faisla kijiye: Mehfooz hai ya dhoka?",
    "hint": "ATM PIN kisi website par reset nahi hota! PIN tabdeel karne ke liye ya to physical ATM machine jana parta hai ya bank ki official biometric app istemal hoti hai.",
    "correctChoice": "scam",
    "feedback": {
      "scamTitle": "Shabash! Aakhri Scam Bhi Pakar Liya!",
      "scamDesc": "Aapne behtareen tareeqay se ATM phishing trap ko nakaam banaya! Kisi website par purana PIN mangwana 100% fraud hai.",
      "safeTitle": "Hoshiyar! Ye ATM PIN Trap Hai",
      "safeDesc": "Chor aapka purana ATM PIN haasil kar ke aapke card ka clone banana chahta tha.",
      "redFlags": [
        "Naqli domain (.online)",
        "Website par purana ATM PIN maangna",
        "Aam mobile number se security alert"
      ],
      "whatToDoNext": "Link hargiz na kholein. Agar waqai PIN badalna ho to bank ki nazdeeki ATM machine par ja kar tabdeel karein."
    },
    "teachBack": {
      "question": "ATM PIN tabdeel karne ka wahid mehfooz tareeqa kya hai?",
      "options": [
        {
          "id": "opt-1",
          "text": "Sirf bank ki physical ATM machine par ja kar ya official biometric app mein PIN badlein",
          "isCorrect": true,
          "explanation": "Mubarak ho! Kisi SMS ya web link par apna secret PIN kabhi darj nahi karna chahiye."
        },
        {
          "id": "opt-2",
          "text": "SMS mein aaye link par purana aur naya PIN enter kar dein",
          "isCorrect": false,
          "explanation": "Aisa karne se scammer ko aapka purana aur naya dono PIN mil jayenge aur wo ATM se paise nikaal lega."
        },
        {
          "id": "opt-3",
          "text": "Bank manager ko phone kar ke PIN likhwa dein",
          "isCorrect": false,
          "explanation": "Bank ka staff bhi PIN poochne ka majaz nahi hota."
        }
      ]
    }
  }
],
  urdu: [
  {
    "id": "solo-1",
    "scenarioNum": 1,
    "category": "بینک اکاؤنٹ بلاک کی دھمکی",
    "sender": "HBL-Alert",
    "simInfo": "سم ۱ • ۲:۴۵ دوپہر",
    "senderNumber": "+92 345 0098112",
    "senderStatus": "غیر تصدیق شدہ موبائل نمبر",
    "isScam": true,
    "message": "“معزز صارف! مشکوک سرگرمی کی وجہ سے آپ کا بینک اکاؤنٹ ۲۴ گھنٹے میں بلاک کیا جا رہا ہے۔ اکاؤنٹ بحال رکھنے کے لیے ابھی کال کریں: 0345-0098112 یا اپنا شناختی کارڈ اور او ٹی پی تصدیق کروائیں۔”",
    "audioText": "سوال نمبر ایک: میسج آیا ہے کہ اکاؤنٹ بلاک کیا جا رہا ہے، اس موبائل نمبر پر کال کر کے او ٹی پی بتائیں۔ فیصلہ کیجیے: محفوظ ہے یا دھوکہ؟",
    "hint": "اصلی بینک ہمیشہ اپنے آفیشل ۴ ہندسوں کے شارٹ کوڈ سے ایس ایم ایس بھیجتا ہے، عام موبائل نمبر سے نہیں۔ اور بینک کبھی فون پر او ٹی پی نہیں مانگتا۔",
    "correctChoice": "scam",
    "feedback": {
      "scamTitle": "شاباش! شاندار پہچان!",
      "scamDesc": "آپ بالکل درست ہیں! اصلی بینک کبھی عام موبائل نمبر سے اکاؤنٹ بلاک کی دھمکی نہیں دیتا اور نہ او ٹی پی مانگتا ہے۔",
      "safeTitle": "ذرا ٹھہریں! یہ دھوکہ تھا",
      "safeDesc": "یہ میسج جعلی ہے۔ بینک او ٹی پی مانگنے کا مجاز نہیں ہوتا۔",
      "redFlags": [
        "عام موبائل نمبر (0345...)",
        "اکاؤنٹ بلاک کا خوف",
        "او ٹی پی اور شناختی کارڈ کا مطالبہ"
      ],
      "whatToDoNext": "ایس ایم ایس فوری ڈیلیٹ کریں۔ اگر کوئی شک ہو تو اپنے اے ٹی ایم کارڈ کی پشت پر دیے گئے نمبر پر کال کریں۔"
    },
    "teachBack": {
      "question": "یہ پیغام دھوکہ کیوں ہے؟ درست وجہ منتخب کریں:",
      "options": [
        {
          "id": "opt-1",
          "text": "اصلی بینک عام موبائل نمبر سے دھمکی نہیں دیتا اور نہ او ٹی پی مانگتا ہے",
          "isCorrect": true,
          "explanation": "بالکل درست! بینک ہمیشہ برانڈڈ شارٹ کوڈ استعمال کرتا ہے اور او ٹی پی کبھی نہیں مانگتا۔"
        },
        {
          "id": "opt-2",
          "text": "کیونکہ اس میں بینک کا نام نہیں لکھا",
          "isCorrect": false,
          "explanation": "فراڈ کرنے والے اکثر بینک کا نام استعمال کرتے ہیں، اصل پہچان نمبر اور او ٹی پی مانگنا ہے۔"
        },
        {
          "id": "opt-3",
          "text": "کیونکہ ۲۴ گھنٹے کا وقت دیا گیا ہے",
          "isCorrect": false,
          "explanation": "جلدی مچانا ایک علامت ہے مگر اصل خطرہ او ٹی پی مانگنا ہے۔"
        }
      ]
    }
  },
  {
    "id": "solo-2",
    "scenarioNum": 2,
    "category": "احساس / بے نظیر اسکیم فراڈ",
    "sender": "Benazir Support",
    "simInfo": "واٹس ایپ • ۱۱:۲۰ صبح",
    "senderNumber": "+92 301 7782194",
    "senderStatus": "غیر تصدیق شدہ رابطہ",
    "isScam": true,
    "message": "“مبارک ہو! بے نظیر کفالت اسکیم میں آپ کے نام ۴۵،۰۰۰ روپے کی امدادی رقم منظور ہو گئی ہے۔ رقم وصول کرنے کے لیے اس لنک پر اپنا شناختی کارڈ اور پن درج کریں: bit.ly/bisp-fund-2026”",
    "audioText": "سوال نمبر دو: واٹس ایپ پر میسج آیا ہے کہ ۴۵ ہزار امداد نکلی ہے، لنک پر جا کر خفیہ پن درج کریں۔ فیصلہ کیجیے: محفوظ ہے یا دھوکہ؟",
    "hint": "سرکاری بے نظیر پروگرام کا سرکاری نمبر صرف 8171 ہے! کسی انجانے لنک پر اپنا خفیہ پن درج کرنا ۱۰۰ فیصد فراڈ ہے۔",
    "correctChoice": "scam",
    "feedback": {
      "scamTitle": "آپ نے دھوکہ پکڑ لیا!",
      "scamDesc": "بہت خوب! بی آئی ایس پی یا کوئی بھی سرکاری ادارہ لنک بھیج کر آپ کا خفیہ پن نہیں مانگتا۔",
      "safeTitle": "ہوشیار رہیے! یہ فراڈ ہے",
      "safeDesc": "مفت رقم کا لالچ دے کر چور آپ کے موبائل والٹ کا پن چرانا چاہتے ہیں۔",
      "redFlags": [
        "غیر تصدیق شدہ واٹس ایپ نمبر",
        "غیر معمولی امداد کا لالچ",
        "والٹ پن مانگنا",
        "bit.ly کا نقلی لنک"
      ],
      "whatToDoNext": "بھیجنے والے کو فوری بلاک کریں۔ بی آئی ایس پی کی معلومات صرف آفیشل 8171 ایس ایم ایس سے دیکھیں۔"
    },
    "teachBack": {
      "question": "اس پیغام میں سب سے بڑا خطرہ کیا ہے؟",
      "options": [
        {
          "id": "opt-1",
          "text": "آپ سے آپ کا خفیہ والٹ پن اور شناختی کارڈ انجانے لنک پر مانگا گیا",
          "isCorrect": true,
          "explanation": "شاباش! خفیہ پن درج کرنے سے آپ کے والٹ کے تمام پیسے فوری چوری ہو جائیں گے۔"
        },
        {
          "id": "opt-2",
          "text": "امداد کی رقم ۴۵،۰۰۰ بہت کم ہے",
          "isCorrect": false,
          "explanation": "رقم نہیں بلکہ مفت لالچ اور پن مانگنا فراڈ کی اصل علامت ہے۔"
        },
        {
          "id": "opt-3",
          "text": "یہ واٹس ایپ پر آیا ہے",
          "isCorrect": false,
          "explanation": "اصل خطرہ پن چوری کرنے کا مشکوک لنک ہے۔"
        }
      ]
    }
  },
  {
    "id": "solo-3",
    "scenarioNum": 3,
    "category": "اصلی بینک خریداری نوٹیفکیشن",
    "sender": "MEEZAN BANK",
    "simInfo": "سم ۱ • ۶:۱۲ شام",
    "senderNumber": "Official Bank Channel",
    "senderStatus": "تصدیق شدہ بینک چینل",
    "isScam": false,
    "message": "“معزز صارف! آپ کے ڈیبٹ کارڈ کے آخری ہندسے 4102 سے امتیاز سپر مارکیٹ پر ۲،۴۵۰ روپے کی خریداری کامیاب رہی۔ بقایا رقم ۴۳،۱۲۰ روپے۔ اگر یہ آپ نے نہیں کیا تو 111-331-331 پر رابطہ کریں۔”",
    "audioText": "سوال نمبر تین: میزان بینک کا میسج آیا ہے کہ ۲۴۵۰ روپے کی خریداری ہوئی ہے اور ہیلپ لائن نمبر دیا گیا ہے۔ فیصلہ کیجیے: محفوظ ہے یا دھوکہ؟",
    "hint": "غور کریں: اس میسج میں کوئی لنک نہیں، کوئی او ٹی پی یا پن نہیں مانگا گیا، کارڈ کے صرف آخری چار ہندسے ہیں، اور آفیشل ہیلپ لائن دی گئی ہے۔",
    "correctChoice": "safe",
    "feedback": {
      "scamTitle": "یہ دراصل محفوظ تھا!",
      "scamDesc": "یہ میزان بینک کی خریداری کی رسید ہے جو کارڈ استعمال کرتے ہی آتی ہے۔ ہر میسج دھوکہ نہیں ہوتا!",
      "safeTitle": "شاندار! بالکل درست فیصلہ!",
      "safeDesc": "آپ نے بالکل درست پہچانا۔ یہ اصلی بینک رسید ہے جس میں کوئی خفیہ کوڈ نہیں مانگا گیا۔",
      "redFlags": [
        "سرکاری تصدیق شدہ نام",
        "کوئی لنک یا بٹن نہیں",
        "کوئی پن یا پاس ورڈ نہیں مانگا",
        "آفیشل ہیلپ لائن 111-331-331"
      ],
      "whatToDoNext": "اسے محفوظ سمجھیں اور ریکارڈ میں رکھیں۔ اگر یہ خریداری آپ نے نہیں کی تو کارڈ کے پیچھے دیے نمبر پر کال کریں۔"
    },
    "teachBack": {
      "question": "یہ بینک میسج محفوظ کیوں ہے؟",
      "options": [
        {
          "id": "opt-1",
          "text": "یہ صرف خریداری کی اطلاع ہے، اس میں کوئی او ٹی پی، پن یا مشکوک لنک نہیں ہے",
          "isCorrect": true,
          "explanation": "بالکل درست! اصلی بینک الرٹ صرف خریداری کی اطلاع دیتا ہے، خفیہ معلومات نہیں مانگتا۔"
        },
        {
          "id": "opt-2",
          "text": "کیونکہ اس میں امتیاز سپر مارکیٹ کا نام ہے",
          "isCorrect": false,
          "explanation": "دکان کا نام دھوکہ دہی میں بھی ہو سکتا ہے؛ اصل نشانی کوئی خفیہ کوڈ نہ مانگنا ہے۔"
        },
        {
          "id": "opt-3",
          "text": "کیونکہ اس میں بقایا رقم لکھی ہے",
          "isCorrect": false,
          "explanation": "بقایا رقم لکھنا نارمل بینک نوٹیفکیشن کا حصہ ہے۔"
        }
      ]
    }
  },
  {
    "id": "solo-4",
    "scenarioNum": 4,
    "category": "بجلی کا بل منقطع کرنے کی دھمکی",
    "sender": "WAPDA-ALERT",
    "simInfo": "سم ۲ • ۸:۳۰ رات",
    "senderNumber": "+92 308 9123847",
    "senderStatus": "غیر تصدیق شدہ موبائل نمبر",
    "isScam": true,
    "message": "“بجلی صارف نوٹس: آپ کا پچھلا بل ادا نہیں ہوا۔ آج رات ۱۰ بجے میٹر کاٹ دیا جائے گا۔ ابھی ایس ڈی او کو اس نمبر 0308-9123847 پر جیز کیش بھیجیں۔”",
    "audioText": "سوال نمبر چار: میسج آیا ہے کہ بل ادا نہیں ہوا، رات دس بجے بجلی کاٹ دی جائے گی، فوری افسر کو جیز کیش کریں۔ فیصلہ کیجیے: محفوظ ہے یا دھوکہ؟",
    "hint": "بجلی کی کمپنیاں کبھی کسی افسر کے ذاتی جیز کیش پر پیسے نہیں منگواتیں! بل ہمیشہ بینک کاؤنٹر یا تصدیق شدہ ایپ سے ادا ہوتا ہے۔",
    "correctChoice": "scam",
    "feedback": {
      "scamTitle": "شاباش! فراڈ پکڑ لیا!",
      "scamDesc": "آپ نے بالکل درست پہچانا! بجلی کا بل کسی شخص کے ذاتی موبائل والٹ پر نہیں بھیجا جاتا۔",
      "safeTitle": "خطرہ! یہ فراڈ تھا",
      "safeDesc": "رات دس بجے بجلی کاٹنے کا خوف دلا کر چور آپ سے اپنے ذاتی نمبر پر پیسے منگوا رہا تھا۔",
      "redFlags": [
        "افسر کے ذاتی جیز کیش کا مطالبہ",
        "رات ۱۰ بجے بجلی کاٹنے کی دھمکی",
        "غیر تصدیق شدہ موبائل نمبر"
      ],
      "whatToDoNext": "اپنے کاغذ کے بل پر کنزیومر نمبر دیکھ کر بینک ایپ یا ڈاکخانے میں تصدیق کریں۔"
    },
    "teachBack": {
      "question": "بجلی کے اس میسج میں دھوکہ کا سب سے بڑا ثبوت کیا ہے؟",
      "options": [
        {
          "id": "opt-1",
          "text": "بجلی کا بل کسی افسر کے ذاتی جیز کیش نمبر پر مانگا جا رہا ہے",
          "isCorrect": true,
          "explanation": "درست! سرکاری بل ہمیشہ ۱۴ ہندسوں کے کنزیومر نمبر پر بینک یا مجاز ادارے میں جمع ہوتے ہیں۔"
        },
        {
          "id": "opt-2",
          "text": "بجلی کاٹنے کا وقت رات دس بجے لکھا ہے",
          "isCorrect": false,
          "explanation": "دھمکی خوف پیدا کرنے کے لیے ہے مگر ذاتی اکاؤنٹ پر پیسے مانگنا اصل دھوکہ ہے۔"
        },
        {
          "id": "opt-3",
          "text": "واپڈا کا نام لکھا ہے",
          "isCorrect": false,
          "explanation": "فراڈیے اداروں کا نام استعمال کرتے ہیں تاکہ لوگ گھبرا جائیں۔"
        }
      ]
    }
  },
  {
    "id": "solo-5",
    "scenarioNum": 5,
    "category": "جعلی کوریئر پارسل",
    "sender": "TCS-Express",
    "simInfo": "سم ۱ • ۳:۱۵ دوپہر",
    "senderNumber": "+92 333 4410982",
    "senderStatus": "غیر تصدیق شدہ رابطہ",
    "isScam": true,
    "message": "“آپ کا پارسل نامکمل پتے کی وجہ سے رک گیا ہے۔ دوبارہ ترسیل کے لیے ۴۸ گھنٹوں میں ۱۵۰ روپے فیس ادا کریں: tcs-tracking-delivery.cc/pay”",
    "audioText": "سوال نمبر پانچ: کوریئر کمپنی کا میسج آیا ہے کہ پارسل رک گیا ہے، ڈیڑھ سو روپے فیس ادا کرنے کے لیے لنک پر جائیں۔ فیصلہ کیجیے: محفوظ ہے یا دھوکہ؟",
    "hint": "پہلے سوچیں: کیا آپ نے کوئی پارسل منگوایا تھا؟ اور کوریئر والے پتہ درست کرنے کے لیے ڈیڑھ سو روپے آن لائن مانگنے کا لنک نہیں بھیجتے۔",
    "correctChoice": "scam",
    "feedback": {
      "scamTitle": "آپ نے پارسل فراڈ پکڑ لیا!",
      "scamDesc": "آپ بالکل درست ہیں! ڈیڑھ سو روپے کی چھوٹی فیس کا لالچ دے کر وہ آپ کے اے ٹی ایم کارڈ کی تفصیلات چرانا چاہتے ہیں۔",
      "safeTitle": "ہوشیار رہیے! یہ جال تھا",
      "safeDesc": "جعلی کوریئر میسج کا مقصد نقلی ویب سائٹ پر آپ کے کارڈ کا نمبر اور خفیہ سی وی وی کوڈ حاصل کرنا ہوتا ہے۔",
      "redFlags": [
        "نقلی ویب لنک (.cc)",
        "۱۵۰ روپے کی چھوٹی رقم مانگنا",
        "انجانا پارسل جو آپ نے نہیں منگوایا"
      ],
      "whatToDoNext": "لنک پر ہرگز کلک نہ کریں۔ اگر کوئی پارسل واقعی آنا تھا تو آفیشل ہیلپ لائن 111-123-456 سے ٹریکنگ چیک کریں۔"
    },
    "teachBack": {
      "question": "دھوکہ باز صرف ڈیڑھ سو روپے جیسی چھوٹی رقم کیوں مانگ رہا ہے؟",
      "options": [
        {
          "id": "opt-1",
          "text": "تاکہ آپ کو شک نہ ہو اور آپ نقلی لنک پر اپنا اے ٹی ایم کارڈ درج کر دیں",
          "isCorrect": true,
          "explanation": "زبردست! چھوٹی رقم دیکھ کر لوگ بے فکری میں کارڈ درج کر دیتے ہیں اور کارڈ کا تمام ڈیٹا چوری ہو جاتا ہے۔"
        },
        {
          "id": "opt-2",
          "text": "کیونکہ کوریئر فیس واقعی اتنی ہوتی ہے",
          "isCorrect": false,
          "explanation": "کوریئر والے کیش آن ڈیلیوری لیتے ہیں یا فون کرتے ہیں، نقلی ویب سائٹ نہیں بھیجتے۔"
        },
        {
          "id": "opt-3",
          "text": "کیونکہ ویئر ہاؤس کا خرچہ کم ہوتا ہے",
          "isCorrect": false,
          "explanation": "یہ دھوکہ باز کا گھڑا ہوا بہانہ ہے۔"
        }
      ]
    }
  },
  {
    "id": "solo-6",
    "scenarioNum": 6,
    "category": "او ٹی پی چوری کا حربہ",
    "sender": "انجانا رابطہ",
    "simInfo": "واٹس ایپ • ۴:۵۰ شام",
    "senderNumber": "+92 321 8892144",
    "senderStatus": "غیر تصدیق شدہ رابطہ",
    "isScam": true,
    "message": "“سلام بھائی، غلطی سے میرا ایزی پیسہ کوڈ آپ کے نمبر پر چلا گیا ہے۔ برائے مہربانی وہ چار ہندسوں کا کوڈ مجھے میسج کر دیں، والدہ کی دوائی کے پیسے اٹک گئے ہیں!”",
    "audioText": "سوال نمبر چھ: کوئی انجانا شخص کہہ رہا ہے کہ غلطی سے اس کا کوڈ آپ کے پاس آگیا ہے، کوڈ واپس بھیج دیں۔ فیصلہ کیجیے: محفوظ ہے یا دھوکہ؟",
    "hint": "آپ کے نمبر پر جو کوڈ آتا ہے وہ آپ کے اکاؤنٹ کی چابی ہوتا ہے! غلطی سے کسی اور کا کوڈ آپ کے فون پر کبھی نہیں آ سکتا۔",
    "correctChoice": "scam",
    "feedback": {
      "scamTitle": "شاباش! بڑا فراڈ ناکام بنایا!",
      "scamDesc": "آپ نے بالکل درست پہچانا! فراڈیا دراصل آپ کے اپنے والٹ میں داخل ہو کر پیسے نکالنے کی کوشش کر رہا تھا۔",
      "safeTitle": "بڑی غلط فہمی! یہ دھوکہ ہے",
      "safeDesc": "بیمار والدہ کا بہانہ جذباتی دباؤ کے لیے ہے۔ اگر آپ نے کوڈ دیا تو آپ کا اپنا اکاؤنٹ خالی ہو جاتا۔",
      "redFlags": [
        "آپ کے فون پر آیا ہوا او ٹی پی مانگنا",
        "جذباتی کہانی (بیمار والدہ کی دوائی)",
        "غیر تصدیق شدہ انجانا نمبر"
      ],
      "whatToDoNext": "کوڈ ہرگز نہ بتائیں۔ فوری میسج ڈیلیٹ کریں اور رابطہ بلاک کریں۔"
    },
    "teachBack": {
      "question": "اگر کسی انجانے شخص کو اپنا ایس ایم ایس او ٹی پی کوڈ بتا دیا جائے تو کیا ہوگا؟",
      "options": [
        {
          "id": "opt-1",
          "text": "چور آپ کے والٹ یا واٹس ایپ پر قبضہ کر کے تمام پیسے اور ڈیٹا چرا لے گا",
          "isCorrect": true,
          "explanation": "بالکل درست! او ٹی پی آپ کے اکاؤنٹ کی چابی ہے، چابی کبھی کسی کو نہیں دی جاتی۔"
        },
        {
          "id": "opt-2",
          "text": "اس کی بیمار والدہ کی دوائی خریدی جا سکے گی",
          "isCorrect": false,
          "explanation": "یہ جھوٹی ہمدردی حاصل کرنے کا مجرمانہ طریقہ ہے۔"
        },
        {
          "id": "opt-3",
          "text": "کچھ نہیں ہوگا کیونکہ وہ صرف عام نمبر ہے",
          "isCorrect": false,
          "explanation": "او ٹی پی عام نمبر نہیں بلکہ اکاؤنٹ کھولنے کا خفیہ پاس ورڈ ہوتا ہے۔"
        }
      ]
    }
  },
  {
    "id": "solo-7",
    "scenarioNum": 7,
    "category": "سوئی گیس میٹر کٹنے کا نوٹس",
    "sender": "SSGC-Notice",
    "simInfo": "سم ۲ • ۱:۲۰ دوپہر",
    "senderNumber": "+92 312 6543210",
    "senderStatus": "غیر تصدیق شدہ موبائل نمبر",
    "isScam": true,
    "message": "“سوئی سدرن گیس صارف الرٹ: گیس میٹر معائنہ جرمانہ ۶،۸۰۰ روپے واجب الادا ہے۔ میٹر کٹنے سے بچنے کے لیے ابھی ssgc-bill-clearance.cc پر کارڈ سے ادائیگی کریں۔”",
    "audioText": "سوال نمبر سات: گیس کا ۶۸۰۰ جرمانہ اور میٹر کٹنے کا میسج آیا ہے، لنک پر کارڈ سے فیس ادا کریں۔ فیصلہ کیجیے: محفوظ ہے یا دھوکہ؟",
    "hint": "سوئی گیس کی سرکاری ویب سائٹ .cc پر نہیں ہوتی! اور میٹر کا جرمانہ ہمیشہ باقاعدہ کاغذی بل میں شامل ہو کر آتا ہے۔",
    "correctChoice": "scam",
    "feedback": {
      "scamTitle": "زبردست! گیس فراڈ پکڑ لیا!",
      "scamDesc": "آپ بالکل درست ہیں! نقلی لنک .cc پر بھیج کر آپ کے کارڈ کی چوری مقصود تھی۔",
      "safeTitle": "ہوشیار! یہ نقلی نوٹس ہے",
      "safeDesc": "سرکاری گیس کمپنیاں انجانے ویب لنک سے کارڈ پیمنٹ نہیں مانگتیں۔",
      "redFlags": [
        "نقلی ویب ڈومین (.cc)",
        "میٹر کٹنے کا اچانک خوف",
        "عام موبائل نمبر سے نوٹس"
      ],
      "whatToDoNext": "لنک نہ کھولیں۔ اپنے بل پر موجود کنزیومر نمبر سے بینک ایپ یا بل کاؤنٹر پر تصدیق کریں۔"
    },
    "teachBack": {
      "question": "اس میسج میں گیس میٹر کٹنے سے کیوں نہیں ڈرنا چاہیے؟",
      "options": [
        {
          "id": "opt-1",
          "text": "کیونکہ سرکاری ادارہ .cc ویب لنک پر کارڈ سے ادائیگی نہیں مانگتا",
          "isCorrect": true,
          "explanation": "صحیح پہچانا! تمام سرکاری ادارے کنزیومر نمبر کے تحت تصدیق شدہ ذرائع سے بل لیتے ہیں۔"
        },
        {
          "id": "opt-2",
          "text": "کیونکہ گیس کبھی بند نہیں ہو سکتی",
          "isCorrect": false,
          "explanation": "گیس کاٹنے کا باقاعدہ قانونی نوٹس بل میں ہوتا ہے، نقلی ویب سائٹ پر نہیں۔"
        },
        {
          "id": "opt-3",
          "text": "کیونکہ ۶،۸۰۰ روپے بہت زیادہ ہیں",
          "isCorrect": false,
          "explanation": "اصل علامت نقلی ویب سائٹ اور کارڈ مانگنا ہے۔"
        }
      ]
    }
  },
  {
    "id": "solo-8",
    "scenarioNum": 8,
    "category": "جعلی رشتے دار اور ہسپتال ایمرجنسی",
    "sender": "انجانا نمبر",
    "simInfo": "واٹس ایپ • ۹:۴۰ رات",
    "senderNumber": "+92 334 5678901",
    "senderStatus": "غیر تصدیق شدہ نمبر",
    "isScam": true,
    "message": "“سلام چچا جی، میں اسد بول رہا ہوں۔ ہسپتال میں دوست کا شدید حادثہ ہو گیا ہے، فوری آپریشن کے لیے ۱۵،۰۰۰ روپے اس ایزی پیسہ پر بھیج دیں، ابو کو مت بتائیے گا!”",
    "audioText": "سوال نمبر آٹھ: نئے نمبر سے بھتیجے اسد کا میسج آیا ہے کہ دوست کا ایکسیڈنٹ ہو گیا ہے، فوری پندرہ ہزار بھیجیں اور کسی کو نہ بتائیں۔ فیصلہ کیجیے: محفوظ ہے یا دھوکہ؟",
    "hint": "دھوکے کا عام حربہ: 'کسی کو نہ بتانا' اور فوری ایمرجنسی کا دباؤ۔ ہمیشہ پہلے رشتے دار کے اصل نمبر پر کال کر کے تصدیق کریں!",
    "correctChoice": "scam",
    "feedback": {
      "scamTitle": "آپ نے جذباتی جال ناکام بنایا!",
      "scamDesc": "آپ بالکل درست ہیں! فراڈیے رشتے داروں کے نام پر خوف پھیلا کر پیسے لوٹتے ہیں۔",
      "safeTitle": "ذرا رکیں! یہ دھوکہ ہو سکتا ہے",
      "safeDesc": "جب بھی کوئی کہے کہ 'ابو کو مت بتانا' تو سمجھ لیں دال میں کچھ کالا ہے۔ پہلے تصدیق کریں۔",
      "redFlags": [
        "انجانے نمبر سے رشتے دار بننا",
        "'کسی کو مت بتانا' کی شرط",
        "ایمرجنسی میں فوری پیسے منگوانا"
      ],
      "whatToDoNext": "پیسے ہرگز نہ بھیجیں۔ اسد کے پرانے اصل نمبر پر کال کریں یا اس کے والدین سے رابطہ کریں۔"
    },
    "teachBack": {
      "question": "جب کوئی انجانا نمبر رشتے دار بن کر ایمرجنسی میں پیسے مانگے تو پہلا قدم کیا ہونا چاہیے؟",
      "options": [
        {
          "id": "opt-1",
          "text": "اس رشتے دار کے پہلے سے محفوظ شدہ اصل نمبر پر خود کال کر کے تصدیق کریں",
          "isCorrect": true,
          "explanation": "بہترین! ۹۹ فیصد اوقات میں رشتے دار بالکل خیریت سے ہوتا ہے اور نمبر چور کا ہوتا ہے۔"
        },
        {
          "id": "opt-2",
          "text": "فوری ۱۵،۰۰۰ روپے بھیج دیں تاکہ دیر نہ ہو",
          "isCorrect": false,
          "explanation": "ایسا کرنے سے آپ کے پیسے چور کے ہاتھ میں چلے جائیں گے۔"
        },
        {
          "id": "opt-3",
          "text": "اسی میسج پر مزید تفصیلات پوچھیں",
          "isCorrect": false,
          "explanation": "چور میسج پر مزید جھوٹ بولے گا؛ اصل نمبر پر کال کرنا ضروری ہے۔"
        }
      ]
    }
  },
  {
    "id": "solo-9",
    "scenarioNum": 9,
    "category": "آن لائن جاب اور ویڈیو لائک فراڈ",
    "sender": "International Recruitment",
    "simInfo": "واٹس ایپ • ۱۰:۰۵ صبح",
    "senderNumber": "+44 7911 123456",
    "senderStatus": "غیر ملکی انجانا نمبر (+44)",
    "isScam": true,
    "message": "“السلام علیکم! گھر بیٹھے یوٹیوب اور ٹک ٹاک ویڈیوز لائک کر کے روزانہ ۴،۰۰۰ سے ۹،۰۰۰ روپے کمائیں۔ کسی تعلیم یا تجربے کی ضرورت نہیں۔ مفت رجسٹریشن کے لیے رابطہ کریں۔”",
    "audioText": "سوال نمبر نو: غیر ملکی نمبر سے جاب آفر آئی ہے کہ روزانہ ویڈیوز لائک کر کے ہزاروں روپے کمائیں۔ فیصلہ کیجیے: محفوظ ہے یا دھوکہ؟",
    "hint": "صرف ویڈیوز لائک کرنے کے روزانہ ۹ ہزار روپے کوئی نہیں دیتا! یہ 'ٹاسک فراڈ' ہے جو بعد میں رجسٹریشن فیس کے نام پر لاکھوں روپے لوٹتا ہے۔",
    "correctChoice": "scam",
    "feedback": {
      "scamTitle": "شاباش! آن لائن جاب کا جھانسہ پکڑ لیا!",
      "scamDesc": "آپ نے بالکل درست پہچانا! غیر ملکی نمبروں سے آنے والی یہ آسان نوکریاں بالکل فراڈ ہوتی ہیں۔",
      "safeTitle": "ہوشیار رہیے! یہ ٹاسک فراڈ ہے",
      "safeDesc": "مفت رقم کا لالچ دے کر یہ شروع میں چھوٹی رقم دیتے ہیں اور پھر سیکیورٹی ڈپازٹ کے نام پر لوٹ لیتے ہیں۔",
      "redFlags": [
        "غیر ملکی (+44) انجانا نمبر",
        "بغیر محنت روزانہ ۹،۰۰۰ کا جھوٹا وعدہ",
        "ٹیلی گرام گروپ جوائن کرنے کا لنک"
      ],
      "whatToDoNext": "واٹس ایپ پر فوری 'Report & Block' کریں۔ انجانے ٹاسک گروپس میں شامل نہ ہوں۔"
    },
    "teachBack": {
      "question": "آن لائن 'ویڈیو لائک کر کے روزانہ ہزاروں کمائیں' اسکیموں کا اصل مقصد کیا ہوتا ہے؟",
      "options": [
        {
          "id": "opt-1",
          "text": "لالچ دے کر شامل کرنا اور بعد میں سیکیورٹی فیس کے نام پر پیسے ہتھیا لینا",
          "isCorrect": true,
          "explanation": "درست! اسے ٹاسک اسکیم کہتے ہیں جس سے لوگوں کے لاکھوں روپے ضائع ہو جاتے ہیں۔"
        },
        {
          "id": "opt-2",
          "text": "لوگوں کو روزگار فراہم کرنا",
          "isCorrect": false,
          "explanation": "یہ منظم مجرمانہ گروہ ہیں جو عوام کو لوٹنے کے لیے جال بچھاتے ہیں۔"
        },
        {
          "id": "opt-3",
          "text": "ویڈیوز کے لائکس بڑھانا",
          "isCorrect": false,
          "explanation": "لائکس صرف لوگوں کو بہلانے کا بہانہ ہوتا ہے۔"
        }
      ]
    }
  },
  {
    "id": "solo-10",
    "scenarioNum": 10,
    "category": "جعلی رسید اور اوور پیمنٹ ٹریپ",
    "sender": "انجانا رابطہ",
    "simInfo": "واٹس ایپ • ۵:۲۵ شام",
    "senderNumber": "+92 306 7891234",
    "senderStatus": "غیر تصدیق شدہ رابطہ",
    "isScam": true,
    "message": "“بھائی غلطی سے میں نے آپ کے ایزی پیسہ پر ۲۵،۰۰۰ روپے بھیج دیے ہیں! یہ اسکرین شاٹ دیکھیں۔ مہربانی کر کے ۲۳،۰۰۰ روپے واپس بھیج دیں، ۲،۰۰۰ آپ رکھ لیں۔”",
    "audioText": "سوال نمبر دس: کسی نے اسکرین شاٹ بھیج کر کہا ہے کہ غلطی سے پچیس ہزار چلے گئے ہیں، تئیس ہزار واپس کر دیں اور دو ہزار رکھ لیں۔ فیصلہ کیجیے: محفوظ ہے یا دھوکہ؟",
    "hint": "اسکرین شاٹ کمپیوٹر پر دو منٹ میں جعلی بن جاتے ہیں! ہمیشہ پہلے اپنی ایپ کھول کر اپنا اصل بیلنس اور ہسٹری چیک کریں۔",
    "correctChoice": "scam",
    "feedback": {
      "scamTitle": "بہترین! واپسی کا فراڈ ناکام!",
      "scamDesc": "آپ نے بالکل درست پہچانا! وہ جھوٹا اسکرین شاٹ دکھا کر آپ سے آپ کے اپنے اصل پیسے نکلوانا چاہتا تھا۔",
      "safeTitle": "خطرہ! بھیجا گیا اسکرین شاٹ جعلی ہے",
      "safeDesc": "جب تک آپ کی اپنی بینک ایپ میں رقم اور میسج نہ دکھے، ایک روپیہ بھی واپس نہ بھیجیں۔",
      "redFlags": [
        "جعلی اسکرین شاٹ رسید",
        "واپسی کی شدید جلدی",
        "۲،۰۰۰ روپے انعام کا لالچ"
      ],
      "whatToDoNext": "اپنی والٹ ایپ میں بیلنس دیکھیں۔ اگر کوئی رقم نہیں آئی تو سمجھ جائیں کہ دھوکہ تھا۔"
    },
    "teachBack": {
      "question": "جب کوئی غلطی سے رقم بھیجنے کا اسکرین شاٹ دکھا کر پیسے واپس مانگے تو سب سے اہم اصول کیا ہے؟",
      "options": [
        {
          "id": "opt-1",
          "text": "اپنی والٹ ایپ خود کھول کر بیلنس اور ہسٹری چیک کریں، اسکرین شاٹ پر یقین نہ کریں",
          "isCorrect": true,
          "explanation": "زبردست! اصل بیلنس دیکھے بغیر پیسے واپس بھیجنا اپنے پیسے گنوانے کا باعث بنتا ہے۔"
        },
        {
          "id": "opt-2",
          "text": "فوری ۲۳،۰۰۰ واپس کر دیں تاکہ دو ہزار کا فائدہ ہو",
          "isCorrect": false,
          "explanation": "ایسا کرنے سے آپ کے اپنے ۲۳ ہزار ضائع ہو جائیں گے کیونکہ سامنے والے نے کچھ نہیں بھیجا تھا۔"
        },
        {
          "id": "opt-3",
          "text": "اسکرین شاٹ کو بڑا کر کے دیکھیں",
          "isCorrect": false,
          "explanation": "جعلی رسیدیں آسانی سے بن جاتی ہیں، ایپ کا ریکارڈ ہی سچ بتاتا ہے۔"
        }
      ]
    }
  },
  {
    "id": "solo-11",
    "scenarioNum": 11,
    "category": "اسٹیٹ بینک آف پاکستان کے نام پر فراڈ",
    "sender": "SBP-Notice",
    "simInfo": "سم ۱ • ۱۱:۴۵ صبح",
    "senderNumber": "+92 300 9876543",
    "senderStatus": "غیر تصدیق شدہ موبائل نمبر",
    "isScam": true,
    "message": "“اسٹیٹ بینک آف پاکستان نوٹس: بائیو میٹرک تصدیق نہ ہونے کی وجہ سے آپ کے تمام اکاؤنٹس منجمد کر دیے گئے ہیں۔ ابھی ہیڈ آفس رابطہ افسر سے رابطہ کریں: 0300-9876543”",
    "audioText": "سوال نمبر گیارہ: میسج آیا ہے کہ اسٹیٹ بینک نے تمام اکاؤنٹس بند کر دیے ہیں اور 0300 والے نمبر پر رابطہ کریں۔ فیصلہ کیجیے: محفوظ ہے یا دھوکہ؟",
    "hint": "اسٹیٹ بینک عام شہریوں کے انفرادی اکاؤنٹس نہیں چلاتا اور نہ ہی عام موبائل نمبروں سے ہیلپ لائن دیتا ہے!",
    "correctChoice": "scam",
    "feedback": {
      "scamTitle": "شاباش! جعلی نوٹس پکڑ لیا!",
      "scamDesc": "آپ نے بالکل درست پہچانا! اسٹیٹ بینک کبھی عام موبائل نمبر سے انفرادی شہریوں کو دھمکیاں نہیں بھیجتا۔",
      "safeTitle": "ہوشیار رہیے! یہ جعلی نوٹس ہے",
      "safeDesc": "اسٹیٹ بینک مرکزی بینک ہے، وہ شہریوں کے کھاتے نہیں سنبھالتا۔ یہ فراڈیے کا بہانا ہے۔",
      "redFlags": [
        "اسٹیٹ بینک کے نام کا غلط استعمال",
        "تمام کھاتے منجمد کرنے کی دھمکی",
        "ہیلپ لائن کے نام پر عام موبائل نمبر"
      ],
      "whatToDoNext": "میسج کو نظر انداز کریں۔ اگر تسلی کرنی ہو تو اپنے بینک کی برانچ جا کر معلوم کریں۔"
    },
    "teachBack": {
      "question": "اسٹیٹ بینک آف پاکستان کے متعلق کون سی بات سچ ہے؟",
      "options": [
        {
          "id": "opt-1",
          "text": "اسٹیٹ بینک عام شہریوں کے اکاؤنٹس نہیں چلاتا اور نہ عام موبائل سے دھمکی دیتا ہے",
          "isCorrect": true,
          "explanation": "شاباش! اسٹیٹ بینک صرف بینکوں کا نگراں ادارہ ہے، عام شہری کا اکاؤنٹ کمرشل بینک میں ہوتا ہے۔"
        },
        {
          "id": "opt-2",
          "text": "اسٹیٹ بینک ایس ایم ایس پر بائیو میٹرک تصدیق کرتا ہے",
          "isCorrect": false,
          "explanation": "بائیو میٹرک تصدیق صرف برانچ میں انگوٹھا لگا کر ہوتی ہے۔"
        },
        {
          "id": "opt-3",
          "text": "اسٹیٹ بینک کا افسر 0300 نمبر استعمال کرتا ہے",
          "isCorrect": false,
          "explanation": "اسٹیٹ بینک کا آفیشل ہیلپ لائن نمبر 111-727-273 ہے۔"
        }
      ]
    }
  },
  {
    "id": "solo-12",
    "scenarioNum": 12,
    "category": "موبائل اسکرین شیئرنگ ایپ کا خطرہ",
    "sender": "Bank Technical Desk",
    "simInfo": "سم ۱ • ۴:۱۰ شام",
    "senderNumber": "+92 340 5544332",
    "senderStatus": "غیر تصدیق شدہ رابطہ",
    "isScam": true,
    "message": "“بینک ہیلپ لائن: آپ کی موبائل بینکنگ ایپ میں تکنیکی مسئلہ آ رہا ہے۔ مسئلہ حل کروانے کے لیے پلے اسٹور سے AnyDesk ایپ ڈاؤن لوڈ کریں اور نو ہندسوں کا کوڈ بتائیں۔”",
    "audioText": "سوال نمبر بارہ: میسج آیا ہے کہ بینک ایپ ٹھیک کرنے کے لیے اینی ڈیسک ایپ انسٹال کریں اور ۹ ہندسوں کا کوڈ بتائیں۔ فیصلہ کیجیے: محفوظ ہے یا دھوکہ؟",
    "hint": "کبھی بھی کسی کے کہنے پر AnyDesk یا TeamViewer انسٹال نہ کریں! اس سے چور آپ کے پورے موبائل کی اسکرین دیکھ اور چلا سکتا ہے۔",
    "correctChoice": "scam",
    "feedback": {
      "scamTitle": "زبردست پہچان! ریموٹ ایپ کا جال!",
      "scamDesc": "آپ نے بالکل درست پہچانا! اینی ڈیسک انسٹال کروانے کا مقصد آپ کا فون کنٹرول کرنا ہوتا ہے۔",
      "safeTitle": "سخت خطرہ! موبائل ہیک ہو سکتا ہے",
      "safeDesc": "اینی ڈیسک کا کوڈ دینے کا مطلب اپنا موبائل چور کے حوالے کر دینا ہے۔",
      "redFlags": [
        "AnyDesk ایپ انسٹال کرنے کا مطالبہ",
        "۹ ہندسوں کا اسکرین کوڈ مانگنا",
        "غیر تصدیق شدہ ہیلپ لائن میسج"
      ],
      "whatToDoNext": "ایسی کوئی ایپ انسٹال نہ کریں۔ اگر غلطی سے ہو جائے تو فوری ان انسٹال کر دیں۔"
    },
    "teachBack": {
      "question": "کسی انجانے شخص کے کہنے پر موبائل میں AnyDesk انسٹال کرنے کا کیا نقصان ہے؟",
      "options": [
        {
          "id": "opt-1",
          "text": "چور آپ کی موبائل اسکرین دیکھ کر تمام پاس ورڈ اور او ٹی پی چرا لے گا",
          "isCorrect": true,
          "explanation": "بالکل درست! ریموٹ اسکرین شیئرنگ سے چور آپ کے تمام خفیہ پیغامات براہ راست دیکھ سکتا ہے۔"
        },
        {
          "id": "opt-2",
          "text": "موبائل کی بیٹری جلدی ختم ہو جائے گی",
          "isCorrect": false,
          "explanation": "بیٹری اہم نہیں، اصل بات بینک کا پیسہ چوری ہونا ہے۔"
        },
        {
          "id": "opt-3",
          "text": "ایپ کا آئیکون غائب ہو جائے گا",
          "isCorrect": false,
          "explanation": "یہ اسکرین شیئر کرنے کی ایپ ہوتی ہے جو چور استعمال کرتے ہیں۔"
        }
      ]
    }
  },
  {
    "id": "solo-13",
    "scenarioNum": 13,
    "category": "اصلی بجلی کا ماہانہ بل نوٹس",
    "sender": "KELECTRIC",
    "simInfo": "سم ۱ • ۱۰:۱۵ صبح",
    "senderNumber": "Official Channel",
    "senderStatus": "تصدیق شدہ یوٹیلٹی چینل",
    "isScam": false,
    "message": "“معزز صارف، کنزیومر نمبر 0400012345678 کا ماہانہ بل ۴،۸۲۰ روپے ادا کرنے کی آخری تاریخ ۱۵ نومبر ہے۔ بروقت ادائیگی سے اضافی چارجز سے بچیں۔ شکریہ۔”",
    "audioText": "سوال نمبر تیرہ: کے الیکٹرک کا میسج آیا ہے کہ کنزیومر نمبر کا بل ۴۸۲۰ روپے ہے اور آخری تاریخ ۱۵ نومبر ہے۔ فیصلہ کیجیے: محفوظ ہے یا دھوکہ؟",
    "hint": "غور کریں: اس میسج میں آپ کا ۱۳ ہندسوں کا کنزیومر نمبر ہے، آخری تاریخ ہے، کوئی فوری بجلی کاٹنے کی دھمکی نہیں اور نہ کسی والٹ پر پیسے مانگے گئے ہیں۔",
    "correctChoice": "safe",
    "feedback": {
      "scamTitle": "یہ میسج محفوظ تھا!",
      "scamDesc": "یہ کے الیکٹرک کی باقاعدہ ماہانہ اطلاع ہے۔ اصلی بل میسج میں ایسی سادہ معلومات ہوتی ہیں۔",
      "safeTitle": "شاباش! درست فیصلہ!",
      "safeDesc": "آپ نے بالکل درست پہچانا۔ اس میں کوئی ڈر، دھمکی یا ذاتی والٹ پر رقم مانگنے کا مطالبہ نہیں ہے۔",
      "redFlags": [
        "تصدیق شدہ برانڈ نام",
        "۱۳ ہندسوں کا کنزیومر نمبر",
        "آخری تاریخ کا باقاعدہ وقت",
        "کوئی مشکوک لنک یا والٹ نہیں"
      ],
      "whatToDoNext": "اس میسج کو محفوظ سمجھیں اور آخری تاریخ سے پہلے بینک ایپ یا کاؤنٹر پر بل ادا کر دیں۔"
    },
    "teachBack": {
      "question": "یہ بجلی بل میسج دھوکہ کیوں نہیں ہے؟",
      "options": [
        {
          "id": "opt-1",
          "text": "اس میں باقاعدہ کنزیومر نمبر اور آخری تاریخ ہے، کوئی ذاتی اکاؤنٹ یا فوری دھمکی نہیں ہے",
          "isCorrect": true,
          "explanation": "درست! سرکاری ادارے صرف تاریخ اور بل بتاتے ہیں، کسی کے ذاتی والٹ پر پیسے نہیں مانگتے۔"
        },
        {
          "id": "opt-2",
          "text": "کیونکہ اس میں اضافی چارجز کا ذکر ہے",
          "isCorrect": false,
          "explanation": "اضافی چارجز بل کا عام حصہ ہوتا ہے، کوئی دھمکی نہیں۔"
        },
        {
          "id": "opt-3",
          "text": "کیونکہ رقم ۴،۸۲۰ روپے مناسب ہے",
          "isCorrect": false,
          "explanation": "رقم نہیں بلکہ کنزیومر نمبر اس کے اصلی ہونے کا ثبوت ہے۔"
        }
      ]
    }
  },
  {
    "id": "solo-14",
    "scenarioNum": 14,
    "category": "اصلی واٹس ایپ سیکیورٹی کوڈ",
    "sender": "WhatsApp",
    "simInfo": "ایس ایم ایس • ۷:۴۰ شام",
    "senderNumber": "Official Channel",
    "senderStatus": "تصدیق شدہ شارٹ کوڈ",
    "isScam": false,
    "message": "“492-018 آپ کا واٹس ایپ تصدیقی کوڈ ہے۔ یہ کوڈ کسی کے ساتھ شیئر مت کریں۔ واٹس ایپ ٹیم آپ سے کبھی یہ کوڈ نہیں مانگتی۔”",
    "audioText": "سوال نمبر چودہ: واٹس ایپ کا آفیشل میسج آیا ہے جس میں ۶ ہندسوں کا کوڈ ہے اور لکھا ہے کہ کسی کو نہ دیں۔ فیصلہ کیجیے: محفوظ ہے یا دھوکہ؟",
    "hint": "یہ میسج تب آتا ہے جب آپ خود واٹس ایپ پر اپنا نمبر لاگ ان کرتے ہیں۔ اس پر واضح ہدایت لکھی ہے: 'کسی کے ساتھ شیئر مت کریں'۔",
    "correctChoice": "safe",
    "feedback": {
      "scamTitle": "یہ میسج محفوظ ہے!",
      "scamDesc": "یہ واٹس ایپ کا باقاعدہ رجسٹریشن کوڈ ہے جو آپ کے خود لاگ ان کرنے پر آتا ہے۔",
      "safeTitle": "آپ نے بالکل درست سمجھا!",
      "safeDesc": "میسج خود محفوظ ہے مگر یاد رکھیں: یہ کوڈ کسی بھی دوسرے شخص کو ہرگز نہیں بتانا!",
      "redFlags": [
        "آفیشل واٹس ایپ چینل",
        "واضح ہدایت: 'کسی کے ساتھ شیئر نہ کریں'",
        "کوئی نقلی لنک یا فیس نہیں"
      ],
      "whatToDoNext": "اگر یہ کوڈ آپ نے خود لاگ ان کرتے وقت مانگا تھا تو اپنی واٹس ایپ اسکرین میں درج کریں۔ کسی اور کو نہ دیں۔"
    },
    "teachBack": {
      "question": "تصدیقی کوڈ (او ٹی پی) آنے پر سب سے اہم ہدایت کیا ہوتی ہے؟",
      "options": [
        {
          "id": "opt-1",
          "text": "کوڈ صرف اپنی ایپ میں خود درج کریں اور کسی فون یا میسج پر کسی کو نہ دیں",
          "isCorrect": true,
          "explanation": "بالکل درست! کوڈ صرف آپ کے اپنے ہاتھ سے درج کرنے کے لیے ہوتا ہے۔"
        },
        {
          "id": "opt-2",
          "text": "کوڈ کو واٹس ایپ اسٹیٹس پر لگا دیں",
          "isCorrect": false,
          "explanation": "ایسا کرنے سے کوئی بھی آپ کا واٹس ایپ کھول لے گا۔"
        },
        {
          "id": "opt-3",
          "text": "کال آنے پر افسر کو لکھوا دیں",
          "isCorrect": false,
          "explanation": "اصلی واٹس ایپ ٹیم کبھی فون پر کوڈ نہیں مانگتی۔"
        }
      ]
    }
  },
  {
    "id": "solo-15",
    "scenarioNum": 15,
    "category": "اے ٹی ایم پن چوری کی کوشش",
    "sender": "Card-Security",
    "simInfo": "سم ۱ • ۹:۱۵ صبح",
    "senderNumber": "+92 331 9988776",
    "senderStatus": "غیر تصدیق شدہ نمبر",
    "isScam": true,
    "message": "“بینک سیکیورٹی الرٹ: آپ کا اے ٹی ایم کارڈ کل رات مشکوک مشین پر استعمال ہونے کا خدشہ ہے۔ کارڈ محفوظ رکھنے کے لیے پرانا پن درج کر کے نیا پن بنائیں: atm-pin-reset.online”",
    "audioText": "سوال نمبر پندرہ: میسج آیا ہے کہ کارڈ کا پن ری سیٹ کرنے کے لیے ویب لنک پر جا کر پرانا پن درج کریں۔ فیصلہ کیجیے: محفوظ ہے یا دھوکہ؟",
    "hint": "اے ٹی ایم پن کسی ویب سائٹ پر تبدیل نہیں ہوتا! پن بدلنے کے لیے بینک کی اصل اے ٹی ایم مشین یا بائیو میٹرک ایپ استعمال ہوتی ہے۔",
    "correctChoice": "scam",
    "feedback": {
      "scamTitle": "شاباش! آخری دھوکہ بھی پکڑ لیا!",
      "scamDesc": "آپ نے شاندار طریقے سے اے ٹی ایم فراڈ ناکام بنایا! کسی ویب سائٹ پر پرانا پن مانگنا ۱۰۰ فیصد فراڈ ہے۔",
      "safeTitle": "ہوشیار! یہ پن چوری کا حربہ ہے",
      "safeDesc": "چور آپ کا پرانا پن حاصل کر کے آپ کے کارڈ کا کلون بنانا چاہتا تھا۔",
      "redFlags": [
        "نقلی ڈومین (.online)",
        "ویب سائٹ پر اے ٹی ایم پن مانگنا",
        "عام موبائل نمبر سے الرٹ"
      ],
      "whatToDoNext": "لنک ہرگز نہ کھولیں۔ اگر پن بدلنا ہو تو بینک کی اے ٹی ایم مشین پر جا کر تبدیل کریں۔"
    },
    "teachBack": {
      "question": "اے ٹی ایم پن تبدیل کرنے کا واحد محفوظ طریقہ کیا ہے؟",
      "options": [
        {
          "id": "opt-1",
          "text": "صرف بینک کی اے ٹی ایم مشین پر جا کر یا بائیو میٹرک ایپ میں پن بدلیں",
          "isCorrect": true,
          "explanation": "مبارک ہو! کسی ایس ایم ایس یا لنک پر اپنا خفیہ پن کبھی درج نہیں کرنا چاہیے۔"
        },
        {
          "id": "opt-2",
          "text": "میسج کے لنک پر پرانا اور نیا پن درج کر دیں",
          "isCorrect": false,
          "explanation": "اس سے چور کو پرانا اور نیا دونوں پن مل جائیں گے اور اکاؤنٹ خالی ہو جائے گا۔"
        },
        {
          "id": "opt-3",
          "text": "بینک منیجر کو فون پر پن بتا دیں",
          "isCorrect": false,
          "explanation": "بینک کا عملہ بھی پن پوچھنے کا مجاز نہیں ہوتا۔"
        }
      ]
    }
  }
],
  en: [
  {
    "id": "solo-1",
    "scenarioNum": 1,
    "category": "Bank Threat Alert",
    "sender": "HBL-Alert",
    "simInfo": "SIM 1 • 02:45 PM",
    "senderNumber": "+92 345 0098112",
    "senderStatus": "Unverified Mobile Number",
    "isScam": true,
    "message": "“Valued Customer! Your bank account will be blocked within 24 hours due to suspicious activity. To keep it active, call 0345-0098112 immediately or verify your CNIC and OTP.”",
    "audioText": "Question 1: An SMS claims your bank account will be blocked. Call this mobile number and verify your OTP. What is your decision: Safe or Scam?",
    "hint": "Real banks send SMS only from official 4-digit shortcodes, never ordinary 11-digit mobile numbers! And banks never ask for OTP over call or SMS.",
    "correctChoice": "scam",
    "feedback": {
      "scamTitle": "Well Done! Excellent Catch!",
      "scamDesc": "You are completely right! Legitimate banks never threaten account blocking from a personal mobile number or ask for OTPs.",
      "safeTitle": "Wait! This Was a Scam",
      "safeDesc": "This SMS is completely fake. Real banks strictly forbid asking for OTPs.",
      "redFlags": [
        "Ordinary mobile number (0345...)",
        "Account blocking threat",
        "Demand for OTP and CNIC"
      ],
      "whatToDoNext": "Delete the message immediately. If concerned, call the official bank helpline printed on your debit card."
    },
    "teachBack": {
      "question": "Why is this message a scam? Choose the correct reason:",
      "options": [
        {
          "id": "opt-1",
          "text": "Real banks do not threaten blocks from mobile numbers or ask for secret OTPs",
          "isCorrect": true,
          "explanation": "Exactly right! Banks use official shortcodes and never ask for secret OTPs."
        },
        {
          "id": "opt-2",
          "text": "Because the bank name was not mentioned",
          "isCorrect": false,
          "explanation": "Scammers frequently forge bank names like HBL; the sender number and OTP request are the real red flags."
        },
        {
          "id": "opt-3",
          "text": "Because it gave a 24-hour limit",
          "isCorrect": false,
          "explanation": "Artificial urgency is a red flag, but asking for OTP from a mobile number is the fatal flaw."
        }
      ]
    }
  },
  {
    "id": "solo-2",
    "scenarioNum": 2,
    "category": "Ehsaas / BISP Fraud",
    "sender": "Benazir Support",
    "simInfo": "WhatsApp • 11:20 AM",
    "senderNumber": "+92 301 7782194",
    "senderStatus": "Unverified WhatsApp Contact",
    "isScam": true,
    "message": "“Congratulations! An aid payment of Rs. 45,000 has been approved for you under the Benazir scheme. Click here to enter your CNIC and wallet PIN: bit.ly/bisp-fund-2026”",
    "audioText": "Question 2: A WhatsApp message promises a 45,000 rupee grant, telling you to enter your secret wallet PIN on a link. Safe or Scam?",
    "hint": "The official government BISP code is strictly 8171! Entering your secret wallet PIN on any link is 100% a scam.",
    "correctChoice": "scam",
    "feedback": {
      "scamTitle": "You Caught the Scam!",
      "scamDesc": "Great job! BISP or any legitimate agency never asks for your secret PIN via a bit.ly link.",
      "safeTitle": "Be Careful! This Is Fraud",
      "safeDesc": "Scammers lure people with free lottery money to steal their mobile wallet PINs.",
      "redFlags": [
        "Unverified WhatsApp sender",
        "Unsolicited cash grant bait",
        "Demand for secret wallet PIN",
        "Suspicious bit.ly link"
      ],
      "whatToDoNext": "Block the sender immediately. Official BISP updates only arrive from SMS 8171."
    },
    "teachBack": {
      "question": "What is the biggest red flag in this BISP message?",
      "options": [
        {
          "id": "opt-1",
          "text": "Asking for your secret wallet PIN on an unofficial bit.ly link",
          "isCorrect": true,
          "explanation": "Bingo! Entering your secret PIN gives scammers full control to empty your wallet."
        },
        {
          "id": "opt-2",
          "text": "The grant amount of 45,000 is too low",
          "isCorrect": false,
          "explanation": "The amount is irrelevant; asking for secret credentials is the scam giveaway."
        },
        {
          "id": "opt-3",
          "text": "It was sent on WhatsApp",
          "isCorrect": false,
          "explanation": "While unusual, the fatal danger is phishing for your secret PIN."
        }
      ]
    }
  },
  {
    "id": "solo-3",
    "scenarioNum": 3,
    "category": "Authentic Bank Transaction",
    "sender": "MEEZAN BANK",
    "simInfo": "SIM 1 • 06:12 PM",
    "senderNumber": "Official Bank Channel",
    "senderStatus": "Verified Bank Channel",
    "isScam": false,
    "message": "“Valued Customer! A transaction of Rs. 2,450 was successful on your debit card ending *4102 at Imtiaz Super Market. Remaining balance Rs. 43,120. If not done by you, contact 111-331-331.”",
    "audioText": "Question 3: Meezan Bank sent an SMS confirming a 2450 rupee shopping debit with an official helpline. Safe or Scam?",
    "hint": "Notice: No web links, no request for passwords or OTPs, only the last 4 card digits shown, and official UAN helpline provided.",
    "correctChoice": "safe",
    "feedback": {
      "scamTitle": "This Message Was Actually Safe!",
      "scamDesc": "This was a standard post-purchase alert from Meezan Bank. Not every message is a scam!",
      "safeTitle": "Excellent! Correct Decision!",
      "safeDesc": "You identified it correctly. It is a genuine debit receipt that requests no confidential information.",
      "redFlags": [
        "Official branded sender ID",
        "No links or click prompts",
        "No passwords or PINs requested",
        "Official UAN 111-331-331 helpline"
      ],
      "whatToDoNext": "Keep this for your records. If you did not make this purchase, call the official number on your card immediately."
    },
    "teachBack": {
      "question": "Why is this bank message completely safe?",
      "options": [
        {
          "id": "opt-1",
          "text": "It is simply a debit notification and does not ask for passwords, OTP, or link clicks",
          "isCorrect": true,
          "explanation": "Spot on! Legitimate bank notifications inform you of activity without requesting secrets."
        },
        {
          "id": "opt-2",
          "text": "Because Imtiaz Super Market is a known store",
          "isCorrect": false,
          "explanation": "Scammers can fake store names; the safety indicator is the absence of credential requests."
        },
        {
          "id": "opt-3",
          "text": "Because it shows a balance of 43,120 rupees",
          "isCorrect": false,
          "explanation": "Balance displays are standard for bank receipts."
        }
      ]
    }
  },
  {
    "id": "solo-4",
    "scenarioNum": 4,
    "category": "Electricity Bill Threat",
    "sender": "WAPDA-ALERT",
    "simInfo": "SIM 2 • 08:30 PM",
    "senderNumber": "+92 308 9123847",
    "senderStatus": "Unverified Mobile Number",
    "isScam": true,
    "message": "“Power Consumer Notice: Your unpaid electricity bill will cause power disconnection tonight at 10 PM. Transfer the bill via JazzCash to SDO Afzal at 0308-9123847 immediately.”",
    "audioText": "Question 4: An SMS says your electricity will be cut off tonight unless you JazzCash the money to an officer's personal number. Safe or Scam?",
    "hint": "Electric utility companies never ask consumers to send payments to an officer's private mobile wallet! Bills are only paid against 14-digit consumer IDs.",
    "correctChoice": "scam",
    "feedback": {
      "scamTitle": "Good Job! You Stopped a Scam!",
      "scamDesc": "You recognized it immediately! Utility bills are never paid to an individual's personal mobile number.",
      "safeTitle": "Danger! This Was Fraud",
      "safeDesc": "Using the fear of a 10 PM blackout, the scammer wanted you to send money to their personal account.",
      "redFlags": [
        "Demand to transfer to personal JazzCash",
        "Threat of immediate 10 PM power cutoff",
        "Unverified 11-digit mobile sender"
      ],
      "whatToDoNext": "Check your printed utility bill or use your official banking app to check your consumer number balance."
    },
    "teachBack": {
      "question": "What is the decisive proof of fraud in this electricity alert?",
      "options": [
        {
          "id": "opt-1",
          "text": "Demanding that electricity bill money be sent to a personal JazzCash number",
          "isCorrect": true,
          "explanation": "Correct! Utility bills must only be paid through authorized bank/app channels against consumer IDs."
        },
        {
          "id": "opt-2",
          "text": "The cutoff was scheduled for 10 PM",
          "isCorrect": false,
          "explanation": "The threat induces panic, but the payment method proves it is a fraud."
        },
        {
          "id": "opt-3",
          "text": "The name WAPDA-ALERT was used",
          "isCorrect": false,
          "explanation": "Scammers routinely impersonate public utilities."
        }
      ]
    }
  },
  {
    "id": "solo-5",
    "scenarioNum": 5,
    "category": "Fake Courier Parcel",
    "sender": "TCS-Express",
    "simInfo": "SIM 1 • 03:15 PM",
    "senderNumber": "+92 333 4410982",
    "senderStatus": "Unverified Contact",
    "isScam": true,
    "message": "“Your parcel is held at the sorting facility due to incomplete address. Pay Rs. 150 redelivery fee within 48 hours to update address: tcs-tracking-delivery.cc/pay”",
    "audioText": "Question 5: A courier SMS says your parcel is held and asks you to pay a 150 rupee fee on a web link. Safe or Scam?",
    "hint": "Ask yourself: Did you even order a parcel? Couriers do not demand 150 rupee card payments on unofficial .cc links to fix an address.",
    "correctChoice": "scam",
    "feedback": {
      "scamTitle": "You Unmasked the Parcel Phishing Scam!",
      "scamDesc": "Spot on! The tiny Rs. 150 fee is bait to steal your credit/debit card numbers on a fake website.",
      "safeTitle": "Beware! This Is a Phishing Trap",
      "safeDesc": "Fake parcel SMS messages trick victims into typing their card numbers and CVV codes on spoofed websites.",
      "redFlags": [
        "Fake domain (.cc)",
        "Suspicious nominal Rs. 150 fee",
        "Unsolicited parcel you never ordered"
      ],
      "whatToDoNext": "Do not open the link. If you were truly expecting a delivery, check the tracking number on the official TCS app or call 111-123-456."
    },
    "teachBack": {
      "question": "Why does the scammer only request a small fee of Rs. 150?",
      "options": [
        {
          "id": "opt-1",
          "text": "To lower your suspicion so you freely enter your debit/credit card details",
          "isCorrect": true,
          "explanation": "Exactly! Victims think 150 rupees is harmless, but the attacker captures full card credentials."
        },
        {
          "id": "opt-2",
          "text": "Because redelivery costs exactly 150 rupees",
          "isCorrect": false,
          "explanation": "Legitimate couriers use cash on delivery or official apps, never rogue .cc websites."
        },
        {
          "id": "opt-3",
          "text": "To cover warehouse administrative costs",
          "isCorrect": false,
          "explanation": "This is merely the fabricated pretext used by fraudsters."
        }
      ]
    }
  },
  {
    "id": "solo-6",
    "scenarioNum": 6,
    "category": "OTP Theft Scam",
    "sender": "Unknown Number",
    "simInfo": "WhatsApp • 04:50 PM",
    "senderNumber": "+92 321 8892144",
    "senderStatus": "Unverified Contact",
    "isScam": true,
    "message": "“Salam brother, by mistake my EasyPaisa verification code was sent to your phone. Please SMS that 4-digit code back to me, my sick mother's medicine money is stuck!”",
    "audioText": "Question 6: A stranger claims their verification code was sent to your phone by mistake and asks you to forward it. Safe or Scam?",
    "hint": "Any code sent to your phone number is for YOUR account! A verification code for someone else can never land on your SIM by mistake.",
    "correctChoice": "scam",
    "feedback": {
      "scamTitle": "Outstanding! You Prevented Account Takeover!",
      "scamDesc": "You saw right through it! The scammer was attempting to log in to your wallet and needed your OTP.",
      "safeTitle": "Major Danger! This Is 100% Fraud",
      "safeDesc": "The story about the sick mother is emotional manipulation. Sharing that code would compromise your wallet immediately.",
      "redFlags": [
        "Asking for an OTP received on YOUR phone",
        "Emotional manipulation story (sick mother)",
        "Unverified sender number"
      ],
      "whatToDoNext": "Never share any verification code. Delete the message and block the contact immediately."
    },
    "teachBack": {
      "question": "What happens if you share an SMS verification code (OTP) with someone else?",
      "options": [
        {
          "id": "opt-1",
          "text": "The fraudster gains full access to your account and can drain your money",
          "isCorrect": true,
          "explanation": "Spot on! An OTP is your personal digital key; giving it away surrenders your account."
        },
        {
          "id": "opt-2",
          "text": "It helps them buy their mother's medicine",
          "isCorrect": false,
          "explanation": "This is purely fictional manipulation to evoke false sympathy."
        },
        {
          "id": "opt-3",
          "text": "Nothing, because it is just a 4-digit number",
          "isCorrect": false,
          "explanation": "An OTP authorizes critical security actions and money transfers."
        }
      ]
    }
  },
  {
    "id": "solo-7",
    "scenarioNum": 7,
    "category": "Gas Disconnection Threat",
    "sender": "SSGC-Notice",
    "simInfo": "SIM 2 • 01:20 PM",
    "senderNumber": "+92 312 6543210",
    "senderStatus": "Unverified Mobile Number",
    "isScam": true,
    "message": "“SSGC Consumer Alert: Gas meter inspection penalty of Rs. 6,800 is overdue. Avoid immediate disconnection by paying via card at ssgc-bill-clearance.cc.”",
    "audioText": "Question 7: An SMS says a gas meter penalty of 6,800 is overdue and directs you to a .cc link to pay with your card. Safe or Scam?",
    "hint": "Official utility websites in Pakistan never use .cc domains! True meter penalties appear on your official monthly physical bill.",
    "correctChoice": "scam",
    "feedback": {
      "scamTitle": "Excellent Catch! Gas Scam Neutralized!",
      "scamDesc": "You are totally right! Directing users to a rogue .cc link is a textbook phishing scheme to steal card data.",
      "safeTitle": "Beware! This Is a Phishing Link",
      "safeDesc": "Sui gas utilities never collect card payments via arbitrary web links sent in SMS messages.",
      "redFlags": [
        "Fake domain extension (.cc)",
        "Urgent threat of meter disconnection",
        "Sent from a personal mobile number"
      ],
      "whatToDoNext": "Do not click the link. Verify any billing disputes at an official customer center or on your banking app."
    },
    "teachBack": {
      "question": "Why should you never panic over this gas cutoff SMS?",
      "options": [
        {
          "id": "opt-1",
          "text": "Public utility companies do not ask for card payments on suspicious .cc web domains",
          "isCorrect": true,
          "explanation": "Exactly right! Utilities bill against consumer numbers via authorized banking systems."
        },
        {
          "id": "opt-2",
          "text": "Because gas supply can never be disconnected",
          "isCorrect": false,
          "explanation": "Disconnections can happen, but only after formal notices on official paper bills."
        },
        {
          "id": "opt-3",
          "text": "Because 6,800 rupees is too high",
          "isCorrect": false,
          "explanation": "The fake website and payment method are the real giveaways."
        }
      ]
    }
  },
  {
    "id": "solo-8",
    "scenarioNum": 8,
    "category": "Emergency Impersonation",
    "sender": "Unknown Number",
    "simInfo": "WhatsApp • 09:40 PM",
    "senderNumber": "+92 334 5678901",
    "senderStatus": "Unverified Number",
    "isScam": true,
    "message": "“Salam Uncle, this is Asad. My friend had a severe accident and is in hospital. Please send Rs. 15,000 to this EasyPaisa number immediately, do not inform Dad yet!”",
    "audioText": "Question 8: An unfamiliar number claims to be nephew Asad, begging for 15,000 rupees for a hospital accident and saying not to tell anyone. Safe or Scam?",
    "hint": "Classic fraud pattern: 'Don't tell anyone' combined with urgent medical panic. Always call your relative's known telephone number first!",
    "correctChoice": "scam",
    "feedback": {
      "scamTitle": "You Defeated an Emotional Scam!",
      "scamDesc": "Great instincts! Fraudsters impersonate loved ones in fabricated emergencies to rush victims into sending money.",
      "safeTitle": "Wait! This Is High Risk",
      "safeDesc": "Whenever a message says 'Do not tell anyone', alarm bells should ring. Always verify with family first.",
      "redFlags": [
        "Unfamiliar number claiming family identity",
        "Condition of secrecy ('Don't tell Dad')",
        "Demand for immediate mobile wallet transfer"
      ],
      "whatToDoNext": "Do not send any money. Call Asad on his known real phone number or call his parents to verify."
    },
    "teachBack": {
      "question": "What is your best immediate response when an unknown number claims to be a relative in an emergency?",
      "options": [
        {
          "id": "opt-1",
          "text": "Call that relative's saved existing number or their immediate family to verify",
          "isCorrect": true,
          "explanation": "Perfect! In almost all cases, the relative is completely safe at home and the sender is a con artist."
        },
        {
          "id": "opt-2",
          "text": "Immediately send the 15,000 rupees so there is no medical delay",
          "isCorrect": false,
          "explanation": "Doing so sends your hard-earned money straight into a scammer's pocket."
        },
        {
          "id": "opt-3",
          "text": "Reply on WhatsApp asking for more details",
          "isCorrect": false,
          "explanation": "The scammer will simply spin more lies; voice verification on a known number is essential."
        }
      ]
    }
  },
  {
    "id": "solo-9",
    "scenarioNum": 9,
    "category": "Part-Time Job Scam",
    "sender": "International Recruitment",
    "simInfo": "WhatsApp • 10:05 AM",
    "senderNumber": "+44 7911 123456",
    "senderStatus": "Foreign Unverified Number (+44)",
    "isScam": true,
    "message": "“Hello! Earn Rs. 4,000 to 9,000 daily from home just by liking YouTube and TikTok videos. No experience required. Join our group to get paid immediately.”",
    "audioText": "Question 9: A foreign number offers thousands of rupees daily just for liking social media videos. Safe or Scam?",
    "hint": "Nobody pays 9,000 rupees per day for tapping video likes! This is a task scam that demands upfront deposits later.",
    "correctChoice": "scam",
    "feedback": {
      "scamTitle": "You Spotted the Online Job Trap!",
      "scamDesc": "Well done! These unsolicited job offers from international numbers are fraudulent task scams.",
      "safeTitle": "Heads Up! This Is a Task Scam",
      "safeDesc": "They lure victims with easy small rewards and later steal large sums under the guise of 'VIP investment upgrades'.",
      "redFlags": [
        "Foreign UK (+44) anonymous sender",
        "Unrealistic promise of Rs. 9,000/day for trivial tasks",
        "Link to join external task groups"
      ],
      "whatToDoNext": "Select 'Report and Block' in WhatsApp. Never join unverified task groups."
    },
    "teachBack": {
      "question": "What is the true objective of schemes promising thousands for video likes?",
      "options": [
        {
          "id": "opt-1",
          "text": "To lure victims with initial micro-rewards and then extract large 'security deposits'",
          "isCorrect": true,
          "explanation": "Accurate! This is a known global cyber scam known as task-based investment fraud."
        },
        {
          "id": "opt-2",
          "text": "To create legitimate employment in Pakistan",
          "isCorrect": false,
          "explanation": "These are organized criminal syndicates with no legitimate business ties."
        },
        {
          "id": "opt-3",
          "text": "To boost YouTube statistics",
          "isCorrect": false,
          "explanation": "The likes are merely smoke and mirrors to disguise financial theft."
        }
      ]
    }
  },
  {
    "id": "solo-10",
    "scenarioNum": 10,
    "category": "Overpayment Refund Trap",
    "sender": "Unknown Number",
    "simInfo": "WhatsApp • 05:25 PM",
    "senderNumber": "+92 306 7891234",
    "senderStatus": "Unverified Contact",
    "isScam": true,
    "message": "“Brother, by mistake I sent Rs. 25,000 to your EasyPaisa account! See this attached slip. Please return Rs. 23,000 urgently, you can keep Rs. 2,000 for your trouble.”",
    "audioText": "Question 10: Someone sent a payment slip screenshot claiming they transferred 25,000 by mistake and asking for 23,000 back. Safe or Scam?",
    "hint": "Screenshots can be edited in seconds! Always open your official wallet app and check your actual balance and history first.",
    "correctChoice": "scam",
    "feedback": {
      "scamTitle": "Excellent! Overpayment Trap Defeated!",
      "scamDesc": "You saw through it! The scammer used a fabricated receipt to get you to send real money from your pocket.",
      "safeTitle": "Danger! The Screenshot Is Fake",
      "safeDesc": "Never return funds based on a picture. Always verify incoming funds directly inside your official app.",
      "redFlags": [
        "Photoshopped payment slip",
        "Urgent request to reverse funds",
        "Rs. 2,000 'keep the change' bait"
      ],
      "whatToDoNext": "Open your wallet app independently. If no funds arrived, it was a deliberate fraud attempt."
    },
    "teachBack": {
      "question": "What is the golden rule when someone claims an accidental money transfer and sends a screenshot?",
      "options": [
        {
          "id": "opt-1",
          "text": "Open your own banking app to verify balance and transaction history; never trust screenshots",
          "isCorrect": true,
          "explanation": "Great job! Screenshots are easily forged; your bank's live ledger is the only true source."
        },
        {
          "id": "opt-2",
          "text": "Quickly return 23,000 to keep the 2,000 profit",
          "isCorrect": false,
          "explanation": "You would lose 23,000 of your own money since the sender never actually paid you."
        },
        {
          "id": "opt-3",
          "text": "Zoom in on the screenshot image",
          "isCorrect": false,
          "explanation": "Image inspection is unreliable compared to opening your official wallet app."
        }
      ]
    }
  },
  {
    "id": "solo-11",
    "scenarioNum": 11,
    "category": "Regulatory Impersonation",
    "sender": "SBP-Notice",
    "simInfo": "SIM 1 • 11:45 AM",
    "senderNumber": "+92 300 9876543",
    "senderStatus": "Unverified Mobile Number",
    "isScam": true,
    "message": "“State Bank of Pakistan Notice: All your bank accounts have been frozen due to unverified biometric CNIC records. Immediately contact the Head Office officer at 0300-9876543.”",
    "audioText": "Question 11: An SMS claiming to be State Bank says all your accounts are frozen and tells you to call a 0300 mobile number. Safe or Scam?",
    "hint": "The State Bank of Pakistan regulates banks and never manages retail personal customer accounts directly or uses ordinary mobile helplines!",
    "correctChoice": "scam",
    "feedback": {
      "scamTitle": "Well Done! Fake SBP Notice Detected!",
      "scamDesc": "You got it! SBP is a regulatory central bank and never issues threats to individual retail consumers from mobile numbers.",
      "safeTitle": "Watch Out! This Is Deception",
      "safeDesc": "Criminals use prestigious government names like SBP to terrify citizens into complying with unauthorized demands.",
      "redFlags": [
        "Misuse of State Bank's name",
        "Threat to freeze all bank accounts",
        "Personal mobile number given as a helpline"
      ],
      "whatToDoNext": "Ignore the SMS. If you have questions about your bank accounts, visit your retail branch in person."
    },
    "teachBack": {
      "question": "Which fact regarding the State Bank of Pakistan is 100% true?",
      "options": [
        {
          "id": "opt-1",
          "text": "SBP does not manage individual consumer accounts or threaten citizens from mobile numbers",
          "isCorrect": true,
          "explanation": "Spot on! SBP oversees institutions, while citizens bank with licensed commercial institutions."
        },
        {
          "id": "opt-2",
          "text": "SBP conducts biometric verification over SMS",
          "isCorrect": false,
          "explanation": "Biometric verification requires physical thumbprint scanning at a registered facility."
        },
        {
          "id": "opt-3",
          "text": "SBP officers use 0300 mobile phones for customer service",
          "isCorrect": false,
          "explanation": "The official SBP helpline is 111-727-273, never a random cell phone."
        }
      ]
    }
  },
  {
    "id": "solo-12",
    "scenarioNum": 12,
    "category": "Remote Access Trap",
    "sender": "Bank Technical Desk",
    "simInfo": "SIM 1 • 04:10 PM",
    "senderNumber": "+92 340 5544332",
    "senderStatus": "Unverified Contact",
    "isScam": true,
    "message": "“Bank Support: Your mobile banking app update has failed. To resolve this instantly, please install the 'AnyDesk' remote app from Play Store and share the 9-digit code with our technician.”",
    "audioText": "Question 12: An SMS says to install AnyDesk and share a 9-digit code to fix your banking app. Safe or Scam?",
    "hint": "NEVER install AnyDesk, TeamViewer, or screen-sharing software at the request of any caller or SMS! It grants total control over your phone.",
    "correctChoice": "scam",
    "feedback": {
      "scamTitle": "Superb Detection! Screen Takeover Avoided!",
      "scamDesc": "You made the right call! Remote desktop apps give attackers visual and remote control over your entire device.",
      "safeTitle": "High Danger! Device Takeover Risk",
      "safeDesc": "Sharing an AnyDesk code is equivalent to handing your unlocked phone to a stranger on the street.",
      "redFlags": [
        "Request to install AnyDesk or remote control apps",
        "Asking for a 9-digit screen-sharing code",
        "Unverified technical support SMS"
      ],
      "whatToDoNext": "Do not install any software. If already downloaded, delete the application immediately."
    },
    "teachBack": {
      "question": "What is the critical danger of installing AnyDesk on the instruction of an unknown party?",
      "options": [
        {
          "id": "opt-1",
          "text": "The attacker can observe your screen in real time, intercept OTPs, and empty bank accounts",
          "isCorrect": true,
          "explanation": "Exactly right! Screen sharing reveals passwords and verification codes directly to attackers."
        },
        {
          "id": "opt-2",
          "text": "It will quickly drain your phone battery",
          "isCorrect": false,
          "explanation": "Battery consumption is trivial; total financial compromise is the real threat."
        },
        {
          "id": "opt-3",
          "text": "The banking app icon will disappear",
          "isCorrect": false,
          "explanation": "The application allows full remote visual and touch control."
        }
      ]
    }
  },
  {
    "id": "solo-13",
    "scenarioNum": 13,
    "category": "Authentic Utility Bill Reminder",
    "sender": "KELECTRIC",
    "simInfo": "SIM 1 • 10:15 AM",
    "senderNumber": "Official Channel",
    "senderStatus": "Verified Utility Channel",
    "isScam": false,
    "message": "“Valued Consumer, monthly bill of Rs. 4,820 for Consumer No. 0400012345678 is due by 15 Nov. Pay on time to avoid late surcharge. Thank you.”",
    "audioText": "Question 13: K-Electric sent an SMS with your 13-digit consumer number and due date of November 15. Safe or Scam?",
    "hint": "Notice: Contains your specific 13-digit consumer number, normal payment due date, no threats of immediate power cuts, and no personal wallet transfer demands.",
    "correctChoice": "safe",
    "feedback": {
      "scamTitle": "This Message Was Safe!",
      "scamDesc": "This is a regular monthly bill reminder from K-Electric. Legitimate billing reminders are straightforward and informative.",
      "safeTitle": "Well Done! Correct Assessment!",
      "safeDesc": "You accurately recognized that this message contains no threats, requests no personal transfers, and is safe.",
      "redFlags": [
        "Verified utility sender ID",
        "Specific 13-digit consumer number included",
        "Standard billing due date window",
        "No request for personal transfers or clicks"
      ],
      "whatToDoNext": "Treat this as safe and pay your bill through your usual bank app or authorized counter before the due date."
    },
    "teachBack": {
      "question": "Why is this utility notification legitimate rather than a scam?",
      "options": [
        {
          "id": "opt-1",
          "text": "It provides a specific consumer number and regular due date without panic or personal wallet demands",
          "isCorrect": true,
          "explanation": "Spot on! Public utilities provide neutral account notices, not high-pressure extortion."
        },
        {
          "id": "opt-2",
          "text": "Because it mentions a late payment surcharge",
          "isCorrect": false,
          "explanation": "Late surcharges are standard utility billing terms, not fraudulent threats."
        },
        {
          "id": "opt-3",
          "text": "Because 4,820 rupees is an affordable amount",
          "isCorrect": false,
          "explanation": "The amount does not establish legitimacy; the consumer number and normal procedure do."
        }
      ]
    }
  },
  {
    "id": "solo-14",
    "scenarioNum": 14,
    "category": "Authentic Verification Code (OTP)",
    "sender": "WhatsApp",
    "simInfo": "SMS • 07:40 PM",
    "senderNumber": "Official Channel",
    "senderStatus": "Verified Shortcode",
    "isScam": false,
    "message": "“492-018 is your WhatsApp verification code. Do not share this code with anyone. WhatsApp never asks for this code.”",
    "audioText": "Question 14: An official WhatsApp SMS delivers a 6-digit verification code with explicit instructions not to share it. Safe or Scam?",
    "hint": "This message arrives when YOU initiate login on your phone. It contains the explicit warning: 'Do not share this code with anyone'.",
    "correctChoice": "safe",
    "feedback": {
      "scamTitle": "This Message Is Legitimate!",
      "scamDesc": "This is the authentic WhatsApp login code triggered when you register or sign in to your phone.",
      "safeTitle": "You Recognized It Correctly!",
      "safeDesc": "The message is genuine, but remember the golden rule: Never share this code with anyone who asks for it!",
      "redFlags": [
        "Official WhatsApp sender ID",
        "Explicit security warning: 'Do not share this code'",
        "No malicious links or fees demanded"
      ],
      "whatToDoNext": "If you requested this code, type it into your WhatsApp app. Never share it over a call or message."
    },
    "teachBack": {
      "question": "What is the most critical rule when receiving an official verification code (OTP)?",
      "options": [
        {
          "id": "opt-1",
          "text": "Enter the code into your app yourself; never disclose it over a call or message to anyone",
          "isCorrect": true,
          "explanation": "Exactly! Verification codes are strictly for your own device, never for verbal disclosure."
        },
        {
          "id": "opt-2",
          "text": "Post the code on social media status",
          "isCorrect": false,
          "explanation": "Doing so would compromise your account security."
        },
        {
          "id": "opt-3",
          "text": "Read it aloud to whoever calls asking for verification",
          "isCorrect": false,
          "explanation": "Genuine staff never request verbal disclosure of OTPs."
        }
      ]
    }
  },
  {
    "id": "solo-15",
    "scenarioNum": 15,
    "category": "ATM Security Phishing",
    "sender": "Card-Security",
    "simInfo": "SIM 1 • 09:15 AM",
    "senderNumber": "+92 331 9988776",
    "senderStatus": "Unverified Number",
    "isScam": true,
    "message": "“Bank Security Alert: Your ATM card is at risk of skimming fraud from a recent machine. Secure your card by entering your old PIN to create a new one at: atm-pin-reset.online”",
    "audioText": "Question 15: An SMS claims your ATM card was skimmed and instructs you to enter your old PIN on a website to reset it. Safe or Scam?",
    "hint": "ATM PINs can NEVER be reset on arbitrary websites! Changing your PIN requires visiting a physical ATM machine or using your official biometric app.",
    "correctChoice": "scam",
    "feedback": {
      "scamTitle": "Fantastic! You Foiled the Final Scam!",
      "scamDesc": "Outstanding! Asking for an existing ATM PIN on an unofficial website is 100% phishing.",
      "safeTitle": "Beware! ATM Phishing Trap",
      "safeDesc": "Attackers want your current PIN so they can clone your ATM card and withdraw cash.",
      "redFlags": [
        "Unofficial domain extension (.online)",
        "Demanding current ATM PIN on a website",
        "Alert from an ordinary mobile number"
      ],
      "whatToDoNext": "Do not open the website. If you want to reset your PIN, do it at a physical ATM machine inside a bank branch."
    },
    "teachBack": {
      "question": "What is the only safe method to change your bank ATM PIN?",
      "options": [
        {
          "id": "opt-1",
          "text": "Only at an official bank ATM machine or within your verified biometric banking app",
          "isCorrect": true,
          "explanation": "Congratulations! Never type your secret PIN into any SMS link or external website."
        },
        {
          "id": "opt-2",
          "text": "Enter both old and new PINs on the link provided in the SMS",
          "isCorrect": false,
          "explanation": "This surrenders both credentials directly to the fraudsters."
        },
        {
          "id": "opt-3",
          "text": "Read the PIN to a bank employee over the phone",
          "isCorrect": false,
          "explanation": "Even bank staff are not authorized to ask for your confidential PIN."
        }
      ]
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
