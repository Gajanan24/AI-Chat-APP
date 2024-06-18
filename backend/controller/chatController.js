const handleQuery = require('../service/chatService')

const handleQueryController = async (req,res) => {
    const query = req.body.query;
      
    try {
        const responseStream = await handleQuery(query);
        res.status(200).json(responseStream);
    } catch (error) {
        console.error("Error in controller: ", error.message);
        res.status(500).send(`Internal Server Error: ${error.message}`);
    }

}

module.exports = handleQueryController