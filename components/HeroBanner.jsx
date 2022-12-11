import Image from "next/image";
import Link from "next/link";

const HeroBanner = () => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">SMALL TEXT</p>
        <h3 className="">MID TEXT</h3>
        <Image src='' alt='image' className='hero-banner-image'/>
        <div>
          <Link href='/product/ID'>
            <button type="button">BUTTON TEXT</button>
          </Link>
          <div className="desc"><h5>
            DESCRIPTION
          </h5>
          <p>Description</p></div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;