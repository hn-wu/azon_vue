// axios.js
import axios from 'axios';

// 创建 axios 实例
const instance = axios.create({
  baseURL: 'http://127.0.0.1:5000', // 例如 'http://192.168.1.100:3000/'
  // 其他全局配置
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

export default instance;
