import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time : new Date().toLocaleString()
            
        }
        // this.updateClock = this.updateClock.bind(this); 
    }
    componentDidMount() {
        this.intervalID = setInterval(() => this.updateClock(), 1000);
        
    };
    componentWillUnmount() {
        clearInterval(this.intervalID)
      
    };
    updateClock() {
       
        this.setState({time: new Date().toLocaleString()})
    }
    render(){


        
        return (
            <div>
                <p>Name: {this.props.name}</p>
                <p>Color: {this.props.color}</p>
                <p>The time is: {this.state.time}</p>
            </div>
        )
    }
}

export default Clock;