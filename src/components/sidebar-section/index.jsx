import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function SidebarSection( { title, more, children } ) {
    return (
        <section className="bg-[color:var(--background-secondary)] w-full mb-4 rounded-[16px] border border-[color:var(--background-secondary)]">
            <div>
                <div className="text-[color:var(--color-base)] w-[348.23px] h-[48px] py-3 px-4 leading-6">
                    <span className="font-extrabold text-[20px]">{title}</span>
                </div>

                {children}

                {more && (
                    <div className="h-[52px]">
                        <Link to={more} className="p-4 flex h-[52px] hover:bg-[#ffffff08]">
                            <div className="text-[color:var(--color-primary)] text-[15px] leading-5">
                                <span>Show more</span>
                            </div>
                        </Link>
                    </div>
                )}
            </div>
        </section>
    )
}

SidebarSection.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    more: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
}

SidebarSection.defaultProps = {
    more: false
}