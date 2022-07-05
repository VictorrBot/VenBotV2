let handler = m => handler.all = async function (m, { isAdmin, isBotAdmin }) {
  if (m.mtype == 'groupInviteMessage') {
idnya = await this.reply(m.chat, `「 Donasi • Pulsa 」

• *dana:* 6281248537085
• *Telkomsel:* 6281248537085


Donasi Seiklash Nya Yah

Kontak pemilik saya⬇️⬇️
wa.me//6281248537085
`, m)
  }
  return true
}
handler.customPrefix = /^Undangan/i

module.exports = handler