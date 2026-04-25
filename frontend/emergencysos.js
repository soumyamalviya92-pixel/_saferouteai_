// emergencysos.js: Handles SOS countdown and popup

document.addEventListener('DOMContentLoaded', function () {
  // Find the SOS button (by text or class)
  const sosBtn = Array.from(document.getElementsByTagName('button')).find(
    btn => btn.textContent && btn.textContent.trim().startsWith('SOS')
  );
  if (!sosBtn) return;

  let countdownOverlay, popup;

  function showCountdown() {
    countdownOverlay = document.createElement('div');
    countdownOverlay.className = 'sos-countdown-overlay';
    countdownOverlay.innerHTML = '<div class="sos-countdown" id="sos-count">3</div>';
    document.body.appendChild(countdownOverlay);
    let count = 3;
    const countdownEl = document.getElementById('sos-count');
    countdownEl.textContent = count;
    countdownEl.classList.remove('shrink');
    const interval = setInterval(() => {
      count--;
      if (count > 0) {
        countdownEl.classList.add('shrink');
        setTimeout(() => {
          countdownEl.classList.remove('shrink');
          countdownEl.textContent = count;
        }, 280);
      } else {
        clearInterval(interval);
        countdownOverlay.remove();
        showPopup();
      }
    }, 900);
  }

  function showPopup() {
    popup = document.createElement('div');
    popup.className = 'sos-popup';
    popup.innerHTML = `
      <h2>Emergency location sent to contacts</h2>
      <button id="close-sos-popup">Close</button>
    `;
    document.body.appendChild(popup);
    document.getElementById('close-sos-popup').onclick = function () {
      popup.remove();
    };
  }

  sosBtn.addEventListener('click', function (e) {
    e.preventDefault();
    showCountdown();
  });
});
