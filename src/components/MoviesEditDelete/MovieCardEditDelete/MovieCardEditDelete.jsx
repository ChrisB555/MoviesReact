import { Button, Modal } from "react-bootstrap";
import {
  Card,
  CardImg,
  CardImgContainer,
  CardInfoContainer,
  Title,
  UperText,
  ButtonEdit,
} from "./MovieCardEditDelete.style";

function MovieCard({ title, img, id, handleDelete, show, setShow, setShowId }) {
  const handleCloseShow = () => {
    setShow(!show), setShowId(id);
  };

  return (
    <>
      <Modal show={show} onHide={handleCloseShow}>
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          You are sure that you want to delete "{title}" ?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseShow}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleDelete(id)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
      <Card>
        <CardImgContainer>
          <CardImg src={img} />
        </CardImgContainer>
        <CardInfoContainer>
          <Title>
            <UperText></UperText> {title}
          </Title>

          <Button onClick={handleCloseShow}>Delete</Button>

          <ButtonEdit to={`/edit/${id}`}>Edit</ButtonEdit>
        </CardInfoContainer>
      </Card>
    </>
  );
}

export default MovieCard;