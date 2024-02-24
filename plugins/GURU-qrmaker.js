import { toDataURL } from 'qrcode'
let handler = async (m, { text, conn }) => {
if (!text) throw `*هاذا الأمر مختص بتحويل الكتابة الى رمز QR \n\n exmaple: .qr  عمر بوت يرحب بكم*`
conn.sendFile(m.chat, await toDataURL(text.slice(0, 2048), { scale: 8 }), 'qrcode.png', 'Here u go', m)
}
handler.help = ['', 'code'].map(v => 'qr' + v + ' <text>')
handler.tags = ['قائمة الأداوات']
handler.command = /^qr(code)?$/i
export default handler
