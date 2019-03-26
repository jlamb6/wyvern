//import Link from 'next/link';
import Layout from '../components/layout';
import InitialDisplay from '../components/initial-display';
import SlideRight from '../components/slide-right';
import Header from "../components/header";
import Jumbotron from '../components/jumbotron';
import Head from 'next/head';
import Page from '../components/page';
import AnimatedCard from "../components/card-animated";
import AnimatedCardDark from "../components/card-dark-animated";

/**
 * everything after LAYOUT are the children of the components
 */

const Index = () => (
    <Layout curPage='Home'>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
            <title>Wyvern Realty Group</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossOrigin="anonymous"></link>
            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>
        </Head>

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

        <div className="wrapper" style={{
            background: 'url(https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)', 
            paddingBottom: '80px',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed'
        }}>
            <Page>
                <h1 className="display-4 mt-5">Our Approach</h1>
                <hr />
                <h4 className="font-weight-light font-italic">A New Home Listing Experience</h4>
                <div className="row" style={{marginTop: '0'}}>
                    <div className="col-md-12 col-lg-8">
                        <InitialDisplay 
                            id={'msg-one'}
                            title={'A Different Real Estate Experience'} 
                            body={'Here at Wyvern Real Estate Group we strive to offer you a Real Estate experience like no other. Our unique approach  to handling payment and service allows you to get what you want without paying us a traditional commission, and therefore saving you money!'} 
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 col-lg-8 ml-auto">
                        <SlideRight 
                            id="msg-two"
                            title={'Times Have Changed'} 
                            body={'Gone are the days when Real Estate Agents would have to search through large books of listings to find you a home or go to great lengths to get your home shown. Just like in many other industries, the Internet has made almost every aspect of a Real Estate Agents job easier. From getting your home noticed, to managing documents, almost every step can be be done from the Agents home. Here at Wyvern Real Estate Group we saw how much easier our job has become, and because of that we decided to create a better way to do Real Estate, a way that saves you money!'} 
                        />
                    </div>
                </div>
            </Page>
        </div>

        <div className="wrapper" style={{backgroundColor: 'white', paddingBottom: '80px'}}>
            <Page>
                <h1 className="display-4 mt-5">Our Services</h1>
                <hr />
                <h4 className="font-weight-light font-italic">Comprehensive Home Buying And Selling Operations</h4>
                <div className="container" style={{marginTop: '60px'}}>
                    <div className="row justify-content-between">
                        <div className="col-lg-5 col-md-6 card-col">
                            <AnimatedCardDark 
                                id={'card-one'}
                                title={'Selling'}
                                order={0}
                                listItems={['Document Management', 'Market Analysis', 'MLS Listing', 'Open Houses', 'Advertising']}
                            />
                        </div>
                        <div className="col-lg-5 col-md-6 card-col">
                            <AnimatedCard 
                                id={'card-two'}
                                title={'Buying'}
                                order={1}
                                listItems={['Document Management', 'House Searches', 'Consulting Hours', 'Home Showings', 'Access to Lenders']}
                            />
                        </div>
                    </div>
                </div>
            </Page>
        </div>

        <div className="wrapper" style={{
            background: 'url(https://images.unsplash.com/photo-1534527489986-3e3394ca569c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)', 
            paddingBottom: '80px',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'bottom'
        }}>
            <Page>
                <div className="row">
                </div>
            </Page>
        </div>
        <style jsx>{`
            .card-col {
                transition: transform .2s;
            }
            .card-col:hover {
                transform: scale(1.05, 1.05);
            }
        `}</style>
    </Layout>
)

export default Index;