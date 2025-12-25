import { useRouter } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

export default function HomeScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  console.log(insets);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <TouchableOpacity onPress={() => router.replace('/(home)')}>
          <Text>추천</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => router.replace('/(home)/following')}>
          <Text>팔로잉</Text>
        </TouchableOpacity>
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
