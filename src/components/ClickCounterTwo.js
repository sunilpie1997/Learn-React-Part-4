import React from 'react';

function ClickCounterTwo(props) {

    const {counter,incrementCount}=props;

    return (
        <div>
            <button onClick={incrementCount}>Clicked me {counter} times</button>
        </div>
    );
}

export default ClickCounterTwo;