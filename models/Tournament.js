import mongoose from "mongoose";
const Schema = mongoose.Schema;


const Tournament = new Schema({
  tournament_name: {
    type: String,
  },

  started: {
    type: Boolean
  },
  owner: {
    type: String
  },
  tournament_players: [
    {
      name: {
        type: String
      },
      checked_in: {
        type: Boolean
      },
      phone_number: {
        type: String
      },
      receive_updates: {
        type: Boolean
      }
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
      },
      round: {
        type: String
      },
      in_progress: {
        type: Boolean
      },
      done: {
        type: Boolean
      },
      won: {
        name: { 
          type: String
        }
      },
      lost: {
        name: { 
          type: String
        }
      }
    }
  ],
  tournament_description: {
    type: String
  },

send_updates_to : [{
    name: {
      type: String,

    },
    send: { 
      type: Boolean
    },
    phone: {
      type: String
    },
    notified_for: [{
      against: {
        type: String
      },
      type: {
        type: String
      },
    }],
    player_id: {
      type: String
    },
}],
tournament_type: {
  type: String
},
allow_notifications: {
  type: Boolean
},
handicapped: {
  type: Boolean
},
spreadsheet: {
  type: Boolean
},

  checked_in_players: [
    { 
      type: String
    }
  ]
  // started: false,
  // in progress: true
  // ended: false
});

export default mongoose.model("Tournament", Tournament);
