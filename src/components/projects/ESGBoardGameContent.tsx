import { Card, CardContent } from "@/components/ui/card";
import ScrollReveal from "@/components/ScrollReveal";
import ProcessAccordion from "@/components/projects/ProcessAccordion";
import ZoomableImage from "@/components/ZoomableImage";
import imgEsg2_1 from "@/assets/img_esg_2-1.webp";
import imgEsg3_1 from "@/assets/img_esg_3-1.webp";
import imgEsg5_1 from "@/assets/img_esg_5-1.webp";

const ESGBoardGameContent = () => {
  return (
    <>
      {/* Section 1: Overview */}
      <ScrollReveal delay={100}>
        <section id="overview" className="py-16 md:py-24 px-4 md:px-6">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold mb-12 text-foreground">
              1. Overview
              <span className="block text-xl font-normal text-muted-foreground mt-2">從 ESG 報告到拿得起來玩的桌遊</span>
            </h2>
            
            <div className="space-y-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                公司永續經營辦公室希望打造一款 ESG 桌遊，透過實際遊玩的過程，讓同仁、應徵者、客戶，可以在輕鬆互動中理解公司做了哪些永續行動。
              </p>

              <div className="bg-secondary/50 rounded-xl p-8 my-8">
                <h3 className="text-xl font-semibold mb-4 text-foreground">應用場景</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-background border border-border rounded-lg p-4">
                    <p className="text-muted-foreground">人才招募說明會、校園活動</p>
                  </div>
                  <div className="bg-background border border-border rounded-lg p-4">
                    <p className="text-muted-foreground">內部教育訓練、新人訓練</p>
                  </div>
                  <div className="bg-background border border-border rounded-lg p-4">
                    <p className="text-muted-foreground">對外說明公司 ESG 實績與媒體曝光</p>
                  </div>
                  <div className="bg-background border border-border rounded-lg p-4">
                    <p className="text-muted-foreground">作為重要客戶與合作夥伴的贈禮</p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 border-l-4 border-l-primary rounded-r-lg p-6 my-8">
                <h3 className="text-lg font-semibold mb-3 text-foreground">前期進度</h3>
                <p className="text-muted-foreground leading-relaxed">
                  ESG 辦公室已與<mark className="bg-primary/20 text-foreground px-1 rounded">臺科大迷你教育遊戲研究團隊</mark>合作，完成初版遊戲規則與機制、基本的遊戲流程雛形。
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6 text-foreground">仍需完成的工作</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-background border border-border rounded-lg p-5">
                    <p className="text-muted-foreground">一套可以量產的<mark className="bg-primary/20 text-foreground px-1 rounded">完整視覺系統</mark>與內容設計（卡牌、底板、token、說明書、外盒…）</p>
                  </div>
                  <div className="bg-background border border-border rounded-lg p-5">
                    <p className="text-muted-foreground">在正式印製前，對規則與引導做最後的<mark className="bg-primary/20 text-foreground px-1 rounded"> UX 微調</mark></p>
                  </div>
                  <div className="bg-background border border-border rounded-lg p-5">
                    <p className="text-muted-foreground">一個能橫向對接 ESG、HR、臺科大與印刷廠的<mark className="bg-primary/20 text-foreground px-1 rounded">設計負責窗口</mark></p>
                  </div>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                原先 ESG 辦公室曾尋找外包設計師，但遇到溝通與效率問題，最後在 HR 轉介下改由我們 UX 團隊接手，由我擔任主要負責人，帶領 4 位設計師共同完成。
              </p>

              <div className="bg-primary/10 rounded-xl p-8 mt-8">
                <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">專案成果</p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  一開始，這個案子對高層來說只是「一個有趣的 ESG side project」，但隨著桌遊完成、實際被拿去教育訓練與對外展示，它逐漸變成：
                </p>
                <ul className="space-y-2 text-foreground">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>ESG / HR 的重要 KPI 成果之一</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>總經理字輩與高層親自體驗、留下印象的作品，並延伸作為供應商贈禮</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>UX 團隊在<mark className="bg-primary/20 text-foreground px-1 rounded">實體體驗 × AI 圖像 × 跨部門協作</mark>上的指標性案例</span>
                  </li>
                </ul>
              </div>

              {/* Videos Section */}
              <div className="mt-12">
                <h3 className="text-2xl font-semibold mb-6 text-foreground">🎥 See the game in action</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="aspect-video rounded-lg overflow-hidden bg-muted">
                      <iframe
                        src="https://www.youtube.com/embed/LrH-OEzySV8"
                        title="桌遊開發與比賽紀錄"
                        allow="encrypted-media"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground text-center mt-2">桌遊開發與比賽紀錄</p>
                  </div>
                  <div>
                    <div className="aspect-video rounded-lg overflow-hidden bg-muted">
                      <iframe
                        src="https://www.youtube.com/embed/Tn5rFg947go"
                        title="桌遊玩法教學"
                        allow="encrypted-media"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground text-center mt-2">桌遊玩法教學</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Section 2: My Role */}
      <ScrollReveal delay={100}>
        <section id="my-role" className="py-16 md:py-24 px-4 md:px-6 bg-muted/60 shadow-sm">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold mb-12 text-foreground">
              2. My Role
              <span className="block text-xl font-normal text-muted-foreground mt-2">把 ESG 內容、遊戲體驗與合作單位串成同一套作品</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              在這個專案裡，我的角色不只是「把東西設計漂亮」，而是同時扮演：
            </p>

            <div className="space-y-6">
              {/* Role 1 */}
              <Card className="border-l-4 border-l-primary overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl font-bold text-primary/30">01</span>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-4 text-foreground">專案負責與協調窗口（Project Lead）</h3>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex gap-3">
                          <span className="text-primary">•</span>
                          <span>帶領 4 位設計成員，分工負責卡牌、底板、說明書、外盒等不同物件</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="text-primary">•</span>
                          <span>對接 ESG 辦公室、HR、臺科大團隊與印刷廠，釐清責任分工與交付內容</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="text-primary">•</span>
                          <span>確保大家對時程、版本與「這一輪要定下什麼」有清楚共識</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Role 2 */}
              <Card className="border-l-4 border-l-primary overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl font-bold text-primary/30">02</span>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-4 text-foreground">桌遊體驗的 UX 調整者</h3>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex gap-3">
                          <span className="text-primary">•</span>
                          <span>親自試玩初版桌遊，並在 UX 團隊內部舉辦試玩，從玩家角度檢視規則與節奏</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="text-primary">•</span>
                          <span>整理出「哪裡說明不清楚」「哪裡步驟太多」「哪裡資訊量太重」</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="text-primary">•</span>
                          <span>提出具體玩法與介面（板面、icon、色彩）調整建議給 ESG / 臺科大團隊</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Role 3 */}
              <Card className="border-l-4 border-l-primary overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl font-bold text-primary/30">03</span>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-4 text-foreground">視覺系統與 AI 圖像工作流的主導者</h3>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex gap-3">
                          <span className="text-primary">•</span>
                          <span>建立 100+ 張卡牌與所有實體物件的視覺規則與版型系統</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="text-primary">•</span>
                          <span>規劃生成式 AI 圖像的使用方式（Midjourney、Photoshop Firefly），設計 prompt 結構，確保多人分工下風格仍然一致</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="text-primary">•</span>
                          <span>負責印前檔案檢查、打樣校色與完稿確認，確保成品品質</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Image with zoom support */}
            <div className="-mx-4 md:mx-0 mt-10">
              <ZoomableImage 
                src={imgEsg2_1} 
                alt="AI 圖像工作流：拆解元素、設計 Prompt 結構、團隊分工產製、風格一致與專注" 
                className="w-full md:rounded-lg"
                figcaption="AI 圖像不是為了省事，而是讓團隊能把心力放在更重要的體驗與內容決策上"
              />
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Section 3: What we did */}
      <ScrollReveal delay={100}>
        <ProcessAccordion
          sectionId="what-we-did"
          sectionTitle={
            <h2 className="text-4xl font-bold mb-12 text-foreground">
              3. What we did
              <span className="block text-xl font-normal text-muted-foreground mt-2">從規則原型到可量產的桌遊成品</span>
            </h2>
          }
          introContent={
            <p className="text-lg text-muted-foreground leading-relaxed">
              透過試玩體驗、視覺系統設計、AI 圖像工作流與印前落地，我們打造了一套完整的 ESG 桌遊體驗。
            </p>
          }
          subSections={[
            {
              id: "3.1",
              title: (
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-bold text-primary/30">3.1</span>
                  <h3 className="text-xl font-semibold text-foreground">先玩懂題目：理解規則與體驗痛點</h3>
                </div>
              ),
              content: (
                <div className="space-y-6">
                  <ul className="space-y-4 text-lg text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">→</span>
                      <span>與 ESG、HR、臺科大團隊一起試玩初版桌遊，在 UX 團隊內部再辦一輪試玩</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">→</span>
                      <span>梳理出「說明看不懂、節奏太慢、資訊太重」等具體問題</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">→</span>
                      <span>整理成一份玩法體驗改善建議，而不是只在既有規則上套視覺設計</span>
                    </li>
                  </ul>

                  <ZoomableImage
                    src={imgEsg3_1}
                    alt="團隊成員與公司同仁試玩 Wi-Thrive 桌遊過程記錄"
                    className="w-full md:rounded-lg -mx-4 md:mx-0"
                    figcaption="團隊成員與公司同仁試玩記錄"
                  />
                </div>
              )
            },
            {
              id: "3.2",
              title: (
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-bold text-primary/30">3.2</span>
                  <h3 className="text-xl font-semibold text-foreground">設計 100+ 張卡牌與全套實體物件</h3>
                </div>
              ),
              content: (
                <div className="space-y-6">
                  <ul className="space-y-4 text-lg text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">→</span>
                      <span>規劃約 125 張卡牌的版型系統（顏色、層級、資訊優先順序）</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">→</span>
                      <span>延伸到底板、計分板、token、說明書與外盒</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">→</span>
                      <span>依卡牌類型定義閱讀路徑，讓玩家先知道「這是哪一類事件」，再理解 ESG 面向與細節說明</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">→</span>
                      <span>中英雙語版本皆適用</span>
                    </li>
                  </ul>


                  <figure className="-mx-4 md:mx-0">
                    <div className="aspect-[16/10] bg-muted md:rounded-lg flex items-center justify-center">
                      <p className="text-muted-foreground text-center px-4">全套實體物件設計</p>
                    </div>
                    <figcaption className="text-sm text-muted-foreground text-center mt-2 px-4">
                      底板、計分板、token、說明書與外盒
                    </figcaption>
                  </figure>
                </div>
              )
            },
            {
              id: "3.3",
              title: (
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-bold text-primary/30">3.3</span>
                  <h3 className="text-xl font-semibold text-foreground">建立 AI 圖像工作流，而不是零散使用</h3>
                </div>
              ),
              content: (
                <div className="space-y-6">
                  <ul className="space-y-4 text-lg text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">→</span>
                      <span>先閱讀 ESG 背景與公司案例，把每張卡牌拆解成可視覺化的關鍵元素</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">→</span>
                      <span>再設計穩定的 Midjourney / Photoshop Firefly prompt 結構</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">→</span>
                      <span>帶領團隊依照這套規則分工產製圖像</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">→</span>
                      <span>在有限時間內完成大量風格一致的卡牌插圖，讓設計心力可以集中在體驗與內容判斷</span>
                    </li>
                  </ul>

                  <div className="bg-primary/5 border-l-4 border-l-primary rounded-r-lg p-6">
                    <p className="text-lg text-foreground font-medium">
                      AI 圖像不是為了省事，而是讓團隊能把心力放在更重要的體驗與內容決策上
                    </p>
                  </div>

                </div>
              )
            },
            {
              id: "3.4",
              title: (
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-bold text-primary/30">3.4</span>
                  <h3 className="text-xl font-semibold text-foreground">Prototype 試玩與印前落地</h3>
                </div>
              ),
              content: (
                <div className="space-y-6">
                  <ul className="space-y-4 text-lg text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">→</span>
                      <span>製作高品質 prototype，邀請 ESG、HR、臺科大與內部同仁試玩</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">→</span>
                      <span>依回饋調整圖像、文案與板面強調</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">→</span>
                      <span>負責與印刷廠對接規格、完稿與打樣校色</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">→</span>
                      <span>最終完成中英雙語、可正式量產與對外贈送使用的桌遊成品</span>
                    </li>
                  </ul>

                  <figure className="-mx-4 md:mx-0">
                    <div className="aspect-video bg-muted md:rounded-lg flex items-center justify-center">
                      <p className="text-muted-foreground text-center px-4">最終桌遊成品</p>
                    </div>
                    <figcaption className="text-sm text-muted-foreground text-center mt-2 px-4">
                      中英雙語版本
                    </figcaption>
                  </figure>
                </div>
              )
            }
          ]}
        />
      </ScrollReveal>

      {/* Section 4: Challenges & Impact */}
      <ScrollReveal delay={100}>
        <section id="challenges" className="py-16 md:py-24 px-4 md:px-6 bg-muted/60 shadow-sm">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold mb-12 text-foreground">
              4. Challenges & Impact
              <span className="block text-xl font-normal text-muted-foreground mt-2">在多方意見中守住體驗與品質</span>
            </h2>

            <div className="space-y-12">
              {/* Challenge 1 */}
              <div className="bg-background border border-border rounded-xl p-8">
                <h3 className="text-2xl font-semibold mb-6 text-foreground flex items-center gap-3">
                  <span className="text-primary">Challenge 1</span>
                  內容專業又龐大，還要讓各方「看得懂、看得過」
                </h3>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  ESG 本身就充滿專有名詞與複雜背景，加上卡牌數量超過百張，每一張都代表不同情境與案例。
                </p>

                <div className="bg-secondary/50 rounded-lg p-6 mb-6">
                  <p className="text-lg text-foreground mb-4">挑戰不只是：</p>
                  <ul className="space-y-2 text-muted-foreground mb-4">
                    <li className="flex gap-3">
                      <span className="text-primary">•</span>
                      <span>卡牌圖像要美觀、AI 生圖必須符合實際情境描述，也要適合公司形象</span>
                    </li>
                  </ul>
                  <p className="text-lg text-foreground mb-4">而是：</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="text-primary">•</span>
                      <span>先自己看懂、消化，再轉成玩家在短時間內就能理解的資訊層級</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary">•</span>
                      <span>同時要讓 ESG 辦公室、HR、高層、臺科大團隊都覺得「能代表公司」</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-primary/5 border-l-4 border-l-primary rounded-r-lg p-6">
                  <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">我的角色</p>
                  <ul className="space-y-2 text-foreground">
                    <li className="flex gap-3">
                      <span className="text-primary">•</span>
                      <span>把不同來源的回饋整理成可執行的修正清單，避免團隊陷入各說各話</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary">•</span>
                      <span>幫忙辨識哪些是「必須修」、哪些是「可以討論」、哪些是「改了會更混亂」</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary">•</span>
                      <span>以體驗與理解成本的角度，和利害關係人討論取捨</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Challenge 2 */}
              <div className="bg-background border border-border rounded-xl p-8">
                <h3 className="text-2xl font-semibold mb-6 text-foreground flex items-center gap-3">
                  <span className="text-primary">Challenge 2</span>
                  跨部門與外部團隊合作，需要清楚邊界與節奏
                </h3>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  這個案子牽涉：
                </p>

                <div className="grid md:grid-cols-5 gap-3 mb-6">
                  <div className="bg-secondary/50 rounded-lg p-4 text-center">
                    <p className="text-sm text-foreground font-medium">ESG 辦公室</p>
                    <p className="text-xs text-muted-foreground">內容與策略</p>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4 text-center">
                    <p className="text-sm text-foreground font-medium">HR</p>
                    <p className="text-xs text-muted-foreground">實際使用情境</p>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4 text-center">
                    <p className="text-sm text-foreground font-medium">臺科大團隊</p>
                    <p className="text-xs text-muted-foreground">遊戲機制與教育</p>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4 text-center">
                    <p className="text-sm text-foreground font-medium">UX 團隊</p>
                    <p className="text-xs text-muted-foreground">體驗與視覺</p>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4 text-center">
                    <p className="text-sm text-foreground font-medium">印刷廠</p>
                    <p className="text-xs text-muted-foreground">實體製作</p>
                  </div>
                </div>

                <div className="bg-primary/5 border-l-4 border-l-primary rounded-r-lg p-6 mb-6">
                  <p className="text-lg text-foreground font-medium">
                    如果沒有清楚的節奏，很容易每一次討論都「從頭開始」
                  </p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">在專案過程中，我刻意做到：</p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">→</span>
                      <span>每一輪會議之前先整理「目前版本狀態」與「這一輪要做什麼決定」</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">→</span>
                      <span>用簡單的圖、樣機與流程，讓非設計背景的夥伴也看得懂差異</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">→</span>
                      <span>對團隊成員說清楚：哪一些是一定要收斂的範圍，哪一些可以留給下一版優化</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Impact */}
              <div className="bg-primary/10 rounded-xl p-8">
                <h3 className="text-2xl font-semibold mb-6 text-foreground">Impact（實際效果）</h3>
                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <span className="text-2xl">✓</span>
                    <p className="text-lg text-foreground">高層總經理級主管實際玩過桌遊，對 ESG 與 UX 團隊有了具體印象</p>
                  </div>
                  <div className="flex gap-4 items-start">
                    <span className="text-2xl">✓</span>
                    <p className="text-lg text-foreground">ESG 單位後續主動邀請我們參與公司永續報告書等後續合作</p>
                  </div>
                  <div className="flex gap-4 items-start">
                    <span className="text-2xl">✓</span>
                    <p className="text-lg text-foreground">在公司內部，UX 團隊被看見的不只是「畫 UI」，而是能處理<mark className="bg-primary/20 text-foreground px-1 rounded">內容、體驗、AI 工具與跨部門協作</mark>的夥伴</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Section 5: What I learned */}
      <ScrollReveal delay={100}>
        <section id="learnings" className="py-16 md:py-24 px-4 md:px-6">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold mb-12 text-foreground">
              5. What I learned
              <span className="block text-xl font-normal text-muted-foreground mt-2">讓永續被「看懂」也被「帶走」</span>
            </h2>

            <div className="space-y-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Wi-Thrive《緯你同行》對我來說不只是一次把內容做成桌遊的設計案，而是一個很具體的證明：當 ESG 這種專業又抽象的題目，換成「能被玩、能被理解、能被分享」的體驗時，它就更容易被記住，也更容易被拿去用。
              </p>

              <div className="bg-secondary/50 rounded-xl p-8">
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  這個案子讓我學到幾件事：
                </p>
                <ul className="space-y-4 text-foreground">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>UX 的價值不只在螢幕上，而是在任何需要「降低理解成本、引導行為、形成共識」的情境</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>面對多方利害關係人時，設計師的工作不只是產出畫面，而是把回饋整理成可執行的取捨，讓團隊能在同一個節奏內往前推</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>生成式 AI 的重點不在於做出一張好看的圖，而是把它變成可複用、可分工、可控品質的工作流，才撐得起大量內容與短時程交付</span>
                  </li>
                </ul>
              </div>

              <div className="bg-primary/5 border-l-4 border-l-primary rounded-r-lg p-6">
                <p className="text-lg text-foreground leading-relaxed">
                  而最讓我印象深刻的是：這款桌遊後來不只用在招募與內訓，也被帶到供應鏈協力夥伴大會，由公司總經理暨執行長在台上向供應鏈廠商介紹，並作為伴手禮之一。這代表它不只是「做得漂亮」，而是成為公司對外溝通永續作為的一種語言與載體。
                </p>
              </div>

              <ZoomableImage
                src={imgEsg5_1}
                alt="2024 緯創供應鏈協力夥伴大會現場，總經理暨執行長林建勳於台上介紹 Wistron ESG Board Game《Wi-Thrive》，並作為供應商伴手禮之一"
                className="w-full md:rounded-lg -mx-4 md:mx-0"
                figcaption="從內訓到供應鏈溝通，Wi-Thrive 成為公司對外說永續的一種體驗語言，也讓設計成果帶著走延續價值"
              />
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
};

export default ESGBoardGameContent;
