# Viewer Data Service

## Features

- Update Twitch stream title
- Send out social media notifications on Go-Live
  - Discord
  - Twitter

## Design

This document will outline the prototypical data model and web views.

### Guidelines

All non-user-facing time is represented as epoch millis.

### Web

#### Authentication

User authentication is handled internally to the app without external dependencies.

#### Prototypical Views

##### Dashboard

A single pane of glass for monitoring the health of a stream -- probably backed by a real monitoring engine like
prometheus exposing grafana style graphs. Needs discussion. Also acting as a control plane for managing features of the
streamer ecosystem.

### Prototypical Data Model

User - a user that is able to log in to the application to monitor or manage the stream Viewer - an entity that has
engaged through watching, chatting, commenting, clipping, or through some other means DiscordAccountLookup - a discord
account lookup table (mapping many discord users to a single entity)
TwitchAccountLookup - a twitch account lookup table (mapping many twitch users to a single entity)

#### Core

```ts
interface User {
  id: string
  username: string
  passwordHash: string
  salt: string
  createdMilils: number
  updatedMillis: number
}
```

```ts
interface Viewer {
  id: string
}
```

#### Social Media

```ts
interface DiscordAccount {
  userId: string
  username: string
}
```

```ts
interface TwitchAccountLookup {
  userId: string
  username: string
}
```

#### Stream

```ts
interface Schedule {
  id: string
  startMillis: number
  stopMillis: number
}
```

```ts
interface Segment {
  id: string
  scheduleId: string
  name: string
  streamTitle: string
  startMillis: number
  endMillis: number
}
```

```ts
interface Content {
  id: string
  title: string
  description: string
  providerId: string
  segmentId: string
}
```

```ts
interface StreamProvider {
  id: string
  name: string
  apiKey: string
}
```
