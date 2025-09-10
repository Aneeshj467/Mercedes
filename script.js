// script.js

document.addEventListener("DOMContentLoaded", () => {
    // === Search Bar Interaction ===
    const searchInput = document.querySelector(".search-container input");
    if (searchInput) {
        searchInput.addEventListener("focus", () => {
            searchInput.style.backgroundColor = "#555";
        });
        searchInput.addEventListener("blur", () => {
            searchInput.style.backgroundColor = "#333";
        });
    }

    // === Chat Button Action ===
    const chatButton = document.querySelector(".chat-button button");
    if (chatButton) {
        chatButton.addEventListener("click", () => {
            alert("Chat support coming soon!");
        });
    }

    // === Scroll to Top ===
    const upArrow = document.querySelector(".up-arrow");
    if (upArrow) {
        upArrow.addEventListener("click", (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
  
    // === Brand Tabs Switching to ease it ===
    const brandTabs = document.querySelectorAll(".brand-tab");
    brandTabs.forEach(tab => {
        tab.addEventListener("click", () => {
            brandTabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            // Future: You can load AMG / MAYBACH content dynamically here
        });
    });
});
