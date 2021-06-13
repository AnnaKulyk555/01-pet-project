import React from "react";
import {
    makeStyles,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper, Typography
} from '@material-ui/core';
import {TableEditButton} from "./table-actions";

let state = {
    tableData: [
        {id: 1, lastName: "Datsiuk", firstName: "Vitalii", email: "v@gmail.com"},
        {id: 2, lastName: "Snow", firstName: "Jon", email: "J@gmail.com"},
        {id: 3, lastName: "Stark", firstName: "Arya", email: "arya@gmail.com"},
        {id: 4, lastName: "Lannister", firstName: "Jeime", email: "la@gmail.com"},
        {id: 5, lastName: "Targaryen", firstName: "Daenerys", email: "dhn@gmail.com"},
    ]
}
const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 900,
    },
    tableContainer: {
        borderRadius: 15,
        margin: "10px 10px",
        maxWidth: 950,
    },
    tableHead: {
        backgroundColor: theme.palette.primary.dark,
        fontWeight: "bold",
        color: theme.palette.getContrastText(theme.palette.primary.dark)
    },
    name: {
        fontWeight: "bold",
        color: theme.palette.secondary.dark
    }
}));

const UsersDataTable = () => {
    const classes = useStyles();

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
                    {state.tableData.map((row) => (
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