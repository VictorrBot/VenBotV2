let handler = async m => m.reply(`
📝  *INFO TRANSAKSI*

📝ID (SERVER):
📝JUMLAH DIAMOND:
📝TOP UP GAME:
📝NOMINAL:

*NOTE!:KESALAHAN MENGIRIMKAN ID BUKAN TANGGUNG JWB ADMIN!*
*KETIK*: .done (untuk di proses)
*Powerd By*:®REZZ GANZ
`.trim()) // Tambah sendiri kalo mau by REZZ GANZ
handler.help = ['proses']
handler.tags = ['proses']
handler.command = /^proses$/i

module.exports = handler
