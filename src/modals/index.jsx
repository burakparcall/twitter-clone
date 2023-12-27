import { useModal } from "~/store/modal/hooks";
import modals from "~/routes/modals";
import { removeModal } from "~/store/modal/action";

export default function Modal() {

    const modal = useModal()
    const currentModal = modals.find(m => m.name == modal.name)

    return (
        <div className="fixed inset-0 bg-[#5b708366] flex items-center justify-center z-20">
            <div className="max-w-[600px] bg-[color:var(--background-primary)] rounded-2xl  max-h-[90vh] overflow-auto">
                {currentModal && <currentModal.element close={removeModal} />}
            </div>
        </div>
    )
}