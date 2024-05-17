'use client'

import { valibotResolver } from '@hookform/resolvers/valibot'
import { Button, Card, CardContent, CardHeader, Grid, styled, Typography } from '@mui/material'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { object } from 'valibot'

const schema = object({
  // Fayl string emasligini inobatga olib validatsiyani olib tashlaymiz
})

const StyledFileOneInputContainer = styled('div')(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(1),
  aspectRatio: '4 / 1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '2px dashed',
  cursor: 'pointer',
  borderRadius: theme.shape.borderRadius,
  [theme.breakpoints.down('sm')]: {
    aspectRatio: '16 / 9'
  }
}))

function Kpi411() {
  const [uploading, setUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [selectedFileone, setSelectedFileone] = useState(null)
  const fileoneInputRef = useRef(null)

  const {
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: valibotResolver(schema),
    defaultValues: {
      fileone: ''
    }
  })

  const uploadFile = async () => {
    console.log('uploadFile function called') // Konsolda ko'rish uchun
    if (!selectedFileone) {
      toast.error('Please select a file.')
      return
    }

    setUploading(true)

    const formData = new FormData()
    formData.append('fileone', selectedFileone)

    try {
      const response = await fetch('/api/kpi411', {
        method: 'POST',
        body: formData
      })

      if (!response.ok) throw new Error('Server error')

      const result = await response.json()

      toast.success('File uploaded successfully!')
      console.log(result)
      reset()
      setSelectedFileone(null)
      fileoneInputRef.current.value = null // Fayl maydonini tozalash
    } catch (error) {
      console.error('Error uploading:', error)
      toast.error('Upload failed.')
    } finally {
      setUploading(false)
      setUploadProgress(0)
    }
  }

  const handleFileoneChange = eventone => {
    const fileone = eventone.target.files[0]

    if (!fileone) return

    if (fileone.type !== 'application/pdf') {
      toast.error('Only PDF files are allowed!')
      return
    }

    if (fileone.size > 10485760) {
      toast.error('File size must not exceed 10MB!')
      return
    }

    setSelectedFileone(fileone)
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant='h5'>
          4.1.1 / Ma‘naviy-ma‘rifiy ishlar hamda mehnat va ijro intizomiga rioya etish/
        </Typography>
        <Typography variant='h6'>
          Talabalarning o‘qishdan tashqari vaqtlarini mazmunli o‘tkazish (to‘garak, ilmiy maktab va klublarni samarali
          yuritganligi, nufuzli tanlovlar yoki sport musobaqalarida faol ishtirok etganligi)
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Professor-o‘qituvchi tomonidan to‘garak yoki klub tashkil qilish: 0-3 ball' />
          <CardContent>
            <form onSubmit={handleSubmit(uploadFile)}>
              <Grid container spacing={6}>
                <Grid item xs={12} sm={12} md={12}>
                  <input type='file' hidden ref={fileoneInputRef} onChange={handleFileoneChange} />
                  <StyledFileOneInputContainer onClick={() => fileoneInputRef.current.click()}>
                    {selectedFileone ? (
                      <Typography variant='body1'>{selectedFileone.name}</Typography>
                    ) : (
                      <span>Taqdim etiladigan hujjat pdf shaklda</span>
                    )}
                  </StyledFileOneInputContainer>
                </Grid>

                <Grid item xs={12} className='flex gap-4'>
                  <Button
                    variant='contained'
                    type='submit'
                    disabled={uploading}
                    style={{ opacity: uploading ? '.5' : '1' }}
                  >
                    {uploading ? `${uploadProgress}% Yuklanmoqda` : 'Yuborish'}
                  </Button>
                  <Button
                    variant='outlined'
                    type='button'
                    onClick={() => {
                      reset()
                      setSelectedFileone(null)
                      fileoneInputRef.current.value = null
                    }}
                  >
                    Tozalash
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Kpi411
