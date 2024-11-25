import { Router } from "express"
import { getSongs, addSong } from "../controllers/songs.controller.js"

const router = Router()

router.get("/", (req, res) => {
  res.json({ message: "Holaaa" })
})

router.get('/canciones', getSongs)
router.post('/canciones', addSong)

export default router