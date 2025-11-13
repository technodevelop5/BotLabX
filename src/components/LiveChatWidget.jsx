import React, { useState } from "react";
import "../styles/chat.css";

export default function LiveChatWidget(){
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{from:'bot', text:'Hi — try typing "pricing" or "demo".'}]);
  const [text, setText] = useState('');
  function send(){
    if(!text.trim()) return;
    const txt = text.trim();
    setMessages([...messages, {from:'user', text:txt}]);
    setText('');
    // Simple simulated reply
    setTimeout(()=> {
      let reply = "Sorry, I didn't understand. Try 'pricing' or 'features'.";
      if(/price|plan/i.test(txt)) reply = "We have Starter (€19), Pro (€49), Enterprise — request demo.";
      if(/demo|try/i.test(txt)) reply = "Open the demo in the top right — or request a demo and we'll schedule one!";
      setMessages(m=>[...m, {from:'bot', text:reply}]);
    }, 800);
  }
  return (
    <div className={`chat-widget ${open? 'open':''}`}>
      <div className="chat-toggle" onClick={()=>setOpen(o=>!o)}>
        {open ? '✕' : 'Chat with demo'}
      </div>
      {open && (
        <div className="chat-panel">
          <div className="chat-header">BotAIMS — Demo Bot</div>
          <div className="chat-history">
            {messages.map((m,i)=> <div key={i} className={`chat-msg ${m.from}`}>{m.text}</div>)}
          </div>
          <div className="chat-input">
            <input value={text} onChange={e=>setText(e.target.value)} placeholder="Say hello..." onKeyDown={e=>e.key==='Enter' && send()} />
            <button onClick={send}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}
