import { buildElementHTML, buildElementHTMLAttr } from "../utils/util.js";

export function buildWrapperLayout() {
    const sectionTag = buildElementHTMLAttr('section', 'class', 'advertisement-list');
    const bgWhite = buildElementHTMLAttr('div', 'class', 'bg-white');
    bgWhite.innerHTML = `
        <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 class="subtitle text-2xl font-bold tracking-tight text-gray-900">Anuncios</h2>

            <div id="product-container" class="text-center mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                <!-- More products... -->
            </div>
        </div>
    `;

    sectionTag.appendChild(bgWhite);


    return sectionTag;
}

export function buildAdvertisementList(data) {
    const anchorTarget = buildElementHTMLAttr('a', 'href', `/detail/${data.id}`);
    anchorTarget.setAttribute('id', 'item-navigate');
    const divTargetContainer = buildElementHTMLAttr('div', 'class', 'group relative');
    divTargetContainer.innerHTML = `
            <div
                class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img src="${data.image}"
                    alt="Front of men&#039;s Basic Tee in black."
                    class="h-full w-full object-cover object-center lg:h-full lg:w-full">
            </div>
            <div class="mt-4 flex justify-between">
                <div>
                    <h3 class="text-sm text-gray-700">
                        <a href="#">
                            <span aria-hidden="true" class="absolute inset-0"></span>
                            ${data.name}
                        </a>
                    </h3>
                    <p class="mt-1 text-sm text-gray-500">${data.description}</p>
                </div>
                <p class="text-sm font-medium text-gray-900">$${data.price}</p>
            </div>
    `;
    
    anchorTarget.appendChild(divTargetContainer);

    return anchorTarget;
}

export function buildLoading() {
    const ellipsis = buildElementHTMLAttr('div', 'class', 'lds-ellipsis');
    ellipsis.innerHTML = `
        <div></div><div></div><div></div><div></div>
    `;
    
    return ellipsis;
}

export function buildModalError(title, phrase, labelButton) {
    const containerModal = buildElementHTML('div');
    containerModal.setAttribute('class', 'relative z-10 hidden');
    containerModal.setAttribute('id', 'wrapper-modal');
    containerModal.setAttribute('aria-labelledby', 'modal-title');
    containerModal.setAttribute('role', 'dialog');
    containerModal.setAttribute('aria-modal', 'true');

    containerModal.innerHTML = `
    
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

    <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <!--
            Modal panel, show/hide based on modal state.

            Entering: "ease-out duration-300"
            From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            To: "opacity-100 translate-y-0 sm:scale-100"
            Leaving: "ease-in duration-200"
            From: "opacity-100 translate-y-0 sm:scale-100"
            To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        -->
        <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
                <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                <svg class="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
                </div>
                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">${title}</h3>
                <div class="mt-2">
                    <p class="text-sm text-gray-500">${phrase}</p>
                </div>
                </div>
            </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button id="modal-button" type="button" class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">${labelButton}</button>
            </div>
        </div>
        </div>
    </div>`;

    return containerModal;
}

