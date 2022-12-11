import Head from "next/head";
import Image from "next/image";
import { HeroBanner, Product, FooterBanner } from "../components"
export default function Home() {
  return (
    <>
      <Head>
        <title>Bike Shop</title>
        <meta name="description" content="Bike Shop for everyone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroBanner/>

      <main>
        <div className="products-heading">
          <h2>
            Welcome to <a href="/">Bike Shop!</a>
          </h2>
          <p>Find a bike and go ride something new!</p>
        </div>

        <div className="products-container">
          {['Product 1', 'Product 2'].map((product) => ( product))}
        </div>
      </main>
      <FooterBanner/>
    </>
  );
}
