document.addEventListener("DOMContentLoaded", function(event) { 
  const modal = document.querySelector('.modal');
  const modal__veil = document.querySelector('.modal__veil')
  const modalBtn = document.querySelectorAll('[data-toggle=modal');
  const closeBtn = document.querySelector('.modal__close');
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  }
  const closeModal = () => {
    modal.classList.remove('modal--visible');
  }

  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
  });
  
  closeBtn.addEventListener('click', closeModal);

  //С помощью этого оно будет закрываться при клике вне модального окна
  modal__veil.addEventListener('click', closeModal);

  //А вот это фиксирует нажатие клавиши Escape и закрывает модальное окно
  document.addEventListener('keydown', (event) => {
    console.log ('Вы нажали ' + event.keyCode);
    if(event.code == "Escape" || "Esc") {
      closeModal();
    };
  });
});