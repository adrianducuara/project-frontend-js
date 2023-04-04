import { buildElementHTMLAttr } from "../utils/util.js"

export function buildDetailPage(data) {
    const containerDetail = buildElementHTMLAttr('div', 'class', 'bg-white');
    containerDetail.innerHTML = `
        <div class="pt-6">
            <!-- Image gallery -->
            <div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
            
            
            <div class="aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
                <img src="${data.image}">
            </div>
            </div>

            <!-- Product info -->
            <div class="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
            <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">${data.name}</h1>
            </div>

            <!-- Options -->
            <div class="mt-4 lg:row-span-3 lg:mt-0">
                <h2 class="sr-only">Product information</h2>
                <p class="text-3xl tracking-tight text-gray-900">$${data.price}</p>
            </div>

            <div class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
                <!-- Description and details -->
                <h3 class="sr-only">Descripción</h3>

                <div class="space-y-6">
                    <p class="text-base text-gray-900">${data.description}</p>
                    <p class="text-base text-gray-900">Tipo de publicación: <span class="capitalize">${data.type}</span></p>
                </div>
                </div>
                <div class="flex items-center justify-end gap-x-6">
                    <button id="delete-advertisement" class="mt-10 flex w-middle items-center justify-center rounded-md border border-transparent bg-red-600 py-3 px-8 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">Eliminar</button>
                    <button id="update-advertisement" class="mt-10 flex w-middle items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Editar</button>
                </div>
            </div>
            </div>
        </div>`;

    return containerDetail;

}