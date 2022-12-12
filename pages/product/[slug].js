import Image from "next/image";
import { client, urlFor } from "../../lib/client";
import { AiFillStar, AiOutlineMinus, AiOutlinePlus, AiOutlineStar } from "react-icons/ai";
import { Product } from "../../components";
import { useState } from "react";

const ProductDetails = ({product, products}) => {
  const [index, setIndex] = useState(0);

  const {image, name, details, price} = product

  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <Image src={urlFor(image && image[index]).url()} alt='image' width={600} height={600} className='product-detail-image'/>
          </div>
          <div className="small-images-container">
            {image?.map((item, i) => (
              <Image src={urlFor(item).url()} className={i === index ? 'small-image selected-image': 'small-image'} width={150} height={150} onMouseEnter={()=> setIndex(i)}/>
            ))}
          </div>
        </div>
        <div className="product-detail-desc">
          <h1>{name}</h1>
          <div className="reviews">
            <div>
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>
          <h4>Details:</h4>
          <p>{details}</p>
          <p className="price">${price}</p>
          <div className="quantity">
            <h3>Quantity:</h3>
            <p className="quantity-desc">
              <span className="minus"><AiOutlineMinus/></span>
              <span className="num">0</span>
              <span className="plus"><AiOutlinePlus/></span>
            </p>
          </div>
          <div className="buttons">
            <button type="button" className="add-to-cart">Add to Cart</button>
            <button type="button" className="buy-now">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="maylike-products-wrapper">
        <h2>You may also like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products.map((item) => (
              <Product key={item._id} product={item}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
      slug {
        current
      }
    }`
  const products = await client.fetch(query)
  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current
    }
  }))

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({params: {slug}}) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]'
  const product = await client.fetch(query)
  const products = await client.fetch(productsQuery)

  return {
    props: {
      products, product
    }
  }
}