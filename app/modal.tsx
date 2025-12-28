import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import {
  FlatList,
  Image,
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface ThreadItem {
  id: string;
  value: string;
  imageUris: string[];
  location?: [number, number];
  hashtags?: string;
}

export default function ModalScreen() {
  const [newThreadData, setNewThreadData] = useState<ThreadItem[]>([
    {
      id: new Date().getTime().toString(),
      value: '',
      imageUris: [],
    },
  ]);
  const [lastAddedThreadId, setLastAddedThreadId] = useState<string | null>(
    null
  );
  const textInputRefs = useRef<{ [key: string]: TextInput | null }>({});
  const router = useRouter();
  const insets = useSafeAreaInsets();

  // 새로운 스레드가 추가되면 해당 TextInput에 포커스
  useEffect(() => {
    if (lastAddedThreadId && textInputRefs.current[lastAddedThreadId]) {
      const timer = setTimeout(() => {
        textInputRefs.current[lastAddedThreadId]?.focus();
        setLastAddedThreadId(null);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [lastAddedThreadId]);

  // 취소 버튼 핸들러
  const handleCancel = () => {
    router.back();
  };

  // 텍스트 입력 핸들러
  const handleTextChange = (id: string, text: string) => {
    setNewThreadData((prev) =>
      prev.map((item) => (item.id === id ? { ...item, value: text } : item))
    );
  };

  // 이미지 추가 핸들러
  const handleAddImage = (id: string) => {
    // TODO: 이미지 선택 로직 구현
    console.log('이미지 추가:', id);
  };

  // 위치 추가 핸들러
  const handleAddLocation = (id: string) => {
    // TODO: 위치 선택 로직 구현
    console.log('위치 추가:', id);
  };

  const canAddThread = newThreadData.at(-1)?.value.trim() ?? '' !== '';
  const canPost = newThreadData.every((thread) => thread.value.trim() !== '');

  // 스레드 추가 핸들러
  const handleAddThread = () => {
    const newId = new Date().getTime().toString();
    setNewThreadData((prev) => [
      ...prev,
      {
        id: newId,
        value: '',
        imageUris: [],
      },
    ]);
    setLastAddedThreadId(newId);
  };

  // 스레드 작성 완료 핸들러
  const handleSubmitThread = () => {
    // 빈 스레드 필터링
    const validThreads = newThreadData.filter(
      (thread) => thread.value.trim() !== '' || thread.imageUris.length > 0
    );

    if (validThreads.length === 0) {
      // TODO: 경고 메시지 표시
      console.log('내용을 입력해주세요');
      return;
    }

    // TODO: 스레드 제출 로직
    console.log('스레드 제출:', validThreads);
    router.back();
  };

  // 개시 버튼 핸들러
  const handlePublish = () => {
    // TODO: 개시 로직 구현
    console.log('스레드 개시');
  };

  const handleDelete = (id: string) => {
    setNewThreadData((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <View
      style={{
        paddingTop: insets.top,
      }}
      className="bg-gray-100 flex-1"
    >
      <View className="flex flex-row justify-center items-center">
        <Pressable
          onPress={handleCancel}
          className="absolute pl-8 left-0 top-0  rounded-md"
        >
          <Text>취소</Text>
        </Pressable>
        <Text className="font-bold">새로운 스레드</Text>
      </View>
      <View className="flex flex-col p-4 mt-2 bg-gray-200">
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
                    <Text>user1</Text>
                  </View>
                  <View>
                    <TextInput
                      ref={(ref) => {
                        textInputRefs.current[item.id] = ref;
                      }}
                      value={item.value}
                      onChangeText={(text) => handleTextChange(item.id, text)}
                      placeholder="내용을 더 추가해보세요..."
                      multiline
                    />
                  </View>
                </View>
                <Pressable
                  onPress={() => handleDelete(item.id)}
                  className="absolute right-0 top-0"
                >
                  <Text>X</Text>
                </Pressable>
              </View>
              <View className="flex flex-row items-center gap-5 ml-6">
                <View className="h-10 w-1 bg-gray-400"></View>
                <Pressable onPress={() => handleAddImage(item.id)}>
                  <Ionicons name="image-outline" size={24} color="gray" />
                </Pressable>
                <Pressable onPress={() => handleAddLocation(item.id)}>
                  <Ionicons name="location-outline" size={24} color="gray" />
                </Pressable>
              </View>
            </View>
          )}
        />
        <View>
          <Pressable
            onPress={handleAddThread}
            className="pl-7 py-2 flex flex-row gap-5 items-center"
            disabled={!canAddThread}
          >
            <View className="rounded-full overflow-hidden flex flex-row items-center">
              <Image
                source={require('../assets/images/icon.png')}
                style={{
                  width: 25,
                  height: 25,
                  resizeMode: 'cover',
                  opacity: canAddThread ? 1 : 0.5,
                }}
              />
            </View>
            <Text
              className="text-gray-300 font-semibold"
              style={{ color: canAddThread ? 'black' : 'gray' }}
            >
              스레드 추가하기
            </Text>
          </Pressable>
        </View>
      </View>
      <View
        className="absolute left-0 bottom-0 flex flex-row w-full justify-between bg-white"
        style={{ paddingBottom: insets.bottom, backgroundColor: 'white' }}
      >
        <Pressable className="m-4 px-5 py-3">
          <Text className="text-gray-400 font-bold">스레드 작성</Text>
        </Pressable>
        <Pressable
          onPress={handlePublish}
          className="rounded-full m-4 px-5 py-3"
          disabled={!canPost}
          style={{ backgroundColor: canPost ? 'black' : 'gray' }}
        >
          <Text className="text-white">개시</Text>
        </Pressable>
      </View>
    </View>
  );
}
