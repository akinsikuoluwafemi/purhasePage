import React from 'react';


class ChangeColorButton extends React.Component{
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        console.log('clicke');
        this.props.onClick();
    }
    render(){
        console.log(this.props)
        return (
            <div>
                <button onClick={this.handleClick}>Change the color</button>
            </div>
        )
    }
}

export default ChangeColorButton;