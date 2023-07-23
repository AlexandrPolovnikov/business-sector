import './index.scss';

interface ItemProps {
    id: number;
    title: string;
    body: string;
}
const Item = ({ id, title, body }: ItemProps): JSX.Element => {
    return (
        <div className="main-page__item" key={id}>
            <span>{id}</span>
            <span>{title}</span>
            <span>{body}</span>
        </div>
    );
};

export default Item;
