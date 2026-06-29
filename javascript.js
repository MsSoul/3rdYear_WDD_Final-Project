
function openReviewModal() {
    var modal = document.getElementById("review-modal");
    modal.style.display = "block";
  }
  
  function closeReviewModal() {
    var modal = document.getElementById("review-modal");
    modal.style.display = "none";
  }
  
  document.getElementById("review-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const email = document.getElementById("email").value;
    const review = document.getElementById("review").value;
    const message = document.getElementById("message").value;
  
    console.log("Email:", email);
    console.log("Review:", review);
    console.log("Message:", message);
  
    // Optionally, you can close the modal after submission
    closeReviewModal();
  });
  