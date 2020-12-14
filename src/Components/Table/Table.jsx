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
    backgroundColor: 'rgba(20, 20, 20, 0.7)',
    margin: 'auto',
  },
  cell: {
    color: '#FFF',
  },
});

export default function DenseTable( {albums} ) {
  const classes = useStyles();

  return (
    <Table className={classes.table} size="medium">
    <TableHead>
        <TableRow>
        <TableCell className={classes.cell}> <strong>Album</strong></TableCell>
        <TableCell className={classes.cell} align="right"><strong>Year</strong></TableCell>
        </TableRow>
    </TableHead>
    <TableBody>
      {albums.map((row) => (
      <TableRow key={row.id}>
          <TableCell className={classes.cell} component="th" scope="row">
          {row.Album}
          </TableCell>
          <TableCell className={classes.cell} align="right">{row.Year}</TableCell>
      </TableRow>
      ))}
    </TableBody>
    </Table>
  );
}