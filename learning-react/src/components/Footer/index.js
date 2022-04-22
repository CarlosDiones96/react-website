import './index.css';

function Footer(){
    return(
        <div className="container">
            <Link text="Link1"/>
            <Link text="Link2"/>
            <Link text="Link3"/>
        </div>
    );
}

function Link(props){
    return(
        <a className="link" href="">{props.text}</a>
    );
}

export default Footer;