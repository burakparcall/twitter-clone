import { Outlet } from "react-router-dom";
import SideBar from "./sidebar";
import RightBar from "./rightbar";
import { useModal } from "~/store/modal/hooks";
import Modal from "~/modals";
import { useEffect } from "react";
import { useAppearance } from "~/store/appearance/hooks";

export default function MainLayout() {

    const modal = useModal()
    const appearance = useAppearance()

    useEffect(() => {
        document.documentElement.style.setProperty('--background-primary', appearance.backgroundColor.primary)
        document.documentElement.style.setProperty('--background-secondary', appearance.backgroundColor.secondary)
        document.documentElement.style.setProperty('--background-third', appearance.backgroundColor.third)
        document.documentElement.style.setProperty('--button-primary', appearance.backgroundColor.buttonPrimary)
        document.documentElement.style.setProperty('--button-secondary', appearance.backgroundColor.buttonSecondary)

        document.documentElement.style.setProperty('--color-primary', appearance.color.primary)
        document.documentElement.style.setProperty('--color-secondary', appearance.color.secondary)
        document.documentElement.style.setProperty('--color-base', appearance.color.base)
        document.documentElement.style.setProperty('--color-baseSecondary', appearance.color.baseSecondary)
        document.documentElement.style.setProperty('--color-borderPrimary', appearance.color.borderPrimary)

        document.documentElement.style.setProperty('--hoverColor-primary', appearance.hoverColor.primary)
        document.documentElement.style.setProperty('--hoverColor-secondary', appearance.hoverColor.secondary)
        document.documentElement.style.setProperty('--hoverColor-third', appearance.hoverColor.third)
        
        document.documentElement.style.setProperty('--fontSize', appearance.fontSize + 'px')
    }, [appearance])

    return (
        <div className="w-[1265px] mx-auto flex">
            <div className="flex">
                {modal && <Modal />}
                <SideBar/>
                <main className="w-[1050px] flex-1 flex justify-between">
                    <div className="w-[600px] border-x border-[color:var(--color-borderPrimary)]">
                        <Outlet/>
                    </div>
                    <div className="w-[350px] mr-[70px]">
                        <RightBar/>
                    </div>
                </main>
            </div>
        </div>
    )
}