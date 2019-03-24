const Section = (props) => (
    <div className="wrapper">
        <div className="section parallax bg" style={{background: `url(${this.props.image})`}}>
            {props.children}
        </div>
        <style jsx>{`
            .wrapper {
                height: 100vh;
                overflow-x: hidden;
                overflow-y: hidden;
                perspective: 2px;
            }
            .section {
                position: relative;
                height: 100vh;
            }
            .parallax::after {
                content: " ";
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                transform: translateZ(-1px) scale(1.5);
                background-size: 100%;
                z-index: -1;
            }
        `}</style>
    </div>
)