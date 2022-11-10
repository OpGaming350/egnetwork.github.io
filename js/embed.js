const Discord = require("discord.js")

const embed = new Discord.MessageEmbed() // Ver 12.2.0 of Discord.js
.setTitle("This is a title")
.setDescription("This is a description")
.setTimestamp()
.setFooter("This is a footer")
.setAuthor("This is the author's name", //and this its profile pic)
.addField("This is a field", "this is its description")
.setImage("https://images-ext-2.discordapp.net/external/cC-YBJkH2GXnX7MHMASUM9Gle1S1im3rDJj2K54A28w/%3Fcid%3D73b8f7b19a5ccc575679c0a7fc4a673b753e4ce993f35223%26rid%3Dgiphy.mp4/https/media2.giphy.com/media/Q8bEDnj9hZd6vivXSZ/giphy.mp4")
.setThumbnail("https://images-ext-2.discordapp.net/external/cC-YBJkH2GXnX7MHMASUM9Gle1S1im3rDJj2K54A28w/%3Fcid%3D73b8f7b19a5ccc575679c0a7fc4a673b753e4ce993f35223%26rid%3Dgiphy.mp4/https/media2.giphy.com/media/Q8bEDnj9hZd6vivXSZ/giphy.mp4")
message.channel.send(embed) // Remove the brackets <>
