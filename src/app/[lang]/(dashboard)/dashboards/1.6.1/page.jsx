'use client'

import { valibotResolver } from '@hookform/resolvers/valibot'
import { Button, Card, CardContent, CardHeader, Grid, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { minLength, object, string } from 'valibot'
// test
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import OutlinedInput from '@mui/material/OutlinedInput'
import Select from '@mui/material/Select'
import { useTheme } from '@mui/material/styles'
import * as React from 'react'

const schema = object({
  type: string([minLength(1, 'This field is required')]),
  number: string([minLength(1, 'This field is required')]),
  level: string([minLength(1, 'This field is required')]),
  dateissue: string([
    minLength(9, 'This field is required'),
    minLength(10, 'Title must be at least 10 characters long')
  ]),
  dateperiod: string([
    minLength(9, 'This field is required'),
    minLength(10, 'Title must be at least 10 characters long')
  ])
})

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
}

const levels = [`C1`, `C2`]
const types = [`Mahalliy`, `Xorijiy`]

function getStyles(level, levelInput, theme) {
  return {
    fontWeight:
      levelInput.indexOf(level) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium
  }
}

function Kpi161() {
  const [uploading, setUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)

  const {
    control,
    reset,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm({
    resolver: valibotResolver(schema),
    defaultValues: {
      type: '',
      number: '',
      level: '',
      dateissue: '',
      dateperiod: ''
    }
  })

  const theme = useTheme()
  const [typeInput, setTypeInput] = React.useState('')
  const [levelInput, setPersonName] = React.useState('')

  const handleChangeType = event => {
    const {
      target: { value }
    } = event
    setTypeInput(value)
    setValue('type', value)
  }

  const handleChange = event => {
    const {
      target: { value }
    } = event
    const newValue = typeof value === 'string' ? value.split(',') : value
    setPersonName(newValue)
    setValue('level', newValue[0] || '')
  }
  const uploadFile = async data => {
    setUploading(true)

    const formData = new FormData()
    formData.append('type', data.type) // To'g'ridan-to'g'ri `data` dan olinadi
    formData.append('number', data.number)
    formData.append('level', data.level) // To'g'ridan-to'g'ri `data` dan olinadi
    formData.append('dateissue', data.dateissue)
    formData.append('dateperiod', data.dateperiod)

    try {
      const response = await fetch('/api/kpi161', {
        method: 'POST',
        body: formData
      })

      if (!response.ok) throw new Error('Server error')
      const result = await response.json()
      toast.success('Uploaded successfully!')
      console.log(result)
      reset()
    } catch (error) {
      console.error('Error uploading:', error)
      toast.error('Upload failed.')
    } finally {
      setUploading(false)
      setUploadProgress(0)
    }
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant='h5'>1.6.1 / O‘quv va o‘quv-uslubiy ishlar /</Typography>
        <Typography variant='h6'>
          Xorijiy tillarni egallaganligi (mutaxassis) yoki xorijiy tilda o‘quv kurs (fanlar)ni o‘qitish (nomutaxassis)
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Hamma tillar uchun (mutaxassis) - kamida C1 va undan yuqori darajadagi til bilish sertifikatiga ega bo‘lsa 0-2,5 ball' />
          <CardContent>
            <form onSubmit={handleSubmit(uploadFile)}>
              <Grid container spacing={6}>
                <Grid item xs={12} sm={6} md={4}>
                  <FormControl fullWidth sx={{ marginBottom: 3 }}>
                    <InputLabel id='typeInput-label'>Sertifikat turi</InputLabel>
                    <Select
                      labelId='typeInput-label'
                      id='typeInput'
                      value={typeInput}
                      onChange={handleChangeType}
                      input={<OutlinedInput label='Sertifikat turi' />}
                    >
                      {types.map(type => (
                        <MenuItem key={type} value={type} style={getStyles(type, typeInput, theme)}>
                          {type}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Controller
                    name='number'
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        id='numberInput'
                        label='Sertifikat raqami'
                        numberholder='Sertifikat raqami'
                        error={Boolean(errors.number)}
                        helperText={errors.number ? errors.number.message : ''}
                        sx={{ marginBottom: 3 }}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <FormControl fullWidth sx={{ marginBottom: 3 }}>
                    <InputLabel id='levelInput-label'>Sertifikat darajasi</InputLabel>

                    <Select
                      labelId='levelInput-label'
                      id='levelInput'
                      value={levelInput || ''} // Agar `levelInput` qiymati `undefined` bo'lsa, bo'sh qator qo'llaniladi
                      onChange={handleChange}
                      input={<OutlinedInput label='Sertifikat darajasi' />}
                      MenuProps={MenuProps}
                    >
                      {levels.map(level => (
                        <MenuItem key={level} value={level} style={getStyles(level, levelInput, theme)}>
                          {level}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <Controller
                    name='dateissue'
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        type='date'
                        fullWidth
                        id='dateissueInput'
                        label='Sayyor dars o‘tlazilgan sana'
                        InputLabelProps={{
                          shrink: true
                        }}
                        error={Boolean(errors.dateissue)}
                        helperText={errors.dateissue ? errors.dateissue.message : ''}
                        sx={{ marginBottom: 3 }}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <Controller
                    name='dateperiod'
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        type='date'
                        fullWidth
                        id='dateperiodInput'
                        label='Sayyor dars o‘tlazilgan sana'
                        InputLabelProps={{
                          shrink: true
                        }}
                        error={Boolean(errors.dateperiod)}
                        helperText={errors.dateperiod ? errors.dateperiod.message : ''}
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

export default Kpi161
