import { Link } from "react-router-dom";
import Button from "~/components/buttons";

export default function TimelineSettings({close}) {
    return (
    <div className="w-[600px] h-[650px]">
        <div className="flex items-center justify-between px-4 h-[53px]">
            <button onClick={close} className="w-[56px]">
                <svg viewBox="0 0 24 24" height={20} width={20}>
                    <path
                    fill="#fff"
                    d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"
                    />
                </svg>
            </button>
            <h2 className="text-[color:var(--color-base)] font-bold text-[20px] w-[443px]">Timeline settings</h2>
            <div>
                <Button
                onClick={close}
                variant={'white'}
                >
                    Done
                </Button>
            </div>
        </div>
        <div className="my-8 px-8 mx-auto w-[400px] h-[112px]">
            <div className="w-[336px] h-[112px]">
                <div className="font-extrabold  mb-1 text-[31px]">Nothing here yet</div>
                <div className="mb-7 text-[15px] text-[color:var(--color-baseSecondary)]">
                    <p >Try pinning a <Link to={'lists'} onClick={close} className="text-[#7856ff]">List</Link> or a <Link to={'communities'} onClick={close} className="text-[#7856ff]">Community</Link> to have easier access to your favorite content.</p>
                </div>
            </div>
        </div>            
    </div>
    )
}