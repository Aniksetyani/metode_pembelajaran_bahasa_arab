// script.js

// Kata dan id dropzone yang cocok
let correctPairs = {
    "تفاحة": "apple",
    "سيارة": "car",
    "سمك": "fish"
};

// Fungsi untuk memungkinkan elemen draggable di-drop
function allowDrop(event) {
    event.preventDefault();
}

// Fungsi untuk menangani event drag
function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

// Fungsi untuk menangani event drop
function drop(event) {
    event.preventDefault();
    let wordId = event.dataTransfer.getData("text");
    let dropzoneId = event.target.id || event.target.parentElement.id;

    if (correctPairs[wordId] === dropzoneId) {
        event.target.appendChild(document.getElementById(wordId));
        document.getElementById("feedback").innerText = "Benar! Cocok!";
        document.getElementById(wordId).draggable = false;  // Menonaktifkan drag setelah cocok
    } else {
        document.getElementById("feedback").innerText = "Salah. Coba lagi.";
    }
}
