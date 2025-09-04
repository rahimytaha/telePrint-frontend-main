/** @format */

import React from "react"

import Content from "../../screen/auth/login"
// import Header from "../../components/Layouts/MainHeader";
import Head from "next/head"
import { FrontPages } from "../../api/Api"

function Login({ meta, ...props }) {
  return (
    <>
      <Head>
        {meta && (
          <>
            <title>{meta.metaTitle}</title>
            <meta name="description" content={meta.metaDescription} />
            <meta name="keywords" content={meta.metaKeywords} />
            <link rel="canonical" href={meta.canonicalUrl} />
            <meta property="og:title" content={meta.metaTitle} />
            <meta property="og:description" content={meta.metaDescription} />
          </>
        )}
      </Head>
      <Content props={props} />
    </>
  )
}

Login.getInitialProps = async (props) => {
  try {
    const json = await FrontPages.getByIdFetch("login")

    if (!json || !json.data) {
      return { meta: "", ...props }
    }
    return { meta: json.data, ...props }
  } catch (error) {
    console.error(error)
    return { meta: "", ...props }
  }
}

export default Login
