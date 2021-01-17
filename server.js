const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://rexo-bot32.glitch.me/`);
}, 280000);

const replace = require("replace"); //npm i replace
const Discord = require("discord.js");
//const replies = require("canvas-constructor");
const client = new Discord.Client();
//const ros = require("ros");
const bot = new Discord.Client();
const hero = client;
const HypixelAPI = require("hypixel-api");
const Hypixel = new HypixelAPI("4856cc0d-031c-4b27-9d49-2edb7679853b");
const fs = require("fs");
const ms = require("ms");
const giphy = require("giphy-api")();
const googl = require("goo.gl");
//const emojis = require("emojis");
//const Data = require("data");
const os = require("os");
const Enmap = require("enmap");
const notes = new Enmap();
const translate = require("google-translate-api");
const UserBlocked = new Set();
const math = require("math-expression-evaluator");
const stripIndents = require("common-tags").stripIndents;
const YouTube = require("simple-youtube-api");
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const message = require("message");
const { Client, Util } = require("discord.js");
const canvas = require("canvas");
const prettyMs = require("pretty-ms");
const sqlite = require("sqlite");
const moment = require("moment");
//const { getInfoFromName } = require("myanimelists");
const pretty = require("pretty-ms");
const Jimp = require("jimp");
const superagent = require("superagent");
const hastebins = require("hastebin-gen");
const jimp = require("jimp");
const convert = require("hh-mm-ss");
const db = require("quick.db");
const google = require("google-it");
const fetchVideoInfo = require("youtube-info");
const getYoutubeID = require("get-youtube-id");
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const simpleytapi = require("simple-youtube-api");
const opus = require("node-opus");
const guild = require("guild");
const ytdl = require("ytdl-core");
const figlet = require("figlet");
const botversion = require("./package.json").version;
//const cmd = require("cmd");
const util = require("util");
const gif = require("gif-search");
const queue = new Map();
const rainbow = {};
const dateFormat = require("dateformat");
const { get } = require("snekfetch");
const invites = {};
const wait = require("util").promisify(setTimeout);
const cool = [];
const yt = require("ytdl-core");
const table = require("table");
const p = {};
//const emoji = require("emoji");
const developers = ["599351862692544532"];
const devs = ["599351862692544532"];
const { User, MessageMentions } = require("discord.js"); // Disocrd Package Classes
const Canvas = require("canvas-prebuilt"); // Canvas Package for photo stuffs
const SQLite = require("sqlite"); // SQLite Package to read & write to sql files and databases
const path = require("path"); // Path Package to get paths easily
//var API = require("apextab-api");
//var ApexTab_API = API.Apextab_API;
//var movie = require("movie-info");
var commands = {};
var commandsCheck = [];

const prefix = "$";

//var mysql = require("mysql");
var ti = {},
  spee = {},
  attentions = {};

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log("");
  console.log("");
  console.log(
    "╔[═════════════════════════════════════════════════════════════════]╗"
  );
  console.log(`[Start] ${new Date()}`);
  console.log(
    "╚[═════════════════════════════════════════════════════════════════]╝"
  );
  console.log("");
  console.log("╔[═════════════════════════════════════]╗");
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log("");
  console.log(`Informations About ${client.user.username}:`);
  console.log("");
  console.log(`Servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`Channels! [ " ${client.channels.size} " ]`);
  console.log(`Arch! [ " ${process.arch} " ]`);
  console.log(`Platform! [ " ${process.platform} " ]`);
  console.log(`Node Version! [ " ${process.version}" ]`);
  console.log(`Prefix! [ " ${prefix}" ]`);
  console.log(`Language! [ " NodeJS " ]`);
  console.log(
    `Ram Usage! [ " ${(process.memoryUsage().rss / 1048576).toFixed()}MB " ]`
  );
  console.log("╚[════════════════════════════════════]╝");
  console.log("");
  console.log("╔[════════════]╗");
  console.log(`${client.user.username} Is Online`);
  console.log("╚[════════════]╝");
  console.log("");
  console.log("╔[════════════]╗");
  console.log("Created By: DeathNote ");
  console.log("╚[════════════]╝");
});

client.on("ready", () => {
  console.log("Rexo Bot");
  client.user.setGame(`♔ | OSL Roleplay`);
});

client.on("message", message => {
  if (message.author.bot) return;

  if (message.content === `${prefix}help`) {
    message.author.send(`

**\`❯\` | Public Commands**

> \`${prefix}ping\` **: To Show Ping**

> \`${prefix}avatar [Mention]\` **: To Show Avatar**

> \`${prefix}avt [ID]\` **: To Show Avatar**

> \`${prefix}server\` **: To Show Info For Server**

> \`${prefix}news\` **: To Show News OF BOT**

> \`${prefix}move\` **: To Move Member**

> \`${prefix}report or wdr\` **: To Report Some One [You Should Create Room [report]]**

> \`${prefix}invite\` **: Bot Invite**
**Using** **:**\`${prefix}inv/invite\`

> \`${prefix}icon\` **: To Show Server Icon**

> \`${prefix}user [Mention]\` **: To See Some User Information**

**\`❯\` | Admin Commands**

> \`${prefix}ban [Mention/ID]\` ** : For Banned User**
**Using** **:**\`${prefix}ban\`

> \`${prefix}unban [Mention/ID]\` **: UnBan Members**
**Using** **:**\`${prefix}Unban all/Unban [Mention/ID]\`

> \`${prefix}kick [Mention/ID]\` **: For Kick User**

> \`${prefix}

**[Mention/ID]\`** **: For Give Rank**

> \`${prefix}mute [Mention]\` **: For Muted User**

> \`${prefix}unmute [Mention]\` **: For Unmute User**

> \`${prefix}clear [MessageNum]\` **: For Clear Room** 

> \`${prefix}mchannel\` **: To Close Room**

> \`${prefix}unmchannel\` **: To Open Room**

> \`${prefix}banslist\` **: To Show BanList**

> \`${prefix}hide\` **: To Hide Rooms**

> \`${prefix}unhide\` **: To Show Rooms**

> \`${prefix}blacklist add\` **: To Add Member To Black List**

> \`${prefix}blacklist remove\` **: To Remove Member From Black List**

> \`${prefix}blacklist list\` **: To Show Black List**


> **\`❯\` | Protection Commands**

> \`${prefix}antispread on\` **: To Delete Any Link**

> \`${prefix}antispread off\` **: To Can Shera Any Link**

> \`${prefix}antibots on\` **: To Turn On AntiJoinBots**

> \`${prefix}antibots off\` **: To Turn off AntiJoinBots**

> \`${prefix}config\` **: Protection settings in your server**

>**\`${prefix}setlog\` **: Created Room Log**

> \`${prefix}autorole\` **: To Set Autorole**

> \`${prefix}infoautorole\` **: To Show Status OF AutoRole**









    `);
  }
}); //ziad

