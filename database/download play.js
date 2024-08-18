import fetch from 'node-fetch';
import yts from 'yt-search';
import ytdl from 'ytdl-core';
import axios from 'axios';
import {youtubedl, youtubedlv2} from '@bochilteam/scraper';
const handler = async (m, {conn, command, args, text, usedPrefix}) => {
  if (!text) throw `https://github.com/jayden-official *[❗𝐈𝐍𝐅𝐎❗] 𝗘𝗻𝘁𝗲𝗿 𝘁𝗵𝗲 𝗻𝗻𝗮𝗺𝗲 𝗼𝗿 𝘁𝗵𝗲 𝘁𝗶𝘁𝗹𝗲 𝗼𝗳 𝘁𝗵𝗲 𝘀𝗼𝗻𝗴 𝘂𝘀𝗶𝗻𝗴 𝘁𝗵𝗲 𝗳𝗼𝗹𝗹𝗼𝘄𝗶𝗻𝗴 𝗰𝗼𝗺𝗺𝗮𝗻𝗱 *\n\n*—◉ 𝗘𝘅𝗮𝗺𝗽𝗹𝗲:*\n*${usedPrefix + command} Good Feeling - Flo Rida* `;
  try {
    const yt_play = await search(args.join(' '));
    let additionalText = '';
   if (command === 'play') {
      additionalText = 'audio 🔊';
    } else if (command === 'play2') {
      additionalText = 'video 🎥';
    }
    const texto1 = `*◉—⌈🎶𝗦𝗨𝗣𝗘𝗥 𝗠𝗨𝗦𝗜𝗖🎶⌋—◉*\n❏ 📌 *𝗧𝗶𝘁𝗹𝗲:* ${yt_play[0].title}
❏ 📆 *𝗽𝘂𝗯𝗹𝗶𝘀𝗵𝗲𝗱:* ${yt_play[0].ago}
❏ ⌚ *Dur𝗮𝘁𝗶𝗼𝗻:* ${secondString(yt_play[0].duration.seconds)}
❏ 👀 *Vi𝗲𝘄𝘀:* ${`${MilesNumber(yt_play[0].views)}`}
❏ 👤 *Au𝘁𝗵𝗼𝗿:* ${yt_play[0].author.name}
❏ ⏯️ *C𝗵𝗮𝗻𝗻𝗲𝗹:* ${yt_play[0].author.url}
❏ 🆔 *ID:* ${yt_play[0].videoId}
❏ 🪬 *T𝘆𝗽𝗲:* ${yt_play[0].type}
❏ 🔗 *L𝗶𝗻𝗸:* ${yt_play[0].url}\n
❏ *_𝘀𝗲𝗻𝗱𝗶𝗻𝗴 ${additionalText}, 𝗽𝗹𝗲𝗮𝘀𝗲 𝘄𝗮𝗶𝘁 𝗮 𝗺𝗼𝗺𝗲𝗻𝘁．．．_*`.trim();
    conn.sendMessage(m.chat, {image: {url: yt_play[0].thumbnail}, caption: texto1}, {quoted: m});
     if (command == 'play') {
      try {
        const q = '128kbps';
        const v = yt_play[0].url;
        const yt = await youtubedl(v).catch(async (_) => await youtubedlv2(v));
        const dl_url = await yt.audio[q].download();
        const ttl = await yt.title;
        const size = await yt.audio[q].fileSizeH;
        await conn.sendMessage(m.chat, {document: {url: dl_url}, mimetype: 'audio/mpeg', fileName: `${ttl}.mp3`}, {quoted: m});
        await conn.sendMessage(m.chat, {audio: {url: dl_url}, mimetype: 'audio/mpeg', fileName: `${ttl}.mp3`}, {quoted: m});
      } catch {
        try {
          const lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkeysapi}&url=${yt_play[0].url}`);
          const lolh = await lolhuman.json();
          const n = lolh.result.title || 'error';
          await conn.sendMessage(m.chat, {document: {url: lolh.result.link}, fileName: `${n}.mp3`, mimetype: 'audio/mpeg'}, {quoted: m});
          await conn.sendMessage(m.chat, {audio: {url: lolh.result.link}, fileName: `${n}.mp3`, mimetype: 'audio/mpeg'}, {quoted: m});
        } catch {
          try {
            const searchh = await yts(yt_play[0].url);
            const __res = searchh.all.map((v) => v).filter((v) => v.type == 'video');
            const infoo = await ytdl.getInfo('https://youtu.be/' + __res[0].videoId);
            const ress = await ytdl.chooseFormat(infoo.formats, {filter: 'audioonly'});
            conn.sendMessage(m.chat, {document: {url: ress.url}, fileName: __res[0].title + '.mp3', mimetype: 'audio/mp4'}, {quoted: m});
            conn.sendMessage(m.chat, {audio: {url: ress.url}, fileName: __res[0].title + '.mp3', mimetype: 'audio/mp4'}, {quoted: m});
          } catch {
            await conn.reply(m.chat, 'https://github.com/jayden-official *[❗] 𝗘𝗿𝗿𝗼𝗿 𝗻𝗼 𝗽𝗼𝘀𝘀𝗶𝗯𝗹𝗲 𝗮𝘂𝗱𝗶𝗼 𝗳𝗼𝘂𝗻𝗱*', m);
          }
        }
      }
    }
    if (command == 'play' || command == 'playdoc2') {
      try {
        const qu = '360';
        const q = qu + 'p';
        const v = yt_play[0].url;
        const yt = await youtubedl(v).catch(async (_) => await youtubedlv2(v));
        const dl_url = await yt.video[q].download();
        const ttl = await yt.title;
        const size = await yt.video[q].fileSizeH;
        await await conn.sendMessage(m.chat, {document: {url: dl_url}, fileName: `${ttl}.mp4`, mimetype: 'video/mp4', caption: `▢ 📌𝗧𝗜𝗧𝗟𝗘: ${ttl}\n▢ 📥𝗩𝗜𝗗𝗘𝗢 𝗦𝗜𝗭𝗘: ${size}`, thumbnail: await fetch(yt.thumbnail)}, {quoted: m});
      } catch {
        try {
          const mediaa = await ytMp4(yt_play[0].url);
          await await conn.sendMessage(m.chat, {document: {url: dl_url}, caption: cap, mimetype: 'video/mp4', fileName: ttl + `.mp4`}, {quoted: m});
        } catch {
          try {
            const lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${lolkeysapi}&url=${yt_play[0].url}`);
            const lolh = await lolhuman.json();
            const n = lolh.result.title || 'error';
            const n2 = lolh.result.link;
            const n3 = lolh.result.size;
            const n4 = lolh.result.thumbnail;
            await await conn.sendMessage(m.chat, {document: {url: dl_url}, fileName: `${ttl}.mp4`, mimetype: 'video/mp4', caption: `▢ 📌𝗧𝗜𝗧𝗟𝗘: ${ttl}\n▢ 📥𝗩𝗜𝗗𝗘𝗢 𝗦𝗜𝗭𝗘: ${size}`, thumbnail: await fetch(yt.thumbnail)}, {quoted: m});
          } catch {
            await conn.reply(m.chat, '*[❗] 𝗘𝗿𝗿𝗼𝗿 𝗻𝗼 𝗽𝗼𝘀𝘀𝗶𝗯𝗹𝗲 𝘃𝗶𝗱𝗲𝗼 𝗳𝗼𝘂𝗻𝗱*', m);
          }
        }
      }
    }
  } catch {
    throw '*[❗𝐈𝐍𝐅𝐎❗] 𝗘𝗿𝗿𝗼𝗿 𝗻𝗼 𝗽𝗼𝘀𝘀𝗶𝗯𝗹𝗲 𝘃𝗶𝗱𝗲𝗼  𝗳𝗼𝘂𝗻𝗱*';
  }
};
handler.help = ['play', 'play2'].map((v) => v + ' < busqueda >');
handler.tags = ['downloader'];
handler.command = /^(play|play2)$/i;
export default handler;

