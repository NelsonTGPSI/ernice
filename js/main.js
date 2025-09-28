const PRODUCTS = [
  { id: 'p1', title: 'Dell Inspiron 3530 i3 1305U', price: 150000, brand: 'Dell', category: 'Laptop', images: ['img/Dell Inspiron 3530 i3 1305U.jpeg'], desc: 'Dell Inspiron 3530 i3 1305U.' },
  { id: 'p2', title: 'Dell Latitude 5300 7300 series  i5 8-11gen 8-16GB 256SSD  Touch mostly', price: 170000, brand: 'Dell', category: 'Laptop', images: ['img/Dell Latitude 5300 7300 series  i5 8-11gen 8-16GB 256SSD  Touch mostly.webp'], desc: 'Dell Latitude 5300 7300 series i5.' },
  { id: 'p3', title: 'Dell Precision 5530 Laptop – 15 i7-8850H  16 GB RAM  256 GB SSD', price: 220000, brand: 'Dell', category: 'Laptop', images: ['img/Dell Precision 5530 Laptop – 15 i7-8850H  16 GB RAM  256 GB SSD.webp'], desc: 'Dell Precision 5530 Laptop.' },
  { id: 'p4', title: 'HP EliteBook 840 G5 Laptop – 14 i5-8350U  8 GB RAM  256 GB SSD', price: 160000, brand: 'HP', category: 'Laptop', images: ['img/HP EliteBook 840 G5 Laptop – 14 i5-8350U  8 GB RAM  256 GB SSD.webp'], desc: 'HP EliteBook 840 G5 Laptop.' },
  { id: 'p5', title: 'HP EliteBook 840 G7 14 Laptop  i5-10210U  8GB  256GB SSD  Used  A', price: 175000, brand: 'HP', category: 'Laptop', images: ['img/HP EliteBook 840 G7 14 Laptop  i5-10210U  8GB  256GB SSD  Used  A.webp'], desc: 'HP EliteBook 840 G7 14 Laptop.' },
  { id: 'p6', title: 'HP ProBook 650 G4, G5, Core i5-8th, 256 SSD; 8 GB', price: 145000, brand: 'HP', category: 'Laptop', images: ['img/HP ProBook 650 G4, G5, Core i5-8th, 256 SSD; 8 GB.webp'], desc: 'HP ProBook 650 G4, G5.' },
  { id: 'p7', title: 'HP ProBook 650 G5 Laptop – 15 i5-8250U  8 GB RAM  256 GB SSD', price: 155000, brand: 'HP', category: 'Laptop', images: ['img/HP ProBook 650 G5 Laptop – 15 i5-8250U  8 GB RAM  256 GB SSD.webp'], desc: 'HP ProBook 650 G5 Laptop.' },
  { id: 'p8', title: 'Lenovo ThinkPad 14 ARP Ryzen 7 16GB 512GB SSD', price: 180000, brand: 'Lenovo', category: 'Laptop', images: ['img/Lenovo ThinkPad 14 ARP Ryzen 7 16GB 512GB SSD.jpeg'], desc: 'Lenovo ThinkPad 14 ARP Ryzen 7.' },
  { id: 'p9', title: 'LENOVO ThinkPad P50 15.6 Laptop  Intel Core i7-6820HQ  16GB  256GB SSD', price: 185000, brand: 'Lenovo', category: 'Laptop', images: ['img/LENOVO ThinkPad P50 15.6 Laptop  Intel Core i7-6820HQ  16GB  256GB SSD.webp'], desc: 'LENOVO ThinkPad P50 15.6.' },
  { id: 'p10', title: 'Lenovo ThinkPad T495 Laptop  14  AMD Ryzen 3 Pro 3300U  8GB  256GB SSD  Full HD', price: 140000, brand: 'Lenovo', category: 'Laptop', images: ['img/Lenovo ThinkPad T495 Laptop  14  AMD Ryzen 3 Pro 3300U  8GB  256GB SSD  Full HD.webp'], desc: 'Lenovo ThinkPad T495 Laptop.' },
  { id: 'p11', title: 'Lenovo-Thinkpad-L440-L450-L460-L470-i5-4-8GB-128-256SSD', price: 130000, brand: 'Lenovo', category: 'Laptop', images: ['img/Lenovo-Thinkpad-L440-L450-L460-L470-i5-4-8GB-128-256SSD.webp'], desc: 'Lenovo Thinkpad L440-L470.' }
];

