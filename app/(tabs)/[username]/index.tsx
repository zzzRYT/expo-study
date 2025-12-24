import { useLocalSearchParams, useRouter } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';

export default function UsernameScreen() {
  const router = useRouter();
  const { username } = useLocalSearchParams();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View>
        <TouchableOpacity onPress={() => router.replace(`/${username}`)}>
          <Text>스레드</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => router.replace(`/${username}/replies`)}
        >
          <Text>답글</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => router.replace(`/${username}/media`)}>
          <Text>미디어</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => router.replace(`/${username}/reposts`)}
        >
          <Text>리포스트</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
