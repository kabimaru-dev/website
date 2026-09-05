import styles from './Popular.module.scss';
import initialD from '../../img/Initial D.jpg';
import Button from '../Button/Button';

const imgs = [initialD, initialD, initialD, initialD, initialD, initialD, initialD];

const Popular = (props) => {
    return (
        <div>
            <Button text="<" style={{ position: 'grid'}} />
            {
                imgs.map((src, i) => (
                    <Dev style={{ position: 'grid'}}>
                        <img key={i} src={src} alt='Initial D' height={"300px"} width={"200px"} />
                    </Dev>
                ))
            }
            <Button text=">" style={{ position: 'grid'}} />
        </div>
    );
}

export default Popular;
