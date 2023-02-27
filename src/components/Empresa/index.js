import React, { Fragment } from "react";
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import "bootstrap/dist/css/bootstrap.min.css";
import Companies from "../Empresa/Companies";

import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';
import { Link } from "react-router-dom";

function Empresa() {
    return (
        <Fragment>
            <div style={{ margin: "10rem" }}>
                <Link to="/fornecedor" style={{ textDecoration: "none" }}> <Button>Lista de Fornecedores </Button> </Link>
                <Button> <AddIcon /> </Button>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Nome Fantasia</th>
                            <th>CNPJ</th>
                            <th>CEP</th>
                            <th>Opções</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Companies && Companies.length > 0 ? Companies.map((item) => {
                                return (
                                    <tr key={item.id}>
                                        <td>
                                            {item.nomeFantasia}
                                        </td>
                                        <td>
                                            {item.CNPJ}
                                        </td>
                                        <td>
                                            {item.CEP}
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
                                "Sem empresas disponíveis "

                        }
                    </tbody>
                </Table>
            </div>
        </Fragment>
    )
}

export default Empresa