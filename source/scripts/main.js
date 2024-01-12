const form = document.querySelector(".form");
const modal = document.querySelector(".modal");
const modalBg = document.querySelector(".modal__bg");
const btnClose = document.querySelector("#btn-close");
const messageSucess = document.getElementById("sucess-message");
const messageError = document.getElementById("error-message");

let errorOrSucess = true;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  modalIsVisble();
});

modalBg.addEventListener("click", () => {
  closeModal();
});

btnClose.addEventListener("click", () => {
  closeModal();
});

const modalIsVisble = () => {
  if (errorOrSucess === true) {
    modal.classList.add("modal--is-visible");
    btnClose.classList.remove("modal__content__btn__close--error");
    btnClose.classList.add("modal__content__btn__close--sucess");

    messageError.style.display = "none";
    messageSucess.style.display = "flex";

    errorOrSucess = false;
  } else if (errorOrSucess === false) {
    modal.classList.add("modal--is-visible");
    btnClose.classList.remove("modal__content__btn__close--sucess");
    btnClose.classList.add("modal__content__btn__close--error");

    messageError.style.display = "flex";
    messageSucess.style.display = "none";

    errorOrSucess = true;
  }
};

const closeModal = () => {
  modal.classList.remove("modal--is-visible");
};
