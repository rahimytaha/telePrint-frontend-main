/** @format */

import React, { useState, useEffect, useRef } from "react"
import { cart } from "../../../../api/Api"
import dynamic from "next/dynamic"
import { useRouter } from "next/router"

import Head from "next/head"
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js"
import { client_id } from "../../../../config/paypal"
import { emit } from "jetemit"
// import { loadScript } from "@paypal/paypal-js";

// Import the react-paypal-button component directly
// const DynamicPayPalButton = dynamic(
//   () => import("react-paypal-button").then((module) => module.default),
//   { ssr: false },
// );

function App({ amount, handleClosePayPal, handleClosePayment, closeDrawer, orderId }) {
  const [error, setError] = useState(null)
  const router = useRouter()

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
      await cart.paypalStart()
    } catch (error) {
      console.error(error)
    }
  }

  const paypalPayment = async (value) => {
    try {
      const capture = value.purchase_units[0].payments.captures[0].id
      const newValue = {
        id: capture,
        cartId: orderId
      }

      const { data, status } = await cart.paypalPayment(newValue)
      if (status === 200) {
        emit("order")
        router.push(`/dashboard/order`)
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
            value: amount
          }
        }
      ]
    })
  }

  const onApprove = (data, actions) => {
    actions.order.capture().then(function (order) {
      paypalPayment(order)
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
          clientId: client_id,
          currency: "EUR"
        }}
      >
        <PayPalButtons createOrder={createOrder} onApprove={onApprove} style={{ layout: "horizontal" }} />
      </PayPalScriptProvider>
    </div>
  )
}

export default App
