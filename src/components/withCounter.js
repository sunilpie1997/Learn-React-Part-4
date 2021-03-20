import React from 'react';

const withCounter=WrappedCounter=>{

    class NewComponent extends React.Component{

        constructor(props) {
            super(props);
            this.state={
                counter:0,
            }
        }

        incrementCount=()=>{
            this.setState(prevState =>{
                return {counter:prevState.counter+1}
            })
        }

        render(){
            const {counter}=this.state;
            return <WrappedCounter counter={counter} incrementCount={this.incrementCount}/>
        }
        
    }

    return NewComponent;
}

export default withCounter; 