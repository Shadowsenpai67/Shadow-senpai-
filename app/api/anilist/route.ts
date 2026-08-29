import { NextResponse } from 'next/server'

const endpoint = 'https://graphql.anilist.co'
const query = `query($page:Int,$perPage:Int){Page(page:$page,perPage:$perPage){media(type:ANIME,sort:POPULARITY_DESC){id title{romaji english native} coverImage{extraLarge large} bannerImage averageScore episodes genres format status description(asHtml:false)}}}`

export async function GET() {
  try {
    const response = await fetch(endpoint, {method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({query,variables:{page:1,perPage:10}}),next:{revalidate:900}})
    if (!response.ok) return NextResponse.json({error:'AniList unavailable'},{status:502})
    const json = await response.json()
    return NextResponse.json(json.data?.Page?.media ?? [])
  } catch { return NextResponse.json({error:'AniList unavailable'},{status:502}) }
}
