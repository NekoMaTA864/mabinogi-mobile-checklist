# 瑪奇 Mobile｜6 角色日週清單

GitHub Pages：<https://nekomata864.github.io/mabinogi-mobile-checklist/>

這是一個純前端、手機友善的六角色清單。未設定同步時，資料會保存在目前裝置的瀏覽器；設定 Google Sheets 同步後，今日勾選與本週進度會寫入既有試算表的「歷史紀錄」，不同裝置可以讀回同一份資料。

## Google Sheets 同步設定

1. 開啟試算表「瑪奇 Mobile｜6角色日週清單」。
2. 選擇「擴充功能 → Apps Script」，將 `Code.gs` 內容貼入並儲存。
3. 在 Apps Script 執行 `setSyncToken()`，輸入一組只給自己使用的密鑰。
4. 選擇「部署 → 新增部署 → 網頁應用程式」：執行身分選「我」，誰可以存取選「任何人」。
5. 複製部署後的 `/exec` 網址，開啟網頁版的「同步」頁，填入網址與同一組密鑰。
6. 每台裝置各設定一次；之後勾選或調整進度會同步，按「從 Google Sheets 讀取」可載入最新資料。

同步 API 只處理目前遊戲日與本週的任務列，舊的「歷史紀錄」不會清除。密鑰只存於 Apps Script Script Properties 與各裝置的瀏覽器設定，不放進公開 GitHub 原始碼。

## Google OAuth 登入版

目前前端已加入 OAuth 原型。OAuth 版直接由 GitHub Pages 呼叫 Google Sheets API，Apps Script 不參與 OAuth 流程；原本的 Token／Apps Script 同步仍保留在「同步」頁的備援區塊。

啟用前需要完成：

1. 在 Google Cloud 建立 OAuth consent screen。
2. 建立 Web application OAuth Client ID。
3. 啟用 Google Sheets API。
4. 將 `https://nekomata864.github.io` 加入 Authorized JavaScript origins。
5. 將需要使用的 1～2 個 Google 帳號加入測試使用者，並把同一份試算表共用給這些帳號。
6. 修改 `index.html` 頂端的 `GOOGLE_OAUTH_CLIENT_ID`。
7. 如需前端帳號白名單，填入 `ALLOWED_GOOGLE_EMAILS`；真正的資料權限仍由 Google Sheet 的共用權限控制。

OAuth Client ID 可以公開放在前端，但不要把 Client Secret、Access Token 或其他密鑰提交到 Repository。Access Token 只在目前頁面的記憶體中使用，重新整理頁面後需重新登入或授權。

OAuth 讀寫沿用既有「歷史紀錄」欄位與資料規則，並以 `重置日 + 角色 + 任務名稱 + 週期` 找到既有列；找不到時才新增資料列，不會清除歷史紀錄。
