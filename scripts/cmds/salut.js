module.exports = {
	config: {
			name: "salut",
			version: "1.0",
			author: "Shibai Otsutsuki",
			countDown: 5,
			role: 0,
			shortDescription: "sarcasm",
			longDescription: "sarcasm",
			category: "reply",
	},
onStart: async function(){}, 
onChat: async function({
	event,
	message,
	getLang
}) {
	if (event.body && event.body.toLowerCase() == "salut") return message.reply("╔════•| ✿ |•════╗\n Ξ𝘀𝗮𝗹𝘂𝘁𝗮𝘁𝗶𝗼𝗻𝘀💁‍♂️\n Ξ𝗰𝗼𝗺𝗺𝗲𝗻𝘁 𝘃𝗮 𝘁𝘂 💁‍♂️\nΞ𝘂𝘁𝗶𝗹𝗶𝘀𝗲𝘀 𝗹𝗮 𝗰𝗼𝗺𝗺𝗮𝗻𝗱𝗲\n💦+𝗥𝗨𝗗𝗘𝗨𝗦𝗚𝗖💦\n Ξ𝗽𝗼𝘂𝗿 𝗿𝗲𝗷𝗼𝗶𝗻𝗱𝗿𝗲\n Ξ𝗺𝗼𝗻 𝗴𝗿𝗼𝘂𝗽𝗲 \n Ξ𝗱𝗲𝘀 𝗯𝗼𝘁𝘀\n╚════•| ✿ |•════╝");
}
};
