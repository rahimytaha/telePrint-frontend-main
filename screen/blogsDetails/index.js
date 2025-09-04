/** @format */

import React, { Component } from "react"
import { Fragment } from "react"
import moment from "moment"
import Head from "next/head"

//api
import { blog } from "../../api/Api"

export default class gride extends Component {
  state = {
    category: [{ label: "", value: "" }],
    data: this.props.data,
    mostVisited: [],
    brand: [],
    brandId: [],
    show: false,
    showBrand: false
  }

  render() {
    const { blog } = this.props

    if (!blog) return <p style={{ color: "#fff", padding: "2rem" }}>Loading...</p>
    console.log("blog", blog)
    return (
      <div className="page">
        <div className="card">
          <img src={blog.coverImageUrl} alt={blog.title} className="image" />
          <div className="text">
            <h1>{blog.title}</h1>
            <p>{blog.description}</p>

            {blog?.content && <div className="body" dangerouslySetInnerHTML={{ __html: blog.content }} />}

            <div className="meta">
              <strong>meta Title:</strong> {blog.metaTitle} <br />
              <strong>meta Description:</strong> {blog.metaDescription} <br />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// {blog.map((x) => {
//   return (
//     <div
//       style={{ cursor: "pointer" }}
//       onClick={() => this.handlePageChange(x.id)}
//       className="main1-blog-child2-right flex"
//       key={Math.random()}
//     >
//       {/* <Link href={`/blogs/${x.id}/اخبار و مقالات`}> */}
//       <div className="main1-blog-child2-right-img">
//         <img alt="" src={x.cover} />
//       </div>
//       <div className="main1-blog-child2-right-txt">{x.title}</div>
//       {/* </Link> */}
//     </div>
//   )
// })}
