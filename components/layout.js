import Navbar from './navbar';
import BgImage from './bg-image';
import Footer from './footer';

const Layout = (props) => (
    <div>
        <Navbar active={props.curPage}/>
        <BgImage />
        {props.children}
        <Footer />
    </div>
)

export default Layout;
