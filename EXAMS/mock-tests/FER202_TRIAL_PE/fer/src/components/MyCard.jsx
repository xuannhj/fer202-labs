import { Badge } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MyCard({song}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={song.coverImg}/>
      <Card.Body>
        <Card.Title>{song.title}</Card.Title>
        <Card.Text>
          {song.artist} - {song.genre}
        </Card.Text>
        <Card.Text>
            {Math.floor(song.durationSec / 60)}:{song.durationSec % 60}
        </Card.Text>
        <Badge>
            {song.isTrending ? "Trending" : ""}
        </Badge>
      </Card.Body>
    </Card>
  );
}

export default MyCard;