import React, { useState, useEffect } from 'react';
import { Table, Row, Col, Space, Tooltip, Button } from 'antd';
import { EditFilled, DeleteFilled, PlusOutlined } from '@ant-design/icons';
import moment from 'moment';
import axios from 'axios';

function CardList (props) {



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

    const deleteCard = idCard => {
        axios.delete(`/https://api.pokemontcg.io/v1/cards?subtype=Basic/${idCard}`)
            .then(res => {
                alert(`Card con ID: ${idCard} borrada correctamente`);
                getCards();
            })
            .catch(err => {
                console.log(err);
            });
    };

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id'
        },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name'
        },
        {
          title: 'National Pokedex Number',
          dataIndex: 'nationalPokedexNumber',
          key: 'nationalPokedexNumber',
        },
  
        {
            title: 'url',
            dataIndex: 'imageUrl',
            key: 'imageUrl',
          },
          
        {
            title: 'Image URL Hires',
            dataIndex: 'imageUrlHiRes',
            key: 'imageUrlHiRes',
          },
        // {
        //   title: 'Proveedor',
        //   key: 'imageUrlHiRes',
        //   dataIndex: 'imageUrlHiRes',
        //   render: proveedor => (
        //     <>
        //       {proveedor && proveedor.nombre}
        //     </>
        //   ),
        // },
        {
          title: 'Actions',
          key: 'action',    
          render: (text, record) => (
            <Space size="middle">
                <Tooltip title="Edit">
                    <Button 
                        type="primary" 
                        shape="circle" 
                        onClick={() => props.history.push(`${props.match.url}/edit/${record.idCard}`)} 
                        icon={<EditFilled />} />
                </Tooltip>
                <Tooltip title="Delete">
                    <Button 
                        type="danger" 
                        shape="circle" 
                        onClick={() => deleteCard(record.idCard)} 
                        icon={<DeleteFilled />} />
                </Tooltip>
            </Space>
          ),
        }
    ];

    return (
        <div>
            <Row style={{ padding: 20 }}>
                <Col span={22}></Col>
                <Col span={2}>
                <Tooltip title="New">
                    <Button 
                        type="primary" 
                        shape="round" 
                        onClick={() => props.history.push(`${props.match.url}/new`)}
                        icon={<PlusOutlined />}>New Card</Button>
                </Tooltip>
                </Col>
            </Row>
            <Table pagination={{ defaultCurrent:1, pageSize: 5, total:cards.length }} columns={columns} dataSource={cards} />
        </div>
    )
}

export default CardList;