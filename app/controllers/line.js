import handleError from "../utils/handleError";
const axios = require("axios");

export const line = async (req, res) => {
  try {
    setTimeout(webhook, req, res, 10000);
    this.notifyError();
  } catch (error) {
    this.notifyError();
    console.log(error);
    return handleError(res, error);
  }
};

const replyText = (token, texts) => {
  texts = Array.isArray(texts) ? texts : [texts];
  return client.replyMessage(
    token,
    texts.map((text) => ({ type: "text", text }))
  );
};

async function webhook(req, res) {
  if (!Array.isArray(req.body.events)) {
    return res.status(500).end();
  }
  Promise.all(
    req.body.events.map((event) => {
      console.log("event", event);
      if (
        event.replyToken === "00000000000000000000000000000000" ||
        event.replyToken === "ffffffffffffffffffffffffffffffff"
      ) {
        return;
      }
      return handleEvent(event);
    })
  )
    .then(() => res.end())
    .catch((err) => {
      console.error(err);
      res.status(500).end();
    });
}

function handleEvent(event) {
  switch (event.type) {
    case "message":
      const message = event.message;
      switch (message.type) {
        case "text":
          return handleText(message, event.replyToken);
        default:
          throw new Error(`Unknown message: ${JSON.stringify(message)}`);
      }
    default:
      throw new Error(`Unknown event: ${JSON.stringify(event)}`);
  }
}

function handleText(message, replyToken) {
  return replyText(replyToken, message.text);
}

const notifyError = () => {
  var token = process.env.LINE;
  var message = "Bot no response in 10 sec.";
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token,
  };
  const data = { replyToken: token, message };
  axios({
    url: "https://api.line.me/v2/bot/message/reply",
    method: "POST",
    headers,
    data,
  });
};
