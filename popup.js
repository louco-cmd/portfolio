document.addEventListener("DOMContentLoaded", () => {
    // DOM elements
    const cookiePopup = document.getElementById("cookie-consent-popup");
    const acceptBtn = document.getElementById("accept-cookies");
    const rejectBtn = document.getElementById("reject-cookies");
  
    // Check if consent is already given
    const userConsent = localStorage.getItem("cookieConsent");
    if (!userConsent) {
      // Show popup if no consent is found
      cookiePopup.classList.remove("hidden");
    }
  
    // Handle accept button
    acceptBtn.addEventListener("click", () => {
      localStorage.setItem("cookieConsent", "accepted");
      cookiePopup.classList.add("hidden");
      console.log("Cookies accepted");
    });
  
    // Handle reject button
    rejectBtn.addEventListener("click", () => {
      localStorage.setItem("cookieConsent", "rejected");
      cookiePopup.classList.add("hidden");
      console.log("Cookies rejected");
    });
  });
  