let state = { products: PRODUCTS.slice(), filters: { category:'all', brand:'all', q:'' }, sort:'relevance', cart: JSON.parse(localStorage.getItem('ernice_cart') || '[]'), compare: [] };

const el = id => document.getElementById(id);
const formatMoney = n => n.toLocaleString('pt-PT') + ' AOA';

const translations = {
  en: {
    heroTitle: "Ergonomic and reliable computers and components — local support in Angola.",
    heroDesc: "Solutions for companies, gamers and creators. Assembly, warranty and local technical support.",
    catalog: "See catalog",
    contact: "Contact",
    cart: "Order/Reserve",
    finalize: "Finish order",
    clear: "Clear",
    noResults: "No products found.",
    promo: "🔥 Promotion: SSDs 10% off this week! 🔥",
    view: "View",
    order: "Order",
    nav_products: "Products",
    nav_services: "Services",
    nav_about: "About",
    nav_contacts: "Contacts",
    usp1: "✅ Local warranty",
    usp2: "🛠 Support",
    usp3: "🚚 Delivery in Luanda",
    category: "Category",
    brand: "Brand",
    sort: "Sort",
    all: "All",
    relevance: "Relevance",
    price_asc: "Price ↑",
    price_desc: "Price ↓",
    compare_title: "Quick compare",
    about_title: "About Ernice",
    about_desc: "Angolan company dedicated to selling computers and components with a focus on trust, fair price and local support.",
    services_title: "Services",
    service1: "Custom assembly",
    service2: "Technical support",
    service3: "Upgrades and optimization",
    news_title: "Latest news",
    news1_title: "New Ernice Pro line",
    news1_desc: "Computers with local warranty and dedicated support.",
    news2_title: "SSD Promotion",
    news2_desc: "Discounts on SSDs this week.",
    contacts_title: "Contacts",
    contacts_desc: "Visit the store or send a message.",
    contacts_address: "📍 Luanda — (example)",
    contacts_phone: "📞 +244 9xx xxx xxx",
    contacts_email: "✉️ geral@ernice.ao",
    send_message: "Send message",
    name_placeholder: "Name",
    email_placeholder: "Email",
    message_placeholder: "Message",
    send: "Send",
    cart: "Order/Reserve",
    total: "Total",
    finalize: "Finish order",
    clear: "Clear",
    compare_select: "Select at least two products to compare."
  },
  pt: {
    heroTitle: "Computadores e componentes ergonómicos e confiáveis — apoio local em Angola.",
    heroDesc: "Soluções para empresas, gamers e criadores. Montagem, garantia e assistência técnica local.",
    catalog: "Ver catálogo",
    contact: "Contactar",
    cart: "Pedido/Reserva",
    finalize: "Finalizar pedido",
    clear: "Limpar",
    noResults: "Nenhum produto encontrado.",
    promo: "🔥 Promoção: SSDs com 10% desconto esta semana! 🔥",
    view: "Ver",
    order: "Fazer pedido",
    nav_products: "Produtos",
    nav_services: "Serviços",
    nav_about: "Sobre",
    nav_contacts: "Contactos",
    usp1: "✅ Garantia local",
    usp2: "🛠 Assistência",
    usp3: "🚚 Entregas em Luanda",
    category: "Categoria",
    brand: "Marca",
    sort: "Ordenar",
    all: "Todas",
    relevance: "Relevância",
    price_asc: "Preço ↑",
    price_desc: "Preço ↓",
    compare_title: "Comparador rápido",
    about_title: "Sobre a Ernice",
    about_desc: "Empresa angolana dedicada à venda de computadores e componentes com enfoque em confiança, preço justo e assistência local.",
    services_title: "Serviços",
    service1: "Montagem personalizada",
    service2: "Assistência técnica",
    service3: "Upgrades e optimização",
    news_title: "Últimas notícias",
    news1_title: "Nova linha Ernice Pro",
    news1_desc: "Computadores com garantia local e suporte dedicado.",
    news2_title: "Promoção SSDs",
    news2_desc: "Descontos em SSDs durante a semana.",
    contacts_title: "Contactos",
    contacts_desc: "Visite a loja ou envie uma mensagem.",
    contacts_address: "📍 Luanda — (exemplo)",
    contacts_phone: "📞 +244 9xx xxx xxx",
    contacts_email: "✉️ geral@ernice.ao",
    send_message: "Enviar mensagem",
    name_placeholder: "Nome",
    email_placeholder: "Email",
    message_placeholder: "Mensagem",
    send: "Enviar",
    cart: "Pedido/Reserva",
    total: "Total",
    finalize: "Finalizar pedido",
    clear: "Limpar",
    compare_select: "Selecione pelo menos dois produtos para comparar."
  }
};
let currentLang = "pt";

