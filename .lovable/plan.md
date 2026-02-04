

## 修正「我怎麼在「決策前段」工作」區塊對齊

### 問題診斷

| 區塊 | 容器寬度 | 實際寬度 |
|------|----------|----------|
| Section 2: 我主要做過的產品類型 | `max-w-4xl` | 896px |
| Section 3: 我怎麼在「決策前段」工作 | `max-w-5xl` | 1024px |
| Section 4: 我的工作風格 | `max-w-4xl` | 896px |

Section 3 比其他區塊寬 128px，導致視覺上左右邊界不對齊。

---

### 修正方案

將 Section 3 的容器從 `max-w-5xl` 改為 `max-w-4xl`，與其他區塊一致。

---

### 程式碼變更

修改 `src/pages/About.tsx` 第 204 行：

```tsx
// 變更前
<div className="max-w-5xl mx-auto">

// 變更後
<div className="max-w-4xl mx-auto">
```

---

### 修改檔案清單

| 檔案 | 動作 | 變更內容 |
|------|------|----------|
| `src/pages/About.tsx` | 修改 | 第 204 行 `max-w-5xl` → `max-w-4xl` |

