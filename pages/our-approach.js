import Layout from '../components/layout';
import Head from 'next/head';
import Page from '../components/page';
import AnimatedCard from '../components/card-animated';
import AnimatedCardDark from '../components/card-dark-animated';

const OurApproach = () => (
    <Layout curPage='Our Approach'>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
            <title>Our Approach | Wyvern Realty Group</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossOrigin="anonymous"></link>
        </Head>
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

export default OurApproach;