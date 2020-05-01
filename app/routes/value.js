import express from 'express'
import * as func from '../controllers/value'

const router = express.Router();

router.get('/value=:value',func.findValue);

export default router