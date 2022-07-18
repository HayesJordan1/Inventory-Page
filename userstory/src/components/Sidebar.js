import React, { useState, useEffect } from "react";
import "../App.css";
import {Paper, Button} from "@mui/material";


//import { height } from "@mui/system";
import InventoryGrid from "./InventoryGrid";
import showMessage from "./InventoryGrid";
import "../App.css"

const paperStyle={
    backgroundColor: "white",
    //padding: "5px",
    height: "70vh",
    width: 200,
    margin: "20px auto",
}

const btnstyle={
    backgroundColor: "#dde5ea",
    height: "100px",
    width: "200px"
}




function Sidebar(){
    const [showMessage, setShowMessage] = useState(true);
    return(
        
        <Paper style={paperStyle}>
        <div className="Sidebar">
           
            <Button style={btnstyle} 
            className="Button1"
            //onClick={() => setShowMessage(!showMessage)}
            >
                Food
            </Button>



            <Button style={btnstyle} className="Button2">
                Household Items
            </Button>


        </div>
        </Paper>
    )
    
}



export default Sidebar;