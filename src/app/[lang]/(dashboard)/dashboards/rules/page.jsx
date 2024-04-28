// MUI Imports
import Link from '@components/Link'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
// import FormValidation11 from '@views/forms/form-kpi/FormValidation11'

// Components Imports

const kpirules = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sx={{ paddingBottom: 4 }}>
        <Typography variant='h5'>
          O‘zbekiston davlat jahon tillari universiteti professor-o‘qituvchilarining reytingini aniqlash bo‘yicha KPI
          mezonlari /
        </Typography>
      </Grid>
      <Grid item xs={6} sx={{ paddingBottom: 4 }}>
        <Card className='m-2 py-5 pl-10'>
          <Link
            href={'https://uzswlu.uz/backend/web/files/KPI/KPI_Ilmiy%20va%20innovatsiyalarga%20oid%20ishlar.pdf'}
            target='_blank'
          >
            Ilmiy va innovatsiyalarga oid ishlar
          </Link>
        </Card>
        <Card className='m-2 py-5 pl-10'>
          <Link href={'https://uzswlu.uz/backend/web/files/KPI/KPI_Xalqaro xamkorlikka oid ishlar.pdf'} target='_blank'>
            Xalqaro xamkorlikka oid ishlar
          </Link>
        </Card>
        <Card className='m-2 py-5 pl-10'>
          <Link href={"https://uzswlu.uz/backend/web/files/KPI/KPI_O'quv uslubiy ishlar.pdf"} target='_blank'>
            O'quv uslubiy ishlar
          </Link>
        </Card>
        <Card className='m-2 py-5 pl-10'>
          <Link href={"https://uzswlu.uz/backend/web/files/KPI/KPI_Ma'naviy ma'rifiy ishlar.pdf"} target='_blank'>
            Ma'naviy ma'rifiy ishlar
          </Link>
        </Card>
      </Grid>
      {/* <Grid item xs={12}>
        <FormValidation11 />
      </Grid> */}
    </Grid>
  )
}

export default kpirules
