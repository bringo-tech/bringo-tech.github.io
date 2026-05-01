const translations = {
  en: {
    title: "Build Trust. Get More Bookings. Grow Your Car Rental Business.",
    subtitle: "We create clean, professional websites that make customers choose you.",
    services: "What We Do",
    portfolio: "Recent Work",
    testimonial: "Our clients trusted us more after launching their new website.",
    cta: "Let’s build something professional for your business",
    stat1_title: "Fast Delivery",
    stat1_desc: "Launch in a few days",
    stat2_title: "Mobile First",
    stat2_desc: "Perfect on all devices",
    stat3_title: "Client Focused",
    stat3_desc: "Built to attract visitors",
    portfolio1: "Luxury Cars — Tunis",
    portfolio2: "DriveNow — Booking Platform",
    portfolio3: "EcoCars — Rental Website",
    contact_btn: "Contact",
    cta_btn: "Talk With Us",
    footer: "© 2026 Bringo Tech — Professional Web Solutions",
    service1_title: "Website Creation",
    service1_desc: "Modern and professional design that reflects your brand.",
    service2_title: "Online Booking",
    service2_desc: "Let your customers reserve cars easily and quickly.",
    service3_title: "Visibility & Growth",
    service3_desc: "Help your business get found and trusted online.",
    contact_form_title: "Ready to get more bookings?",
    contact_form_desc: "Share your project details and we'll craft a custom car rental website that turns visitors into loyal customers.",
    name_label: "Your name",
    email_label: "Email",
    phone_label: "WhatsApp / Phone",
    message_label: "Project details",
    send_button: "Send Request"
  },

  fr: {
    title: "Gagnez plus de réservations avec un site web professionnel",
    subtitle: "Nous créons des sites modernes qui inspirent confiance.",
    services: "Nos Services",
    portfolio: "Nos Réalisations",
    testimonial: "Nos clients nous font plus confiance après le nouveau site.",
    cta: "Construisons quelque chose de professionnel pour votre entreprise",
    stat1_title: "Livraison Rapide",
    stat1_desc: "Lancement en quelques jours",
    stat2_title: "Mobile First",
    stat2_desc: "Parfait sur tous les appareils",
    stat3_title: "Client Centré",
    stat3_desc: "Conçu pour attirer les visiteurs",
    portfolio1: "Voitures de Luxe — Tunis",
    portfolio2: "DriveNow — Plateforme de Réservation",
    portfolio3: "EcoCars — Site Web de Location",
    cta_btn: "Contactez-nous",
    footer: "© 2026 Bringo Tech — Solutions Web Professionnelles",
    service1_title: "Création de Sites Web",
    service1_desc: "Design moderne et professionnel qui reflète votre marque.",
    service2_title: "Réservation en Ligne",
    service2_desc: "Permettez à vos clients de réserver des voitures facilement et rapidement.",
    service3_title: "Visibilité & Croissance",
    service3_desc: "Aidez votre entreprise à être trouvée et faire confiance en ligne.",
    cta_btn: "Contactez-nous",
    contact_form_title: "Prêt à obtenir plus de réservations ?",
    contact_form_desc: "Partagez les détails de votre projet et nous créerons un site web de location de voitures personnalisé qui transforme les visiteurs en clients fidèles.",
    name_label: "Votre nom",
    email_label: "Email",
    phone_label: "WhatsApp / Téléphone",
    message_label: "Détails du projet",
    send_button: "Envoyer la demande"
  },

  ar: {
    title: "طوّر نشاطك و احصل على المزيد من الحجوزات",
    subtitle: "نصمم مواقع احترافية تجعل العملاء يختارونك",
    services: "خدماتنا",
    portfolio: "أعمالنا",
    testimonial: "زاد عدد العملاء بعد إطلاق الموقع الجديد",
    cta: "دعنا نبني لك موقعًا احترافيًا",
    stat1_title: "تسليم سريع",
    stat1_desc: "إطلاق خلال أيام قليلة",
    stat2_title: "الأولوية للهاتف",
    stat2_desc: "مثالي على جميع الأجهزة",
    stat3_title: "التركيز على الحريف",
    stat3_desc: "مصمم لجذب الزوار",
    portfolio1: "سيارات فاخرة — تونس",
    portfolio2: "درايف ناو — منصة الحجز",
    portfolio3: "إيكو كارز — موقع تأجير",
    cta_btn: "اتصل بنا",
    footer: "© 2026 برينجو تك — حلول ويب احترافية",
    service1_title: "إنشاء مواقع الويب",
    service1_desc: "تصميم حديث واحترافي يعكس علامتك التجارية.",
    service2_title: "الحجز عبر الإنترنت",
    service2_desc: "دع عملائك يحجزون السيارات بسهولة وسرعة.",
    service3_title: "الظهور والنمو",
    service3_desc: "ساعد عملك على أن يُكتشف ويُثق به عبر الإنترنت.",
    contact_form_title: "جاهز للحصول على المزيد من الحجوزات؟",
    contact_form_desc: "شارك تفاصيل مشروعك وسنصمم موقع تأجير سيارات مخصص يحول الزوار إلى عملاء مخلصين.",
    name_label: "اسمك",
    email_label: "البريد الإلكتروني",
    phone_label: "واتساب / الهاتف",
    message_label: "تفاصيل المشروع",
    send_button: "إرسال الطلب"
  }
};

