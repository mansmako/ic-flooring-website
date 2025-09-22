// Minimal client-side placeholder for a future chatbot integration.
(function(){
  const btn = document.createElement('button');
  btn.textContent = 'Chat';
  btn.setAttribute('aria-label','Open chat');
  Object.assign(btn.style, {
    position: 'fixed', right: '20px', bottom: '20px', zIndex: 9999,
    padding: '12px 16px', borderRadius: '999px', border: '1px solid #ddd', background: '#fff'
  });
  const panel = document.createElement('div');
  Object.assign(panel.style, {
    position: 'fixed', right: '20px', bottom: '70px', width: '320px', height: '420px',
    background: '#fff', border: '1px solid #e5e5e5', borderRadius: '14px', boxShadow:'0 10px 30px rgba(0,0,0,.08)',
    overflow: 'hidden', display: 'none', zIndex: 9998
  });
  panel.innerHTML = '<div style="padding:12px;border-bottom:1px solid #eee;font-weight:600">IC Flooring Assistant</div><div id="chatlog" style="padding:12px;height:320px;overflow:auto;font-size:14px;color:#333"><div>Hello! Ask about services, call‑out fee, or request a quote.</div></div><div style="display:flex;gap:6px;padding:12px;border-top:1px solid #eee"><input id="chatinput" placeholder="Type a message..." style="flex:1;padding:10px;border:1px solid #ddd;border-radius:10px"/><button id="chatsend" style="padding:10px 12px;border-radius:10px;border:1px solid #ddd;background:#fafafa">Send</button></div>';
  document.body.appendChild(btn);
  document.body.appendChild(panel);

  btn.addEventListener('click', ()=>{
    panel.style.display = (panel.style.display==='none' ? 'block' : 'none');
  });

  panel.querySelector('#chatsend').addEventListener('click', ()=>{
    const input = panel.querySelector('#chatinput');
    const log = panel.querySelector('#chatlog');
    const q = input.value.trim();
    if(!q) return;
    const add = (msg, who) => {
      const d = document.createElement('div');
      d.textContent = (who==='you' ? 'You: ' : '') + msg;
      d.style.margin = '6px 0';
      if (who==='you') d.style.color = '#555';
      log.appendChild(d);
      log.scrollTop = log.scrollHeight;
    };
    add(q, 'you');
    // canned responses (static)
    if (/quote|price|cost/i.test(q)) add('You can request a quote via the Get a Quote page. We include site assessment, system spec, and a written quotation.', 'bot');
    else if (/call.?out/i.test(q)) add('Our call‑out fee includes on‑site assessment (up to 90 min), tests where applicable, and a written quotation.', 'bot');
    else if (/service|epoxy|polyurethane|concrete/i.test(q)) add('We install epoxy, polyurethane, and polished concrete systems. Tell us the sector and traffic and we’ll recommend a system.', 'bot');
    else add('Thanks! A specialist will get back to you soon.' , 'bot');
    input.value='';
  });
})();
