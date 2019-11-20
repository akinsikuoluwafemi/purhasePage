import React from 'react';
import Download from './Download';
import Catsdiv from './Catsdiv';
import Petbox from './Petbox';
import Question from './Question';
import Dogsdiv from './Dogsdiv';
import Logo from './Logo';


class ContainerOne extends React.Component {
    constructor(props){
        super(props);
       
    }
    hide(){
        console.log('cat');
           
    }
    
    render(){
        
        return (
            <div className="container-one">
                <Download />
                <Catsdiv onClick={this.hide}/>
                <Petbox />
                <Question
                    q1="Are you a cat or a dog person?"
                    q2="(Don't worry we won't judge!)"
                />
                <Dogsdiv />
                <Logo/>

            </div>
           
        
        )
    }
}

export default ContainerOne;