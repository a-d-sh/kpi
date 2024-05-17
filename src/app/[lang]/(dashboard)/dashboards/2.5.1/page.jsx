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
  hindex: string([minLength(1, 'This field is required')]),
  number: string([minLength(1, 'This field is required')]),
  link: string([minLength(1, 'This field is required')])
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

const types = [`Web of Science`, `Scopus`, `Google Scholar`]

function getStyles(level, levelInput, theme) {
  return {
    fontWeight:
      levelInput.indexOf(level) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium
  }
}

function Kpi251() {
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
      hindex: '',
      number: '',
      link: ''
    }
  })

  const theme = useTheme()
  const [typeInput, setTypeInput] = React.useState('')

  const handleChangeType = event => {
    const {
      target: { value }
    } = event
    setTypeInput(value)
    setValue('type', value)
  }

  const uploadFile = async data => {
    setUploading(true)

    const formData = new FormData()
    formData.append('type', data.type) // To'g'ridan-to'g'ri `data` dan olinadi
    formData.append('hindex', data.hindex)
    formData.append('number', data.number)
    formData.append('link', data.link)

    try {
      const response = await fetch('/api/kpi251', {
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
        <Typography variant='h5'>2.5.1 / Ilmiy va innovatsiyalarga oid ishlar /</Typography>
        <Typography variant='h6'>
          Xalqaro ko‘rsatkichlarga ko‘ra universitet professor-o‘qituvchilari nashrlariga iqtiboslar («Web of Science»,
          «Scopus» va «Google Scholar» bazalari bo‘yicha) «Xirsh» indeksi (h-indeks) 5 va undan yuqori ko‘rsatkich
          mavjudligi
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='0-3 ball' />
          <CardContent>
            <form onSubmit={handleSubmit(uploadFile)}>
              <Grid container spacing={6}>
                <Grid item xs={12} sm={6} md={6}>
                  <FormControl fullWidth sx={{ marginBottom: 3 }}>
                    <InputLabel id='typeInput-label'>
                      Xalqaro indekslar ma’lumotlariga ko‘ra iqtiboslik ko‘rsatkichi
                    </InputLabel>
                    <Select
                      labelId='typeInput-label'
                      id='typeInput'
                      value={typeInput}
                      onChange={handleChangeType}
                      input={<OutlinedInput label='Xalqaro indekslar ma’lumotlariga ko‘ra iqtiboslik ko‘rsatkichi' />}
                    >
                      {types.map(type => (
                        <MenuItem key={type} value={type} style={getStyles(type, typeInput, theme)}>
                          {type}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <Controller
                    name='hindex'
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        id='hindexInput'
                        label='h-indeks ko‘rsatkichi'
                        hindexholder='h-indeks ko‘rsatkichi'
                        error={Boolean(errors.hindex)}
                        helperText={errors.hindex ? errors.hindex.message : ''}
                        sx={{ marginBottom: 3 }}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <Controller
                    name='number'
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        id='numberInput'
                        label='Iqtibosliklar soni'
                        numberholder='Iqtibosliklar soni'
                        error={Boolean(errors.number)}
                        helperText={errors.number ? errors.number.message : ''}
                        sx={{ marginBottom: 3 }}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <Controller
                    name='link'
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        id='linkInput'
                        label='Vebsite linki'
                        linkholder='Vebsite linki'
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

export default Kpi251
