import styles from './Img.module.scss';
import Dev from '../Dev/Dev';
import { Link, replace } from 'react-router-dom';

const Img = (props) => {
    return (
        <Dev img={
            <Link to={`/anime/${props.alt}`} reloadDocument = {true}>
                <img 
                    style={props.style} 
                    key={props.key} 
                    src={props.src} 
                    alt={props.alt} 
                    height={props.height} 
                    width={props.width} 
                />
            </Link>
        } />
    );
}

export default Img;
