let handler = async m => m.reply(`
┏━━°❀❬ *DONASI* ❭❀°━━┓
┣➥ *Dana:* [081248537085]
┣➥ *TSEL:* [081248537085]
┣➥ *Ovo:* [081248537085]
┣➥ *Gopay:* [081248537085]
┃➥ *Trakteer:* [https://trakteer.id/VenBotz/tip]*
┗━━━━━━━━━━━━━━━━
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
