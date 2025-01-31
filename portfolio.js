document.addEventListener('DOMContentLoaded', () => {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
          // Remove active class from all buttons
          filterBtns.forEach(btn => btn.classList.remove('active'));
          
          // Add active class to clicked button
          btn.classList.add('active');
          
          const filterValue = btn.getAttribute('data-filter');
          
          portfolioItems.forEach(item => {
              if (filterValue === 'tous') {
                  item.style.display = 'block';
              } else {
                  const categories = item.getAttribute('data-category').split(' ');
                  if (categories.includes(filterValue)) {
                      item.style.display = 'block';
                  } else {
                      item.style.display = 'none';
                  }
              }
          });
      });
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item1');

  filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
          // Remove active class from all buttons
          filterBtns.forEach(btn => btn.classList.remove('active'));
          
          // Add active class to clicked button
          btn.classList.add('active');
          
          const filterValue = btn.getAttribute('data-filter');
          
          portfolioItems.forEach(item => {
              if (filterValue === 'tous') {
                  item.style.display = 'block';
              } else {
                  const categories = item.getAttribute('data-category').split(' ');
                  if (categories.includes(filterValue)) {
                      item.style.display = 'block';
                  } else {
                      item.style.display = 'none';
                  }
              }
          });
      });
  });
});