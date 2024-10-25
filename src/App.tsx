import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>系級</th>
            <th>姓名</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>資管3C</strong></td>
            <td><strong>姚佳彣</strong></td>
          </tr>
        </tbody>
      </table>

      <span>
        <h4>我的專長</h4>
        <ul>
          <li>唱歌</li>
          <li>演奏樂器</li>
        </ul>
      </span>

      <span>
        <h4>我的興趣</h4>
        <ul>
          <li>聽音樂</li>
          <li>收集梗圖</li>
        </ul>
      </span>

      <h4>我喜歡的歌</h4>
      <ul>
        <li><a href="https://www.youtube.com/watch?v=1HeA4bDEAeg">領悟</a></li>
        <li><a href="https://www.youtube.com/watch?v=LczQ2fuCJ7g">如願</a></li>
        <li><a href="https://www.youtube.com/watch?v=Ah9GktNLuUQ">情深深雨濛濛</a></li>
      </ul>

      <h4>我喜歡的梗圖</h4>
      <ol>
        <li>
          只要呼吸就好
          <img src="https://memeprod.ap-south-1.linodeobjects.com/user-template/696a3df413fc28e282b67a20eaace84f.png" alt="範例圖片" />
        </li>
        <li>
          你叫誰尖頭啊
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbehgT0k9VW2sJITLqfzOdvJ_twU8NluRrNA&s" alt="範例圖片" />
        </li>
        <li>
          為什麼不問問神奇海螺呢
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ogMBq0KresXNBlLCB5xg4nMeUpmI_Zojow&s" alt="範例圖片" />
        </li>
      </ol>

      <form action="/submit" method="post">
        <label htmlFor="name">比<em>24</em>好笑的笑話</label>
        <input type="text" id="name" name="name" />
        <input type="submit" value="提交" />
      </form>
    </>
  )
}

export default App
