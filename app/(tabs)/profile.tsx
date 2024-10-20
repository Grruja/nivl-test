import { StyleSheet, Text, View } from "react-native";
import { useAppSelector } from '@/hooks/reduxHooks';
import { Colors } from "@/constants/Colors";

export default function Index() {
    const username = useAppSelector(state => state.username.value);

	return (
		<View style={styles.container}>
			<Text>
                Do you need your profile info
                <Text style={styles.usernameText}> {username}</Text>
                ? Here you can find what you need
            </Text>
		</View>
	);
}

const styles = StyleSheet.create({
    container: {
        padding: 30,
    },
    usernameText: {
        fontWeight: "bold",
        color: Colors.light.tint,
    },
});