import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price*100;
    const publishableKey = 'pk_test_51Ip20oSITyEZFv8f1nz8VC4DY3kLYbHV3dbAFGpElygnGsYNw7TsQcReO00wrp1OwEuFgip6u1cA8Ahx0Ux9xv9U000W3c0cJw'

   const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return(
        <StripeCheckout 
            label= 'Pay Now'
            name='OnlineShopping App'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            discription={`Your total is ${price}`}
            amount={ priceForStripe }
            currency='INR'
            panelLabel='Pay Now'
            token={ onToken }
            stripeKey={publishableKey}
        />
    );

};

export default StripeCheckoutButton;