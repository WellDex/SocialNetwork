import React from "react";
import s from './Users.module.css';
import Pagination from "react-js-pagination";

class PaginationComponent extends React.Component {
    render() {

        let pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        return (
            <Pagination
                innerClass={s.pagination}
                itemClass={s.itemPagination}
                linkClass={s.LinkPagination}
                activeLinkClass={s.activeLinkPagination}
                activeClass={s.activePagination}
                hideDisabled
                activePage={this.props.currentPage}
                itemsCountPerPage={this.props.pageSize}
                totalItemsCount={this.props.totalUserCount}
                onChange={this.props.onPageChanged}
            />
        );
    };
}

export default PaginationComponent;