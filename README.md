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
