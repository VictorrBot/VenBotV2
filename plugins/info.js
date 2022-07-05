let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
┏━━°❀❬ *INFO* ❭❀°━━┓
┃
┃> Bot Recoded By :
┃• PGID
┃
┃> Bot Dibuat Dengan :
┃• JavaScript via NodeJS
┃• FFmpeg
┃
┃> Thanks To :
┃• Nurutomo
┃• Drawl Nag
┃• REZZ BOT
┃• AkiraBot
┃
┣━━°❀❬ *DONASI* ❭❀°━━┓
┣➥ *XL:* [-]
┣➥ *Dana:* [-]
┣➥ *Ovo:* [chat aja gw]
┃ 「 *CHAT OWNER* 」
┃ > *Ingin donasi? https://wa.me/6281313726400*
┗━━━━━━━━━━━━━━━━
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*BOT TERVERIFIKASI*', 'status@broadcast')
}
handler.help = ['botinfo']
handler.tags = ['info']
handler.command = /^(botinfo)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
