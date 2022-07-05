let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": "HALO KAK\nPilih Menu Lainya Di Bawah Yaa",
                        "description": "*REZZ-BOT*",
                        "buttonText": "Click Here To List",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                             "rows": [
                                    {
                                        "title": `Download Menu`,
                                        "description": "\nI Want To Use Download Menu",
                                        "rowId": ".downloadmenu"
                                    },{
                                        "title": "Database Menu",
                                        "description": "\nI Want To Use Database Menu",
                                        "rowId": ".dbmenu"                 
                                    },{
                                        "title": "Button Menu",
                                        "description": "\nI Want To Use Button Menu",
                                        "rowId": ".button"                 
                                    },{
                                    	"title": "All Menu",
                                        "description": "\nI Want To Use All Menu",
                                        "rowId": ".allmenu"                 
                                    },{
                                        "title": "Jadibot Menu",
                                        "description": "\nI Want To Use Jadibot Menu",
                                        "rowId": ".jadibotmenu"                 
                                    },{
                                        "title": "Owner Menu",
                                        "description": "\nI Want To Use Owner Menu",
                                        "rowId": ".ownermenu"                 
                                    },{
                                        "title": "Hentai Menu",
                                        "description": "\nI Want To Use Hentai Menu",
                                        "rowId": ".hentaimenu"                 
                                    },{
                                        "title": "Absen Menu",
                                        "description": "\nI Want To Use Absen Menu",
                                        "rowId": ".absenmenu"                 
                                    },{
                                        "title": "otakulatest",
                                        "description": "\nI neww fitur",
                                        "rowId": ".kodebahasa"
                                    }
                                ]
                            }
                        ], "contextInfo": { "stanzaId": m.key.id,
"participant": m.sender,
"quotedMessage": m.message
}
                    }
                 }, {}), {waitForAck: true})
handler.command = ['tutorial']
handler.register = true
module.exports = handler