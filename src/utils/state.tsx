import { atom } from 'recoil';

export const apiTokenState = atom({
  key: 'token',
  default: '',
});
