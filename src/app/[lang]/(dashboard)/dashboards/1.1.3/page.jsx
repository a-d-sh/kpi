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

  datesuccess: string([
    minLength(9, 'This field is required'),
    minLength(10, 'Title must be at least 10 characters long')
  ])
})

const StyledFileInputContainer = styled('div')(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(1),
  aspectRatio: '4 / 2.9',
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

const StyledFileOneInputContainer = styled('div')(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(1),
  aspectRatio: '4 / 2.9',
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

function Kpi113() {
  const [uploading, setUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [selectedFile, setSelectedFile] = useState(null)
  const [selectedFileone, setSelectedFileone] = useState(null)
  const fileInputRef = useRef(null)
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
      link: ''
    }
  })

  const uploadFile = async () => {
    if (!selectedFile) {
      toast.error('Please select a file.')

      return
    }
    if (!selectedFileone) {
      toast.error('Please select a files.')
      return
    }

    setUploading(true)

    const formData = new FormData()
    formData.append('file', selectedFile)
    formData.append('fileone', selectedFileone)
    formData.append('title', document.querySelector('#titleInput').value)
    formData.append('author', document.querySelector('#authorInput').value)
    formData.append('datesuccess', document.querySelector('#datesuccessInput').value)
    formData.append('link', document.querySelector('#linkInput').value)

    try {
      const response = await fetch('/api/kpi113', {
        method: 'POST',
        body: formData
      })

      if (!response.ok) throw new Error('Server error')

      const result = await response.json()

      toast.success('File uploaded successfully!')
      console.log(result)
      reset()
      setSelectedFile(null)
      setSelectedFileone(null)
    } catch (error) {
      console.error('Error uploading:', error)
      toast.error('Upload failed.')
    } finally {
      setUploading(false)
      setUploadProgress(0)
    }
  }

  const handleFileChange = event => {
    const file = event.target.files[0]
    if (!file) return

    if (file.type !== 'application/pdf') {
      toast.error('Only PDF files are allowed!')
      return
    }

    if (file.size > 10485760) {
      toast.error('File size must not exceed 10MB!')
      return
    }

    setSelectedFile(file)
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
        <Typography variant='h5'>1.1.3 / O‘quv va o‘quv-uslubiy ishlar /</Typography>
        <Typography variant='h6'>
          Sifatli o‘quv kontentlari tayyorlanganligi va ularning muntazam yangilanib borilganligi
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Uchta va undan ortiq fan kontenti bir qismini tayyorlaganligi uchun – 4 ball' />
          <CardContent>
            <form onSubmit={handleSubmit(uploadFile)}>
              <Grid container spacing={6}>
                <Grid item xs={12} sm={6} md={3}>
                  <label>
                    <input type='file' hidden ref={fileInputRef} onChange={handleFileChange} />
                    <StyledFileInputContainer>
                      {selectedFile ? (
                        <Typography variant='body1'>{selectedFile.name}</Typography>
                      ) : (
                        <span>Tegishli kafedra mudiri tomonidan berilgan ma’lumot yoki bildirgi (yuklanadi)</span>
                      )}
                    </StyledFileInputContainer>
                  </label>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
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
                        label='Nomini va mavzusini kiriting'
                        placeholder='Kontent nomlanishi va mavzusi'
                        error={Boolean(errors.title)}
                        helperText={errors.title ? errors.title.message : ''}
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
                        label='Kontent tayyorlangan va yangilangan sanasi'
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
                    name='link'
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        id='linkInput'
                        label='Tasdiqlovchi hujjat havolasi (link)'
                        placeholder='Tasdiqlovchi hujjat havolasi (link)'
                        error={Boolean(errors.link)}
                        helperText={errors.link ? errors.link.message : ''}
                        sx={{ marginBottom: 3 }}
                      />
                    )}
                  />
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

export default Kpi113
