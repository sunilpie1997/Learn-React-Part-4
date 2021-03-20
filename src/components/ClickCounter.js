import React from 'react';
import withCounter from './withCounter';

function ClickCounter(props) {
    
    const {counter, incrementCount, name} = props;

    return (
        <div>
            <button onClick={incrementCount}>{name} Clicked me {counter} times</button>        
        </div>
    );
}

export default withCounter(ClickCounter,5);