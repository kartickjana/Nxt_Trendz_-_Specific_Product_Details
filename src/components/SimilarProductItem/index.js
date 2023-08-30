// Write your code here

import './index.css'

const SimilarProductItem = props => {
  const {productDetails} = props
  const {title, brand, imageUrl, rating, price} = productDetails

  return (
    <li className="similarProductItem">
      <img
        src={imageUrl}
        className="similarProductImage"
        alt={`similar product ${title}`}
      />
      <p className="similarProductTitle">{title}</p>
      <p className="similarProductsBrand">by {brand}</p>
      <div className="similarProductPriceRatingContainer">
        <p className="similarProductPrice">Rs {price}/-</p>
        <div className="similarProductRatingContainer">
          <p className="similarProductRating">{rating}</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/star-img.png"
            alt="star"
            className="similarProductStar"
          />
        </div>
      </div>
    </li>
  )
}

export default SimilarProductItem
