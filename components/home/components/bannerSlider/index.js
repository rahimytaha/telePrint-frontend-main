import React, { Component } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Button } from "rsuite"
import Image from "next/image"
import Link from "next/link"

import "swiper/swiper.min.css"
import "swiper/components/navigation/navigation.min.css"

import SwiperCore, { Navigation } from "swiper"

SwiperCore.use([Navigation])

export default class BrandSlider extends Component {
  state = {
    data: this.props.data, // Assuming data is passed as a prop
    activeSlideIndex: 0
  }

  constructor(props) {
    super(props)
    this.handleSlideChange = this.handleSlideChange.bind(this)
  }

  handleSlideChange = (swiper) => {
    const activeSlideIndex = swiper.realIndex // Use realIndex to get the correct slide index in a looped slider
    this.setState({
      activeSlideIndex
    })
  }

  render() {
    const { data, activeSlideIndex } = this.state
    return (
      <div className="main-items">
        <div className="main-picture">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
            onSlideChange={this.handleSlideChange}
            loop={true} // Enable looping
          >
            {data?.items?.map((x) => {
              return (
                <SwiperSlide key={x.id}>
                  <div className="picture-container">
                    <Image src={x?.pic} alt={x.description} layout="fill" quality={100} />
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
        <div className="picture__text-details">
          <div className="main-title-content">{this?.props?.data?.items && this.props.data.items[activeSlideIndex]?.title}</div>
          <div className="main-text-content">{this?.props?.data?.items && this.props.data.items[activeSlideIndex]?.description}</div>
          <div className="items-button">
            <Link href={`/produkte/${this?.props?.data?.items && this?.props?.data?.items[activeSlideIndex].id}`} passHref>
              <Button>{this.props.buttonName}</Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
