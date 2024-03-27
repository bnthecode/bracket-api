import Tournament from "../models/Tournament.js";
import twilio from 'twilio'
import { handleSendMessageOnMatchUpdate,handleSendMessageOnRegister,handleSendMessageOnStart } from "./messagingController.js";


export const createTournament = async (req, res) => {
  try {
    const { tournament } = req.body;
    const createdTournament = new Tournament({
      ...tournament,
      started: false
    });
    // const accountSid = 'AC980f1319a17e4c1a968e9a96e6295d26';
    // const authToken = 'aea8b6ad037c1b0f8967c2b14d962bab';
    // const client = twilio(accountSid, authToken);
    // try { 
    // client.messages
    //     .create({
    //         body: 'Hello from Brandons Brackets',
    //         messagingServiceSid: 'MG99840be9a536318fbd9dccc6fcfe6f69',
    //         to: '+13377844173'
    //     }).then(res => {
    //       console.log(res.sid)
    //     })
    //   }
    //   catch(error) { 
    //     console.log(error)
    //   }


    const savedTourament = await createdTournament.save();



    res.status(201).send(savedTourament);
  } catch (error) {
    console.log(error)
    res.status(500).send({
      message: {
        content: "An error occured creating tournament",
        info: error.message,
      },
    });
  }
};

export const getTournament = async (req, res) => {
    try {
      const {tournament_id} = req.params;
        const foundTournament = await Tournament.findById(tournament_id);

        res.send(foundTournament)
    } catch (error) {
      console.log(error)
      res.status(500).send({
        message: {
          content: "An error occured creating tournament",
          info: error.message,
        },
      });
    }
  };

  

export const checkInPlayerToTournament = async (req,res) => {
  
try {  const {tournament_id, player_id} = req.params;
  const tournament = await Tournament.findById(tournament_id);
  const foundPlayer = tournament.tournament_players.find(player => player._id == player_id);
await  tournament.checked_in_players.push(foundPlayer.name);
  const saved = await tournament.save()
  res.send(saved)
}
  catch (error) {
    res.status(500).send({
      message: {
        content: "An error occured creating tournament",
        info: error.message,
      },
    });
  }

}

  
export const updateTournamentPlayers = async (req, res) => {
    try {
      const { players } = req.body;
      const {tournament_id} = req.params;

      const player_group = players.map((player) => ({ name: player }));
        
      const newPlayer = player_group[0]
        const foundTournament = await Tournament.findById(tournament_id);
    
        foundTournament.tournament_players.push(newPlayer);
      const savedTourament =  await foundTournament.save();

        res.send(savedTourament)
    } catch (error) {
      console.log(error)
      res.status(500).send({
        message: {
          content: "An error occured creating tournament",
          info: error.message,
        },
      });
    }
  };


  export const signPlayerUpToTournament = async (req, res) => {
    try {
      const { player } = req.body;
      const {tournament_id} = req.params;

      const foundTournament = await Tournament.findById(tournament_id);
      foundTournament.tournament_players.push(player);
        handleSendMessageOnRegister(player.phone_number, foundTournament.tournament_name)
      const savedTourament =  await foundTournament.save();
      res.send(savedTourament)
    } catch (error) {
      console.log(error)
      res.status(500).send({
        message: {
          content: "An error occured creating tournament",
          info: error.message,
        },
      });
    }
  };


  export const removePlayerFromTournament = async (req, res) => {
    try {
      const {tournament_id, player_id} = req.params;

        
        const foundTournament = await Tournament.findById(tournament_id);
      const newPlayerList = foundTournament.tournament_players.filter(player => player._id != player_id);
        foundTournament.tournament_players = newPlayerList;
      const savedTourament =  await foundTournament.save();

        res.send(savedTourament)
    } catch (error) {
      console.log(error)
      res.status(500).send({
        message: {
          content: "An error occured creating tournament",
          info: error.message,
        },
      });
    }
  };
  

  export const updateTournamentMatches = async (req, res) => {
    try {
      console.log('updating matches')
      const { matches } = req.body;
      const {tournament_id} = req.params;

        
        const foundTournament = await Tournament.findById(tournament_id);


  

      foundTournament.matches = matches;

      foundTournament.started = true;


      const savedTourament =  await foundTournament.save();
      await handleSendMessageOnMatchUpdate(tournament_id)
        res.send(savedTourament)
    } catch (error) {
      console.log(error)
      res.status(500).send({
        message: {
          content: "An error occured creating tournament",
          info: error.message,
        },
      });
    }
  };


  export const updateTournamentStarted = async (req, res) => {
    try {
      const {tournament_id} = req.params;

        
        const foundTournament = await Tournament.findById(tournament_id);
      foundTournament.started = true


        await handleSendMessageOnStart(tournament_id)
      
      const savedTourament =  await foundTournament.save();

      
        res.send(savedTourament)
    } catch (error) {
      console.log(error)
      res.status(500).send({
        message: {
          content: "An error occured saving tournament",
          info: error.message,
        },
      });
    }
  };