export default () => {
  // BEGIN
    const button = document.getElementById('alert-generator');
    const alertsContainer = document.querySelector('.alerts');
    let alertCount = 0;
    button.addEventListener('click', () => {
        alertCount += 1;
        const alertDiv = document.createElement('div');
        alertDiv.className = 'alert alert-primary d-flex justify-content-between align-items-center';
        const alertText = document.createElement('span');
        alertText.textContent = `Alert ${alertCount}`;
        const closeButton = document.createElement('button');
        closeButton.className = 'btn-close';
        closeButton.innerHTML = '&times;';
        closeButton.addEventListener('click', () => {
            alertDiv.remove();
        });
        alertDiv.appendChild(alertText);
        alertDiv.appendChild(closeButton);
        alertsContainer.prepend(alertDiv);
    });
  // END
};