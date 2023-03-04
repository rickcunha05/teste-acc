import React from 'react'
import { Container } from '../components/Fornecedor/styles';
import { ButtonGroup } from '../components/Generic/styles';
import { Link } from "react-router-dom";
import { Form, Button } from 'react-bootstrap';

function CreateCompany() {
    return (
        <Container >
            <ButtonGroup>
                <Link to="/" style={{ marginRight: "10px" }}> <Button>Home</Button> </Link>
                <Link to="/fornecedor" style={{ marginRight: "10px" }}> <Button> Lista de Fornecedores </Button> </Link>
                <Link to="/empresa" style={{ marginRight: "10px" }}> <Button> Lista de Empresas </Button> </Link>
            </ButtonGroup>
            <Form className="mb-3">
                <Form.Group controlId="formCnpj" className="mb-3">
                    <Form.Label>CNPJ</Form.Label>
                    <Form.Control type="text" placeholder="Insira o CNPJ" />
                </Form.Group>

                <Form.Group controlId="formNomeFantasia" className="mb-3">
                    <Form.Label>Nome Fantasia</Form.Label>
                    <Form.Control type="text" placeholder="Insira o Nome Fantasia" />
                </Form.Group>

                <Form.Group controlId="formCep" className="mb-3">
                    <Form.Label>CEP</Form.Label>
                    <Form.Control type="text" placeholder="Insira o CEP" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Cadastrar
                </Button>
            </Form>
        </Container>
    )
}

export default CreateCompany