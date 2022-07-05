let handler = async m => m.reply(`
  RULES BOT

1. Jangan spam bot. 
Sanksi: *WARN/SOFT BLOCK*

2. Jangan telepon bot.
Sanksi: *SOFT BLOCK*

3. Jangan mengejek bot.
Sanksi: *PERMANENT BLOCK*

4. Gpp sc gw jelek yg penting 
Bot gw jalan awokawoak
Jika sudah dipahami rules-nya, silakan ketik *#menu* untuk memulai!

Owner  BOTZ:
wa.me/6281313726400

`.trim()) 
handler.help = ['rules'] 
handler.tags = ['rules'] 
handler.command = /^(rules)$/i

module.exports = handler