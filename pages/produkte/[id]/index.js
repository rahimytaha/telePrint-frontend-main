/** @format */

import React from "react"

import Content from "../../../screen/productDetails"
// import Header from "../../components/Layouts/MainHeader";
import Head from "next/head"
import { FrontPages } from "../../../api/Api"
import { combinedData } from "../../../data"
function productDetails(props) {
  return (
    <>
      <Head>
        <meta name="google-site-verification" content="_tj_l8oS1bvsHfcJGKsdd2fcw688jhPzXnjof05GgDg" />
        {props?.meta && (
          <>
            <title>{props?.meta?.metaTitle}</title>
            <meta name="description" content={props?.meta?.metaDescription} />
            <meta name="keywords" content={props?.meta?.metaKeywords} />
            <link rel="canonical" href={props?.meta?.canonicalUrl} />
            <meta property="og:title" content={props?.meta?.metaTitle} />
            <meta property="og:description" content={props?.meta?.metaDescription} />
          </>
        )}
      </Head>
      <Content {...props} />
    </>
  )
}
productDetails.getInitialProps = async (props) => {
  const id = props.query.id
  const data = combinedData.find((x) => String(x.id) === String(props.query.id))
  try {
    const json = await FrontPages.getByIdFetch(id)

    if (!json || !json.data) {
      return { id: id, data: data, meta: "" }
    }
    return { id: id, data: data, meta: json.data }
  } catch (error) {
    console.error(error)
    return { id: id, data: data, meta: "" }
  }
}

export default productDetails
