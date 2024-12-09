import { pool } from "../helpers/svConnection.js"


const obtenerPosts = async (req,res)=>{
    try {
        const { rows } = await pool.query('SELECT * FROM posts')      
        res.json(rows)
    } catch (error) {
        res.status(500).json({
            msg: error.message + 'Por favor comunicarse con el administrador',
            error
        })
    }
}

export{
    obtenerPosts
}
