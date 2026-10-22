import React from 'react';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';

export default function NotFound() {
  return (
    <div className="text-center py-5">
      <h1 className="display-1 fw-bold text-danger">404</h1>
      <h2 className="mb-3 fw-bold">Không tìm thấy trang!</h2>
      <p className="text-muted mb-4">
        Đường dẫn bạn vừa truy cập không tồn tại hoặc đã được di dời.
      </p>
      <Button variant="primary" as={Link} to="/">
        ⬅️ Quay về Trang chủ
      </Button>
    </div>
  );
}
