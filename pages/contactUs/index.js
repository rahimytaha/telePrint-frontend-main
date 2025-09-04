/** @format */

import Content from "../../screen/contactUs"
import { FrontPages } from "../../api/Api"
import Head from "next/head"
function contactUs({ meta, ...props }) {
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

contactUs.getInitialProps = async (props) => {
  try {
    const json = await FrontPages.getByIdFetch("contactUs")

    if (!json || !json.data) {
      return { meta: "", ...props }
    }
    return { meta: json.data, ...props }
  } catch (error) {
    console.error(error)
    return { meta: "", ...props }
  }
}

export default contactUs
