import { Platform } from 'react-native';

let baseURL = '';

{
  Platform.OS == 'android' ? baseURL = 'http://197.243.14.102:3000/api/v1/' : baseURL = 'http://197.243.14.102:3000/api/v1/'
 }

// //https://eshop-hicm.herokuapp.com/api
export default baseURL;
