import './Ball.css'

interface Props {
    num: number;
}

const Ball: React.FC<Props> = ({num}) => {
    return (
        <div className="ball">
            <h1 className="number">{num}</h1>
        </div>
    );
};

export default Ball;