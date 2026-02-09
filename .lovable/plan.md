

## Resume 頁面文案更新

### 變更概述

1. **移除 Hero 區段描述段落**（第 221-223 行）
2. **更新 Profile 區塊內容**（第 287-289 行）

---

### 變更詳情

#### 1. 移除 Hero 區段第一段文字

刪除第 221-223 行的 `<p>` 段落：
```tsx
// 移除這段
<p className="text-lg text-muted-foreground leading-relaxed mb-8">
  擁有 10 年以上產品與使用者體驗設計經驗，橫跨 B2B／B2B2C、複雜系統與軟硬體整合...
</p>
```

#### 2. 更新 Profile｜個人簡介內容

將第 287-289 行的 `<p>` 內容替換為：

```tsx
<p className="text-lg text-muted-foreground leading-relaxed">
  8+ 年 Product/UX 設計師，經驗涵蓋 B2B/B2B2C 產品。於緯創擔任創新筆電、服務型機器人、無人機、ESG 等專案核心設計角色。擅長在高不確定性中用研究釐清方向、推動跨部門共識，將複雜需求轉化為可落地體驗。不只產出設計，更協助團隊做出有依據的決策、達成商業目標
</p>
```

---

### 修改檔案

| 檔案 | 動作 | 內容 |
|------|------|------|
| `src/pages/Resume.tsx` | 修改 | (1) 移除 Hero 描述段落 (2) 更新 Profile 內文 |

---

### 測試重點

1. 前往 `/resume` 確認 Hero 區段不再顯示舊描述段落
2. Profile 區塊顯示新版文案
3. 頁面排版與間距正常

