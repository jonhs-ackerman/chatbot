module.exports = {
	config: {
			name: "prefix",
			version: "1.0",
			author: "Shizuka junior",
			countDown: 5,
			role: 0,
			shortDescription: "prefix bot",
			longDescription: "le prefix du bot",
			category: "prefix",
	},
onStart: async function(){}, 
onChat: async function({
	event,
	message,
	getLang
}) {
	if (event.body && event.body.toLowerCase() == "prefix") return message.reply("---------------- » «» « ----------------\n mon prefix est 🩸+🩸---------------- » «» « ----------------\n si tu as un probleme avec une commande tape +help(nom de la commande) pour plus des details💁‍♂️");
}
};
