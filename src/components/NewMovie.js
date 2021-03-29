import React, {useState} from 'react'
import { Button, Modal, Form} from 'react-bootstrap';
import './NewMovie.css'

function NewMovie({show ,setShow, addNewMovie}) {

const handleClose = () => setShow(false);
const [newMovie,setNewMovie] = useState({});
function handleAdd(){
    addNewMovie(newMovie);
    handleClose();
}

return (
    <>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
    >
        <Modal.Header closeButton>
        <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group>
            <Form.Control type="text" placeholder="Title" className="AddMovieInput" onChange={(event)=>setNewMovie({...newMovie, title:event.target.value})} required/>
            <Form.Control type="text" placeholder="Description" className="AddMovieInput" onChange={(event)=>setNewMovie({...newMovie, description:event.target.value})} required/>
            <Form.Control type="text" placeholder="Poster URL" className="AddMovieInput" onChange={(event)=>setNewMovie({...newMovie, posterUrl:event.target.value})}/>
            <Form.Control type="text" placeholder="Trailer URL" className="AddMovieInput" onChange={(event)=>setNewMovie({...newMovie, trailer:event.target.value})}/>
            <Form.Control type="number" placeholder="Rating" max="5" min="0" className="AddMovieInput" onChange={(event)=>event.target.value > 5 ? setNewMovie({...newMovie, rate:5}) : event.target.value < 0 ? setNewMovie({...newMovie, rate:0}): setNewMovie({...newMovie, rate:event.target.value})}/>
        </Form.Group>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Close
        </Button>
        <Button variant="primary"onClick={handleAdd}>Add</Button>
        </Modal.Footer>
    </Modal>
    </>
  );
}



export default NewMovie

