import express from 'express';
const router = express.Router();

router.post('/join', (req, res) => {
  console.log(req.body);
  return res.send({ join: 'success' });
});

router.post('/login', (req, res) => {
  console.log(req.body);
  return res.send({ login: 'success' });
});

export default router;
