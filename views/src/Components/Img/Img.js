import styles from './Img.module.scss';
import Dev from '../Dev/Dev';

const Img = (props) => {
    return (
        <Dev img={
            <img style={props.style} key={props.key} src={props.src} alt={props.alt} height={props.height} width={props.width}/>
        } />
    );
}

export default Img;
