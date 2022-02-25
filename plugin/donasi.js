let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `››╭─〘 *Donasi* 〙
╭╡
│┝‷✧ *Pulsa:* 083813417529
│┝‷✧ *Dana:* gada bang
│┝‷✧ *Linkaja:* 
│┝‷✧ *Gopay:* 
│┝‷✧ *Ovo:* 
│╰───···─────
│⁺◛˖ Ingin Donasi? Chat
│wa.me/6282146218274?text=kak+mau+donasi
╰──────────···───╮
▌│█║▌║▌║║▌║▌║█│▌
`.trim(), `${wm}`, 'Owner', '.owner')

module.exports = handler

let wm = global.botwm
