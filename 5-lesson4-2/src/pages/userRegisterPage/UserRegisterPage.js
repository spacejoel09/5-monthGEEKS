import React from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap';

const UserRegisterPage = () => {

    const [user, setUser] = React.useState({
        name: '',
        username: '',
        email:''
    });


    return (
        <Container>
            <Form>
                <Row>
                    <Col lg={3}>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Control
                                type="text"
                                placeholder="name"
                                name="name"
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={3}>
                        <Form.Group className="mb-3" controlId="username">
                            <Form.Control
                                type="text"
                                placeholder="username"
                                name="username"
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={3}>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Control
                                type="text"
                                placeholder="email"
                                name="email"
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={3}>
                        <Button  type="submit" variant="success" className="w-100">
                            register user
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}

export default UserRegisterPage;
