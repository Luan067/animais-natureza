import SmoothScroll from "./modules/scroll-suave.js";
import Accordion from "./modules/accordion.js";
import TabNav from "./modules/tabNav.js";
import Modal from "./modules/modal.js";
import ToolTip from "./modules/tooltip.js";
import ScrollAnim from "./modules/scroll-animation.js";
import DropdownMenu from "./modules/dropdown-menu.js";
import MenuMobile from "./modules/menu-mobile.js";
import Funcionamento from "./modules/funcionamento.js";
import initFetchAnimais from "./modules/fetch-animais.js";
import initFetchBtc from "./modules/fetch-btc.js";
import SlideNav from "./modules/slide.js";

const smoothScroll = new SmoothScroll('[data-scroll="suave"] a[href^="#"]');
smoothScroll.init();

const accordion = new Accordion('[data-accordion="faq"] dt');
accordion.init();

const tabnav = new TabNav(".lista-animais-imagens li", ".animais-descricao section");
tabnav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const tooltip = new ToolTip("[data-tooltip]");
tooltip.init();

const scrollanim = new ScrollAnim('[data-anime="scroll"]');
scrollanim.init();

const dropdown = new DropdownMenu("[data-dropdown]", ["click", "touchstart"]);
dropdown.init();

const menumobile = new MenuMobile('[data-menu="button"]', '[data-menu="lista"]');
menumobile.init();

const funcionamento = new Funcionamento("[data-semana]", "lojaAberta");
funcionamento.init();

const slide = new SlideNav(".slide", ".slide-container");
slide.init();
slide.addControl(".custom-controls");

initFetchAnimais();
initFetchBtc();
