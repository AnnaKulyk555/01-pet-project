import React from "react";
import {Button} from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import { useHistory } from 'react-router-dom';
import {useStylesTableActions} from "./tableActions-styles";



export const TableEditButton = () => {
    const classes = useStylesTableActions();
    const history = useHistory();

    const openEditForm = () => {
        let path = `editForm`;
        history.push(path);
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