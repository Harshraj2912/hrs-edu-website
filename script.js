// resources rendering script (5 default items each)
const youtubeConfig = {
  channelName: "FactsWithHRS",
  channelUrl: "https://www.youtube.com/@FactsWithHRS",
  videos: [
    { id: "dQw4w9WgXcQ", title: "BCA Study Tips — Quick Revision" },
    { id: "Zi_XLOBDo_Y", title: "Design & Analysis of Algorithms — Concepts" },
    { id: "3JZ_D3ELwOQ", title: "Object Oriented Programming — Examples" },
    { id: "2Vv-BfVoq4g", title: "Computer Networks — Easy Explanation" },
    { id: "e-ORhEE9VVg", title: "Software Engineering — Important Topics" }
  ]
};

const notesData = [
  { semester: "Sem 1", subject: "Computer Fundamentals", title: "CF — Short Notes", desc: "Basics + practicals", link: "notes/CF_short_notes.pdf" },
  { semester: "Sem 2", subject: "OOP Using Java", title: "OOP Java — Key Programs", desc: "Programs & theory", link: "notes/OOP_key_programs.pdf" },
  { semester: "Sem 3", subject: "Computer Networks", title: "CN — Important Q&A", desc: "TCP/IP, models, protocols", link: "notes/CN_qna.pdf" },
  { semester: "Sem 4", subject: "DAA", title: "DAA — 5 Mark Answers", desc: "Greedy, DP, Graphs", link: "notes/DAA_5marks.pdf" },
  { semester: "Sem 5", subject: "Software Engineering", title: "SE — Short Summary", desc: "SDLC, models, metrics", link: "notes/SE_summary.pdf" }
];

const textbooksData = [
  { title: "Computer Networks — Essentials", desc: "PDF (sample)", link: "books/computer-networks.pdf" },
  { title: "Software Engineering — Srikanth S", desc: "Reference for BU syllabus", link: "books/software-engineering.pdf" },
  { title: "Database Systems — Fundamentals", desc: "RDBMS basics", link: "books/database-systems.pdf" },
  { title: "Operating Systems — Concepts", desc: "Processes, scheduling", link: "books/os_concepts.pdf" },
  { title: "Data Structures — Core", desc: "DS & Algorithms", link: "books/data-structures.pdf" }
];

// Rendering functions (same as before)
const notesGrid = document.getElementById('notesGrid');
const booksGrid = document.getElementById('booksGrid');
const videoGrid = document.getElementById('videoGrid');
const channelLink = document.getElementById('channelLink');
const searchInput = document.getElementById('searchInput');
const semesterFilter = document.getElementById('semesterFilter');

document.addEventListener('DOMContentLoaded', ()=>{
  if(channelLink){ channelLink.textContent = youtubeConfig.channelName + " →"; channelLink.href = youtubeConfig.channelUrl; renderVideos(youtubeConfig.videos); renderNotes(notesData); renderBooks(textbooksData); searchInput && searchInput.addEventListener('input', applyFilters); semesterFilter && semesterFilter.addEventListener('change', applyFilters); }
});

function renderVideos(list){
  if(!videoGrid) return;
  videoGrid.innerHTML='';
  list.forEach(v=>{
    const card = document.createElement('div'); card.className='card';
    const iframe = document.createElement('iframe'); iframe.src=`https://www.youtube.com/embed/${v.id}`; iframe.title=v.title; iframe.setAttribute('allowfullscreen','');
    card.appendChild(iframe);
    const t = document.createElement('div'); t.className='title'; t.textContent=v.title; card.appendChild(t);
    videoGrid.appendChild(card);
  });
}

def renderNotes(list):
  pass
