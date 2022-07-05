let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": "Contoh Pembelian\n355DM 8251936106\nCara Pembelian\nKetik *proses*\nNote : Pastikan ID Mu Benar Karena\nDiamond Tidak Masuk Bukan\nTanggung Jawab Kami\n▌│█║▌║▌║║▌║▌║█│▌▌│█║▌║▌║\n▌│█║▌║▌║║▌║▌║█│▌▌│█║▌║▌║\nT E R P E R C A Y A*©Rezz*\n\nᴄᴏɴᴛᴀᴄᴛ ᴘᴇʀsᴏɴ\nwa.me/6281313726400",
                        "description": "*BUY DM BROH*",
                        "buttonText": "Click Here To List",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                             "rows": [
                                    {
                                        "title": `⦿ 12 Diamonds >= IDR 2.500`,
                                       
                                        "rowId": ".done"
                                    },{
                                        "title": "⦿ 20 Diamonds >= IDR 3.000",
                                        
                                        "rowId": ".done"                 
                                    },{
                                        "title": `⦿ 50 Diamonds >= IDR 7.000`,
                                       
                                        "rowId": ".done"
                                        },{
                                        "title": `⦿ 70 Diamonds >= IDR 9.500`,
                                        "rowld": ".done"
                                        },{
                                        "title": `⦿ 100 Diamonds >= IDR 14.000`,
                                        "rowld": ".done"
                                        },{
                                        "title": `⦿ 140 Diamonds >= IDR 18.700`,
                                        "rowld": ".done"
                                        },{
                                        "title": `⦿ 210 Diamonds >= IDR 28.000`,
                                        "rowld": ".done"
                                        },{
                                        "title": `⦿ 280 Diamonds >= IDR 37.000`,
                                        "rowld": ".done"
                                        },{
                                        "title": `⦿ 355 Diamonds >= IDR 47.000`,
                                        "rowld": ".done"
                                        },{
                                        "title": `⦿ 500 Diamonds >= IDR 65.000`,
                                        "rowld": ".done"
                                        },{
                                        "title": `⦿ 635 Diamonds >= IDR 83.000`,
                                        "rowld": ".done"
                                        },{
                                        "title": `⦿ 720 Diamonds >= IDR 92.000`,
                                        "rowld": ".done"
                                        },{
                                        "title": `⦿ 1075 Diamonds >= IDR 138.000`,
                                        "rowld": ".done"
                                        },{
                                        "title": `⦿ M.MINGGUAN = IDR 30.000`,
                                        "rowld": ".done"
                                        },{
                                        "title": `⦿ M.BULANAN = IDR 118.000`,
                                        "rowld": ".done"
                                      },{
                                        "title": `⦿ 70 Diamonds >= IDR 9.500`,
                                        "rowld": ".done"  
                                    }
                                ]
                            }
                        ], "contextInfo": { "stanzaId": m.key.id,
"participant": m.sender,
"quotedMessage": m.message
}
                    }
                 }, {}), {waitForAck: true})
handler.help = ['topup']
handler.tags = ['topup']
handler.command = /^(topup)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = 20

module.exports = handler