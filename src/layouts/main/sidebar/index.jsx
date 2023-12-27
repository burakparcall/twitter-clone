import Logo from './logo/index'
import Account from './menu/account'
import Menu from './menu/index'
export default function SideBar() {
    return (
        <aside className="w-[275px] min-h-screen max-h-screen px-2 flex flex-col sticky top-0">
            <Logo/>
            <Menu/>
            <Account/>
        </aside>
    )
}