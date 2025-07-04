document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const messageList = document.getElementById("messageList");

  // Load stored messages on page load
  loadMessages();

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const message = document.getElementById("message").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();

    if (name && message && email && phone) {
      const newMessage = {
        name,
        email,
        message,
        phone,
        timestamp: new Date().toISOString()
      };

      // Get existing messages or initialize
      const messages = JSON.parse(sessionStorage.getItem("contactinfos")) || [];
      messages.push(newMessage);

      // Save back to localStorage
      sessionStorage.setItem("contactinfos", JSON.stringify(messages));

      // Update UI
      addMessageToList(newMessage);

      // Reset form
      form.reset();
    }
  });

  function loadMessages() {
    const messages = JSON.parse(localStorage.getItem("contactinfos")) || [];
    messages.forEach(addMessageToList);
  }

  function addMessageToList(msg) {
    const li = document.createElement("li");
    li.innerHTML = `Last message : <strong>${msg.name}:</strong> ${msg.message}`;
    messageList.appendChild(li);
  }
});

const modal = document.getElementById("myModal");
const modalImg = document.getElementById("imgInModal");
const captionText = document.getElementById("caption");
const closeBtn = document.querySelector(".close");

// Target the image
const promoImages = document.querySelectorAll(".promo-item img");

promoImages.forEach(promoImage => {
  promoImage.onclick = function () {
    const description = this.dataset.description || "No description available";

    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.textContent = description;
  };
});
// Close the modal
closeBtn.onclick = function () {
  modal.style.display = "none";
};

//click outside image to close
modal.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
