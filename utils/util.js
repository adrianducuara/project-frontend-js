export function buildElementHTMLAttr(element, attriELement, valueElement) {
    const contain = document.createElement(element);
    contain.setAttribute(attriELement, valueElement);

    return contain;
}

export function buildElementHTML(element) {
    const contain = document.createElement(element);

    return contain;
}