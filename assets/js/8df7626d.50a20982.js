"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[86024],{84710:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"guidelines","metadata":{"permalink":"/wikis/guidelines","source":"@site/forums/guidelines.md","title":"Wiki Guidelines","description":"The official Wiki Guidelines.","date":"2023-06-22T05:44:29.000Z","formattedDate":"June 22, 2023","tags":[],"hasTruncateMarker":false,"authors":[{"name":"@faf4a","tags":["Community Manager","Staff"],"title":"Community Manager & Documentation Maintainer","url":"https://discord.com/users/428188716641812481","imageURL":"https://cdn.discordapp.com/avatars/428188716641812481/635c1dca728b68c2fa329dbcb3330204.png","key":"faf4a"}],"frontMatter":{"title":"Wiki Guidelines","description":"The official Wiki Guidelines.","slug":"guidelines","authors":"faf4a","hide_table_of_contents":false,"pagination_next":null,"pagination_prev":null},"nextItem":{"title":"Submit Wiki","permalink":"/wikis/submit"}},"content":"Welcome to the `aoi.js` Wiki! This document outlines the guidelines for contributing to the wiki content.\\n\\n## Purpose of Wikis\\n\\nThe `aoi.js` Wikis serve as a comprehensive resource for users to learn about the functionalities, features, and usage of the `aoi.js` package. It aims to provide clear and concise explanations, examples, and tutorials to help users make the most out of `aoi.js` in their projects.\\n\\n## Contribution Guidelines\\n\\nWe welcome contributions from the community to help improve and expand the `aoi.js` Wiki. To maintain a high-quality and consistent documentation, please adhere to the following guidelines when contributing:\\n\\n1. **Accuracy**: Ensure that the information provided in the Wiki is accurate, up-to-date, and relevant to the current version of `aoi.js`. If you are unsure about any information, consult the official `aoi.js` documentation or reach out to the maintainers.\\n\\n2. **Clarity**: Write in a clear and concise manner, using simple language to explain concepts. Avoid jargon and technical terms unless necessary, and provide explanations or definitions when using them.\\n\\n3. **Organization**: Structure the content logically and use appropriate headings, subheadings, and bullet points to make the information easy to navigate and understand. Consider adding examples, code snippets, and visuals where appropriate to enhance clarity.\\n\\n4. **Consistency**: Maintain consistency in formatting, styling, and terminology throughout the Wiki. Follow the existing conventions and style used in the documentation. If in doubt, refer to the style guide provided in the `aoi.js` repository.\\n\\n5. **Citation**: Whenever referencing external sources or quoting code, make sure to provide proper attribution and citation. Include links or references to the original sources, especially when explaining concepts or providing code examples from other projects.\\n\\n6. **Collaboration**: If you have suggestions, improvements, or corrections for existing content, feel free to open a pull request or create an issue on the `aoi.js` repository. Be respectful and constructive when engaging in discussions or providing feedback.\\n\\n## Conclusion\\n\\nBy following these guidelines, we can collectively create and maintain a valuable resource for the `aoi.js` community. Thank you for your contributions and helping others make the most out of `aoi.js`!\\n\\n:::info Ready to submit?\\n\\nHead to the [submittion Page](./introduction.md)!\\n\\n:::"},{"id":"submit","metadata":{"permalink":"/wikis/submit","source":"@site/forums/introduction.md","title":"Submit Wiki","description":"Submit a Wiki which will then be showcased on this website!","date":"2023-06-22T05:44:29.000Z","formattedDate":"June 22, 2023","tags":[],"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"Submit Wiki","description":"Submit a Wiki which will then be showcased on this website!","slug":"submit","hide_table_of_contents":false,"pagination_next":null,"pagination_prev":null},"prevItem":{"title":"Wiki Guidelines","permalink":"/wikis/guidelines"},"nextItem":{"title":"Botinfo command","permalink":"/wikis/posts/botinfo-command-sr2wtw"}},"content":"Welcome to Wikis, this is still **experimental**.\\n\\n:::warning Before Submitting\\n\\nRead the guidelines or your Wiki will possibly get denied for not following the guidelines.\\n\\n:::\\n\\n\\n<div>\\n    <SubmitForm />\\n</div>"},{"id":"/posts/botinfo-command-sr2wtw","metadata":{"permalink":"/wikis/posts/botinfo-command-sr2wtw","source":"@site/forums/posts/botinfo-command-sr2wtw.md","title":"Botinfo command","description":"simple botinfo command","date":"2023-06-22T05:44:29.000Z","formattedDate":"June 22, 2023","tags":[{"label":"v6","permalink":"/wikis/tags/v-6"},{"label":"aoi.js","permalink":"/wikis/tags/aoi-js"}],"hasTruncateMarker":false,"authors":[{"name":"@arkwell","title":"Member","url":"https://discord.com/users/405070001356275712","image_url":"https://cdn.discordapp.com/avatars/405070001356275712/a_4eba9c78ecdc4cf568a3ec1a03d52db4.png","imageURL":"https://cdn.discordapp.com/avatars/405070001356275712/a_4eba9c78ecdc4cf568a3ec1a03d52db4.png"}],"frontMatter":{"title":"Botinfo command","description":"simple botinfo command","authors":{"name":"@arkwell","title":"Member","url":"https://discord.com/users/405070001356275712","image_url":"https://cdn.discordapp.com/avatars/405070001356275712/a_4eba9c78ecdc4cf568a3ec1a03d52db4.png","imageURL":"https://cdn.discordapp.com/avatars/405070001356275712/a_4eba9c78ecdc4cf568a3ec1a03d52db4.png"},"tags":["v6","aoi.js"],"hide_table_of_contents":false,"enableComments":true,"pagination_prev":null,"pagination_next":null},"prevItem":{"title":"Submit Wiki","permalink":"/wikis/submit"},"nextItem":{"title":"How to use textSplit","permalink":"/wikis/posts/how-to-use-textsplit-rah5re"}},"content":"```js\\nmodule.exports = [{\\n    name: \\"botinfo\\",\\n    code: `\\n$addField[Uptime;$uptime[full]]\\n$addField[Ping;$pingms]\\n$addField[Channels;$allChannelsCount]\\n$addField[Users;$allMembersCount]\\n$addField[Servers;$guildCount]\\n$title[Bot Information]\\n  `\\n}]; \\n```"},{"id":"/posts/how-to-use-textsplit-rah5re","metadata":{"permalink":"/wikis/posts/how-to-use-textsplit-rah5re","source":"@site/forums/posts/how-to-use-textsplit-rah5re.md","title":"How to use textSplit","description":"i tryed to show the best example :) ( is a basic example to use textSplit... )","date":"2023-06-22T05:44:29.000Z","formattedDate":"June 22, 2023","tags":[{"label":"aoi.js","permalink":"/wikis/tags/aoi-js"},{"label":"v6","permalink":"/wikis/tags/v-6"}],"hasTruncateMarker":false,"authors":[{"name":"@Artz_","title":"Member","url":"https://discord.com/users/1079517122822152272","image_url":"https://cdn.discordapp.com/avatars/1079517122822152272/d9d4fe8b7bf6e572e53f04296863dcc2.png","imageURL":"https://cdn.discordapp.com/avatars/1079517122822152272/d9d4fe8b7bf6e572e53f04296863dcc2.png"}],"frontMatter":{"title":"How to use textSplit","description":"i tryed to show the best example :) ( is a basic example to use textSplit... )","authors":{"name":"@Artz_","title":"Member","url":"https://discord.com/users/1079517122822152272","image_url":"https://cdn.discordapp.com/avatars/1079517122822152272/d9d4fe8b7bf6e572e53f04296863dcc2.png","imageURL":"https://cdn.discordapp.com/avatars/1079517122822152272/d9d4fe8b7bf6e572e53f04296863dcc2.png"},"tags":["aoi.js","v6"],"hide_table_of_contents":false,"enableComments":true,"pagination_prev":null,"pagination_next":null},"prevItem":{"title":"Botinfo command","permalink":"/wikis/posts/botinfo-command-sr2wtw"},"nextItem":{"title":"HowGamer command","permalink":"/wikis/posts/howgamer-command-ic9vu7"}},"content":"```js\\n$splitText[2] // returns Artz_ ( b => Artz_ )\\n$editTextSplitElement[2;Artz_]\\n$splitText[$random[1;$getTextSplitLength]] // returns random letter inserted in textSplit\\n$joinSplitText[ - ] // returns b - c - d\\n$removeSplitTextElement[1]\\n$joinSplitText[ - ] // returns a - b - c - d\\n$splitText[1] // returns a\\n$textSplit[a|b|c|d;|]\\n```"},{"id":"/posts/howgamer-command-ic9vu7","metadata":{"permalink":"/wikis/posts/howgamer-command-ic9vu7","source":"@site/forums/posts/howgamer-command-ic9vu7.md","title":"HowGamer command","description":"Checks how gamer you\'re for no reason, It\'s just for fun so.","date":"2023-06-22T05:44:29.000Z","formattedDate":"June 22, 2023","tags":[{"label":"v6","permalink":"/wikis/tags/v-6"},{"label":"aoi.js","permalink":"/wikis/tags/aoi-js"}],"hasTruncateMarker":false,"authors":[{"name":"@dodogames","title":"Member","url":"https://discord.com/users/632607624742961153","image_url":"https://cdn.discordapp.com/avatars/632607624742961153/5a4dc9bcccf66c5372f410c40d267708.png","imageURL":"https://cdn.discordapp.com/avatars/632607624742961153/5a4dc9bcccf66c5372f410c40d267708.png"}],"frontMatter":{"title":"HowGamer command","description":"Checks how gamer you\'re for no reason, It\'s just for fun so.","authors":{"name":"@dodogames","title":"Member","url":"https://discord.com/users/632607624742961153","image_url":"https://cdn.discordapp.com/avatars/632607624742961153/5a4dc9bcccf66c5372f410c40d267708.png","imageURL":"https://cdn.discordapp.com/avatars/632607624742961153/5a4dc9bcccf66c5372f410c40d267708.png"},"tags":["v6","aoi.js"],"hide_table_of_contents":false,"enableComments":true,"pagination_prev":null,"pagination_next":null},"prevItem":{"title":"How to use textSplit","permalink":"/wikis/posts/how-to-use-textsplit-rah5re"},"nextItem":{"title":"Long Serverinfo command","permalink":"/wikis/posts/long-serverinfo-command-iiwq2"}},"content":"```js\\nmodule.exports = {\\nname: \\"howgamer\\",\\ncode: `$title[how Gamer machine]\\n$description[$username[$mentioned[1;true]] is $random[1;100]% Gamer]\\n$color[Random]\\n$onlyIf[$mentioned[1;true]!=$authorID;{newEmbed:{title:how Gamer machine}{description:you\'re $random[1;100]% Gamer}{color:Random}}]\\n$cooldown[5s; Slow down! Don\'t spam the command!\\nTime left: \\\\`%time%\\\\`]\\n`\\n}\\n```"},{"id":"/posts/long-serverinfo-command-iiwq2","metadata":{"permalink":"/wikis/posts/long-serverinfo-command-iiwq2","source":"@site/forums/posts/long-serverinfo-command-iiwq2.md","title":"Long Serverinfo command","description":"A long serverinfo command just for you. Nothing fancy about it.","date":"2023-06-22T05:44:29.000Z","formattedDate":"June 22, 2023","tags":[{"label":"v6","permalink":"/wikis/tags/v-6"},{"label":"aoi.js","permalink":"/wikis/tags/aoi-js"}],"hasTruncateMarker":false,"authors":[{"name":"@dodogames","title":"Member","url":"https://discord.com/users/632607624742961153","image_url":"https://cdn.discordapp.com/avatars/632607624742961153/5a4dc9bcccf66c5372f410c40d267708.png","imageURL":"https://cdn.discordapp.com/avatars/632607624742961153/5a4dc9bcccf66c5372f410c40d267708.png"}],"frontMatter":{"title":"Long Serverinfo command","description":"A long serverinfo command just for you. Nothing fancy about it.","authors":{"name":"@dodogames","title":"Member","url":"https://discord.com/users/632607624742961153","image_url":"https://cdn.discordapp.com/avatars/632607624742961153/5a4dc9bcccf66c5372f410c40d267708.png","imageURL":"https://cdn.discordapp.com/avatars/632607624742961153/5a4dc9bcccf66c5372f410c40d267708.png"},"tags":["v6","aoi.js"],"hide_table_of_contents":false,"enableComments":true,"pagination_prev":null,"pagination_next":null},"prevItem":{"title":"HowGamer command","permalink":"/wikis/posts/howgamer-command-ic9vu7"},"nextItem":{"title":"Ping Command","permalink":"/wikis/posts/ping"}},"content":"```js\\nmodule.exports = {\\n  name: \\"serverinfo\\",\\n  aliases: \\"server\\",\\n  code: `$title[Server Info]\\n  $addField[Verification Level;$get[verifylevel]]\\n  $addField[Other;\\nServer Created since: $creationDate[$guildID;date]\\nContent Filter: $get[content]\\nServer ID: $guildID\\n]\\n  $addField[General;\\nRoles: $roleCount[$guildID;true]\\nEmojis: $emojiCount[$guildID] \\nServer Boosts: $guildBoostCount[$guildID]\\n\\n]\\n  $addField[Channels;\\nTotal: $channelCount[$guildID;all]\\nText Channels: $channelCount[$guildID;Text]\\nVoice Channels: $channelCount[$guildID;Voice]\\nAnnouncement Channels: $channelCount[$guildID;Announcement]\\nForum Channels: $channelCount[$guildID;Forum]\\nCategories: $channelCount[$guildID;Category]\\n]\\n  $addField[Members information;\\nTotal: $membersCount[$guildID;all;true]\\nHumans: $membersCount[$guildID;all;false]\\nBots: $botCount[$guildID]\\n]\\n  $thumbnail[$get[serverimage]]\\n  $cooldown[5s; Slow down! Don\'t spam the command!\\nTime left: \\\\`%time%\\\\`]\\n  \\n  $let[verifylevel;$replaceText[$replaceText[$replaceText[$replaceText[$GuildVerificationLevel;1;Low];2;Medium];3;High];4;Very High]]\\n  $let[content;$replaceText[$replaceText[$replaceText[$guildContentFilter[$guildID];0;Disabled];1;Medium];2;High]]\\n  $let[serverimage;$replaceText[$replaceText[$checkCondition[$guildIcon==];false;$guildIcon];true;$userAvatar[$clientID]]]\\n`\\n}\\n```\\n# Note\\nThis command requires the intent `GuildPresences` to be added into your bot\'s main file (aka index.js) for the total members shown to be correct. If this doesn\'t work then eval `$cacheMembers[$guildID]` in the server where you used serverinfo command (while having the intent added as well) and then try again. Feel free to ask for help in support if needed!"},{"id":"/posts/ping","metadata":{"permalink":"/wikis/posts/ping","source":"@site/forums/posts/ping.md","title":"Ping Command","description":"This is an example of a ping command","date":"2023-06-22T05:44:29.000Z","formattedDate":"June 22, 2023","tags":[{"label":"v6","permalink":"/wikis/tags/v-6"},{"label":"aoi.js","permalink":"/wikis/tags/aoi-js"}],"hasTruncateMarker":false,"authors":[{"name":"@faf4a","tags":["Community Manager","Staff"],"title":"Community Manager & Documentation Maintainer","url":"https://discord.com/users/428188716641812481","imageURL":"https://cdn.discordapp.com/avatars/428188716641812481/635c1dca728b68c2fa329dbcb3330204.png","key":"faf4a"}],"frontMatter":{"title":"Ping Command","description":"This is an example of a ping command","authors":"faf4a","tags":["v6","aoi.js"],"hide_table_of_contents":false,"enableComments":true,"pagination_prev":null,"pagination_next":null},"prevItem":{"title":"Long Serverinfo command","permalink":"/wikis/posts/long-serverinfo-command-iiwq2"},"nextItem":{"title":"Random Country","permalink":"/wikis/posts/random-country-p2o9s"}},"content":"Lovely ping example.\\n\\n```js\\nmodule.exports = [{\\n  name: \\"ping\\",\\n  code: `\\nMy ping is $pingMS!\\n$reply`\\n}];\\n```\\n\\nEnjoy!"},{"id":"/posts/random-country-p2o9s","metadata":{"permalink":"/wikis/posts/random-country-p2o9s","source":"@site/forums/posts/random-country-p2o9s.md","title":"Random Country","description":"A code for get information about a random code.","date":"2023-06-22T05:44:29.000Z","formattedDate":"June 22, 2023","tags":[{"label":"aoi.js","permalink":"/wikis/tags/aoi-js"},{"label":"v6","permalink":"/wikis/tags/v-6"}],"hasTruncateMarker":false,"authors":[{"name":"@jollyjolli","title":"Member","url":"https://discord.com/users/166181471369953280","image_url":"https://cdn.discordapp.com/avatars/166181471369953280/756c4e1baec28426d72e988091dbc5c6.png?size=1024","imageURL":"https://cdn.discordapp.com/avatars/166181471369953280/756c4e1baec28426d72e988091dbc5c6.png?size=1024"}],"frontMatter":{"title":"Random Country","description":"A code for get information about a random code.","authors":{"name":"@jollyjolli","title":"Member","url":"https://discord.com/users/166181471369953280","image_url":"https://cdn.discordapp.com/avatars/166181471369953280/756c4e1baec28426d72e988091dbc5c6.png?size=1024","imageURL":"https://cdn.discordapp.com/avatars/166181471369953280/756c4e1baec28426d72e988091dbc5c6.png?size=1024"},"tags":["aoi.js","v6"],"hide_table_of_contents":false,"enableComments":true,"pagination_prev":null,"pagination_next":null},"prevItem":{"title":"Ping Command","permalink":"/wikis/posts/ping"},"nextItem":{"title":"randomText advanced","permalink":"/wikis/posts/randomtext-advanced-xzyzwx"}},"content":"```js\\nmodule.exports = [{\\nname: \\"Random Country\\",\\naliases: [\\"rc\\"],\\ncode: `\\n$title[1;$getObjectProperty[countries[$random[0;250]].name_en]]\\n$addField[1;TLD;$getObjectProperty[countries[$random[0;250]].tld];true]\\n$addField[1;ISO Code (v2);$getObjectProperty[countries[$random[0;250]].code_3];true]\\n$addField[1;ISO Code (v1);$getObjectProperty[countries[$random[0;250]].code_2];true]\\n$addField[1;Capital;$getObjectProperty[countries[$random[0;250]].capital_es];true]\\n$addField[1;Dial Code;$getObjectProperty[countries[$random[0;250]].dial_code];true]\\n$addField[1;Continent;$getObjectProperty[countries[$random[0;250]].continent_en];true] \\n$image[1;https://flagcdn.com/w2560/$tolowercase[$getObjectProperty[countries[$random[0;250]].code_2]].jpg]\\n$footer[1;Code By $getObjectProperty[by]]\\n$color[$getUserVar[PFcolor]]\\n$createObject[$jsonRequest[https://www.jsonkeeper.com/b/L23E]]`\\n}];\\n```"},{"id":"/posts/randomtext-advanced-xzyzwx","metadata":{"permalink":"/wikis/posts/randomtext-advanced-xzyzwx","source":"@site/forums/posts/randomtext-advanced-xzyzwx.md","title":"randomText advanced","description":"A custom function to get random/specified number of words.","date":"2023-06-22T05:44:29.000Z","formattedDate":"June 22, 2023","tags":[{"label":"v6","permalink":"/wikis/tags/v-6"},{"label":"Other","permalink":"/wikis/tags/other"}],"hasTruncateMarker":false,"authors":[{"name":"@ahoemi","title":"Member","url":"https://discord.com/users/715852000096419900","image_url":"https://cdn.discordapp.com/avatars/715852000096419900/4dd9ab5b17ca6c07e4da71746cd0eca9.png","imageURL":"https://cdn.discordapp.com/avatars/715852000096419900/4dd9ab5b17ca6c07e4da71746cd0eca9.png"}],"frontMatter":{"title":"randomText advanced","description":"A custom function to get random/specified number of words.","authors":{"name":"@ahoemi","title":"Member","url":"https://discord.com/users/715852000096419900","image_url":"https://cdn.discordapp.com/avatars/715852000096419900/4dd9ab5b17ca6c07e4da71746cd0eca9.png","imageURL":"https://cdn.discordapp.com/avatars/715852000096419900/4dd9ab5b17ca6c07e4da71746cd0eca9.png"},"tags":["v6","Other"],"hide_table_of_contents":false,"enableComments":true,"pagination_prev":null,"pagination_next":null},"prevItem":{"title":"Random Country","permalink":"/wikis/posts/random-country-p2o9s"},"nextItem":{"title":"reverseText","permalink":"/wikis/posts/reversetext-w2htzj"}},"content":"## Code\\n```js\\nbot.functionManager.createFunction({\\n  name: \\"$randomWord\\",\\n  type: \\"djs\\",\\n  code: async (d) => {\\n  const functionName = \\"$randomWord\\";\\n  const data = d.util.aoiFunc(d);\\n  const [ words, numb = 1 ] = data.inside.splits;\\n\\nif (!words || words === \\"\\") {\\n let error = `\\\\`\\\\`\\\\`elixir\\\\nRei.js Error\\\\n${functionName}: Words were not provided!\\\\`\\\\`\\\\``\\n  data.result = error\\n} else {\\n  let wordArr = words.split(\':\');\\n  let num = numb > wordArr.length ? wordArr.length : numb;\\n  var randWords = [];\\n  for (let i = 0; i < num; i++) {\\n    let newRandom;\\n    do {\\n      let rand = Math.floor(Math.random() * wordArr.length);\\n      newRandom = wordArr[rand];\\n    } while (randWords.includes(newRandom));\\n    randWords.push(newRandom);\\n  }\\nconst output = randWords.join(\', \')\\ndata.result = output\\n}\\n    return {\\n      code: d.util.setCode(data),\\n    };\\n  }\\n})\\n```\\n### Usage \\n`$randomWord[Hi:Hello:Bye:Sayonara;2]`\\nwill return 2 random words from Hi, Hello, Bye and Sayonara\\n\\n### Where do i use it?\\n- Paste it at bottom of your main file.\\n- You can also edit it and use in handler\\nMention me in support server for any help."},{"id":"/posts/reversetext-w2htzj","metadata":{"permalink":"/wikis/posts/reversetext-w2htzj","source":"@site/forums/posts/reversetext-w2htzj.md","title":"reverseText","description":"A fun command to modify text and reverse them.","date":"2023-06-22T05:44:29.000Z","formattedDate":"June 22, 2023","tags":[{"label":"v6","permalink":"/wikis/tags/v-6"},{"label":"Other","permalink":"/wikis/tags/other"}],"hasTruncateMarker":false,"authors":[{"name":"@ahoemi","title":"Member","url":"https://discord.com/users/715852000096419900","image_url":"https://cdn.discordapp.com/avatars/715852000096419900/4dd9ab5b17ca6c07e4da71746cd0eca9.png","imageURL":"https://cdn.discordapp.com/avatars/715852000096419900/4dd9ab5b17ca6c07e4da71746cd0eca9.png"}],"frontMatter":{"title":"reverseText","description":"A fun command to modify text and reverse them.","authors":{"name":"@ahoemi","title":"Member","url":"https://discord.com/users/715852000096419900","image_url":"https://cdn.discordapp.com/avatars/715852000096419900/4dd9ab5b17ca6c07e4da71746cd0eca9.png","imageURL":"https://cdn.discordapp.com/avatars/715852000096419900/4dd9ab5b17ca6c07e4da71746cd0eca9.png"},"tags":["v6","Other"],"hide_table_of_contents":false,"enableComments":true,"pagination_prev":null,"pagination_next":null},"prevItem":{"title":"randomText advanced","permalink":"/wikis/posts/randomtext-advanced-xzyzwx"},"nextItem":{"title":"Roblox group info command","permalink":"/wikis/posts/roblox-group-info-command-ebigj"}},"content":"```js\\n$djsEval[let texts = \\"PUT YOUR TEXT HERE\\"\\nlet parts = texts.split(\'\');\\nlet output = \'\';\\nfor (let i = parts.length - 1; i >= 0; i--) {\\n  output += parts[i];\\n}\\noutput;true]\\n```\\n## Usage\\nPut your text in the code and the result will be reversed text of your input.\\n\\n![reverseText](https://media.discordapp.net/attachments/1022533781040672839/1121226275374239784/image0.jpg?raw=true)\\n\\n### Where to use this?\\nI made it in `$djsEval` so u can use it anywhere inside your code \\n\\n-I know right its has no actual uses, but might be for fun bots-"},{"id":"/posts/roblox-group-info-command-ebigj","metadata":{"permalink":"/wikis/posts/roblox-group-info-command-ebigj","source":"@site/forums/posts/roblox-group-info-command-ebigj.md","title":"Roblox group info command","description":"Displays info about a roblox group","date":"2023-06-22T05:44:29.000Z","formattedDate":"June 22, 2023","tags":[{"label":"v6","permalink":"/wikis/tags/v-6"},{"label":"aoi.js","permalink":"/wikis/tags/aoi-js"}],"hasTruncateMarker":false,"authors":[{"name":"@supremesupreme","title":"Member","url":"https://discord.com/users/964024743172915220","image_url":"https://cdn.discordapp.com/avatars/964024743172915220/a_153765879b794acfd5fd72ce3f6cd713.gif","imageURL":"https://cdn.discordapp.com/avatars/964024743172915220/a_153765879b794acfd5fd72ce3f6cd713.gif"}],"frontMatter":{"title":"Roblox group info command","description":"Displays info about a roblox group","authors":{"name":"@supremesupreme","title":"Member","url":"https://discord.com/users/964024743172915220","image_url":"https://cdn.discordapp.com/avatars/964024743172915220/a_153765879b794acfd5fd72ce3f6cd713.gif","imageURL":"https://cdn.discordapp.com/avatars/964024743172915220/a_153765879b794acfd5fd72ce3f6cd713.gif"},"tags":["v6","aoi.js"],"hide_table_of_contents":false,"enableComments":true,"pagination_prev":null,"pagination_next":null},"prevItem":{"title":"reverseText","permalink":"/wikis/posts/reversetext-w2htzj"},"nextItem":{"title":"Serverinfo command","permalink":"/wikis/posts/serverinfo-command-6bdeo"}},"content":"```js\\nmodule.exports = {\\n    name: \\"groupinfo\\",\\n    code: `\\n    $title[1;Success!] \\n    $description[> Group ID: $getobjectproperty[id]\\n    > **Group Name:** $getobjectproperty[name]\\n    > **Group Description:** $getobjectproperty[description] $if[$getobjectproperty[description]==;undefined;]\\n    > **Group OwnerId:** $getobjectproperty[owner.username]\\n    > **Group Latest Shout:** $getobjectproperty[shout.body] $if[$getobjectproperty[shout.body]==;undefined;]\\n]\\n    $color[1;#C3A78E]\\n    $footer[1;bob]\\n    $createObject[$jsonRequest[https://groups.roblox.com/v1/groups/$message[1]]]\\n    $argscheck[1;Group id?]\\n    `\\n}\\n```"},{"id":"/posts/serverinfo-command-6bdeo","metadata":{"permalink":"/wikis/posts/serverinfo-command-6bdeo","source":"@site/forums/posts/serverinfo-command-6bdeo.md","title":"Serverinfo command","description":"Requires GuildPresences in intents","date":"2023-06-22T05:44:29.000Z","formattedDate":"June 22, 2023","tags":[{"label":"v6","permalink":"/wikis/tags/v-6"},{"label":"aoi.js","permalink":"/wikis/tags/aoi-js"}],"hasTruncateMarker":false,"authors":[{"name":"@arkwell","title":"Member","url":"https://discord.com/users/405070001356275712","image_url":"https://cdn.discordapp.com/avatars/405070001356275712/a_4eba9c78ecdc4cf568a3ec1a03d52db4.png","imageURL":"https://cdn.discordapp.com/avatars/405070001356275712/a_4eba9c78ecdc4cf568a3ec1a03d52db4.png"}],"frontMatter":{"title":"Serverinfo command","description":"Requires GuildPresences in intents","authors":{"name":"@arkwell","title":"Member","url":"https://discord.com/users/405070001356275712","image_url":"https://cdn.discordapp.com/avatars/405070001356275712/a_4eba9c78ecdc4cf568a3ec1a03d52db4.png","imageURL":"https://cdn.discordapp.com/avatars/405070001356275712/a_4eba9c78ecdc4cf568a3ec1a03d52db4.png"},"tags":["v6","aoi.js"],"hide_table_of_contents":false,"enableComments":true,"pagination_prev":null,"pagination_next":null},"prevItem":{"title":"Roblox group info command","permalink":"/wikis/posts/roblox-group-info-command-ebigj"},"nextItem":{"title":"toToggleCase","permalink":"/wikis/posts/totogglecase-dmrmlh"}},"content":"```js\\nmodule.exports = [{\\n    name: \\"serverinfo\\",\\n    code: `\\n$addField[Channels;Total: $channelCount[$guildID]\\nText: $channelCount[$guildID;Text]\\nVoice: $channelCount[$guildID;Voice]\\nCategory: $channelCount[$guildID;Category]\\nNews: $channelCount[$guildID;Announcement]\\nThreads: $channelCount[$guildID;PublicThread]]\\n$addField[Emojis;Total: $emojiCount[$guildID]]\\n$addField[Roles;$roleCount[$guildID;true]]\\n$addField[Members;Total: $membersCount[$guildID]\\nHumans: $membersCount[$guildID;all;false]\\nBots: $sub[$membersCount[$guildID;all;true];$membersCount[$guildID;all;false]]\\nOnline: $membersCount[$guildID;online;true]]\\n$addField[Boosts;$guildBoostCount[$guildID] (Level $guildBoostLevel[$guildID])]\\n$addField[Creation;$creationDate[$guildID;time]]\\n$addField[Guild ID;$guildID]\\n$addField[Owner;<@$ownerID[$guildID]>]\\n$title[Server Information - $guildName[$guildID]]\\n  `\\n}]; \\n```\\n\\nRequires GuildPresences in intents"},{"id":"/posts/totogglecase-dmrmlh","metadata":{"permalink":"/wikis/posts/totogglecase-dmrmlh","source":"@site/forums/posts/totogglecase-dmrmlh.md","title":"toToggleCase","description":"A custom d.js function for text modification.","date":"2023-06-22T05:44:29.000Z","formattedDate":"June 22, 2023","tags":[{"label":"v6","permalink":"/wikis/tags/v-6"},{"label":"Other","permalink":"/wikis/tags/other"}],"hasTruncateMarker":false,"authors":[{"name":"@ahoemi","title":"Member","url":"https://discord.com/users/715852000096419900","image_url":"https://cdn.discordapp.com/avatars/715852000096419900/4dd9ab5b17ca6c07e4da71746cd0eca9.png","imageURL":"https://cdn.discordapp.com/avatars/715852000096419900/4dd9ab5b17ca6c07e4da71746cd0eca9.png"}],"frontMatter":{"title":"toToggleCase","description":"A custom d.js function for text modification.","authors":{"name":"@ahoemi","title":"Member","url":"https://discord.com/users/715852000096419900","image_url":"https://cdn.discordapp.com/avatars/715852000096419900/4dd9ab5b17ca6c07e4da71746cd0eca9.png","imageURL":"https://cdn.discordapp.com/avatars/715852000096419900/4dd9ab5b17ca6c07e4da71746cd0eca9.png"},"tags":["v6","Other"],"hide_table_of_contents":false,"enableComments":true,"pagination_prev":null,"pagination_next":null},"prevItem":{"title":"Serverinfo command","permalink":"/wikis/posts/serverinfo-command-6bdeo"},"nextItem":{"title":"Translate","permalink":"/wikis/posts/translate-qalbzj"}},"content":"```js\\nbot.functionManager.createFunction({\\n  name: \\"$toToggleCase\\",\\n  type: \\"djs\\",\\n  code: (d) => {\\n const data = d.util.aoiFunc(d);\\nif (data.err) return d.error(data.err);\\n const [ texts ] = data.inside.splits\\nconst output = texts\\n      .split(\\" \\")\\n      .map(\\n        (text) =>\\n          text.addBrackets().slice(0, 1).toLowerCase() + text.addBrackets().slice(1).toUpperCase(),\\n        ).join(\\" \\");\\n\\ndata.result = output\\n    return {\\n        code: d.util.setCode(data),\\n    };\\n}\\n})\\n```\\n## Usage\\n`$toToggleCase[This Is useless fr]`   \\nThis will result in `tHIS iS uSELESS fR`\\n\\n![image](https://media.discordapp.net/attachments/902553397281030208/1120917182365306981/image0.jpg)\\n\\n## Where to use this code?\\nPlace this in your bottom of main file aka index.js"},{"id":"/posts/translate-qalbzj","metadata":{"permalink":"/wikis/posts/translate-qalbzj","source":"@site/forums/posts/translate-qalbzj.md","title":"Translate","description":"Only translate code credits to: API5 :) Errors? tell me in discord.","date":"2023-06-22T05:44:29.000Z","formattedDate":"June 22, 2023","tags":[{"label":"v6","permalink":"/wikis/tags/v-6"}],"hasTruncateMarker":false,"authors":[{"name":"@Artz_","title":"Member","url":"https://discord.com/users/1079517122822152272","image_url":"https://cdn.discordapp.com/avatars/1079517122822152272/d9d4fe8b7bf6e572e53f04296863dcc2.png","imageURL":"https://cdn.discordapp.com/avatars/1079517122822152272/d9d4fe8b7bf6e572e53f04296863dcc2.png"}],"frontMatter":{"title":"Translate","description":"Only translate code credits to: API5 :) Errors? tell me in discord.","authors":{"name":"@Artz_","title":"Member","url":"https://discord.com/users/1079517122822152272","image_url":"https://cdn.discordapp.com/avatars/1079517122822152272/d9d4fe8b7bf6e572e53f04296863dcc2.png","imageURL":"https://cdn.discordapp.com/avatars/1079517122822152272/d9d4fe8b7bf6e572e53f04296863dcc2.png"},"tags":["v6"],"hide_table_of_contents":false,"enableComments":true,"pagination_prev":null,"pagination_next":null},"prevItem":{"title":"toToggleCase","permalink":"/wikis/posts/totogglecase-dmrmlh"},"nextItem":{"title":"Unabbreviate","permalink":"/wikis/posts/unabbreviate-lyc9id"}},"content":"```javascript\\nmodule.exports = [{\\nname: \'translate\',\\ncode: `\\n:map: **$replaceText[$jsonRequest[https://api5.vercel.app/translate?from=$splitText[1]&to=$splitText[2]&text=$replaceText[$replaceText[$message;$message[1];];$message[2];];output;Uuuh, Failed to get response with API, Try again later.];%20; ]**\\n$removeSplitTextElement[2]\\n$removeSplitTextElement[1]\\n$onlyIf[$splitText[3]!=;:x: <@$authorID> Insert the text to translate]\\n$onlyIf[$splitText[2]!=;:x: <@$authorID> Insert the output language.]\\n$onlyIf[$splitText[1]!=;:x: <@$authorID> Insert the input language.]\\n$textSplit[$message; ]\\n`\\n}]\\n```"},{"id":"/posts/unabbreviate-lyc9id","metadata":{"permalink":"/wikis/posts/unabbreviate-lyc9id","source":"@site/forums/posts/unabbreviate-lyc9id.md","title":"Unabbreviate","description":"Just a function to shorten numbers ","date":"2023-06-22T05:44:29.000Z","formattedDate":"June 22, 2023","tags":[{"label":"v6","permalink":"/wikis/tags/v-6"},{"label":"aoi.js","permalink":"/wikis/tags/aoi-js"}],"hasTruncateMarker":false,"authors":[{"name":"@Artz_","title":"Member","url":"https://discord.com/users/1079517122822152272","image_url":"https://cdn.discordapp.com/avatars/1079517122822152272/d9d4fe8b7bf6e572e53f04296863dcc2.png","imageURL":"https://cdn.discordapp.com/avatars/1079517122822152272/d9d4fe8b7bf6e572e53f04296863dcc2.png"}],"frontMatter":{"title":"Unabbreviate","description":"Just a function to shorten numbers ","authors":{"name":"@Artz_","title":"Member","url":"https://discord.com/users/1079517122822152272","image_url":"https://cdn.discordapp.com/avatars/1079517122822152272/d9d4fe8b7bf6e572e53f04296863dcc2.png","imageURL":"https://cdn.discordapp.com/avatars/1079517122822152272/d9d4fe8b7bf6e572e53f04296863dcc2.png"},"tags":["v6","aoi.js"],"hide_table_of_contents":false,"enableComments":true,"pagination_prev":null,"pagination_next":null},"prevItem":{"title":"Translate","permalink":"/wikis/posts/translate-qalbzj"},"nextItem":{"title":"Yes or no command","permalink":"/wikis/posts/yes-or-no-command-0s8eh9"}},"content":"Unabbreviate numbers\\n\\n```javascript\\nbot.functionManager.createFunction({\\nname: \'$unabbreviate\',\\ntype: \'djs\',\\ncode: async d => {\\nconst data = d.util.aoiFunc(d);\\nconst [number] = data.inside.splits;\\nconst u = require(\'util-stunks\')\\nconst code = u.unabbreviate(number)\\ndata.result = code\\nreturn {\\ncode: d.util.setCode(data)\\n}\\n}\\n})\\n```"},{"id":"/posts/yes-or-no-command-0s8eh9","metadata":{"permalink":"/wikis/posts/yes-or-no-command-0s8eh9","source":"@site/forums/posts/yes-or-no-command-0s8eh9.md","title":"Yes or no command","description":"Why i made this command?","date":"2023-06-22T05:44:29.000Z","formattedDate":"June 22, 2023","tags":[{"label":"aoi.js","permalink":"/wikis/tags/aoi-js"},{"label":"v6","permalink":"/wikis/tags/v-6"}],"hasTruncateMarker":false,"authors":[{"name":"@dodogames","title":"Member","url":"https://discord.com/users/632607624742961153","image_url":"https://cdn.discordapp.com/avatars/632607624742961153/5a4dc9bcccf66c5372f410c40d267708.png","imageURL":"https://cdn.discordapp.com/avatars/632607624742961153/5a4dc9bcccf66c5372f410c40d267708.png"}],"frontMatter":{"title":"Yes or no command","description":"Why i made this command?","authors":{"name":"@dodogames","title":"Member","url":"https://discord.com/users/632607624742961153","image_url":"https://cdn.discordapp.com/avatars/632607624742961153/5a4dc9bcccf66c5372f410c40d267708.png","imageURL":"https://cdn.discordapp.com/avatars/632607624742961153/5a4dc9bcccf66c5372f410c40d267708.png"},"tags":["aoi.js","v6"],"hide_table_of_contents":false,"enableComments":true,"pagination_prev":null,"pagination_next":null},"prevItem":{"title":"Unabbreviate","permalink":"/wikis/posts/unabbreviate-lyc9id"}},"content":"Most ridiculous command (in my opinion) made for fun purposes.\\n```js\\nmodule.exports = {\\nname: \\"yesorno\\",\\ncode: `> $message\\n*$randomText[yes;no]*\\n$cooldown[5s; Slow down! Don\'t spam the command!\\nTime left: \\\\`%time%\\\\`]\\n$onlyIf[$message!=;Please Ask me a question to answer you.]`\\n}\\n```"}]}')}}]);