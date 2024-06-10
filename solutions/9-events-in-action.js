export default () => {
  // BEGIN
    const tabElements = document.querySelectorAll('[data-bs-toggle="tab"], [data-bs-toggle="pill"]');

    tabElements.forEach(tabElement => {
        tabElement.addEventListener('click', (event) => {
            event.preventDefault();
            const navContainer = tabElement.closest('.nav');
            const tabContentContainer = document.querySelector(tabElement.dataset.bsTarget).closest('.tab-content');
            navContainer.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
            tabContentContainer.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
            tabElement.classList.add('active');
            const targetContent = document.querySelector(tabElement.dataset.bsTarget);
            targetContent.classList.add('active');
        });
    });
  // END
};
