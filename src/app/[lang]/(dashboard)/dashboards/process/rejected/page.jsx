import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material'

const Rejected = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sx={{ paddingBottom: 4 }}>
        <Typography variant='h5'>Rad etilgan</Typography>
        <Grid item xs={12} md={12}>
          <Card>
            <CardHeader title='Sizda hali rad etilgan ma`lumot mavjud emas!' />
            <CardContent></CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Rejected
