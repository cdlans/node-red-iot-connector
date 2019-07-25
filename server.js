"use strict";

const dotenv = require("dotenv");
const express = require("express");
const http = require("http");
const RED = require("node-red");
const settings = require("./settings");

// Read configuration in .env into environment variables
dotenv.config();

// Create an Express app
const app = express();

// Create a server
const server = http.createServer(app);

// Initialise the runtime with a server and settings
RED.init(server, settings);

// Serve the editor UI from httpAdminRoot
app.use(settings.httpAdminRoot, RED.httpAdmin);

// Serve the http nodes UI from httpNodeRoot
app.use(settings.httpNodeRoot, RED.httpNode);

server.listen(settings.uiPort);

// Start the runtime
RED.start();
