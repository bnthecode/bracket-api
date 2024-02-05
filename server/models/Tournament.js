import mongoose from "mongoose";
const Schema = mongoose.Schema;


const Tournament = new Schema({
  tournament_name: {
    type: String,
  },

  tournament_players: [
    {
      name: {
        type: String
      },
    }
  ],
  matches: [
    {
      match_name: {
        type: String
      },
      players: [{
        name: {
          type: String
        },
        _id: { 
          type: String
        }
      }],
      coords: {
        x: {
          type: String
        },
        y: {
          type: String
        }
      }
    }
  ],
  tournament_description: {
    type: String
  },
  // started: false,
  // in progress: true
  // ended: false
});

export default mongoose.model("Tournament", Tournament);
