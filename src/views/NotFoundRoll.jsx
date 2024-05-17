'use client'

// Next Imports
import Link from 'next/link'

// MUI Imports
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

// Component Imports

// Hook Imports
import { useImageVariant } from '@core/hooks/useImageVariant'

const NotFoundRoll = () => {
  // Vars
  const darkImg = '/images/pages/misc-mask-dark.png'
  const lightImg = '/images/pages/misc-mask-light.png'

  // Hooks
  const miscBackground = useImageVariant(lightImg, darkImg)

  return (
    <div className='flex items-center justify-center min-bs-[100dvh] relative p-6 overflow-x-hidden'>
      <div className='flex items-center flex-col text-center gap-10'>
        <div className='flex flex-col gap-2 is-[90vw] sm:is-[unset]'>
          <Typography className='font-medium text-8xl' color='text.primary'>
            403
          </Typography>
          <Typography variant='h4'>Siz ma`lumotlar yuklash uchun rollarga ega emassiz ⚠️</Typography>
          <Typography variant='h4'>Iltimos admin tasdiqlashini kuting!</Typography>
        </div>
        <img
          alt='error-illustration'
          src='/images/illustrations/characters/9.png'
          className='object-cover bs-[300px] md:bs-[350px] lg:bs-[400px]'
        />
        <Button href='https://t.me/adsh97' component={Link} variant='contained'>
          Texnik qo`llab quvvatlash uchun murojaat qilish
        </Button>
      </div>
    </div>
  )
}

export default NotFoundRoll
