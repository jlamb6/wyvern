import Navbar from './navbar';
import Head from 'next/head';
import BgImage from './bg-image';
import Page from './page';
import Header from "../components/header";
import Jumbotron from '../components/jumbotron';

//const favicon = require('../public/images/favicon-32x32.png');

const Layout = (props) => (
    <div>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
            <title>Wyvern Realty Group</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
        </Head>

        <Navbar />
        <BgImage />
        <BgImage />
        <Page>
            <Header />
            <div className="row">
                <div className="col md-ml-auto">
                <Jumbotron 
                    title={'Find your dream home'} 
                    lead={'We are here to help you acheive your dreams'} 
                    body={'Contact us to start the search for your dream home today! We will be right by your side throught the whole buying process.'}
                    btnTitle={'Contact Us Today!'}
                />
                </div>
            </div>
        </Page>

        <div className="container">
            {props.children}
        </div>

    </div>
)

export default Layout;
