const express = require('express');
const companyRouter = require('./routes/company.route');
const candidateRouter = require('./routes/candidate.route');
const dealRouter = require('./routes/deal.route');
const postRouter = require('./routes/post.route');
const vacancyRouter = require('./routes/vacancy.route');


const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.use('/api',companyRouter);
app.use('/api', postRouter);
app.use('/api', candidateRouter);
app.use('/api',dealRouter);
app.use('/api',vacancyRouter);
app.listen(PORT, () => console.log('toto'))