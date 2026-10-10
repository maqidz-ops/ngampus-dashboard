export const services=[
{id:'plagiarism',name:'Cek Plagiarisme',subtitle:'Pemeriksaan similarity Turnitin',icon:'ScanText',category:'Akademik',price:15000,time:'10–30 menit',color:'orange',popular:true},
{id:'ai',name:'AI Detector',subtitle:'Deteksi konten AI dengan GPTZero',icon:'Bot',category:'Akademik',price:12000,time:'10–30 menit',color:'violet',popular:true},
{id:'parafrase',name:'Parafrase Manual',subtitle:'Parafrase dikerjakan secara manual',icon:'PenLine',category:'Penulisan',price:35000,time:'1–2 hari',color:'blue'},
{id:'proofread',name:'Proofreading',subtitle:'Koreksi bahasa dan struktur tulisan',icon:'BookOpenCheck',category:'Penulisan',price:25000,time:'1–2 hari',color:'green'},
{id:'pdf',name:'PDF & File Tools',subtitle:'Merge, split, kompres & konversi PDF',icon:'FileStack',category:'Dokumen',price:5000,time:'5–15 menit',color:'amber'},
{id:'marketplace',name:'Marketplace Premium',subtitle:'Akun & tools produktivitas premium',icon:'ShoppingBag',category:'Marketplace',price:19000,time:'Instan–1 jam',color:'pink'}
]
export const initialOrders=[
{id:'NG-2026-1028',service:'plagiarism',title:'Skripsi Bab 1–3',file:'skripsi_revisi_bab_1-3.pdf',date:'10 Okt 2026',status:'Diproses',amount:15000,payment:'QRIS',progress:2,note:'Sedang diperiksa oleh admin'},
{id:'NG-2026-1027',service:'ai',title:'Artikel Jurnal Manajemen',file:'artikel_jurnal_final.docx',date:'10 Okt 2026',status:'Menunggu',amount:12000,payment:'QRIS',progress:1,note:'Menunggu antrean admin'},
{id:'NG-2026-1026',service:'parafrase',title:'Landasan Teori Penelitian',file:'bab_2_kajian_pustaka.docx',date:'09 Okt 2026',status:'Diproses',amount:35000,payment:'Transfer Bank',progress:2,note:'Sedang dikerjakan oleh tim'},
{id:'NG-2026-1025',service:'pdf',title:'Gabung File Proposal',file:'proposal_penelitian.pdf',date:'08 Okt 2026',status:'Selesai',amount:5000,payment:'QRIS',progress:4,note:'Hasil demo siap dilihat'},
{id:'NG-2026-1024',service:'plagiarism',title:'Makalah Ekonomi Digital',file:'makalah_ekonomi_digital.pdf',date:'07 Okt 2026',status:'Selesai',amount:15000,payment:'QRIS',progress:4,note:'Similarity 14% (data dummy)'},
{id:'NG-2026-1023',service:'marketplace',title:'Langganan Aplikasi Premium',file:'-',date:'06 Okt 2026',status:'Selesai',amount:19000,payment:'E-Wallet',progress:4,note:'Akses demo terkirim'},
{id:'NG-2026-1022',service:'proofread',title:'Abstrak Skripsi',file:'abstrak.docx',date:'05 Okt 2026',status:'Selesai',amount:25000,payment:'QRIS',progress:4,note:'Selesai direview'},
{id:'NG-2026-1021',service:'ai',title:'Esai Etika Digital',file:'esai_etika_digital.pdf',date:'04 Okt 2026',status:'Dibatalkan',amount:12000,payment:'QRIS',progress:0,note:'Pembayaran tidak dilanjutkan'}
]
export const initialNotifications=[
{id:1,type:'order',title:'Pesanan sedang diproses',body:'NG-2026-1028 • Skripsi Bab 1–3 sedang diperiksa admin.',time:'10 menit lalu',read:false},
{id:2,type:'payment',title:'Pembayaran berhasil',body:'Pembayaran QRIS Rp15.000 untuk NG-2026-1028 diterima (demo).',time:'25 menit lalu',read:false},
{id:3,type:'order',title:'Pesanan masuk antrean',body:'NG-2026-1027 menunggu admin untuk proses AI Detector.',time:'1 jam lalu',read:false},
{id:4,type:'done',title:'File PDF berhasil diproses',body:'Hasil pesanan NG-2026-1025 sudah tersedia (dummy).',time:'8 Okt 2026',read:true},
{id:5,type:'promo',title:'Promo mahasiswa aktif!',body:'Cek plagiarisme mulai Rp15.000 per dokumen.',time:'7 Okt 2026',read:true}
]
export const marketplace=[
{name:'Canva Pro',price:19000,period:'30 hari',emoji:'🎨',tag:'Paling dicari'},
{name:'Grammarly Premium',price:29000,period:'30 hari',emoji:'✍️',tag:'Menulis'},
{name:'Microsoft 365',price:25000,period:'30 hari',emoji:'🗂️',tag:'Produktivitas'},
{name:'QuillBot Premium',price:29000,period:'30 hari',emoji:'🪄',tag:'Akademik'}
]
export const money=n=>'Rp'+Number(n).toLocaleString('id-ID')
export const phases=['Pembayaran','Masuk Antrean','Diproses Admin','Hasil Dikirim']
