let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": "Hallo kak\nSaya BOT\nPilih Menu Di Bawah Yaa\nDan Jangan Lupa Baca Dibawah ini\n\nSpam = Banned\nTelp = Blok",
                        "description": "*©BOT*",
                        "buttonText": "Click Here To List",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                             "rows": [
                                    {
                                        "title": `MENU BOT`,
                                       
                                        "rowId": ".allmenu"
                                    },{
                                        "title": "INFO BOT",
                                        
                                        "rowId": ".botinfo"                 
                                    },{
                                        "title": `MENU LAINYA`,
                                       
                                        "rowId": ".tutorial"
                                    }
                                ]
                            }
                        ], "contextInfo": { "stanzaId": m.key.id,
"participant": m.sender,
"quotedMessage": m.message
}
                    }
                 }, {}), {waitForAck: true})
handler.command = ['menu1']
handler.register = true
module.exports = handler