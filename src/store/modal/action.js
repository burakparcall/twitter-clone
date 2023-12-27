import { _removeModal, _setModal } from ".";
import store from "../index";

export const setModal = (name, data = false) => store.dispatch(_setModal({name, data}))
export const removeModal = () => store.dispatch(_removeModal())
    