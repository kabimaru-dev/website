import styles from './Popular.module.scss';
import initialD from '../../img/Initial D.jpg';
import Button from '../Button/Button';
import Img from '../Img/Img';

const imgs = [initialD, initialD, initialD, initialD, initialD, initialD, initialD];

const Popular = (props) => {
    return (
        <div>
            <Button text="<" style={{ position: 'grid' }} />
            {
                imgs.map((src, i) => (
                    if (i == 1) {
                        button <
                    } else if (i == maximum.size) {
                        button >
                    }
                    <Img style={{ left: '100px' }} key={i} src={src} alt={'Initial D'} height={'300px'} width={'200px'} />
                ))
            }
            <Button text=">" style={{ position: 'grid' }} />
        </div>
    );
}

export default Popular;
