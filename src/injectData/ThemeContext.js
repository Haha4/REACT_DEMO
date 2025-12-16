import React, { createContext, useContext } from 'react'
// 1️⃣ 创建 Context
const ThemeContext = createContext('light') // 默认值 'light'


export default ThemeContext