import Modal from "~/modals";
import { setModal } from "~/store/modal/action";

export default function Settings({children}) {
    return(
        <button
        onClick={() => setModal('settings')}
        className="px-2 flex items-center w-[52px] h-[53.9px] justify-center">
            {children}
        </button>
    )
}