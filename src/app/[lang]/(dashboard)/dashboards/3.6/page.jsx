'use client'

import { valibotResolver } from '@hookform/resolvers/valibot'
import { Button, Card, CardContent, CardHeader, Grid, styled, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
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

import { useRef, useState } from 'react'

const schema = object({
  type: string([minLength(1, 'This field is required')])
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

const types = [
  `Xalqaro olimpiadalarda yagona ishtirokchi sifatida ishtirok etib, sovrinli o‘rinlarni qo‘lga kiritgan hamda mukofot (diplom)larga sazovor bo‘lgan talabalarni tayyorlaganlik`,
  `Xalqaro olimpiadalarda yagona ishtirokchi sifatida ishtirok etgan talabani tayyorlaganlik`,
  `Xalqaro nufuzli tanlovlarda jamoaviy ishtirok etgan, qoida tariqasida, sovrinli o‘rinlarni qo‘lga kiritgan hamda mukofot (diplom)larga sazovor bo‘lgan talabalarni tayyorlaganlik`
]

function getStyles(level, levelInput, theme) {
  return {
    fontWeight:
      levelInput.indexOf(level) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium
  }
}

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

function Kpi36() {
  const [uploading, setUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [selectedFileone, setSelectedFileone] = useState(null)
  const fileoneInputRef = useRef(null)

  const {
    control,
    reset,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm({
    resolver: valibotResolver(schema),
    defaultValues: {
      type: ''
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

  const handleChange = event => {
    const {
      target: { value }
    } = event
    const newValue = typeof value === 'string' ? value.split(',') : value
    setPersonName(newValue)
    setValue('level', newValue[0] || '')
  }
  const uploadFile = async data => {
    if (!selectedFileone) {
      toast.error('Please select a files.')
      return
    }
    setUploading(true)

    const formData = new FormData()
    formData.append('fileone', selectedFileone)
    formData.append('type', data.type)

    try {
      const response = await fetch('/api/kpi36', {
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

  const getStyles = (type, typeInput, theme) => {
    return {
      fontWeight: typeInput === type ? theme.typography.fontWeightMedium : theme.typography.fontWeightRegular,
      whiteSpace: 'normal',
      wordBreak: 'break-word'
    }
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant='h5'>3.6 / Xalqaro hamkorlikka oid ishlar /</Typography>
        <Typography variant='h6'>
          Proffessor-o‘qituvchi rahbarligida mahalliy va xalqaro olimpiadalarda sovrinli o‘rinlarni qo‘lga kiritgan
          hamda mukofot (diplom)larga sazovor bo‘lgan talabalar salmog‘ini oshirishdagi ishtiroki yoki ishtirok
          etkanligi, davlat stipendiyalariga tayyorlanishdagi faol ishtiroki (vazirlik tomonidan tasdiqlangan
          olimpiadalar ro‘yxati asosida)
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='0-2 ball' />
          <CardContent>
            <form onSubmit={handleSubmit(uploadFile)}>
              <Grid container spacing={6}>
                <Grid item xs={12} sm={12} md={12}>
                  <FormControl fullWidth sx={{ marginBottom: 3 }}>
                    <InputLabel id='typeInput-label'>Tanlang</InputLabel>
                    <Select
                      labelId='typeInput-label'
                      id='typeInput'
                      value={typeInput}
                      onChange={handleChangeType}
                      input={<OutlinedInput label='Tanlang' />}
                    >
                      {types.map(type => (
                        <MenuItem key={type} value={type} style={getStyles(type, typeInput, theme)}>
                          {type}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <label>
                    <input type='file' hidden ref={fileoneInputRef} onChange={handleFileoneChange} />
                    <StyledFileOneInputContainer>
                      {selectedFileone ? (
                        <Typography variant='body1'>{selectedFileone.name}</Typography>
                      ) : (
                        <span>Buyruq, xat, ma‘lumotnoma va boshqa asosli xujjatdan ko‘chirma pdf shaklda</span>
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

export default Kpi36
