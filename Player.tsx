import TrackPlayer, { useProgress } from 'react-native-track-player';
import { Text, View } from 'react-native';

export default function PlayerBar() {
    const progress = useProgress();

    return (
        // Note: formatTime and ProgressBar are just examples:
        <View style={{
            justifyContent: "center",
            paddingHorizontal: 20,
            paddingVertical: 10,
        }}>
            {/* <Text>{formatTime(progress.position)}</Text>
                <ProgressBar
                    progress={progress.position}
                    buffered={progress.buffered}
                /> */}
            <Text style={{ fontSize: 18 }}>{progress.position}</Text>
            <Text style={{ fontSize: 18 }}>{progress.duration}</Text>
            <Text style={{ fontSize: 18 }}>{progress.buffered}</Text>
            <Text style={{ fontSize: 18 }} onPress={() => TrackPlayer.play()}>Play</Text>
            <Text style={{ fontSize: 18 }} onPress={() => TrackPlayer.pause()}>Pause</Text>
        </View>
    );

}