import Image from "next/image";
import Link from "next/link";
import { urlFor } from "../lib/client";

const HeroBanner = ({heroBanner}) => {

  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{heroBanner.smallText}</p>
        <h3 className="">{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <Image src={urlFor(heroBanner.image).url()} alt='image' className='hero-banner-image' width={600} height={600}/>
        <div>
          <Link href={`/product/${heroBanner.product}`}>
            <button type="button">{heroBanner.buttonText}</button>
          </Link>
          <div className="desc"><h5>
            Description
          </h5>
          <p>{heroBanner.desc}</p></div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;