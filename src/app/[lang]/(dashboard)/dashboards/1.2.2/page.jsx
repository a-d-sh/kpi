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
  author: string([minLength(1, 'This field is required'), minLength(3, 'Title must be at least 3 characters long')]),
  nomer: string([minLength(1, 'This field is required'), minLength(3, 'Title must be at least 3 characters long')]),
  datesuccess: string([
    minLength(9, 'This field is required'),
    minLength(10, 'Title must be at least 10 characters long')
  ])
})

const StyledFileOneInputContainer = styled('div')(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(1),
  aspectRatio: '4 / 1.7',
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

function Kpi122() {
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
      author: '',
      datesuccess: '',
      nomer: ''
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
    formData.append('author', document.querySelector('#authorInput').value)
    formData.append('datesuccess', document.querySelector('#datesuccessInput').value)
    formData.append('nomer', document.querySelector('#nomerInput').value)

    try {
      const response = await fetch('/api/kpi122', {
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
        <Typography variant='h5'>1.2.2 / O‘quv va o‘quv-uslubiy ishlar /</Typography>
        <Typography variant='h6'>Darslik chop etilganligi</Typography>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='4-5 bosma taboq uchun -4 ball' />
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
                        label='Darslik nomini kiriting'
                        placeholder='Darslik nomi'
                        error={Boolean(errors.title)}
                        helperText={errors.title ? errors.title.message : ''}
                        sx={{ marginBottom: 3 }}
                      />
                    )}
                  />
                  <Controller
                    name='nomer'
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        id='nomerInput'
                        label='Muvofiqlashtiruvchi kengash qarori nomerini kiriting'
                        placeholder='Muvofiqlashtiruvchi kengash qarori nomeri'
                        error={Boolean(errors.nomer)}
                        helperText={errors.nomer ? errors.nomer.message : ''}
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
                        label='Nashr sanasi'
                        InputLabelProps={{
                          shrink: true
                        }}
                        error={Boolean(errors.datesuccess)}
                        helperText={errors.datesuccess ? errors.datesuccess.message : ''}
                        sx={{ marginBottom: 3 }}
                      />
                    )}
                  />
                  <Controller
                    name='author'
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        id='authorInput'
                        label='Hammualliflar nomini kiriting'
                        placeholder='Hammualliflar nomi'
                        error={Boolean(errors.author)}
                        helperText={errors.author ? errors.author.message : ''}
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

export default Kpi122