async function search(query, options = {}) {
  const search = await yts.search({query, hl: 'es', gl: 'ES', ...options});
  return search.videos;
}

function MilesNumber(number) {
  const exp = /(\d)(?=(\d{3})+(?!\d))/g;
  const rep = '$1.';
  const arr = number.toString().split('.');
  arr[0] = arr[0].replace(exp, rep);
  return arr[1] ? arr.join('.') : arr[0];
}

function secondString(seconds) {
  seconds = Number(seconds);
  const d = Math.floor(seconds / (3600 * 24));
  const h = Math.floor((seconds % (3600 * 24)) / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  const dDisplay = d > 0 ? d + (d == 1 ? ' day, ' : ' days, ') : '';
  const hDisplay = h > 0 ? h + (h == 1 ? ' hour, ' : ' hours, ') : '';
  const mDisplay = m > 0 ? m + (m == 1 ? ' minute, ' : ' minutes, ') : '';
  const sDisplay = s > 0 ? s + (s == 1 ? ' second' : ' seconds') : '';
  return dDisplay + hDisplay + mDisplay + sDisplay;
}

function bytesToSize(bytes) {
  return new Promise((resolve, reject) => {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) return 'n/a';
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
    if (i === 0) resolve(`${bytes} ${sizes[i]}`);
    resolve(`${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`);
  });
}

