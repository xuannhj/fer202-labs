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
            {/* ================= CÁC CÁCH HIỂN THỊ DURATION ================= */}
            {/* Cách 1: Đổi sang Phút:Giây (MM:SS) dùng padStart(2, '0') để số giây < 10 tự thêm số 0 (VD: 185s -> 3:05 thay vì 3:5) */}
            {Math.floor(song.durationSec / 60)}:{String(song.durationSec % 60).padStart(2, '0')}

            {/* Cách 2: Dùng toán tử 3 ngôi (dễ nhớ nếu quên hàm padStart): nếu phần dư < 10 thì nối thêm '0' */}
            {/* {Math.floor(song.durationSec / 60)}:{song.durationSec % 60 < 10 ? '0' + (song.durationSec % 60) : song.durationSec % 60} */}

            {/* Cách 3: Hiển thị dạng "X mins Y secs" hoặc chỉ hiện giây nếu đề yêu cầu đơn giản */}
            {/* {Math.floor(song.durationSec / 60)} mins {song.durationSec % 60} secs */}
            {/* {song.durationSec} seconds */}
        </Card.Text>
        <Badge>
            {song.isTrending ? "Trending" : ""}
        </Badge>
      </Card.Body>
    </Card>
  );
}

export default MyCard;
