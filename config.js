/* ⚙️ Credits to:
* AzamiJs
* Elrebelde21
* GataNina-Li */

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath, pathToFileURL } from 'url'

 global.owner = [
['34624523702', '⁶⁶⁶Lucifer-OFC⁶⁶⁶', true],
['51955918117', 'Daniel', true],
['50558124470'],
['573106040746', '𝙴𝙳𝙴𝚁', true],
['51992004117', 'HJ', true],
['5214434703586'],
['50499698072'],
['5492215034412'],
['5217294888993'],
['5214437863111'],
['51971959440'],
['595992667005'],
['573012482597']]

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumberCode = '' //Ejemplo: +59309090909
global.confirmCode = ''

global.suittag = ['5214531287294']
global.mods = []
global.prems = []

//Solo desarrolladores aprobados
global.isdev = [ /* ['5217294888993'], */ ['5214434703586'], ['5492266466080'], ['5492266613038'], ['573012482597'], ['5215610314499'], ['51935531943'], ['33760536110'], ['5492964650915'], ['50558124470'], ['573012482597']]

global.packname = '✓YarluxBot-MD✓'
global.author = '⁶⁶⁶Lucifer-OFC⁶⁶⁶'
global.wm = '✓YarluxBot-MD✓'
global.wm2 = '✓Yarlux-bot-MD'
global.jxtxn = 'Lucifer-OFC'
global.cb = '⏤͟͟͞͞✓YａrluxＢｏｔ-ＭＤ'

global.vs = '1.0.2'
global.library = 'Baileys'
global.baileys = '@whiskeysockets/baileys'
global.lenguaje = 'Español'
global.menudi = ['⛶','❏','⫹⫺']
global.dev = 'ʙʏ ᴀxx.ᴏғᴄ'
global.devnum = '+51929972576'

global.cmenut = '╭━━━━━━『';
global.cmenub = '┊✦ ';
global.cmenuf = '╰━═┅═━━━━━━━๑\n';
global.cmenua = '\n⌕ ೋ❀❀ೋ═══ ❀ ═══ೋ❀❀⌕\n     ';
global.dmenut = '*❖━━━╾━━*';
global.dmenub = '*┊»*';
global.dmenub2 = '*┊*';
global.dmenuf = '*╰┅╼─╾━━━━━━*';
global.htjava = '⫹⫺';
global.htki = '*⭑•̩̩͙⊱•••• ☪*';
global.htka = '*☪ ••••̩̩͙⊰•⭑*';
global.comienzo = '• • ◕◕════';
global.fin = '════◕◕ • •';

let file = fileURLToPath(import.meta.url)
watchFile(file, () => { unwatchFile(file)
console.log(chalk.yellow('Se actualizo el archivo config.js'))
import(`${file}?update=${Date.now()}`)
})
