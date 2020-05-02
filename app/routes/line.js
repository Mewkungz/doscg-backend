import express from 'express'
import * as func from '../controllers/line'
const line = require('@line/bot-sdk');
const router = express.Router();
const config = {
    "port" : process.env.PORT,
    "channelAccessToken": process.env.CHANNEL_ACCESS_TOKEN,
    "channelSecret": process.env.CHANNEL_SECRET
  }

router.post('/',line.middleware(config),func.line);

export default router