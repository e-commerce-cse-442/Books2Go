import CreditCardInput from 'react-credit-card-input';
import React, {Component, useEffect, useState} from 'react'
import Input from '@mui/material/Input';
import "./CheckoutForm.css";
import axios from 'axios';
import { Redirect } from 'react-router';
function ChecoutForm() {
  return (
      <CheckoutFormView/>

  )
}


const CheckoutFormView = () => {
  const [isPaymentLoading, setIsPaymentLoading] = useState(false);

  const [email, setEmail] = useState('');
  const [cvc, setCVC] = useState('');
  const [number, setNumber] = useState('');
  const [exp_month, setExpMonth] =useState('');
  const [exp_year, setExpYear] = useState('');
  const [url, setURL] = useState('');
  const [status, setStatus] = useState('');

  const onPressPay = async () => {

    setIsPaymentLoading(true);
    console.log(email)
    console.log(cvc)
    console.log(number)
    console.log(exp_month)
    console.log(exp_year)

    axios({
      method: 'POST',
      url:"'http://0.0.0.0:" + window.location.port + "/payment/post",
      data: {
        email: email,
        exp_month: exp_month,
        exp_year: exp_year,
        cvc: cvc,
        number: number,
      }
    }).then((res) => {
      console.log('res', res);
      const { status, url } = res.data;
      if (status === 'requires_action') {
        console.log('url', url);
        window.location.href = url;
        setURL(url);
      } else {
        setStatus(status);
      }
      setIsPaymentLoading(false);
    }).catch((err) => {
      console.log(err);
    })

  }
    return (
      <div style={{
        padding: "3rem"
      }}>
        <div style={{
          maxWidth: "500px",
          margin: "0 auto",
        }}>
          <form onSubmit={onPressPay} style={{
            display: "block",
            width: "100%",
          }}>
            <div style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}>
              <Input
              autoComplete={true}
              autoFocus={true}
              placeholder={'Email-Address'}
              value={email}
              required
              onChange={(event) => setEmail(event.target.value)}/>
              <Input
              autoComplete={true}
              autoFocus={true}
              placeholder={'Card Number'}
              value={number}
              required
              onChange={(event) => setNumber(event.target.value)}/>
              <Input
              autoComplete={true}
              autoFocus={true}
              placeholder={'Exp Month'}
              value={exp_month}
              required
              onChange={(event) => setExpMonth(event.target.value)}/>
              <Input
              autoComplete={true}
              placeholder={'Exp Year'}
              autoFocus={true}
              value={exp_year}
              required
              onChange={(event) => setExpYear(event.target.value)}/>
              <Input
              autoComplete={true}
              placeholder={'CVC/CVV'}
              autoFocus={true}
              value={cvc}
              required
              onChange={(event) => setCVC(event.target.value)}/>
              {/* <CreditCardInput
  onError={({ inputName, err }) => console.log(`credit card input error: ${err}`)}
  cardCVCInputProps={{
    onBlur: e => console.log('cvc blur', e),
    onChange: (event) => setCVC(event.target.value),
    onError: err => console.log(`cvc error: ${err}`)
  }}
  cardExpiryInputProps={{
    onBlur: e => console.log('expiry blur', e),
    onChange: e => {
      const expiry = e.target.value;
      const exp_month = expiry.split('/')[0];
      setExpMonth(exp_month);
      const exp_year = expiry.split('/')[1];
      setExpYear(exp_year);
    },
    onError: err => console.log(`expiry error: ${err}`)
  }}
  cardNumberInputProps={{
    onBlur: e => console.log('number blur', e),
    onChange: e => setNumber(e.target.value),
    onError: err => console.log(`number error: ${err}`)
  }}
/> */}


              <button
              className="pay-button"
              onClick={onPressPay}
              disabled={isPaymentLoading}>
                {isPaymentLoading ? "Processing..." : "Pay"}
              </button>
            </div>
          </form>
        </div>
        {status !== '' ?(
          <text>
            Payment Status: ${status}
          </text>
        ): (
          <div/>
        )}
      </div>
    )

}

// const InjectedCheckoutForm = () => {
//   const stripe = useStripe();
//   return (
//     <ElementsConsumer>
//       {({elements, stripe})  => (
//         <CheckoutFormView/>
//       )}
//     </ElementsConsumer>
//   )
// }

export default ChecoutForm
