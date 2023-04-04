import { advertisementListViewController } from "./advertisementListController.js";
import { headerController } from "../header/headerController.js";
import { spinnerController } from "../spinner/spinnerController.js";

const bodyTag = document.querySelector('body');
const tagList = document.querySelector('#app-list');

headerController(bodyTag, tagList);
advertisementListViewController(tagList);