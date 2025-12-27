import { usePathname, useRouter } from 'expo-router';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <SafeAreaView className="flex-1">
      <View className="fixed top-0 left-0 right-0">
        <View className="flex-row items-center justify-center p-4">
          <Image
            source={require('../../../assets/images/react-logo.png')}
            style={{ width: 42, height: 42, marginRight: 8 }}
          />
          <TouchableOpacity
            onPress={() => router.push('/(auth)/login')}
            className="absolute right-4 bg-black p-4 rounded-md"
          >
            <Text className="text-white">로그인</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="flex flex-row w-full">
        <View className="flex-1 items-center">
          <TouchableOpacity onPress={() => router.replace('/(home)')}>
            <Text style={{ color: pathname === '/' ? 'blue' : 'black' }}>
              추천
            </Text>
          </TouchableOpacity>
        </View>
        <View className="flex-1 items-center">
          <TouchableOpacity onPress={() => router.replace('/(home)/following')}>
            <Text
              style={{
                color: pathname === '/following' ? 'blue' : 'black',
              }}
            >
              팔로잉
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <TouchableOpacity onPress={() => router.push('/[pathname]/post/1')}>
          <Text>게시글1</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => router.push('/[pathname]/post/2')}>
          <Text>게시글2</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => router.push('/[pathname]/post/3')}>
          <Text>게시글3</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
