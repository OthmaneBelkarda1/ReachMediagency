document.addEventListener("DOMContentLoaded", () => {
    // Service buttons
    const webButton = document.getElementById("web-button")
    const adsButton = document.getElementById("ads-button")
    const designButton = document.getElementById("design-button")
  
    // Modal elements
    const modal = document.getElementById("service-modal")
    const modalTitle = document.getElementById("modal-title")
    const modalContent = document.getElementById("modal-content")
    const closeButton = document.querySelector(".close-button")
  
    // Service details
    const serviceDetails = {
      web: {
        title: "Site Web",
        content: `
                  <h3>Professional Web Development Services</h3>
                  <p>We create stunning, responsive websites that are tailored to your business needs.</p>
                  <ul>
                      <li>Custom website design</li>
                      <li>E-commerce solutions</li>
                      <li>Landing page optimization</li>
                      <li>Website maintenance and support</li>
                      <li>SEO-friendly development</li>
                      <li>Mobile-responsive design</li>
                  </ul>
                  <p>Our web development team uses the latest technologies to ensure your site is fast, secure, and user-friendly.</p>
              `,
      },
      ads: {
        title: "Publicité",
        content: `
                  <h3>Digital Advertising Campaigns</h3>
                  <p>Drive traffic, leads, and sales with our targeted advertising services.</p>
                  <ul>
                      <li>Google Ads management</li>
                      <li>Facebook & Instagram advertising</li>
                      <li>Retargeting campaigns</li>
                      <li>PPC (Pay-Per-Click) optimization</li>
                      <li>Ad creative development</li>
                      <li>Campaign performance analytics</li>
                  </ul>
                  <p>We create data-driven advertising strategies that maximize your ROI and help you reach your target audience effectively.</p>
              `,
      },
      design: {
        title: "Design & Content Creation",
        content: `
                  <h3>Creative Design & Content Services</h3>
                  <p>Engage your audience with eye-catching designs and compelling content.</p>
                  <ul>
                      <li>Brand identity design</li>
                      <li>Social media graphics</li>
                      <li>Blog and article writing</li>
                      <li>Email newsletter design</li>
                      <li>Infographics and visual content</li>
                      <li>Video production and editing</li>
                  </ul>
                  <p>Our creative team combines artistic talent with marketing expertise to create content that converts.</p>
              `,
      },
    }
  
    // Open modal with appropriate content
    function openModal(service) {
      modalTitle.textContent = serviceDetails[service].title
      modalContent.innerHTML = serviceDetails[service].content
      modal.style.display = "block"
  
      // Add animation class
      document.querySelector(".modal-content").classList.add("animate")
    }
  
    // Close modal
    function closeModal() {
      modal.style.display = "none"
    }
  
   
    closeButton.addEventListener("click", closeModal)
  
    // Close modal when clicking outside
    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        closeModal()
      }
    })
  
    // Add animation to service buttons on scroll
    const animateOnScroll = () => {
      const serviceButtons = document.querySelectorAll(".service-button")
  
      serviceButtons.forEach((button) => {
        const buttonPosition = button.getBoundingClientRect().top
        const screenPosition = window.innerHeight / 1.3
  
        if (buttonPosition < screenPosition) {
          button.style.opacity = "1"
          button.style.transform = "translateY(0)"
        }
      })
    }
  
    // Set initial state for animation
    document.querySelectorAll(".service-button").forEach((button) => {
      button.style.opacity = "0"
      button.style.transform = "translateY(50px)"
      button.style.transition = "opacity 0.5s ease, transform 0.5s ease"
    })
  
    // Run animation on scroll
    window.addEventListener("scroll", animateOnScroll)
  
    // Run once on page load
    animateOnScroll()
  })
  
  