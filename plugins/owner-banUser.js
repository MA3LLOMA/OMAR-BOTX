//import db from '../lib/database.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
   let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else who = m.chat
    let user = global.db.data.users[who]
    //if (!who) throw `قم بالرد على شخص ما\n\n📌 Example : ${usedPrefix + command} @user`
    let users = global.db.data.users
    users[who].banned = true
    conn.reply(m.chat, `
*ثم حظرك من إستخدام البوت 🤕* \n *❤️مجموعتنا على واتساب إنظم وسوف يتم ازالة الحظر تلقائيا* \n https://chat.whatsapp.com/K6V9If35p3HAWfUjtEECVt

───────────
@${who.split`@`[0]} لايمنك إستخدام هاذا البوت حتى يتم ازالة الحظر `, m, { mentions: [who] })
}
handler.help = ['ban @user']
handler.tags = ['owner']
handler.command = /^ban$/i
handler.rowner = true

export default handler
