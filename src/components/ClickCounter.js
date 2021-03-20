import React from 'react';
import withCounter from './withCounter';

function ClickCounter(props) {
    
    const {counter, incrementCount} = props;

    return (
        <div>
            <button onClick={incrementCount}>Clicked me {counter} times</button>        
        </div>
    );
}

export default withCounter(ClickCounter);