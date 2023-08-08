import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { COLOR_TYPES, numb } from '../../library/constants.enum';
import { usePosts } from '../../hooks/usePosts';
import Input from '../../components/Input';
import Item from '../../components/Item';
import Button from '../../components/Button';
import './index.scss';

const ListItem = () => {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({ sort: '', query: '' });
    const [currentPage, setCurrentPage] = useState(1);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

    const tapBtn = (event: number) => {
        setCurrentPage(event);
        navigate(`/${currentPage}`);
    };

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${currentPage}`)
            .then((response) => {
                setPosts(response.data);
            });
    }, [currentPage]);

    const btnProp = (event: string) => {
        setFilter({ ...filter, sort: event });
    };

    return (
        <div className="main-page">
            <div className="main-page__header">
                <Input
                    value={filter.query}
                    onChange={(e) => setFilter({ ...filter, query: e.target.value })}
                    placeholder="   Поиск"
                />
                <div className="main-page__header-btn">
                    <Button text="ID" onClick={() => btnProp('')} />
                    <Button text="Заголовок" onClick={() => btnProp('title')} />
                    <Button text="Описание" onClick={() => btnProp('body')} />
                </div>
            </div>
            <div className="main-page__list">
                {sortedAndSearchedPosts.map((post: { id: number; title: string; body: string }) => (
                    <Item id={post.id} title={post.title} body={post.body} />
                ))}
            </div>
            <footer className="main-page__footer">
                <div>
                    <Button
                        text="Назад"
                        onClick={() => tapBtn(currentPage > 1 ? currentPage - 1 : currentPage + 0)}
                        type={COLOR_TYPES.info}
                    />
                </div>
                <div className="main-page__pagination">
                    {numb.map((num, key) => (
                        <Button
                            text={num}
                            onClick={() => tapBtn(key + 1)}
                            type={COLOR_TYPES.info}
                        />
                    ))}
                </div>
                <div>
                    <Button
                        text="Далее"
                        onClick={() => tapBtn(currentPage < 10 ? currentPage + 1 : currentPage + 0)}
                        type={COLOR_TYPES.info}
                    />
                </div>
            </footer>
        </div>
    );
};

export default ListItem;
