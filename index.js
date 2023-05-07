//import { BingChat } from 'bing-chat'
import { BingChat } from './custombingchat.js'
import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

// Create a new instance of the BingChat API
const api = new BingChat({
  cookie: "1Oagp0sI0-8Uv2Ca9VocwfJPE6uV_Tx89MxboZTFjgYdwQpyq-GZk7KMwIiRr8nQ7bQGsdX_OLLUk8H6N6qf9_PN9m-vy5bSO7GdatOXdrI5v-Yn9ZTt--Y5cdoslebEvWTG7wiNuBLHjPC70INk_hRVkudCd_tDNYURrFpD7OUnwXoD-YhjIM2DimY51h-APiSriMpsnVQAGNUns7TfRlj7jzJDBQNw7VI18z5ynV58"
});

// Define a route for the API
app.post('/api/message', async (req, res) => {
  try {
    // Send the message to the BingChat API
    const response = await api.sendMessage(req.body.message);

    // Send the response back to the client
    res.json({ text: response.text });
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

/*
async function example() {
    const api = new BingChat({
      cookie: "1Oagp0sI0-8Uv2Ca9VocwfJPE6uV_Tx89MxboZTFjgYdwQpyq-GZk7KMwIiRr8nQ7bQGsdX_OLLUk8H6N6qf9_PN9m-vy5bSO7GdatOXdrI5v-Yn9ZTt--Y5cdoslebEvWTG7wiNuBLHjPC70INk_hRVkudCd_tDNYURrFpD7OUnwXoD-YhjIM2DimY51h-APiSriMpsnVQAGNUns7TfRlj7jzJDBQNw7VI18z5ynV58"
    })
  
    const res = await api.sendMessage('What is foracort inhaler')
    console.log(res.text)
  }

example()*/