function setLang(lang){
  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === "ar") ? "rtl" : "ltr";

  // Remove active class from all buttons
  document.querySelectorAll('.nav-right button').forEach(btn => {
    btn.classList.remove('active');
  });

  // Add active class to current language button
  const activeBtn = document.querySelector(`button[onclick="setLang('${lang}')"]`);
  if (activeBtn) {
    activeBtn.classList.add('active');
  }

  document.getElementById("title").innerText = translations[lang].title;
  document.getElementById("subtitle").innerText = translations[lang].subtitle;
  document.getElementById("services-title").innerText = translations[lang].services;
  document.getElementById("portfolio-title").innerText = translations[lang].portfolio;
  document.getElementById("testimonial-text").innerText = translations[lang].testimonial;
  document.getElementById("cta-title").innerText = translations[lang].cta;

  // Stats section
  document.getElementById("stat1-title").innerText = translations[lang].stat1_title;
  document.getElementById("stat1-desc").innerText = translations[lang].stat1_desc;
  document.getElementById("stat2-title").innerText = translations[lang].stat2_title;
  document.getElementById("stat2-desc").innerText = translations[lang].stat2_desc;
  document.getElementById("stat3-title").innerText = translations[lang].stat3_title;
  document.getElementById("stat3-desc").innerText = translations[lang].stat3_desc;

  // Portfolio items
  document.getElementById("portfolio1").innerText = translations[lang].portfolio1;
  document.getElementById("portfolio2").innerText = translations[lang].portfolio2;
  document.getElementById("portfolio3").innerText = translations[lang].portfolio3;

  // Buttons and footer
  document.getElementById("cta-btn").innerText = translations[lang].cta_btn;
  document.getElementById("footer").innerText = translations[lang].footer;

  // Services
  document.getElementById("service1-title").innerText = translations[lang].service1_title;
  document.getElementById("service1-desc").innerText = translations[lang].service1_desc;
  document.getElementById("service2-title").innerText = translations[lang].service2_title;
  document.getElementById("service2-desc").innerText = translations[lang].service2_desc;
  document.getElementById("service3-title").innerText = translations[lang].service3_title;
  document.getElementById("service3-desc").innerText = translations[lang].service3_desc;

  // Contact form
  document.getElementById("contact-form-title").innerText = translations[lang].contact_form_title;
  document.getElementById("contact-form-desc").innerText = translations[lang].contact_form_desc;
  document.getElementById("name-label").innerText = translations[lang].name_label;
  document.getElementById("email-label").innerText = translations[lang].email_label;
  document.getElementById("phone-label").innerText = translations[lang].phone_label;
  document.getElementById("message-label").innerText = translations[lang].message_label;
  document.getElementById("send-button").innerText = translations[lang].send_button;
}

document.querySelector('.contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;
  const text = `Hello! I'm ${name}. Email: ${email}. Phone: ${phone}. Project: ${message}`;
  const url = `https://wa.me/216XXXXXXXX?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
});

setLang("fr");
