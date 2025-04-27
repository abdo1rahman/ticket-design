// For frontEnd
const fileInput = document.getElementById("fileUpload");
const img = document.getElementById("upload-icon");
const prompt = document.getElementById("prompt");
const hidBtn = document.getElementById("hid-btn");
const removeBtn = document.getElementById("remove");
const changeBtn = document.getElementById("change");
const msg = document.getElementById("input-massage");
const emailInput = document.getElementById("email-area");
const form = document.querySelector("form");
const emailMsg = document.getElementById("email-msg");

// function updateImage(id) {
//   const img = document.getElementById(id);
//   if (window.innerWidth >= 1000) {
//     img.src = "./assets/images/pattern-squiggly-line-bottom-desktop.svg";
//   } else {
//     img.src = "./assets/images/pattern-squiggly-line-bottom-desktop.svg";
//   }
// }

// // Initial check
// updateImage("big-curve");

// // Update on resize
// window.addEventListener("resize", () => updateImage("big-curve"));

fileInput.addEventListener("change", function () {
  const file = this.files[0]; // Get the first selected file

  if (file) {
    const fileSize = file.size; // Size in bytes
    const fileType = file.type; // MIME type (e.g., "image/png")

    console.log("File size (bytes):", fileSize);
    console.log("File type:", fileType);

    // Example: Check if file is less than 2MB and is an image
    if (fileSize > 500 * 1024) {
      msg.textContent = "File too large, please upload a photo under 500KB.";
      msg.style.color = "hsl(7, 88%, 67%)";
      this.value = "";
    } else {
      const reader = new FileReader();
      reader.onload = (e) => {
        img.src = e.target.result;
        img.style.height = "70px";
        img.style.marginBottom = "20px";
        hidBtn.style = {
          display: "flex",
          gap: "10px",
        };
        msg.textContent = "";
        prompt.style.display = "none";
      };
      reader.readAsDataURL(file);
    }
  }
});

removeBtn.addEventListener("click", function (e) {
  e.preventDefault(); // Prevent form reset
  fileInput.value = "";
  img.src = "/assets/images/icon-upload.svg"; // Reset to default image
  img.style.height = "initial";
  img.style.margin = "initial";
  hidBtn.style.display = "none";
  prompt.style.display = "block";
  msg.textContent = "ⓘ Upload your photo (JPG or PNG, max size: 500KB).";
  msg.style.color = "rgba(122, 122, 122, 0.894)";
});

// Change image button
changeBtn.addEventListener("click", function (e) {
  e.preventDefault(); // Prevent form submission
  fileInput.click(); // Simulate click on file input
});
