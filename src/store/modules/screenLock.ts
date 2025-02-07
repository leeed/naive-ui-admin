import { defineStore } from 'pinia';
import { IS_SCREENLOCKED } from '@/store/mutation-types';
import { storage } from '@/utils/Storage';

// Default screen lock time after prolonged inactivity
const initTime = 60 * 60;

const isLocked = storage.get(IS_SCREENLOCKED, false);

export type IScreenLockState = {
  isLocked: boolean; // Whether screen is locked
  lockTime: number;
};

export const useScreenLockStore = defineStore({
  id: 'app-screen-lock',
  state: (): IScreenLockState => ({
    isLocked: isLocked === true, // Whether screen is locked
    lockTime: isLocked == 'true' ? initTime : 0,
  }),
  getters: {},
  actions: {
    setLock(payload: boolean) {
      this.isLocked = payload;
      storage.set(IS_SCREENLOCKED, this.isLocked);
    },
    setLockTime(payload = initTime) {
      this.lockTime = payload;
    },
  },
});
