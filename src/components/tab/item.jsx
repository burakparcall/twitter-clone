import classNames from "classnames";
import { useTab } from "./context";
import PropTypes from "prop-types"

export default function Item({children, id}) {

    const {active, setActive} = useTab()

    return (
        <button
        onClick={() => setActive(id)}
        type="button"
        className={classNames("flex-auto text-[color:var(--color-baseSecondary)] hover:bg-[color:var(--hoverColor-secondary)]", {
            'font-bold !text-[color:var(--color-base)]': active == id
        })}
        >
        <div className="h-[3.313rem] relative inline-flex items-center">
                {children}
            {active == id && 
                <div className="h-[4px] absolute bottom-0 left-0 w-full rounded-full bg-[color:var(--color-primary)]"/>
            }
        </div>
        </button>
    )
}

Item.propTypes = {
    children: PropTypes.oneOfType(PropTypes.string, PropTypes.node),
    id: PropTypes.string
}

