
## 將 Index V2 設為正式版 + 微調文案

### 變更概述

此任務有兩部分：
1. **檔案重命名與路由重構**：將 IndexV2 提升為正式版首頁、V1 存檔
2. **文案微調**：在「決策前段的角色」卡片中更新措辭

---

### 變更詳情

#### 1. 檔案重命名與路由更新

**變更清單：**
- 重命名 `src/pages/Index.tsx` → `src/pages/IndexV1.tsx`
- 重命名 `src/pages/IndexV2.tsx` → `src/pages/Index.tsx`

**路由配置更新（`src/routes.tsx` 第 6-7 行）**

現行：
```tsx
const Index = lazy(() => import("./pages/Index"));
const IndexV2 = lazy(() => import("./pages/IndexV2"));
```

修改後：
```tsx
const Index = lazy(() => import("./pages/Index"));      // 新正式版（原 IndexV2）
const IndexV1 = lazy(() => import("./pages/IndexV1")); // 舊版備份
```

**路由配置更新（`src/routes.tsx` 第 44-46 行）**

現行：
```tsx
{
  path: "index-v2",
  element: withSuspense(IndexV2),
},
```

修改後：
```tsx
{
  path: "index-v1",
  element: withSuspense(IndexV1),
},
```

**Navigation 簡化（`src/components/Navigation.tsx` 第 12 行）**

現行：
```tsx
const isHomePage = location.pathname === "/" || location.pathname === "/index-v2";
```

修改後：
```tsx
const isHomePage = location.pathname === "/";
```

#### 2. 文案微調

**在新 `src/pages/Index.tsx`（原 IndexV2）中調整 valueCards（約第 106-112 行）**

現行：
```tsx
{
  title: "決策前段的角色",
  items: [
    "對 PM：提案故事骨架、功能優先序",
    "對工程/硬體：情境轉流程、考慮技術範圍",
    "對決策者：複雜問題翻譯成可理解的選項",
  ],
},
```

修改後：
```tsx
{
  title: "決策前段的角色",
  items: [
    "對 PM：提案故事骨架、功能優先順序",
    "對工程師：情境轉流程、考慮技術範圍",
    "對決策者：複雜問題翻譯成可理解的選項",
  ],
},
```

調整項目：
- 「優先序」→「優先順序」
- 「對工程/硬體」→「對工程師」

---

### 修改檔案清單

| 檔案 | 動作 | 內容 |
|------|------|------|
| `src/pages/Index.tsx` | 重命名自 IndexV2.tsx | - |
| `src/pages/IndexV1.tsx` | 重命名自 Index.tsx | - |
| `src/routes.tsx` | 修改 | 更新 import 和路由配置 |
| `src/components/Navigation.tsx` | 修改 | 簡化 `isHomePage` 邏輯 |

---

### 測試重點

1. **URL 驗證**
   - `/` 顯示新正式版首頁（原 IndexV2 內容） ✓
   - `/index-v1` 顯示舊版首頁（原 Index 內容） ✓

2. **導航與文案**
   - 左上角顯示「Jack Chen」（非 Home icon） ✓
   - 「決策前段的角色」卡片展示正確文案 ✓

3. **構建驗證**
   - `npm run build` 無編譯錯誤 ✓

