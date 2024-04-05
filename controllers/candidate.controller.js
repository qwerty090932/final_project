const db = require('../database');
class CandidateController {
    async createCandidate(req, res) {
        const {candidate_name, birthday, post_id} = req.body;
        const newCandidate = await db.query('INSERT INTO candidate (candidate_name, birthday, post_id) VALUES ($1, $2, $3) RETURNING *', [candidate_name, birthday, post_id]);
        res.json(newCandidate.rows[0]);
    }
    async getCandidates(req, res) {
        const id = req.query.postId;
        if (!id) {
            const candidates = await db.query('SELECT * FROM candidate JOIN post USING(post_id)');
            res.json(candidates);
        }
        else {
            const candidate = await db.query('SELECT * FROM candidate JOIN post USING(post_id) WHERE post_id = $1', [id]);
            res.json(candidate);
        }
    }
    async getOneCandidate(req, res) {
        const id = req.params.id;
        const candidate = await db.query('SELECT * FROM candidate JOIN post USING(post_id) WHERE candidate_id = $1', [id]);
        res.json(candidate.rows[0]);
    }
    async deleteCandidate(req, res) {
        const id = req.params.id;
        const candidate = await db.query('DELETE FROM candidate WHERE candidate_id = $1', [id]);
        res.json(candidate.rows[0]);
    }
    async getCandidatesWithOnePost(req, res){
        const id = req.query.id;
        const candidate = await db.query('SELECT * FROM candidate JOIN post USING(post_id) WHERE post_id = $1', [id]);
        res.json(candidate);
    }
}
module.exports = new CandidateController();