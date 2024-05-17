//Files uchun api
import { writeFile } from 'fs/promises'

import path from 'path'

import { NextResponse } from 'next/server'

import { PrismaClient } from '@prisma/client'
import { getServerSession } from 'next-auth/next'



import { authOptions } from '@/libs/auth'

const prisma = new PrismaClient()

export const POST = async (req, res) => {
  const formData = await req.formData()

  const session = await getServerSession(
    req,
    {
      ...res,
      getHeader: name => res.headers?.get(name),
      setHeader: (name, value) => res.headers?.set(name, value)
    },
    authOptions
  )


  // console.log('session', session)
  const fileone = formData.get('fileone')
  const title = formData.get('title')
  const place = formData.get('place')
  const datesuccess = formData.get('datesuccess')

  if (!fileone) {
    return NextResponse.json({ error: 'No files received.' }, { status: 400 })
  }

  const bufferone = Buffer.from(await fileone.arrayBuffer())
  const filenameone = Date.now() + '_' + fileone.name.replaceAll(' ', '_')

  try {
    await writeFile(path.join(process.cwd(), 'public/files/kpi152/fileone/' + filenameone), bufferone)

    const res = await prisma.kpi152.create({
      data: {
        fileone: filenameone,
        title: title,
        place: place,
        datesuccess: datesuccess,
        userId: session.user.id
      }
    })


    // console.log(res)
    return NextResponse.json({ Message: 'Success', status: 201 })
  } catch (error) {
    console.log('Error occured ', error)
    
return NextResponse.json({ Message: 'Failed', status: 500 })
  }
}

export const GET = async (req, res) => {
  const user = await getUser(req, res)

  const kpi152 = await prisma.kpi152.findMany({
    where: {
      userId: user.id
    }
  })

  // console.log(files)

  return Response.json({ kpi152 })
}

async function getUser(req, res) {
  const session = await getServerSession(
    req,
    {
      ...res,
      getHeader: name => res.headers?.get(name),
      setHeader: (name, value) => res.headers?.set(name, value)
    },
    authOptions
  )

  
return session.user
}
