import styles from './Button.module.scss';

function protagonist(){
    console.log("Now, i am protagonist");
}

const Button = (props) => {
    return (
        <button onClick={props.onClick}>{props.text}{props.protagonist}</button>
    );
}

export default Button;
