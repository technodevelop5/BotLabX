import React, { useEffect, useRef } from "react";
import "../styles/how.css";

const steps = [
  {title:"Plan the experiment", text:"Choose demographics, surveys, and randomization."},
  {title:"Design the bot", text:"Use visual editor or connect external bot."},
  {title:"Collect & analyze", text:"Real data, SUS/CUQ metrics, exportable reports."}
];

export default function HowItWorks(){
  const ref = useRef();
  useEffect(()=>{
    const node = ref.current;
    const io = new IntersectionObserver(entries=>{
      entries.forEach(e=>{
        if(e.isIntersecting) e.target.classList.add('reveal');
      });
    }, {threshold:0.2});
    node.querySelectorAll('.how-card').forEach(c=>io.observe(c));
    return ()=>io.disconnect();
  },[]);
  return (
    <section id="how" className="how" ref={ref}>
      <h2>How it works</h2>
      <div className="how-grid">
        {steps.map((s,i)=>(
          <div className="how-card" key={i}>
            <div className="step-num">{i+1}</div>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
