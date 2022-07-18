import { Button, Popover, Typography } from "@mui/material";
import { useState } from "react";
function Notification() {
    const [anchor, setAnchor] = useState(null);
    const openPopover = (event) => {
        setAnchor(event.currentTarget);
    }
return(
<div>
    <Button
    variant='contained'
    color='secondary'
    onClick={openPopover}
    style={{marginLeft: 80}}
    >
        Notifications
    <Popover
    open={Boolean(anchor)}
    anchorEl={anchor}
    anchorOrigin={{
        vertical: 'center',
        horizontal: 'right',
    }}
    transformOrigin={{
        vertical: 'center',
        horizontal: 'left',
    }}
    onClose={() => setAnchor(null)}
    >
<Typography variant='h6'>
    <h2>Notifications</h2>
    <p> <font color="grey"> _______________</font></p>
    <h3> <font color="red">WARNING</font> </h3>
    <p> <font color="grey"> _______________</font></p>
    <p>Low On Chicken</p>
    <p> Low on Tajin</p>
    <p> NO SALT LEFT</p>

 </Typography>
    </Popover>
    </Button>
</div>
)
}
export default Notification