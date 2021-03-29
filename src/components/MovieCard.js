import { Card, Button } from "react-bootstrap"
import "./MovieCard.css"
import {Link} from 'react-router-dom'
function MovieCard({ movie, setMoviePage}) {
    function handleMoviePageHandler() {
        setMoviePage(movie);
        
    }
    return (
    <>
        <Card className="movieCard">
            <Card.Img variant="top" src={movie.posterUrl} className="movieImg"/>
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>
                    {movie.description}
                </Card.Text>
                
            </Card.Body>
            <Card.Footer className="cardFooter">
                <Link to={`/movie/${movie.id}`}>
                <Button variant="primary" onClick={handleMoviePageHandler}>See more</Button>
                </Link>
                <h6>{"⭐".repeat(movie.rate)}</h6>
            </Card.Footer>
        </Card>
    </>
    )
}

export default MovieCard
