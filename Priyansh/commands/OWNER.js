 const fs = require("fs");
module.exports.config = {
	name: "owner",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Arun", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "...",
    cooldowns: 100, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("boss") ||
     react.includes("virat") || 
react.includes("owner")) {
		var msg = {
				body: "★𝗢𝘄𝗻𝗲𝗿 + ❤️...🅰︎🅰︎🅼︎🅸︎🆁︎ 🆃︎🅰︎🅱︎🅷︎🅰︎🅸︎...❤️ ● ──────────────── ●𝐀𝐀𝐌𝐈𝐑 𝐓𝐀𝐁𝐇𝐀𝐈 ● ──────────────── ●𝐎𝐰𝐧𝐞𝐫 ➻❤️....🇦‌🇦‌🇲‌🇮‌🇷‌ 🇹‌🇦‌🇧‌🇭‌🇦‌🇮‌....❤️▶︎ ●─────────────────────────────── ●.•♫•♬•एक बाजार लगा मोहब्बत सौदेबाजी जोरों से हुई =किसी को मिला खरीदार अच्छा अपनी यारी चोरों से हुई हमको हमी से चुराया उसने अपना करीबी खास यार बताया उसने लकीरें इन हाथों से फिसल गई वक्त बदला तो वह भी बदल गई जिस दिन अलग हुए मर जाऊंगी कहां करती थी  मोहब्बत नहीं हमारा गुस्सा भी सह करती थी परछाई बनकर साथ रहती थी दूर जाने से आंखों से बहती थी बो 𝗜 𝗠𝗜𝗦𝗦 𝗨 𝗝𝗔𝗔𝗡 🥰❤️●────────────────────────────────●●─────────────────────────────── ●.•♫•♬•𝐊𝐀𝐒𝐓𝐄 𝐆𝐀𝐈 𝐊𝐈𝐍𝐀𝐑𝐀 𝐆𝐘𝐀 𝟐 𝐃𝐈𝐋𝐎 𝐊𝐀 𝐒𝐇𝐀𝐑𝐀 𝐆𝐘𝐀 𝐊𝐎𝐈 𝐏𝐇𝐔𝐂𝐇 𝐀𝐀𝐌𝐈𝐑 𝐓𝐀𝐁𝐇𝐀𝐈]𝐊𝐇𝐀 𝐆𝐘𝐀 𝐔𝐒𝐊𝐈 𝐌𝐎𝐎𝐇𝐁𝐀𝐓 𝐌𝐄 𝐌𝐀𝐑𝐀 𝐆𝐘𝐀[[🫰😄❤️‍🩹●─────────────────────────────── ●.•♫•♬•‎★━━━━━━━━━━━━━━━━━‎━━━━━━━━━━━━━★☈︎🍒💞🥰𝗧𝗛𝗨𝗧𝗛𝗔 𝗡𝗛𝗜 𝗞𝗔𝗕𝗛𝗜 𝗬𝗔𝗔𝗗 𝗞𝗔 𝗥𝗜𝗦𝗧𝗔 𝗕𝗔𝗔𝗧 𝗛𝗢 𝗬𝗔 𝗡𝗔 𝗛𝗢 𝗧𝗔𝗥𝗜 𝗬𝗔𝗔𝗗 𝗝𝗔𝗥𝗨𝗥 𝗔𝗧𝗜 𝗛𝗔𝗜 =-==-=-𝐈 𝐌𝐈𝐒𝐒 𝐔 𝐉𝐀𝐀𝐍 🎀❤️‍🩹🚬⏎‎★━━━━━━━━━━━━‎━━━━‎━━━━━━━━━━━━━★✧═══════════════•❁❀❁•═══════════════✧❤️‍🩹😘🫰𝗔𝗕 𝗧𝗢 ख्वाबों 𝗠𝗘 𝗔𝗡𝗔 𝗖𝗛𝗢𝗥 𝗗𝗢 𝗔𝗕 𝗞𝗢𝗡 𝗦𝗔 𝗦𝗛𝗧𝗘 𝗛𝗔𝗜==𝗧𝗔𝗥𝗔 𝗦𝗛𝗧𝗘 𝗠𝗘 𝗕𝗛𝗜 𝗕𝗔𝗥𝗕𝗔𝗗 𝗧𝗛𝗘 𝗢𝗨𝗥 𝗧𝗔𝗥𝗔 𝗕𝗔𝗗 𝗕𝗛𝗜 𝗕𝗔𝗥𝗕𝗔𝗗 𝗛𝗔𝗜 🥺😐🥰✧═══════════════•❁❀❁•═══════════════✧ ",attachment: fs.createReadStream(__dirname + `/noprefix/raj.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("📷", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

	}
