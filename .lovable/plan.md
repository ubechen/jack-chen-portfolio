

## 首頁 Hero 卡片自動輪播設計

### 一、功能需求

- 首頁 Hero carousel 自動輪播
- 每隔 **5 秒** 自動切換到下一張
- **永不停止**（無限循環）

---

### 二、技術實作

#### 使用 Embla Carousel 官方 Autoplay 插件

Embla Carousel 有官方的 `embla-carousel-autoplay` 插件，支援自動輪播功能。

#### 修改內容（src/components/HeroInteractive.tsx）

```tsx
// 1. 新增 import
import Autoplay from 'embla-carousel-autoplay';

// 2. 建立 autoplay 插件實例
const autoplayPlugin = useRef(
  Autoplay({ 
    delay: 5000,           // 5 秒間隔
    stopOnInteraction: false,  // 用戶操作後不停止
    stopOnMouseEnter: false    // 滑鼠移入不停止
  })
);

// 3. 修改 useEmblaCarousel，加入 plugins
const [emblaRef, emblaApi] = useEmblaCarousel(
  { loop: true },
  [autoplayPlugin.current]
);
```

---

### 三、安裝依賴

需要安裝 Embla Carousel 的 autoplay 插件：

```bash
npm install embla-carousel-autoplay
```

---

### 四、修改檔案清單

| 檔案 | 修改內容 |
|------|----------|
| `src/components/HeroInteractive.tsx` | 引入 Autoplay 插件、設定 5 秒間隔、永不停止 |
| `package.json` | 新增 `embla-carousel-autoplay` 依賴 |

---

### 五、行為說明

| 項目 | 行為 |
|------|------|
| 自動播放間隔 | 5000ms（5 秒） |
| 用戶手動切換後 | 繼續自動播放（不中斷） |
| 滑鼠移入時 | 繼續自動播放（不暫停） |
| 循環模式 | 無限循環（`loop: true` 已設定） |

