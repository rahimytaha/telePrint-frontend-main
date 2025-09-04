/** @format */

import React from "react"

import Content from "../../screen/blogs"
import { blogPost, FrontPages } from "../../api/Api"
import Head from "next/head"

function blogs({ meta, ...props }) {
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

blogs.getInitialProps = async (props) => {
  try {
    const json = await blogPost.getAllFetch()
    const res = await FrontPages.getByIdFetch("blogs")

    return {
      blog: json && json.data ? json.data : "",
      meta: res && res.data ? res.data : ""
    }
  } catch (error) {
    console.error(error)
    return { blog: [], meta: "" }
  }
}
export default blogs
