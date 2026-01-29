# 藍色漸層色全站套用 - 已完成 ✅

## 漸層色規格

| 位置 | 顏色 | HSL 值 |
|------|------|--------|
| 左側（起點） | 深藍色 | `217 100% 37%`（primary） |
| 右側（終點） | 帶紫淺藍色 | `240 56% 63%`（#6a6ad6） |

## 已完成修改

### 1. CSS 變數更新 (`src/index.css`)
- ✅ 更新 `--primary-end` 為 `240 56% 63%`（#6a6ad6）
- ✅ 新增 `.border-l-gradient` utility class（上到下漸層直線）

### 2. Button 元件 (`src/components/ui/button.tsx`)
- ✅ `hero` variant：漸層背景 + 色塊滑入動畫（hover）
- ✅ `heroOutline` variant：hover 時漸層色塊滑入

### 3. Navigation (`src/components/Navigation.tsx`)
- ✅ Jack Chen logo hover 改為漸層色

### 4. Back to Top 按鈕 (`src/components/ScrollToTopButton.tsx`)
- ✅ 中央按鈕改為上到下漸層（`bg-gradient-to-b`）

### 5. Hero Carousel 指示器 (`src/components/HeroInteractive.tsx`)
- ✅ Active 狀態改為左到右漸層

### 6. 內頁藍色左側線
- ✅ `ESGBoardGameContent.tsx`：8 處
- ✅ `DroneUXContent.tsx`：8 處
- ✅ `AMRRobotContent.tsx`：6 處
- ✅ `ProjectDetailV2.tsx`：6 處
- ✅ `KeyDecisions.tsx`：1 處
- ✅ `ProjectQuickNav.tsx`：1 處

### 7. 涵蓋頁面
- ✅ 首頁 `/`
- ✅ About `/about`
- ✅ Resume `/resume`
- ✅ 所有專案內頁 `/project/*`
- ✅ 404 頁面（通過 Navigation 元件）

## Hover 效果保留原則
所有元件的 hover 動態效果（色塊滑入、scale、透明度變化）維持不變，只把純色改為漸層色。
