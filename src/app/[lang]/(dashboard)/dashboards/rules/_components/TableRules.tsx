// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

const createData = (index: string, nomer: string, ishlar: string, muddat: string, ball: string, metodika: string) => {
  return { index, nomer, ishlar, muddat, ball, metodika }
}

const rows = [
  createData(
    '1.1',
    '1',
    'Sifatli o‘quv kontentlari tayyorlanganligi va ularning muntazam yangilanib borilganligi',
    'Bir o`quv yili',
    '0-5',
    'Sifatli o‘quv kontentlari tayyorlanganligi va ularning muntazam yangilanib borilganligi O‘quv-uslubiy boshqarma tomonidan har bir professor-o‘qituvchi kesimida belgilangan talablar asosida kontent miqdori va sifati ko‘rib chiqilgan holda baholanadi.Jami ballar tegishli kafedra mudiri bilan kelishilgan holda tayyorlangan kontentlar sifati va miqdori hammualliflar ulushini hisobga olib taqsimlanadi.Izoh:Bitta fan bo‘yicha to‘liq kontent (ma’ruza matni, savol va tarqatma materiallar, videodars) tayyorlaganligi uchun – 5 ball; Ikkitagacha fan kontentining bir qismini tayyorlaganligi uchun – 2 ball; Uchta va undan ortiq fan kontenti bir qismini tayyorlaganligi uchun – 4 ball.O‘quv kontentlari miqdori qancha bo‘lishidan qat’iy nazar maksimal 5,0 ballgacha belgilanadi.'
  ),
  createData(
    '1.2',
    '2',
    'Darslik chop etilganligi',
    'bir yil',
    '0-6',
    'Universitet professor-o‘qituvchilari tomonidan belgilangan tartibda tayyorlanib chop qilingan hamda ushbu darslik bo‘yicha O‘zbekiston Respublikasi Oliy ta’lim, fan va innovasyalar vazirligi  hamda  universitet  Kengashi  qarorining o‘quv adabiyotlariga nashr ruxsatnomasi mavjudligi Ta’lim sifatini nazorat qilish bo‘limi tomonidan baholash uchun asos hisoblanadi. Darslik hammualliflikda yozilganda ballar mualliflar o‘rtasida quyidagicha belgilanadi: 6 va undan ko‘proq bosma taboq uchun – 6 ball; 4-5 bosma taboq uchun – 4 ball;  2-3 bosma taboq uchun – 2 ball; Izoh:1 bosma taboq 14 shrift, 1,5 intervaldagi abzas bilan 16 betlik matnni tashkil etadi. Chop etilgan darsliklar sonidan qat’iy nazar maksimal 6,0 ballgacha belgilanadi.'
  ),
  createData(
    '1.3',
    '3',
    'O‘quv qo‘llanma chop etilganligi',
    'bir yil',
    '0-2',
    'Universitet professor-o‘qituvchilari tomonidan belgilangan tartibda tayyorlanib chop qilingan hamda ushbu o‘quv qo‘llanma bo‘yicha O‘zbekiston Respublikasi  Oliy ta’lim, fan va innovasyalar vazirligi  hamda universitet Kengashi qarorining o‘quv adabiyotlariga nashr ruxsatnomasi (ko‘rsatilgan sanasi hisobga olinadi) mavjudligi Ta’lim sifatini nazorat qilish bo‘limi tomonidan baholash uchun asos hisoblanadi.  Izoh: O‘quv qo‘llanma hammualliflikda yozilganda hammualliflar soni 2 nafar bo‘lsa har biriga 1 balldan, 2 nafardan ortiq holatlarda 0,5 balldan belgilanadi.  Chop etilgan o‘quv qo‘llanmalar sonidan qat’iy nazar maksimal 2,0 ballgacha belgilanadi.'
  ),
  createData(
    '1.4.1',
    '4',
    'O‘qitish sifati darajasi (semestr yakuni bo‘yicha o‘tkaziladigan talabalar o‘rtasidagi so‘rovnoma va  darslarni kuzatish natijalariga ko‘ra)',
    'olti oy',
    '0-5',
    'Ta’lim sifatini nazorat qilish bo‘limi va O‘quv-uslubiy boshqarma hamkorligida har bir professor-o‘qituvchi kesimida tegishli guruhlarda semestr yakuni bo‘yicha talabalar o‘rtasida elektron platforma orqali so‘rovnoma o‘tkaziladi.So‘rovnomada professor-o‘qituvchilar 10 ta mezon asosida har bir mezon bo‘yicha 1-10 ballgacha baholanadi. So‘rovnoma  hemis.uzswlu.uz elektron platformasiga joylashtiriladi.    So‘rovnoma natijasida to‘plangan ball professor-o‘qituvchini ushbu bandda belgilangan mezon bo‘yicha baholashga asos bo‘ladi.    Professor-o‘qituvchilarni baholashda 10 ta mezon bo‘yicha (har bir mezon bo‘yicha 0,5) olingan ballning jami qo‘shiladi hamda 10 ga bo‘linadi.'
  ),
  createData(
    '1.4.2',
    '4',
    'O‘qitish sifati darajasi (semestr yakuni bo‘yicha o‘tkaziladigan talabalar o‘rtasidagi so‘rovnoma va  darslarni kuzatish natijalariga ko‘ra)',
    'semestr davomida',
    '0-5',
    'Ta’lim sifatini nazorat qilish bo‘limi tomonidan professor-o‘qituvchilarning  dars o‘tish sifati va mahorati, o‘quv mashg‘ulotlarini zamonaviy pedagogik texnologiyalar asosida olib borishini darslarni kuzatish orqali baholanadi.'
  ),
  createData(
    '1.5',
    '5',
    'O‘quv jarayoniga amaliyotchi talabalarning jalb qilinganligi yoki sayyor dars mashg‘ulotlar o‘tkazilganligi, mustaqil ta’lim ishlari bilan shug‘ullanganligi',
    'olti oy',
    '0-2',
    'O‘tkazilgan master-klasslar va sayyor dars mashg‘ulotlar tegishli rejalar va ularning o‘tkazilganligini tasdiqlovchi hujjatlar asosida tegishli fakultet tomonidan aniqlanadi.Har bir o‘tkaziladigan master-klass yoki sayyor dars mashg‘uloti uchun 0.5 ball beriladi, bunda olti oy davomida to‘planadigan eng yuqori ball 2 ni tashkil etadi.'
  ),
  createData(
    '1.6',
    '6',
    'Xorijiy tillarni egallaganligi (mutaxassis) yoki xorijiy tilda o‘quv kurs (fanlar)ni o‘qitish (nomutaxassis)',
    'bir yil',
    '0-5',
    'Professor-o‘qituvchilarning xorijiy tillarni egallaganligi Xodimlar bo‘limi tomonidan quyidagi tartibda aniqlanadi va baholanadi: hamma tillar uchun (nomutaxassis) – kamida B2 va undan yuqori darajadagi milliy sertifikat yoki xalqaro imtihon tizimlari bo‘yicha tilni bilish darajalari B2 va undan yuqori.'
  ),
  createData(
    '1.7',
    '7',
    'C1 va undan yuqori darajadagi milliy yoki unga tenglashtirilgan mos darajadagi xalqaro tan olingan sertifikatga ega bo‘lgan talabalarni tayyorlash',
    'olti oy',
    '0-5',
    'Xorijiy til o‘qituvchilarining talabalarni chet tili sertifikatiga tayyorlash va uning rahbarligida talabalarning S1 darajadagi sertifikatga ega bo‘lishlari tegishli fakultet tomonidan aniqlanadi.O‘qituvchi tomonidan S1 darajaga yo‘naltirilgan qo‘shimcha kurslar, to‘garaklar tashkil etilganligini asoslovchi hujjatlar taqdim etilishi orqali aniqlanadi.'
  ),
  createData('', '', '', '', '', ''),
  createData('', '', '', '', '', ''),
  createData('', '', '', '', '', '')
]

