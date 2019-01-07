  var navMain = document.querySelector('.main-nav');
  var navToggle = document.querySelector('.main-nav__toggle');
  var send = document.querySelector(".form__submit");
  var modalSuccess = document.querySelector(".modal-success")
  var modalSuccessClose = document.querySelector(".modal-success__close")

  navMain.classList.remove('main-nav--nojs');

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
    }
  });

  send.addEventListener('click', function(event) {
    event.preventDefault();
    modalSuccess.classList.add('modal-success--show');
  });

  modalSuccessClose.addEventListener('click', function(event) {
    event.preventDefault();
    modalSuccess.classList.remove('modal-success--show');
  });
