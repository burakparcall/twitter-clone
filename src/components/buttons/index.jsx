import classNames from "classnames";
import { createElement } from "react";
import PropTypes from "prop-types";

export default function Button({size, variant, children, ... props}) {
    return createElement('button', {
        ... props,
        className: classNames("rounded-full flex items-center justify-center font-bold transition-colors", {
            "px-4 w-[78px] text-[14px] h-8 bg-[color:var(--button-primary)]": size == 'small',
            "px-4 w-[99px] text-[14px] h-8": size == 'small-following',
            "px-4 h-9": size == 'normal',
            "px-4 my-1 text-[17] w-[90%] h-[52px]": size == 'large',
            "bg-[color:var(--color-primary)] hover:opacity-90 text-white": variant == 'primary',
            "bg-[color:var(--button-secondary)] hover:bg-[color:var(--hoverColor-primary)] text-[color:var(--background-primary)]": variant == 'white',
            "bg-[color:var(--background-secondary)] border border-[#eff3f4] text-[#eff3f4]": variant == 'white-outline',
        }),
    }, children)
}

Button.propTypes = {
    size: PropTypes.oneOf(['small', 'normal', 'large']),
    props: PropTypes.object,
    variant: PropTypes.oneOf(['primay', 'white']),
}

Button.defaultProps = {
    size: 'normal',
    variant: 'primary'
}