import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface ThreadItem {
  id: string;
  username: string;
  value: string;
  images: FormData[];
  location: string;
}

interface ThreadData {
  newThreadData: ThreadItem[];
}

export default function ModalScreen() {
  const [newThreadData, setNewThreadData] = useState<ThreadItem[]>([
    {
      id: '1',
      username: 'user1',
      value: '',
      images: [],
      location: '',
    },
  ]);
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        backgroundColor: 'white',
      }}
    >
      <View className="flex flex-row justify-center items-center">
        <TouchableOpacity
          onPress={() => router.back()}
          className="absolute pl-8 left-0 top-0  rounded-md"
        >
          <Text>취소</Text>
        </TouchableOpacity>
        <Text className="font-bold">새로운 스레드</Text>
      </View>
      <View className="flex flex-col p-4">
        <FlatList
          data={newThreadData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View className="border-gray-200 flex flex-col gap-2 px-4 py-1">
              <View className="flex flex-row items-center gap-3">
                <View className="rounded-full overflow-hidden">
                  <Image
                    source={require('../assets/images/icon.png')}
                    style={{ width: 45, height: 45 }}
                  />
                </View>
                <View className="flex flex-col gap-1">
                  <View>
                    <Text>{item.username}</Text>
                  </View>
                  <View>
                    <TextInput
                      value={item.value}
                      placeholder="내용을 더 추가해보세요..."
                    />
                  </View>
                </View>
              </View>
              <View className="flex flex-row items-center gap-5 ml-6">
                <View className="h-10 w-1 bg-gray-400"></View>
                <View>
                  <Ionicons name="image-outline" size={24} color="gray" />
                </View>
                <View>
                  <Ionicons name="location-outline" size={24} color="gray" />
                </View>
              </View>
            </View>
          )}
        />
        <View>
          <TouchableOpacity className="pl-7 py-2 flex flex-row gap-5 items-center">
            <View className="rounded-full overflow-hidden flex flex-row items-center">
              <Image
                source={require('../assets/images/icon.png')}
                style={{
                  width: 25,
                  height: 25,
                  resizeMode: 'cover',
                  opacity: 0.5,
                }}
              />
            </View>
            <Text className="text-gray-300 font-semibold">스레드 추가하기</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
