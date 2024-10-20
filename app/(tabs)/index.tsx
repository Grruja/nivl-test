import { Colors } from '@/constants/Colors';
import { Button, StyleSheet, TextInput } from 'react-native';
import { Text, View } from "react-native";

export default function Index() {    
    
    function onPressLearnMore() {
        console.log(123);
    }

	return (
		<View style={styles.container}>
            <Text style={styles.welcomeText}>Welcome 👋</Text>

            <TextInput 
                placeholder='Enter your username'
                style={styles.usernameInput}
            />
            <Button
                onPress={onPressLearnMore}
                title="Save"
                color={ Colors.light.text }
                accessibilityLabel="Save your username"
            />
		</View>
	);
}

const styles = StyleSheet.create({
    container: {
        padding: 30,
    },
    welcomeText: {
        fontSize: 30,
        marginBottom: 50,
    },
    usernameInput: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        marginBottom: 15,
    }
});