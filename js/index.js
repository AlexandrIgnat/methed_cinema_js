
  import slideMenu from "./menu.js";
  import renderVideo from './renderVideo.js';
  import menuLink from './menuLink.js';

  slideMenu({
   openBtn : '.header__burger-btn', 
   menu : '.navigation', 
   classActive : 'navigation_active', 
   closeTriger : ' .navigation__link, .navigation__close'
  });
  menuLink();
  renderVideo();