import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// function createData(name, coverage, description, cost, _id) {
//   return { name, coverage, description, cost, _id };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export default function PlanTable( {planesSuscrip} ) {
    const planName = planesSuscrip.planName
    const coverage = planesSuscrip.coverage
    const description = planesSuscrip.description
    const cost = planesSuscrip.cost
    const _id = planesSuscrip._id

    console.log(planName)

    function createData(planName, coverage, description, cost, _id) {
        return { planName, coverage, description, cost, _id };
      }
      
      const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
      ];


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Plan</TableCell>
            <TableCell align="right">Coverage</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Cost</TableCell>
            <TableCell align="right">_id</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.coverage}</TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right">{row.cost}</TableCell>
              <TableCell align="right">{row._id}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
