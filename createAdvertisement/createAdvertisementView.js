import { buildElementHTMLAttr } from "../utils/util.js";

export function buildCreateAdvertisement() {
  const formElement = buildElementHTMLAttr("form", "class", "p-5");
  formElement.setAttribute("method", "post");
  formElement.setAttribute("id", "form-create");
  formElement.setAttribute("enctype", "multipart/form-data");
  formElement.innerHTML = `
        <div class="space-y-12">
            <div class="col-span-full">
            <div class="sm:col-span-3">
                <label for="url-image" class="block text-sm font-medium leading-6 text-gray-900">URL de la imágen</label>
                <div class="mt-2">
                    <input type="text" name="url-image" id="url-image" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                </div>
            </div>
        </div>
    
        <div class="border-b border-gray-900/10 pb-12">
            <div class="mt-10 grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-6">
                <div class="sm:col-span-3">
                    <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Nombre</label>
                    <div class="mt-2">
                    <input type="text" name="name" id="name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    </div>
                </div>
        
                <div class="sm:col-span-3">
                    <label for="price" class="block text-sm font-medium leading-6 text-gray-900">Precio</label>
                    <div class="mt-2">
                    <input type="number" name="price" id="price" autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    </div>
                </div>

                <div class="col-span-full">
                    <label for="about" class="block text-sm font-medium leading-6 text-gray-900">Descripción</label>
                    <div class="mt-2">
                    <textarea id="about" name="about" rows="3" class="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"></textarea>
                    </div>
                </div>
            </div>
        </div>
        <fieldset>
          <legend class="text-sm font-semibold leading-6 text-gray-900">Tipo de anuncio</legend>
            <div class="mt-6 space-y-6">
            <div class="flex items-center gap-x-3">
                <input value="venta" id="sale-type" name="type-option" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600">
                <label for="sale-type" class="block text-sm font-medium leading-6 text-gray-900">Venta</label>
            </div>
            <div class="flex items-center gap-x-3">
                <input value="compra" id="purchase-type" name="type-option" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600">
                <label for="purchase-type" class="block text-sm font-medium leading-6 text-gray-900">Compra</label>
            </div>
            </div>
        </fieldset>
        
    
        <div class="flex items-center justify-end gap-x-6">
            <a href="index.html" class="text-sm font-semibold leading-6 text-gray-900">Cancelar</a>
            <button type="reset" class="text-sm font-semibold leading-6 text-gray-900">Limpiar formulario</button>
            <button type="submit" class="rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Crear</button>
        </div>`;
  return formElement;
}
