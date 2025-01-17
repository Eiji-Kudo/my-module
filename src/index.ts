import { EventEmitter, NativeModulesProxy, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to MyModule.web.ts
// and on native platforms to MyModule.ts
import MyModule from './MyModule';
import { ChangeEventPayload, MyModuleViewProps } from './MyModule.types';
import MyModuleView from './MyModuleView';

// Get the native constant value.
export const PI = MyModule.PI;

export function hello(): string {
  return MyModule.hello();
}

export async function setValueAsync(value: string) {
  return await MyModule.setValueAsync(value);
}

const emitter = new EventEmitter(MyModule ?? NativeModulesProxy.MyModule);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ChangeEventPayload, MyModuleView, MyModuleViewProps };
