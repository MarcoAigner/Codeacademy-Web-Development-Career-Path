const express = require('express');
const app = express();
const cors = require('cors');

module.exports = app;

/* Do not change the following line! It is required for testing and allowing
*  the frontend application to interact as planned with the api server
*/
const PORT = process.env.PORT || 4001;

// Add middleware for handling CORS requests from index.html
app.use(cors());

// Add middware for parsing request bodies here:
app.use(express.json());

// Mount your existing apiRouter below at the '/api' path.
const apiRouter = require('./server/api');
app.use('/api', apiRouter);

// This conditional is here for testing purposes:
if (!module.parent) { 


app.use((err, req, res, next) => {
  if(!err.status) {
    err.status = 500;
  }
  console.log(`ERROR (${err.status}): ${err.message}`);
  res.status(err.status).send(err.message);
});

  // Add your code to start the server listening at PORT below:
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})
}
