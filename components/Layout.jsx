import Head from "next/head";
import { Footer, Navbar } from "./index";

const Layout = ({children}) => {
  return (
    <div className="layout">
      <Head>
        <title>Bike Shop</title>
        <meta name="description" content="Bike Shop for everyone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navbar/>
      </header>
      <main className="main-container">
        {children}
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default Layout;