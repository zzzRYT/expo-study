import { Ionicons } from '@expo/vector-icons';
import { Tabs, useRouter } from 'expo-router';

export default function TabsLayout() {
  const router = useRouter();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          title: 'home',
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="home"
              size={24}
              color={focused ? 'black' : 'gray'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="search"
              size={24}
              color={focused ? 'black' : 'gray'}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="add"
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            router.push('/modal');
          },
        }}
        options={{
          title: 'Add',
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <Ionicons name="add" size={24} color={focused ? 'black' : 'gray'} />
          ),
        }}
      />
      <Tabs.Screen
        name="activity"
        options={{
          title: 'Activity',
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="heart"
              size={24}
              color={focused ? 'black' : 'gray'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="[username]"
        options={{
          title: 'Profile',
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="person-circle"
              size={24}
              color={focused ? 'black' : 'gray'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="(post)/[username]/post/[postId]"
        options={{ href: null }}
      />
    </Tabs>
  );
}
