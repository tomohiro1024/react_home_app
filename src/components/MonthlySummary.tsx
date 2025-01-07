import { Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import React from 'react'
import SouthIcon from '@mui/icons-material/South';
import NorthIcon from '@mui/icons-material/North';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const MonthlySummary = () => {
  return (
    <Grid container>
      <Grid item>
        <Card sx={{bgcolor: 'blue', color: 'white', borderRadius: '10px'}}>
          <CardContent>
            <Stack direction={'row'}>
              <SouthIcon sx={{fontSize: '2rem'}}/>
              <Typography>収入</Typography>
            </Stack>
            <Typography textAlign={'right'} variant="h5" fontWeight={'700'} sx={{wordBreak: 'break-word'}}>￥1000</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default MonthlySummary
