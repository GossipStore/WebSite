document.addEventListener('DOMContentLoaded', () => {
    // Define a data e hora de contagem regressiva (2 dias e 12 horas a partir do momento atual)
    const now = new Date();
    const countdownDate = new Date(now.getTime() + (4 * 24 * 60 * 60 * 1000) + (12 * 60 * 60 * 1000));

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        if (distance < 0) {
            document.getElementById('timer').innerHTML = "00:00:00:00";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').innerText = String(days).padStart(2, '0');
        document.getElementById('hours').innerText = String(hours).padStart(2, '0');
        document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
        document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
});
