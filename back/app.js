import express from 'express';
import cors from 'cors';
import { borrarPosts, crearPost, likePost, obtenerPosts } from './controllers/index.js';

const app = express();

//middleware
app.use(express.json());
app.use(cors());

// levantamos servidor en puerto 3000
app.listen(3000, ()=> {
    console.log("Servidor funcionando correctamente")
});


app.get("/posts", obtenerPosts);

app.post("/posts", crearPost);

app.put("/posts/like/:id", likePost);

app.delete("/posts/:id", borrarPosts);


