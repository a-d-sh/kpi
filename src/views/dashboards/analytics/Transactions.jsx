//MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// Components Imports
import CustomAvatar from '@core/components/mui/Avatar'

// Vars
const data = [
  {
    stats: '0',
    title: 'Kutilmoqda',
    color: 'primary',
    icon: 'ri-edit-circle-line'
  },
  {
    stats: '0',
    title: 'Tasdiqlandi',
    color: 'success',
    icon: 'ri-checkbox-circle-line'
  },
  {
    stats: '0',
    color: 'warning',
    title: 'Rad etildi',
    icon: 'ri-close-circle-line'
  },
  {
    stats: '0',
    color: 'info',
    title: 'Foyda',
    icon: 'ri-money-dollar-circle-line'
  }
]

const Transactions = () => {
  return (
    <Card className='bs-full'>
      <CardHeader
        title='Yuklangan ma`lumotlar haqida'
        // subheader={
        //   <p className='mbs-3'>
        //     <span className='font-medium text-textPrimary'>Yuklangan ma'lumotlar soni</span>
        //     <span className='text-textSecondary'>this month</span>
        //   </p>
        // }
      />
      <CardContent className='!pbs-5'>
        <Grid container spacing={2}>
          {data.map((item, index) => (
            <Grid item xs={6} md={3} key={index}>
              <div className='flex items-center gap-3'>
                <CustomAvatar variant='rounded' color={item.color} className='shadow-xs'>
                  <i className={item.icon}></i>
                </CustomAvatar>
                <div>
                  <Typography>{item.title}</Typography>
                  <Typography variant='h5'>{item.stats}</Typography>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  )
}

export default Transactions
