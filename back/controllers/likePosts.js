import { pool } from "../helpers/svConnection.js";

const likePost = async(req,res)=>{
    
    try {
        const { id } = req.params;

        const consulta = "UPDATE posts SET likes = likes + 1 WHERE id = $1 RETURNING *";
        const value = [id];

        await pool.query(consulta, value)
        res.json({
            msg: `Post con id ${id} modificado correctamente`
        });       
    } catch (error) {
        res.status(500).json({
            msg: error.message,
            error
        });
    };
};

export{
    likePost
}
