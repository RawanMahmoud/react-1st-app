import React, { Component } from 'react';
import { notification,Icon, Row,Col,Button,Layout, Menu, Breadcrumb } from 'antd';
import './LayOut.css';
const { Header, Content, Footer } = Layout;
const ButtonGroup = Button.Group;


const openNotification = () => {
  notification.open({
    message: 'Welcome',
    style: {
      width: 600,
      marginLeft: 335 - 600,

    },
  });
};
const play = () => {
       var audio = document.getElementById("audio");
       audio.play();
                 };

class LayOut extends React.Component {

	render() {
    return (


  <Layout>
    <Header>

      <Menu
        mode="horizontal"
        defaultSelectedKeys={['5']}
        style={{ lineHeight: '64px' ,textAlign: 'center',justify:"space-around" }}
      >

        <Menu.Item key="1" className="MenuItem">ACES</Menu.Item>
        <Menu.Item key="2" className="MenuItem">Home</Menu.Item>
        <Menu.Item key="3" className="MenuItem">Events</Menu.Item>
        <Menu.Item key="4" className="MenuItem">Tracks</Menu.Item>
        <Menu.Item key="5" className="MenuItem">Gallery</Menu.Item>
      </Menu>
    </Header>
    <Layout>
    <Content style={{ padding: '100px 50px' }}>
    <div className="DIV">

      <img className="image" src="https://image.ibb.co/nwb4ZQ/logo.png"/>



      </div>
      <div className="Button">
      <ButtonGroup>
      <Button onClick={openNotification} onDoubleClick={play}>Sign Up</Button>
      <audio id="audio" src="http://dev.interactive-creation-works.net/1/1.ogg" ></audio>
      <Button onClick={openNotification}>Login</Button>
    </ButtonGroup>
    </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      <Row>
    <Col xs={{ span: 9, offset: 3 }} lg={{ span: 9, offset: 3 }}>Media Links: <br />

<Icon type="youtube" />
<Icon type="facebook" />
<Icon type="linkedin" />
<Icon type="twitter" />

    </Col>
    <Col xs={{ span: 9, offset: 3 }} lg={{ span: 9, offset: 3 }}>Sponsors: <br />

    <Icon type="linkedin" />

    </Col>
  </Row>
    </Footer>
  </Layout>
  </Layout>


 );
  }
}

export default LayOut;

