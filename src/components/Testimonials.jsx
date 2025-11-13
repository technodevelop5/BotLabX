import React, { useState, useEffect } from "react";
import "../styles/testimonials.css";

const items = [
  {name:"Sophie - UX Lead", text:"We doubled our conversion after A/B testing two variants."},
  {name:"Carlos - Product", text:"Easy to setup experiments and exportable reports saved us weeks."},
  {name:"Amina - Researcher", text:"Love the visual editor and integrated SUS scoring."}
];

export default function Testimonials(){
  const [i, setI] = useState(0);
  useEffect(()=> {
    const t = setInterval(()=> setI(x=> (x+1)%items.length), 4500);
    return ()=>clearInterval(t);
  },[]);
  return (
    <section className="testimonials">
      <h2>What customers say</h2>
      <div className="test-card">
        <p className="test-quote">“{items[i].text}”</p>
        <div className="test-author">{items[i].name}</div>
      </div>
      <div className="test-controls">
        {items.map((_,idx)=> <button key={idx} className={`dot ${idx===i?'active':''}`} onClick={()=>setI(idx)} />)}
      </div>
    </section>
  );
}
