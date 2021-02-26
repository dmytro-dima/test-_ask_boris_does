import React, {useContext} from 'react';
import {ContextApp} from "../context/context";
import InfiniteScroll from "react-infinite-scroll-component";
import {sortNews} from "../store/actions";

interface TableProps {
    page: number,
    setPage: (page: number) => void
}

export const Table: React.FC<TableProps> = ({page, setPage}) => {
    const {state: {loading, news, sortType, typeField}, dispatch} = useContext(ContextApp);
    const getDomain = (link: string | undefined): string => `http://${link}`

    const IconSort: React.FC<{ type: string }> = ({type}) => typeField === type ?
        <small className="material-icons">{sortType === 'asc' ? 'keyboard_arrow_down' : 'keyboard_arrow_up'}</small> : <></>


    return (
        <div className="container-md container-table">
            {!loading && <InfiniteScroll
              dataLength={news.length}
              next={() => setPage(page + 1)}
              hasMore={true}
              loader={
                  <button className="btn btn-primary w-100" type="button" disabled>
                      <span className="spinner-border spinner-border-sm mx-2" role="status" aria-hidden="true"></span>
                      Загрузка...
                  </button>
              }
            >
              <table className="table">
                <thead>
                <tr>
                  <th className='col th-time' onClick={() => sortNews(dispatch, 'time')} role="button">Time added<IconSort
                    type='time'/></th>
                  <th className='col th-title' onClick={() => sortNews(dispatch, 'title')} role="button">Title<IconSort
                    type='title'/></th>
                  <th className='col th-domain' onClick={() => sortNews(dispatch, 'domain')} role="button">Domain<IconSort
                    type='domain'/></th>
                </tr>
                </thead>
                <tbody>
                {news.map(({id, title, time_ago, domain, url}, i: number) => (
                    <tr key={i}>
                        <td className='col td-time'>{time_ago}</td>
                        <td className='col td-title'><a className="nav-link p-0" href={url}>{title}</a></td>
                        <td className='col td-domain'><a className="nav-link p-0" href={getDomain(domain)}>{domain}</a></td>
                    </tr>
                ))}
                </tbody>
              </table>
            </InfiniteScroll>}
        </div>
    );
}


// right: 35px;
// top: 90vh;

// <table className="table">
//     <thead>
//     <tr className='row'>
//         <th className='col col-lg-2 th-time' onClick={() => sortNews(dispatch, 'time')} role="button">Time added<IconSort
//             type='time'/></th>
//         <th className='col col-lg-7 th-title' onClick={() => sortNews(dispatch, 'title')} role="button">Title<IconSort
//             type='title'/></th>
//         <th className='col col-lg-3 th-domain' onClick={() => sortNews(dispatch, 'domain')} role="button">Domain<IconSort
//             type='domain'/></th>
//     </tr>
//     </thead>
//     <tbody>
//     {news.map(({id, title, time_ago, domain, url}, i: number) => (
//         <tr key={i} className='row'>
//             <td className='col col col-lg-2 td-time'>{time_ago}</td>
//             <td className='col col col-lg-7 td-title'><a className="nav-link text-dark p-0" href={url}>{title}</a></td>
//             <td className='col col col-lg-3 td-domain'><a className="nav-link p-0" href={getDomain(domain)}>{domain}</a></td>
//         </tr>
//     ))}
//     </tbody>
// </table>
