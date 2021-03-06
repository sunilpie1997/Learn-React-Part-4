import React from 'react';

const withCounter=(WrappedCounter, incrementNumber)=>{

    class NewComponent extends React.Component{

        constructor(props) {
            super(props);
            this.state={
                counter:0,
            }
        }

        incrementCount=()=>{
            this.setState(prevState =>{
                return {counter:prevState.counter+incrementNumber}
            })
        }

        render(){
            const {counter}=this.state;
            return <WrappedCounter counter={counter} incrementCount={this.incrementCount} {... this.props}/>
        }
        
    }

    return NewComponent;
}

export default withCounter; 