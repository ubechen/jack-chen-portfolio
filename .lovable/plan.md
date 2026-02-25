

## 在 Let's Work Together 區域新增 GitHub 按鈕

### 變更內容

在 `src/components/Contact.tsx` 的 Medium 按鈕後方新增一個 GitHub 按鈕，連結至 `https://github.com/ubechen`。

### 技術細節

- **檔案**：`src/components/Contact.tsx`
- **Icon**：lucide-react 已內建 `Github` icon，直接 import 使用
- **按鈕結構**：完全比照 Medium 按鈕格式（`<a>` 包 `<Button variant="contactLink">`）
- **新增位置**：第 44 行（Medium 按鈕 `</a>` 之後）

新增的程式碼：

```tsx
<a href="https://github.com/ubechen" target="_blank" rel="noopener noreferrer">
  <Button size="lg" variant="contactLink" className="text-lg w-full">
    <span className="relative z-10 flex items-center">
      <Github className="mr-2 h-5 w-5" />
      GitHub
    </span>
  </Button>
</a>
```

Import 行加入 `Github`：
```tsx
import { Mail, Linkedin, Github } from "lucide-react";
```

### 修改檔案

| 檔案 | 變更 |
|------|------|
| `src/components/Contact.tsx` | import 加入 Github；Medium 按鈕後新增 GitHub 按鈕 |

