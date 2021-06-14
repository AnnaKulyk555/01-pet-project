import React from "react";
import {
    TextField,
    Button,
} from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import CancelIcon from "@material-ui/icons/Cancel";
import {useStylesTableEditForm} from "./TableEditForm-styles";
import { useHistory } from "react-router-dom";


const TableEditForm = () => {
    const classes = useStylesTableEditForm();
    const history = useHistory();

    const returnToDataTable = () => {
        let path = "/";
        history.push(path);
    }
    /*  const [name, setName] = React.useState('Cat in the Hat');
      const handleChange = (event) => {
          setName(event.target.value);
      };*/

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <div>
                <TextField
                    id="filled-name"
                    label="First Name"
                    value="Vitalii"
                    variant="filled"
                />
            </div>
            <div>
                <TextField
                    id="filled-name"
                    label="Surname"
                    value="Datsiuk"
                    variant="filled"
                />
            </div>
            <div>
                <TextField
                    id="filled-name"
                    label="Email"
                    type="email"
                    value="d@gmail.com"
                    variant="filled"
                />
            </div>
            <div>
                <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    className={classes.button}
                    startIcon={<SaveIcon/>}>
                    Save
                </Button>
            </div>
            <div>
                <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    className={classes.button}
                    startIcon={<CancelIcon/>}
                    onClick={returnToDataTable}>
                    Cancel
                </Button>
            </div>
        </form>
    );
}

export default TableEditForm;