const questionButtons = document.querySelectorAll('.accordion-question');
console.log(questionButtons);

questionButtons.forEach(button => {
  button.addEventListener('click', () => {
    const item = button.closest('.accordion-item');
    const isActive = item.classList.contains('active');
    const iconImg = button.querySelector('.icon-image');

        console.log("item",item);
     console.log("isActive",isActive);
      console.log("iconImg",iconImg);

    item.classList.toggle('active'); //Добавить класс active, если его нет — или удалить, если он уже есть.

    iconImg.src = isActive
      ? 'assets/images/icon-plus.svg'
      : 'assets/images/icon-minus.svg';

console.log("icoiconImg.src nImg",iconImg.src );

    button.setAttribute('aria-expanded', String(!isActive));

    const answerId = button.getAttribute('aria-controls');
    const answer = document.getElementById(answerId);
console.log("answer",answerId);
console.log("answer",answerId);

    answer.hidden = isActive;
  });
});
