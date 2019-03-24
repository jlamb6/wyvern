const InitialDisplay = (props) => (
    <div className="reveal main slide-left grow shadow pt-4 pr-4 pl-4 pb-5 mb-5">
        <h3 className="reveal reveal-2 slide-top mb-4">{props.title}</h3>
        <div className="reveal reveal-3 slide-left">{props.body}</div>
        <style jsx>{`
        .reveal.main {
            color: white;
            height: auto;
            padding: 10px 20px;
            margin: 40px 0;
            background: linear-gradient(5deg,#004161fc ,#0f4769e8);
        }
        .expand-left {
            animation-name: expand-left;
            animation-duration: 1s;
            animation-timing-function: ease-out;
        }
        .reveal .reveal {
            opacity: 0;
        }
        .reveal.slide-top {
            animation-name: slide-top;
            animation-duration: 1s;
            animation-fill-mode: forwards;
        }
        .reveal.slide-left {
            animation-name: slide-left;
            animation-duration: 1s;
            animation-fill-mode: forwards;
        }
        .reveal.reveal-2 {
            animation-delay: .8s;
        }
        .reveal.reveal-3 {
            animation-delay: 1.4s;
        }
        @keyframes slide-top {
            0% {
                transform: translate(0, -40px);
                opacity: 0;
            }
            100% {
                transform: translate(0, 0);
                opacity: 1;
            }
        }
        @keyframes slide-bottom {
            0% {
                transform: translate(0, 40px);
                opacity: 0;
            }
            100% {
                transform: translate(0, 0);
                opacity: 1;
            }
        }
        @keyframes slide-left {
            0% {
                transform: translate(-40px, 0);
                opacity: 0;
            }
            100% {
                transform: translate(0, 0);
                opacity: 1;
            }
        }
        @keyframes slide-right {
            0% {
                transform: translate(40px, 0);
                opacity: 0;
            }
            100% {
                transform: translate(0, 0);
                opacity: 1;
            }
        }
        @keyframes expand-left {
            0% {
                opacity: 0; 
                width: 0px;
            }
            100% {opacity: 1; 
                width: 100px;
                height: 66px;
            }
        }
    `}</style>
    </div>
);

export default InitialDisplay;