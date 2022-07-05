let handler = async m => m.reply(`
*BOT INI MENGGUNAKAN BASE LINK:https://github.com/Nurutomo/wabot-aq*
`.trim()) // Tambah sendiri kalo mau by REZZ GANZ
handler.help = ['sc']
handler.tags = ['info']
handler.command = /^sc$/i

module.exports = handler
