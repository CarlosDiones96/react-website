
import './index.css';

function MainPage(){
    return(
        <div>
            <HelloMessage personName={'Juvenal'}/>
            <Items items={10}/>
        </div>
    );
}

function HelloMessage(props){
    return(
        <h2>Olá {props.personName}</h2>
    );
}

function Items(props){
    return(
        <p>Você possui {props.items} itens disponíveis</p>
    );
}

export default MainPage;