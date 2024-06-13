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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_14_06_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTc4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzNSxcbiAgICAgICAgOTksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjA0LFxuICAgICAgICA1OSxcbiAgICAgICAgNTksXG4gICAgICAgIDY1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDExMixcbiAgICAgICAgMzQsXG4gICAgICAgIDEzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxODcsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMixcbiAgICAgICAgNTIsXG4gICAgICAgIDY3LFxuICAgICAgICA5NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTczLFxuICAgICAgICA5NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDg0LFxuICAgICAgICAxODEsXG4gICAgICAgIDY1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMyxcbiAgICAgICAgMjI2LFxuICAgICAgICAwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDM4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAxODcsXG4gICAgICAgIDUzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDg0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIyLFxuICAgICAgICA0NixcbiAgICAgICAgOTcsXG4gICAgICAgIDE4NixcbiAgICAgICAgNSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDY0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMzksXG4gICAgICAgIDUyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTk0LFxuICAgICAgICA4MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTIsXG4gICAgICAgIDAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNixcbiAgICAgICAgMTU4LFxuICAgICAgICA0MSxcbiAgICAgICAgNzksXG4gICAgICAgIDIwLFxuICAgICAgICA4MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDk3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIzMixcbiAgICAgICAgOCxcbiAgICAgICAgMTc2LFxuICAgICAgICA3LFxuICAgICAgICA0MixcbiAgICAgICAgMTcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjEwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDk2LFxuICAgICAgICA4NixcbiAgICAgICAgMjIwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDc0LFxuICAgICAgICA0NixcbiAgICAgICAgNDksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTUwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDgxLFxuICAgICAgICAxMixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDgyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDUxLFxuICAgICAgICAzOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNzZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA1NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNCxcbiAgICAgICAgNjksXG4gICAgICAgIDI0MixcbiAgICAgICAgNzYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTgwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDg1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDc4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDY0LFxuICAgICAgICAyMzksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDExLFxuICAgICAgICAyOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDg0LFxuICAgICAgICA5MixcbiAgICAgICAgMTQzLFxuICAgICAgICA1NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgODksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAzMyxcbiAgICAgICAgOTMsXG4gICAgICAgIDM5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDcwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDcwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTY2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI1LFxuICAgICAgICAxNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTM0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidUVjNnZUdlVRVUo3MWZyeVl2SVVkNmx5dWttclVJdEdqMElxcE1FV05sMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5OTQ0MDI1MjgwMTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjc2RDlGNzU2MTFCQUNBOEY1NjUyNjg0NEUwNzU2MEE2XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxODMwOTY3MVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJHQmxxTlZBOFM0V25fWEJ5c2pxLXFRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjhiNmFmNmE1LWU4M2QtNDVlYS1hYTI0LWM0MmQwM2MwOWE1YVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzMsXG4gICAgICAyNTIsXG4gICAgICAxNCxcbiAgICAgIDIwOCxcbiAgICAgIDE0OCxcbiAgICAgIDY4LFxuICAgICAgMTk3LFxuICAgICAgMTgsXG4gICAgICAxNDksXG4gICAgICA2LFxuICAgICAgMjksXG4gICAgICAyMzUsXG4gICAgICAxMSxcbiAgICAgIDEwLFxuICAgICAgMSxcbiAgICAgIDIxNSxcbiAgICAgIDE1OSxcbiAgICAgIDE0OCxcbiAgICAgIDE0NSxcbiAgICAgIDIyMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5MyxcbiAgICAgIDIwOCxcbiAgICAgIDkxLFxuICAgICAgMTY4LFxuICAgICAgMTk2LFxuICAgICAgMjI4LFxuICAgICAgMTk2LFxuICAgICAgNDEsXG4gICAgICAxMzUsXG4gICAgICAxOTQsXG4gICAgICAzLFxuICAgICAgMTIyLFxuICAgICAgNTAsXG4gICAgICAwLFxuICAgICAgMTYxLFxuICAgICAgMTA5LFxuICAgICAgMjAsXG4gICAgICAzMyxcbiAgICAgIDIxMCxcbiAgICAgIDExOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJIQktKM0hRVFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTk0NDAyNTI4MDEzOjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJCbHBcIixcbiAgICBcImxpZFwiOiBcIjg1ODQ0MDE0NjkwMzc0OjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSkxtcUx3Q0VLS21yYk1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ6ekZ4cEx4R1ptNDlybHFpUUVubUNrV2o3UHZwTmxNVXhvUTRVZ052TUQ4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInpZVUxXV2MwTjFydW9tYWhzNnd1cjRrazFJT1NBa3ZLQWJHWnFIbm5YS2VMUDQyYUk2WGx5UlNnZ2JOZ2ljRlYzajZhMmo0c2k3MHVIL3ExTXkvUUFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkh3RUdYMGw1eDIweFg1RXZPRksvYWF1eVpnWVdxOS9KbnBlelJabWJuZFdaYmVxdlB3c3FWbEZIeVptMHA5MzdFdHJyamRrdC9QMytCaUdkRHBWQWp3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk5NDQwMjUyODAxMzozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODMwOTY2OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUR5RVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRHlFLmpzb24iOiAie1wia2V5RGF0YVwiOlwiRGx6d1hmS25FdkI4MmxwMStmQURBWmZOQzgwR3pFS1N4RkJtR3N5eGpOMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2NjMzNjg0NjUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
