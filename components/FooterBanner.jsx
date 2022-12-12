import Link from "next/link";

const FooterBanner = ({
  footerBanner: { discount, saleTime, smallText, product, buttonText, desc },
}) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <h3>{smallText}</h3>
          <p>{discount}</p>
          <p>{saleTime}</p>
        </div>
        <div className="right">
          <p>{desc}</p>
          <Link href={`/product/${product}`}>
            <button type="button">{buttonText}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;
