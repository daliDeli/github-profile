import React from 'react';
import { Badge, Container, Row, Col } from 'reactstrap';

export const Repositories = props => {

    return (
        <Container>
            <Row>
                <Col xs='12'>
                    <h2>Users Repos</h2>
                </Col>
            </Row>
            <Row>
                <Col xs='12'>
                    {props.reposData.map(repo => <Badge key={repo.id} href={repo.htmlUrl} target='_blank' color="info"><h3>{repo.name}</h3></Badge>)}
                </Col>
            </Row>
        </Container>
    )
};