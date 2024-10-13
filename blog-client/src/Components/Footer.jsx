import React from "react";
import { Layout, Menu, Input, Button, Row, Col } from "antd";
import Logo from "../Components/img/logo.png";
import '../App.css'; 
const { Footer } = Layout;

const AppFooter = () => {
  return (
    <Footer className="footer">
      <Row justify="space-around" align="middle">
        <Col span={8} className="footer-logo">
          <img src={Logo} alt="Logo" />
          <p>Blogs By Vinay</p>
        </Col>
        
        <Col span={8}>
          <Menu mode="vertical" theme="light">
            <Menu.Item key="home">
              <a href="/">Home</a>
            </Menu.Item>
            <Menu.Item key="about">
              <a href="/about">About Us</a>
            </Menu.Item>
            <Menu.Item key="contact">
              <a href="/contact">Contact</a>
            </Menu.Item>
            <Menu.Item key="privacy">
              <a href="/privacy">Privacy Policy</a>
            </Menu.Item>
          </Menu>
        </Col>

        <Col span={8}>
          <h4>Subscribe to our Newsletter</h4>
          <Input placeholder="Your email" style={{ width: '70%', marginBottom: '10px' }} />
          <Button type="primary">Subscribe</Button>
          <h4 style={{ marginTop: '20px' }}>Follow Us</h4>
          <Menu mode="horizontal" style={{ justifyContent: 'space-around' }}>
            <Menu.Item key="facebook">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            </Menu.Item>
            <Menu.Item key="twitter">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            </Menu.Item>
            <Menu.Item key="instagram">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </Footer>
  );
};

export default AppFooter;
