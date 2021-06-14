import {makeStyles} from "@material-ui/core";

export const useStylesDataTable = makeStyles((theme) => ({
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