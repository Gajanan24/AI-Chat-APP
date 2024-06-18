const axios = require('axios');
const { PassThrough } = require('stream');

const handleQuery = async (query) => {

    console.log("Question:- ",query);
    

    try {
        const input = {
            messages: [
              {
                role: "user",
                content: query,
              },
            ],
            model: "gemma-7b-it",
          }
        const response = await axios.post(`https://api.groq.com/openai/v1/chat/completions`, input, {  
            headers: {
              "Authorization": `Bearer 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`,
              "Content-Type": "application/json"
            }
          });
    
            
          if (!response.data.choices || !response.data.choices[0].message) {
            return "Sorry, no response from the API"
          }
          console.log("response: - ",response.data.choices[0].message.content)
      
          const ans=  response.data.choices[0].message.content;
          return ans;

    } catch (error) {

        if (error.response) {

            console.log("Error data:", error.response.data);
            console.log("Error status:", error.response.status);
            console.log("Error headers:", error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            console.log("Error request:", error.request);
          } else {
            console.log("Error message:", error.message);
          }
      
          return `Request failed: ${error.message}`;
          
        
    }

 
    
}

module.exports = handleQuery;