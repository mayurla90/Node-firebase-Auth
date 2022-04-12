const express = require('express');
const cors = require('cors');
const authMiddleware = require('./middleware');
const studentRoutes = require('./routes/student-routes');
const cityRoutes = require('./routes/city-routes');

const app = express();
const port = 5000;

app.use(cors());

//app.use(middleware.decodeToken);

app.use('/api', authMiddleware,studentRoutes.routes);
app.use('/api',authMiddleware, cityRoutes.routes); 

app.get('/api/todos',authMiddleware, (req, res) => {
	return res.json({
		todos: [
			{
				title: 'Task1',
			},
			{
				title: 'Task2',
			},
			{
				title: 'Task3',
			},
		],
	});
});




app.listen(port, () => {
	console.log(`server is running on port ${port}`);
});