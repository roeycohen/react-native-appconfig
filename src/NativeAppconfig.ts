import { TurboModuleRegistry, type TurboModule } from 'react-native';
// @ts-ignore
import type { UnsafeObject } from 'react-native/Libraries/Types/CodegenTypes';

export interface Spec extends TurboModule {
  managedConfig(): UnsafeObject;
}

export default TurboModuleRegistry.getEnforcing<Spec>('Appconfig');
