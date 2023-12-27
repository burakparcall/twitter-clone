import classNames from "classnames";
import { useRef, useState } from "react"
import {useClickAway} from 'react-use';

export default function Search() {

    const [query, setQuery] = useState('')
    const [focus, setFocus] = useState(false)

    const ref = useRef();
    useClickAway(ref, () => {
        setFocus(false);
      });

    return (
        <div
        ref={ref} 
        className="h-[53px] min-h-[32px]  mb-3 flex items-center sticky top-0 bg-[color:var(--background-primary)] z-10">
            <label className="w-full h-[43.57px] flex group border border-transparent rounded-full bg-[color:var(--background-third)] focus-within:bg-[color:var(--background-primary)] focus-within:border-[color:var(--color-primary)] relative">
                <div className="w-[43px] h-[41.79px] text-[color:var(--color-baseSecondary)] flex items-center rounded-s-full">
                    <svg viewBox="0 0 24 24" width={44} height={18.75}  className="pl-3 leading-6">
                        <path
                            fill="currentColor"
                            className={classNames("w-[15.60px] h-[15.60px] focus-within:color-[color:var(--color-primary)]", {
                                'text-[color:var(--color-primary)]': focus
                            })}
                            d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"
                        />
                    </svg>
                </div>
                <div className="text-[color:var(--color-base)] h-[41.79px] font-normal text-[15px] flex items-center">
                    <input
                    placeholder="Search"
                    value={query}
                    onChange={e=> setQuery(e.target.value)}
                    onFocus={() => setFocus(true)}
                    className="rounded-e-full bg-transparent w-[270.23px] h-[41.79px] p-3 outline-none"/>
                </div>
                
                {query&& (
                    <div className="w-[34px] h-[41.79px] flex items-center">
                        <button 
                        type="button" 
                        onClick={() => setQuery('')} 
                        className="bg-[color:var(--color-primary)] rounded-full flex items-center justify-center w-[22px] h-[22px] invisible group-focus-within:visible">
                            <svg viewBox="0 0 15 15" width={10} height={10}>
                                <path
                                fill="currentColor" 
                                d="M6.09 7.5L.04 1.46 1.46.04 7.5 6.09 13.54.04l1.42 1.42L8.91 7.5l6.05 6.04-1.42 1.42L7.5 8.91l-6.04 6.05-1.42-1.42L6.09 7.5z"
                                />
                            </svg>
                        </button>
                    </div>
                )}

            </label>
            {focus && (
                <div className="absolute top-[48px]  bg-[color:var(--background-primary)] shadow-box max-h-[calc(80vh - 53px)] min-h-[100px] rounded-lg">
                    <div className="pt-5 p-3 w-[350px]">
                        <div className="text-[15px] flex justify-center leading-5 text-[color:var(--color-baseSecondary)] w-[326px]" >
                            <span className="w-[292px]">
                                Try searching for people, lists, or keywords
                            </span>
                        </div>
                    </div>
                </div> 
            )}
        </div>
    )
}