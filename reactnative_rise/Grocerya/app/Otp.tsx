import { useLocalSearchParams } from 'expo-router';
import OtpScreen from '../screens/OtpScreen';

export default function Page() {
  const { phone } = useLocalSearchParams<{ phone: string }>();

  return <OtpScreen phone={phone} />;
}