function showToast(msg) {
  const toast = el('toast');
  toast.textContent = msg;
  toast.classList.remove('hidden');
  toast.style.opacity = '1';
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.classList.add('hidden'), 400);
  }, 1800);
}

let fuse;
function init(){
  populateFilters();
  setupFuse();
  renderProducts();
  setupEvents();
  updateCartUI();
}

function populateFilters(){
  const cats = Array.from(new Set(PRODUCTS.map(p=>p.category)));
  const brands = Array.from(new Set(PRODUCTS.map(p=>p.brand)));
  const catSelect = el('categoria');
  const brandSelect = el('marca');
  cats.forEach(c => { let opt=document.createElement('option'); opt.value=c; opt.textContent=c; catSelect.appendChild(opt)});
  brands.forEach(b => { let opt=document.createElement('option'); opt.value=b; opt.textContent=b; brandSelect.appendChild(opt)});
}

function setupFuse(){
  const options = { keys:['title','desc','brand','category'], threshold:0.3 };
  fuse = new Fuse(state.products, options);
}

function renderProducts(){
  if (el('loadingSpinner')) el('loadingSpinner').classList.remove('hidden');
  setTimeout(() => {
    const grid = el('productsGrid'); grid.innerHTML='';
    let list = state.products.slice();
    if(state.filters.q){
      const results = fuse.search(state.filters.q).map(r=>r.item);
      list = results;
    }
    if(state.filters.category !== 'all') list = list.filter(p=>p.category===state.filters.category);
    if(state.filters.brand !== 'all') list = list.filter(p=>p.brand===state.filters.brand);
    if(state.sort==='price-asc') list.sort((a,b)=>a.price-b.price);
    if(state.sort==='price-desc') list.sort((a,b)=>b.price-a.price);
    if(list.length===0){ el('noResults').classList.remove('hidden'); } else el('noResults').classList.add('hidden');
    list.forEach(p=>{
      const card = document.createElement('article');
      card.className='p-4 bg-white rounded-lg card-shadow transition-smooth hover:scale-[1.01] animate-fade-in';
      const rating = (Math.random()*1+4).toFixed(1);
      card.innerHTML = `
        <span class="card-rating" aria-label="Avaliação">${rating} ★</span>
        <div class="relative">
          <img src="${p.images[0]}" alt="${p.title}" class="w-full h-44 object-cover rounded-md" loading="lazy" />
          <label class="absolute top-2 left-2 bg-white/90 px-2 py-1 rounded text-xs">${p.brand}</label>
        </div>
        <h4 class="mt-3 font-semibold">${p.title}</h4>
        <div class="text-sm text-slate-500">${p.category}</div>
        <div class="mt-2 flex items-center justify-between">
          <div class="font-bold">${formatMoney(p.price)}</div>
          <div class="flex gap-2">
            <button class="px-3 py-1 rounded-md border btn-view" data-id="${p.id}" aria-label="Ver detalhes">${translations[currentLang].view}</button>
            <button class="px-3 py-1 rounded-md bg-accent text-white btn-add" data-id="${p.id}" aria-label="Fazer pedido">${translations[currentLang].order}</button>
          </div>
        </div>
        <div class="mt-2 flex items-center justify-between text-sm">
          <div><input type="checkbox" class="compare-checkbox" data-id="${p.id}" aria-label="Comparar ${p.title}" /> ${translations[currentLang].compare_title || "Comparar"}</div>
          <div class="text-xs text-slate-400">${translations[currentLang].usp3}</div>
        </div>
      `;
      grid.appendChild(card);
    });
    document.querySelectorAll('.btn-view').forEach(b=>b.addEventListener('click', e=> openProductModal(e.target.dataset.id)));
    document.querySelectorAll('.btn-add').forEach(b=>b.addEventListener('click', e=> addToCart(e.target.dataset.id)));
    document.querySelectorAll('.compare-checkbox').forEach(cb=> cb.addEventListener('change', handleCompareChange));
    if (el('loadingSpinner')) el('loadingSpinner').classList.add('hidden');
  }, 400);
}

