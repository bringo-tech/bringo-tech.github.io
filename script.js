function setLang(lang){
  if(lang === "fr"){
    document.getElementById("hero-title").innerText =
      "Nous créons des sites web pour agences de location de voitures";

    document.getElementById("hero-sub").innerText =
      "Obtenez plus de réservations avec un site moderne.";
  }

  if(lang === "en"){
    document.getElementById("hero-title").innerText =
      "We build high-converting websites for car rental businesses";

    document.getElementById("hero-sub").innerText =
      "Get more bookings with a modern online presence.";
  }
}
