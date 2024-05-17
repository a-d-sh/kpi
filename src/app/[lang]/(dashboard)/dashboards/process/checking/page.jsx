'use client'

import { useEffect, useState } from 'react'

import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material'

const Checking = () => {
  const [files, setFiles] = useState([])
  useEffect(() => {
    const fetchFiles = async () => {
      const response = await fetch('/api/files', { method: 'GET' })
      const data = await response.json()

      setFiles(data.files || [])
    }

    fetchFiles()
  }, [])

  const [kpi112, setKpi112] = useState([])
  useEffect(() => {
    const fetchFiles = async () => {
      const response = await fetch('/api/kpi112', { method: 'GET' })
      const data = await response.json()

      setKpi112(data.kpi112 || [])
    }

    fetchFiles()
  }, [])

  const [kpi113, setKpi113] = useState([])
  useEffect(() => {
    const fetchFiles = async () => {
      const response = await fetch('/api/kpi113', { method: 'GET' })
      const data = await response.json()

      setKpi113(data.kpi113 || [])
    }

    fetchFiles()
  }, [])

  const [kpi121, setKpi121] = useState([])
  useEffect(() => {
    const fetchFiles = async () => {
      const response = await fetch('/api/kpi121', { method: 'GET' })
      const data = await response.json()

      setKpi121(data.kpi121 || [])
    }

    fetchFiles()
  }, [])

  const [kpi122, setKpi122] = useState([])
  useEffect(() => {
    const fetchFiles = async () => {
      const response = await fetch('/api/kpi122', { method: 'GET' })
      const data = await response.json()

      setKpi122(data.kpi122 || [])
    }

    fetchFiles()
  }, [])

  const [kpi123, setKpi123] = useState([])
  useEffect(() => {
    const fetchFiles = async () => {
      const response = await fetch('/api/kpi123', { method: 'GET' })
      const data = await response.json()

      setKpi123(data.kpi123 || [])
    }

    fetchFiles()
  }, [])

  const [kpi131, setKpi131] = useState([])
  useEffect(() => {
    const fetchFiles = async () => {
      const response = await fetch('/api/kpi131', { method: 'GET' })
      const data = await response.json()

      setKpi131(data.kpi131 || [])
    }

    fetchFiles()
  }, [])

  const [kpi132, setKpi132] = useState([])
  useEffect(() => {
    const fetchFiles = async () => {
      const response = await fetch('/api/kpi132', { method: 'GET' })
      const data = await response.json()

      setKpi132(data.kpi132 || [])
    }

    fetchFiles()
  }, [])

  const [kpi151, setKpi151] = useState([])
  useEffect(() => {
    const fetchFiles = async () => {
      const response = await fetch('/api/kpi151', { method: 'GET' })
      const data = await response.json()

      setKpi151(data.kpi151 || [])
    }

    fetchFiles()
  }, [])

  const [kpi152, setKpi152] = useState([])
  useEffect(() => {
    const fetchFiles = async () => {
      const response = await fetch('/api/kpi152', { method: 'GET' })
      const data = await response.json()

      setKpi152(data.kpi152 || [])
    }

    fetchFiles()
  }, [])

  const [kpi161, setKpi161] = useState([])
  useEffect(() => {
    const fetchFiles = async () => {
      const response = await fetch('/api/kpi161', { method: 'GET' })
      const data = await response.json()

      setKpi161(data.kpi161 || [])
    }

    fetchFiles()
  }, [])

  const [kpi162, setKpi162] = useState([])
  useEffect(() => {
    const fetchFiles = async () => {
      const response = await fetch('/api/kpi162', { method: 'GET' })
      const data = await response.json()

      setKpi162(data.kpi162 || [])
    }

    fetchFiles()
  }, [])

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sx={{ paddingBottom: 4 }}>
        <Typography variant='h6'>Tekshirilayotgan</Typography>
        <Grid item xs={12} md={12} sx={{ marginBottom: 3 }}>
          {files.length > 0 ? (
            <Card>
              <CardHeader title='1.1.1 / O‘quv va o‘quv-uslubiy ishlar / Sifatli o‘quv kontentlari tayyorlanganligi va ularning muntazam yangilanib borilganligi/ Bitta fan bo‘yicha to‘liq kontent (ma’ruza matni, savol va tarqatma materiallar, videodars) tayyorlaganligi uchun – 5 ball' />
              <CardContent>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                    <TableHead>
                      <TableRow>
                        <TableCell align='left'>Nomini va mavzusi</TableCell>
                        <TableCell align='left'>Hammualliflar nomi</TableCell>
                        <TableCell align='left'>Kontent tayyorlangan va yangilangan sana</TableCell>
                        <TableCell align='left'>
                          Tegishli kafedra mudiri tomonidan berilgan ma’lumot yoki bildirgi
                        </TableCell>
                        <TableCell align='left'>Tasdiqlovchi hujjat</TableCell>
                        <TableCell align='left'>Tasdiqlovchi hujjat havolasi</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {files.map(file => (
                        <TableRow key={file.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                          <TableCell component='th' scope='row'>
                            {file.title}
                          </TableCell>
                          <TableCell align='left'>{file.author}</TableCell>
                          <TableCell align='left'>{file.datesuccess}</TableCell>
                          <TableCell align='left'>{file.file ? file.file.slice(14) : ''}</TableCell>
                          <TableCell align='left'>{file.fileone ? file.fileone.slice(14) : ''}</TableCell>
                          <TableCell align='left'>{file.link}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader title='1.1.1 / Ma`lumotlar yuklanmoqda... (yoki mavjud emas)!' />
            </Card>
          )}
        </Grid>
        <Grid item xs={12} md={12} sx={{ marginBottom: 3 }}>
          {kpi112.length > 0 ? (
            <Card>
              <CardHeader title='1.1.2 / O‘quv va o‘quv-uslubiy ishlar / Sifatli o‘quv kontentlari tayyorlanganligi va ularning muntazam yangilanib borilganligi / Ikkitagacha fan kontentining bir qismini tayyorlaganligi uchun – 2 ball ' />
              <CardContent>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                    <TableHead>
                      <TableRow>
                        <TableCell align='left'>Nomini va mavzusi</TableCell>
                        <TableCell align='left'>Hammualliflar nomi</TableCell>
                        <TableCell align='left'>Kontent tayyorlangan va yangilangan sana</TableCell>
                        <TableCell align='left'>
                          Tegishli kafedra mudiri tomonidan berilgan ma’lumot yoki bildirgi
                        </TableCell>
                        <TableCell align='left'>Tasdiqlovchi hujjat</TableCell>
                        <TableCell align='left'>Tasdiqlovchi hujjat havolasi</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {kpi112.map(file => (
                        <TableRow key={file.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                          <TableCell component='th' scope='row'>
                            {file.title}
                          </TableCell>
                          <TableCell align='left'>{file.author}</TableCell>
                          <TableCell align='left'>{file.datesuccess}</TableCell>
                          <TableCell align='left'>{file.file ? file.file.slice(14) : ''}</TableCell>
                          <TableCell align='left'>{file.fileone ? file.fileone.slice(14) : ''}</TableCell>
                          <TableCell align='left'>{file.link}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader title='1.1.2 / Ma`lumotlar yuklanmoqda... (yoki mavjud emas)!' />
            </Card>
          )}
        </Grid>
        <Grid item xs={12} md={12} sx={{ marginBottom: 3 }}>
          {kpi113.length > 0 ? (
            <Card>
              <CardHeader title='1.1.3 / O‘quv va o‘quv-uslubiy ishlar / Sifatli o‘quv kontentlari tayyorlanganligi va ularning muntazam yangilanib borilganligi / Uchta va undan ortiq fan kontenti bir qismini tayyorlaganligi uchun – 4 ball ' />
              <CardContent>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                    <TableHead>
                      <TableRow>
                        <TableCell align='left'>Nomini va mavzusi</TableCell>
                        <TableCell align='left'>Hammualliflar nomi</TableCell>
                        <TableCell align='left'>Kontent tayyorlangan va yangilangan sana</TableCell>
                        <TableCell align='left'>
                          Tegishli kafedra mudiri tomonidan berilgan ma’lumot yoki bildirgi
                        </TableCell>
                        <TableCell align='left'>Tasdiqlovchi hujjat</TableCell>
                        <TableCell align='left'>Tasdiqlovchi hujjat havolasi</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {kpi113.map(file => (
                        <TableRow key={file.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                          <TableCell component='th' scope='row'>
                            {file.title}
                          </TableCell>
                          <TableCell align='left'>{file.author}</TableCell>
                          <TableCell align='left'>{file.datesuccess}</TableCell>
                          <TableCell align='left'>{file.file ? file.file.slice(14) : ''}</TableCell>
                          <TableCell align='left'>{file.fileone ? file.fileone.slice(14) : ''}</TableCell>
                          <TableCell align='left'>{file.link}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader title='1.1.3 / Ma`lumotlar yuklanmoqda... (yoki mavjud emas)!' />
            </Card>
          )}
        </Grid>
        <Grid item xs={12} md={12} sx={{ marginBottom: 3 }}>
          {kpi121.length > 0 ? (
            <Card>
              <CardHeader title='1.2.1 / O‘quv va o‘quv-uslubiy ishlar / Darslik chop etilganligi / 6 va undan ko’proq bosma taboq uchun -6 ball' />
              <CardContent>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                    <TableHead>
                      <TableRow>
                        <TableCell align='left'>Nomini va mavzusi</TableCell>
                        <TableCell align='left'>Hammualliflar nomi</TableCell>
                        <TableCell align='left'>Nashr sanasi</TableCell>
                        <TableCell align='left'>Muvofiqlashtiruvchi kengash qarori nomeri</TableCell>
                        <TableCell align='left'>Tasdiqlovchi hujjat</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {kpi121.map(file => (
                        <TableRow key={file.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                          <TableCell component='th' scope='row'>
                            {file.title}
                          </TableCell>
                          <TableCell align='left'>{file.author}</TableCell>
                          <TableCell align='left'>{file.datesuccess}</TableCell>
                          <TableCell align='left'>{file.nomer}</TableCell>
                          <TableCell align='left'>{file.fileone ? file.fileone.slice(14) : ''}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader title='1.2.1 / Ma`lumotlar yuklanmoqda... (yoki mavjud emas)!' />
            </Card>
          )}
        </Grid>
        <Grid item xs={12} md={12} sx={{ marginBottom: 3 }}>
          {kpi122.length > 0 ? (
            <Card>
              <CardHeader title='1.2.2 / O‘quv va o‘quv-uslubiy ishlar / Darslik chop etilganligi / 4-5 bosma taboq uchun -4 ball' />
              <CardContent>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                    <TableHead>
                      <TableRow>
                        <TableCell align='left'>Nomini va mavzusi</TableCell>
                        <TableCell align='left'>Hammualliflar nomi</TableCell>
                        <TableCell align='left'>Nashr sanasi</TableCell>
                        <TableCell align='left'>Muvofiqlashtiruvchi kengash qarori nomeri</TableCell>
                        <TableCell align='left'>Tasdiqlovchi hujjat</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {kpi122.map(file => (
                        <TableRow key={file.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                          <TableCell component='th' scope='row'>
                            {file.title}
                          </TableCell>
                          <TableCell align='left'>{file.author}</TableCell>
                          <TableCell align='left'>{file.datesuccess}</TableCell>
                          <TableCell align='left'>{file.nomer}</TableCell>
                          <TableCell align='left'>{file.fileone ? file.fileone.slice(14) : ''}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader title='1.2.2 / Ma`lumotlar yuklanmoqda... (yoki mavjud emas)!' />
            </Card>
          )}
        </Grid>
        <Grid item xs={12} md={12} sx={{ marginBottom: 3 }}>
          {kpi123.length > 0 ? (
            <Card>
              <CardHeader title='1.2.3 / O‘quv va o‘quv-uslubiy ishlar / Darslik chop etilganligi / 2-3 bosma taboq uchun -2 ball' />
              <CardContent>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                    <TableHead>
                      <TableRow>
                        <TableCell align='left'>Nomini va mavzusi</TableCell>
                        <TableCell align='left'>Hammualliflar nomi</TableCell>
                        <TableCell align='left'>Nashr sanasi</TableCell>
                        <TableCell align='left'>Muvofiqlashtiruvchi kengash qarori nomeri</TableCell>
                        <TableCell align='left'>Tasdiqlovchi hujjat</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {kpi123.map(file => (
                        <TableRow key={file.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                          <TableCell component='th' scope='row'>
                            {file.title}
                          </TableCell>
                          <TableCell align='left'>{file.author}</TableCell>
                          <TableCell align='left'>{file.datesuccess}</TableCell>
                          <TableCell align='left'>{file.nomer}</TableCell>
                          <TableCell align='left'>{file.fileone ? file.fileone.slice(14) : ''}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader title='1.2.3 / Ma`lumotlar yuklanmoqda... (yoki mavjud emas)!' />
            </Card>
          )}
        </Grid>
        <Grid item xs={12} md={12} sx={{ marginBottom: 3 }}>
          {kpi131.length > 0 ? (
            <Card>
              <CardHeader title='1.3.1 / O‘quv va o‘quv-uslubiy ishlar / O‘quv qo‘llanma chop etilganligi / O‘quv qo‘llanma hammualliflikda yozilganda hamualliflar soni 2 nafar bo‘lsa har biriga 1-balldan' />
              <CardContent>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                    <TableHead>
                      <TableRow>
                        <TableCell align='left'>Nomini va mavzusi</TableCell>
                        <TableCell align='left'>Hammualliflar nomi</TableCell>
                        <TableCell align='left'>Nashr sanasi</TableCell>
                        <TableCell align='left'>Muvofiqlashtiruvchi kengash qarori nomeri</TableCell>
                        <TableCell align='left'>Tasdiqlovchi hujjat</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {kpi131.map(file => (
                        <TableRow key={file.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                          <TableCell component='th' scope='row'>
                            {file.title}
                          </TableCell>
                          <TableCell align='left'>{file.author}</TableCell>
                          <TableCell align='left'>{file.datesuccess}</TableCell>
                          <TableCell align='left'>{file.nomer}</TableCell>
                          <TableCell align='left'>{file.fileone ? file.fileone.slice(14) : ''}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader title='1.3.1 / Ma`lumotlar yuklanmoqda... (yoki mavjud emas)!' />
            </Card>
          )}
        </Grid>
        <Grid item xs={12} md={12} sx={{ marginBottom: 3 }}>
          {kpi132.length > 0 ? (
            <Card>
              <CardHeader title='1.3.2 / O‘quv va o‘quv-uslubiy ishlar / O‘quv qo‘llanma chop etilganligi / O‘quv qo‘llanma hammualliflikda yozilganda hamualliflar soni 2 nafardan ortiq bo‘lsa har biriga 0.5- balldan' />
              <CardContent>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                    <TableHead>
                      <TableRow>
                        <TableCell align='left'>Nomini va mavzusi</TableCell>
                        <TableCell align='left'>Hammualliflar nomi</TableCell>
                        <TableCell align='left'>Nashr sanasi</TableCell>
                        <TableCell align='left'>Muvofiqlashtiruvchi kengash qarori nomeri</TableCell>
                        <TableCell align='left'>Tasdiqlovchi hujjat</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {kpi132.map(file => (
                        <TableRow key={file.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                          <TableCell component='th' scope='row'>
                            {file.title}
                          </TableCell>
                          <TableCell align='left'>{file.author}</TableCell>
                          <TableCell align='left'>{file.datesuccess}</TableCell>
                          <TableCell align='left'>{file.nomer}</TableCell>
                          <TableCell align='left'>{file.fileone ? file.fileone.slice(14) : ''}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader title='1.3.2 / Ma`lumotlar yuklanmoqda... (yoki mavjud emas)!' />
            </Card>
          )}
        </Grid>
        <Grid item xs={12} md={12} sx={{ marginBottom: 3 }}>
          {kpi151.length > 0 ? (
            <Card>
              <CardHeader title='1.5.1 / O‘quv va o‘quv-uslubiy ishlar / O‘quv jarayoniga amaliyotchi talabalarning jalb qilinganligi yoki sayyor dars mashg‘ulotlar o‘tkazilganligi, mustaqil ta’lim ishlari bilan shug‘ullanganligi / Sohaga oid o‘tkazilgan “Masterklass” uchun 0.5 -ball' />
              <CardContent>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                    <TableHead>
                      <TableRow>
                        <TableCell align='left'>“Master-klass” mavzusi</TableCell>
                        <TableCell align='left'>“Master-klass” o‘tkazilgan joy</TableCell>
                        <TableCell align='left'>“Master-klass” o‘tkazilgan sana</TableCell>
                        <TableCell align='left'>Tasdiqlovchi hujjat</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {kpi151.map(file => (
                        <TableRow key={file.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                          <TableCell component='th' scope='row'>
                            {file.title}
                          </TableCell>
                          <TableCell align='left'>{file.place}</TableCell>
                          <TableCell align='left'>{file.datesuccess}</TableCell>
                          <TableCell align='left'>{file.fileone ? file.fileone.slice(14) : ''}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader title='1.5.1 / Ma`lumotlar yuklanmoqda... (yoki mavjud emas)!' />
            </Card>
          )}
        </Grid>
        <Grid item xs={12} md={12} sx={{ marginBottom: 3 }}>
          {kpi152.length > 0 ? (
            <Card>
              <CardHeader title='1.5.2 / O‘quv va o‘quv-uslubiy ishlar / O‘quv jarayoniga amaliyotchi talabalarning jalb qilinganligi yoki sayyor dars mashg‘ulotlar o‘tkazilganligi, mustaqil ta’lim ishlari bilan shug‘ullanganligi / O‘tkazilgan sayyor dars mashg‘uloti uchun 0.5 -ball' />
              <CardContent>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                    <TableHead>
                      <TableRow>
                        <TableCell align='left'>Sayyor dars mavzusi</TableCell>
                        <TableCell align='left'>Sayyor dars o‘tlazilgan joy</TableCell>
                        <TableCell align='left'>Sayyor dars o‘tlazilgan sana</TableCell>
                        <TableCell align='left'>Tasdiqlovchi hujjat</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {kpi152.map(file => (
                        <TableRow key={file.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                          <TableCell component='th' scope='row'>
                            {file.title}
                          </TableCell>
                          <TableCell align='left'>{file.place}</TableCell>
                          <TableCell align='left'>{file.datesuccess}</TableCell>
                          <TableCell align='left'>{file.fileone ? file.fileone.slice(14) : ''}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader title='1.5.2 / Ma`lumotlar yuklanmoqda... (yoki mavjud emas)!' />
            </Card>
          )}
        </Grid>
        <Grid item xs={12} md={12} sx={{ marginBottom: 3 }}>
          {kpi161.length > 0 ? (
            <Card>
              <CardHeader title='1.6.1 / O‘quv va o‘quv-uslubiy ishlar / Xorijiy tillarni egallaganligi (mutaxassis) yoki xorijiy tilda o‘quv kurs (fanlar)ni o‘qitish (nomutaxassis) / Hamma tillar uchun (mutaxassis) - kamida C1 va undan yuqori darajadagi til bilish sertifikatiga ega bo‘lsa 0-2,5 ball' />
              <CardContent>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                    <TableHead>
                      <TableRow>
                        <TableCell align='left'>FISH</TableCell>
                        <TableCell align='left'>Sertifikat turi Milliy/Xalqaro</TableCell>
                        <TableCell align='left'>Sertifikat raqami</TableCell>
                        <TableCell align='left'>Darajasi (C2,C1, tanlanadi)</TableCell>
                        <TableCell align='left'>Sertifikat berilgan sana</TableCell>
                        <TableCell align='left'>Sertifikat amal qilish muddati</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {kpi161.map(file => (
                        <TableRow key={file.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                          <TableCell component='th' scope='row'>
                            {file.fish}
                          </TableCell>
                          <TableCell align='left'>{file.type}</TableCell>
                          <TableCell align='left'>{file.number}</TableCell>
                          <TableCell align='left'>{file.level}</TableCell>
                          <TableCell align='left'>{file.dateissue}</TableCell>
                          <TableCell align='left'>{file.dateperiod}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader title='1.6.1 / Ma`lumotlar yuklanmoqda... (yoki mavjud emas)!' />
            </Card>
          )}
        </Grid>
        <Grid item xs={12} md={12} sx={{ marginBottom: 3 }}>
          {kpi162.length > 0 ? (
            <Card>
              <CardHeader title='1.6.2 / O‘quv va o‘quv-uslubiy ishlar / Xorijiy tillarni egallaganligi (mutaxassis) yoki xorijiy tilda o‘quv kurs (fanlar)ni o‘qitish (nomutaxassis) / Hamma tillar uchun (nomutaxassis) -kamida B2 va undan yuqori darajadagi til bilish sertifikatiga ega bo‘lsa 0-2,5 ball' />
              <CardContent>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                    <TableHead>
                      <TableRow>
                        <TableCell align='left'>FISH</TableCell>
                        <TableCell align='left'>Sertifikat turi Milliy/Xalqaro</TableCell>
                        <TableCell align='left'>Sertifikat raqami</TableCell>
                        <TableCell align='left'>Darajasi (C2,C1, tanlanadi)</TableCell>
                        <TableCell align='left'>Sertifikat berilgan sana</TableCell>
                        <TableCell align='left'>Sertifikat amal qilish muddati</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {kpi162.map(file => (
                        <TableRow key={file.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                          <TableCell component='th' scope='row'>
                            {file.fish}
                          </TableCell>
                          <TableCell align='left'>{file.type}</TableCell>
                          <TableCell align='left'>{file.number}</TableCell>
                          <TableCell align='left'>{file.level}</TableCell>
                          <TableCell align='left'>{file.dateissue}</TableCell>
                          <TableCell align='left'>{file.dateperiod}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader title='1.6.2 / Ma`lumotlar yuklanmoqda... (yoki mavjud emas)!' />
            </Card>
          )}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Checking
