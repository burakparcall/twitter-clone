import { Link } from "react-router-dom";

export default function Premium() {
    return (
        <div className="bg-[color:var(--background-secondary)] border-[color:var(--background-secondary)] mb-4 rounded-2xl flex gap-2.5 items-start flex-col py-3 px-4 ">
            <div className="text-[color:var(--color-base)] text-[20px] leading-6 font-extrabold">
                <span className="">Subscribe to Premium</span>
            </div>
            <div className="font-bold text-[color:var(--color-base)] text-[15px] leading-5"> 
                <span>
                    Subscribe to unlock new features and if eligible, receive a share of ads revenue.
                </span>
            </div>
            <Link to={"premium"} className="bg-[color:var(--color-primary)] rounded-full px-4 w-[106.64px] h-9 hover:bg-[color:var(--hoverColor-third)]">
                <div className="text-[color:var(--color-base)] font-bold w-[72.86px] h-[34.23px]">
                    <span className=" w-[72.86px] text-white h-5 leading-[35px]">
                        <span className="h-[17.79px]">Subscribe</span>
                    </span>
                </div>
            </Link>
        </div>
    )
}