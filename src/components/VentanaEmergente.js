import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

const VentanaEmergente = () => {
  // Replace screeningResults with your actual screening results data
  const ventanaEmergente = [];

  return (
    <Dialog open={true} onClose={() => {}}>
      <DialogTitle>Resultados del Screening</DialogTitle>
      <DialogContent>
        <table>
          <thead>
            <tr>
              <th>Proveedor</th>
              <th>Resultado</th>
            </tr>
          </thead>
          <tbody>
            {ventanaEmergente.map((result, index) => (
              <tr key={index}>
                <td>{result.proveedor}</td>
                <td>{result.resultado}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => {}} color="primary">
          Cerrar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default VentanaEmergente;
