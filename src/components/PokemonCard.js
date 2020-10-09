import React, { useState, useEffect } from 'react';
//import React from 'react';
import "antd/dist/antd.css";
import axios from 'axios';

import { ShoppingCartOutlined } from '@ant-design/icons';
import {Button, Layout, Row, Col, Card, Image, Pagination, Space } from 'antd';

const { Content } = Layout;



function PokemonCard(props) {

    const [cards, setCards] = useState([]);

    const getCards = () => {
        axios.get('https://api.pokemontcg.io/v1/cards?subtype=Basic')
            .then(res => {
                setCards(res.data.cards);
            })
            .catch(err => {
                console.log(err);
            });
    }

    useEffect(() => {
        getCards();
    }, [])
    return (
        <Content>
            <Row>
                {cards.map(card => {
                    return (
                        <Col span={6}>
                            <Space direction="vertical">
                            <Card title={card.name} bordered={true}>
                                <Image width src={card.imageUrl} />
                                <br />
                                <a href="url" >Ver detalles del Pokemon</a>
                                <br></br>
           
                            </Card>
                            </Space>
                        </Col>
                    )
                })}
            </Row>
            <Row>

                <br /> <br />
            </Row>
            </Content>
            )
}

export default PokemonCard;