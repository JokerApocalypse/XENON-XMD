//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? 
//subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs');
const chalk = require('chalk');

//owmner v card
global.ytname = "YT: Dr.Xenon2" //ur yt chanel name
global.socialm = "GitHub: Dr.Xenon2" //ur github or insta name
global.location = "Ivory Coast, Abidjan" //ur location

//new
global.botname = 'XENON XMD' //ur bot name
global.ownernumber = ['2250500107362'] //ur owner number, dont add more than one
global.ownername = '⏤ ͟͞ ❮❮๋ࣩࣧࣧࣧ͜͡➣ 𝐃𝐑 𝐗𝐄𝐍𝐎𝐍 ヤ' //ur owner name
global.websitex = "https://www.drxenoncorp.com"
global.wagc = "....."
global.themeemoji = '🙂'
global.wm = "Xeon Bot Inc."
global.botscript = 'https://github.com/DrXeon' //script link
global.packname = "⏤ ͟͞ ❮❮๋ࣩࣧࣧࣧ͜͡➣ 𝐃𝐑 𝐗𝐄𝐍𝐎𝐍 ヤ"
global.author = "⏤ ͟͞ ❮❮๋ࣩࣧࣧࣧ͜͡➣ 𝐃𝐑 𝐗𝐄𝐍𝐎𝐍 ヤ"
global.creator = "2250500107362@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["2250500107362"] // Premium User

//bot sett
global.typemenu = 'v12' // menu type 'v1' => 'v12'
global.typereply = 'v4' // reply type 'v1' => 'v4'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code

global.listv = ['•','●','■','✿','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆']
global.tempatDB = 'database.json'

global.limit = {
	free: 100,
	premium: 999,
	vip: 'VIP'
}

global.uang = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

global.mess = {
	error: 'Error!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
	done: 'Done'
}

global.bot = {
	limit: 0,
	uang: 0
}

global.game = {
	suit: {},
	menfes: {},
	tictactoe: {},
	kuismath: {},
	tebakbom: {},
}

//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});