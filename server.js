const data = require("./db.js");

const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);


// CRUD --> Create, Read, Update, Delete


server.get('/alunos/:index', (req, res) => {
    const { index } = req.params

    return res.json(alunos[index])
});

server.get('/alunos', (req, res) => {

    return res.json(alunos)
});

server.post('/alunos', (req, res) => {
    const { name } = req.body;
    alunos.push(name);

    return res.json(alunos);
});

server.put('/alunos/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    alunos[index] = name;

    return res.json(alunos);
});

server.delete('/alunos/:index', (req, res) => {
    const { index } = req.params;

    data.splice(index, 1);
    return res.json({ message: "O curso foi deletado" });
})


server.delete("/alunos/:index", (req, res) => {
    const alunos = alunos.deleteOne({ _id: req.params.id }, (err) => {
        if (err) return res.status(400).json({
            error: true,
            message: "Error: Aluno não foi apagado com sucesso!"
        });
        return res.json({
            error: false,
            message: "Artigo apagado com sucesso!"
        });
    });
});



server.listen(port, () => {
    console.log(`Server is running in http://localhost:${port}`);
});