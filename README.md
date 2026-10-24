# 強度自相關分析（手機網頁 App）

在手機瀏覽器讀取 Excel 檔，畫出強度隨時間變化圖、自相關圖，並以 A·exp(−t/t0)+B 擬合，顯示特徵時間 t0。

- 時間：A 欄第 2 列起（單位：秒）
- 強度：L 欄第 2 列起
- 支援 .xlsx / .xls / .csv
- 所有計算都在手機本機完成，檔案不會上傳到任何伺服器

## 部署到 GitHub Pages

1. 登入 GitHub，點右上角 **+** → **New repository**。
2. Repository name 輸入 `autocorr`，選 **Public**，按 **Create repository**。
3. 在新 repo 頁面點 **uploading an existing file**，把本資料夾內容全部拖進去：
   `index.html`、`manifest.json`、`sw.js`、`README.md`、`icons` 資料夾（內含兩個 png）。
   按 **Commit changes**。
4. 進入 **Settings** → **Pages**。
5. Source 選 **Deploy from a branch**，Branch 選 `main`、資料夾選 `/ (root)`，按 **Save**。
6. 等 1–2 分鐘，重新整理 Pages 頁面，頂端會出現網址：
   `https://<你的帳號>.github.io/autocorr/`

## 在手機使用

1. 用手機瀏覽器開啟上面的網址。
2. 點「選擇 Excel 檔案」，從手機檔案或雲端硬碟選檔。
3. 圖形與 t0 會直接顯示。

### 加到主畫面（像 App 一樣開啟）

- **iPhone（Safari）**：分享按鈕 → 加入主畫面
- **Android（Chrome）**：右上角選單 → 安裝應用程式 / 加到主畫面

第一次連線載入後，網頁會被快取，之後沒有網路也能開啟並分析檔案。

## 更新程式

在 GitHub repo 內點 `index.html` → 鉛筆圖示 → 修改 → Commit。
若手機沒有看到新版，請把 `sw.js` 第一行的 `autocorr-v1` 改成 `autocorr-v2`（版本號加 1）。

## 注意事項

- 網頁依賴 SheetJS（從 cdnjs 載入）。第一次開啟需要網路。
- GitHub 免費帳號的 Pages 需要 Public repo。因為只有程式碼，沒有你的資料，公開沒有隱私問題。
- 若要完全離線、不依賴 cdnjs，可從 SheetJS 下載 `xlsx.full.min.js` 放進 repo，並把 `index.html` 中的 script 網址改成 `xlsx.full.min.js`。
