// Variabili per tenere traccia dell'indice dell'immagine corrente
let currentDrawingIndex = 0;
let currentPhotoIndex = 0;

// Array delle immagini e delle loro rispettive sorgenti
const drawings = ["immagini_portfolio/immagine1.jpeg", "immagini_portfolio/immagine2.jpeg", "immagini_portfolio/immagine3.jpeg","immagini_portfolio/immagine0.jpeg"]; // Aggiungi qui tutte le tue immagini per i disegni
const photos = ["venezia/venezia2.jpeg", "praga/praga4.jpeg", "berlino/cracovia1.jpeg","torino/torino.jpeg"]; // Aggiungi qui tutte le tue immagini per le foto

// Funzione per passare all'immagine successiva per i disegni
function nextDrawing() {
    currentDrawingIndex++;
    if (currentDrawingIndex >= drawings.length) {
        currentDrawingIndex = 0;
    }
    document.getElementById("drawing").src = drawings[currentDrawingIndex];
}

// Funzione per passare all'immagine successiva per le foto
function nextPhoto() {
    currentPhotoIndex++;
    if (currentPhotoIndex >= photos.length) {
        currentPhotoIndex = 0;
    }
    document.getElementById("photo").src = photos[currentPhotoIndex];
}
