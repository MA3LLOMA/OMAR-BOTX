import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command }) => {
let res = (await axios.get(`https://raw.githubusercontent.com/Guru322/api/Guru/BOT-JSON/Messi.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendFile(m.chat, url, 'error.jpg', `*Messi*`, m)} 
//conn.sendButton(m.chat, "*https://www.instagram.com/ovmar_1*", author, url, [['⚽ NEXT ⚽', `${usedPrefix + command}`]], 'https://www.instagram.com/ovmar_1'm)}
handler.help = ['messi']
handler.tags = ['قائمة الصور']
handler.command = /^(messi)$/i
export default handler
