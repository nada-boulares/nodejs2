const express = require('express');
const voitureRoutes = require('./routes/voitures');

const app = express();

app.use(express.json());


app.use('/api/voitures', voitureRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

