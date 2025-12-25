import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Tabs, useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const isLoggedIn = false;

export default function TabsLayout() {
  const router = useRouter();
  const [isLoginState, setIsLoginState] = useState(false);

  const openLoginModal = () => {
    setIsLoginState(true);
  };

  const closeLoginModal = () => {
    setIsLoginState(false);
  };

  return (
    <>
      <Tabs
        backBehavior="history"
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
                name="home-outline"
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
                name="search-outline"
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
              if (!isLoggedIn) {
                openLoginModal();
                return;
              }
              router.push('/modal');
            },
          }}
          options={{
            title: 'Add',
            tabBarLabel: () => null,
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="add"
                size={24}
                color={focused ? 'black' : 'gray'}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="activity"
          listeners={{
            tabPress: (e) => {
              if (!isLoggedIn) {
                e.preventDefault();
                openLoginModal();
                return;
              }
            },
          }}
          options={{
            title: 'Activity',
            tabBarLabel: () => null,
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="heart-outline"
                size={24}
                color={focused ? 'black' : 'gray'}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="[username]"
          listeners={{
            tabPress: (e) => {
              if (!isLoggedIn) {
                e.preventDefault();
                openLoginModal();
                return;
              }
            },
          }}
          options={{
            title: 'Profile',
            tabBarLabel: () => null,
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="person-outline"
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
      {!isLoggedIn && isLoginState && (
        <TouchableOpacity
          onPress={closeLoginModal}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}
        ></TouchableOpacity>
      )}
      <Modal transparent={true} visible={isLoginState} animationType="slide">
        <View style={styles.modalContent}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Choose a sticker</Text>
            <Pressable onPress={closeLoginModal}>
              <MaterialIcons name="close" color="#fff" size={22} />
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    height: '55%',
    width: '100%',
    backgroundColor: '#25292e',
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: 'absolute',
    bottom: 0,
  },
  titleContainer: {
    height: '16%',
    backgroundColor: '#464C55',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#fff',
    fontSize: 16,
  },
});
