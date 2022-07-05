let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn }) => {
let { name, limit, level, role, age, money, healt, premium, registered } = global.DATABASE.data.users[m.sender] 
pp = await conn.getProfilePicture(global.conn.user.jid)
conn.send2ButtonImg(m.chat, 'Pilih Menu Di Bawah Ya Kak\nDan Jangan Lupa Baca Rules Dibawah Ini\n\nSpam = Banned\nTelp = Blok\n\nSubscribe Me\nhttps://youtube.com/channel/UCJPqI5eVhKPXPL2V8y6pIDA\n\nJoin My Grup WhatsApp Official\nhttps://bit.ly/3xW4rjn\n\n\nMY Instagram\nhttps://instagram.com/ini_rezz19\n', 'https://i.ibb.co/zZyHTj6/f183620b8e89.jpg', `❏ Registered : ${registered ? 'Yes': 'No'}\n❏ Name : ${name}\n❏ Age : ${age}\n❏ Ticket : ${limit}\n❏ Role : ${role}\n❏ Money : ${money}\n❏ Level : ${level}\n❏ Health : ${healt}\n❏ Premium : ${premium ? 'Yes': 'No'}\n\n Thanks To\nNurutomo\nREZZ19 & Reza & AbilBotz & Damz`.trim(), '🥀ALL MENU🥀', '/allmenu', '🌹OWNER BOT🌹', '/owner', m)
  }
handler.help = ['menu', 'help']
handler.tags = ['main'] 
handler.command = /^(menu|help)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false
handler.register = true

handler.fail = null
handler.exp = 20

module.exports = handler


/*
AMBIL AJA BROH BUTONNYA TAPI JAN LUPA TARO NAMA GW DI TQTQ YA SEKIAN TERIMAKASIH
*/