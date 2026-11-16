/* core/net.js — the stakeholder network's behaviour (Brief 03 Act 02), moved here unchanged from work/airport/index.html's inline
   script so every page that shows the network runs the same code (v1.2.0, V120-Q26): canvas rings and their labels from 768, hover
   and focus highlights, the node card, the phone bottom sheet, the ring list, a redraw on language change, and the open node kept
   across a reload in the page's own store. Styles: shared/net.css. init({ store }) takes the page's session store
   (core/carousel.js sessionStore); without one, nothing is kept. */
const NOOP = { get() { return null; }, set() {} };

export function init({ store = NOOP } = {}) {
  const root = document.querySelector('[data-net]'); if(!root) return;
  const stage = root.querySelector('.net__stage'), cv = root.querySelector('.net__canvas'), ctx = cv.getContext('2d');
  const card = root.querySelector('.net__card'), sheet = root.querySelector('.net__sheet'), backdrop = root.querySelector('.net__backdrop');
  const chips = [...root.querySelectorAll('.net__chip')];
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  const SECT = { af:[95,178], ops:[-62,92], com:[188,245], ds:[255,305] };       // degrees, maths orientation
  const RING = { strong:.42, medium:.61, weak:.77, ext:.92 };
  const LW = { strong:3, medium:2, weak:1.2, ext:1.1 };
  const TIER2 = new Set(['bil','arc','its']);   // the areas a reader should open after mine
  const LINKS = [["inn", "bil"], ["inn", "fc"], ["inn", "arc"], ["inn", "its"], ["its", "arc"], ["inn", "ter"], ["bil", "fc"], ["bil", "arc"], ["bil", "prc"], ["aop", "ter"], ["cx", "ter"], ["prc", "ext_col"], ["prc", "ext_gw"], ["arc", "ext_gw"], ["ter", "ext_flow"], ["ter", "ext_secp"], ["com", "ext_air"], ["bil", "ext_reg"], ["ter", "ext_pax"]];
  const nodes = chips.map(c => ({ id:c.dataset.netId, office:c.dataset.office, ring:c.dataset.ring, chip:c,
    phase:Math.random()*6.28, amp:2+Math.random()*2, speed:.6+Math.random()*.5 }));
  const byId = Object.fromEntries(nodes.map(n=>[n.id,n]));
  let W=0, H=0, cx=0, cy=0, R=0, compact=false, hover=null, active=null, dpr=1, visible=true;
  const txt = sel => (root.querySelector(sel)||{}).textContent || '';
  const col = v => getComputedStyle(root).getPropertyValue(v).trim();
  function rgba(hex,a){ const h=hex.replace('#',''); const n=parseInt(h.length===3?h.split('').map(x=>x+x).join(''):h,16); return `rgba(${n>>16&255},${n>>8&255},${n&255},${a})`; }
  function ink(a){ return `rgba(${col('--ink')},${a})`; }
  function layout(){
    const r = cv.getBoundingClientRect(); W = r.width; H = r.height; dpr = window.devicePixelRatio||1;
    cv.width = Math.round(W*dpr); cv.height = Math.round(H*dpr); ctx.setTransform(dpr,0,0,dpr,0,0);
    compact = W < 560; const side = W >= 1000; root.toggleAttribute('data-side', side); cx = side ? (W - 340)/2 : W/2; cy = H/2; R = Math.min(cx, H*.5) * (compact ? .96 : .92);
    for(const off of Object.keys(SECT)){
      const [a0,a1] = SECT[off];
      for(const ring of Object.keys(RING)){
        const mine = nodes.filter(n=>n.office===off && n.ring===ring);
        mine.forEach((n,i)=>{ const a=(a0+(a1-a0)*(i+1)/(mine.length+1))*Math.PI/180;
          n.x = cx + Math.cos(a)*R*RING[ring]; n.y = cy - Math.sin(a)*R*RING[ring]; n.a=a; });
      }
    }
    const pos = {}; nodes.forEach(n=>pos[n.id]=[Math.round(n.x),Math.round(n.y)]); cv.dataset.pos = JSON.stringify(pos);
    cv.dataset.geo = JSON.stringify({ cx:Math.round(cx), cy:Math.round(cy), R:Math.round(R) });
    const rr = {}; nodes.forEach(n=>rr[n.id]=rad(n)); cv.dataset.r = JSON.stringify(rr);
  }
  function rad(n){ const base = compact ? {strong:7,medium:6,weak:5,ext:4.5} : (W < 860 ? {strong:26,medium:25,weak:23,ext:21} : {strong:31,medium:29,weak:27,ext:24}); return base[n.ring]; }
  function offCol(o){ return col('--net-'+o) || '#A100FF'; }
  function curve(x1,y1,x2,y2,stroke,lw,dash,bend){
    const mx=(x1+x2)/2, my=(y1+y2)/2, dx=x2-x1, dy=y2-y1, L=Math.hypot(dx,dy)||1;
    ctx.beginPath(); ctx.moveTo(x1,y1); ctx.quadraticCurveTo(mx-dy/L*bend, my+dx/L*bend, x2,y2);
    ctx.setLineDash(dash?[5,5]:[]); ctx.strokeStyle=stroke; ctx.lineWidth=lw; ctx.stroke(); ctx.setLineDash([]);
  }
  function label(n,x,y,r){
    if(compact) return;
    const t = (n.chip.querySelector('.net__lt')||{}).textContent||''; const sp=t.indexOf(' ');
    const lines = (sp===-1 || t.length<11) ? [t] : [t.slice(0,sp), t.slice(sp+1)];
    let fs = n.ring==='ext' ? 10.5 : 11; ctx.font = `600 ${fs}px Archivo, Arial, sans-serif`; ctx.textAlign='center'; ctx.textBaseline='middle';
    const wmax = Math.max(...lines.map(l=>ctx.measureText(l).width)), room = 2*r - 6;          // longer names (ES) shrink to fit their circle
    if(wmax > room){ fs = Math.max(8, fs*room/wmax); ctx.font = `600 ${fs}px Archivo, Arial, sans-serif`; }
    ctx.fillStyle = col('--color-brand-white'); const lh=fs*1.25, y0=y-(lines.length-1)*lh/2;
    lines.forEach((ln,i)=>ctx.fillText(ln,x,y0+i*lh));
  }
  function draw(ts){
    const t = reduce.matches ? 0 : ts/1000;
    ctx.clearRect(0,0,W,H);
    // rings and their labels
    Object.entries(RING).forEach(([ring,f])=>{
      ctx.beginPath(); ctx.arc(cx,cy,R*f,0,Math.PI*2); ctx.setLineDash(ring==='ext'?[2,6]:[]); ctx.strokeStyle=ink(.16); ctx.lineWidth=1; ctx.stroke(); ctx.setLineDash([]);
      if(!compact){ ctx.font='600 9.5px Archivo, Arial, sans-serif'; ctx.textAlign='center'; ctx.textBaseline='alphabetic'; ctx.fillStyle=ink(.55);
        const lab = root.querySelectorAll('.net__l-ring')[Object.keys(RING).indexOf(ring)]; ctx.fillText((lab?lab.textContent:'').toUpperCase(), cx, cy-R*f-7); }
    });
    // office labels on the outer edge
    if(!compact) Object.entries(SECT).forEach(([o,[a0,a1]])=>{
      const a=((a0+a1)/2)*Math.PI/180, rr=R*1.0; let x=cx+Math.cos(a)*rr, y=cy-Math.sin(a)*rr*.98;
      ctx.font='700 11px Archivo, Arial, sans-serif'; const lbl = txt('.net__l-off--'+o).toUpperCase(), lw = ctx.measureText(lbl).width;
      let lx = Math.cos(a)>.2 ? x : (Math.cos(a)<-.2 ? x - lw : x - lw/2);
      if(o==='ds' && byId.inn){ const ai = byId.inn.a, rl = R*.69;   // on my node's ray, inside the medium–weak band
        const px = cx + Math.cos(ai)*rl, py = cy - Math.sin(ai)*rl; lx = px - lw/2; y = py + 4; cv.dataset.dsLabel = JSON.stringify([Math.round(px), Math.round(py)]); }
      lx = Math.max(8, Math.min(lx, W - 8 - lw));   // keep inside the canvas
      ctx.textAlign='left'; ctx.fillStyle=col('--net-'+o+'-text') || offCol(o); ctx.fillText(lbl, lx, y);
    });
    const P = n => [n.x, n.y + Math.sin(t*n.speed+n.phase)*(compact?0:n.amp)];
    const hot = new Set(); const focus = active||hover;
    if(focus){ hot.add(focus.id); LINKS.forEach(([a,b])=>{ if(a===focus.id) hot.add(b); if(b===focus.id) hot.add(a); }); }
    // centre spokes for internal nodes
    nodes.filter(n=>n.ring!=='ext').forEach(n=>{ const [x,y]=P(n); const on = focus && focus.id===n.id;
      curve(cx,cy,x,y, rgba(offCol(n.office), on?.95:(focus?.18:.55)), LW[n.ring]*(on?1.5:1), n.ring==='weak', 0); });
    // cross links
    LINKS.forEach(([a,b])=>{ const A=byId[a], B=byId[b]; if(!A||!B) return; const [x1,y1]=P(A), [x2,y2]=P(B);
      const on = focus && (focus.id===a||focus.id===b); const ext = A.ring==='ext'||B.ring==='ext';
      curve(x1,y1,x2,y2, ink(on?.85:(focus?.08:(ext?.32:.28))), on?2.4:(ext?1.1:1.4), ext||A.ring==='weak'||B.ring==='weak', 14); });
    // nodes
    nodes.forEach(n=>{ const [x,y]=P(n); const r=rad(n); const c = n.ring==='ext' ? col('--color-brand-white') : offCol(n.office);
      const on = focus && focus.id===n.id, dim = focus && !hot.has(n.id);
      if(!compact){ const g=ctx.createRadialGradient(x,y,r*.2,x,y,r*2.1); g.addColorStop(0, rgba(c.startsWith('#')?c:'#A100FF', on?.5:(n.id==='inn'?.35:(TIER2.has(n.id)?.27:.14)))); g.addColorStop(1,'rgba(0,0,0,0)');
        ctx.beginPath(); ctx.arc(x,y,r*2.1,0,Math.PI*2); ctx.fillStyle=g; ctx.fill(); }
      ctx.globalAlpha = dim ? .35 : 1;
      ctx.beginPath(); ctx.arc(x,y,r*(on?1.12:1),0,Math.PI*2); ctx.fillStyle = n.id==='inn' ? rgba('#A100FF',.22) : col('--color-brand-black'); ctx.fill();
      ctx.setLineDash(n.ring==='ext'||n.ring==='weak'?[4,4]:[]); ctx.strokeStyle = n.ring==='ext' ? ink(.7) : c; ctx.lineWidth = on?2.4:(n.ring==='strong'?1.8:1.3); ctx.stroke(); ctx.setLineDash([]);
      if(n.id==='inn' && !compact){ ctx.beginPath(); ctx.arc(x,y,r+6,0,Math.PI*2); ctx.setLineDash([3,5]); ctx.strokeStyle=rgba('#A100FF',.7); ctx.lineWidth=1; ctx.stroke(); ctx.setLineDash([]); }
      if(TIER2.has(n.id) && !compact){ ctx.beginPath(); ctx.arc(x,y,r+5,0,Math.PI*2); ctx.strokeStyle=rgba('#A100FF',.75); ctx.lineWidth=1.4; ctx.stroke(); }
      label(n,x,y,r); ctx.globalAlpha = 1; n.rx=x; n.ry=y; n.r=r; });
    // centre
    const pr = compact?20:56;   /* the centre's pulse retired (decoration spec D04): one ambient motion per component */
    const g=ctx.createRadialGradient(cx,cy,0,cx,cy,pr*1.6); g.addColorStop(0,'rgba(161,0,255,.22)'); g.addColorStop(1,'rgba(0,0,0,0)');
    ctx.beginPath(); ctx.arc(cx,cy,pr*1.6,0,Math.PI*2); ctx.fillStyle=g; ctx.fill();
    ctx.beginPath(); ctx.arc(cx,cy,pr,0,Math.PI*2); ctx.fillStyle=col('--surface-card'); ctx.fill(); ctx.strokeStyle='#A100FF'; ctx.lineWidth=2.4; ctx.stroke();
    if(!compact){ ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.font='800 13px Archivo, Arial, sans-serif'; ctx.fillStyle=col('--color-purple-light');
      ctx.fillText(txt('.net__l-centre'), cx, cy); }
  }
  /* Frames only while the map is on screen; phones never bob, so they draw once and then on demand. */
  let running = false;
  function loop(ts){ running = false; if(!visible || reduce.matches) return; draw(ts||0); if(compact) return; running = true; requestAnimationFrame(loop); }
  function start(){ if(!running && !reduce.matches){ running = true; requestAnimationFrame(loop); } }
  function fill(box, n){
    const m = n.chip.parentElement.querySelector('.net__meta');
    box.querySelector('.net__card-path').textContent = m.querySelector('.net__m-path').textContent;
    box.querySelector('.net__card-t').textContent = n.chip.querySelector('.net__lt').textContent;
    box.querySelector('.net__card-role').textContent = m.querySelector('.net__m-role').textContent;
    box.querySelector('.net__card-x').textContent = m.querySelector('.net__m-x').textContent;
  }
  function placeCard(n){
    const cw = card.offsetWidth || 300, ch = card.offsetHeight || 160;
    const top = Math.max(16, Math.min(n.y - ch/2, H - ch - 16));
    if(cx + R + 24 + cw < W - 16){ card.style.left = (W - cw - 20)+'px'; card.style.top = top+'px'; return; }
    const left = n.x >= cx ? 16 : W - cw - 16;   // the side opposite the node
    card.style.left = left+'px'; card.style.top = top+'px';
  }
  const mqPhone = window.matchMedia('(max-width:767px)'), mobile = () => mqPhone.matches;
  function showSheet(on){ sheet.classList.toggle('is-open', on); backdrop.classList.toggle('is-open', on); sheet.setAttribute('aria-hidden', String(!on)); }
  // crossing the phone breakpoint with an area open moves it to the other variant: sheet ⇄ card beside its node
  mqPhone.addEventListener('change', ()=>{ const n = active; if(!n) return;
    if(mobile()){ card.hidden = true; fill(sheet,n); showSheet(true); }
    else { showSheet(false); requestAnimationFrame(()=>{ layout(); fill(card,n); card.hidden = false; placeCard(n); draw(performance.now()); }); } });
  function open(n, from){
    active = n; root.dataset.active = n.id; store.set('net', n.id); chips.forEach(c=>c.setAttribute('aria-pressed', String(c===n.chip)));
    if(mobile()){ fill(sheet,n); showSheet(true); sheet.querySelector('.net__close').focus(); }
    else { fill(card,n); card.hidden=false; placeCard(n); }
    if(reduce.matches || !running) draw(performance.now());
  }
  function close(){ const n = active; active=null; delete root.dataset.active; store.set('net', null); chips.forEach(c=>c.setAttribute('aria-pressed','false'));
    card.hidden=true; const wasSheet = sheet.classList.contains('is-open'); showSheet(false); if(wasSheet && n) n.chip.focus(); if(reduce.matches || !running) draw(performance.now()); }
  function hit(x,y){ return nodes.find(n=>Math.hypot(x-(n.rx??n.x), y-(n.ry??n.y)) < (n.r||30)+6) || null; }
  function xy(e){ const r=cv.getBoundingClientRect(); return [e.clientX-r.left, e.clientY-r.top]; }
  cv.addEventListener('mousemove', e=>{ if(compact) return; const h=hit(...xy(e)); if(h!==hover){ hover=h; cv.style.cursor=h?'pointer':'default'; if(reduce.matches || !running) draw(performance.now());} });
  cv.addEventListener('mouseleave', ()=>{ hover=null; if(reduce.matches || !running) draw(performance.now()); });
  cv.addEventListener('click', e=>{ if(compact) return; const h=hit(...xy(e)); if(!h || h===active) close(); else open(h); });
  chips.forEach(c=>{ c.setAttribute('aria-pressed','false'); c.addEventListener('click', ()=>{ const n=byId[c.dataset.netId]; if(active===n && !mobile()) close(); else open(n); });
    c.addEventListener('focus', ()=>{ if(!mobile()){ hover=byId[c.dataset.netId]; if(reduce.matches || !running) draw(performance.now());} });
    c.addEventListener('blur', ()=>{ hover=null; }); });
  root.querySelectorAll('.net__close').forEach(b=>b.addEventListener('click', close));
  backdrop.addEventListener('click', close);
  document.addEventListener('keydown', e=>{ if(e.key==='Escape' && active) close(); });
  document.addEventListener('i18n:changed', ()=>{ if(active){ fill(mobile()?sheet:card, active);} draw(performance.now()); });
  new MutationObserver(()=>draw(performance.now())).observe(document.documentElement, { attributes:true, attributeFilter:['data-theme'] });
  new ResizeObserver(()=>{ layout(); if(active && !mobile()) placeCard(active); draw(performance.now()); }).observe(stage);
  new IntersectionObserver(es=>es.forEach(en=>{ visible = en.isIntersecting; if(visible) start(); }), {threshold:0}).observe(cv);
  reduce.addEventListener('change', ()=>{ if(!reduce.matches) start(); else draw(0); });
  document.body.append(backdrop, sheet);   // at the document root, as in jdigital: no animated ancestor can trap the fixed layers
  layout(); draw(0); start();
  if(document.fonts) document.fonts.load('600 11px Archivo').then(()=>{ layout(); draw(performance.now()); }, ()=>{});   // labels are measured: redo once the face is in
  { const sv = store.get('net'); if(sv && byId[sv]) open(byId[sv]); }   // a reload keeps the open card or sheet
}
