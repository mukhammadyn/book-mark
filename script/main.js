
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


    var elsTabsItem = document.querySelectorAll('.features-navigation-item');
    var elsTabsLink = document.querySelectorAll('.features-navigation__btn');
    var elsPanel = document.querySelectorAll('.feature--item');

    // Har bir link clickga quloq solsin. Har biriga link deb murojaat qilamiz. O'zimiz nom beramiz
    elsTabsLink.forEach(function (link) {
      // Har bir linkka click reaksiyasini beramiz
      link.addEventListener('click', function (evt) {
        // Linkning tabiiy reaksiyasi (sakrash)ning oldi olinadi
        evt.preventDefault();

        // Hamma li lardan active klassni olib tashlaymiz. Har biriga item deb murojaat qilamiz
        elsTabsItem.forEach(function (item) {
          item.classList.remove('feature--item__active');
        });

        // Bosilgan linkning otasiga active klassini qo'shamiz
        link.parentElement.classList.add('feature--item__active');

        // Hamma panellarni yopamiz
        elsPanel.forEach(function (panel) {
          panel.classList.remove('feature--item__active');
        });

        // Bog'langan panelni topamiz
        document.querySelector(link.getAttribute('href')).classList.add('feature--item__active');
      });
    });