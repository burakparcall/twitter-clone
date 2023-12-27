import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { mainMenu } from "~/utilts/consts";
import More from "./more";
import New from "./new";
import { useAccount } from "~/store/auth/hooks";


export default function Menu() {
    const account = useAccount()

        return (
            <div className="flex h-[100%] flex-col  justify-between" key={account.id}>
                <div>
                    <nav className="mt-0.5 mb-1">
                        <div>
                            {mainMenu.map((menu, index) => (
                                <NavLink key={index} to={typeof menu.path == 'function' ? menu.path() : menu.path} className="py-1 h-[50.25px] group">
                                {({isActive})=> (
                                    <div className={classNames("p-3 h-[50.26px]  rounded-full flex items-center gap-5 group-hover:bg-[color:var(--hoverColor-secondary)]", {
                                            "font-bold": isActive,
                                        },menu.className)}>
                                        <div className="w-[26.25px] text-[color:var(--color-base)] h-[26.25px] relative">
                                            {menu.notification && <span className="w-[18px] h-[18px] rounded-full bg-[color:var(--color-primary)] text-white absolute -top-1.5 -right-1 flex items-center justify-center text-[11px]">{menu.notification}</span>}
                                            {isActive ? menu.icons.active : menu.icons.passive}
                                        </div>
                                        <div className="text-xl text-[color:var(--color-base)] w-auto h-6 items-center leading-6">
                                            <span className="block w-[85.87px] h-[23.12px]">{menu.title}</span>
                                        </div>
                                    </div>
                                )}
                                </NavLink>
                            ))}
                            <More/>
                        </div>
                        <New/>
                    </nav>
                </div>
            </div>

    )
}