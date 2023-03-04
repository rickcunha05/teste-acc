import React, { Fragment } from "react";
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import "bootstrap/dist/css/bootstrap.min.css";
import Supplier from "../Fornecedor/Supplier";

import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';
import { Link } from "react-router-dom";
import { ButtonGroup } from "../Generic/styles";

function Fornecedor() {
    return (
        <Fragment>
            <div style={{ margin: "10rem" }}>
                <ButtonGroup>
                    <Link to="/empresa" style={{ textDecoration: "none" }}> <Button>Lista de empresas </Button> </Link>
                    <Link to="/createsupplier" style={{ textDecoration: "none" }}> <Button><AddIcon /> Criar um novo Fornecedor</Button> </Link>
                </ButtonGroup>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>CNPJ</th>
                            <th>CEP</th>
                            <th>E-mail</th>
                            <th>Nome</th>
                            <th>Seguimento</th>
                            <th>Opções</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Supplier && Supplier.length > 0 ? Supplier.map((item) => {
                                return (
                                    <tr key={item.id}>
                                        <td>
                                            {item.CNPJ}
                                        </td>
                                        <td>
                                            {item.CEP}
                                        </td>
                                        <td>
                                            {item.Email}
                                        </td>
                                        <td>
                                            {item.Nome}
                                        </td>
                                        <td>
                                            {item.seguimento}
                                        </td>
                                        <td>
                                            <Button onClick={() => alert(item.id)}> <InfoIcon size="sm" /></Button>
                                            <Button onClick={() => alert(item.id)}> <EditIcon size="sm" /></Button>
                                            <Button onClick={() => alert(item.id)}> <DeleteIcon size="sm" /></Button>
                                        </td>
                                    </tr>
                                )
                            })
                                :
                                "Sem fornecedores disponíveis "

                        }
                    </tbody>
                </Table>
            </div>
        </Fragment>
    )
}

export default Fornecedor