import styles from './Popular.module.scss';
import initialD from '../../img/Initial D.jpg';

const imgs = [initialD, initialD, initialD, initialD, initialD, initialD, initialD];

const Popular = () => {
    return (
        <div>
            {
                imgs.map((src, i) => (
                    <img key={i} src={src} alt='Initial D' height={"300px"} width={"200px"} />
                ))
            }
        </div>
    );
}

export default Popular;
