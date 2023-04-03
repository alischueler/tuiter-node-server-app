import * as dao from "./tuits-dao.js"

const createTuit = async (req, res) => {
    const newTuit = req.body;
    const insertedTuit = await dao.createTuit(newTuit)
    res.json(insertedTuit);
}

const findTuits  = async (req, res) => {
    const tuits = await dao.findTuits();
    res.json(tuits);
}
const updateTuit = async (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updates = req.body;
    const status = await dao.updateTuit(tuitdIdToUpdate, updates)
    res.send(status);
}

const deleteTuit = async (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    const status = await dao.deleteTuit(tuitdIdToDelete);
    res.send(status);
}

const TuitsController = (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}

export default TuitsController
