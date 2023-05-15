// // service.js
// module.exports = async function() {
//     // This service needs to be registered for the module to work
//     // but it will be used later in the "Receiving Events" section
// }

// src/services/PlaybackService.ts
import TrackPlayer, { Event } from 'react-native-track-player';

export const PlaybackService = async function() {

    TrackPlayer.addEventListener(Event.RemotePlay, () => TrackPlayer.play());

    TrackPlayer.addEventListener(Event.RemotePause, () => TrackPlayer.pause());

    // ...

};