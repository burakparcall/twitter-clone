import { Popover } from "@headlessui/react";
import { Link } from "react-router-dom";
import { useAccount, useAccounts } from "~/store/auth/hooks";
import More from "./more";

export default function Account() {

    const account = useAccount();
    const accounts = useAccounts();

    return (

        <Popover className="relative my-3">
            <Popover.Button className="p-3 flex justify-between items-center hover:bg-[#e7e9ea1a] rounded-full outline-none">
                <div className="h-10 w-10">
                    <img className=" rounded-full" src={account.avatar} alt="" />
                </div>
                <div className="flex max-w-[100%]">
                    <div className="w-[101.22px] h-[41.19px] mx-3 flex flex-col items-start">
                        <div className=" max-w-[100%] h-[21.49px] text-[color:var(--color-base)] font-bold leading-5 ">
                            <span className="w-[101.22px]">{account.fullName}</span>
                        </div>
                        <div className=" max-w-[100%] h-5 text-[color:var(--color-baseSecondary)] text-[15px] leading-5">
                            <span>@{account.username}</span>
                        </div>
                    </div>

                </div>
                <div className="w-[69.80px] h-[18.76px] flex justify-end">
                    <svg viewBox="0 0 24 24" className="w-[18.76px] h-[18.76px] text-[color:var(--color-base)]">
                        <path
                        fill="currentColor"
                        d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
                        />
                    </svg>
                </div>
            </Popover.Button>

            <Popover.Panel 
                className="absolute border-1 min-w-[260px] -left-5 bottom-[74.5px] py-3  bg-[color:var(--background-primary)] min-h-[30px] max-h-[480px] w-[300px] rounded-[16px] shadow-box">
                
                <More close={close}/>

                {accounts.length > 1 &&
                    <div className="bg-[color:var(--background-primary)] h-px my-0.5 my-3 w-[100%] "></div>
                }
                <svg viewBox="0 0 24 24" className="absolute left-[138px] -bottom-[11px] w-6 h-[16.26px] drop rotate-180">
                    <path
                    d="M22 17H2L12 6l10 11z"
                    />
                </svg>
                <div className="">
                    <Link to={"/"} className="flex w-[300px] h-[44px]  py-3 px-4  hover:bg-[color:var(--background-secondary)]">
                        <div className={" h-5 w-[228px] rounded-full flex items-center gap-0.4"}>
                            <div className="h-5 w-[228px] font-bold text-[color:var(--color-base)]  items-center leading-5">
                                <span className="block w-[173.02px] text-[15px] h-[23.12px] ">Add an existing account</span>
                            </div>
                        </div>
                    </Link>
                    {accounts.length > 1 &&
                        <Link to={"/"} className="flex w-[300px] h-[44px] py-3 px-4  hover:bg-[color:var(--background-secondary)]">
                            <div className={" h-5 w-[228px] rounded-full flex items-center gap-0.4"}>
                                <div className="h-5 w-[228px] font-bold text-[color:var(--color-base)] items-center leading-5">
                                    <span className="block w-[173.02px] text-[15px] h-[23.12px] ">Manage Accounts</span>
                                </div>
                            </div>
                        </Link>
                    }
                    <Link to={"/"} className="flex w-[300px] h-[44px] py-3 px-4 hover:bg-[color:var(--background-secondary)]">
                        <div className={" h-5 w-[228px] rounded-full flex items-center gap-0.4"}>
                            <div className="h-5 w-[228px] font-bold text-[color:var(--color-base)] items-center leading-5">
                                <span className="block w-[173.02px] text-[15px] h-[17.79px] ">Log out @{account.username}</span>
                            </div>
                        </div>
                    </Link>
                </div>
            </Popover.Panel>
        </Popover>
    )
}