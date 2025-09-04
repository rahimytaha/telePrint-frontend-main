/** @format */

import React, { useState, useEffect, useRef } from "react"
import { order } from "../../../../api/Api"
import dynamic from "next/dynamic"
import Head from "next/head"

const stripePromise = loadStripe(configStripe.publish_key)
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js"

function App({ amount, handleClosePayPal, handleClosePayment, closeDrawer }) {
  const [error, setError] = useState(null)
  // const paypalButtonRef = useRef(null);

  // const loadPayPalButton = async () => {
  //   let paypal = await loadScript({
  //     clientId: "Af4wFhhRkGZE1WZ4F_g49Bw6A1r94Y_o4xlCszm7e6KXMxX_sFefUp1lVS4hdUhelCh-cCvj_VSTwBI4",
  //     currency: "EUR",
  //   });
  //   if (typeof window !== "undefined" && paypal && paypal.Buttons) {
  //     paypal.Buttons().render(paypalButtonRef.current);
  //   }
  // };
  // useEffect(() => {
  //   loadPayPalButton();
  // }, []);

  const paypalStart = async () => {
    try {
      await order.paypalStart()
    } catch (error) {
      console.error(error)
    }
  }

  const paypalPayment = async (value) => {
    try {
      const capture = value.purchase_units[0].payments.captures[0].id
      const personalData = JSON.parse(localStorage.getItem("personalData") || "{}")
      const newValue = {
        phoneNumber: personalData.phoneNumber,
        email: personalData.email,
        id: capture,
      }

      const { data, status } = await order.paypalPayment(newValue)
      if (status === 200) {
        handleClosePayPal()
        handleClosePayment()
        closeDrawer()
      }
    } catch (error) {
      console.error(error)
    }
  }

  const createOrder = async (data, actions) => {
    await paypalStart()
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            currency_code: "EUR",
            value: amount,
          },
        },
      ],
    })
  }

  const onApprove = (data, actions) => {
    actions.order.capture().then(function (order) {
      paypalPayment(order)
      console.log(order)
    })
  }

  const onError = (err) => {
    setError(err)
    console.error(err)
  }

  return (
    <div>
      <PayPalScriptProvider
        options={{
          clientId: "Af4wFhhRkGZE1WZ4F_g49Bw6A1r94Y_o4xlCszm7e6KXMxX_sFefUp1lVS4hdUhelCh-cCvj_VSTwBI4",
          currency: "EUR",
        }}
      >
        <PayPalButtons createOrder={createOrder} onApprove={onApprove} style={{ layout: "horizontal" }} />
      </PayPalScriptProvider>
    </div>
  )
}

export default App
