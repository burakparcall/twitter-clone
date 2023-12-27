import classNames from "classnames";
import { setCurrentAccount } from "~/store/auth/action";
import { useAccount, useAccounts } from "~/store/auth/hooks"

export default function More() {

    const currentAccount = useAccount();
    const accounts = useAccounts()

    return (
        <div>
            {accounts.length > 1 && 
                accounts.map(account => (
                    <button 
                    type="button"
                    disabled={currentAccount.id == account.id}
                    onClick={() => {
                        setCurrentAccount(account)
                    }}
                    className={classNames("p-3 flex justify-between items-center w-[300px] px-4 outline-none", {
                        'hover:bg-[color:var(--background-secondary)]': currentAccount.id !== account.id
                    } )}>
                        <div className="flex items-center">
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
                        </div>
                        
                        { currentAccount.id == account.id &&
                         <svg viewBox="0 0 24 24" width={18.75} height={18.75} className="mr-2 ml-3"  >
                            <path
                                className="w-[16.03px] h-[16.03px]"
                                fill="#00ba7c"
                                d="M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-.81 14.68l-4.1-3.27 1.25-1.57 2.47 1.98 3.97-5.47 1.62 1.18-5.21 7.15z"
                            />
                        </svg>
                        }

                        
                    </button>
                ))
            }
            
        </div>
    )
}