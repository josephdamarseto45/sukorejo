// Data management for tourism destinations
const WISATA_STORAGE_KEY = "wisata_desa_sukorejo"

// Initialize with sample data
window.initializeWisataData = () => {
  const existing = localStorage.getItem(WISATA_STORAGE_KEY)
  if (!existing) {
    const sampleData = [
      {
        id: 1,
        nama: "Taman Desa Sukorejo",
        kategori: "Alam",
        deskripsi:
          "Taman hijau yang asri di tengah desa, cocok untuk bersantai bersama keluarga. Dilengkapi dengan area bermain anak dan gazebo untuk istirahat.",
        lat: -7.5626,
        lng: 110.8282,
        foto: "",
        foto_list: [], // Array untuk multiple images
        video_list: [], // Array untuk multiple videos
        jamOperasional: "06:00 - 18:00",
        hargaTiket: "Gratis",
      },
    ]
    localStorage.setItem(WISATA_STORAGE_KEY, JSON.stringify(sampleData))
  }
}

window.getAllWisata = () => {
  const data = localStorage.getItem(WISATA_STORAGE_KEY)
  return data ? JSON.parse(data) : []
}

window.getWisataById = (id) => {
  const allWisata = window.getAllWisata()
  return allWisata.find((w) => w.id === Number.parseInt(id))
}

window.addNewWisata = (wisata) => {
  const allWisata = window.getAllWisata()
  const newId = allWisata.length > 0 ? Math.max(...allWisata.map((w) => w.id)) + 1 : 1
  wisata.id = newId
  allWisata.push(wisata)
  localStorage.setItem(WISATA_STORAGE_KEY, JSON.stringify(allWisata))
  return wisata
}

window.updateWisataById = (id, updatedWisata) => {
  const allWisata = window.getAllWisata()
  const index = allWisata.findIndex((w) => w.id === Number.parseInt(id))
  if (index !== -1) {
    allWisata[index] = { ...allWisata[index], ...updatedWisata, id: Number.parseInt(id) }
    localStorage.setItem(WISATA_STORAGE_KEY, JSON.stringify(allWisata))
    return true
  }
  return false
}

window.deleteWisataById = (id) => {
  const allWisata = window.getAllWisata()
  const filtered = allWisata.filter((w) => w.id !== Number.parseInt(id))
  localStorage.setItem(WISATA_STORAGE_KEY, JSON.stringify(filtered))
  return true
}

// Initialize data on load
window.initializeWisataData()
