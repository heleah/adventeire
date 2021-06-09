import express from 'express';
import {
  deleteSight,
  getSight,
  getSights,
  postSight,
  updateSight,
} from '../controller/sights.controller.js';

const router = express.Router();

router.get('/sights', getSights);

router.get('/sights/:sightId', getSight);

router.post('/sights', postSight);

router.put('/sights/:sightId', updateSight);

router.delete('/sights/:sightId', deleteSight);

export default router;