client.on("message", message => {
  if (message.author.bot) return;

  if (message.content === `${prefix}help`) {
    message.channel
      .send(`**| Go To Your \`Dm\` To See The Help Menu.**

 

    `);
  }
}); //by ziad




client.on("message", async message => {
  if (message.author.boss) return;

  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == "mute") {
    if (!message.channel.guild) return;
    if (!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES"))
      return message
        .reply("**I Don't Have `MANAGE_MESSAGES` Permission**")
        .then(msg => msg.delete(5000));
    if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
      return message
        .reply("البوت لايملك صلاحيات ")
        .then(msg => msg.delete(5000));
    let user = message.mentions.users.first();
    let muteRole = message.guild.roles.find("name", "Muted");
    if (!muteRole)
      return message
        .reply("**Mention****")
        .then(msg => {
          msg.delete(5000);
        });
    if (message.mentions.users.size < 1)
      return message.reply("** يجب عليك المنشن اولاً **").then(msg => {
        msg.delete(5000);
      });
    let reason = message.content
      .split(" ")
      .slice(2)
      .join(" ");
    message.guild.member(user).addRole(muteRole);
    const muteembed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setAuthor(`Muted!`, user.displayAvatarURL)
      .setThumbnail(user.displayAvatarURL)
      .addField(
        "**:busts_in_silhouette:  المستخدم**",
        "**[ " + `${user.tag}` + " ]**",
        true
      )
      .addField(
        "**:hammer:  تم بواسطة **",
        "**[ " + `${message.author.tag}` + " ]**",
        true
      )
      .addField("**:book:  السبب**", "**[ " + `${reason}` + " ]**", true)
      .addField("User", user, true);
    message.channel.send({ embed: muteembed });
    var muteembeddm = new Discord.RichEmbed()
      .setAuthor(`Muted!`, user.displayAvatarURL)
      .setDescription(
        `      
${user} انت معاقب بميوت كتابي بسبب مخالفة القوانين
${message.author.tag} تمت معاقبتك بواسطة
[ ${reason} ] : السبب
اذا كانت العقوبة عن طريق الخطأ تكلم مع المسؤلين
`
      )
      .setFooter(`في سيرفر : ${message.guild.name}`)
      .setColor("RANDOM");
    user.send(muteembeddm);
  }
  if (command === `unmute`) {
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel
        .sendMessage(
          "**You do not have a Permission to unmute**"
        )
        .then(m => m.delete(5000));
    if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
      return message
        .reply(
          "**I Don't Have  `MANAGE_ROLES`  Permission**"
        )
        .then(msg => msg.delete(6000));

    let toMute =
      message.guild.member(message.mentions.users.first()) ||
      message.guild.members.get(args[0]);
    if (!toMute)
      return message.channel.sendMessage(
        "**Mention**"
      );

    let role = message.guild.roles.find(r => r.name === "Muted");

    if (!role || !toMute.roles.has(role.id))
      return message.channel.sendMessage(
        "**He was not given Muted**"
      );

    await toMute.removeRole(role);
    message.channel.sendMessage(
      "**Mute has been removed**"
    );

    return;
  }
});

client.on("message", message => {
  var prefix = ".";
  if (message.author.kick) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
    if (!message.channel.guild) return;

    if (!message.guild.member(message.author).hasPermission("KICK_MEMBERS"))
      return message
        .reply("You Don't Have KICK_MEMBERS Permission")
        .then(msg => msg.delete(5000));
    if (!message.guild.member(client.user).hasPermission("KICK_MEMBERS"))
      return message.reply("I Don't Have KICK_Members Permission");
    let user = message.mentions.users.first();
    let reason = message.content
      .split(" ")
      .slice(2)
      .join(" ");

    if (message.mentions.users.size < 1)
      return message.reply("**Mention The Member**");
    if (!reason) reason = "Null";
    if (!message.guild.member(user).bannable)
      return message.reply("I can not be higher than my rank");

    message.guild.member(user).kick(7, user);

    message.channel.send(
      `**<a:636495689207119882:641694154723819520> ${user} has been kicked ! :airplane:**`
    );
    user.send(
      `**:airplane: You are has been kicked in ${message.guild.name} reason: ${reason}**`
    );
    message.delete();
  }
});

