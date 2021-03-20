import React from 'react';

function RenderProps(props) {
    return (
        <div>
            {props.name(false)}
        </div>
    );
}

export default RenderProps;