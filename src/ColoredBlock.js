import React from 'react';
import ChangeColorButton from './ChangeColorButton';

class Coloredblock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            backgroundColor: 'red'
        };
        this.changeColor = this.changeColor.bind(this);
    }
    changeColor() {
        this.setState(prevState => {
            let newColor = prevState.backgroundColor === 'red' ? 'blue' : 'red'; 
            return {
                backgroundColor: newColor
            };
        });
        
    }
    render(){
        return (
            <div style={{ backgroundColor:this.state.backgroundColor, height: '5rem', width: '12rem' }}>
                <ChangeColorButton onClick={this.changeColor}/>
            </div>
        )
    }
}

export default Coloredblock;






class App extends React.Component {
 state = {
   timer: null,
   visible: false, 
 }
 showComponent() {
   const timer = setTimeout(() => {
     this._handleTimeout()
   }, 4000)
   this.setState({
     timer,
     visible: true,
   })
 }
 hideComponent() {
   this.setState({
     visible: false,
   })
 }
 _handleTimeout() {
   this.hideComponent()
 }
 componentDidMount() {
   this.showComponent()
 }
 render() {
   const styles = { display: this.state.visible ? 'block' : 'none' }
   return <div style={styles}>I will hide in 4 seconds.</div>
 }
}
export default App;
