import express from 'express'
import * as func from '../controllers/pattern'

const router = express.Router();

router.get('/',func.findPattern);

export default router