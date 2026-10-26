import Link from "next/link";

const picks = [
 {n:"01",title:"Anime wall art & posters",desc:"Look for licensed prints, clear sizing information, and seller reviews before ordering.",category:"ROOM SETUP"},
 {n:"02",title:"Manga shelves & bookends",desc:"Space-saving storage ideas for manga collections, graphic novels and art books.",category:"COLLECTOR DESK"},
 {n:"03",title:"Figures & collectibles",desc:"Check scale, licensing, product photos and seller reputation to avoid counterfeit items.",category:"COLLECTOR FINDS"},
 {n:"04",title:"Everyday anime accessories",desc:"Bags, keychains, phone accessories and stationery inspired by your favourite genres.",category:"DAILY CARRY"},
 {n:"05",title:"Cosplay basics",desc:"Wigs, fabric, safe props and beginner-friendly costume accessories. Check size charts carefully.",category:"COSPLAY"},
 {n:"06",title:"Manga & official releases",desc:"Prioritise official publishers and licensed stores; compare edition, language and shipping cost.",category:"READING LIST"},
];

export default function MerchPicks() {
 return <main className="site-shell"><div className="announcement">THE OTAKU FINDS <span>✦</span> SHOP SMART, COLLECT HAPPY</div><header className="nav"><Link className="brand" href="/">ANIME WORLD <span>✦</span><small>OTAKU CENTRAL</small></Link><nav className="nav-links"><Link href="/">Home</Link><Link href="/anime">Anime hub</Link><Link href="/news">News & guides</Link><Link className="active" href="/merch">Merch picks</Link></nav><Link className="nav-cta" href="/anime">Explore anime <span>↗</span></Link></header>
 <section className="page-hero"><span className="section-kicker">CURATED OTaku FINDS</span><h1>YOUR FANDOM.<br/>YOUR <span>FINDS.</span></h1><p>Merchandise ideas for anime fans, from manga shelves to licensed collectibles. We have not added unverified shopping links: this page is ready for eligible affiliate links once programmes and payment compatibility are confirmed.</p></section>
 <section className="content-grid">{picks.map(p=><article className="content-card" key={p.n}><span className="index">PICK / {p.n}</span><h3>{p.title}</h3><span className="pill">{p.category}</span><p>{p.desc}</p><div className="article-note">Affiliate link pending verification</div></article>)}</section>
 <div className="disclaimer-box"><strong>Affiliate disclosure:</strong> Some links may become affiliate links, which means this site could earn a commission if you buy through them, at no extra cost to you. No paid links are active on this starter page. We will only add programmes that accept eligible publishers and have payment methods compatible with the owner's account. Always check shipping availability, import duties, seller ratings and the product's licensing.</div>
 <footer className="footer"><Link className="brand footer-brand" href="/">ANIME WORLD <span>✦</span><small>OTAKU CENTRAL</small></Link><p>Made for fans. Built for discovery.</p><div><Link href="/anime">Anime hub</Link><Link href="/news">News & guides</Link><Link href="/merch">Merch picks</Link></div><small>Independent fan site. Not affiliated with any anime studios or rights holders.</small></footer></main>;
}