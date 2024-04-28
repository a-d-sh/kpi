// MUI Imports
'use client'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
// import FormValidation11 from '@views/forms/form-kpi/FormValidation11'
import { useState } from 'react'
// Components Imports

const kpi11 = async ({ dirs }) => {
  const [uploading, setUploading] = useState(false)
  const [selectedImage, setSelectedImage] = useState('')
  const [selectedFile, setSelectedFile] = useState(null)

  const handleUpload = async () => {
    setUploading(true)
    try {
      if (!selectedFile) return
      const formData = new FormData()
      formData.append('file', selectedFile)
      // const { data } = await axios.post('/api/book', formData)

      var requestOptions = { method: 'POST', body: formData }

      const response = await fetch('/api/files', requestOptions)
      const result = await response.text()
      console.log(result)

      console.log(data)
    } catch (error) {
      console.log(error.response?.data)
    }
    setUploading(false)
  }
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sx={{ paddingBottom: 4 }}>
        <Typography variant='h5'>1.1 / O‘quv va o‘quv-uslubiy ishlar /</Typography>
        <Typography
          onClick={async () => {
            const res = await fetch('/api/files', { method: 'GET' })
            console.log(await res.json())
          }}
          variant='h6'
        >
          Sifatli o‘quv kontentlari tayyorlanganligi va ularning muntazam yangilanib borilganligi
        </Typography>
      </Grid>
      {/* <Grid item xs={12}>
        <FormValidation11 />
      </Grid> */}

      <div className='max-w-4xl mx-auto p-20 space-y-6'>
        <label>
          <input
            type='file'
            hidden
            onChange={({ target }) => {
              if (target.files) {
                const file = target.files[0]
                setSelectedImage(URL.createObjectURL(file))
                setSelectedFile(file)
              }
            }}
          />
          <div className='w-40 aspect-video rounded flex items-center justify-center border-2 border-dashed cursor-pointer'>
            {selectedImage ? <img src={selectedImage} alt='' /> : <span>Select file</span>}
          </div>
        </label>
        <button
          onClick={handleUpload}
          disabled={uploading}
          style={{ opacity: uploading ? '.5' : '1' }}
          className='bg-red-600 p-3 w-32 text-center rounded text-white'
        >
          {uploading ? 'Uploading..' : 'Upload'}
        </button>
        <div className='mt-20 flex flex-col space-y-3'>
          {/* {dirs.map(item => (
            <Link key={item} href={'/book/' + item} className='text-blue-500 hover:underline'>
              {item}
            </Link>
          ))} */}
        </div>
      </div>
    </Grid>
  )
}

export default kpi11
