import Tasks from "@/components/Tasks";
import UserAvatar from "@/components/UserAvatar";

export default function Home(){
    return(
        <div>
            <div>
                <UserAvatar/>
            </div>
            <Tasks/>
        </div>
    )
}