import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";



function CreateCompany() {

    return (
        <Form>
            <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Nome Fantasia</Form.Label>
                <Form.Control type="text" placeholder="Digite um nome" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>CNPJ</Form.Label>
                <Form.Control type="text" placeholder="Digite seu CNPJ" />
            </Form.Group>


            <Row>
                <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
                    <Form.Label>CEP</Form.Label>
                    <Form.Control placeholder="Digite seu CEP" pattern="" type="text" />
                </Form.Group>
                <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Número</Form.Label>
                    <Form.Control placeholder="Digite o número" type="text" />
                </Form.Group>
            </Row>


            <Button variant="primary" type="submit">
                Cadastrar
            </Button>
        </Form>

    )
}

export default CreateCompany;