import styles from './Button.module.scss';

const Button = (props) => {
    return (
        <button className={styles.button} style={props.style} onClick={props.onClick}>
            {props.text}
        </button>
    );
}

export default Button;

