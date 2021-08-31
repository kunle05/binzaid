import Navbar from "./Navbar";
import Meta from "./Meta";
import Footer from "./Footer";

export default function Page(props) {
    return (
        <div className="content">
            <Meta />
            <Navbar />
            {props.children}
            <Footer />
        </div>
    );
};