import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import Moment from "react-moment";
import { fetchAlbumById } from "../../store/utils/thunks";
import { clearAlbumById } from "../../store/reducers/albums";

const SingleAlbumComponent = () => {
    const albums = useSelector((state) => state.albums);
    const dispatch = useDispatch();
    let params = useParams();

    useEffect(() => {
       dispatch(fetchAlbumById(params.id));

    }, [])

    useEffect(()=>{
        return()=>{
            dispatch(clearAlbumById());
        }
    },[])

    return (
        <>
        {albums.albumById ? 
        <div className="article_container">
            <h1>{albums.albumById.title}</h1>
            <div
                    style={{
                        background:`url(https://picsum.photos/1920/1080)`
                    }}
                    className="image"
                ></div>
                 <div className="author">
                    ID : <span>{albums.albumById.id} - </span>
                    <Moment format="DD MMMM">
                      {new Date()}
                    </Moment>
                </div>
        </div>
        : null }


        </>
    )
}

export default SingleAlbumComponent