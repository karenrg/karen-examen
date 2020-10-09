// import React from 'react'
import './App.css';
import { Space, Layout, Menu, Breadcrumb, Card, Col, Row, Image, Button, Input } from 'antd';
import "antd/dist/antd.css";
import PokemonCard from './components/PokemonCard';
import About from './components/About';

import PokemonList from './components/PokemonList';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { InstagramOutlined, FacebookOutlined, MailOutlined, TwitterOutlined } from '@ant-design/icons';
 import React, { useState, useEffect } from 'react';
import axios from 'axios';

const { Meta } = Card;
const { TextArea } = Input;

const { Header, Content, Footer } = Layout;


function AppMenu() {
  const [current, setCurrent] = useState()
  return (
    // Definicion del menu principal
    <Menu onClick={(value) => setCurrent(value)} selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="Principal" >
        <Link to="/">Cards</Link>
      </Menu.Item>
      <Menu.Item key="cards" >
        <Link to="/cards">Pokemones</Link>
      </Menu.Item>
      <Menu.Item key="about" >
        <Link to="/about">About</Link>
      </Menu.Item>
    </Menu>
  );
}
function CardsRoutes({ match }) {
  return (
    <>
      {/* <Route exact path={`${match.path}/new`} component={ProductoForm} />
      <Route
        exact
        path={`${match.path}/edit/:productoId`}
        component={ProductoForm}
      /> */}
      <Route exact path={`${match.path}/`} component={PokemonCard} />
    </>
  );
}
function App() {

    return (
      <Router>  
    <Layout>
      <Header style={{ background: 'beige' }}>
        <div className="logo" />
        <div class="logoBlog">
          <img src="https://images.wikidexcdn.net/mwuploads/esssbwiki/thumb/7/77/latest/20111028181540/TituloUniversoPok%C3%A9mon.png/550px-TituloUniversoPok%C3%A9mon.pnghttps://i.pinimg.com/564x/2a/a3/19/2aa31916294f3350372c6286b3e0a7c6.jpg" width={140} />
        </div>
 
      </Header>
      <br></br><br></br><br></br>
      <Content style={{ padding: '0 50px', background: 'beige' }}>

        <Breadcrumb style={{ margin: '16px 0' }}>

          <br></br><br></br><br></br>
          <Breadcrumb.Item>Cards de Pokemon</Breadcrumb.Item>
          <Breadcrumb.Item>Lista de Pokemon</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">
          <AppMenu />
          <br />
          {/* Secccion donde se van a mostrar los diferentes componentes que rendericemos */}
          <>
            <Route path="/" exact component={PokemonCard} />
            <Route path="/about" component={About} />
            <Route path="/catalogo" component={PokemonList} />
            <Route path="/cards" component={PokemonList} />


          </>
        </div>
     



        <br></br><br></br><br></br>
       





      </Content>

      <Footer style={{ background: 'beige' }}>
        <Row>
          <Col span={12}>
            <div id="test6">
              <FacebookOutlined /> Pokemon fans
                <br></br>
              <InstagramOutlined /> @lovepokemon_

                        </div>
          </Col>
          <Col span={12}>
            <div id="test7">
              <TwitterOutlined /> lovepokemon_
                 <br></br>
              <MailOutlined />pokemonlovers@gmail.com
                 </div>
          </Col>
        </Row>

        <br></br>
      </Footer>
    </Layout>
  </Router>

  )

}


export default App;