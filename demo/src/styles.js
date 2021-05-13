import { lightBlue } from "@material-ui/core/colors";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme)=>({
    container: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8,0,6)
    },
    icon: {
        marginRight: '40px',
    },
    btn: {
        marginTop: '40px',
    },
    card:{
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    cardMedia:{
        paddingTop: '56.25%' //16:9
    },
    CardContent:{
        flexGrow: 1,

    },
    CardGrid: {
      padding: '20px 0'  
    },
    footer:{
       backgroundColor: theme.palette.background.paper,
        padding: "50px 0",
    },

}) );

export default useStyles;