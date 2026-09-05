import styles from './Popular.module.scss';
import initialD from '../../img/Initial D.jpg';
import Button from '../Button/Button';
import Img from '../Img/Img';

const imgs = [initialD, initialD, initialD, initialD, initialD, initialD, initialD];

const Popular = (props) => {
    return (
        <div>
            {
                imgs.map((src, i) => (
                    i === 1 ? <Button text="<" style={{ position: 'grid' }} /> :
                    i === imgs.length ? <Button text=">" style={{ position: 'grid' }} /> : 
                    <Img style={{ left: '100px' }} key={i} src={src} alt={'Initial D'} height={'300px'} width={'200px'} />
                    // i === imgs.length ? ">" : none
                ))
            }
        </div>
    );
}

export default Popular;
