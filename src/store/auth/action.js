import { _setCurrentAccount } from "../auth/index";
import store from "../index";

export const setCurrentAccount = data => store.dispatch(_setCurrentAccount(data))