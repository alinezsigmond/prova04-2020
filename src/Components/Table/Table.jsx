import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    width: 700,
    backgroundColor: '#151515',
    margin: 'auto',
  },
  cell: {
    color: '#FFF',
  },
});

function createData(id, year, album) {
  return { id, year, album };
}

const rows = [
  createData(1, 2015, 'First Comes the Night'),
  createData(2, 2009, 'Mr. Lucky'),
];

export default function DenseTable() {
  const classes = useStyles();

  return (
    <Table className={classes.table} size="medium">
    <TableHead>
        <TableRow>
        <TableCell className={classes.cell} >Year</TableCell>
        <TableCell className={classes.cell} align="right">Album</TableCell>
        </TableRow>
    </TableHead>
    <TableBody>
        {rows.map((row) => (
        <TableRow key={row.id}>
            <TableCell className={classes.cell} component="th" scope="row">
            {row.year}
            </TableCell>
            <TableCell className={classes.cell} align="right">{row.album}</TableCell>
        </TableRow>
        ))}
    </TableBody>
    </Table>
  );
}