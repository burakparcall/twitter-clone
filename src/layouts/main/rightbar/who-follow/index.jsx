import SidebarSection from "~/components/sidebar-section";
import { useAccount } from "~/store/auth/hooks";
import {whoFollowUsers} from '~/mock'
import UserCard from "~/components/user-card";

export default function WhoFollow() {

    const account = useAccount();

    return (
        <SidebarSection title={"Who to Follow"} more={`/connect_people?user_id=${account.id}`}>
           {whoFollowUsers.map((user, index) => (
            <UserCard user={user} key={index}/>
           ))}
        </SidebarSection>
    )
}