/**
 * Storage Manager
 */

import { AsyncStorage } from 'react-native'

export enum Stored {
  SUBS = 'subscriptions'
}

/**
 * Save data
 * 
 * @param {string} key - key of item
 * @param {any} data - data to be saved
 */
export const setDataAsync = async (key: Stored|string, data: any) => {
  try {
    await AsyncStorage.setItem(key, data)
  } catch (e) {
    throw new Error('Failed to store ' + key)
  }
}

/**
 * Retrieve data
 * 
 * @param {string} key - key of item to be retreived
 * 
 * @return {any}
 */
export const getDataAsync = async (key: Stored|string) => {
    return await AsyncStorage.getItem(key)
}