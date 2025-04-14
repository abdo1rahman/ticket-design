// For frontEnd

function updateImage(id) {
  const img = document.getElementById(id);
  if (window.innerWidth >= 1000) {
    img.src = "assets/images/pattern-squiggly-line-bottom-desktop.svg";
  } else {
    img.src = "assets/images/pattern-squiggly-line-bottom-mobile-tablet.svg";
  }
}

// Initial check
updateImage("big-curve");

// Update on resize
window.addEventListener("resize", () => updateImage("big-curve"));

document.getElementById("fileInput").addEventListener("change", () => {
  const file = this.files[0]; // Get the first selected file

  if (file) {
    const fileSize = file.size; // Size in bytes
    const fileType = file.type; // MIME type (e.g., "image/png")
    const allowedTypes = ["image/png", "image/jpeg"];
    const p = document.getElementById("input-massage");
    const img = document.getElementById("img");
    const hidBtn = document.getElementById("hid-btn");

    console.log("File size (bytes):", fileSize);
    console.log("File type:", fileType);

    // Example: Check if file is less than 2MB and is an image
    if (fileSize > 2 * 500 * 500) {
      p.textContent = "File too large, please upload a photo under 500KB.";
      p.style.color = "red";
      this.value = "";
    } else if (!allowedTypes.includes(fileType)) {
      p.textContent = "Only JPG or PNG are allowed.";
      p.style.color = "red";
    } else {
      const reader = new FileReader();
      reader.onload = (e) => {
        img.src = e.target.result;
        img.style.height = "200px";
        hidBtn.style.display = "flex";
      };
      reader.readAsDataURL(file);
    }
  }
});
