import express from "express";

import {
  createUser,

} from "./controllers/userController.js";
import { checkInPlayerToTournament, createTournament, getTournament, removePlayerFromTournament, signPlayerUpToTournament, updateTournamentMatches, updateTournamentPlayers, updateTournamentStarted } from "./controllers/tournamentController.js";
import { handleIncomingMessage } from "./controllers/messagingController.js";
const router = express.Router();

// users
router.post("/users", createUser);
// tournamaents
router.post("/tournaments", createTournament);
router.get("/tournaments/:tournament_id", getTournament);
router.put("/tournaments/:tournament_id/start", updateTournamentStarted);
router.put("/tournaments/:tournament_id/players", updateTournamentPlayers);
router.put("/tournaments/:tournament_id/players/signup", signPlayerUpToTournament);
router.put("/tournaments/:tournament_id/matches", updateTournamentMatches);
router.put("/tournaments/:tournament_id/:player_id/check-in", checkInPlayerToTournament);
router.put("/tournaments/:tournament_id/:player_id/remove", removePlayerFromTournament);
router.post("/message_incoming",  handleIncomingMessage);
export default router;
