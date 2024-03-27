import Tournament from "../models/Tournament.js";



export const addPlayerToTournament = async (req, res) => {
  try {
    conso

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

