import Link from 'next/link';
// alt black color #212529

const Footer = () => (
    <div className="container" style={{backgroundColor: '#343a40', color: '#868e96', maxWidth: '100%'}}>
        <div className="row" id="footer" style={{padding: '80px 5% 40px'}}>
            <div className="col-sm-4">
                <div className="row">
                    <div className="col">
                        <h5>Navigation</h5>
                        <Link href="/home"><h6>Home</h6></Link>
                        <Link href="/about"><h6>About</h6></Link>
                        <Link href="/our-approach"><h6>Our Approach</h6></Link>
                        <Link href="/offers"><h6>Offers</h6></Link>
                        <Link href="/contact"><h6>Contact</h6></Link>
                    </div>
                </div>
            </div>
            <div className="col-sm-4">
                <div className="row">
                    <div className="col">
                        <h5>Social Media</h5>
                        <div className="social-container">
                            <Link href="www.facebook.com"><h6><i className="fab fa-facebook-f fa-lg"></i></h6></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-4 px-lg-5">
                <div className="row">
                    <div className="col">
                        <h5>Contact</h5>
                        <h6>Phone Number: 801-960-7027</h6>
                        <h6>Email: wyvernrealty@gmail.com</h6>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col" style={{padding: '40px 5%', backgroundColor: '#212529'}}>
                <div style={{padding: '0 15px'}}>
                    <span>Wyvern Real Estate Group is licensed at R&R Realty in American Fork UT</span>
                    <span className="float-right" style={{fontSize: '.8rem'}}>
                        <i className="far fa-copyright"></i>
                        <span style={{margin: '0 10px'}}>|</span>2019 - WRG
                    </span>
                </div>
            </div>
        </div>
        <style jsx>{`
            h6, p {
                color: #dee2e6;
                cursor: pointer;
            }
            h6:hover, p:hover {
                color: #fff;
            }
            .social-container {
                display: flex;
            }
        `}</style>
    </div>  
);

export default Footer;