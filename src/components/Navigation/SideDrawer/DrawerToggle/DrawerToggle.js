import React from 'react';
import styles from './DrawerToggle.module.css';

const drawerToggle = props => (
  <div onClick={props.clicked}>MENU</div>
);

export default drawerToggle;