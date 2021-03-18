import Layout from "../components/Layout";
import Link from "next/link";

const custom404 = () => (
  <>
    <Layout />
    <div className="text-center">
        <h1> 404 </h1>
          - This page does not exists, Please return to 
        <Link href="/" ><a > Home. </a></Link>
    </div>
  </>
);

export default custom404;
