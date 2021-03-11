import Layout from "./components/Layout";
import Link from "next/link";
import styles from '../styles/Home.module.css'


const custom404 = () => (
  <>
    <Layout />
    <div className="text-center">
      <h3>
        <h1> 404 </h1>
          - This page does not exists, Please return to 
        <Link href="/" ><a > Home</a></Link>
        </h3> 
    </div>
  </>
);

export default custom404;
