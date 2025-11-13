import React from "react";
import useCountUp from "../hooks/useCountUp.jsx";
import "../styles/stats.css";

export default function StatsStrip(){
  const a = useCountUp(50000, 1600);
  const b = useCountUp(230000000, 1600);
  const c = useCountUp(193, 1600);
  return (
    <section className="stats">
      <div className="stat"><div className="num">{a.toLocaleString()}</div><div className="lbl">Global Brands</div></div>
      <div className="stat"><div className="num">{b.toLocaleString()}</div><div className="lbl">Messages Processed</div></div>
      <div className="stat"><div className="num">{c}</div><div className="lbl">Countries</div></div>
    </section>
  );
}
