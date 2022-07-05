const { MessageType } = require('@adiwajshing/baileys')

let handler = async(m, { conn, text }) => {
    if (!text) return conn.reply(m.chat, 'ya', m)
    if (text > 300) return conn.reply(m.chat, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', m)
    var nomor = m.sender
    const teks1 = `*[ BUYER BEROH ]*\nNomor : wa.me/${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${text}`
    conn.sendMessage('6281313726400@s.whatsapp.net', teks1, MessageType.text)
    conn.reply(m.chat, '✔️pembelian kamu sedang di proses Tunggu sebentar owner akan chat kamu', m)
}
handler.help = ['buy']
handler.tags = ['sksksk']
handler.command = /^(buy)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
