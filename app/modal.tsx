import { useRouter } from 'expo-router';
import { Button, View } from 'react-native';

export default function ModalScreen() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View>
        <Button
          title="Close"
          onPress={() => {
            router.back();
          }}
        />
      </View>
    </View>
  );
}
