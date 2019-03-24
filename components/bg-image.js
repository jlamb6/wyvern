const BgImage = () => (
    <div className="bg-image">
        <style jsx>{`
            .bg-image {
                position: absolute;
                background: url('https://images.unsplash.com/30/ny-filtered.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1654&q=80');
                background-position: top;
                width: 100%;
                height: 100%;
                top: 0;
                z-index: -100;
            }
        `}</style>
    </div>
);

export default BgImage;