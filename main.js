document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("joinModal");
    const joinBtn = document.querySelector(".join-now-btn"); // Ensure class matches the button
    const closeBtn = document.querySelector(".close-btn");
    const form = document.getElementById("joinForm");

    // Ensure modal is hidden on page load
    modal.style.display = "none";

    // Add event listener to open modal when clicking "Join Now"
    if (joinBtn) {
        joinBtn.addEventListener("click", function (event) {
            event.preventDefault();
            modal.style.display = "flex"; // Show modal
        });
    } else {
        console.error("Join Now button not found! Check the class name.");
    }

    // Close modal when clicking close button
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Close modal if clicking outside the modal content
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Handle form submission
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Thank you for joining!");
        modal.style.display = "none";
        form.reset();
    });
});
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".header__btn", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".about__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".about__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".service__card", {
  duration: 1000,
  interval: 500,
});

ScrollReveal().reveal(".facility__content .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".facility__content p", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".mentor__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".banner__content h2", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".banner__content p", {
  ...scrollRevealOption,
  delay: 500,
});
form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
    };

    try {
        const response =await fetch ('https://script.google.com/macros/s/AKfycbyj7Sx9eRY1O-68wRdwiKRnrNH4yhOFzh6dAcqi70Lcynf1rzSlfvbx35VR_-MhC_aB/exec', { // Replace with your Apps Script URL
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert("Data saved successfully!");
            modal.style.display = "none";
            form.reset();
        } else {
            alert("Error saving data.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Failed to submit form.");
    }
});  