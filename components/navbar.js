import Link from 'next/link';

class Navbar extends React.Component {
/*
    componentDidMount() {
        let nav = document.querySelector("#main-nav");
        let navCopy = nav.cloneNode(true);

        navCopy.id = "nav-copy";
        navCopy.style.opacity = "0";
        navCopy.style.display = "none";
        nav.parentElement.insertBefore(navCopy, nav);

        let options = {
            rootMargin: '0px'
        }

        function callback(entries) {
            entries.forEach(entry => {
                console.log(entry);
                if(entry.isIntersecting && window.scrollY === 0) {
                    console.log(window.scrollY);
                    this.classList.remove('fixed-top');
                    this.classList.remove('navbar-dark');
                    this.classList.remove('bg-dark');
                }
                else if (!entry.isIntersecting) {
                    navCopy.style.display = "";
                    this.classList.add('fixed-top');
                    this.classList.add('navbar-dark');
                    this.classList.add('bg-dark');
                }
            }, this);
        }

        let observer = new IntersectionObserver(callback.bind(nav), options);
        observer.observe(nav);
    }
*/
    render() {
        return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top" id="main-nav">
            <Link href="/"><a className="navbar-brand">Wyvern Realty Group</a></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link href="/"><a className="nav-link">Home <span className="sr-only">(current)</span></a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/about"><a className="nav-link">About</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/our-approach"><a className="nav-link">Our Approach</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/offers"><a className="nav-link">Offers</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/contact"><a className="nav-link">Contact</a></Link>
                    </li>
                </ul>
            </div>
        </nav>
        )
    }
}

export default Navbar;