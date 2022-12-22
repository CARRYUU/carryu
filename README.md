<img src="./images/carryu_big_logo_white_background.svg" alt="banner mabuhay"></img>

We are CarryU, an online courses platform!

This document is written by [@xxrjun](https://github.com/xxrjun).

## Our teams

- [@xxrjun](https://github.com/xxrjun)
- [@Tsu-Yu carrie57](https://github.com/Tsu-Yu)
- [@Chen-LiYin](https://github.com/Chen-LiYin)
- [@heyuhsuan](https://github.com/heyuhsuan)
- [@Elly520](https://github.com/Elly520)
- [@HankLiu20](https://github.com/HankLiu20)
- [@Joe-qwe](https://github.com/Joe-qwe)

## Table of Contents

- [Our teams](#our-teams)
- [Table of Contents](#table-of-contents)
- [Project Documents](#project-documents)
  - [3 Major Documents](#3-major-documents)
- [How to Run in Localhost?](#how-to-run-in-localhost)
- [For Developer](#for-developer)
  - [Software Requirement](#software-requirement)
  - [Developer Tools](#developer-tools)
  - [Tools' Official Document](#tools-official-document)
  - [Learning Resources](#learning-resources)

## Project Documents

### 3 Major Documents

| <div style="width: 370px">Document<div>                                   | Description                                                                                                                                                        |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Software Requirement Specification v1.3.2](./docs/CarryU_SRS_v1.3.2.pdf) | 描述軟體產品、專案之主要使用者、功能性與非功能性之需求規格。藉由本文件用以釐清使用者之**需求**，以作為系統軟體分析與設計之基礎，並可於測試與驗收階段作為依憑。     |
| [Software Analysis Description](./docs/CarryU_SAD_v1.1.1.pdf)             | 依據需求規格文件(SRS)，主要用於描述邏輯之軟體架構與系統範圍之文件。藉由本文件得以分析軟體系統架構之目的，並作為軟體**設計**階段之依據。                            |
| [Software Design Description]()                                           | 依據需求規格文件(SRS)、分析規格文件(SAD)進行規範，主要用於描述實際設計之軟體架構與系統範圍之文件。藉由本文件得以了解軟體系統架構之目的，並作為軟體**實作**之依據。 |

If you want to see the acrchieve files, please click [acrchieve](./docs/archieve/).

## How to Run in Localhost?

Clone this repository first. If you are our developer, please use SSH.

```Bash
$ git clone git@github.com:CARRYUU/carryu.git
$ cd carryu
```

Download all backend package.

```Bash
$ cd server
$ npm install
```

In `./server/`, rename `.env.example` to `.env` and then place those three variables.
Default port is 3000.

```javascript
PORT=<PLACE PORT YOU WANT TO LISTEN>
MONGO_URI=<PLACE YOUR MONGO CONNECTION LINK>
JWT_SECRET=<PLACE YOUR JWT SECRET>
```

It would be like this. (This is just an exmaple, you should replace your `MONGO_URI` and `JWT_SECRET`)

```
PORT=8080
MONGO_URI=mongodb+srv://example:example-password@cluster0.aaaaaa.mongodb.net/?retryWrites=true&w=majority
JWT_SECRET=THIS_IS_MY_SECRET
```

Run the backend server in `localhost`.

You can use `nodemon`. When you modified files and save it, server side would reload automatically.

```Bash
$ nodemon index.js
```

If you encounter some errors, you can just using `node` to run.

```
$ node index.js
```

After running the backend server, we can open the other terminal to start our frontend app. Also, don't forget to download package.

```Bash
$ cd client
$ npm install
```

In `./client/`, ename `.env.example` to `.env` and then place the variable.
You should place the same port as the the port you listen on the backend server.
If you want to add other react app environment variable, you must start the name with `REACT_APP`.

```
REACT_APP_API_URL=http://localhost:8080/api
```

Start the react app!

```Bash
$ npm run start
```

## For Developer

### Software Requirement

| Category                   | Requirement Content        |
| -------------------------- | -------------------------- |
| OS                         | Ubuntu 20.04 LTS           |
| Frontend                   | ReactJS、TailwindCSS       |
| Backend(Web Server)        | NodeJS & ExpressJS         |
| Database                   | MongoDB、Mongoose          |
| Version Control & Platform | Git、GitHub                |
| Deployment Platform        | GCP(Google Cloud Platform) |
| Container Management       | Docker                     |
| Package Management         | Npm                        |

### Developer Tools

#### Software

| Category          | Requirement Content                    |
| ----------------- | -------------------------------------- |
| OS                | Windows 11 or MacOS                    |
| Database Software | MongoDB Atlas                          |
| IDE & Text Editor | Visual Studio Code、JetBrain Webstorm  |
| Terminal          | Windows Terminal or Iterms2(for MacOS) |
| UI/UX Design      | Figma                                  |
| API Testing       | Postman                                |

#### VSCode Extensions (Optional but highly recommended!)

| Extenstion Name                        | Description                                                                                                                                                                       |
| -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Prettier - Code formatter              | 文字排版對齊工具，基本上是必備。                                                                                                                                                  |
| GitLens                                | Git 超好用的套件，包含圖形化、比較分支差異等等好處說不完。Student Developer Package 可以免費使用                                                                                  |
| GitHub Copilot or Tabnine AI           | 程式碼自動補齊、生成。前者可以於 Student Developer Package 免費取得，後者有付費與免費版本。                                                                                       |
| WakaTime                               | 紀錄打 code 的時間 ， 免費版最多紀錄兩周 。                                                                                                                                       |
| Git History                            | 查看檔案 Git log、檔案歷史紀錄、比較分支或 commit 紀錄 。                                                                                                                         |
| Dracula Official                       | 好看的 VSCode 主題可以提升生產力。不一定要用這個，有很多不同主題的 extentions 等你去找。                                                                                          |
| Material Icon Theme                    | 好看的 VSCode 圖示可以提升生產力。不一定要用這個，有很多不同圖示的 extentions 等你去找。                                                                                          |
| ESLint                                 | 用於檢查 JavaScript 程式碼是否符合規則(語法檢查、提醒刪除多於程式碼等等)，確保你的程式碼品質在一定的水準之上 。                                                                   |
| ES7+ React/Redux/React-Native snippets | 可以輕鬆地為 React 生成語法和代碼片段。<br/>每次需要創建一個 new component 時，只需編寫 `rce`（對於類組件）或 `rfce` or `rfc`（對於功能組件），打 `rccp` 就可以自動完成元件架構。 |

### Tools' Official Document

> 學習看官方文件跟餵狗，即便很多官方文件寫得很藝術

- Frontend Tools
  - [React.js](https://reactjs.org/docs/getting-started.html)
  - [Tailwindcss](https://tailwindcss.com/docs/installation)
  - [Redux-tool kits](https://redux-toolkit.js.org/)
  - [Axios](https://axios-http.com/docs/intro)
  - [react-router-dom](https://reactrouter.com/en/main)
- Backend Tools
  - [Node.js](https://nodejs.org/en/docs/)
  - [Express](https://expressjs.com/)
  - [MongoDB](https://www.mongodb.com/docs/manual/tutorial/getting-started/)
  - [Mongoose](https://mongoosejs.com/docs/guide.html)
  - [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)

### Learning Resources

- [MDN Resources for Developers, by Developers](https://developer.mozilla.org/en-US/) - 基本上是必備的，幾乎你想的到的所有網站開發的知識這裡都有。

- [Udemy 2022 網頁開發全攻略(HTML, CSS, JavaScript, React, SQL, Node, more)](https://www.udemy.com/course/html5-css3-z/) - (無業配)網頁全端開發很好的入門磚，老師講得淺顯易懂，等特價的時候差不多三四百塊就買的到，非常划算。

- [2020 iT 邦鐵人賽 成為看起來很強的後端](https://youtube.com/playlist?list=PLS5AiLcCHgNxd341NwuY9EOpVvY5Z8VOs) - 花一個下午的時間就可以大致了解後端藍圖，賺。

其他的可以參考: [cs-resource by xxrjun](https://github.com/xxrjun/cs-resources#%E7%B6%B2%E9%A0%81%E9%96%8B%E7%99%BC-web-development)
