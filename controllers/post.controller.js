const db = require('../database');
class PostController {
    async createPost(req, res) {
        const {post_name} = req.body;
        const newPost = await db.query('INSERT INTO post (post_name) VALUES ($1) RETURNING *', [post_name]);
        res.json(newPost.rows[0]);
    }
    async getPosts(req, res) {
        const posts = await db.query('SELECT * FROM post');
        res.json(posts);
    }
    async deletePost(req, res) {
        const id = req.params.id;
        const post_id = await db.query('DELETE FROM post WHERE post_id = $1',[id]);
        res.json(post_id.rows[0]);
    }
}
module.exports = new PostController();