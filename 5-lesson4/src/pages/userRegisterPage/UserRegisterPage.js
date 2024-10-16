import React from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import {useDispatch} from "react-redux";
import {addUserAction} from "../../Redux/actions";
import Spinner from 'react-bootstrap/Spinner';

const UserRegisterPage = () => {

    const [isLoading, setIsLoading] = React.useState(false);

    const dispatch = useDispatch();
    const [user, setUser] = React.useState({
        name: '',
        username: '',
        email:''
    });


    const formValue = (event) => {
        setUser({
            ...user,
            [event.target.name]:event.target.value

        });
    }

    const addUser = async (event) => {
        event.preventDefault();
        setIsLoading(true)

        try{
            await dispatch(addUserAction(user));


        }catch (error) {
            console.log(error)
        }finally {
            setIsLoading(false);
        }

    };


    console.log(user)



    return (

        <Container>
            <Form onSubmit={addUser}>
                <Row>
                    <Col lg={3}>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Control
                                type="text"
                                placeholder="name"
                                name="name"
                                onChange={formValue}
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={3}>
                        <Form.Group className="mb-3" controlId="username">
                            <Form.Control
                                type="text"
                                placeholder="username"
                                name="username"
                                onChange={formValue}
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={3}>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Control
                                type="text"
                                placeholder="email"
                                name="email"
                                onChange={formValue}
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={3}>
                        <Button type="submit" variant="success" className="w-100" disabled={isLoading}>
                            {isLoading ? (
                                <Spinner animation="border" size="sm" />
                            ) : (
                                'Register User'
                            )}
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}

export default UserRegisterPage;
