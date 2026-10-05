import { Button, Card } from 'react-bootstrap';
//thong tin cua props (info) se duoc lay ra = cach khai bao tu khoa props
//khai bao ben trong tham so dau vao cua component
function MyCards(props) {
    console.log(props)
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.info.image} />
      <Card.Body>
        <Card.Title>{props.info.id}</Card.Title>
        <Card.Text>
         {props.info.name}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default MyCards;