// MUI Imports
import Grid from '@mui/material/Grid'

// Components Imports
import Award from '@views/dashboards/analytics/Award'
import Transactions from '@views/dashboards/analytics/Transactions'

const DashboardAnalytics = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={4}>
        <Award />
      </Grid>
      <Grid item xs={12} md={8} lg={8}>
        <Transactions />
      </Grid>
      {/* <Grid item xs={12} md={6} lg={4}>
        <TotalEarning />
      </Grid>
      <Grid item xs={12} md={6} lg={8}>
        <Table />
      </Grid> */}
    </Grid>
  )
}

export default DashboardAnalytics
