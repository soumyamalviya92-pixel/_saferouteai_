  //Simple interaction to simulate real-time updates
document.addEventListener('DOMContentLoaded', () => {
    const progressFill = document.querySelector('.progress-fill');
    
    // Simulates the progress bar moving slightly to look "live"
    setInterval(() => {
        let randomWidth = Math.floor(Math.random() * (90 - 60 + 1)) + 60;
        progressFill.style.width = randomWidth + '%';
        progressFill.style.transition = 'width 1s ease-in-out';
    }, 3000);
}); 