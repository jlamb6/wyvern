const Header = () => (
    <div className="row justify-content-center text-center">
        <div className="col ml-md-auto slide-top">
            <style jsx>{`
                .col {
                    margin-bottom: 40px;
                }
                .slide-top {
                    animation-name: fade-top;
                    animation-duration: .8s;
                    animation-timing-function: ease-out;
                    transform-origin: center;
                }
                @keyframes fade-in {
                    0% {
                        transform: scale(.95, .95);
                        opacity: 0;
                    }
                    100% {
                        transform: scale(1, 1);
                        opacity: 1;
                    }
                }
                @keyframes fade-top {
                    0% {
                        transform: translate(0, -20px);
                        opacity: 0;
                    }
                    100% {
                        transform: translate(0, 0);
                        opacity: 1;
                    }
                }
            `}</style>
            <h1 className="display-2">Wyvern Realty Group</h1>
            <hr style={{borderTop: '2px solid #343a40'}}/>
            <h2>More choice, less cost</h2>
        </div>
    </div>
);

export default Header;