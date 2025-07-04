//  AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    offset: 100,
    once: true,
  });

  // Smooth scrolling 
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Navbar 
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    const scrollTop = document.getElementById("scrollTopBtn"); // Fixed ID

    if (window.scrollY > 100) {
      navbar.style.background = "rgba(255, 255, 255, 0.98)";
      navbar.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.15)";
      scrollTop.classList.add("show");
    } else {
      navbar.style.background = "rgba(255, 255, 255, 0.95)";
      navbar.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.1)";
      scrollTop.classList.remove("show");
    }
  });

  // Scroll to top 
  document
    .getElementById("scrollTopBtn") // Fixed ID
    .addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });

  // Contact form 
  const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
  contactForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    if (!name || !email || !subject || !message) {
      alert("Mohon lengkapi semua field!");
      return;
    }

    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;

    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mengirim...';
    submitBtn.disabled = true;

    try {
      const response = await fetch('/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          message: `Subject: ${subject}\n\n${message}`
        })
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message); 
        this.reset();
      } else {
        alert("Gagal mengirim pesan. Silakan coba lagi.");
      }
    } catch (err) {
      console.error(err);
      alert("Terjadi kesalahan pada server.");
    }

    submitBtn.innerHTML = originalText;
    submitBtn.disabled = false;
  });
}


  // Add loading animation 
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.transform = "translateY(0)";
        entry.target.style.opacity = "1";
      }
    });
  }, observerOptions);

  
  document
    .querySelectorAll(".service-card, .developer-card, .vm-card")
    .forEach((card) => {
      card.style.transform = "translateY(30px)";
      card.style.opacity = "0";
      card.style.transition = "all 0.6s ease";
      observer.observe(card);
    });

  // Mobile menu toggle
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.querySelector(".nav-links");
  const navbar = document.querySelector(".navbar");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }

  
  function checkMobile() {
    const navbar = document.querySelector(".navbar");
    if (window.innerWidth <= 768) {
      navbar.style.padding = "0.8rem 1rem";
    } else {
      navbar.style.padding = "0.75rem 2rem";
    }
  }

  window.addEventListener("resize", checkMobile);
  checkMobile();

  // Add hover effects for tech cards
  document.querySelectorAll(".tech-card").forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px) scale(1.05)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(-5px) scale(1)";
    });
  });

  function createParticle() {
    const particle = document.createElement("div");
    particle.style.position = "absolute";
    particle.style.width = "4px";
    particle.style.height = "4px";
    particle.style.background = "rgba(255, 255, 255, 0.5)";
    particle.style.borderRadius = "50%";
    particle.style.pointerEvents = "none";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = "100%";
    particle.style.zIndex = "1";

    const hero = document.querySelector(".hero");
    if (hero) {
      hero.appendChild(particle);

      const animation = particle.animate(
        [
          { transform: "translateY(0px)", opacity: 1 },
          { transform: "translateY(-100vh)", opacity: 0 },
        ],
        {
          duration: Math.random() * 10000 + 10000,
          easing: "linear",
        }
      );

      animation.onfinish = () => particle.remove();
    }
  }

  // Create particles periodically
  setInterval(createParticle, 3000); 