async function ytMp3(url) {
  return new Promise((resolve, reject) => {
    ytdl.getInfo(url).then(async (getUrl) => {
      const result = [];
      for (let i = 0; i < getUrl.formats.length; i++) {
        const item = getUrl.formats[i];
        if (item.mimeType == 'audio/webm; codecs=\"opus\"') {
          const {contentLength} = item;
          const bytes = await bytesToSize(contentLength);
          result[i] = {audio: item.url, size: bytes};
        }
      }
      const resultFix = result.filter((x) => x.audio != undefined && x.size != undefined);
      const tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].audio}`);
      const tinyUrl = tiny.data;
      const title = getUrl.videoDetails.title;
      const thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
      resolve({title, result: tinyUrl, result2: resultFix, thumb});
    }).catch(reject);
  });
}

async function ytMp4(url) {
  return new Promise(async (resolve, reject) => {
    ytdl.getInfo(url).then(async (getUrl) => {
      const result = [];
      for (let i = 0; i < getUrl.formats.length; i++) {
        const item = getUrl.formats[i];
        if (item.container == 'mp4' && item.hasVideo == true && item.hasAudio == true) {
          const {qualityLabel, contentLength} = item;
          const bytes = await bytesToSize(contentLength);
          result[i] = {video: item.url, quality: qualityLabel, size: bytes};
        }
      }
      const resultFix = result.filter((x) => x.video != undefined && x.size != undefined && x.quality != undefined);
      const tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].video}`);
      const tinyUrl = tiny.data;
      const title = getUrl.videoDetails.title;
      const thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
      resolve({title, result: tinyUrl, rersult2: resultFix[0].video, thumb});
    }).catch(reject);
  });
}

async function ytPlay(query) {
  return new Promise((resolve, reject) => {
    yts(query).then(async (getData) => {
      const result = getData.videos.slice( 0, 5 );
      const url = [];
      for (let i = 0; i < result.length; i++) {
        url.push(result[i].url);
      }
      const random = url[0];
      const getAudio = await ytMp3(random);
      resolve(getAudio);
    }).catch(reject);
  });
}

async function ytPlayVid(query) {
  return new Promise((resolve, reject) => {
    yts(query).then(async (getData) => {
      const result = getData.videos.slice( 0, 5 );
      const url = [];
      for (let i = 0; i < result.length; i++) {
        url.push(result[i].url);
      }
      const random = url[0];
      const getVideo = await ytMp4(random);
      resolve(getVideo);
    }).catch(reject);
  });
}


