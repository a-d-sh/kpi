//Files uchun api
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
  const type = formData.get('type')
  const number = formData.get('number')
  const level = formData.get('level')
  const dateissue = formData.get('dateissue')
  const dateperiod = formData.get('dateperiod')

  try {
    const res = await prisma.kpi161.create({
      data: {
        fish: session.user.name,
        type: type,
        number: number,
        level: level,
        dateissue: dateissue,
        dateperiod: dateperiod,
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

  const kpi161 = await prisma.kpi161.findMany({
    where: {
      userId: user.id
    }
  })

  // console.log(files)

  return Response.json({ kpi161 })
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
