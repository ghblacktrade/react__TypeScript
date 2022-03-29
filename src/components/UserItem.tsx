import React, {FC} from "react";
import {IUser} from "../type/types";


interface UserItemProps {
    user: IUser
}

const UserItem: FC<UserItemProps> = ({user}) => {
    return (
        <div>
            <div>
                {user.id}. {user.name} life in city {user.address.city} on street {user.address.street}
            </div>
        </div>
    )
}
 export default UserItem