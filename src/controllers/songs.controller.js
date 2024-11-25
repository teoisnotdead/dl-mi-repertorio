import { readFile, writeFile } from 'fs/promises'

const SONGS_FILE = 'src/data/repertorio.json'

export const getSongs = async (req, res) => {
  try {
    const songs = await readFile(SONGS_FILE, 'utf-8')
    res.json(JSON.parse(songs))
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const addSong = async (req, res) => {
  try {
    const newSong = req.body
    const songs = JSON.parse(await readFile(SONGS_FILE, 'utf-8'))
    songs.push(newSong)
    await writeFile(SONGS_FILE, JSON.stringify(songs, null, 2))
    res.status(201).json(newSong)
  }
  catch (error) {
    res.status(500).json({ error: 'Error agregando la canción' })
  }
}

export const updateSong = async (req, res) => {
  try {
    const { id } = req.params
    const updatedSong = req.body
    let data = JSON.parse(await readFile(SONGS_FILE, "utf-8"))
    data = data.map((song) =>
      song.id === id ? { ...song, ...updatedSong } : song
    )
    await writeFile(SONGS_FILE, JSON.stringify(data, null, 2))
    res.json(updatedSong)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Error editando la canción" })
  }
}

export const deleteSong = async (req, res) => {
  try {
    const { id } = req.params
    let data = JSON.parse(await readFile(SONGS_FILE, "utf-8"))
    data = data.filter((song) => song.id !== id)
    await writeFile(SONGS_FILE, JSON.stringify(data, null, 2))
    res.json({ message: "Canción eliminada" })
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Error eliminando la canción" })
  }
}