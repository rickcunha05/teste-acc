import React, { Fragment } from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Companies from "../Empresa/Companies";

import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';
import { Link, useNavigate } from "react-router-dom";
import { ButtonGroup } from "../Generic/styles";


function Empresa() {

    let history = useNavigate();
    const handleDelete = (id) => {
        var index = Companies.map(function (e) {
            return e.id
        }).indexOf(id);

        Companies.splice(index, 1);

        history('/empresa')
    }
    return (
        <Fragment>
            <div style={{ margin: "10rem" }}>
                <ButtonGroup >
                    <Link to="/fornecedor" style={{ textDecoration: "none" }}> <Button>Lista de Fornecedores </Button> </Link>
                    <Link to="/criarempresa" style={{ textDecoration: "none" }}>  <Button> <AddIcon />Criar uma Nova Empresa</Button> </Link>
                </ButtonGroup>
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
                                            <Link> <Button onClick={() => alert(item.id)}> <EditIcon size="sm" /></Button></Link>
                                            <Button onClick={() => handleDelete(item.id)}> <DeleteIcon size="sm" /></Button>


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