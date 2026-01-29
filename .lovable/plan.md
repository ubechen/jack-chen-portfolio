

## 藍色按鈕與色塊漸層設計

### 一、漸層色規格

| 位置 | 顏色 | HSL 值 |
|------|------|--------|
| 左側（起點） | 深藍色 | `217 100% 37%`（現有 primary） |
| 右側（終點） | 帶紫深藍色 | `240 80% 45%`（偏紫調） |

漸層方向：**從左到右**（`to right` / `90deg`）

---

### 二、實作範圍（首頁試作）

#### A) CSS 變數定義（`src/index.css`）

新增漸層相關變數：

```css
:root {
  /* 現有 primary 維持不變 */
  --primary: 217 100% 37%;
  
  /* 新增：漸層終點色（帶紫深藍） */
  --primary-end: 240 80% 45%;
  
  /* 新增：完整漸層 */
  --primary-gradient: linear-gradient(
    to right,
    hsl(var(--primary)),
    hsl(var(--primary-end))
  );
}
```

#### B) Button 元件（`src/components/ui/button.tsx`）

修改 `hero` variant，將純色改為漸層：

```tsx
// 修改前
hero: "relative overflow-hidden bg-primary text-primary-foreground ..."

// 修改後
hero: "relative overflow-hidden bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary-end))] text-primary-foreground ..."
```

Hover 效果調整：
- 保留現有的 `before:` pseudo-element 動畫
- 或改用 `brightness` / `saturate` filter 增強互動感

#### C) 首頁其他藍色元素（可選）

| 元件 | 位置 | 現有樣式 | 漸層調整 |
|------|------|----------|----------|
| Carousel 指示器 | `HeroInteractive.tsx` 第 266 行 | `bg-primary` | `bg-gradient-to-r ...` |
| Scroll to top 按鈕 | `ScrollToTopButton.tsx` 第 92 行 | `bg-primary` | `bg-gradient-to-r ...` |

---

### 三、視覺預覽

```text
┌─────────────────────────────┐
│  View Projects              │
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  │
│  深藍 ────────────→ 帶紫藍  │
│  #0048ba          #4D4DCC   │
└─────────────────────────────┘
```

---

### 四、技術細節

#### 修改檔案清單

| 檔案 | 行數 | 變更內容 |
|------|------|----------|
| `src/index.css` | 第 20-24 行 | 新增 `--primary-end` 與 `--primary-gradient` 變數 |
| `src/components/ui/button.tsx` | 第 19 行 | 修改 `hero` variant 為漸層背景 |

#### Hover 狀態處理

漸層按鈕的 hover 效果有兩種選擇：

1. **亮度變化**：hover 時加 `brightness-110` 或 `saturate-125`
2. **滑入覆蓋**：維持現有 `before:` 動畫，但改用漸層 hover 色

建議先用方案 1（亮度），視覺效果較平滑。

---

### 五、確認後全站套用範圍

若首頁試作確認 OK，後續套用到：

| 位置 | 元件/樣式 |
|------|-----------|
| `default` button variant | 全站預設按鈕 |
| `heroOutline` hover 狀態 | Outline 按鈕 hover 時填滿漸層 |
| `bg-primary` 色塊 | 專案頁 highlight 區塊 |
| `border-l-primary` | 左側強調線（可選擇是否改漸層） |

---

### 六、實作順序

1. 在 `src/index.css` 新增 `--primary-end` 變數
2. 修改 `button.tsx` 的 `hero` variant 為漸層
3. 調整 hover 效果（亮度或 filter）
4. 在首頁測試視覺效果
5. 確認後再擴展到其他元件