// import { youtubeSearch } from '@bochilteam/scraper'
// import fetch from 'node-fetch'
// let handler = async (m, { conn, command, text, usedPrefix }) => {
// if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] Please enter the name or the title of the song using the following command*\n\n*—◉ 𝗲𝘅𝗮𝗺𝗽𝗹𝗲:*\n*${usedPrefix + command} Good Feeling - Flo Rida*`
// try {
// let vid = (await youtubeSearch(text)).video[0]
// let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
// const urll = 'https://www.youtube.com/watch?v=' + videoId
// var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
// var document = doc[Math.floor(Math.random() * doc.length)]
// const buttons = [
// { buttonId: `#ytmp3doc ${urll}`, buttonText: { displayText: '🎵 𝐀𝐔𝐃𝐈𝐎𝐃𝐎𝐂 🎵' }, type: 1 },
// { buttonId: `#ytmp4doc ${urll}`, buttonText: { displayText: '🎥 𝐕𝐈𝐃𝐄𝐎𝐃𝐎𝐂 🎥' }, type: 1 },
// { buttonId: `#playlist ${text}`, buttonText: { displayText: '📋𝗥𝗘𝗦𝗨𝗟𝗧𝗦 𝗙𝗢𝗨𝗡𝗗 📋' }, type: 1 }, ]
// let texto1 = `*◉—⌈🔊 𝐏𝐋𝐀𝐘 𝐃𝐎𝐂𝐔𝐌𝐄𝐍𝐓 🔊⌋—◉*\n
// ❏ 📌 *𝗧𝗜𝗧𝗟𝗘:* ${title}
// ❏ 📆 *𝗣𝗨𝗕𝗟𝗜𝗦𝗛𝗘𝗗:* ${publishedTime}
// ❏ ⌚ *𝗗𝗨𝗥𝗔𝗧𝗜𝗢𝗡:* ${durationH}
// ❏ 👀 *𝗩𝗜𝗘𝗪𝗦:* ${viewH}
// ❏ 📇 *𝗗𝗘𝗦𝗖𝗥𝗜𝗣𝗧𝗜𝗢𝗡:* ${description}
// ❏ 🔗 *𝗟𝗜𝗡𝗞:* ${urll}`.trim()
// let buttonMessage = { "document": { url: "https://wa.me/5219992095479" }, "fileName": '❏ 🌿 ʀᴇᴘʀᴏᴅᴜᴄᴛᴏʀ ᴅᴇ ʏᴏᴜᴛᴜʙᴇ', "mimetype": 'application/vnd.ms-excel', "caption": texto1, "fileLength": '99999999999999', "mentions": [m.sender], "footer": wm, "buttons": buttons, "headerType": 4, contextInfo: { "mentionedJid": [m.sender], "externalAdReply": { "showAdAttribution": true, "title": `${title}`, "mediaType": 2, "previewType": "VIDEO", "thumbnail": await (await fetch(thumbnail)).buffer(), "mediaUrl": `${urll}`, "sourceUrl": `https://github.com/BrunoSobrino/TheMystic-Bot-MD` }}}
// conn.sendMessage(m.chat, buttonMessage, { quoted: m })
// } catch {
// try {
// let vid2 = await (await fetch(`https://api.lolhuman.xyz/api/ytsearch?apikey=${lolkeysapi}&query=${text}`)).json()
// let { videoId, title, views, published, thumbnail } = await vid2.result[0]
// const url = 'https://www.youtube.com/watch?v=' + videoId
// let ytLink = await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`)
// let jsonn = await ytLink.json()
// let aud = await jsonn.result.audio
// let capt = `❏ 📌 *𝗧𝗜𝗧𝗟𝗘:* ${title}\n❏ 📆 *𝗣𝗨𝗕𝗟𝗜𝗦𝗛𝗘𝗗:* ${published}\n❏ 👀 *𝗩𝗜𝗘𝗪𝗦:* ${views}\n❏ 🔗 *𝗟𝗜𝗡𝗞:* ${url}`
// const buttons = [{buttonId: `#playlist ${title}`, buttonText: {displayText: '📋 𝗥𝗘𝗦𝗨𝗟𝗧𝗦 𝗙𝗢𝗨𝗡𝗗 📋'}, type: 1}]
// const buttonMessage = { image: {url: thumbnail}, caption: capt, footer: '*ᴇɴᴠɪᴀɴᴅᴏ ᴀᴜᴅɪᴏ, ᴀɢᴜᴀʀᴅᴇ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ...*', buttons: buttons, headerType: 4 }
// let msg = await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
// conn.sendMessage(m.chat, { document: { url: aud }, mimetype: 'audio/mpeg', fileName: `${title}.mp3`}, {quoted: msg})
// } catch {
// throw '*[❗𝐈𝐍𝐅𝐎❗] 𝗘𝗿𝗿𝗼𝗿, 𝗽𝗹𝗲𝗮𝘀𝗲 𝘁𝗿𝘆 𝗮𝗴𝗮𝗶𝗻 𝗹𝗮𝘁𝗲𝗿*'}}}
// handler.help = ['playdoc', 'play3'].map(v => v + ' <pencarian>')
// handler.tags = ['downloader']
// handler.command = /^play3|playdoc?$/i
// export default handler
