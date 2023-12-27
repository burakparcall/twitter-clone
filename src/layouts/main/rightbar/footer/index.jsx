import { Popover } from "@headlessui/react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="mb-4 px-4 flex flex-wrap gap-1">
            <Link to={"/"} className="pr-3 text-[color:var(--color-baseSecondary)] leading-4 text-[13px] hover:underline">Terms of Service</Link>
            <Link to={"/"} className="pr-3 text-[color:var(--color-baseSecondary)] leading-4 text-[13px] hover:underline">Privacy Policy</Link>
            <Link to={"/"} className="pr-3 text-[color:var(--color-baseSecondary)] leading-4 text-[13px] hover:underline">Cookie Policy</Link>
            <Link to={"/"} className="pr-3 text-[color:var(--color-baseSecondary)] leading-4 text-[13px] hover:underline">Imprint</Link>
            <Link to={"/"} className="pr-3 text-[color:var(--color-baseSecondary)] leading-4 text-[13px] hover:underline">Accessibility</Link>
            <Link to={"/"} className="pr-3 text-[color:var(--color-baseSecondary)] leading-4 text-[13px] hover:underline">Ads info</Link>
            <Popover className="relative inline-flex">
                <Popover.Button className="text-[color:var(--color-baseSecondary)] outline-none flex items-center leading-4 text-[13px] hover:underline">More
                <svg viewBox="0 0 24 24" width={17} height={13} className="px-0.5">
                    <path
                    fill="currentColor"
                    className="w-[9.76px] h-[2.18px]"
                    d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
                </svg>
                </Popover.Button>

                <Popover.Panel className="absolute bg-[color:var(--background-primary)] right-0 bottom-0 z-10 rounded-xl shadow-box">
                    <Link to={"/"} className="flex rounded-t-xl w-[176.80px] h-[44px] py-3 px-4 hover:bg-[color:var(--background-secondary)]">
                        <div className="w-[144.80px] h-5 flex gap-0.4">
                            <div className="text-[15px] items-center leading-5">
                                <span className="block font-bold">About</span>
                            </div>
                        </div>
                    </Link>
                    <Link to={"/"} className="flex w-[176.80px] h-[44px] py-3 px-4 hover:bg-[color:var(--background-secondary)]">
                        <div className="w-[144.80px] h-5 flex gap-0.4">
                            <div className="text-[15px] items-center leading-5">
                                <span className="block font-bold">Download the X app</span>
                            </div>
                        </div>
                    </Link>
                    <Link to={"/"} className="flex w-[176.80px] h-[44px] py-3 px-4 hover:bg-[color:var(--background-secondary)]">
                        <div className="w-[144.80px] h-5 flex gap-0.4">
                            <div className="text-[15px] items-center leading-5">
                                <span className="block font-bold">Status</span>
                            </div>
                        </div>
                    </Link>
                    <Link to={"/"} className="flex w-[176.80px] h-[44px] py-3 px-4 hover:bg-[color:var(--background-secondary)]">
                        <div className="w-[144.80px] h-5 flex gap-0.4">
                            <div className="text-[15px] items-center leading-5">
                                <span className="block font-bold">X for Business</span>
                            </div>
                        </div>
                    </Link>
                    <Link to={"/"} className="flex rounded-b-xl w-[176.80px] h-[44px] py-3 px-4 hover:bg-[color:var(--background-secondary)]">
                        <div className="w-[144.80px] h-5 flex gap-0.4">
                            <div className="text-[15px] items-center leading-5">
                                <span className="block font-bold">Developers</span>
                            </div>
                        </div>
                    </Link>
                </Popover.Panel>
            </Popover>
            <div className="pr-3 text-[color:var(--color-baseSecondary)] leading-4 text-[13px] hover:underline">© 2023 X Corp.</div>
        </footer>
    )
}