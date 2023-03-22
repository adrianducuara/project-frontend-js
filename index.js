import { advertisementListViewController } from "./advertisementList/advertisementListController.js";
import { headerController } from "./header/headerController.js";

const bodyTag = document.querySelector('body');
const tagList = document.querySelector('#app-list');

headerController(bodyTag, tagList);
advertisementListViewController(tagList);