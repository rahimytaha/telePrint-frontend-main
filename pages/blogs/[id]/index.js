/** @format */

import React from "react"

import Content from "../../../screen/blogsDetails"
// import Header from "../../components/Layouts/MainHeader";
import { blogPost } from "../../../api/Api"
import Head from "next/head"
function shop(props) {
  const { blog } = props
  return (
    <>
      <Head>
        <title>{blog.metaTitle || blog.title}</title>
        <meta name="description" content={blog.metaDescription || blog.description} />
        <meta property="og:title" content={blog.metaTitle || blog.title} />
        <meta property="og:description" content={blog.metaDescription || blog.description} />
        {blog.coverImageUrl && <meta property="og:image" content={blog.coverImageUrl} />}
      </Head>
      <Content {...props} />
    </>
  )
}
shop.getInitialProps = async (porps) => {
  const { data } = await blogPost.getById(porps.query.id)
  console.log("data", data)
  return { blog: data.data }
}

export default shop
