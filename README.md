量刑系統 UI Redesign
====================

環境設定
--------

本專案以 `yarn` 套件管理程式打點環境設定。詳細安裝步驟，請參考 [Node.js](https://nodejs.org/en/download/package-manager/) 和 [`yarn`](https://yarnpkg.com/getting-started/install) 的官方文件。

```bash
npm install -g yarn
```

安裝專案的相依套件，啟動開發伺服器並在瀏覽器中打開：

```bash
yarn install
yarn start
```

編譯
----

將程式碼編譯成靜態頁面，輸出至 `build/`。

```bash
yarn build
```

`package.json` 內亦備有發佈至 GitHub Pages 之工具指令 `yarn deploy` 可供使用。

測試
----

通常情況下會呼叫量刑系統計畫的後端伺服器。

為方便攜帶展示，當在 `localhost` 載入網頁時，會改呼叫本機端的 API [模擬伺服器](tests/server.js)。預設的通訊埠為 `localhost:9165`。

專案結構
--------

* `src/`：專案動態原始碼。
  - `controls/`：可重複使用的控制項。
  - `parts/`：主要介面板塊。
  - `index.js`：模組進入點。
  - `api.js`：呼叫並正規化 API 回傳值。
  - `spec.js`：罪名與量刑因子的中繼資料。
  - `util.js`：篩選、分類、格式化的工具函式。
* `public/`：專案靜態檔案與網頁。
* `tests/`：專案測試用程式碼。
* `docs/`：專案敲定好的規格文件。

授權
----

> Copyright © 2020–21 Poren Chiang

本專案使用下列開源套件，於契約允許限度內為《資訊服務採購契約範本》定義之開源軟體。

* [React.js](https://github.com/facebook/react/blob/17.0.1/LICENSE)
* [Material UI](https://github.com/mui-org/material-ui/blob/v4.11.3/LICENSE)

此前端介面除授權予機關利用外，並以 [GNU GPL 3.0 公眾授權](https://www.gnu.org/licenses/gpl-3.0.html)或更新之版本釋出；惟<mark>程式碼內之長篇說明文字、其引用之說明手冊、以及所呼叫之後端數據模型服務，屬各有其所著作人之獨立著作</mark>，不屬本專案之範疇，亦非本專案得以或欲以明示或默示授權、保證、或擔保其正確性或完整性之範圍。
