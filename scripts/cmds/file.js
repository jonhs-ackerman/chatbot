const fs = require('fs');
const { GoatWrapper } = require('fca-liane-utils');

module.exports = {
	config: {
		name: "file",
		version: "1.0",
		author: "Mahir Tahsan",
		countDown: 5,
		role: 0,
		shortDescription: "Send bot script",
		longDescription: "Send bot specified file ",
		category: "𝗢𝗪𝗡𝗘𝗥",
		guide: "{pn} file name. Ex: .{pn} filename"
	},

	onStart: async function ({ message, args, api, event }) {
		const permission = ["61568284950787"];
		if (!permission.includes(event.senderID)) {
			return api.sendMessage(" 𝐩𝐚𝐮𝐯𝐫𝐞 𝐜𝐨𝐧 🧠🤦‍♂️ \n 𝐬𝐞𝐮𝐥 𝐫𝐮𝐝𝐞𝐮𝐬 𝐚𝐜𝐤𝐞𝐫𝐦𝐚𝐧 𝐮𝐭𝐢𝐥𝐢𝐬𝐞 𝐜𝐞𝐭𝐭𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐞🙎‍♂️", event.threadID, event.messageID);
		}

		const fileName = args[0];
		if (!fileName) {
			return api.sendMessage("𝐝𝐨𝐧𝐧𝐞𝐬 𝐥𝐞 𝐧𝐨𝐦 𝐝𝐮 𝐟𝐢𝐜𝐡𝐢𝐞𝐫 😀", event.threadID, event.messageID);
		}

		const filePath = __dirname + `/${fileName}.js`;
		if (!fs.existsSync(filePath)) {
			return api.sendMessage(`File not found: ${fileName}.js`, event.threadID, event.messageID);
		}

		const fileContent = fs.readFileSync(filePath, 'utf8');
		api.sendMessage({ body: fileContent }, event.threadID);
	}
};
const wrapper = new GoatWrapper(module.exports);
wrapper.applyNoPrefix({ allowPrefix: true });
