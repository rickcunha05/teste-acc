import React from 'react'
import { Button, Link } from 'react-bootstrap/esm/Button'
import { ButtonGroup } from './styles'

function globalStyles() {
    return (
        <ButtonGroup>
            <Link to="/fornecedor" style={{ textDecoration: "none" }}> <Button>Lista de Fornecedores </Button> </Link>
            <Link to="/empresa" style={{ textDecoration: "none" }}> <Button>Lista de Empresas </Button> </Link>
            <Link to="/" style={{ textDecoration: "none" }}> <Button>Home</Button> </Link>
        </ButtonGroup>
    )
}

export default globalStyles