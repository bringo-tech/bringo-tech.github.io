<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Bringo Tech — Car Rental Website Experts</title>

<link rel="stylesheet" href="style.css">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">

</head>

<body>

<nav class="nav">
  <div class="logo">
    <span class="logo-bringo">Bringo</span>
    <span class="logo-tech">Tech</span>
  </div>

  <div class="nav-links">
    <a href="#services"><span id="nav-services">Services</span></a>
    <a href="#portfolio"><span id="nav-work">Work</span></a>
    <a href="#contact"><span id="nav-contact">Contact</span></a>
  </div>

  <div class="nav-right">
    <button onclick="setLang('en')">EN</button>
    <button onclick="setLang('fr')">FR</button>
    <button onclick="setLang('ar')">AR</button>
  </div>
</nav>

<header class="hero">
  <h1 id="title">
    Build Trust. Get More Bookings. Grow Your Car Rental Business.
  </h1>

  <p id="subtitle">
    We create clean, professional websites that make customers choose you.
  </p>

  <a href="https://wa.me/216XXXXXXXX" class="btn primary" id="cta-btn">
    Talk With Us
  </a>
</header>

<section class="stats">

  <div class="stat">
    <div class="icon">⚡</div>
    <strong id="stat1-title">Fast Delivery</strong>
    <span id="stat1-desc">Launch in a few days</span>
  </div>

  <div class="stat">
    <div class="icon">📱</div>
    <strong id="stat2-title">Mobile First</strong>
    <span id="stat2-desc">Perfect on all devices</span>
  </div>

  <div class="stat">
    <div class="icon">🎯</div>
    <strong id="stat3-title">Client Focused</strong>
    <span id="stat3-desc">Built to attract visitors</span>
  </div>

</section>

<section id="services">
  <h2 id="services-title">What We Do</h2>

  <div class="grid">
    <div class="card">
      <h3 id="service1-title">Website Creation</h3>
      <p id="service1-desc">Modern and professional design that reflects your brand.</p>
    </div>

    <div class="card">
      <h3 id="service2-title">Online Booking</h3>
      <p id="service2-desc">Let your customers reserve cars easily and quickly.</p>
    </div>

    <div class="card">
      <h3 id="service3-title">Visibility & Growth</h3>
      <p id="service3-desc">Help your business get found and trusted online.</p>
    </div>
  </div>
</section>

<section id="portfolio">
  <h2 id="portfolio-title">Recent Work</h2>

  <div class="grid">
    <div class="card" id="portfolio1">Luxury Cars — Tunis</div>
    <div class="card" id="portfolio2">DriveNow — Booking Platform</div>
    <div class="card" id="portfolio3">EcoCars — Rental Website</div>
  </div>
</section>

<section class="testimonial">
  <p id="testimonial-text">
    “Our clients trusted us more after we launched our new website.”
  </p>
</section>
<section class="review-section">
  <h2 id="reviews-title">Client Reviews</h2>
  <div class="review-band">
    <div class="review-scroll">
      <div class="review-card">
        <div class="review-header">
          <div class="review-stars">★★★★★</div>
          <span class="review-name" id="review1-name">Zied</span>
        </div>
        <p class="review-text" id="review1-text">Excellent service and very professional. Our booking system is now converting 3x more customers. Highly recommended!</p>
      </div>

      <div class="review-card">
        <div class="review-header">
          <div class="review-stars">★★★★★</div>
          <span class="review-name" id="review2-name">Nourhene</span>
        </div>
        <p class="review-text" id="review2-text">The website design is stunning and user-friendly. Our customers love the new booking experience!</p>
      </div>

      <div class="review-card">
        <div class="review-header">
          <div class="review-stars">★★★★★</div>
          <span class="review-name" id="review3-name">Samir</span>
        </div>
        <p class="review-text" id="review3-text">Professional team, fast delivery, and amazing results. The premium design really improved our brand image.</p>
      </div>

      <div class="review-card">
        <div class="review-header">
          <div class="review-stars">★★★★★</div>
          <span class="review-name" id="review4-name">Abedorahmen</span>
        </div>
        <p class="review-text" id="review4-text">Incredible attention to detail. The website is fast, responsive, and our customers keep complimenting the design.</p>
      </div>

      <div class="review-card">
        <div class="review-header">
          <div class="review-stars">★★★★★</div>
          <span class="review-name" id="review5-name">Fatima</span>
        </div>
        <p class="review-text" id="review5-text">Best investment we made for our rental business. The platform handles high traffic without any lag.</p>
      </div>

      <div class="review-card">
        <div class="review-header">
          <div class="review-stars">★★★★★</div>
          <span class="review-name" id="review6-name">Hassan</span>
        </div>
        <p class="review-text" id="review6-text">Outstanding work! The website not only looks amazing but is optimized for both mobile and desktop users.</p>
      </div>

      <!-- Duplicate for seamless loop -->
      <div class="review-card">
        <div class="review-header">
          <div class="review-stars">★★★★★</div>
          <span class="review-name" id="review1-name-dup">Zied</span>
        </div>
        <p class="review-text" id="review1-text-dup">Excellent service and very professional. Our booking system is now converting 3x more customers. Highly recommended!</p>
      </div>
    </div>
  </div>
</section>
<section class="cta">
  <h2 id="cta-title">Let’s build something professional for your business</h2>

  <a href="https://wa.me/216XXXXXXXX" class="btn primary">
    Contact on WhatsApp
  </a>
</section>

<section id="contact" class="contact-section">
  <div class="contact-grid">
    <div class="contact-copy">
      <h2 id="contact-form-title">Ready to get more bookings?</h2>
      <p id="contact-form-desc">Share your project details and we’ll craft a custom car rental website that turns visitors into loyal customers.</p>
    </div>

    <form class="contact-form">
      <div class="input-group">
        <label id="name-label" for="name">Your name</label>
        <input id="name" type="text" placeholder="e.g. Med" />
      </div>
      <div class="input-group">
        <label id="email-label" for="email">Email</label>
        <input id="email" type="email" placeholder="you@example.com" />
      </div>
      <div class="input-group">
        <label id="phone-label" for="phone">WhatsApp / Phone</label>
        <input id="phone" type="tel" placeholder="+216 1234 5678" />
      </div>
      <div class="input-group">
        <label id="message-label" for="message">Project details</label>
        <textarea id="message" rows="4" placeholder="Tell us what you need..."></textarea>
      </div>
      <button id="send-button" type="submit" class="btn primary contact-submit">Send Request</button>
    </form>
  </div>
</section>

<section class="review-section">
  <h2>Trusted by Clients</h2>
  <div class="review-card">
    <div class="review-rating">4.7/5</div>
    <div class="review-stars">★★★★★</div>
    <p>“Bringo Tech delivered a polished website quickly, and our booking rate improved immediately.”</p>
    <span class="review-author">— Arwa, Rental Agency Owner</span>
  </div>
</section>

<footer id="footer">
  © 2026 Bringo Tech — Professional Web Solutions
</footer>

<script src="script.js"></script>

<!-- Tidio live chat widget -->
<script src="https://code.tidio.co/zbhvchicvniwrcifmfncamamfjjipmk0.js" async></script>

<!-- Chatbot.com Widget -->
<script type="text/javascript" src="https://cdn.chatbot.com/widget/plugin.js" data-cfasync="false" data-id="YOUR_CHATBOT_ID" data-lang="ar"></script>

</body>
</html>
