import express from 'express'
import bodyParser from 'body-parser'
import { sessionMiddleware } from './middleware/session.middleware'

const port = 8050;
const app = express();

app.use((req, res, next) => {
    console.log(`request made with url: ${req.url} and method ${req.method}`);
    next();
})

app.use(bodyParser.json());

// Cross Origins
app.use((req, resp, next) => {
    console.log(req.get('host'));
    resp.header('Access-Controll-Allow-Origin', `${req.headers.origin}`);
    resp.header('Access-Controll-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    resp.header('Access-Controll-Allow-Credentials', 'true');
    resp.header('Access-Controll-Allow-Methods', 'POST, GET, PUT, PATCH, DELETE');
    next();
})

// Session Middleware for accessing session data through req.session
app.use(sessionMiddleware);

// Routers

app.use()
app.use()
app.use()

app.listen(port, ()=> {
    console.log('app started on port: ' + port);
});