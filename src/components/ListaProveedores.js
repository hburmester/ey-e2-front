import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const ListaProveedores = () => {
  const [datosProveedores, setDatosProveedores] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/Proveedores", {mode: 'no-cors'})
      .then((response) => response.json())
      .then((data) => setDatosProveedores(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  console.log(datosProveedores);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Razón Social</TableCell>
            <TableCell>Nombre Comercial</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {datosProveedores.map((supplier) => (
            <TableRow key={supplier.id}>
              <TableCell>{supplier.razonSocial}</TableCell>
              <TableCell>{supplier.nombreComercial}</TableCell>
              <TableCell>
                <div>
                  <Link to={`/edit/${supplier.id}`}>Editar</Link>
                  <Link to={`/screening/${supplier.id}`}>Screening</Link>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ListaProveedores;