client.on("message", async message => {
  if (message.content.startsWith(prefix + "banslist")) {
    if (!message.guild) return;
    if (!message.member.hasPermission("BAN_MEMBERS"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `BAN_MEMBERS`"
      );
    message.guild.fetchBans().then(bans => {
      let b = bans.size;
      let bb = bans.map(a => `${a}`).join(" - ");
      message.channel.send(`**\`${b}\` | ${bb}**`);
    });
  }
});

client.on("message", message => {
  if (message.content.startsWith(".avt")) {
    if (message.author.bot || message.channel.type == "dm") return;
    var args = message.content.split(" ")[1];
    var avt = args || message.author.id;
    client
      .fetchUser(avt)
      .then(user => {
        avt = user;
        let avtEmbed = new Discord.RichEmbed()
          .setColor("BLACK")
          .setAuthor(`${avt.username}`, `${avt.avatarURL}`)
          .setTitle("Avatar Link")
          .setURL(`${avt.avatarURL}`)
          .setImage(avt.avatarURL)
          .setFooter(
            `Requested By ${message.author.username}`,
            `${message.author.avatarURL}`
          );
        message.channel.send(avtEmbed);
      })
      .catch(() => message.channel.send(`Error`));
  } // ziad
});

client.on("message", zaid => {
  if (zaid.content === prefix + "close") {
    if (!zaid.channel.guild)
      return zaid.channel.send("**This command is only done on servers**");
    if (!zaid.member.hasPermission("MANAGE_MESSAGES"))
      return zaid.channel.send("**:x: - No Permissions ! **");
    zaid.channel
      .overwritePermissions(zaid.guild.id, {
        SEND_MESSAGES: false
      })
      .then(() => {
        zaid.channel.send(
          "** | Channel Closed :lock:**"
        );
      });
  }
  if (zaid.content === prefix + "open") {
    if (!zaid.channel.guild)
      return zaid.channel.send("**This command is only done on servers**");//ziad
    if (!zaid.member.hasPermission("MANAGE_MESSAGES"))
      return zaid.channel.send("**:x: - No Permissions ! **");
    zaid.channel
      .overwritePermissions(zaid.guild.id, {
        SEND_MESSAGES: true
      })
      .then(() => {
        zaid.channel.send(
          "**| Channel Opened **"//ziad
        );
      });
  }
});//ziad

client.on("message", message => {
  var args = message.content.split(" ").slice(1);
  var msg = message.content.toLowerCase();
  if (!message.guild) return;
  if (!msg.startsWith(prefix + "role")) return;
  
  if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('**You Dont  Have ``ADMINISTRATOR`` Permission**');
  if (msg.toLowerCase().startsWith(prefix + "roleremove")) {

  if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('**You Dont  Have ``ADMINISTRATOR`` Permission**');
    if (!args[0])
      return message.reply(
        "**Metion The Memeber**"
      );
    if (!args[1])
      return message.reply(
        "** Write Name OF Role**"
      );
    var role = msg
      .split(" ")
      .slice(2)
      .join(" ")
      .toLowerCase();
    var role1 = message.guild.roles
      .filter(r => r.name.toLowerCase().indexOf(role) > -1)
      .first();
    if (!role1)
      return message.reply(
        "** Write Name OF Role To Remove iT**"
      );
    if (message.mentions.members.first()) {
      message.mentions.members.first().removeRole(role1);
      return message.reply(
        "**  " +
          role1.name +
          "  Rank  " +
          args[0] +
          "  Done Remove From**"
      );
    }
    if (args[0].toLowerCase() == "all") {
      message.guild.members.forEach(m => m.removeRole(role1));
      return message.reply(
        "**  " +
          role1.name +
          "  Done Remove Role From All**"
      );
    } else if (args[0].toLowerCase() == "bots") {
      message.guild.members
        .filter(m => m.user.bot)
        .forEach(m => m.removeRole(role1));
      return message.reply(
        "** " +
          role1.name +
          "  Done Remove Role From Bot**"
      );
    } else if (args[0].toLowerCase() == "humans") {
      message.guild.members
        .filter(m => !m.user.bot)
        .forEach(m => m.removeRole(role1));
      return message.reply(
        "**  " +
          role1.name +
          " Done Remove Role From Members**"
      );
    }
  } else {
    if (!args[0])
      return message.reply(
        "** Pls Mention The Member**"
      );
    if (!args[1])
      return message.reply(
        "** Write The Name OF Role**"
      );
    var role = msg
      .split(" ")
      .slice(2)
      .join(" ")
      .toLowerCase();
    var role1 = message.guild.roles
      .filter(r => r.name.toLowerCase().indexOf(role) > -1)
      .first();
    if (!role1)
      return message.reply(
        "**Mention The Member**"
      );
    if (message.mentions.members.first()) {
      message.mentions.members.first().addRole(role1);
      return message.reply(
        "**  " +
          role1.name +
          "  Rank " +
          args[0] +
          " Done Give Role To **"
      );
    }
    if (args[0].toLowerCase() == "all") {
      message.guild.members.forEach(m => m.addRole(role1));
      return message.reply(
        "**  " +
          role1.name +
          "  Done Give ALL Role**"
      );
    } else if (args[0].toLowerCase() == "bots") {
      message.guild.members
        .filter(m => m.user.bot)
        .forEach(m => m.addRole(role1));
      return message.reply(
        "**  " +
          role1.name +
          "  Done Give ALL Bots Role**"
      );
    } else if (args[0].toLowerCase() == "humans") {
      message.guild.members
        .filter(m => !m.user.bot)
        .forEach(m => m.addRole(role1));
      return message.reply(
        "**  " +
          role1.name +
          " Done Give ALL Members Role**"
      );
    }
  }
});

client.on("message", message => {
  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
    if (!message.channel.guild)
      return message.reply(
        "** This command only for servers**"
      );

    if (!message.guild.member(message.author).hasPermission("BAN_MEMBERS"))
      return message.reply(
        "**You Dont Have Premission ``BAN_MEMBERS``**"
      );
    if (!message.guild.member(client.user).hasPermission("BAN_MEMBERS"))
      return message.reply(
        "** I Don't Have ` BAN_MEMBERS ` Permission**"
      );
    let user = message.mentions.users.first();
    if (message.mentions.users.size < 1)
      return message.reply("**Mention The Member**");
    if (!message.guild.member(user).bannable)
      return message.reply(
        "** You Should Put My Rank Top**"
      );
    
      
    message.guild.member(user).ban(7, user);

    message.channel.send(
      `** ${user.tag} banned from the server !  **  `
    );
  }
});

client.on("message", message => {
  let command = message.content.split(" ")[0];
  if (command == prefix + "unban") {
    if (!message.member.hasPermission("BAN_MEMBERS")) return;
    let args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (args == "all") {
      message.guild.fetchBans().then(zg => {
        zg.forEach(NoNo => {
          message.guild.unban(NoNo);
        });
      });
      return message.channel.send(
        "**<a:636495689207119882:641694154723819520> | Unbanned all members **"
      );
    }
    if (!args)
      return message.channel.send("**Please Type the member ID / all**");
    message.guild
      .unban(args)
      .then(m => {
        message.channel.send(
          `**<a:636495689207119882:641694154723819520> | Unbanned ${m.username}**`
        );
      })
      .catch(stry => {
        message.channel.send(
          `**🙄 - I can't find \`${args}\` in the ban list**`
        );
      });
  }
});

client.on("message", msg => {
  if (msg.content === ".hide") {
    msg.guild.channels.forEach(c => {
      c.overwritePermissions(msg.guild.id, {
        SEND_MESSAGES: false,
        READ_MESSAGES: false
      });
    });
    msg.channel.send(
      "|**All the roms were hidden to members**"
    );
  }
});

client.on("message", msg => {
  if (msg.content === ".unhide") {
    msg.guild.channels.forEach(c => {
      c.overwritePermissions(msg.guild.id, {
        SEND_MESSAGES: true,
        READ_MESSAGES: true
      });
    });
    msg.channel.send(
      "**All roms were shown to members**"
    );
  }
});



let spread = JSON.parse(fs.readFileSync("./spread.json", "utf8"));

