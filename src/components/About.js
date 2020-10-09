import React from 'react';
import { Space, Layout, Menu, Breadcrumb, Card, Col, Row, Image, Button, Input } from 'antd';
import { SearchOutlined, DownloadOutlined, InstagramOutlined, FacebookOutlined, MailOutlined, TwitterOutlined, UserOutlined, SmileOutlined } from '@ant-design/icons';
const { TextArea } = Input;
function About(props) {
  return (
    // <h3>Requested Param: {props.match.params.id}</h3>
    <>
      <h3>Home</h3>
      <div id="test9"> Contame que te pareció!! </div>
        <br></br>
        <Row>
          <Col span={12}>
            <Input Input size="large" placeholder="Tu nombre" prefix={<UserOutlined />} />
          </Col>
          <Col span={12}>
            <Input Input size="large" placeholder="Tu correo" prefix={<MailOutlined />} />
          </Col>
        </Row>
        <br></br>
        <TextArea rows={4} />
        <br></br>
        <Button onClick={() => alert("Gracias por tu mensaje!!")} type="primary">
          Enviar mensaje
        </Button>
    </>
  );
}

export default About;