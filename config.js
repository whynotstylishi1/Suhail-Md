const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "994402528013";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_51_06_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDQxLFxuICAgICAgICAxMTksXG4gICAgICAgIDY1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDk0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3LFxuICAgICAgICA5NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTk0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDM1LFxuICAgICAgICA2NixcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDMzLFxuICAgICAgICA5LFxuICAgICAgICAzMyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxODYsXG4gICAgICAgIDc2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDkwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDM3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDc5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMTgwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxODMsXG4gICAgICAgIDEzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDU1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDU1LFxuICAgICAgICAxNCxcbiAgICAgICAgMjQxLFxuICAgICAgICAzMSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA2NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDgxLFxuICAgICAgICA3MixcbiAgICAgICAgMTkwLFxuICAgICAgICAyNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNjksXG4gICAgICAgIDI0LFxuICAgICAgICA4OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDU4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTM2LFxuICAgICAgICA0OCxcbiAgICAgICAgMjksXG4gICAgICAgIDM3LFxuICAgICAgICA4MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTE3LFxuICAgICAgICA2MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA5MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDU2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQzLFxuICAgICAgICA2OCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDk3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMzYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMzgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAzMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTksXG4gICAgICAgIDI2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTc4LFxuICAgICAgICA2NixcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkzLFxuICAgICAgICA0MixcbiAgICAgICAgMTMsXG4gICAgICAgIDY5LFxuICAgICAgICAyNixcbiAgICAgICAgMTMsXG4gICAgICAgIDM4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjUyLFxuICAgICAgICA1NCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDczLFxuICAgICAgICAxMTEsXG4gICAgICAgIDUxLFxuICAgICAgICA1NixcbiAgICAgICAgMjAzLFxuICAgICAgICA1MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDMyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDM4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDQyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDU0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNzRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDExLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDczLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjI4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjMxLFxuICAgICAgICA1NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDUxLFxuICAgICAgICA3LFxuICAgICAgICAxODcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOCxcbiAgICAgICAgODYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQwLFxuICAgICAgICAwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDkyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDc1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDQzLFxuICAgICAgICAxOSxcbiAgICAgICAgMTE2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTIzLFxuICAgICAgICAzNixcbiAgICAgICAgMjQ4LFxuICAgICAgICA2MyxcbiAgICAgICAgMjEwLFxuICAgICAgICA1MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTI5LFxuICAgICAgICA5MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDIzLFxuICAgICAgICA5NyxcbiAgICAgICAgMTIxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidUlDdTJyUXREOVgrQVNZYkRkK1pyK29JbWNiQ0psSktwMlJQK2s2TFhtUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5OTQ0MDI1MjgwMTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjIxNEJEODE3RUI1N0ZBNEVFNTAzMjY5MDE2NUJBMjM2XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxODMwODI4NVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJneDl6aUF6Z1JwZVpseDZoLVFsd1l3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjQ5ZDVmM2E1LTkyN2QtNGFhZC1hNzhjLTcyYWM4NWRjOTdiM1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjksXG4gICAgICAyNixcbiAgICAgIDE3MCxcbiAgICAgIDcwLFxuICAgICAgOTEsXG4gICAgICAyNDMsXG4gICAgICAxNDYsXG4gICAgICAxMTYsXG4gICAgICA5NSxcbiAgICAgIDE3MixcbiAgICAgIDU3LFxuICAgICAgMTcxLFxuICAgICAgMTksXG4gICAgICAyNDgsXG4gICAgICA0MCxcbiAgICAgIDE2MyxcbiAgICAgIDIxMyxcbiAgICAgIDk1LFxuICAgICAgMTk5LFxuICAgICAgMTU4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0NixcbiAgICAgIDEyOCxcbiAgICAgIDE4NyxcbiAgICAgIDM1LFxuICAgICAgMjUxLFxuICAgICAgMjI2LFxuICAgICAgMTQzLFxuICAgICAgMTMsXG4gICAgICAzNixcbiAgICAgIDc5LFxuICAgICAgMTExLFxuICAgICAgMTI2LFxuICAgICAgMTUxLFxuICAgICAgNzgsXG4gICAgICAxODAsXG4gICAgICAxMTUsXG4gICAgICAxMCxcbiAgICAgIDE5MyxcbiAgICAgIDExMCxcbiAgICAgIDYyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkdBSlRYUUUyXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5OTQ0MDI1MjgwMTM6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkJscFwiLFxuICAgIFwibGlkXCI6IFwiODU4NDQwMTQ2OTAzNzQ6MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKSG1xTHdDRUxpYnJiTUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInp6RnhwTHhHWm00OXJscWlRRW5tQ2tXajdQdnBObE1VeG9RNFVnTnZNRDg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSHJCcmEzTDFtV3h5dzNaUWp0UFRielBRYkdZQUVLM1VaaHhjRVE0UTZZTkdkenp5MzlBa0tHeThHcG5MZjk3WHNEbmF4QzFKMmxqeUtkTmdMMzRHQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTEtORWRJeXNJR09lTXBDbTBoODc4VUxZTnE5Q1kvTVZTbUVhWVcyMmIvdzltZ05vd2RTKzVuWnZ2VlM0WFk5Z0xYVlFZaUx3TUxBUFA2OU0zZ0xuaEE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTk0NDAyNTI4MDEzOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA1NixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA2M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4MzA4MjgzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRHlFXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEeUUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJEbHp3WGZLbkV2QjgybHAxK2ZBREFaZk5DODBHekVLU3hGQm1Hc3l4ak4wPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY2MzM2ODQ2NSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE4MzA3MjU0MDk4XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
