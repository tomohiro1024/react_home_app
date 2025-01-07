import { Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import React from 'react'
import SouthIcon from '@mui/icons-material/South';
import NorthIcon from '@mui/icons-material/North';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const MonthlySummary = () => {
  return (
    <Grid container spacing={{xs: 1, sm: 2}} mb={2}>
      {/* 収入 */}
      <Grid item xs={4}>
        <Card sx={{bgcolor: 'orange', color: 'white', borderRadius: '10px'}}>
          <CardContent>
            <Stack direction={'row'}>
              <SouthIcon sx={{fontSize: '2rem'}}/>
              <Typography>収入</Typography>
            </Stack>
            <Typography textAlign={'right'} variant="h5" fontWeight={'700'} sx={{wordBreak: 'break-word'}}>￥1000</Typography>
          </CardContent>
        </Card>
      </Grid>
      {/* 支出 */}
      <Grid item xs={4}>
        <Card sx={{bgcolor: 'green', color: 'white', borderRadius: '10px'}}>
          <CardContent>
            <Stack direction={'row'}>
              <NorthIcon sx={{fontSize: '2rem'}}/>
              <Typography>支出</Typography>
            </Stack>
            <Typography textAlign={'right'} variant="h5" fontWeight={'700'} sx={{wordBreak: 'break-word'}}>￥1000</Typography>
          </CardContent>
        </Card>
      </Grid>
      {/* 残高 */}
      <Grid item xs={4}>
        <Card sx={{bgcolor: 'red', color: 'white', borderRadius: '10px'}}>
          <CardContent>
            <Stack direction={'row'}>
              <AttachMoneyIcon sx={{fontSize: '2rem'}}/>
              <Typography>残高</Typography>
            </Stack>
            <Typography textAlign={'right'} variant="h5" fontWeight={'700'} sx={{wordBreak: 'break-word'}}>￥1000</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default MonthlySummary
