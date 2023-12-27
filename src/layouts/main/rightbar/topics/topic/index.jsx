import { Popover } from "@headlessui/react";
import { Link } from "react-router-dom";
import { numberFormat } from "~/utilts/formats";

export default function Topic( {item} ) {

    return (
        <Link to={"/"} className="px-4 py-3 w-[348.23px] flex hover:bg-[#ffffff08]">
            <div className="relative w-[316.23px] flex flex-col">
                <div className="h-4 flex justify-between">
                    <div className="w-[101.11px] text-[color:var(--color-baseSecondary)] h-4 leading-4">
                        <span className="text-[13px]">{item.title}</span>
                    </div>

                    <Popover className="relative">
                        <Popover.Button  className="outline-none rounded-full text-[color:var(--color-baseSecondary)] w-[34.76px] h-[34.76px] hover:bg-[#1d9bf01a] absolute flex items-center justify-center top-0 -m-2 right-0 hover:text-[color:var(--color-primary)]">
                            <svg viewBox="0 0 24 24" width={18.75} height={18.75}>
                                <path
                                fill="currentColor"
                                className="w-[14.07px] h-[3.14px] "
                                d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
                                />
                            </svg>
                        </Popover.Button>
                        <Popover.Panel className="w-[294.87px] absolute shadow-box bg-[color:var(--background-primary)] right-0 rounded-[12px] z-20">
                            <button className="py-3 px-4 hover:bg-[#ffffff08] z-10">
                                <div className="flex">
                                    <div className="w-[30.76px] h-5 pr-3 text-[color:var(--color-base)]">
                                        <svg viewBox="0 0 24 24" width={18.75} height={18.75}>
                                            <path
                                            fill="currentColor"
                                            className="w-[16.03px] h-[16.03px]"
                                            d="M9.5 7c.828 0 1.5 1.119 1.5 2.5S10.328 12 9.5 12 8 10.881 8 9.5 8.672 7 9.5 7zm5 0c.828 0 1.5 1.119 1.5 2.5s-.672 2.5-1.5 2.5S13 10.881 13 9.5 13.672 7 14.5 7zM12 22.25C6.348 22.25 1.75 17.652 1.75 12S6.348 1.75 12 1.75 22.25 6.348 22.25 12 17.652 22.25 12 22.25zm0-18.5c-4.549 0-8.25 3.701-8.25 8.25s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25S16.549 3.75 12 3.75zM8.947 17.322l-1.896-.638C7.101 16.534 8.322 13 12 13s4.898 3.533 4.949 3.684l-1.897.633c-.031-.09-.828-2.316-3.051-2.316s-3.021 2.227-3.053 2.322z"/>
                                        </svg>
                                    </div>
                                    <div className="font-bold text-start text-[15px] text-[color:var(--color-base)] w-[232.12px] h-5 leading-4">
                                        <span>Not interested in this</span>
                                    </div>
                                </div>
                            </button>
                            <button className="py-3 px-4 hover:bg-[#ffffff08] z-10">
                                <div className="flex">
                                    <div className="w-[30.76px] h-5 pr-3 text-[color:var(--color-base)]">
                                        <svg viewBox="0 0 24 24" width={18.75} height={18.75}>
                                            <path
                                            fill="currentColor"
                                            className="w-[16.03px] h-[16.03px]"
                                            d="M9.5 7c.828 0 1.5 1.119 1.5 2.5S10.328 12 9.5 12 8 10.881 8 9.5 8.672 7 9.5 7zm5 0c.828 0 1.5 1.119 1.5 2.5s-.672 2.5-1.5 2.5S13 10.881 13 9.5 13.672 7 14.5 7zM12 22.25C6.348 22.25 1.75 17.652 1.75 12S6.348 1.75 12 1.75 22.25 6.348 22.25 12 17.652 22.25 12 22.25zm0-18.5c-4.549 0-8.25 3.701-8.25 8.25s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25S16.549 3.75 12 3.75zM8.947 17.322l-1.896-.638C7.101 16.534 8.322 13 12 13s4.898 3.533 4.949 3.684l-1.897.633c-.031-.09-.828-2.316-3.051-2.316s-3.021 2.227-3.053 2.322z"/>
                                        </svg>
                                    </div>
                                    <div className="font-bold text-start text-[15px] text-[color:var(--color-base)] w-[232.12px] h-5 leading-4">
                                        <span>This trend is harmful or spammy</span>
                                    </div>
                                </div>
                            </button>
                        </Popover.Panel> 
                    </Popover>
                </div>
                <div className="mt-0.5 text-[color:var(--color-base)] font-bold w-[316.23px] h-5 text-[15px]">
                    <span>
                    {item.topic.type == "tag" && '#'}
                    {item.topic.value}
                    </span>
                </div>
                {item.postCount &&                
                    <div className="mt-1 text-[color:var(--color-baseSecondary)] w-[316.23px] h-4 text-[13px] leading-4">
                        <span>{numberFormat(item.postCount)} posts</span>
                    </div>
                }
            </div>
        </Link>
    )
}