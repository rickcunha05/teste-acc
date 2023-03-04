import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CreateSupplierPF from '../components/Fornecedor/CreateSupplierPF';
import CreateSupplierPJ from '../components/Fornecedor/CreateSupplierPJ';
import { Container } from '../components/Fornecedor/styles';
import { Link } from "react-router-dom";
import { ButtonGroup } from '../components/Generic/styles';


function CreateSupplier() {
    const [tipoPessoa, setTipoPessoa] = useState('default')
    return (

        <Container>
            <ButtonGroup>
                <Link to="/" style={{ marginRight: "10px" }}> <Button>Home</Button> </Link>
                <Link to="/fornecedor" style={{ marginRight: "10px" }}> <Button>Lista de Fornecedores </Button> </Link>
                <Link to="/empresa" style={{ marginRight: "10px" }}> <Button>Lista de Empresas </Button> </Link>
            </ButtonGroup>
            <Form className="mb-3">
                <Form.Group controlId="formBasicSelect" className="mb-3">
                    <Form.Label>Tipo de cadastro</Form.Label>
                    <Col sm={7}>
                        <Form.Control
                            as="select"
                            value={tipoPessoa}
                            onChange={(e) => setTipoPessoa(e.target.value)}
                        >
                            <option value="default"> Selecione o tipo de cadastro...</option>
                            <option value="formPJ">Pessoa Jurídica</option>
                            <option value="formPF">Pessoa Física</option>
                        </Form.Control>
                    </Col>
                </Form.Group>
                {
                    tipoPessoa === 'formPJ' ?
                        (
                            <CreateSupplierPJ />
                        ) :
                        (

                            <CreateSupplierPF />
                        )
                }
                <Button variant="primary" type="submit">
                    Cadastrar
                </Button>
            </Form>
        </Container>
    )
}

export default CreateSupplier