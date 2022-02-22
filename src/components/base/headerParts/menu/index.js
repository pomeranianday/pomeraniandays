import * as React from 'react';
import IconButton from '@mui/material/IconButton';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
// import { NavLink } from 'react-router-dom'
import routeModels from '../../../../routes'
import MyNavLink from '../../../common/my-nav-link'

const ITEM_HEIGHT = 48;

export default function NavMenu() {
  const [visible, setVisible] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setVisible(open);
  }

  const list = () => (
    <Box
      sx={{ width: 'auto' }}
      role="presentation"
      onClick={toggleDrawer()}
      onKeyDown={toggleDrawer()}
    >
      <List>
        {
          routeModels.map(routeModel => (
            <ListItem button key = { routeModel.path }>
              <ListItemText
                primary={
                  <MyNavLink
                    to={ routeModel.path }
                    text={routeModel.text}>
                    {routeModel.text}
                  </MyNavLink>
                } />
            </ListItem>
          ))
        }
      </List>
    </Box>
  )

 return (
   <React.Fragment >
     <IconButton
       onClick={toggleDrawer(true)}
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
            
          
            
          </IconButton>
   
          <Drawer
            anchor='anchor'
            open={visible}
            onClose={toggleDrawer(false)}
          >
            {list()}
          </Drawer>
          </React.Fragment>
   
  );
}