function setupEvents(){
  el('categoria').addEventListener('change', e=> { state.filters.category = e.target.value; renderProducts(); });
  el('marca').addEventListener('change', e=> { state.filters.brand = e.target.value; renderProducts(); });
  el('sort').addEventListener('change', e=> { state.sort = e.target.value; renderProducts(); });
  el('search').addEventListener('input', e=> { state.filters.q = e.target.value; renderProducts(); });

  el('menuBtn').addEventListener('click', ()=>{ const m = el('mobileMenu'); m.classList.toggle('hidden'); menuBtnToggle(); });
  el('themeToggle').addEventListener('click', toggleTheme);

  // CORRIGIDO: Botão de comparação faz scroll e mostra toast se vazio
  el('compareBtn').addEventListener('click', ()=>{
    if(state.compare.length < 2){
      showToast(translations[currentLang].compare_select);
      return;
    }
    el('comparePanel').classList.remove('hidden');
    document.getElementById('compare').scrollIntoView({behavior:'smooth'});
  });

  el('cartBtn').addEventListener('click', ()=> toggleCart());
  el('clearCart').addEventListener('click', clearCart);
  el('checkoutBtn').addEventListener('click', checkout);

  el('closeModal').addEventListener('click', closeModal);
  el('productModal').addEventListener('click', (ev)=> { if(ev.target.id === 'productModal') closeModal(); });

  el('contactForm').addEventListener('submit', handleContactSubmit);

  el('closeCart').addEventListener('click', () => {
    el('cartPanel').classList.add('translate-x-full');
    el('cartPanel').setAttribute('aria-hidden','true');
  });

  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      el('mobileMenu').classList.add('hidden');
      menuBtnToggle();
    });
  });

  el('langToggle').addEventListener('click', ()=>{
    setLang(currentLang === "pt" ? "en" : "pt");
  });
}
function menuBtnToggle(){ const btn = document.getElementById('menuBtn'); btn.setAttribute('aria-expanded', document.getElementById('mobileMenu').classList.contains('hidden') ? 'false' : 'true'); }

function openProductModal(id){ const p = PRODUCTS.find(x=>x.id===id); if(!p) return; const modal = el('productModal'); const content = el('modalContent'); content.innerHTML = `
  <div>
    <img src="${p.images[0]}" alt="${p.title}" class="w-full h-64 object-cover rounded-md" loading="lazy" />
  </div>
  <div>
    <h3 class="text-xl font-semibold">${p.title}</h3>
    <div class="text-slate-600 mt-2">${p.brand} • ${p.category}</div>
    <div class="mt-4 font-bold text-2xl">${formatMoney(p.price)}</div>
    <p class="mt-3 text-slate-600">${p.desc}</p>
    <div class="mt-4 flex gap-2">
      <button class="px-3 py-2 rounded-md bg-accent text-white" id="modalAdd">${translations[currentLang].order}</button>
      <button class="px-3 py-2 rounded-md border" id="modalContact">${translations[currentLang].contact}</button>
    </div>
  </div>
`;
  modal.classList.remove('hidden'); modal.style.display='flex'; modal.setAttribute('aria-hidden','false');
  el('modalAdd').addEventListener('click', ()=>{ addToCart(id); closeModal(); el('cartPanel').classList.remove('translate-x-full'); });
  el('modalContact').addEventListener('click', ()=>{ alert('Contacte o vendedor pelo telefone/email.'); });
}
function closeModal(){ const modal = el('productModal'); modal.classList.add('hidden'); modal.style.display='none'; modal.setAttribute('aria-hidden','true'); }

