import { useState } from "react";
import Button from "../buttons";

export default function UserCard({user, index}) {

    const [following, setFollowing] = useState(false)

    return (
        <button className="px-4 py-3 w-full  hover:bg-[#ffffff08] outline-none">
            <div className="flex  items-center w-[316.23px]">
                <div className="w-10 mr-3 h-[41.19px]">
                    <img className=" rounded-full" src={user.avatar} alt="" />
                </div>
                <div className="flex justify-between w-[264.23px] truncate ">
                    <div className="h-[41.19px]  max-w-[186px] flex flex-col items-start">
                        <div className="flex">
                            <div className="  max-w-[186px] h-[21.49px] text-[15px] text-[color:var(--color-base)] font-bold leading-5 ">
                                <span className="w-[101.22px]">{user.fullname}</span>
                            </div>
                            {user.verified && (
                                <div className="text-[color:var(--color-primary)] w-[20.76px] h-[18.76px]">
                                    {user.verified}
                                </div>
                            )}
                            
                        </div>
                        <div className=" flex max-w-[186px] h-5 text-[color:var(--color-baseSecondary)] text-[15px] leading-5">
                            <span className="flex max-w-[186px]">@{user.username}</span>
                        </div>
                    </div>
                     
                    {following ? (
                        <Button 
                        size="small-following"
                        variant="white-outline"
                        className="group"
                        onClick={() => setFollowing(false)}
                        >
                            <div className="flex group-hover:hidden">Following</div>
                            <div className="hidden group-hover:flex">Unfollow</div>
                        </Button>
                        ): (
                        <Button onClick={() => setFollowing(true)} size="small" variant="white" className="ml-3 w-[78px] border rounded-full leading-4 text-white">
                            Follow
                        </Button>
                    )}
                </div>
            </div>
        </button>
    )
}