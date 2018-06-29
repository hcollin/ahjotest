const { types } = require('mobx-state-tree');
const { AhjoServer, AhjoServerModel, AhjoRestEndPoint, AhjoServerStore } = require("AhjoServer");

// Models
const myModel = AhjoServerModel(types.model({
    id: types.identifier(types.number),
    name: types.string
}));

const endPoint = AhjoRestEndPoint(myModel);

const server = AhjoServer();
server.endPoint("model", myModel);

// Actual store
server.store(AhjoServerStore(types.model({
    models: types.array(myModel)
})));

server.start(8080);