import Head from "next/head"
import { useRouter } from "next/router"
import Cookies from "universal-cookie"
import { APIClient } from "../api/_api"
import Header from "../components/Layouts/MainHeader"
import Footer from "../components/Layouts/MainFooter"

import "../styles/index.css"

function MyApp({ Component, pageProps }) {
  const cookies = new Cookies()
  const router = useRouter()

  const interceptorsHandler = () => {
    APIClient.interceptors.request.use((config) => {
      const token = cookies.get("token")
      if (token) {
        config.headers = {
          ...config.headers,
          authorization: `Bearer ${token}`
        }
      }
      return config
    })

    // Rest of your interceptors code

    return APIClient // Return the modified API client instance
  }

  const apiClientWithInterceptor = interceptorsHandler() // Get the modified API client instance

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="TelePrint Digitaldruck" />
        <meta name="google-site-verification" content="_tj_l8oS1bvsHfcJGKsdd2fcw688jhPzXnjof05GgDg" />
        <script
          src="https://www.paypal.com/sdk/js?client-id=Af4wFhhRkGZE1WZ4F_g49Bw6A1r94Y_o4xlCszm7e6KXMxX_sFefUp1lVS4hdUhelCh-cCvj_VSTwBI4&currency=EUR"
          async
        />
        <title>TelePrint</title>
      </Head>
      <div>
        <Header {...pageProps} router={router} />
        <main className="main-page-container">
          <Component {...pageProps} router={router} apiClient={apiClientWithInterceptor} />
        </main>
        <Footer {...pageProps} router={router} />
      </div>
    </>
  )
}

export default MyApp
