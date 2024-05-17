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

  const file = formData.get('file')
  const fileone = formData.get('fileone')
  const title = formData.get('title')
  const author = formData.get('author')
  const datesuccess = formData.get('datesuccess')
  const link = formData.get('link')

  if (!file) {
    return NextResponse.json({ error: 'No files received.' }, { status: 400 })
  }

  const buffer = Buffer.from(await file.arrayBuffer())
  const bufferone = Buffer.from(await fileone.arrayBuffer())
  const filename = Date.now() + '_' + file.name.replaceAll(' ', '_')
  const filenameone = Date.now() + '_' + fileone.name.replaceAll(' ', '_')

  try {
    await writeFile(path.join(process.cwd(), 'public/files/kpi11/file/' + filename), buffer)
    await writeFile(path.join(process.cwd(), 'public/files/kpi11/fileone/' + filenameone), bufferone)

    const res = await prisma.files.create({
      data: {
        file: filename,
        fileone: filenameone,
        title: title,
        author: author,
        datesuccess: datesuccess,
        link: link,
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

  const files = await prisma.files.findMany({
    where: {
      userId: user.id
    }
  })

  // console.log(files)

  return Response.json({ files })
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
