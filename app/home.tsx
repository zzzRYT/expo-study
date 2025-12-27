import { Redirect } from 'expo-router';
import React from 'react';
import '../global.css';

export default function Home() {
  return <Redirect href="/(tabs)/(home)" />;
}
