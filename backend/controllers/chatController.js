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
  setChatController: async (req, res) => {
    const {id_user, id_ent, content_sender} = req.body;
    try {
      const response = await chat.setChat(id_user, id_ent, content_sender);
      res.status(200).json(response);
    } catch (error) {
      console.log(error);
      res.status(200).json({error: error.message});
    }
  },
  getCompanyNameController: async (req, res) => {
    const {id} = req.params;
    try {
      const response = await chat.getCompanyName(id);
      res.status(200).json(response);
    } catch (error) {
      console.error(error);
      res.status(500).json({error: error.message});
    }
  },
};

module.exports = chatControllers;
