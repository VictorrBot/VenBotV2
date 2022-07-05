let handler = function (m) {
  // this.sendContact(m.chat, '6281313726400', 'Rezz Gans', m)
  conn.sendContact(m.chat, '6281248537085' , 'jomblo mwwhheeh', m)
  conn.reply(m.chat, `Tuh Pacar Ku Jangan Galak² Ya >_<, Nanti Ku Banned Nanges`, m) 
}
handler.help = ['pacarowner']
handler.tags = ['info']

handler.command = /^(pacarowner)$/i

module.exports = handler


