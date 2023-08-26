import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { SvgIcon } from '@mui/material';

export const items = [
  {
    title: 'Home',
    path: '/',
    icon: (
      <SvgIcon fontSize="small">
        <HomeIcon />
      </SvgIcon>
    )
  },
  
  // {
  //   title: 'Companies',
  //   path: '/companies',
  //   icon: (
  //     <SvgIcon fontSize="small">
  //       <ShoppingBagIcon />
  //     </SvgIcon>
  //   )
  // },
  {
    title: 'Account',
    path: '/account',
    icon: (
      <SvgIcon fontSize="small">
        <PersonIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Products',
    path: '/products',
    icon: (
      <SvgIcon fontSize="small">
        <ShoppingBagIcon />
      </SvgIcon>
    )
  },
  // {
  //   title: 'Settings',
  //   path: '/settings',
  //   icon: (
  //     <SvgIcon fontSize="small">
  //       <CogIcon />
  //     </SvgIcon>
  //   )
  // },
  // {
  //   title: 'Login',
  //   path: '/auth/login',
  //   icon: (
  //     <SvgIcon fontSize="small">
  //       <LockClosedIcon />
  //     </SvgIcon>
  //   )
  // },
  // {
  //   title: 'Register',
  //   path: '/auth/register',
  //   icon: (
  //     <SvgIcon fontSize="small">
  //       <UserPlusIcon />
  //     </SvgIcon>
  //   )
  // },
  // {
  //   title: 'Error',
  //   path: '/404',
  //   icon: (
  //     <SvgIcon fontSize="small">
  //       <XCircleIcon />
  //     </SvgIcon>
  //   )
  // }
];
