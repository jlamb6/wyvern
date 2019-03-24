
const BgImage = () => (
    <div className="bg-image">
        <style jsx>{`
            .bg-image {
                position: fixed;
                background: url('https://images.unsplash.com/30/ny-filtered.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1654&q=80');
                background-position: top;
                background-attachment: fixed;
                width: 100%;
                height: 100%;
                top: 0;
                z-index: -100;
            }
            @media only screen and (max-device-width: 768) {
                .bg-image {
                    background-color: black;
                }
            }
        `}</style>
    </div>
);

export default BgImage;