const axios = require("axios");
const fs = require("fs-extra");
const request = require("request");
module.exports = {
  config: {
    name: "leave",
    aliases: ["l"],
    version: "1.0",
    author: "Sandy",
    countDown: 5,
    role: 2,
    shortDescription: "bot will leave gc",
    longDescription: "",
    category: "admin",
    guide: {
      vi: "{pn} [tid,blank]",
      en: "{pn} [tid,blank]"
    }
  },

  onStart: async function ({ api,event,args, message }) {
 var id;
 if (!args.join(" ")) {
 id = event.threadID;
 } else {
 id = parseInt(args.join(" "));
 }
 return api.sendMessage('╭──────────\n𝐯𝐨𝐮𝐬 𝐞𝐭𝐞𝐬 𝐭𝐨𝐮𝐬 \n𝐝𝐞𝐬 𝐩'𝐭𝐢𝐭 𝐦𝐨𝐫𝐯𝐞𝐮𝐱 😀\𝐣𝐞 𝐯𝐨𝐮𝐬 𝐢𝐧𝐬𝐮𝐥𝐭𝐞𝐬\n𝐞𝐭 𝐣𝐞 𝐦𝐞 𝐜𝐚𝐬𝐬𝐞 💁‍♂️\n𝐯𝐞𝐧𝐞𝐳 𝐦𝐞 𝐭𝐚𝐩𝐞𝐫 🏌️‍♂️\n╰──────────╯', id, () => api.removeUserFromGroup(api.getCurrentUserID(), id))
    }
  };
