const fs = require('fs');
const moment = require('moment-timezone');

module.exports = {
  config: {
    name: "rudeusgc",
    aliases: ["rudeusgc"],
    version: "1.0",
    author: "AceGun",
    countDown: 5,
    role: 0,
    shortDescription: {
      vi: "",
      en: "add user in thread"
    },
    longDescription: {
      vi: "",
      en: "add any user to bot owner group chat"
    },
    category: "chat box",
    guide: {
      en: "{pn}sandrinagc"
    }
  },

  onStart: async function ({ api, event, args }) {
    const threadID = "8702108223199168";

    try {
      // Check if the user is already in the group chat
      const threadInfo = await api.getThreadInfo(threadID);
      const participants = threadInfo.participantIDs;

      if (participants.includes(event.senderID)) {
        api.sendMessage("⚠ | 💌 𝐕𝐨𝐮𝐬 ê𝐭𝐞𝐬 𝐝é𝐣à 𝐝𝐚𝐧𝐬 𝐧𝐨𝐭𝐫𝐞 𝐝𝐢𝐬𝐜𝐮𝐬𝐬𝐢𝐨𝐧 𝐝𝐮 𝐠𝐫𝐨𝐮𝐩𝐞 💌\n le nom du groupe c'est 🔥𝗥𝗨𝗗𝗘𝗨𝗦 𝗕𝗢𝗧𝗦🔥.", event.threadID);

        // Set ⚠ reaction for already added user
        api.setMessageReaction("⚠", event.messageID, "👍", api);
      } else {
        // If not, add the user to the group chat
        await api.addUserToGroup(event.senderID, threadID);
        api.sendMessage("✅ | 💌 𝐓𝐮 𝐚𝐬 𝐝𝐞́𝐣𝐚̀ 𝐞́𝐭𝐞́ 𝐚𝐣𝐨𝐮𝐭𝐞𝐫 𝐝𝐚𝐧𝐬 𝐥𝐞 𝐠𝐫𝐨𝐮𝐩𝐞🔥𝗥𝗨𝗗𝗘𝗨𝗦 𝗕𝗢𝗧𝗦🔥 𝐬𝐢 𝐭𝐮 𝐧𝐞 𝐥𝐞 𝐭𝐫𝐨𝐮𝐯𝐞 𝐩𝐚𝐬, 𝐯𝐞́𝐫𝐢𝐟𝐢𝐞 𝐭'𝐚 𝐛𝐨𝐢𝐭𝐞 𝐝'𝐢𝐧𝐯𝐢𝐭𝐚𝐭𝐢𝐨𝐧 𝐩𝐚𝐬 𝐦𝐬𝐠 𝐨𝐮 𝐭'𝐚 𝐛𝐨𝐢𝐭𝐞 𝐝𝐞 𝐬𝐩𝐚𝐦 💌 .", event.threadID);

        // Set ✅ reaction for successfully added user
        api.setMessageReaction("✅", event.messageID, "👍", api);
      }
    } catch (error) {
      api.sendMessage("❌ | 💌 𝐄𝐜𝐡𝐞𝐜 𝐝𝐞 𝐯𝐨𝐭𝐫𝐞 𝐚𝐣𝐨𝐮𝐭 𝐚 𝐥𝐚 𝐝𝐢𝐬𝐜𝐮𝐬𝐬𝐢𝐨𝐧 𝐝𝐞 𝐠𝐫𝐨𝐮𝐩𝐞 💌\n si possible envoie un message a rudeus pour etre ajouté par lui 💁‍♂️\n\nappuie sur ce lien pour voir son profil┎━─━─━─━─━─━─━─━─━┒\nhttps://www.facebook.com/profile.php?id=61568284950787\n┗━━━━━━━━━━━━━┛ ", event.threadID);

      // Set ❌ reaction for failed adding user
      api.setMessageReaction("❌", event.messageID, "👍", api);
    }
  }
};
