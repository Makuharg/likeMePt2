import { pool } from "../helpers/svConnection.js";

const borrarPosts = async(req,res)=> {
    try {
        const { id } = req.params;

        const consulta = 'DELETE FROM posts WHERE id = $1'
        const value = [id]
    
        await pool.query(consulta, value)
        res.json({
            msg: `Post con id ${id} eliminado correctamente`
        });
    } catch (error) {
        res.status(500).json({
            msg: error.message,
            error
        }); 
    };
};


export{
    borrarPosts
}