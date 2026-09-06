import styles from './Popular.module.scss';
import initialD from '../../img/Initial D.jpg';
import Button from '../Button/Button';
import Img from '../Img/Img';

const imgs = [initialD, initialD, initialD, initialD, initialD, initialD, initialD, initialD];

function Popular() {
    return (
        <div>
            {
                imgs.map((src, i) => {
                    if(i === 0){
                        return (
                            <>
                                <Button text="<" style={{ position: 'absolute' }} />
                                <Img style={{ left: '100px' }} key={i} src={src} alt={'Initial D'} height={'300px'} width={'200px'} />
                            </>
                        );
                        
                    }
                    else if (i === imgs.length-2) {
                        return (
                            <>
                                <Img style={{ left: '100px' }} key={i} src={src} alt={'Initial D'} height={'300px'} width={'200px'} />
                                <Button text=">" style={{ position: 'absolute' }} />
                            </>
                        );
                    } else {
                        return <Img style={{ left: '100px' }} key={i} src={src} alt={'Initial D'} height={'300px'} width={'200px'} />
                    }
                } )
            }
        </div>
    );   
}

export default Popular;
