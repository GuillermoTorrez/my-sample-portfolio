import Head from 'next/head'
import Navbar from "./Navbar";

const Layout = ({ children }) => (
  <>
    <title>My PortFolio</title>
    <Navbar />
    <main className="container py-4">
        {children}
    </main>
    
  </>
);

export default Layout;
