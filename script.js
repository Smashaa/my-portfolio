document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.getElementById("typewriter-text");
    const cursor = document.getElementById("cursor");
  
    const text = "Hi! I'm Ismail Ahmed | Frontend Developer & Tech Enthusiast |";
    let index = 0;
    let isDeleting = false;
  
    function typeLoop() {
      if (!isDeleting && index <= text.length) {
        textElement.textContent = text.substring(0, index);
        index++;
      } else if (isDeleting && index >= 0) {
        textElement.textContent = text.substring(0, index);
        index--;
      }
  
      let delay = isDeleting ? 40 : 80;
  
      if (!isDeleting && index === text.length + 1) {
        delay = 1500; // Pause before deleting
        isDeleting = true;
      } else if (isDeleting && index === 0) {
        delay = 500; // Pause before retyping
        isDeleting = false;
      }
  
      setTimeout(typeLoop, delay);
    }
  
    typeLoop();
  });

  
  const toggleBtn = document.getElementById('theme-toggle');
  const body = document.body;
  
  // Check local storage on page load
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
    toggleBtn.textContent = '☀️';
  }
  
  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark');
    
    if (body.classList.contains('dark')) {
      toggleBtn.textContent = '☀️';
      localStorage.setItem('theme', 'dark');
    } else {
      toggleBtn.textContent = '🌙';
      localStorage.setItem('theme', 'light');
    }
  });
  
  
  
  // Animate sections on scroll
  const sections = document.querySelectorAll("section");
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        observer.unobserve(entry.target); // Animate only once
      }
    });
  }, { threshold: 0.2 });
  
  sections.forEach(section => observer.observe(section));
  
  // Emailjs
  
  function sendEmail() {
    const params = {
      user_name: document.getElementById("user_name").value,
      user_email: document.getElementById("user_email").value,
      message: document.getElementById("message").value,
    };
  
    emailjs.send("service_hjnbm4s", "template_cjvv9it", params)
      .then(() => {
        document.getElementById("form-status").innerText = "✅ Message sent successfully!";
        document.getElementById("contact-form").reset();
      })
      .catch((err) => {
        document.getElementById("form-status").innerText = "❌ Failed to send message.";
        console.error(err);
      });
  }
  
  
  

  document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Typewriter animation
function typeWriterEffect(text, elementId) {
  let i = 0;
  const speed = 100;
  function type() {
    if (i < text.length) {
      document.getElementById(elementId).textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

window.onload = function () {
  typeWriterEffect("I'm Ismail Ahmed | Creative Front end Developer & Tech Enthusiast |", "typewriter-text");
};

  
  
// hamburger menu toggle

  document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  });

  // Close nav when any link is clicked (on mobile)
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

