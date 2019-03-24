const Page = (props) => (

    <div className="container" style={{width: '100%', minHeight: 'calc(100vh - 56px)', paddingTop: '40px'}}>
        {props.children}
    </div>

);

export default Page;