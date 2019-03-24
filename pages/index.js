//import Link from 'next/link';
import Layout from '../components/layout';
import InitialDisplay from '../components/initial-display';
import SlideRight from '../components/slide-right';
import Page from '../components/page';
//import Header from "../components/header";
//import Jumbotron from '../components/jumbotron';

const Index = () => (
    <Layout>
        <Page>
            <div className="row">
                <div className="col-md-12 col-lg-8">
                    <InitialDisplay 
                        title={'A Different Real Estate Experience'} 
                        body={'Here at Wyvern Real Estate Group we strive to offer you a Real Estate experience like no other. Our unique approach  to handling payment and service allows you to get what you want without paying us a traditional commission, and therefore saving you money!'} 
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 col-lg-8 ml-auto">
                    <SlideRight 
                        title={'Times have Changed'} 
                        body={'Gone are the days when Real Estate Agents would have to search through large books of listings to find you a home or go to great lengths to get your home shown. Just like in many other industries, the Internet has made almost every aspect of a Real Estate Agents job easier. From getting your home noticed, to managing documents, almost every step can be be done from the Agents home. Here at Wyvern Real Estate Group we saw how much easier our job has become, and because of that we decided to create a better way to do Real Estate, a way that saves you money!'} 
                    />
                </div>
            </div>
        </Page>
    </Layout>
)

export default Index;