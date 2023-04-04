import { buildLoading } from "./spinnerView.js";

export function spinnerController(container) {
    container.appendChild(buildLoading());
}