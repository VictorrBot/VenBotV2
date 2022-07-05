let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Uhm...url nya mana?'
  try {
  m.reply('Downloading....')
  let { nowatermark, watermark, audio } = (await require('../lib/tiktok')(args[0])).result
  m.reply('Uploading....')
   conn.sendMessage(m.chat, await getBuffer(nowatermark), 'videoMessage', { quoted: m })
  } catch (e) {
m.reply('Error!')
throw e
  }
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tiktok(dl)?)$/i

module.exports = handler

async function getBuffer(url) {
lets = await require('node-fetch')(url)
bus = await lets.buffer()
return bus
}