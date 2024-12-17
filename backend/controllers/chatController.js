const chat = require('../models/chatModal');

const chatControllers = {
  getChatController: async (req, res) => {
    const {id1, id2} = req.params;
    try {
      const response = await chat.getChat(id1, id2);
      res.status(200).json(response);
    } catch (error) {
      console.error(error);
      res.status(500).json({error: error.message});
    }
  },
};

module.exports = chatControllers;
