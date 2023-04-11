# Discord-bot-kick-ban

Tout d'abord, vous devez installer discord.js, qui est une bibliothèque Node.js pour travailler avec l'API Discord:

`npm install discord.js`

Ce code crée un bot Discord qui écoute les commandes slash avec les noms `kick et ban`. Lorsque l'une de ces commandes est exécutée, le bot vérifie si l'utilisateur a la permission d'expulser ou de bannir l'utilisateur mentionné, puis effectue l'action et renvoie une réponse à l'utilisateur qui a exécuté la commande.

Pour tester ce code, vous devez ajouter le bot à votre serveur Discord et lui donner les autorisations appropriées pour expulser et bannir des utilisateurs. Ensuite, vous pouvez exécuter les commandes slash en utilisant la syntaxe suivante dans la zone de texte de Discord:

`/kick @utilisateur [raison]`
`/ban @utilisateur [raison]`

Remplacez `@utilisateur` par la mention de l'utilisateur que vous souhaitez expulser ou bannir, et `[raison]` par une raison facultative pour l'action.

