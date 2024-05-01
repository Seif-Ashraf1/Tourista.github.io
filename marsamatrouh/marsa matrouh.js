document.addEventListener("DOMContentLoaded", function() {
    const videoSlides = document.querySelectorAll(".video-slide");
    const contentSlides = document.querySelectorAll(".content");
    const navButtons = document.querySelectorAll(".nav-btn");
    let currentSlide = 0;
  
    // Function to show slide
    function showSlide(index) {
      // Hide all slides
      videoSlides.forEach(slide => slide.classList.remove("active"));
      contentSlides.forEach(slide => slide.classList.remove("active"));
      navButtons.forEach(button => button.classList.remove("active"));
  
      // Show current slide
      videoSlides[index].classList.add("active");
      contentSlides[index].classList.add("active");
      navButtons[index].classList.add("active");
      currentSlide = index;
    }
  
    // Function to show next slide
    function nextSlide() {
      currentSlide = (currentSlide + 1) % videoSlides.length;
      showSlide(currentSlide);
    }
  
    // Function to show previous slide
    function prevSlide() {
      currentSlide = (currentSlide - 1 + videoSlides.length) % videoSlides.length;
      showSlide(currentSlide);
    }
  
    // Add event listeners for navigation buttons
    navButtons.forEach((button, index) => {
      button.addEventListener("click", function() {
        showSlide(index);
      });
    });
  
    // Automatic slideshow
    setInterval(nextSlide, 5000);
  });

  