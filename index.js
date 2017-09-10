class HtmlComponent {
  consturctor(selector) {
    this.baseClass = 'placeholder'
  }
  addModifier(modifier) {
    this.el.classList.add(`${this.baseClass}-${modifier}`);
  }
  removeModifier(modifier) {
    this.el.classList.remove(`${this.baseClass}-${modifier}`);
  }
}

class Menu extends HtmlComponent {
  constructor(selector) {
    super(selector);
    this.baseClass = 'wrapper';
    this.isOpened = false;
    this.el = document.querySelector(selector);
    this.menu = document.querySelector('.menu-icon');
    this.menu.addEventListener('click', (e) => { this.open(e) });
    this.menu.addEventListener('touchend', (e) => { this.open(e) });
  }

  open(event) {
    event.preventDefault();
    this.isOpened = !this.isOpened;

    if (this.isOpened) {
      this.addModifier('opened');
    } else {
      this.removeModifier('opened');
    }
  }
}

document.addEventListener('DOMContentLoaded', function() {
  new Menu('.wrapper')
})

console.dir(document.querySelector('.wrapper'));