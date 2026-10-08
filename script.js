const projects = [
  {
    id: 'phileas', title: 'Phileas Fogg World of Adventures', category: 'Immersive experience · Brighton', filter: ['immersive'],
    role: 'Designer · full-space 3D model', cover: 'assets/projects/phileas-fogg-world-of-adventures-03.webp',
    description: 'I worked as a designer on Phileas Fogg World of Adventures and created the 3D model of the whole space. The experience brings visitors into a story-led environment through detailed themed sets and immersive design.',
    images: [
      ['assets/projects/phileas-fogg-world-of-adventures-01.webp','Themed passage through the immersive environment'],
      ['assets/projects/phileas-fogg-world-of-adventures-02.webp','Set construction in progress'],
      ['assets/projects/phileas-fogg-world-of-adventures-03.webp','Story-led themed interior'],
      ['assets/projects/phileas-fogg-world-of-adventures-04.webp','Immersive set and lighting'],
      ['assets/projects/phileas-fogg-world-of-adventures-05.webp','Production detail during installation']
    ]
  },
  {
    id: 'coffee', title: 'Coffee Cup Campaign', category: 'Public installation · City of London', filter: ['events'],
    role: 'Visual design · build · installation', cover: 'assets/projects/coffee-cup-campaign-01.webp',
    description: 'Commissioned by Hubbub for the Streets Ahead campaign, the installation made the scale of disposable coffee cup waste visible in the City of London. I worked on the visuals, build and installation across several London locations. All cups were donated. The campaign highlighted that only one in 400 cups was recycled at the time.',
    images: [
      ['assets/projects/coffee-cup-campaign-01.webp','Cup sculpture concept visual'],
      ['assets/projects/coffee-cup-campaign-02.webp','Campaign installation concept'],
      ['assets/projects/coffee-cup-campaign-03.webp','Cup display render'],
      ['assets/projects/coffee-cup-campaign-04.webp','Installation build process'],
      ['assets/projects/coffee-cup-campaign-05.webp','Coffee Cups 2 campaign in the City of London']
    ]
  },
  {
    id: 'lsif', title: 'LSIF Immersive Classrooms', category: 'Immersive learning · Sussex', filter: ['immersive','events'],
    role: 'Programme coordination · spatial and event design', cover: 'assets/projects/lsif-immersive-learning-01.webp',
    description: 'I coordinated work across the £4.5m FE Sussex LSIF programme, supporting delivery of 19 immersive rooms across 16 college campuses. The work brought college teams, technology and equipment suppliers, and end users together through requirements, procurement, installation, commissioning and handover. The wider programme served a network of more than 15,000 learners and included VR/XR, simulation and soft-skills learning, as well as immersive event spaces and conferences.',
    images: [
      ['assets/projects/lsif-immersive-learning-01.webp','Immersive teaching room in Bexhill'],
      ['assets/projects/lsif-immersive-learning-02.webp','Immersive event space at BHASVIC'],
      ['assets/projects/lsif-immersive-learning-03.webp','Future Skills learning environment'],
      ['assets/projects/lsif-immersive-learning-04.webp','Bodyswaps soft-skills learning session'],
      ['assets/projects/lsif-immersive-learning-05.webp','VR simulation equipment in a learning space'],
      ['assets/projects/lsif-immersive-learning-06.webp','Festival of Innovation event panel'],
      ['assets/projects/lsif-immersive-learning-07.webp','Festival of Innovation audience'],
      ['assets/projects/lsif-immersive-learning-08.webp','T Level future-skills experience'],
      ['assets/projects/lsif-immersive-learning-09.webp','VR and simulation presentation'],
      ['assets/projects/lsif-immersive-learning-10.webp','Visitors using an immersive learning room']
    ]
  },
  {
    id: 'spatial', title: '3D Spatial Design', category: 'Interiors · residential', filter: ['architecture'],
    role: 'Spatial design · 3D visualisation', cover: 'assets/projects/spatial-design-3d-01.webp',
    description: 'A selection of 3D space design and visualisation work, exploring interior atmosphere, layout, materials and architectural context. These images help communicate a proposed space and its character.',
    images: [
      ['assets/projects/spatial-design-3d-01.webp','Interior design visualisation'],
      ['assets/projects/spatial-design-3d-02.webp','Residential development visualisation']
    ]
  },
  {
    id: 'bim', title: 'Large-Scale BIM Modelling', category: 'BIM · building design', filter: ['bim','architecture'],
    role: '3D modelling · BIM', cover: 'assets/projects/bim-building-model-01.webp',
    description: 'A view of a larger-scale building project modelled in BIM, showing the building form and coordinated model development in a 3D workflow.',
    images: [['assets/projects/bim-building-model-01.webp','Large-scale building model in BIM']]
  },
  {
    id: 'renders', title: 'Architectural Visualisation', category: 'Selected 3D renders · built environment', filter: ['architecture'],
    role: '3D architectural visualisation', cover: 'assets/projects/architectural-visualisation-09.webp',
    description: 'A selection of 3D architectural renders across residential, commercial and leisure projects. The images communicate design intent, materials, atmosphere and how each proposal sits in its setting.',
    images: [
      ['assets/projects/architectural-visualisation-01.webp','Bennet residential extension'],
      ['assets/projects/architectural-visualisation-02.webp','Boat deck and waterside structure'],
      ['assets/projects/architectural-visualisation-03.webp','West Sussex boathouse'],
      ['assets/projects/architectural-visualisation-04.webp','Claytons Farm'],
      ['assets/projects/architectural-visualisation-05.webp','Coniston interior visualisation'],
      ['assets/projects/architectural-visualisation-06.webp','Franklins residential project'],
      ['assets/projects/architectural-visualisation-07.webp','Guitar shop interior'],
      ['assets/projects/architectural-visualisation-08.webp','Horsgate residential project'],
      ['assets/projects/architectural-visualisation-09.webp','Linden residential project'],
      ['assets/projects/architectural-visualisation-10.webp','London Road extension'],
      ['assets/projects/architectural-visualisation-11.webp','Madeline Road extension'],
      ['assets/projects/architectural-visualisation-12.webp','Patchings Barn'],
      ['assets/projects/architectural-visualisation-13.webp','Uckfield Rugby Football Club']
    ]
  }
];

