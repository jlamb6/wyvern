import Link from 'next/link';

const Jumbotron = (props) => (
    <div className="jumbotron">
        <h1 className="display-4">{props.title}</h1>
        <p className="lead">{props.lead}</p>
        <hr className="my-4" />
        <p>{props.body}</p>
        <Link href="/contact"><a className="btn btn-primary btn-lg" role="button">{props.btnTitle}</a></Link>
        <style jsx>{`
            .jumbotron {
                z-index: 1;
                opacity: 0;
                animation-name: fade-in;
                animation-delay: .8s;
                animation-duration: 1s;
                animation-timing-function: ease-in-out;
                animation-fill-mode: forwards;
            }
            @keyframes fade-in {
                0% {
                    opacity: 0;
                }
                100% {
                    opacity: 1;
                }
            }
        `}</style>
    </div>
);

export default Jumbotron;