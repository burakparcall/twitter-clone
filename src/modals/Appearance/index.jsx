import classNames from "classnames";
import { Link } from "react-router-dom";
import { setBackgroundColor, setColor, setFontSize } from "~/store/appearance/action";
import { useAppearance } from "~/store/appearance/hooks";
import { colors, fontSizes } from "~/utilts/consts";
import Button from "~/components/buttons";
import { useEffect, useState } from "react";

export default function AppearanceModal({close}) {

    const {backgroundColor, color, fontSize} = useAppearance();

	const [fontSizePercent, setFontSizePercent] = useState(0)

    useEffect(() => {
		setTimeout(() => setFontSizePercent(document.querySelector('.active-font-size').offsetLeft + 3), 1)
	}, [fontSize])

    return (
        <div className="w-[600px]">
            <h3 className="mt-8 mb-3 text-center text-[color:var(--color-base)] leading-7 font-extrabold text-[23px]">Customize your view</h3>
            <div className="px-8 pb-8">
                <p className="text-center mb-5 leading-5 text-[color:var(--color-baseSecondary)] text-[15px]">These settings affect all the X accounts on this browser. </p>
                <div className="mx-8 mb-4">
                    <div className="border border-[color:var(--color-borderPrimary)] rounded-2xl">
                        <div className="flex py-3 px-4">
                            <img 
                            className="w-10 h-10 mr-3 object-full"
                            src="https://pbs.twimg.com/profile_images/1683899100922511378/5lY42eHs_normal.jpg" 
                            alt="" />
                            <div className="flex flex-col">
                                <div className="mb-0.5 flex h-5">
                                    <div className="flex text-[color:var(--color-primary)]">
                                        <span className="font-bold text-[15px] leading-5 text-white">X</span>
                                        <svg viewBox="0 0 22 22" className="ml-0.5" width={20.75} height={18.75}>
                                            <path
                                            fill="#1d9bf0"
                                            d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"
                                            />
                                        </svg>
                                    </div>
                                    <div className="ml-1 flex items-center text-[color:var(--color-baseSecondary)]">
                                        <span className="leading-5 text-[15px]">@X</span>
                                        <span className="leading-5 text-[15px] px-1">·</span>
                                        <span className="leading-5 text-[15px] flex gap-1">1h</span>
                                    </div>
                                </div>
                                <div className="relative text-[15px] leading-5">
                                    <span className="text-[color:var(--color-base)]">
                                    At the heart of X are short messages called posts — just like this one — which can include photos, videos, links, text, hashtags, and mentions like 
                                    </span>
                                    <div className="inline-flex">
                                        <Link
                                        to={"/"}
                                        className="text-[color:var(--color-primary)] ml-1"
                                        >@X</Link>
                                    </div>
                                    <span>.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-1 font-bold text-[color:var(--color-baseSecondary)] leading-5 text-[0.813rem]">Font size</div>
                <div className="bg-[color:var(--background-secondary)] rounded-2xl mb-3">
                    <div className="p-4 flex items-center">
                        <span className="text-[color:var(--color-base)] text-[13px] leading-4">Aa</span>
                        <div className="mx-5 h-1 bg-[color:var(--color-secondary)] flex-1 rounded-full relative">
								<div
                                style={{width: fontSizePercent}}
								className="absolute h-full top-0 left-0 rounded-full bg-[color:var(--color-primary)]"/>
								<div className="flex justify-between absolute w-[calc(100%+16px)] -top-3.5 -left-[8px]">
									{fontSizes.map((fs,index) => (
										<button
                                            key={index}
											type="button"
											onClick={(e) => {
												setFontSize(fs)
												
											}}
											className={classNames("before:absolute before:inset-0 before:rounded-full before:hover:bg-[color:var(--color-primary)] before:opacity-10 w-8 h-8 rounded-full flex items-center justify-center relative", {
												"active-font-size": fs === fontSize
											})}
										>
											<div className={classNames("w-3 h-3 rounded-full bg-[color:var(--color-secondary)]", {
												"w-4 h-4": fs === fontSize,
												"!bg-[color:var(--color-primary)]": fs <= fontSize
											})}/>
										</button>
									))}
								</div>
							</div>
                        <span className="text-[color:var(--color-base)] text-[1.25rem] leading-6">Aa</span>
                    </div>
                </div>

                <div className="mb-1 font-bold text-[color:var(--color-baseSecondary)] leading-5 text-[0.813rem]">Color</div>
                <div className="bg-[color:var(--background-secondary)] rounded-2xl h-[61px] mb-3 py-1">
                    <div className="flex items-center justify-around h-[53px] w-[536px]">
                        {colors.map((clr, index) => (
                            <button
                            key={index}
                            onClick={() => {
                                setColor({
                                    ...color,
                                    ... clr
                                })
                            }}
                            style={{'--bg': clr.primary}}
                            className="py-1 w-[45px] h-[53px]">
                                <div className="bg-[color:var(--bg)] w-[45px] h-[45px] rounded-full flex items-center justify-center">
                                    {color.primary == clr.primary &&
                                    <svg viewBox="0 0 24 24" height={25} width={25}>
                                        <path
                                        className="w-[15.96px] h-[14.44px]"
                                        fill="currentColor"
                                        d="M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z"
                                        />
                                    </svg>
                                    }
                                    
                                </div>
                            </button>
                        ))}
                        
                        
                    </div>
                </div>

                <div className="mb-1 font-bold text-[color:var(--color-baseSecondary)] leading-5 text-[0.813rem]">Background</div>
                <div className="bg-[color:var(--background-secondary)] rounded-2xl mb-3 py-1 px-3 h-20 grid grid-cols-3">
                    <button
                    onClick={() => {
                        setColor({
                            primary: '#1d9bf0',
                            secondary: '#8ecdf8',
                            base: '#000',
                            baseSecondary: '#536471',
                            borderPrimary: '#eff3f4'
                        }),
                        setBackgroundColor({
                            name: 'default',
                            primary: '#fff',
                            secondary: '#fff',
                            third: '#fff',
                            buttonPrimary: '#0f1419',
                            buttonSecondary: '#0f1419'
                        })
                    }} 
                    className={classNames("w-[162.08px] bg-white border border-[#333639] h-16 m-1 rounded px-5 pl-3 pr-5 flex items-center justify-start group", {
                        "!border-[color:var(--color-primary)]": backgroundColor.name == 'default'
                    })}>
                        <div role="radio" className="h-10 w-10 flex flex-shrink-0 items-center justify-center rounded-full group-hover:bg-[#8b98a51a]">
                            <div className={classNames("h-5 w-5 border border-[#b9cad3] rounded-[32px]", {
                                "!border-[color:var(--color-primary)] !bg-[color:var(--color-primary)] text-white": backgroundColor.name == 'default' 
                            })}>
                            {backgroundColor.name == 'default' &&  
                                <svg viewBox="0 0 24 24">
                                    <path
                                    fill="currentColor"
                                    d="M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z"
                                    />
                                </svg>}
                            </div>
                        </div>
                        <div className="w-[97.3px] ml-[5px] text-[#0f1419] font-bold text-[15px] flex justify-center">
                            Default
                        </div>
                    </button>
                    <button
                    onClick={() => {
                        setColor({
                            primary: '#1d9bf0',
                            secondary: '#8ecdf8',
                            base: '#e7e9ea',
                            baseSecondary: '#71767b',
                            borderPrimary: '#38444d'
                        }),
                        setBackgroundColor(
                            {name: 'dim',
                            primary: '#15202b',
                            secondary: '#1e2732',
                            third: '#273340',
                            buttonPrimary: '#1d9bf0',
                            buttonSecondary: '#fff'}
                        )
                    }}
                    className={classNames("w-[162.08px] bg-[#15202b] border border-[#333639] h-16 m-1 rounded px-5 flex items-center justify-start group", {
                        "!border-[color:var(--color-primary)]": backgroundColor.name == 'dim'
                    })}>
                        <div role="radio" className="h-10 w-10 flex flex-shrink-0 items-center justify-center rounded-full group-hover:bg-[#1d9bf01a]">
                            <div className={classNames("h-5 w-5 border-2 border-[#b9cad3] rounded-[32px]", {
                                "!border-[color:var(--color-primary)] !bg-[color:var(--color-primary)] text-white": backgroundColor.name == 'dim' 
                            })}>
                                {backgroundColor.name == 'dim' &&  
                                <svg viewBox="0 0 24 24">
                                    <path
                                    fill="currentColor"
                                    d="M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z"
                                    />
                                </svg>}
                               
                            </div>
                        </div>
                        <div className="w-[97.3px] ml-[5px] text-[#f7f9f9] font-bold text-[15px] flex justify-center">
                            Dim
                        </div>
                    </button>
                    <button
                    onClick={() => {
                        setColor({
                            primary: '#1d9bf0',
                            secondary: '#8ecdf8',
                            base: '#e7e9ea',
                            baseSecondary: '#71767b',
                            borderPrimary: '#2f3336'
                        }),
                        setBackgroundColor({
                            name: 'dark',
                            primary: '#000',
                            secondary: '#16181c',
                            third: '#202327',
                            buttonPrimary: '#1d9bf0',
                            buttonSecondary: '#fff'
                        })
                    }} 
                    className={classNames("w-[162.08px] bg-black border-2 border-transparent h-16 m-1 rounded px-5 flex items-center justify-start group",{
                        "!border-[color:var(--color-primary)]" : backgroundColor.name == 'dark'
                    })}>
                        <div role="radio" className="h-10 w-10 flex flex-shrink-0 items-center justify-center rounded-full group-hover:bg-[#8b98a51a]">
                            <div className={classNames("h-5 w-5 border border-[#b9cad3] rounded-[32px]", {
                                "!border-[color:var(--color-primary)] !bg-[color:var(--color-primary)] text-white": backgroundColor.name == 'dark'
                            })}>
                            {backgroundColor.name == 'dark' &&  
                                <svg viewBox="0 0 24 24">
                                    <path
                                    fill="currentColor"
                                    d="M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z"
                                    />
                                </svg>}
                            </div>
                        </div>
                        <div className="w-[97.3px] ml-[5px] text-[#f7f9f9] font-bold text-[15px] flex justify-center">
                            Lights out
                        </div>
                    </button>
                </div>
                <div className="mt-7 flex justify-center items-center">
                    <Button onClick={close}>Done</Button>
                </div>
            </div>
        </div>
    )
}

