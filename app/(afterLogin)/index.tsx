import { Redirect } from 'expo-router';
import { Text, View } from 'react-native';

const isLogin = true;

export default function AfterLoginIndex() {
  if (isLogin) {
    return <Redirect href="/home" />;
  }

  return (
    <View>
      <Text>After Login</Text>
    </View>
  );
}
