import { Box } from '@mui/material'
import React from 'react'
import MonthlySummary from '../components/MonthlySummary'
import Calendar from '../components/Calendar'
import TransactionMenu from '../components/TransactionMenu'
import TransactionForm from '../components/TransactionForm'

const home = () => {
  return (
    <Box sx={{display: 'flex'}}>
      <Box sx={{flexGrow: 1}}>
        <MonthlySummary />
        <Calendar />
      </Box>
      <Box>
        <TransactionMenu />
        <TransactionForm />
      </Box>
    </Box>
  )
}

export default home