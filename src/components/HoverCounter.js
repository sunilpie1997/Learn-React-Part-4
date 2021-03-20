import React from 'react';
import withCounter from './withCounter';

function HoverCounter(props) {

    const {counter, incrementCount,name} = props;

    return (
        <div>
            <h1 onMouseOver={incrementCount}>{name} Hovered me {counter} times</h1>
        </div>
    );
}

export default withCounter(HoverCounter,10);