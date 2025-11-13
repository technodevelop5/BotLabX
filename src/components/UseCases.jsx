import React from "react";
import "../styles/usecases.css";

const cases = ["E-commerce", "Support", "Education", "Healthcare", "Finance", "Retail"];

export default function UseCases(){
  return (
    <section id="usecases" className="usecases">
      <h2>Use cases</h2>
      <div className="use-scroll">
        {cases.map((c,i)=> <div className="use-card" key={i}>{c}</div>)}
      </div>
    </section>
  );
}
