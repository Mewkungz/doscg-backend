import express from 'express'
import * as func from '../controllers/map'

const router = express.Router();

router.get('/',func.findMap);

export default router