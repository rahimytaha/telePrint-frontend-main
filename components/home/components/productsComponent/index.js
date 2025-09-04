import Link from "next/link"
import Image from "next/image"

const BrandSlider = ({ data }) => {
  return (
    <div className="container-product">
      {data.map((x) => {
        return (
          <Link href={`/produkte/${x.id}`} key={x.id}>
            <a>
              <div className="product-item__details">
                <div className="product-picture">{x.pic}</div>
                <div className="background-image">
                  <Image src={x.image} alt={x.name} layout="fill" quality={100} />
                </div>
                <div className="text-container">
                  <div className="product-name">{x.name}</div>
                  <div className="product-description">{x.type}</div>
                </div>
              </div>
            </a>
          </Link>
        )
      })}
    </div>
  )
}

export default BrandSlider