const grid = document.querySelector('#project-grid');
const dialog = document.querySelector('#project-dialog');
const escapeHtml = text => String(text).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
function renderCards(filter='all') {
  const shown = projects.filter(p => filter === 'all' || p.filter.includes(filter));
  grid.innerHTML = shown.map((p,i) => `<article class="project-card ${i===0?'project-featured':''}">
    <button class="project-open" data-project="${p.id}" aria-label="Open ${escapeHtml(p.title)} project gallery">
      <span class="project-visual"><img src="${p.cover}" alt="${escapeHtml(p.images[0][1])}" loading="lazy"><span class="visual-count">${String(p.images.length).padStart(2,'0')} IMAGES</span></span>
      <span class="project-meta"><span><span class="project-type">${escapeHtml(p.category)}</span><span class="project-title">${escapeHtml(p.title)}</span><span class="project-role">${escapeHtml(p.role)}</span></span><span class="project-arrow" aria-hidden="true">↗</span></span>
    </button></article>`).join('');
  grid.querySelectorAll('.project-open').forEach(button => button.addEventListener('click', () => openProject(button.dataset.project)));
}
function openProject(id) {
  const p=projects.find(item=>item.id===id); if(!p) return;
  document.querySelector('#dialog-category').textContent=p.category;
  document.querySelector('#dialog-title').textContent=p.title;
  document.querySelector('#dialog-role').textContent=p.role;
  document.querySelector('#dialog-description').textContent=p.description;
  const main=document.querySelector('#dialog-image');
  const count=document.querySelector('#image-count');
  const thumbs=document.querySelector('#gallery-thumbs');
  function selectImage(index){
    const [src,alt]=p.images[index]; main.src=src; main.alt=alt; count.textContent=`${String(index+1).padStart(2,'0')} / ${String(p.images.length).padStart(2,'0')}`;
    thumbs.querySelectorAll('button').forEach((b,i)=>{b.classList.toggle('selected',i===index);b.setAttribute('aria-current',i===index?'true':'false')});
  }
  thumbs.innerHTML=p.images.map(([src,alt],i)=>`<button type="button" aria-label="Show image ${i+1}: ${escapeHtml(alt)}" aria-current="false"><img src="${src}" alt="" loading="lazy"></button>`).join('');
  thumbs.querySelectorAll('button').forEach((button,i)=>button.addEventListener('click',()=>selectImage(i)));
  selectImage(0); dialog.showModal();
}
document.querySelectorAll('.filter').forEach(button=>button.addEventListener('click',()=>{
  document.querySelectorAll('.filter').forEach(item=>{item.classList.remove('active');item.setAttribute('aria-pressed','false')});
  button.classList.add('active');button.setAttribute('aria-pressed','true');renderCards(button.dataset.filter);
}));
document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close()});
const toggle=document.querySelector('.menu-toggle'), nav=document.querySelector('#site-nav');
toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open)});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{toggle.setAttribute('aria-expanded','false');nav.classList.remove('open')}));
document.querySelector('#year').textContent=new Date().getFullYear();
renderCards();
