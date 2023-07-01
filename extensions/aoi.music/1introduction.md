---
title: Introduction
description: Setting up aoi.music with ease.
id: aoimusic-introduction
pagination_prev: null
---

### Table of Content

- **[Installation](#installation)**
- **[Setup](#example-usage)**
- **[Events](#events)**
    - **[Adding Events](#adding-events)**
    - **[List of Events](#list-of-events)**
    - **[Using Events](#using-events)**

---

### Installation

<Tabs groupId="pref-install">
  <TabItem value="i-npm" label="Stable">

  **node.js 16.9.0 or newer is required.**
  ```bash
  npm install @akarui/aoi.music
  ```
  
  </TabItem>
  <TabItem value="i-yarn" label="Pre-Release">

  **node.js 16.9.0 or newer is required.**
  ```bash
  npm install https://github.com/akaruidevelopment/music#main
  ```

</TabItem>
</Tabs>

```js title="index.js"
const voice = new AoiVoice(bot, {
    searchOptions?: {
        soundcloudClientId?: string,
        youtubeCookie?: string,
        youtubeAuth?: PathLike,
        youtubegl?: string,
        youtubeClient?: "WEB" | "ANDROID" | "YTMUSIC",
    },
    requestOptions?: {
        offsetTimeout?: number,
        soundcloudLikeTrackLimit?: number,
        youtubePlaylistLimit?: number,
        spotifyPlaylistLimit?: number,
    },
    devOptions?: {
        debug: boolean,
    },
});
```

### Example Usage

```javascript
const { AoiClient } = require("aoi.js");
const { AoiVoice, PlayerEvents, PluginName, Cacher, Filter } = require("@akarui/aoi.music");

const bot = new AoiClient({
    token: "Discord Bot Token",
    prefix: "Discord Bot Prefix",
    intents: ["MessageContent", "Guilds", "GuildMessages", "GuildVoiceStates"],
    events: ["onMessage", "onInteractionCreate"],
    database: {
        type: "aoi.db",
        db: require("@akarui/aoi.db"),
        tables: ["main"],
        path: "./database/",
        extraOptions: {
            dbType: "KeyValue"
        }
    }
});

const voice = new AoiVoice(bot, {
    searchOptions: {
        soundcloudClientId: "Soundcloud ID",
        youtubegl: "US",
    },
    requestOptions: {
        offsetTimeout: 0,
        soundcloudLikeTrackLimit: 200,
    },
});

// Command Example (ping)
bot.command({
    name: "ping",
    code: `Pong! $pingms`,
});

// optional (cacher / filter)
voice.addPlugin(PluginName.Cacher, new Cacher("memory" /* or "disk" */));
voice.addPlugin(PluginName.Filter, new Filter({
    filterFromStart: false,
}));

voice.bindExecutor(bot.functionManager.interpreter);
```

### Events

#### Adding Events

```js
voice.addEvent(PlayerEvents.EVENT_NAME);
```

#### List of Events

- `TRACK_START` &rarr; Emitted whenever a track starts. 
- `TRACK_END` &rarr; Emitted whenever a track ends.
- `QUEUE_START` &rarr; Emitted whenever a queue starts.
- `QUEUE_END` &rarr; Emitted whenever a queue ends.
- `AUDIO_ERROR` &rarr; Emitted whenever a audio error occurs.
- `TRACK_PAUSE` &rarr; Emitted whenever a track pauses.
- `TRACK_RESUME` &rarr; Emitted whenever a track resumes.

### Using Events

```js
/* Ensure you have loader defined using the LoadCommands class
const { AoiClient, LoadCommands } = require("aoi.js");
const loader = new LoadCommands(bot); */

loader.load(voice.cmds,"./voice/");
```

This should be the content of your `./voice/somefile.js`:

```js
module.exports = [{
    channel: "$channelID",
    type: "eventName",
    code: `code to execute here`
}]
```

If you don't want to use handlers, you can use this instead in your main file:

```js
voice.cmds["eventName"].set("name of the command", {
    channel: "$channelID",
    code: `code to execute here`
});
```