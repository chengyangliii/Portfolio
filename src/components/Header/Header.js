import React from 'react';
import { 
    AppBar, 
    Container, 
    Typography
} from '@material-ui/core';
import {
    styled
} from "@material-ui/core/styles";

const Header = styled(AppBar)({
    padding: '16px 0',
    background: 'transparent',
})

const MyContainer = styled(Container)({
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    justifyContent: 'space-between',
})

export default function HeaderBar() {
  return (
    <>
    
        <Header className='headerBar'>
            <MyContainer maxWidth='lg' className='header-container' color='secondary'>
                <Typography variant='h4' color='primary' >
                    Chengyang Li
                </Typography>
            </MyContainer>
        </Header>
   
    </>   
  );
}
