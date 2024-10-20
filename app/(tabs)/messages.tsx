import { StyleSheet, Text, View } from "react-native";
import { useAppSelector } from '@/hooks/reduxHooks';
import { Colors } from "@/constants/Colors";

export default function Index() {
    const username = useAppSelector(state => state.username.value);

	return (
		<View style={styles.container}>
			<Text>
                Here 
                <Text style={styles.usernameText}> {username} </Text>
                are all people that messaged you
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