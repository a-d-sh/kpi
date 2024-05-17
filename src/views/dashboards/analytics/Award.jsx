// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

const Award = () => {
  return (
    <Card>
      <CardContent className='flex flex-col gap-2 relative items-start'>
        <div>
          <Typography variant='h5'>Tabriklaymiz! 🎉</Typography>
          <Typography>To`plagan ballaringiz</Typography>
        </div>
        <div>
          <Typography variant='h4' color='primary'>
            0 BALL
          </Typography>
          <Typography>Marragacha 100%🚀</Typography>
        </div>
        {/* <Button size='small' variant='contained'>
          View Sales
        </Button> */}
        <img
          src='/images/pages/trophy.png'
          alt='trophy image'
          height={102}
          className='absolute inline-end-7 bottom-6'
        />
      </CardContent>
    </Card>
  )
}

export default Award
