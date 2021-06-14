import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper, Typography
} from '@material-ui/core';
import {TableEditButton} from "./table-actions";
import {useStylesDataTable} from "./userDataTable-styles";


const UsersDataTable = (props) => {
    const classes = useStylesDataTable();
    return (
        <TableContainer component={Paper} className={classes.tableContainer}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead >
                    <TableRow>
                        <TableCell align="right" className={classes.tableHead}>ID</TableCell>
                        <TableCell align="left" className={classes.tableHead}> Name </TableCell>
                        <TableCell align="left" className={classes.tableHead}> Email </TableCell>
                        <TableCell align="right" className={classes.tableHead}> Actions </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.state.tableData.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell align="right">{row.id}</TableCell>
                            <TableCell align="left">
                                <Typography className={classes.name}> {row.lastName + " " + row.firstName}</Typography>
                               </TableCell>
                            <TableCell align="left">
                                <Typography color="textSecondary" variant="body2">{row.email}</Typography>
                                </TableCell>
                            <TableCell align="right">
                                <TableEditButton/>
                        </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default UsersDataTable;