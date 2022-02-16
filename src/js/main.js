import modals from "./modules/modal";
import sliders from "./modules/sliders";
import forms from "./modules/forms";
import mask from "./modules/mask";
import checkTextInput from "./modules/checkTextInput";
import showMoreBlocks from "./modules/showMoreBlocks";
import calcFunc from "./modules/calc";
import filter from "./modules/filter";

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  modals();
  sliders('.main-slider-item', 'vertical');
  sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
  forms();
  mask('[name = "phone"]');
  checkTextInput('[name= "name"]');
  checkTextInput('[name= "message"]');
  showMoreBlocks('.button-styles', '#styles .row');
  calcFunc('#size', '#material', '#options', '.promocode', '.calc-price');
  filter();
});