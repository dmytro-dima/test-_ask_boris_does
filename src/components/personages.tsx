import React, {useContext} from 'react';
import {ContextApp} from "../context/context";
import InfiniteScroll from "react-infinite-scroll-component";
import {PersonagesCard} from "./card";

interface PersonagesProps {
    page: number,
    setPage: (page: number) => void
}

export const Personages: React.FC<PersonagesProps> = ({page, setPage}) => {
    const {state: {loading, personages, count}} = useContext(ContextApp);

    return (
        <div className="container-md container-personages">
            {!loading && <InfiniteScroll
              dataLength={personages.length}
              next={() => setPage(page + 1)}
              hasMore={true}
              loader={count > personages.length
                  ?
                  <button className="btn btn-primary w-100" type="button" disabled>
                      <span className="spinner-border spinner-border-sm mx-2" role="status" aria-hidden="true"></span>
                      Загрузка...
                  </button> :
                  <button className="btn btn-primary w-100 btn-up-scroll mb-3" type="button"
                          onClick={() => window.scrollTo(window.pageYOffset, 0)}>
                      all personages downloaded turn to the top 👆👆👆
                  </button>
              }
              style={{display: 'flex', justifyContent: "space-around", flexWrap: "wrap"}}
            >
                {personages.map(p => <PersonagesCard key={p.created} {...p}/>)}
            </InfiniteScroll>}
        </div>
    );
}

