const tabItem = document.querySelectorAll('.tabs__item');
const tabContent = document.querySelectorAll('.intro__screen');

tabItem.forEach(function (element) {
  element.addEventListener('click', open);
});

function open(evt) {
  const tabTarget = evt.currentTarget;
  const button = tabTarget.dataset.button;

  tabItem.forEach(function (item) {
    item.classList.remove('tabs__item_active');
  });

  tabContent.forEach(function (item) {
    item.classList.remove('intro__screen_active');
  });

  tabTarget.classList.add('tabs__item_active');
  document.querySelector(`#${button}`).classList.add('intro__screen_active')
};
