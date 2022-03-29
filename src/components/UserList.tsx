import React, {FC} from "react";
import {IUser} from "../type/types";


interface UserListProps {
 users: IUser[]
}

const UserList: FC<UserListProps> = ({ users }) => {
    return (
      <div>
          {users.map(user =>
          <div key={user.id}>
              {user.id}. {user.name} life in city {user.address.city} on street {user.address}
          </div>
          )}
      </div>
    )
}


export default UserList