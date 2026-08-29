import { NextResponse } from 'next/server'

export async function GET(){
 const key=process.env.TMDB_API_KEY
 if(!key) return NextResponse.json({error:'TMDB_API_KEY is not configured yet',items:[]},{status:200})
 try{
  const r=await fetch('https://api.themoviedb.org/3/trending/all/week?language=en-US',{headers:{Authorization:`Bearer ${key}`},next:{revalidate:900}})
  if(!r.ok) return NextResponse.json({error:'TMDB unavailable',items:[]},{status:502})
  const j=await r.json()
  return NextResponse.json(j.results??[])
 }catch{return NextResponse.json({error:'TMDB unavailable',items:[]},{status:502})}
}
