import {Link} from 'react-router-dom'

function MovieItem(props) {

    const link = 'https://image.tmdb.org/t/p/w500'

    return (
        <Link to={"/movie/" + props.data.id} className="movie-item animate__animated animate__bounce">
            <img src={link+props.data.poster_path} />
            <h1>{props.data.title}</h1>
        </Link>
    )
}

export default MovieItem