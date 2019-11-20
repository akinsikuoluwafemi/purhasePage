import React from 'react';

function HeroText(){
    const styles = {
        color: 'white'
    }
    return (
        <div style={styles} className='hero'>
            <div className="Hero-text bot">Coworking Space, South Korea</div>
            <div className='bot'><span className='light'>320 GBP</span> <span className='day'>/ 1 day</span></div>
            <p > 
                <span className='li'>Entire office for </span><span className='bold'>1 person</span> <br/>
                <span className='bold'>Mon,Aug22,2016<span className='li'> &nbsp;to&nbsp;</span>Fri,Aug 29,2016</span>

            
            </p>

        </div>
    )
}

export default HeroText;