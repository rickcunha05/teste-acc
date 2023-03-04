import React from "react";
import { Row, Col, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


function CreateSupplierPJ() {

    return (

        <Form controlId="formPJ" >
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="text" placeholder="Digite um nome" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control type="email" placeholder="Digite seu E-mail" />
                </Form.Group>
            </Row>
            <Row>
                <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
                    <Form.Label>CNPJ</Form.Label>
                    <Form.Control placeholder="Digite seu CNPJ" type="text" />
                </Form.Group>
                <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Seguimento</Form.Label>
                    <Form.Control placeholder="Digite o seguimento" type="text" />
                </Form.Group>
            </Row>

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
        </Form>
    )
}

export default CreateSupplierPJ;