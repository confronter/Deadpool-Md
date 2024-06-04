/*Buat Lu Yang Jual Sc Ini Yang Jujur Jangan Sampe Nipu Apalagi Lari Dari Tanggung Jawab

Base Ori : Hw Mods
Base Haikal Hw Mods : Copyan Dari Base Dika

• [ Recode Bye > ZetsuboXygen777]
   # AND↓
   THANKS TO >
  XygenGod777( Watashi / 私 )
  Hw Mods Wa / Haikal (Base)
  Adiwajshing (Baileys)
  whiskeysockets (Baileys)
  Thunder X7 (Inspirate)
  Pak Tzy (Inspirate)
  ♥️ ありがとう
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
