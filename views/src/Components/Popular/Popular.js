import styles from './Popular.module.scss';
import initialD1 from '../../img/Initial D.jpg';
import initialD2 from '../../img/Initial D.jpg';
import initialD3 from '../../img/Initial D.jpg';

const Popular = () => {
    return (
        <div>
            <img src={initialD1} alt="Initial D" height={"300px"} width={"200px"} />
            <img src={initialD2} alt="Initial D" height={"300px"} width={"200px"} />
            <img src={initialD3} alt="Initial D" height={"300px"} width={"200px"} />
        </div>
    );
}

export default Popular;
