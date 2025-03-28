document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
  
        const targetId = this.getAttribute("href")
        if (targetId === "#") return
  
        const targetElement = document.querySelector(targetId)
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: "smooth",
          })
        }
      })
    })
  
    // Animation for portfolio items on scroll
    const portfolioItems = document.querySelectorAll(".portfolio-item")
  
    const animateOnScroll = () => {
      portfolioItems.forEach((item) => {
        const itemPosition = item.getBoundingClientRect().top
        const screenPosition = window.innerHeight / 1.2
  
        if (itemPosition < screenPosition) {
          item.style.opacity = "1"
          item.style.transform = "translateY(0)"
        }
      })
    }
  
    // Set initial state for animation
    portfolioItems.forEach((item) => {
      item.style.opacity = "0"
      item.style.transform = "translateY(50px)"
      item.style.transition = "opacity 0.5s ease, transform 0.5s ease"
    })
  
    // Run animation on scroll
    window.addEventListener("scroll", animateOnScroll)
  
    // Run once on page load
    animateOnScroll()
  })
  
  