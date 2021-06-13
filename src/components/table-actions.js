import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import {Button} from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';



export const TableEditButton = () => {
    const useStyles = makeStyles((theme) => ({
        button: {
            margin: theme.spacing(1),
        },
    }));
    const classes = useStyles();
    const openEditForm = () => {
       alert("Do you want edit user data?")
    }
    return (
        <Button
            variant="contained"
            color="inherit"
            className={classes.button}
            startIcon={<EditIcon />}
            onClick={openEditForm}
        > Edit </Button>
    );
}