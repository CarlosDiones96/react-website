import './index.css';

export function SiteLogo(props){
    return (
       <img className="logo-image" src={props.source} alt={props.title}></img>
    );
}