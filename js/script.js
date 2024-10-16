
    const modal = document.querySelector('.modal');
    const openModalBtns = document.querySelectorAll('[data-modal]');
    const closeModalBtn = document.querySelector('[data-close]');

    const openModal = () => {
        modal.style.display = 'flex';
    };

    const closeModal = () => {
        modal.style.display = 'none';
    };

    openModalBtns.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    closeModalBtn.addEventListener('click', closeModal)

 
