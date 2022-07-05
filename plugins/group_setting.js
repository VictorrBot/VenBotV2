let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": "*Grup Setting*\n_*Btw Ni Sc Di Jual 40K*_\n_*Minat?*_\n_*Pc Owner wa.me/6281313726400*_",
                        "description": "©Button",
                        "buttonText": "SELECT",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                                "rows": [
                                    {
                                        "title": ` ◉ MENU BOT`,
                                        "rowId": ".allmenu"
                                    }, {
                                       "title": ` ◉ Group Buka`,
                                       "rowId": ".group open"
                                    },  {
                                       "title": ` ◉ Group Close`,
                                       "rowId": ".group close"
                                    }, { 
                                       "title": ` ◉ Antilink On`,
                                        "rowId": ".enable antilink"
                                    }, {
                                       "title": ` ◉ Antilink Of`,
                                       "rowId": ".disable antilink"
                                    }, {
                                       "title": ` ◉ Welcome On`,
                                       "rowId": ".enable welcome"                               
                                    }, { 
                                        "title": ` ◉ Welcome Of`,
                                        "rowId": ".disable welcome"
                                    }
                                ]
                            }
                        ], "contextInfo": { "stanzaId": m.key.id,
"participant": m.sender,
"quotedMessage": m.message
}
                    }
                 }, {}), {waitForAck: true})

handler.command = ['gc']
module.exports = handler
handler.tags = ['jdhsnaj'] 
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