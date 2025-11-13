import SmoothScroll from "./modules/scroll-suave.js";
import initFaqAccordion from "./modules/accordion.js";
import initTabNav from "./modules/tabNav.js";
import initModal from "./modules/modal.js";
import initToolTip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initMobileMenu from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import initFetchAnimais from "./modules/fetch-animais.js";
import initFetchBtc from "./modules/fetch-btc.js";
import initScrollAnimation from "./modules/scroll-animation.js";

const smoothScroll = new SmoothScroll('[data-scroll="suave"] a[href^="#"]');
smoothScroll.init();

initFaqAccordion();
initTabNav();
initModal();
initToolTip();
initDropdownMenu();
initMobileMenu();
initFuncionamento();
initFetchAnimais();
initFetchBtc();
initScrollAnimation();
