
// ===== LANGUAGE DATA =====
const translations = {
  en: {
    title: "Build Trust. Get More Bookings. Grow Your Car Rental Business.",
    subtitle: "We create clean, professional websites that make customers choose you.",
    services: "What We Do",
    portfolio: "Recent Work",
    testimonial: "“Our clients trusted us more after we launched our new website.”",
    cta: "Let’s build something professional for your business"
  },

  fr: {
    title: "Gagnez plus de réservations avec un site web professionnel",
    subtitle: "Nous créons des sites modernes qui inspirent confiance.",
    services: "Nos Services",
    portfolio: "Nos Réalisations",
    testimonial: "« Nos clients nous font plus confiance depuis notre nouveau site. »",
    cta: "Construisons quelque chose de professionnel pour votre entreprise"
  },

  ar: {
    title: "طوّر نشاطك و احصل على المزيد من الحجوزات",
    subtitle: "نصمم مواقع احترافية تجعل العملاء يختارونك",
    services: "خدماتنا",
    portfolio: "أعمالنا",
    testimonial: "“زاد عدد العملاء بعد إطلاق الموقع الجديد”",
    cta: "دعنا نبني لك موقعًا احترافيًا"
  }
};

// ===== LANGUAGE SWITCH FUNCTION =====
function setLang(lang){

  // Change HTML lang attribute
  document.documentElement.lang = lang;

  // Handle RTL for Arabic
  if(lang === "ar"){
    document.documentElement.dir = "rtl";
  } else {
    document.documentElement.dir = "ltr";
  }

  // Update text content
  document.getElementById("title").innerText = translations[lang].title;
  document.getElementById("subtitle").innerText = translations[lang].subtitle;
  document.getElementById("services-title").innerText = translations[lang].services;
  document.getElementById("portfolio-title").innerText = translations[lang].portfolio;
  document.getElementById("testimonial-text").innerText = translations[lang].testimonial;
  document.getElementById("cta-title").innerText = translations[lang].cta;
}

// ===== OPTIONAL: DEFAULT LANGUAGE =====
setLang("en");
