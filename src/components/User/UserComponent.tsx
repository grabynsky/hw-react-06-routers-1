import React, {FC} from 'react';
import {IUser} from "../../types/IUser";

type IProps = {
    user:IUser,
}

const UserComponent: FC<IProps> = ({user}) => {
    return (
        <div>
            <div>
                <p><b>{user.id}</b> - {user.name}</p>
                <p>E-mail: {user.email}</p>
                <p>Website: {user.website}</p>
                <hr/>
            </div>

        </div>
    );
};

export default UserComponent;