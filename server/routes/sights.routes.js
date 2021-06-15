import express from 'express';
import {
  deleteSight,
  getSight,
  getSights,
  postSight,
  updateSight,
} from '../controller/sights.controller.js';

const router = express.Router();

router.get('/api/sights', getSights);

router.get('/api/sights/:sightId', getSight);

router.post('/api/sights', postSight);

router.put('/api/sights/:sightId', updateSight);

router.delete('/api/sights/:sightId', deleteSight);

export default router;
