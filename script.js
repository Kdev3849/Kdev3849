document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('.checkboxes input[type="checkbox"]');
    const output = document.getElementById('rating-output');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                checkboxes.forEach(cb => {
                    if (cb !== this) cb.checked = false;
                });

                const value = this.value;

                // EMAIL SEND (opens mail app)
                const email = "204966@shc.sa.edu.com";
                const subject = "Article Rating";
                const body = "Someone rated the article " + value + " stars";

                window.location.href =
                    "mailto:" + email +
                    "?subject=" + encodeURIComponent(subject) +
                    "&body=" + encodeURIComponent(body);

                let response = '';
                if (value === '1') {
                    response = '😡😡😡😡😡';
                } else if (value === '2') {
                    response = 'ok';
                } else if (value === '3') {
                    response = 'thanks';
                } else if (value === '4') {
                    response = '😃😃';
                } else if (value === '5') {
                    response = '🤩🤩🤩🤩🤩'; 
                }   

                output.textContent = response;
            } else {
                output.textContent = ''; 
            }
        });
    });
});
(() => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <rect width="512" height="512" rx="80" fill="#ffffff"/>
      <path fill="#000000" d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.6 95.1 57.6 131.4C51.2 414.4 16 464 16 464s86.4-11.2 140.8-41.6c31.4 8.6 65.3 13.6 99.2 13.6 141.4 0 256-93.1 256-208S397.4 32 256 32zm-64 208c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm-128 48h128c0 35.3-28.7 64-64 64s-64-28.7-64-64z"/>
    </svg>
  `;

  const link = document.createElement("link");
  link.rel = "icon";
  link.type = "image/svg+xml";
  link.href = "data:image/svg+xml;base64," + btoa(svg);

  document.querySelectorAll("link[rel='icon']").forEach(e => e.remove());
  document.head.appendChild(link);
})();
