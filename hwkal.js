©️Confronter Deadpool v2
                 >
*/
const fs = require('fs')
const chalk = require('chalk')

global.region = 'kenya' // serah
//—————「 Set Nama Own & Bot 」—————//
global.ownername = '𝙲𝙾𝙽𝙵𝚁𝙾𝙽𝚃𝙴𝚁' //ubah jadi nama mu, note tanda ' gausah di hapus!
//=================================================//
global.owner = ['254796283064'] // ubah aja pake nomor lu
//==========================zetsuboclient=======================//
global.botname = '𝗗𝗘𝗔𝗗𝗣𝗢𝗢𝗟 𝗕𝗨𝗚' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.packname = '𝘾𝙤𝙣𝙛𝙧𝙤𝙣𝙩𝙚𝙧' // ubah aja ini nama sticker
global.author = '𝙲𝙾𝙽𝙵𝚁𝙾𝙽𝚃𝙴𝚁' // ubah aja ini nama sticker
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'classicsession' //Gausah Juga
global.sp = '⭔' // Gausah Juga
global.wlcm = []
global.wlcmm = []
global.anticall = false
global.autoviewstatus = process.env.autoviewstatus || "TRUE"
//=================================================//
//Gausah Juga
/*
Declaring Menu type

V1 = Photo
V2 = Video
V3 = Text
V4 = Button

*/
global.menutype = "v1"
//=================================================//
//Gausah Juga

global.limitawal = {
    premium: "Infinity",
    free: 5
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
