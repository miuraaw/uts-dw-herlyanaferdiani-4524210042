// Ambil semua input
const nameInput = document.querySelector("#char-name");
const elementSelect = document.querySelector("#char-element");
const weaponSelect = document.querySelector("#char-weapon");
const descInput = document.querySelector("#char-desc");
const imgInput = document.querySelector("#char-img");

// Ambil elemen preview
const previewName = document.querySelector("#preview-name");
const previewElement = document.querySelector("#preview-element");
const previewWeapon = document.querySelector("#preview-weapon");
const previewDesc = document.querySelector("#preview-desc");
const previewImg = document.querySelector("#preview-img");

// Update Nama
nameInput.addEventListener("input", () => {
  previewName.textContent = nameInput.value || "Nama Karakter";
});

// Update Elemen
elementSelect.addEventListener("change", () => {
  previewElement.textContent = elementSelect.value
    ? `Elemen: ${elementSelect.value}`
    : "Elemen: ???";
});

// Update Senjata
weaponSelect.addEventListener("change", () => {
  previewWeapon.textContent = weaponSelect.value
    ? `Senjata: ${weaponSelect.value}`
    : "Senjata: ???";
});


// Update Deskripsi
descInput.addEventListener("input", () => {
  previewDesc.textContent =
    descInput.value || "Deskripsi karakter akan muncul di sini...";
});

// Update Gambar
imgInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      previewImg.src = e.target.result;
    };
    reader.readAsDataURL(file);
  } else {
    previewImg.src = "https://via.placeholder.com/300x300?text=Wuthering+Waves";
  }
});