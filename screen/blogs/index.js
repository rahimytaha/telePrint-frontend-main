/** @format */

import React, { Component } from "react"
//api
import jMoment from "moment"
import Link from "next/link"
import Head from "next/head"

export default class gride extends Component {
  state = {
    category: [{ label: "", value: "" }],
    data: [],
    brand: [],
    brandId: [],
    show: false,
    showBrand: false,
    blog: []
  }

  render() {
    return (
      <>
        <Head>
          <title>Blog Page</title>
        </Head>

        {this?.props?.props?.blog && this?.props?.props?.blog.length > 0 && (
          <div className={"pageWrapper"}>
            <div className={"grid"}>
              {this?.props?.props?.blog.map((post) => (
                <div key={post.id} className={"card"}>
                  <img src={post.coverImageUrl} alt={post.title} className={"image"} />
                  <div className={"content"}>
                    <h3>{post.title}</h3>
                    <p>{post.metaDescription}</p>
                    <Link href={`/blogs/${post.slug ? post.slug : post.id}`} passHref>
                      <a className={"link"}>Read More</a>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </>
    )
  }
}
