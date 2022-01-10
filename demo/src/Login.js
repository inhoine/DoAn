import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";

export default function Login() {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return userName.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Sign-in">
      <div className="Login">
      <h2 className="h2-login">Đăng nhập</h2>
      <Form.Label>Tên đăng nhập</Form.Label>
      <Form  className="Username" onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="userName">
          <Form.Control
            autoFocus
            type="user"
            value={userName}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
          <Form.Label>Mật khẩu</Form.Label>
        <Form.Group size="lg" controlId="password">
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <a href="#" className="Forgot-password">Quên mật khẩu?</a>
        <Button className="btn-dangnhap">Đăng nhập</Button>
      </Form>
      </div>
    </div>
    
  );
}