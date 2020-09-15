(() => {
    const refs = {
        openModalBtn: document.querySelector('.icon-menu'),
        closeModalBtn: document.querySelector('.icon-close'),
        modal: document.querySelector('.data-button'),
        modal1: document.querySelector('.menu-header'),
    };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle('is-open');
        refs.modal1.classList.toggle('is-open');
    }
})();