import express from "express";

import {
  createUser,

} from "./controllers/userController.js";
import { createTournament, getTournament, updateTournamentMatches, updateTournamentPlayers } from "./controllers/tournamentController.js";
const router = express.Router();

// users
router.post("/users", createUser);
// tournamaents
router.post("/tournaments", createTournament);
router.get("/tournaments/:tournament_id", getTournament);
router.put("/tournaments/:tournament_id/players", updateTournamentPlayers);
router.put("/tournaments/:tournament_id/matches", updateTournamentMatches);
export default router;
