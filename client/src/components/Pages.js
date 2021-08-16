import { useContext } from 'react';
import { Context } from "../index";
import { Pagination } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';

const Pages = observer(() => {
    const {device} = useContext(Context);
    const pagesCount = Math.ceil(device.total / device.limit);
    const pages = [];

    for (let i = 0; i < pagesCount; i++) {
        pages.push(i + 1);
    }

    return (
        <Pagination className="m-t-5 mt-2">
            {pages.map(page => {
                return <Pagination.Item
                key={page}
                active={device.page === page}
                onClick={() => device.setPage(page)}
                activeLabel="">
                    {page}
                </Pagination.Item>
            })}
        </Pagination>
    );
});

export default Pages;