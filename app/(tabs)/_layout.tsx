import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Tabs } from "expo-router";

export default function TabLayout() {
    return (
        <Tabs screenOptions={{ headerShown: false }}>
            <Tabs.Screen 
                name="settings" 
                options={{
                    title: 'Settings',
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon name={focused ? 'settings' : 'settings-outline'} color={color} />
                    ),
                }}
            />
            <Tabs.Screen 
                name="profile" 
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon name={focused ? 'person' : 'person-outline'} color={color} />
                    ),
                }}
            />
            <Tabs.Screen 
                name="index" 
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
                    ),
                }}
            />
            <Tabs.Screen 
                name="messages" 
                options={{
                    title: 'Messages',
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon name={focused ? 'chatbubbles' : 'chatbubbles-outline'} color={color} />
                    ),
                }}
            />
            <Tabs.Screen 
                name="calls" 
                options={{
                    title: 'Calls',
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon name={focused ? 'call' : 'call-outline'} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}