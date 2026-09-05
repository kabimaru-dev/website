import styles from './Dev.module.scss';

const Dev = (props) => {
    return (
        <dev className={styles.dev} style={props.style}>
            {props.text}
        </dev>
    );
}

export default Dev;
