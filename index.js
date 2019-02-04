 //call static file
 const app = require('./app.config.js');
 const api = require('./src/app/class.js');
 const section = require('./src/app/section.js');
 const student = require('./src/app/student.js');
 const attendance = require('./src/app/attendance.js');
 const login = require('./src/app/authentication.js');
 // const student = require('./src/student.js');
 app.config.get('/', (req, res) => {
   res.send('Welcome'); //ws formate
 });

 app.config.use('/class', api);
 app.config.use('/section', section);
 app.config.use('/student', student);
 app.config.use('/attendance', attendance);
 app.config.use('/login', login);
 // app.config.use('/student', student);
