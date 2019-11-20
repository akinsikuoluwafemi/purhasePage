import React from 'react';

function Form (){
    return (
        <div className="fo">
            <h2 className='form-heading'>Payment information</h2>
            <form class="FORM">
                <label className='lab'>NAME ON CREDIT CARD</label><br/>
                <input className='in' type="text" placeholder='John Smith' />
                <br/>
                <label className='lab'>CREDIT CARD NUMBER</label><br />
                <input className='in' type="text" placeholder='0000 0000 0000 0000' />

                <div className='pay'>
                    <label className='lab ex' for='exp'>EXPIRES ON</label>
                    <input className='dow' id='exp' type="text" placeholder='January' />
                    <input className='down' id='exp' type="text" placeholder='2016' />
                    <div>
                        <label className='cvc' for='exp'>CVC</label><br/>
                        <input className='CVC' id='exp' type="text" placeholder='000' />
                    </div>
                </div>

                <input className='submit' type="submit" value='BOOK SECURELY'/>
            </form>
            <div className='secure'>
                <i style={{opacity: '.5'}}class="fas fa-lock "></i>
                <p className='lock'>Your Credit card information is encrypted</p>
            </div>
        </div>
        
    )
}

export default Form;