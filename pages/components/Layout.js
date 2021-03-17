import Navbar from "./Navbar";
import { useEffect } from "react";
import { useRouter } from "next/router";
import NProgress from "nprogress";

const Layout = ({ children, title, footer = true, dark = false }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      console.log(url);
      NProgress.start();
    };

    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", () => NProgress.done());

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  return (
    <div className={dark ? "bg-dark" : "bg-light"}>
      <title>My PortFolio</title>
      <link
        rel="stylesheet"
        href="//use.fontawesome.com/releases/v5.0.7/css/all.css"
      />
    
      <Navbar />
      <main className="container py-4">
        {title && (
          <h1 className={dark ? "text-center text-light" : "text-center"}>
            {title}
          </h1>
        )}

        {children}
      </main>
      {footer && (
        <footer className="bg-dark text-light text-center">
          <div className="container p-4">
            <div>&copy; Guillermo Torrez Portfolio</div>
            <div>2019 - {new Date().getFullYear()}</div>
            <div>All Right Reserved</div>
            <i className="fab fa-html5 fa-2x"> </i>
            <i className="fab fa-react fa-2x"> </i>
            <i className="far fa-file-code fa-2x"> </i>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Layout;
