
class AnimatedCard extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {orderNumber: props.order};
    }

    componentDidMount() {
        let options = {
            threshold: .5
        }
        let target = document.querySelector(`#${this.props.id}`);
        if (this.state.orderNumber > 0) {
            let clName = `reveal-${this.state.orderNumber}`;
            target.classList.add(clName);
        }
        function callback(entries) {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("reveal");
                    Array.from(entry.target.children).forEach(cur => cur.classList.add('reveal'));
                    observer.unobserve(entry.target);
                    observer.disconnect();
                }
            });
        }
        let observer = new IntersectionObserver(callback, options);
        observer.observe(target);
    }

    render() {
        const listItems = this.props.listItems.map((cur, index) => {
            return <li className="list-group-item" key={`list-item-${index}`}>{cur}</li>;
        });
        return (
            <div id={this.props.id} className="shadow card" style={{marginBottom: '40px'}}>
                <div className="card-header text-center">
                    <h4>{this.props.title}</h4>
                </div>
                <div className="card-body">
                    <ul className="list-group list-group-flush">
                        {listItems}
                    </ul>
                </div>
                <style jsx>{`
                    .card {
                        opacity: 0;
                    }
                    .reveal-one {
                        animation-delay: .8s;
                    }
                    .reveal-two {
                        animation-delay: 1.6s;
                    }
                    .reveal-three {
                        animation-delay: 2.4s;
                    }
                    .reveal {
                        animation-name: grow;
                        animation-duration: .8s;
                        animation-timing-function: ease-in-out;
                        transform-origin: center;
                        animation-fill-mode: forwards;
                    }
                    @keyframes grow {
                        0% {
                            opacity: 0;
                            transform: scale(.9, .9);
                        }
                        100% {
                            opacity: 1;
                            transform: scale(1, 1);
                        }
                    }
                `}</style>
            </div>
        )
    }
}

export default AnimatedCard;