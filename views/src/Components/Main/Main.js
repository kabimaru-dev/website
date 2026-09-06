import initialD from '../../img/Initial D.jpg';
import Img from '../Img/Img';

const imgs = [
    initialD, initialD, initialD, initialD, initialD, initialD, initialD, initialD,
    initialD, initialD, initialD, initialD, initialD, initialD, initialD, initialD,
    initialD, initialD, initialD, initialD, initialD, initialD, initialD, initialD,
    initialD, initialD, initialD, initialD, initialD, initialD, initialD, initialD,
    initialD, initialD, initialD, initialD, initialD, initialD, initialD, initialD,
    initialD, initialD, initialD, initialD, initialD, initialD, initialD, initialD,
    initialD, initialD, initialD, initialD, initialD, initialD, initialD, initialD,
    initialD, initialD, initialD, initialD, initialD, initialD, initialD, initialD,
    initialD, initialD, initialD, initialD, initialD, initialD, initialD, initialD,
    initialD, initialD, initialD, initialD, initialD, initialD, initialD, initialD,
    initialD, initialD, initialD, initialD, initialD, initialD, initialD, initialD,
    initialD, initialD, initialD, initialD, initialD, initialD, initialD, initialD
];

const Main = () => {
    return (
        <div>
            {
                imgs.map((src, i) => {
                    return <Img style={{ left: '100px' }} key={i} src={src} alt={'Initial D'} height={'300px'} width={'200px'} />
                })
            }
        </div>
    );
}

export default Main;
