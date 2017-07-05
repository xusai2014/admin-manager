import express from 'express';
import {join,resolve} from "path";
import {realpathSync} from "fs";
import './db/mongodb-connection';
import  bodyParser  from 'body-parser';
import {api } from './api'
const app = express();
const ROOT_PATH = realpathSync(resolve(__dirname, '../'));

app.use('/node_modules',express.static(join(ROOT_PATH, 'node_modules')));
app.use('/dist',express.static(join(ROOT_PATH, 'dist')));
app.use('/bin',express.static(join(ROOT_PATH, 'bin')));
app.use(bodyParser.json());
app.use('/api/*',api);
app.get('/*', function(req, res) {
    res.send(`
        <html>
        <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
            <script src="/node_modules/jquery/dist/jquery.js"></script>
            <script src="/node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
        </head>
        <body>
        <div id="root"></div>

        <script src="/bin/client.bundle.js"></script>
        </body>
        </html>
    `);
});



app.listen(4000);