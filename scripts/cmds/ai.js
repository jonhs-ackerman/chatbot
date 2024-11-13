const axios = require('axios');

async function fetchFromAI(url, params) {
  try {
    const response = await axios.get(url, { params });
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function getAIResponse(input, userName, userId, messageID) {
  const services = [
    { url: 'https://ai-chat-gpt-4-lite.onrender.com/api/hercai', params: { question: input } }
  ];

  let response = `\n╔════•| ✿ |•════╗\n  💦𝗥𝗨𝗗𝗘𝗨𝗦 𝗔𝗜💦  \n╚════•| ✿ |•════╝\n \n ━━━━━━━━ ⸙ ━━━━━━━━\n salut mortel 💁‍♂️ \n je suis une intelligence artificielle crée par 𝗥𝗨𝗗𝗘𝗨𝗦 𝗔𝗖𝗞𝗘𝗥𝗠𝗔𝗡 a quoi puis je t'aider\n━━━━━━━━━━━━━━━\n\n\n ╔════ ≪ •❈• ≫ ════╗\n  𝗵𝗲𝘆 𝗺𝗼𝗿𝘁𝗲𝗹💁‍♂️\n 𝗿𝗲𝗷𝗼𝗶𝗻𝘀 𝗺𝗼𝗻 𝗴𝗿𝗼𝘂𝗽𝗲 𝗱𝗲𝘀 𝗯𝗼𝘁𝘀 𝗲𝗻 𝘂𝘁𝗶𝗹𝗶𝘀𝗮𝗻𝘁 𝗹𝗮 𝗰𝗼𝗺𝗺𝗮𝗻𝗱𝗲 💦#𝗿𝘂𝗱𝗲𝘂𝘀𝗴𝗰💦\n╚════ ≪ •❈• ≫ ════╝`;
  let currentIndex = 0;

  for (let i = 0; i < services.length; i++) {
    const service = services[currentIndex];
    const data = await fetchFromAI(service.url, service.params);
    if (data && (data.gpt4 || data.reply || data.response)) {
      response = data.gpt4 || data.reply || data.response;
      break;
    }
    currentIndex = (currentIndex + 1) % services.length; // Passer au service suivant
  }

  return { response, messageID };
}

module.exports = {
  config: {
    name: 'ai',
    author: 'HAMED JUNIOR',
    role: 0,
    category: 'ai',
    shortDescription: 'ai to ask anything',
  },
  onStart: async function ({ api, event, args }) {
    const input = args.join(' ').trim();
    if (!input) {
      api.sendMessage("\n╔════•| ✿ |•════╗\n  💦𝗥𝗨𝗗𝗘𝗨𝗦 𝗔𝗜💦  \n╚════•| ✿ |•════╝\n \n ━━━━━━━━ ⸙ ━━━━━━━━\n salut mortel 💁‍♂️ \n je suis une intelligence artificielle crée par 𝗥𝗨𝗗𝗘𝗨𝗦 𝗔𝗖𝗞𝗘𝗥𝗠𝗔𝗡 a quoi puis je t'aider\n━━━━━━━━━━━━━━━\n\n\n ╔════ ≪ •❈• ≫ ════╗\n  𝗵𝗲𝘆 𝗺𝗼𝗿𝘁𝗲𝗹💁‍♂️\n 𝗿𝗲𝗷𝗼𝗶𝗻𝘀 𝗺𝗼𝗻 𝗴𝗿𝗼𝘂𝗽𝗲 𝗱𝗲𝘀 𝗯𝗼𝘁𝘀 𝗲𝗻 𝘂𝘁𝗶𝗹𝗶𝘀𝗮𝗻𝘁 𝗹𝗮 𝗰𝗼𝗺𝗺𝗮𝗻𝗱𝗲 💦#𝗿𝘂𝗱𝗲𝘂𝘀𝗴𝗰💦\n╚════ ≪ •❈• ≫ ════╝", event.threadID, event.messageID);
      return;
    }

    api.getUserInfo(event.senderID, async (err, ret) => {
      if (err) {
        console.error(err);
        return;
      }
      const userName = ret[event.senderID].name;
      const { response, messageID } = await getAIResponse(input, userName, event.senderID, event.messageID);
      api.sendMessage(`💦𝗥𝗨𝗗𝗘𝗨𝗦 𝗔𝗜:\n✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏\n${response}✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏, event.threadID, messageID);
    });
  },
  onChat: async function ({ api, event, message }) {
    const messageContent = event.body.trim().toLowerCase();
    if (messageContent.startsWith("ai")) {
      const input = messageContent.replace(/^ai\s*/, "").trim();
      api.getUserInfo(event.senderID, async (err, ret) => {
        if (err) {
          console.error(err);
          return;
        }
        const userName = ret[event.senderID].name;
        const { response, messageID } = await getAIResponse(input, userName, event.senderID, message.messageID);
        message.reply(`✰. . 💦𝗿𝘂𝗱𝗲𝘂𝘀 𝗮𝗶💦 . .✰ \n✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏\n\n${response}\n✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏\n𝘀𝗲𝗻𝗱𝗲𝗿 𝗻𝗮𝗺𝗲: ${userName} 💬\n \n \n oublie pàs de rejoindre mon groupe en utilisant la commande \n\n💦#𝗥𝗨𝗗𝗘𝗨𝗦𝗚𝗖`, messageID);
api.setMessageReaction("💦", event.messageID, () => {}, true);

      });
    }
  }
};￼Enter
