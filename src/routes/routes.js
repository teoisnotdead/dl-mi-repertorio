import { Router } from "express"
import { getSongs, addSong, updateSong, deleteSong } from "../controllers/songs.controller.js"

const router = Router()

router.get("/", (req, res) => {
  res.json({ message: "Holaaa" })
})

router.get('/canciones', getSongs)
router.post('/canciones', addSong)
router.put('/canciones/:id', updateSong)
router.delete('/canciones/:id', deleteSong)

export default router