'use client'

import { valibotResolver } from '@hookform/resolvers/valibot'
import { Button, Card, CardContent, CardHeader, Grid, styled, TextField, Typography } from '@mui/material'
import { useRef, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { minLength, object, string } from 'valibot'

const schema = object({
  title: string([minLength(1, 'This field is required'), minLength(3, 'Title must be at least 3 characters long')]),
  place: string([minLength(1, 'This field is required'), minLength(3, 'Title must be at least 3 characters long')]),
  datesuccess: string([
    minLength(9, 'This field is required'),
    minLength(10, 'Title must be at least 10 characters long')
  ])
})

const StyledFileOneInputContainer = styled('div')(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(1),
  aspectRatio: '4 / 1.3',
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

function Kpi151() {
  const [uploading, setUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [selectedFileone, setSelectedFileone] = useState(null)
  const fileoneInputRef = useRef(null)

  const {
    control,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: valibotResolver(schema),
    defaultValues: {
      title: '',
      place: '',
      datesuccess: ''
    }
  })

  const uploadFile = async () => {
    if (!selectedFileone) {
      toast.error('Please select a files.')
      return
    }

    setUploading(true)

    const formData = new FormData()
    formData.append('fileone', selectedFileone)
    formData.append('title', document.querySelector('#titleInput').value)
    formData.append('place', document.querySelector('#placeInput').value)
    formData.append('datesuccess', document.querySelector('#datesuccessInput').value)

    try {
      const response = await fetch('/api/kpi151', {
        method: 'POST',
        body: formData
      })

      if (!response.ok) throw new Error('Server error')

      const result = await response.json()

      toast.success('File uploaded successfully!')
      console.log(result)
      reset()
      setSelectedFileone(null)
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
        <Typography variant='h5'>1.5.1 / O‘quv va o‘quv-uslubiy ishlar /</Typography>
        <Typography variant='h6'>
          O‘quv jarayoniga amaliyotchi talabalarning jalb qilinganligi yoki sayyor dars mashg‘ulotlar o‘tkazilganligi,
          mustaqil ta’lim ishlari bilan shug‘ullanganligi
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Sohaga oid o‘tkazilgan “Masterklass” uchun 0.5 -ball' />
          <CardContent>
            <form onSubmit={handleSubmit(uploadFile)}>
              <Grid container spacing={6}>
                <Grid item xs={12} sm={6} md={6}>
                  <Controller
                    name='title'
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        id='titleInput'
                        label='“Master-klass” mavzusini kiriting'
                        placeholder='“Master-klass” mavzusi'
                        error={Boolean(errors.title)}
                        helperText={errors.title ? errors.title.message : ''}
                        sx={{ marginBottom: 3 }}
                      />
                    )}
                  />
                  <Controller
                    name='place'
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        id='placeInput'
                        label='“Master-klass” o‘tkazilgan joyni kiriting'
                        placeholder='“Master-klass” o‘tkazilgan joy'
                        error={Boolean(errors.place)}
                        helperText={errors.place ? errors.place.message : ''}
                        sx={{ marginBottom: 3 }}
                      />
                    )}
                  />
                  <Controller
                    name='datesuccess'
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        type='date'
                        fullWidth
                        id='datesuccessInput'
                        label='“Master-klass” o‘tkazilgan sana'
                        InputLabelProps={{
                          shrink: true
                        }}
                        error={Boolean(errors.datesuccess)}
                        helperText={errors.datesuccess ? errors.datesuccess.message : ''}
                        sx={{ marginBottom: 3 }}
                      />
                    )}
                  />
                </Grid>

                <Grid item xs={12} sm={6} md={6}>
                  <label>
                    <input type='file' hidden ref={fileoneInputRef} onChange={handleFileoneChange} />
                    <StyledFileOneInputContainer>
                      {selectedFileone ? (
                        <Typography variant='body1'>{selectedFileone.name}</Typography>
                      ) : (
                        <span>Tasdiqlovchi hujjat (yuklanadi)</span>
                      )}
                    </StyledFileOneInputContainer>
                  </label>
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
                  <Button variant='outlined' type='reset' onClick={reset}>
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

export default Kpi151
