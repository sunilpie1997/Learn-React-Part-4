import React from 'react';
import {UserConsumer} from './UserContext';

function F(props) {
    return (
        <div>
            <UserConsumer>
                {(username)=>{
                    return <h2>Hello {username}</h2>
                }}
            </UserConsumer>
        </div>
    );
}

export default F;