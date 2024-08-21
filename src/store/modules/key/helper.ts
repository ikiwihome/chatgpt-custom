import { ss } from '@/utils/storage'

const LOCAL_NAME = 'keyStorage'

export type Modal = 'gpt-4o' | 'gpt-4o-mini' | 'gpt-4-turbo' | 'gpt-3.5-turbo'

export interface KeyInfo {
  apiKey: string
  accessToken: string
  modal: Modal
}

export interface KeyState {
  keyInfo: KeyInfo
}

export function defaultSetting(): KeyState {
  return {
    keyInfo: {
      apiKey: 'sk-Xaw850bb979df7cf592636fb512c0d5002103c72107ciuma',
      accessToken: '',
      modal: 'gpt-4o',
    },
  }
}

export function getLocalState(): KeyState {
  const localSetting: KeyState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalState(setting: KeyState): void {
  ss.set(LOCAL_NAME, setting)
}
