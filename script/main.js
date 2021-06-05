
var elsFeatItem = document.querySelectorAll('.features-navigation-item');
var elsFeatButton = document.querySelectorAll('.features-navigation__btn');

elsFeatButton.forEach(function (link) {
  link.addEventListener('click', function () {
    elsFeatItem.forEach(function (item) {
      item.classList.remove('features-navigation__btn-active');
    });

    link.parentElement.classList.add('features-navigation__btn-active');
  });
});

var elsFaqItem = document.querySelectorAll('.faq-section__item');
var elsFaqButton = document.querySelectorAll('.faq--item__button');

elsFaqButton.forEach(function (button) {
  button.addEventListener('click', function () {
    elsFaqItem.forEach(function (removeActive) {
      removeActive.classList.remove('faq--item__drop--active');
    });

    button.closest('.faq-section__item').classList.add('faq--item__drop--active');
  });
});


