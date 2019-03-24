import Link from 'next/link';

const Footer = () => (
    <div className="row" id="footer">
        <div className="col-md-4">
            <div className="row">
                <div className="col-12">
                    <h5>Navigation</h5>
                    <h6><Link to="/home">Home</Link></h6>
                    <h6><Link to="/about">About</Link></h6>
                    <h6><Link to="/our-approach">Our Approach</Link></h6>
                    <h6><Link to="/offers">Offers</Link></h6>
                    <h6><Link to="/contact">Contact</Link></h6>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="row">
                <div className="col-12">
                    <h5>Social Media</h5>
                    <h6><Link to="www.facebook.com"><i className="fa fa-facebook"></i></Link></h6>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="row">
                <div className="col-12">
                    <h5>Contact</h5>
                    <h6>Phone Number: 801-960-7027</h6>
                    <h6>Email: wyvernrealty@gmail.com</h6>
                </div>
            </div>
        </div>
        <div className="col md-ml-auto">
            <p>Wyvern Real Estate Group is licensed at R&R Realty in American Fork UT</p>
        </div>
    </div>  
);

export default Footer;