import { buildElementHTMLAttr } from "../utils/util.js";

export function buildLoading() {
    const wrapperLoader = buildElementHTMLAttr('div', 'class', 'container-loader col-start-1 col-end-3 lg:col-end-5');
    const loader = buildElementHTMLAttr('span', 'class', 'loader');
    wrapperLoader.appendChild(loader);
    return wrapperLoader;
}
