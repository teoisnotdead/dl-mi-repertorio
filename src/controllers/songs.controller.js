import { readFile, writeFile } from 'fs/promises'

const SONGS_FILE = 'src/data/repertorio.json'

export const getSongs = async (req, res) => {
  try {
    const songs = await readFile(SONGS_FILE, 'utf-8')
    res.json(JSON.parse(songs));
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const addSong = async (req, res) => {
  try {
    const newSong = req.body;
    const songs = JSON.parse(await readFile(SONGS_FILE, 'utf-8'))
    songs.push(newSong);
    await writeFile(SONGS_FILE, JSON.stringify(songs, null, 2))
    res.status(201).json(newSong);
  }
  catch (error) {
    console.log('request', req.body);
    console.error(error.message)
    res.status(500).json({ error: 'Error agregando la canción' })
  }
}