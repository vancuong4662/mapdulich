// Get the modal
var modal = document.getElementById("modal-show-info");
var nutClose = document.getElementById("button-close");

// When the user clicks on the button, open the modal
function openModal() {
  modal.style.display = "block";
}

nutClose.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}