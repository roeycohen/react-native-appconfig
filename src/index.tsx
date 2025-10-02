import Appconfig from './NativeAppconfig';
import { Platform, Settings } from 'react-native';

export function getManagedConfig(): object {
  if (Platform.OS === 'android') {
    return Appconfig.managedConfig();
  } else if (Platform.OS === 'ios') {
    return Settings.get('com.apple.configuration.managed') ?? {};
  } else {
    return {};
  }
}
