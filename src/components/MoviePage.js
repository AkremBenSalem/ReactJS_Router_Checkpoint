import React from 'react'
import { Card, Button } from "react-bootstrap"
import "./MoviePage.css"
import {Link} from 'react-router-dom'


export default function MoviePage({movie}) {
    return (
        <div>
        <Card className="moviePageCard">
            <Card.Body className="MoviePageBody">
            <Card.Img variant="top" src={movie.posterUrl} className="moviePageImg"/>
                <div className="moviePageText">
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>
                    {movie.description}
                </Card.Text>
                <h6>{"⭐".repeat(movie.rate)}</h6>
                <Link to='/'>
                <Button variant="primary">Go Back</Button>
                </Link>
                <br /> <br />
                <iframe width="840" height="472.5" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </Card.Body>
        </Card>
        </div>
    )
}
