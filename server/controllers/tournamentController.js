import Tournament from "../models/Tournament.js";
import twilio from 'twilio'


export const createTournament = async (req, res) => {
  try {
    console.log('hit')
    const { tournament } = req.body;
    console.log(tournament)
    const createdTournament = new Tournament({
      ...tournament,
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
    console.log(savedTourament)


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

export const updateTournamentPlayers = async (req, res) => {
    try {
      const { players } = req.body;
      const {tournament_id} = req.params;

      const player_group = players.map((player) => ({ name: player }));
        
      const newPlayer = player_group[0]
        const foundTournament = await Tournament.findById(tournament_id);
    
        foundTournament.tournament_players.push(newPlayer);
        console.log(players, foundTournament)
      const savedTourament =  await foundTournament.save();

        console.log(savedTourament)
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
      const { matches } = req.body;
      const {tournament_id} = req.params;

        
        const foundTournament = await Tournament.findById(tournament_id);
      foundTournament.matches = matches
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