import React, { useEffect, useState } from 'react'
import axios from 'axios';
const ProcessingPayment = () => {
  const [Status, setStatus] = useState('');
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    console.log('url', window.location.href);
    const url = window.location.href;
    const url1 = url.split('https://books2go.herokuapp.com/Payment?payment_intent=')[1];
    const url2 = url1.split('&payment_intent_client_secret')[0];
    console.log(url1);
    console.log(url2);
    payment_status(url2);
  })

  const payment_status = async (id) => {
    axios({
      method: 'POST',
      url: 'https://books2go.herokuapp.com/payment-intent/get',
      data: {
        payment_intent_id: id
      }
    }).then((res) => {
      const { status } = res.data;
      console.log(status);
      setLoading(true);
      setStatus(status);
    })
  }
  if (loading === true) {
    <div style={{
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <text>
        Loading...
      </text>
    </div>
  } else {
    <div style={{
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <text>
        Payment Status: {Status}
      </text>
    </div>
  }
}

export default ProcessingPayment
