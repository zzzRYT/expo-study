import NotFound from '@/app/+not-found';
import { usePathname, useRouter } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';

export default function ActivityScreen() {
  const router = useRouter();
  const pathname = usePathname();

  if (
    ![
      '/activity',
      '/activity/requests',
      '/activity/replies',
      '/activity/mentions',
      '/activity/quotes',
      '/activity/reposts',
    ].includes(pathname)
  ) {
    return <NotFound />;
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View>
        <TouchableOpacity onPress={() => router.replace('/activity')}>
          <Text>모두</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => router.replace('/activity/requests')}>
          <Text>요청</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => router.replace('/activity/replies')}>
          <Text>답글</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => router.replace('/activity/mentions')}>
          <Text>언급</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => router.replace('/activity/quotes')}>
          <Text>인용</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => router.replace('/activity/reposts')}>
          <Text>리포스트</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
