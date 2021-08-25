import Navbar from "./Navbar";
import Meta from "./Meta";

export default function Page(props) {
    return (
        <div className="content">
            <Meta />
            <Navbar />
            {props.children}
        </div>
    );
};