client.on("message", message => {
  if (message.content.startsWith(prefix + "antispread off")) {
    if (!message.channel.guild) return;
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `ADMINISTRATOR`"
      );
    spread[message.guild.id] = {
      onoff: "Off"
    };
    message.channel.send(
      `**<a:636495709239246848:641694170880409600> The AntiSpread Is __𝐎𝐅𝐅__ !**`
    );
    fs.writeFile("./spread.json", JSON.stringify(spread), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});
client.on("message", message => {
  if (message.content.startsWith(prefix + "antispread on")) {
    if (!message.channel.guild) return;
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `ADMINISTRATOR`"
      );
    spread[message.guild.id] = {
      onoff: "On"
    };
    message.channel.send(
      `**<a:636495689207119882:641694154723819520> The AntiSpread Is __𝐎𝐍__ !**`
    );
    fs.writeFile("./spread.json", JSON.stringify(spread), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});


client.on("message", message => {
  var args = message.content.split(/[ ]+/);
  if (message.content.includes("https://www.discordapp.com/")) {
    if (!spread[message.guild.id])
      spread[message.guild.id] = {
        onoff: "Off"
      };
    if (spread[message.guild.id].onoff === "Off") return;
    message.delete();
    return message.reply(
      `**<a:636495709239246848:641694170880409600> The Antispread ON ! So You Cant spread Here !**`
    );
  }
});
client.on("message", message => {
  var args = message.content.split(/[ ]+/);
  if (message.content.includes("https://discord.gg/")) {
    if (!spread[message.guild.id])
      spread[message.guild.id] = {
        onoff: "Off"
      };
    if (spread[message.guild.id].onoff === "Off") return;
    message.delete();
    return message.reply(
      `**<a:636495709239246848:641694170880409600> The Antispread ON ! So You Cant spread Here !**`
    );
  }
});



client.on("message", message => {
  if (!message.channel.guild) return;
  if (message.author.bot) return;
  if (message.content === prefix + "icon") {
    var mentionned = message.mentions.users.first();

    var ziad;
    if (mentionned) {
      var ziad = mentionned;
    } else {
      var ziad = message.author;
    }
    let embed = new Discord.RichEmbed()
      .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
      .setAuthor(message.author.username, message.guild.iconURL)
      .setColor("BLACK")
      .setTitle("Icon Link")
      .setURL(`${message.guild.iconURL}`)
      .setImage(message.guild.iconURL)
      .setTimestamp();

    message.channel.send({ embed });
  }
});

client.on("message", message => {
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(" ").slice(1);
  var argresult = args.join(" ");
  if (message.content.startsWith(prefix + "avatar")) {
    var mentionned = message.mentions.users.first();

    var ziad;
    if (mentionned) {
      var ziad = mentionned;
    } else {
      var ziad = message.author;
    }
    let embed = new Discord.RichEmbed()
      .setColor("Black")
      .setAuthor(`${ziad.username}`, `${ziad.avatarURL}`)
      .setTitle("Avatar Link")
      .setURL(`${ziad.avatarURL}`)
      .setImage(ziad.avatarURL)
      .setFooter(
        `Requested By ${message.author.username}`,
        `${message.author.avatarURL}`
      );
    message.channel.send(embed);
  }
}); //ziad

client.on("message", message => {
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(" ").slice(1);
  var argresult = args.join(" ");
  if (message.content.startsWith(prefix + "user")) {
    var moment = require("moment");
    if (message.author.bot || message.channel.type == "dm") return;
    let mnt = message.mentions.users.first();
    let user = mnt || message.author;
    let userEmbed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setThumbnail(user.avatarURL)
      .setAuthor(`${user.username}`)
      .setDescription(
        `**❯ Username:**  \`${user.tag}\`\n 
**❯ Created on:**  \`${moment(user.createdAt).format("D/MM/YYYY h:mm a")}\`\n 
**❯Joined At:** \`${moment(user.joinedAt).format("D/MM/YYYY h:mm a")}\`\n 
**❯ID:** \`${user.id}\`\n`
      )
      .setFooter(message.client.user.username, message.client.user.avatarURL);
    message.channel.send(userEmbed).catch(console.error);
  }
});

client.on("message", message => {
  if (message.author.bot) return;
  if (!message.channel.guild) return;
  if (message.content.startsWith(prefix + "setlog")) {
    //لازم تدي للبوت رول ادمنستريتور
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.reply("**تحتاج الى `MANAGE_CHANNELS`**");
    let log = message.guild.channels.find("name", "log");
    if (log)
      return message.reply(
        "**There Is Room Log**"
      );
    if (!log) {
      message.guild.createChannel("log", "text").then(c => {
        c.overwritePermissions(message.guild.id, {
          SEND_MESSAGES: false,
          READ_MESSAGES: false
        });
      });
      message.channel.send(
        "**Created Success Room Log**"
      );
    }
  }
});
client.on("error", console.error);

client.on("messageDelete", message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;
  if (!message.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
    return;

  var logChannel = message.guild.channels.find(c => c.name === "log");
  if (!logChannel) return;

  let messageDelete = new Discord.RichEmbed()
    .setTitle("**[MESSAGE DELETE]**")
    .setColor("RED")
    .setThumbnail(message.author.avatarURL)
    .setDescription(
      `**\n**:wastebasket: Successfully \`\`DELETE\`\` **MESSAGE** In ${message.channel}\n\n**Channel:** \`\`${message.channel.name}\`\` (ID: ${message.channel.id})\n**Message ID:** ${message.id}\n**Sent By:** <@${message.author.id}> (ID: ${message.author.id})\n**Message:**\n\`\`\`${message}\`\`\``
    )
    .setTimestamp()
    .setFooter(message.guild.name, message.guild.iconURL);

  logChannel.send(messageDelete);
});
client.on("messageUpdate", (oldMessage, newMessage) => {
  if (oldMessage.author.bot) return;
  if (!oldMessage.channel.type === "dm") return;
  if (!oldMessage.guild.member(client.user).hasPermission("EMBED_LINKS"))
    return;
  if (!oldMessage.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
    return;

  var logChannel = oldMessage.guild.channels.find(c => c.name === "log");
  if (!logChannel) return;

  if (oldMessage.content.startsWith("https://")) return;

  let messageUpdate = new Discord.RichEmbed()
    .setTitle("**[MESSAGE EDIT]**")
    .setThumbnail(oldMessage.author.avatarURL)
    .setColor("BLUE")
    .setDescription(
      `**\n**:wrench: Successfully \`\`EDIT\`\` **MESSAGE** In ${oldMessage.channel}\n\n**Channel:** \`\`${oldMessage.channel.name}\`\` (ID: ${oldMessage.channel.id})\n**Message ID:** ${oldMessage.id}\n**Sent By:** <@${oldMessage.author.id}> (ID: ${oldMessage.author.id})\n\n**Old Message:**\`\`\`${oldMessage}\`\`\`\n**New Message:**\`\`\`${newMessage}\`\`\``
    )
    .setTimestamp()
    .setFooter(oldMessage.guild.name, oldMessage.guild.iconURL);

  logChannel.send(messageUpdate);
});

client.on("roleCreate", role => {
  if (!role.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!role.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;

  var logChannel = role.guild.channels.find(c => c.name === "log");
  if (!logChannel) return;

  role.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    let roleCreate = new Discord.RichEmbed()
      .setTitle("**[ROLE CREATE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**<a:636495689207119882:641694154723819520> Successfully \`\`CREATE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setColor("GREEN")
      .setTimestamp()
      .setFooter(role.guild.name, role.guild.iconURL);

    logChannel.send(roleCreate);
  });
});
client.on("roleDelete", role => {
  if (!role.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!role.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;

  var logChannel = role.guild.channels.find(c => c.name === "log");
  if (!logChannel) return;

  role.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    let roleDelete = new Discord.RichEmbed()
      .setTitle("**[ROLE DELETE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**<a:636495689207119882:641694154723819520> Successfully \`\`DELETE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setColor("RED")
      .setTimestamp()
      .setFooter(role.guild.name, role.guild.iconURL);

    logChannel.send(roleDelete);
  });
});
client.on("roleUpdate", (oldRole, newRole) => {
  if (!oldRole.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!oldRole.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;

  var logChannel = oldRole.guild.channels.find(c => c.name === "log");
  if (!logChannel) return;

  oldRole.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (oldRole.name !== newRole.name) {
      let roleUpdateName = new Discord.RichEmbed()
        .setTitle("**[ROLE NAME UPDATE]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**<a:636495689207119882:641694154723819520> Successfully \`\`EDITED\`\` Role Name.\n\n**Old Name:** \`\`${oldRole.name}\`\`\n**New Name:** \`\`${newRole.name}\`\`\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldRole.guild.name, oldRole.guild.iconURL);

      logChannel.send(roleUpdateName);
    }
    if (oldRole.hexColor !== newRole.hexColor) {
      if (oldRole.hexColor === "#000000") {
        var oldColor = "`Default`";
      } else {
        var oldColor = oldRole.hexColor;
      }
      if (newRole.hexColor === "#000000") {
        var newColor = "`Default`";
      } else {
        var newColor = newRole.hexColor;
      }
      let roleUpdateColor = new Discord.RichEmbed()
        .setTitle("**[ROLE COLOR UPDATE]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:white_check_mark: Successfully \`\`EDITED\`\` **${oldRole.name}** Role Color.\n\n**Old Color:** ${oldColor}\n**New Color:** ${newColor}\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldRole.guild.name, oldRole.guild.iconURL);

      logChannel.send(roleUpdateColor);
    }
    if (oldRole.permissions !== newRole.permissions) {
      let roleUpdate = new Discord.RichEmbed()
        .setTitle("**[UPDATE ROLE PERMISSIONS]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:first_place: Successfully \`\`CHANGED\`\` **${oldRole.name}** Permissions!\n\n**Old Permissions:** \`\`${oldRole.permissions}\`\`\n**New Permissions:** \`\`${newRole.permissions}\`\`\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldRole.guild.name, oldRole.guild.iconURL);

      logChannel.send(roleUpdate);
    }
  });
});

client.on("channelCreate", channel => {
  if (!channel.guild) return;
  if (!channel.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!channel.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;

  var logChannel = channel.guild.channels.find(c => c.name === "log");
  if (!logChannel) return;

  if (channel.type === "text") {
    var roomType = "Text";
  } else if (channel.type === "voice") {
    var roomType = "Voice";
  } else if (channel.type === "category") {
    var roomType = "Category";
  }

  channel.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    let channelCreate = new Discord.RichEmbed()
      .setTitle("**[CHANNEL CREATE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**<a:636495689207119882:641694154723819520> Successfully \`\`CREATE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setColor("GREEN")
      .setTimestamp()
      .setFooter(channel.guild.name, channel.guild.iconURL);

    logChannel.send(channelCreate);
  });
});
client.on("channelDelete", channel => {
  if (!channel.guild) return;
  if (!channel.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!channel.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;

  var logChannel = channel.guild.channels.find(c => c.name === "log");
  if (!logChannel) return;

  if (channel.type === "text") {
    var roomType = "Text";
  } else if (channel.type === "voice") {
    var roomType = "Voice";
  } else if (channel.type === "category") {
    var roomType = "Category";
  }

  channel.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    let channelDelete = new Discord.RichEmbed()
      .setTitle("**[CHANNEL DELETE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**<a:636495689207119882:641694154723819520> Successfully \`\`DELETE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setColor("RED")
      .setTimestamp()
      .setFooter(channel.guild.name, channel.guild.iconURL);

    logChannel.send(channelDelete);
  });
});
client.on("channelUpdate", (oldChannel, newChannel) => {
  if (!oldChannel.guild) return;

  var logChannel = oldChannel.guild.channels.find(c => c.name === "log");
  if (!logChannel) return;

  if (oldChannel.type === "text") {
    var channelType = "Text";
  } else if (oldChannel.type === "voice") {
    var channelType = "Voice";
  } else if (oldChannel.type === "category") {
    var channelType = "Category";
  }

  oldChannel.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (oldChannel.name !== newChannel.name) {
      let newName = new Discord.RichEmbed()
        .setTitle("**[CHANNEL EDIT]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:wrench: Successfully Edited **${channelType}** Channel Name\n\n**Old Name:** \`\`${oldChannel.name}\`\`\n**New Name:** \`\`${newChannel.name}\`\`\n**Channel ID:** ${oldChannel.id}\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL);

      logChannel.send(newName);
    }
    if (oldChannel.topic !== newChannel.topic) {
      let newTopic = new Discord.RichEmbed()
        .setTitle("**[CHANNEL EDIT]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:wrench: Successfully Edited **${channelType}** Channel Topic\n\n**Old Topic:**\n\`\`\`${oldChannel.topic ||
            "NULL"}\`\`\`\n**New Topic:**\n\`\`\`${newChannel.topic ||
            "NULL"}\`\`\`\n**Channel:** ${oldChannel} (ID: ${
            oldChannel.id
          })\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL);

      logChannel.send(newTopic);
    }
  });
});

client.on("guildBanAdd", (guild, user) => {
  if (!guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;

  var logChannel = guild.channels.find(c => c.name === "log");
  if (!logChannel) return;

  guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (userID === client.user.id) return;

    let banInfo = new Discord.RichEmbed()
      .setTitle("**[BANNED]**")
      .setThumbnail(userAvatar)
      .setColor("DARK_RED")
      .setDescription(
        `**\n**:airplane: Successfully \`\`BANNED\`\` **${user.username}** From the server!\n\n**User:** <@${user.id}> (ID: ${user.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setTimestamp()
      .setFooter(guild.name, guild.iconURL);

    logChannel.send(banInfo);
  });
});
client.on("guildBanRemove", (guild, user) => {
  if (!guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;

  var logChannel = guild.channels.find(c => c.name === "log");
  if (!logChannel) return;

  guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    let unBanInfo = new Discord.RichEmbed()
      .setTitle("**[UNBANNED]**")
      .setThumbnail(userAvatar)
      .setColor("GREEN")
      .setDescription(
        `**\n**:unlock: Successfully \`\`UNBANNED\`\` **${user.username}** From the server\n\n**User:** <@${user.id}> (ID: ${user.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setTimestamp()
      .setFooter(guild.name, guild.iconURL);

    logChannel.send(unBanInfo);
  });
});
client.on("guildMemberUpdate", (oldMember, newMember) => {
  var logChannel = oldMember.guild.channels.find(c => c.name === "log");
  if (!logChannel) return;

  oldMember.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;
    var userTag = logs.entries.first().executor.tag;

    if (oldMember.nickname !== newMember.nickname) {
      if (oldMember.nickname === null) {
        var oldNM = "``اسمه الاصلي``";
      } else {
        var oldNM = oldMember.nickname;
      }
      if (newMember.nickname === null) {
        var newNM = "``اسمه الاصلي``";
      } else {
        var newNM = newMember.nickname;
      }

      let updateNickname = new Discord.RichEmbed()
        .setTitle("**[UPDATE MEMBER NICKNAME]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:spy: Successfully \`\`CHANGE\`\` Member Nickname.\n\n**User:** ${oldMember} (ID: ${oldMember.id})\n**Old Nickname:** ${oldNM}\n**New Nickname:** ${newNM}\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldMember.guild.name, oldMember.guild.iconURL);

      logChannel.send(updateNickname);
    }
    if (oldMember.roles.size < newMember.roles.size) {
      let role = newMember.roles
        .filter(r => !oldMember.roles.has(r.id))
        .first();

      let roleAdded = new Discord.RichEmbed()
        .setTitle("**[ADDED ROLE TO MEMBER]**")
        .setThumbnail(oldMember.guild.iconURL)
        .setColor("GREEN")
        .setDescription(
          `**\n**<a:636495689207119882:641694154723819520> Successfully \`\`ADDED\`\` Role to **${oldMember.user.username}**\n\n**User:** <@${oldMember.id}> (ID: ${oldMember.user.id})\n**Role:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(roleAdded);
    }
    if (oldMember.roles.size > newMember.roles.size) {
      let role = oldMember.roles
        .filter(r => !newMember.roles.has(r.id))
        .first();

      let roleRemoved = new Discord.RichEmbed()
        .setTitle("**[REMOVED ROLE FROM MEMBER]**")
        .setThumbnail(oldMember.guild.iconURL)
        .setColor("RED")
        .setDescription(
          `**\n**:negative_squared_cross_mark: Successfully \`\`REMOVED\`\` Role from **${oldMember.user.username}**\n\n**User:** <@${oldMember.user.id}> (ID: ${oldMember.id})\n**Role:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(roleRemoved);
    }
  });
  if (oldMember.guild.owner.user.id !== newMember.guild.owner.user.id) {
    let newOwner = new Discord.RichEmbed()
      .setTitle("**[UPDATE GUILD OWNER]**")
      .setThumbnail(oldMember.guild.iconURL)
      .setColor("GREEN")
      .setDescription(
        `**\n**<a:636495689207119882:641694154723819520> Successfully \`\`TRANSFER\`\` The Owner Ship.\n\n**Old Owner:** <@${oldMember.user.id}> (ID: ${oldMember.user.id})\n**New Owner:** <@${newMember.user.id}> (ID: ${newMember.user.id})`
      )
      .setTimestamp()
      .setFooter(oldMember.guild.name, oldMember.guild.iconURL);

    logChannel.send(newOwner);
  }
});
client.on("guildMemberAdd", member => {
  var logChannel = member.guild.channels.find(c => c.name === "log");
  if (!logChannel) return;

  let newMember = new Discord.RichEmbed()
    .setTitle("**[NEW MEMBER ADDED]**")
    .setThumbnail(member.user.avatarURL)
    .setColor("GREEN")
    .setDescription(
      `**\n**:arrow_lower_right: Joined **${
        member.user.username
      }** To the server!\n\n**User:** <@${member.user.id}> (ID: ${
        member.user.id
      })\n**Days In Discord:** ${Days(member.user.createdAt)}`
    )
    .setTimestamp()
    .setFooter(member.user.tag, member.user.avatarURL);

  logChannel.send(newMember);
});
function Days(date) {
  let now = new Date();
  let diff = now.getTime() - date.getTime();
  let days = Math.floor(diff / 86400000);
  return days + (days == 1 ? " day" : " days") + " ago";
}
client.on("guildMemberRemove", member => {
  var logChannel = member.guild.channels.find(c => c.name === "log");
  if (!logChannel) return;

  let leaveMember = new Discord.RichEmbed()
    .setTitle("**[LEAVE MEMBER]**")
    .setThumbnail(member.user.avatarURL)
    .setColor("GREEN")
    .setDescription(
      `**\n**:arrow_upper_left: Leave **${member.user.username}** From the server.\n\n**User:** <@${member.user.id}> (ID: ${member.user.id})`
    )
    .setTimestamp()
    .setFooter(member.user.tag, member.user.avatarURL);

  logChannel.send(leaveMember);
});

client.on("voiceStateUpdate", (voiceOld, voiceNew) => {
  if (!voiceOld.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!voiceOld.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;

  var logChannel = voiceOld.guild.channels.find(c => c.name === "log");
  if (!logChannel) return;

  voiceOld.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userTag = logs.entries.first().executor.tag;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (voiceOld.serverMute === false && voiceNew.serverMute === true) {
      let serverMutev = new Discord.RichEmbed()
        .setTitle("**[VOICE MUTE]**")
        .setThumbnail(
          "https://images-ext-1.discordapp.net/external/pWQaw076OHwVIFZyeFoLXvweo0T_fDz6U5C9RBlw_fQ/https/cdn.pg.sa/UosmjqDNgS.png"
        )
        .setColor("RED")
        .setDescription(
          `**User:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(serverMutev);
    }

    if (voiceOld.serverMute === true && voiceNew.serverMute === false) {
      let serverUnmutev = new Discord.RichEmbed()
        .setTitle("**[VOICE UNMUTE]**")
        .setThumbnail(
          "https://images-ext-1.discordapp.net/external/u2JNOTOc1IVJGEb1uCKRdQHXIj5-r8aHa3tSap6SjqM/https/cdn.pg.sa/Iy4t8H4T7n.png"
        )
        .setColor("GREEN")
        .setDescription(
          `**User:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(serverUnmutev);
    }

    if (voiceOld.serverDeaf === false && voiceNew.serverDeaf === true) {
      let serverDeafv = new Discord.RichEmbed()
        .setTitle("**[VOICE DEAFEN]**")
        .setThumbnail(
          "https://images-ext-1.discordapp.net/external/7ENt2ldbD-3L3wRoDBhKHb9FfImkjFxYR6DbLYRjhjA/https/cdn.pg.sa/auWd5b95AV.png"
        )
        .setColor("RED")
        .setDescription(
          `**User:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(serverDeafv);
    }

    if (voiceOld.serverDeaf === true && voiceNew.serverDeaf === false) {
      let serverUndeafv = new Discord.RichEmbed()
        .setTitle("**[VOICE UNDEAFEN]**")
        .setThumbnail(
          "https://images-ext-2.discordapp.net/external/s_abcfAlNdxl3uYVXnA2evSKBTpU6Ou3oimkejx3fiQ/https/cdn.pg.sa/i7fC8qnbRF.png"
        )
        .setColor("GREEN")
        .setDescription(
          `**User:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(serverUndeafv);
    }
  });

  if (
    voiceOld.voiceChannelID !== voiceNew.voiceChannelID &&
    !voiceOld.voiceChannel
  ) {
    let voiceJoin = new Discord.RichEmbed()
      .setTitle("**[JOIN VOICE ROOM]**")
      .setColor("GREEN")
      .setThumbnail(voiceOld.user.avatarURL)
      .setDescription(
        `**\n**:arrow_lower_right: Successfully \`\`JOIN\`\` To Voice Channel.\n\n**Channel:** \`\`${voiceNew.voiceChannel.name}\`\` (ID: ${voiceNew.voiceChannelID})\n**User:** ${voiceOld} (ID: ${voiceOld.id})`
      )
      .setTimestamp()
      .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL);

    logChannel.send(voiceJoin);
  }

  if (
    voiceOld.voiceChannelID !== voiceNew.voiceChannelID &&
    !voiceNew.voiceChannel
  ) {
    let voiceLeave = new Discord.RichEmbed()
      .setTitle("**[LEAVE VOICE ROOM]**")
      .setColor("GREEN")
      .setThumbnail(voiceOld.user.avatarURL)
      .setDescription(
        `**\n**:arrow_upper_left: Successfully \`\`LEAVE\`\` From Voice Channel.\n\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannelID})\n**User:** ${voiceOld} (ID: ${voiceOld.id})`
      )
      .setTimestamp()
      .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL);

    logChannel.send(voiceLeave);
  }

  if (
    voiceOld.voiceChannelID !== voiceNew.voiceChannelID &&
    voiceNew.voiceChannel &&
    voiceOld.voiceChannel != null
  ) {
    let voiceLeave = new Discord.RichEmbed()
      .setTitle("**[CHANGED VOICE ROOM]**")
      .setColor("GREEN")
      .setThumbnail(voiceOld.user.avatarURL)
      .setDescription(
        `**\n**:repeat: Successfully \`\`CHANGED\`\` The Voice Channel.\n\n**From:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannelID})\n**To:** \`\`${voiceNew.voiceChannel.name}\`\` (ID: ${voiceNew.voiceChannelID})\n**User:** ${voiceOld} (ID: ${voiceOld.id})`
      )
      .setTimestamp()
      .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL);

    logChannel.send(voiceLeave);
  }
});

let antibots = JSON.parse(fs.readFileSync("./antibots.json", "utf8")); //require antihack.json file
client.on("message", message => {
  if (message.content.startsWith(prefix + "antibots on")) {
    if (!message.channel.guild) return;
  if (!message.member.hasPermission(`ADMINISTRATOR`)) return;
    antibots[message.guild.id] = {
      onoff: "On"
    };
    message.channel.send(
      `**| \`ON\`.**`
    );
    fs.writeFile("./antibots.json", JSON.stringify(antibots), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "antibots off")) {
    if (!message.channel.guild) return;
    if (!message.member.hasPermission(`ADMINISTRATOR`)) return;
    antibots[message.guild.id] = {
      onoff: "Off"
    };
    message.channel.send(
      `**| \`OFF\`.**`
    );
    fs.writeFile("./antibots.json", JSON.stringify(antibots), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});

client.on("guildMemberAdd", member => {
  if (!antibots[member.guild.id])
    antibots[member.guild.id] = {
      onoff: "Off"
    };
  if (antibots[member.guild.id].onoff === "Off") return;
  if (member.user.bot) return member.ban();
});

fs.writeFile("./antibots.json", JSON.stringify(antibots), err => {
  if (err)
    console.error(err).catch(err => {
      console.error(err);
    });
});

client.on("message", message => {
  if (message.content === `${prefix}config`)
    var embed = new Discord.RichEmbed()

      .setColor("embedColor")
      .setTitle(`${message.guild.name}`)
      .setDescription(`Bans Limit: \`${config[message.guild.id].banLimit}\`
Kicks Limit: \`${config[message.guild.id].kickLimits}\`
chaDel Limit: \`${config[message.guild.id].chaDelLimit}\`
roleCr Limit: \`${config[message.guild.id].roleCrLimits}\`
roleDel Limit: \`${config[message.guild.id].roleDelLimit}\``);
  message.channel.send(embed);
});

client.on("message", msg => {
  if (msg.author.bot) return;

  if (msg.content === ".guildslist") {
    if (msg.author.id !== "505022273418428426")
      return msg.reply("** هذا الأمر قفط لصاحب البوت و شكراًً **");
    if (!msg.author.id === "505022273418428426") return;
    client.guilds.forEach(g => {
      let l = g.id;
      g.channels
        .get(g.channels.first().id)
        .createInvite({
          maxUses: 5,
          maxAge: 86400
        })
        .then(i =>
          msg.channel.send(`
        **
        Invite Link : <https://discord.gg/${i.code}>
        Server : ${g.name} | Id : ${g.id} 
        Owner ID : ${g.owner.id}
        **
        `)
        );
    });
  }
});

client.on("message", message => {
  if (message.content.startsWith(".botdev")) {
    message.channel.send({
      embed: new Discord.RichEmbed()
        .setAuthor(client.user.username, client.user.avatarURL)
        .setThumbnail(client.user.avatarURL)
        .setColor("RANDOM")
        .setTitle("``INFO™`` ")
        .addField(
          "**My Ping**",
          [`${Date.now() - message.createdTimestamp}` + "MS"],
          true
        )
        .addField(
          "**RAM Usage**",
          `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`,
          true
        )
        .addField("**Servers**", [client.guilds.size], true)
        .addField("**Channels**", `[ ${client.channels.size} ]`, true)
        .addField("**Users**", `[ ${client.users.size} ]`, true)
        .addField("**My Name**", `[ ${client.user.tag} ]`, true)
        .addField("**My ID**", `[ ${client.user.id} ]`, true)
        .addField("**DiscordJS**", `[ ${Discord.version} ]`, true)
        .addField("**NodeJS**", `[ ${process.version} ]`, true)
        .addField("**Arch**", `[ ${process.arch} ]`, true)
        .addField("**Platform**", `[ ${process.platform} ]`, true)
        .addField("**My Language**", `[ JavaScript | Node.js ]`, true)
        .setFooter(
          "Developers Bot ! ,Salto0o7,#7677 "
        )
    });
  }
});

const rWlc = JSON.parse(fs.readFileSync("./AutoRole.json", "utf8"));
client.on("message", message => {
  var prefix = ".";
  if (message.channel.type === "dm") return;
  if (message.author.bot) return;
  if (!rWlc[message.guild.id])
    rWlc[message.guild.id] = {
      role: "member"
    };
  const channel = rWlc[message.guild.id].role;
  if (message.content.startsWith(prefix + "autorole")) {
    if (!message.member.hasPermission(`ADMINISTRATOR`)) return;
    let newrole = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!newrole) return message.reply(`**${prefix}autorole <role name>**`);
    rWlc[message.guild.id].role = newrole;
    message.channel.send(
      `**${message.guild.name}'s role has been changed to ${newrole}**`
    );
  }
  fs.writeFile("./AutoRole.json", JSON.stringify(rWlc), function(e) {
    if (e) throw e;
  });
});
client.on("guildMemberAdd", member => {
  if (!rWlc[member.guild.id])
    rWlc[member.guild.id] = {
      role: "member"
    };
  const sRole = rWlc[member.guild.id].role;
  let Rrole = member.guild.roles.find("name", sRole);
  member.addRole(Rrole);
});

client.on("message", msg => {
  if (msg.content.startsWith(prefix + "infoautorole")) {
    var sRole = rWlc[msg.guild.id].role;
    let emb = new Discord.RichEmbed()
      .setTitle("**AutoRole Server**")
      .setAuthor(msg.guild.name, msg.guild.iconURL)
      .setThumbnail(msg.guild.iconURL)
      .setColor("BALCK")
      .addField("**ID Server**", msg.guild.id)
      .addField("**Name Server**", msg.guild.name)
      .addField("**Role**", sRole)
      .setFooter(client.user.tag, client.user.avatarURL);
    msg.channel.send(emb);
  }
});

const blacklist = JSON.parse(fs.readFileSync("./blacklist.json", "utf8"));
client.on("message", message => {
  if (message.author.bot || !message.guild) return;
  if (!message.member) return;
  if (!message.member.hasPermission("ADMINISTRATOR")) return;
  if (message.content.startsWith(prefix + "blacklist add")) {
    let user =
      message.mentions.members.first() ||
      message.guild.members.get(message.content.split(" ")[2]);
    if (!user)
      return message.channel.send(
        "**Please Mention the User Or Type His ID <a:636495709239246848:641694170880409600>**"
      );
    if (user.id == message.author.id || user.id == client.user.id)
      return message.channel.send(`**You Can't Add this Member!**`);
    if (!message.guild.member(user).bannable)
      return message.channel.send(
        `<a:636495709239246848:641694170880409600> **I couldn't ban that user. Please check my permissions and role position.**`
      );
    user.ban("blacklist by" + message.author.tag + "!");
    if (blacklist[message.guild.id + user.id])
      return message.channel.send("**This Member Allready Blacklisted!**");
    blacklist[message.guild.id + user.id] = {};
    message.channel.send(
      `**Added ${user} to The Blacklist <a:636495689207119882:641694154723819520>**`
    );
  }
  if (message.content.startsWith(prefix + "blacklist remove")) {
    let user = message.content.split(" ")[2];
    if (!user)
      return message.channel.send(
        "**Please Type His ID <a:636495709239246848:641694170880409600>**"
      );
    if (!blacklist[message.guild.id + user])
      return message.channel.send(
        "**I Can't Find This member In The Blacklist!**\nplease Check the Member ID"
      );
    delete blacklist[message.guild.id + user];
    message.guild.unban(user).catch(err => {
      return message.channel.send(
        `<a:636495709239246848:641694170880409600> I couldn't unban that user.`
      );
    });
    message.channel.send(
      `**Removed <@${user}> from The Blacklist <a:636495689207119882:641694154723819520>**`
    );
  }
  if (message == prefix + "blacklist list") {
    const blacklistss = [];
    client.users.forEach(m => {
      if (!blacklist[message.guild.id + m.id]) return;
      blacklistss.push(`<@${m.id}>`);
    });
    let MS = blacklistss.join("\n");
    message.channel.send(
      new Discord.RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .setTitle(
          "**<a:643167533016285205:645398215801307143>  This The Blacklist:**"
        )
        .setDescription(`${MS}`)
        .setColor("RED")
        .setFooter(message.author.username, message.author.avatarURL)
    );
  }
  fs.writeFile("./blacklist.json", JSON.stringify(blacklist, null, 2), function(
    e
  ) {
    if (e) throw e;
  });
  fs.writeFile("./blacklist.json", JSON.stringify(blacklist, null, 2), function(
    e
  ) {
    if (e) throw e;
  });
});
client.on("guildMemberAdd", member => {
  if (blacklist[member.guild.id + member.id]) return member.ban("blacklist");
});



var config = {
  events: [
    {type: "CHANNEL_CREATE", logType: "CHANNEL_CREATE", limit: 1 , delay: 5000},
    {type: "CHANNEL_DELETE", logType: "CHANNEL_DELETE", limit: 1, delay: 5000},
    {type: "GUILD_MEMBER_REMOVE", logType: "MEMBER_KICK", limit: 1, delay: 5000},
    {type: "GUILD_BAN_ADD", logType: "MEMBER_BAN_ADD", limit: 1, delay: 5000},
    {type: "GUILD_ROLE_CREATE", logType: "ROLE_CREATE", limit: 1, delay: 5000},
    {type: "GUILD_ROLE_DELETE", logType: "ROLE_DELETE", limit: 1, delay: 5000},
  ]
}
client.on("error", (e) => console.error(e));
client.on("raw", (packet)=> {
  let {t, d} = packet, type = t, {guild_id} = data = d || {};
  if (type === "READY") {
    client.startedTimestamp = new Date().getTime();
    client.captures = [];
  }
  let event = config.events.find(anEvent => anEvent.type === type);
  if (!event) return;
  let guild = client.guilds.get(guild_id);
  if (!guild) return;
  guild.fetchAuditLogs({limit : 1, type: event.logType})
    .then(eventAudit => {
      let eventLog = eventAudit.entries.first();
      if (!eventLog) return;
      let executor = eventLog.executor;
      guild.fetchAuditLogs({type: event.logType, user: executor})
        .then((userAudit, index) => {
          let uses = 0;
          userAudit.entries.map(entry => {
            if (entry.createdTimestamp > client.startedTimestamp && !client.captures.includes(index)) uses += 1;
          });
          setTimeout(() => {
            client.captures[index] = index
          }, event.delay || 2000)
          if (uses >= event.limit) {
            client.emit("reachLimit", {
              user: userAudit.entries.first().executor,
              member: guild.members.get(executor.id),
              guild: guild,
              type: event.type,
            })
          }
        }).catch(console.error)
    }).catch(console.error)
});
client.on("reachLimit", (limit)=> {
  let log = limit.guild.channels.find( channel => channel.name === "log");
  log.send(limit.user.username+"\** سيرفر بيتهكر ! ** ");
  limit.guild.owner.send(limit.user.username+"\** سيرفرك بيتهكر ! ** ")
  limit.member.roles.map(role => {
    limit.member.roleRemove
    .catch(log.send)
  });
});















client.login("Njg4OTg1NzMwMjc3NDQxNjE4.Xm8R9g.-h9mbzB2Cr6W0mNvVrcI6h7vcsE");
