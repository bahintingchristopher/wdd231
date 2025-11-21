

  // Set timestamp when page loads
  document.getElementById('timestamp').value = new Date().toISOString();

  // Modal functionality
  const modalLinks = document.querySelectorAll('.card a');
  modalLinks.forEach(link => {
    link.addEventListener('click', function() {
      const modalId = this.getAttribute('data-modal');
      document.getElementById(modalId).style.display = 'block';
    });
  });

  const closeButtons = document.querySelectorAll('.close');
  closeButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      this.closest('.modal').style.display = 'none';
    });
  });

  // Close modal on outside click
  window.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
      e.target.style.display = 'none';
    }
  });