const TableRules = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650, border: 1 }} aria-label='simple table'>
        <TableHead sx={{ border: 1 }}>
          <TableRow sx={{ border: 1 }}>
            <TableCell sx={{ maxWidth: 10, border: 1 }}>I</TableCell>
            <TableCell sx={{ maxWidth: 10, border: 1 }}>T/R</TableCell>
            <TableCell sx={{ border: 1 }} align='center'>
              Amalga oshiriladigan ishlar
            </TableCell>
            <TableCell sx={{ border: 1 }} align='center'>
              Natijalarni hisoblab borish muddati
            </TableCell>
            <TableCell sx={{ border: 1 }} align='center'>
              Ball
            </TableCell>
            <TableCell sx={{ border: 1 }} align='center'>
              Ballarni hisoblash metodikasi
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow
              key={row.index}
              sx={{
                '&:last-of-type td, &:last-of-type th': {
                  border: 1
                }
              }}
            >
              <TableCell sx={{ border: 1 }} component='th' scope='row'>
                {row.index}
              </TableCell>
              <TableCell sx={{ border: 1 }} component='th' scope='row'>
                {row.nomer}
              </TableCell>
              <TableCell sx={{ border: 1 }} align='center'>
                {row.ishlar}
              </TableCell>
              <TableCell sx={{ border: 1 }} align='center'>
                {row.muddat}
              </TableCell>
              <TableCell sx={{ border: 1 }} align='center'>
                {row.ball}
              </TableCell>
              <TableCell sx={{ border: 1 }} align='left'>
                {row.metodika}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableRules
