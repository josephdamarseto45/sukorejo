// Data UMKM - localStorage sebagai database sederhana
const DATA_KEY = "umkm_data"

// Fungsi untuk load data dari localStorage
function loadData() {
  const data = localStorage.getItem(DATA_KEY)
  if (data) {
    return JSON.parse(data)
  }
  // Data sample awal
  return [
    {
      id: 1,
      nama: "Warung Makan Bu Siti",
      jenis: "Kuliner",
      kategori: "Makanan",
      alamat: "Jl. Raya Sukorejo No. 12",
      lokasi: "Jl. Raya Sukorejo No. 12",
      lat: -7.4186,
      lng: 110.9758,
      deskripsi: "Warung makan dengan menu masakan tradisional Jawa yang lezat",
      kontak: "081234567890",
      gambar: null,
      gambar_list: [], // Array untuk multiple images
      video_list: [], // Array untuk multiple videos
    },
    {
      id: 2,
      nama: "Kerajinan Bambu Pak Agus",
      jenis: "Kerajinan",
      kategori: "Kerajinan",
      alamat: "Dsn. Krajan, Sukorejo",
      lokasi: "Dsn. Krajan, Sukorejo",
      lat: -7.4195,
      lng: 110.977,
      deskripsi: "Produksi kerajinan bambu seperti anyaman dan furniture",
      kontak: "082345678901",
      gambar: null,
      gambar_list: [], // Array untuk multiple images
      video_list: [], // Array untuk multiple videos
    },
    {
      id: 3,
      nama: "Toko Sembako Berkah",
      jenis: "Lainnya",
      kategori: "Lainnya",
      alamat: "Jl. Masjid Sukorejo",
      lokasi: "Jl. Masjid Sukorejo",
      lat: -7.4175,
      lng: 110.9745,
      deskripsi: "Toko sembako lengkap dengan harga terjangkau",
      kontak: "083456789012",
      gambar: null,
      gambar_list: [], // Array untuk multiple images
      video_list: [], // Array untuk multiple videos
    },
  ]
}

// Fungsi untuk save data ke localStorage
function saveData(data) {
  localStorage.setItem(DATA_KEY, JSON.stringify(data))
  window.dispatchEvent(new Event("umkmDataChanged"))
}

// Fungsi untuk get semua UMKM
window.getAllUMKM = function getAllUMKM() {
  return loadData()
}

// Fungsi untuk add UMKM baru
window.addNewUMKM = function addNewUMKM(umkm) {
  const data = loadData()
  const newId = data.length > 0 ? Math.max(...data.map((u) => u.id)) + 1 : 1
  umkm.id = newId
  data.push(umkm)
  saveData(data)
  return umkm
}

// Fungsi untuk update UMKM
window.updateUMKMData = function updateUMKMData(id, updatedUMKM) {
  const data = loadData()
  const index = data.findIndex((u) => u.id === id)
  if (index !== -1) {
    data[index] = { ...data[index], ...updatedUMKM }
    saveData(data)
    return true
  }
  return false
}

// Fungsi untuk delete UMKM
window.deleteUMKMData = function deleteUMKMData(id) {
  const data = loadData()
  const filtered = data.filter((u) => u.id !== id)
  saveData(filtered)
  return true
}

// Fungsi untuk get UMKM by ID
window.getUMKMById = function getUMKMById(id) {
  const data = loadData()
  return data.find((u) => u.id === id)
}