function addToCart(id){
  const p = PRODUCTS.find(x=>x.id===id);
  if(!p) return;
  let cart = state.cart;
  let item = cart.find(i=>i.id===id);
  if(item) item.qty +=1;
  else cart.push({id:id, qty:1, title:p.title, price:p.price});
  state.cart = cart;
  localStorage.setItem('ernice_cart', JSON.stringify(cart));
  updateCartUI();
  showToast(`"${p.title}" adicionado ao pedido!`);
}
function updateCartUI(){
  const itemsDiv = el('cartItems'); itemsDiv.innerHTML='';
  let total=0;
  state.cart.forEach(i=>{
    total += i.price*i.qty;
    const row = document.createElement('div');
    row.className='flex items-center justify-between';
    row.innerHTML = `<div><div class="font-semibold">${i.title}</div><div class="text-sm text-slate-500">${i.qty} x ${formatMoney(i.price)}</div></div><div class="flex flex-col gap-1"><button class="text-sm text-indigo-600 btn-inc" data-id="${i.id}">+</button><button class="text-sm text-red-600 btn-dec" data-id="${i.id}">-</button></div>`;
    itemsDiv.appendChild(row);
  });
  el('cartTotal').textContent = formatMoney(total);
  el('cartCount').textContent = state.cart.reduce((s,i)=>s+i.qty,0);
  document.querySelectorAll('.btn-inc').forEach(b=>b.addEventListener('click', e=> changeQty(e.target.dataset.id, +1)));
  document.querySelectorAll('.btn-dec').forEach(b=>b.addEventListener('click', e=> changeQty(e.target.dataset.id, -1)));
  if (el("cartTitle")) el("cartTitle").textContent = translations[currentLang].cart;
  document.querySelectorAll('[data-i18n="total"]').forEach(e=>e.textContent = translations[currentLang].total);
  if (el("checkoutBtn")) el("checkoutBtn").textContent = translations[currentLang].finalize;
  if (el("clearCart")) el("clearCart").textContent = translations[currentLang].clear;
}
function changeQty(id, delta){ let cart = state.cart; let item = cart.find(i=>i.id===id); if(!item) return; item.qty += delta; if(item.qty<=0) cart = cart.filter(i=>i.id!==id); state.cart = cart; localStorage.setItem('ernice_cart', JSON.stringify(cart)); updateCartUI(); }
function clearCart(){ state.cart = []; localStorage.removeItem('ernice_cart'); updateCartUI(); }
function checkout(){
  if(state.cart.length===0){
    alert(currentLang === "en" ? "Cart is empty." : "Carrinho vazio.");
    return;
  }
  const msg = state.cart.map(i => `• ${i.qty}x ${i.title} (${formatMoney(i.price)})`).join('\n');
  const total = state.cart.reduce((s,i)=>s+i.price*i.qty,0);
  const texto = encodeURIComponent(
    (currentLang === "en"
      ? `Hello, I would like to place the following order/reservation:\n\n${msg}\n\nTotal: ${formatMoney(total)}`
      : `Olá, gostaria de fazer o seguinte pedido/reserva:\n\n${msg}\n\nTotal: ${formatMoney(total)}`
    )
  );
  const numero = '244944059983';
  window.open(`https://wa.me/${numero}?text=${texto}`, '_blank');
  clearCart();
}
function toggleCart(){ const panel = el('cartPanel'); if(panel.classList.contains('translate-x-full')){ panel.classList.remove('translate-x-full'); panel.setAttribute('aria-hidden','false'); } else { panel.classList.add('translate-x-full'); panel.setAttribute('aria-hidden','true'); } }

function handleCompareChange(e){ const id = e.target.dataset.id; if(e.target.checked){ if(!state.compare.includes(id)) state.compare.push(id); } else { state.compare = state.compare.filter(x=>x!==id); } renderComparePanel(); }
function renderComparePanel(){
  const panel = el('comparePanel');
  if(state.compare.length===0){ panel.classList.add('hidden'); panel.innerHTML=''; return; }
  panel.classList.remove('hidden');
  const items = state.compare.map(id=> PRODUCTS.find(p=>p.id===id));
  panel.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-${Math.min(3, state.compare.length)} gap-4">
      ${items.map(it=>`<div class="p-3 border rounded">
        <div class="font-semibold">${it.title}</div>
        <div class="text-sm text-slate-500">${it.brand} • ${it.category}</div>
        <div class="mt-2 font-bold">${formatMoney(it.price)}</div>
      </div>`).join('')}
    </div>
  `;
}

function handleContactSubmit(e){
  e.preventDefault();
  const form = e.target;
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  if (!name || !email || !message) {
    el('contactStatus').textContent = currentLang === "en" ? "Please fill in all fields." : 'Por favor, preencha todos os campos.';
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    el('contactStatus').textContent = currentLang === "en" ? "Invalid email." : 'Email inválido.';
    return;
  }
  el('contactStatus').textContent = currentLang === "en" ? "Message sent (simulation). Thank you!" : 'Mensagem enviada (simulação). Obrigado!';
  form.reset();
}

function toggleTheme(){
  const pressed = (el('themeToggle').getAttribute('aria-pressed') === 'true');
  el('themeToggle').setAttribute('aria-pressed', String(!pressed));
  document.documentElement.classList.toggle('dark');
  el('themeToggle').textContent = document.documentElement.classList.contains('dark') ? '🌙' : '🌓';
}

function setLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang === "en" ? "en" : "pt-PT";
  const t = translations[lang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) el.textContent = t[key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key]) el.placeholder = t[key];
  });

  if (el("langToggle")) el("langToggle").textContent = lang === "en" ? "PT" : "EN";
  renderProducts();
  updateCartUI();
}

window.addEventListener('DOMContentLoaded', ()=>{
  init();
  setLang("pt");
});