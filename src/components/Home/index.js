import React, { Fragment } from "react";
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import "bootstrap/dist/css/bootstrap.min.css";
import Supplier from "../Fornecedor/Supplier";

import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';


function Home() {
    return (
        <Fragment>
            <div style={{ margin: "10rem" }}>
                <Button> Lista de Empresas</Button>
                <Button><AddIcon /></Button>
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
                                            <Button> <InfoIcon size="sm" /></Button>
                                            <Button> <EditIcon size="sm" /></Button>
                                            <Button> <DeleteIcon size="sm" /></Button>


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

export default Home