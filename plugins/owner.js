let handler = function (m) {
   this.sendContact(m.chat, '6281248537085','Reza', m) 
  this.sendContact(m.chat, '6281248537085','Owner',m)

}
handler.help = ['owner']
handler.tags = ['info']
handler.command = /^(owner)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
