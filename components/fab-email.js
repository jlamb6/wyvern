const FAB = (props) => (
    <div className="btn-circle floating-action-btn">
        <a className="btn-floating">
            <i className={props.icon}></i>
        </a>
        <style jsx>{`
            .btn-circle {
                position: fixed;
                bottom: 45px;
                right: 24px;
                padding-top: 15px;

            }
            .btn-circle a {
                width: 56px;
                height: 56px;
                padding: 0;
                line-height: 54px;
                position: relative;
                color: white;
                cursor: pointer;
                vertical-align: middle;
            }
        `}</style>
    </div>
);

export default FAB;