import React, { useState } from "react";
import { List, ListItem, ListItemText, ListItemIcon, Box } from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import StarRateIcon from "@mui/icons-material/StarRate";
import SettingsIcon from "@mui/icons-material/Settings";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
// import LogoutIcon from '@mui/icons-material/Logout';

import "./Sidebar.css";

function Sidebar() {
  const [role, setRole] = useState(localStorage.getItem("role")); // Fetch the initial role directly

  const items = [
    {
      text: "Make a Reservation ",
      icon: <HomeIcon />,
      link: "/",
    },
    {
      text: "Current Reservations",
      icon: <SupportAgentIcon />,
      link: "/example/current-reservations",
    },
    {
      text: "Traveler Management",
      icon: <CardGiftcardIcon />,
      link: "/example/traveler-management",
    },
    {
      text: "Train Management",
      icon: <StarRateIcon />,
      link: "/example/train-management",
    },
    // Conditionally add User Management item if role equals '1'
    ...(role === "3"
      ? [
          {
            text: "User Management",
            icon: <SettingsIcon />,
            link: "/example/user-management",
          },
        ]
      : []),
    // { text: 'Sign Out', icon: <LogoutIcon />, link: '/example/sign-out' }
  ];

  return (
    <Box className="sidebar-root" sx={{ boxShadow: 3 }}>
      <List>
        {items.map(({ text, icon, link }) => (
          <Link
            to={link}
            key={text}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {" "}
            {/* Wrap ListItem in a Link component */}
            <ListItem button className="sidebar-item">
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );
}

export default Sidebar;
