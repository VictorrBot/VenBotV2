let handler = function (m) {
   this.sendContact(m.chat, '6281313726400','REZZ', m) 
let info = `
*DI SPAM?SINI ADU MEKANIK BOSS!*
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*TUH OWNER GW JAN DI SPAM!*', 'status@broadcast')
}
handler.help = ['creator']
handler.tags = ['ks']
handler.command = /^(creator)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
