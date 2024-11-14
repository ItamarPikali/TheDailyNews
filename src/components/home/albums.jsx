import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAlbums } from "../../store/utils/thunks";
import { Button, Spinner } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Moment from "react-moment";

import Masonry from 'react-masonry-css';


const Albums = () => {

    const albums = useSelector((state) => state.albums)
    const dispatch = useDispatch();


    useEffect(() => {
        if (albums.articles.items.length <= 0) {

            dispatch(fetchAlbums({ page: 1, order: "desc", limit: 6 }))
            console.log("no items yet");
            console.log(albums);

        }
    }, [])

    return (
        <>
            <Masonry
                breakpointCols={{ default: 3, 800: 2, 400: 1 }}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >

                
                {albums.articles ?
                    albums.articles.items.map(item => (
                        <div  key={item.id}>
                             <img
                                style={{width:'100%',height:'200px'}}
                                src={`https://picsum.photos/500/500?${item.id}`}
                                alt="some pic"
                            />
                            <div className="content">

                                <div className="author">
                                    ID :   {item.id}
                                </div>
                                <div className="title">
                                    TITLE :   {item.title}
                                </div>
                                <div className="excerpt">
                                    USERID :  {item.userId}
                                </div>
                                <LinkContainer to={`/album/${item.id}`} className="mt-3">
                                    <Button variant="light">Read more</Button>
                                </LinkContainer>
                            </div>

                        </div>

                    ))
                    : null}


            </Masonry>
        </>
    )
}


export default Albums