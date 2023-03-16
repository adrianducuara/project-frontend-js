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
    
    return divTargetContainer;
}

export function buildLoading() {
    const ellipsis = buildElementHTMLAttr('div', 'class', 'lds-ellipsis');
    ellipsis.innerHTML = `
        <div></div><div></div><div></div><div></div>
    `;
    
    return ellipsis;
}

