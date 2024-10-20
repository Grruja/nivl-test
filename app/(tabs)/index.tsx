import { Colors } from '@/constants/Colors';
import { useAppSelector } from '@/hooks/reduxHooks';
import { useState } from 'react';
import { Button, StyleSheet, TextInput } from 'react-native';
import { Text, View } from "react-native";
import { useDispatch } from 'react-redux';
import { setUsername } from '@/redux/usernameSlice';

export default function Index() {    
    const username = useAppSelector(state => state.username.value);
    const dispatch = useDispatch();
    const [usernameInputValue, setUsernameInputValue] = useState("");

    function saveUsername() {
        dispatch(setUsername(usernameInputValue));
        setUsernameInputValue("");
    }

	return (
		<View style={styles.container}>
            <Text style={styles.welcomeText}>Welcome {username} 👋</Text>

            <TextInput 
                value={usernameInputValue}
                onChangeText={setUsernameInputValue}
                placeholder='Enter your username'
                style={styles.usernameInput}
            />
            <Button
                onPress={saveUsername}
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