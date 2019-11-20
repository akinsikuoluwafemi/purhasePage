import React from 'react';

function OrderSummary() {
    return (
        <div className='form-section'>
            
            <h2 className='order-heading'>Order Summary</h2>
            <div className="order">
                <p className="orderdescription">320 x 5 days</p> 
                <p className="orderprice">1600 GBP</p>      
            </div>

            <div className="order">
                <p className="orderdescription">Discount</p>
                <p className="orderprice">80 GBP</p>
            </div>

            <div className="order">
                <p className="orderdescription">Subtotal</p>
                <p className="orderprice">1520 GBP</p>
            </div>

            <div className="order">
                <p className="orderdescription">Tax</p>
                <p className="orderprice">304 GBP</p>
            </div>

            <div className="order apart">
                <p className="orderdescription bo">Total</p>
                <p className="orderprice bo">1824 GBP</p>
            </div>

        </div>
    )
}

export default OrderSummary;