// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import { Avatar, Card, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import React from "react";

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
    // Contact berisi foto, nama, telepon, dan email
    return (
        <>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={data.photo} sx={{ width: 80, height: 80 }} />
                </ListItemAvatar>
                <ListItemText
                    primary={data.name}
                    secondary={
                        <React.Fragment>
                            <Typography sx={{ display: "block" }} component="span" variant="body2" color="text.primary">
                                {"Phone: " + data.phone}
                            </Typography>
                            <Typography sx={{ display: "block" }} component="span" variant="body2" color="text.primary">
                                {"Email: " + data.email}
                            </Typography>
                        </React.Fragment>
                    }
                    sx={{ marginLeft: 2 }}
                />
            </ListItem>
            <Divider variant="inset" component="li" />
        </>
    );
};

export default Contact;