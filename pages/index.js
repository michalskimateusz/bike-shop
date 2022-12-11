import Head from "next/head";
import Image from "next/image";
import { HeroBanner, Product, FooterBanner } from "../components"
import { client } from "../lib/client";
import heroBanner from "../components/HeroBanner";
export default function Home({products, bannerData}) {

  return (
    <>
      <Head>
        <title>Bike Shop</title>
        <meta name="description" content="Bike Shop for everyone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>

      <main>
        <div className="products-heading">
          <h2>
            Welcome to <a href="/">Bike Shop!</a>
          </h2>
          <p>Find a bike and go ride something new!</p>
        </div>

        <div className="products-container">
          {products?.map((product) => ( product.name))}
        </div>
      </main>
      <FooterBanner/>
    </>
  );
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query)
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery)

  return {
    props: {
      products, bannerData
    }
  }

}
