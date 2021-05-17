import React from 'react';
import { List, ListItemText, ListItemIcon, ListItem } from '@material-ui/core';

const LeftDrawer = ({ actions, utils }) => {
  return (
    <>
      <List>
        {actions &&
          actions.map((action, index) => (
            <ListItem
              button
              key={index}
              onClick={() => {
                action.handler(action.name);
              }}
            >
              <ListItemIcon>{action.icon}</ListItemIcon>
              <ListItemText primary={action.title} />
            </ListItem>
          ))}
      </List>
    </>
  );
};
export default LeftDrawer;