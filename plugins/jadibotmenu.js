let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')

let handler = async (m, { conn, usedPrefix }) => {

  let pp = './src/avatar_contact.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let str = `
┌─── ❬ Jadi Bot ❭
│✎ ${usedPrefix}getcode
│✎ ${usedPrefix}jadibot (Limit)
│✎ ${usedPrefix}listjadibot
│✎ ${usedPrefix}berhenti
│✎ ${usedPrefix}stop
│✎ ${usedPrefix}tagall
│✎ *WhatsApp*:wa.me//6281248537085
└────────────
`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'lp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['jadibotmenu']
handler.tags = ['jj']
handler.command = /^(jadibotmenu)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true
handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler