import { pool } from "../helpers/svConnection.js";


const crearPost = async (req,res)=> {
    try {
        const { titulo, img, descripcion, likes = 0 } = req.body;

        const consulta = 'INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1,$2,$3,$4)';
        const values = [titulo, img, descripcion, likes];

        const newPost = await pool.query(consulta,values); 
        res.json({
            newPost: newPost.rowCount,
            msg: "Post creado con exito"
        });  
    } catch (error) {
        res.status(500).json({
            msg: error.message,
            error
        });       
    };
};


export{
    crearPost
}