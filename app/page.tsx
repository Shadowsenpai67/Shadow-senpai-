'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

type Anime={id:number;title:{romaji?:string;english?:string};coverImage:{extraLarge?:string;large?:string};averageScore?:number;episodes?:number;genres:string[];format?:string}

export default function Home(){
 const [items,setItems]=useState<Anime[]>([])
 const [loading,setLoading]=useState(true)
 useEffect(()=>{fetch('/api/anilist').then(r=>r.json()).then(d=>Array.isArray(d)&&setItems(d)).finally(()=>setLoading(false))},[])
 return <main className="shell">
  <nav className="nav"><Link className="brand" href="/">SHADOW <span>SENPAI</span></Link><div className="navlinks"><Link href="/">Home</Link><a href="#browse">Browse</a><a href="#anime">Anime</a><a href="#legal">How it works</a></div><div className="search"><input placeholder="Search anime, movies..." aria-label="Search"/></div></nav>
  <section className="hero"><div className="eyebrow">Stream smarter · discover more</div><h1>Your next obsession starts here.</h1><p>Discover anime, movies and animation in one beautifully focused streaming hub. Metadata is powered by public APIs, while playback is reserved for content you are authorized to stream.</p><div className="actions"><a className="btn primary" href="#anime">Explore catalog</a><a className="btn secondary" href="#legal">How streaming works</a></div></section>
  <section className="content" id="anime"><div className="sectionhead"><h2>Popular anime</h2><span>Powered by AniList</span></div>{loading?<div className="loading">Loading the catalog…</div>:<div className="grid">{items.map(a=><article className="card" key={a.id}><div className="poster">{a.coverImage?.extraLarge&&<img src={a.coverImage.extraLarge} alt=""/>}</div><div className="cardbody"><div className="title">{a.title.english||a.title.romaji}</div><div className="meta">{a.format||'ANIME'} · {a.episodes||'?'} eps · {a.averageScore?`${a.averageScore}%`:''}</div></div></article>)}</div>}
   <div className="sectionhead" id="browse"><h2>Watch legally</h2><span>Real playback, not a mockup</span></div><article className="card" id="legal" style={{padding:24}}><div className="title" style={{fontSize:20}}>Public-domain & licensed playback</div><div className="meta" style={{fontSize:14,lineHeight:1.7}}>This platform can play direct HLS/MP4 sources that you own, license, or are authorized to embed. It does not scrape or bypass paid services. Add your approved media URL to the player route and the same interface can handle adaptive video playback.</div><div className="actions"><Link className="btn primary" href="/watch">Open demo player</Link></div></article>
  </section>
 </main>
}
