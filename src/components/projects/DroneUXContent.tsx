import { Card, CardContent } from "@/components/ui/card";
import ScrollReveal from "@/components/ScrollReveal";
import ProcessAccordion from "@/components/projects/ProcessAccordion";
import ZoomableImage from "@/components/ZoomableImage";
import imgDrone11 from "@/assets/img_drone_1-1.webp";
import imgDrone12 from "@/assets/img_drone_1-2.webp";
import imgDrone21 from "@/assets/img_drone_2-1.webp";
import imgDrone311 from "@/assets/img_drone_3-1-1.webp";
import imgDrone312 from "@/assets/img_drone_3-1-2.webp";
import imgDrone321 from "@/assets/img_drone_3-2-1.webp";
import imgDrone322 from "@/assets/img_drone_3-2-2.webp";
import imgDrone331 from "@/assets/img_drone_3-3-1.webp";
import imgDrone332 from "@/assets/img_drone_3-3-2.webp";
import imgDrone34 from "@/assets/img_drone_3-4.webp";
import imgDrone41 from "@/assets/img_drone_4-1.webp";
import imgDrone51 from "@/assets/img_drone_5-1.webp";

const DroneUXContent = () => {
  return (
    <>
      {/* Section 1: Overview */}
      <ScrollReveal delay={100}>
        <section id="overview" className="py-16 md:py-24 px-4 md:px-6">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold mb-12 text-foreground">
              1. Overview
              <span className="block text-xl font-normal text-muted-foreground mt-2">從 AMR 終止到無人機新戰場</span>
            </h2>
            
            <div className="space-y-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                AMR Robot 專案終止後，公司希望把既有的機器人經驗，轉化為更有市場發展性的無人機產品線。我們與擁有多年軍／民用經驗的無人機廠商合作：
              </p>

              <div className="bg-secondary/50 rounded-xl p-8 my-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-foreground">合作夥伴負責</h4>
                    <p className="text-muted-foreground">飛行器本體與飛控技術</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-foreground">我們聚焦</h4>
                    <p className="text-muted-foreground font-semibold text-primary">「地面控制站的使用體驗」</p>
                  </div>
                </div>
              </div>

              <ZoomableImage
                src={imgDrone11}
                alt="從 AMR 到無人機的策略轉向"
                figcaption="從 AMR 到無人機的策略轉向"
              />

              {/* 聲明提示區塊 */}
              <div className="bg-muted/50 border border-border rounded-lg px-4 py-3 text-center">
                <p className="text-sm text-muted-foreground">
                  本專案配圖皆為重新製作的示意圖與 AI 合成畫面
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6 text-foreground">地面控制站聚焦項目</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-background border border-border rounded-lg p-5">
                    <p className="text-muted-foreground">手持控制器的<mark className="bg-primary/20 text-foreground px-1 rounded">人因與操作佈局</mark></p>
                  </div>
                  <div className="bg-background border border-border rounded-lg p-5">
                    <p className="text-muted-foreground">實體按鍵與<mark className="bg-primary/20 text-foreground px-1 rounded">螢幕資訊的對應關係</mark></p>
                  </div>
                  <div className="bg-background border border-border rounded-lg p-5">
                    <p className="text-muted-foreground">按鈕 icon、<mark className="bg-primary/20 text-foreground px-1 rounded">狀態與告警設計</mark></p>
                  </div>
                  <div className="bg-background border border-border rounded-lg p-5">
                    <p className="text-muted-foreground">全新控制站 App 的<mark className="bg-primary/20 text-foreground px-1 rounded">IA 與操作流程</mark></p>
                  </div>
                </div>
              </div>

              <ZoomableImage
                src={imgDrone12}
                alt="手持控制器與 App 整合架構"
                figcaption="手持控制器與 App 整合架構"
              />

              <div className="bg-primary/5 border-l-4 border-l-primary rounded-r-lg p-6 my-8">
                <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">短期目標</p>
                <p className="text-xl text-foreground font-medium">
                  做出一套 POC：能在國際無人機展上 demo，並具備投標國防部標案的基礎
                </p>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                因涉及軍事用途，客戶資訊高度保密，我們只能在有限資訊下，同時考量軍用與民用情境，從國際競品出發，找到 UX 的切入點，幫公司在全新領域站穩第一步
              </p>

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
              <span className="block text-xl font-normal text-muted-foreground mt-2">在陌生領域中，拉出一條 UX 價值路徑</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              在這個專案中，我主要負責：
            </p>

            <div className="space-y-6">
              {/* Role 1 */}
              <Card className="border-l-4 border-l-primary overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl font-bold text-primary/30">01</span>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-4 text-foreground">領域研究與競品分析</h3>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex gap-3">
                          <span className="text-primary">•</span>
                          <span>從零開始建立無人機與控制站知識：用途類型、控制站型態、UI 佈局、常見資訊元素</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="text-primary">•</span>
                          <span>整理成控制站典型布局與互動模式，提出設計機會點與優先改進方向</span>
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
                      <h3 className="text-2xl font-semibold mb-4 text-foreground">控制站 UX / UI 設計</h3>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex gap-3">
                          <span className="text-primary">•</span>
                          <span>與 ID 合作，協調控制器外型、人因操作與螢幕 UI 的對應</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="text-primary">•</span>
                          <span>規劃按鍵配置、icon 系統、狀態與告警行為</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="text-primary">•</span>
                          <span>設計控制站 App 的 IA、操作流程與 GUI 畫面</span>
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
                      <h3 className="text-2xl font-semibold mb-4 text-foreground">跨部門／跨公司協作與決策支持</h3>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex gap-3">
                          <span className="text-primary">•</span>
                          <span>與 PM、AM、ME、ID、軟體工程師及合作公司一起討論方案</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="text-primary">•</span>
                          <span>以任務情境與流程圖，將技術語言轉成決策者看得懂的畫面</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="text-primary">•</span>
                          <span>製作給高層與客戶的提案簡報，說清楚「這套控制站能解決什麼問題」</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Role 4 */}
              <Card className="border-l-4 border-l-primary overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl font-bold text-primary/30">04</span>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-4 text-foreground">實機 Prototype 測試與 issue 整理</h3>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex gap-3">
                          <span className="text-primary">•</span>
                          <span>實際操作樣機與 App，模擬完整任務流程</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="text-primary">•</span>
                          <span>整理操作問題、易用性疑慮與 bug，彙整為改善清單與優先順序</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Role 5 */}
              <Card className="border-l-4 border-l-primary overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl font-bold text-primary/30">05</span>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-4 text-foreground">展場意象影片（加值貢獻）</h3>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex gap-3">
                          <span className="text-primary">•</span>
                          <span>製作國際無人機展覽的展場牆面影片</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="text-primary">•</span>
                          <span>使用 Midjourney、Kling AI 等工具，快速產出高質感視覺與動畫構想</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="text-primary">•</span>
                          <span>最終影片在展場上獲得高層與合作夥伴肯定</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <ZoomableImage
              src={imgDrone21}
              alt="無人機 GCS 地面控制站專案角色"
              figcaption="跨部門與跨公司協作網絡"
              className="mt-10"
            />
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
                  <span className="block text-xl font-normal text-muted-foreground mt-2">從「看懂市場」到「做出能 demo 的控制站」</span>
                </h2>
              }
              introContent={
                <p className="text-lg text-muted-foreground leading-relaxed">
                  透過競品分析、人因設計、任務導向 App 架構與實機測試，我們交付了一套可在國際展會 demo 的控制站 POC。
                </p>
              }
              subSections={[
                {
                  id: "3.1",
                  title: (
                    <div className="flex items-center gap-4">
                      <span className="text-4xl font-bold text-primary/30">3.1</span>
                      <h3 className="text-xl font-semibold text-foreground">快速建立共同語言：國際競品與任務情境</h3>
                    </div>
                  ),
                  content: (
                    <div className="space-y-6">
                      <ul className="space-y-4 text-lg text-muted-foreground">
                        <li className="flex gap-3">
                          <span className="text-primary font-bold">→</span>
                          <span>盤點軍用偵察、商用巡檢、搜救、農業等不同情境下的控制站形式</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="text-primary font-bold">→</span>
                          <span>分析 UI 佈局：地圖、航線、姿態、影像、系統狀態、警示如何同時呈現</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="text-primary font-bold">→</span>
                          <span>輸出一份控制站布局與互動模式總結，並提出關鍵問題</span>
                        </li>
                      </ul>

                      <ZoomableImage
                        src={imgDrone311}
                        alt="國際競品與任務情境分析"
                        figcaption="軍用/商用控制站 UI 比較"
                      />

                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-background border border-border rounded-lg p-5">
                          <p className="text-muted-foreground">新手如何<mark className="bg-primary/20 text-foreground px-1 rounded">快速上手</mark>？</p>
                        </div>
                        <div className="bg-background border border-border rounded-lg p-5">
                          <p className="text-muted-foreground">緊急狀況下，哪些資訊必須<mark className="bg-primary/20 text-foreground px-1 rounded">第一時間被看見</mark>？</p>
                        </div>
                        <div className="bg-background border border-border rounded-lg p-5">
                          <p className="text-muted-foreground">實體鍵與觸控操作如何<mark className="bg-primary/20 text-foreground px-1 rounded">分工才不混亂</mark>？</p>
                        </div>
                      </div>

                      <ZoomableImage
                        src={imgDrone312}
                        alt="任務情境與關鍵問題分析對照表"
                        figcaption="偵察、巡檢、搜救、農業情境"
                      />
                    </div>
                  )
                },
                {
                  id: "3.2",
                  title: (
                    <div className="flex items-center gap-4">
                      <span className="text-4xl font-bold text-primary/30">3.2</span>
                      <h3 className="text-xl font-semibold text-foreground">控制器＋螢幕協同設計：從人因出發</h3>
                    </div>
                  ),
                  content: (
                    <div className="space-y-6">
                      <ul className="space-y-4 text-lg text-muted-foreground">
                        <li className="flex gap-3">
                          <span className="text-primary font-bold">→</span>
                          <span>隨著控制器 ID 定稿，調整按鍵位置、數量與視線路徑，減少<mark className="bg-primary/20 text-foreground px-1 rounded">「抬頭低頭來回找」</mark>的負擔</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="text-primary font-bold">→</span>
                          <span>將高頻、時間敏感的操作放在實體鍵，設定型功能留在觸控介面</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="text-primary font-bold">→</span>
                          <span>設計清楚的 icon 與行為規則，讓操作者在按下去之前，就知道會發生什麼事</span>
                        </li>
                      </ul>

                      <ZoomableImage
                        src={imgDrone322}
                        alt="控制器人因與視線優化設計"
                        figcaption="減少抬頭低頭的操作設計"
                      />

                      <ZoomableImage
                        src={imgDrone321}
                        alt="Icon 與行為規則系統 & 按鍵狀態設計"
                        figcaption="按鍵與狀態對應設計"
                      />
                    </div>
                  )
                },
                {
                  id: "3.3",
                  title: (
                    <div className="flex items-center gap-4">
                      <span className="text-4xl font-bold text-primary/30">3.3</span>
                      <h3 className="text-xl font-semibold text-foreground">任務導向的 App UX</h3>
                    </div>
                  ),
                  content: (
                    <div className="space-y-6">
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        以<strong className="text-foreground">任務流程</strong>，而不是功能清單，規劃 App 架構：
                      </p>

                      <div className="bg-secondary/50 rounded-xl p-8">
                        <div className="grid md:grid-cols-3 gap-6">
                          <Card className="border-t-4 border-t-primary">
                            <CardContent className="p-6">
                              <h5 className="text-lg font-semibold text-primary mb-2">任務前</h5>
                              <p className="text-sm text-muted-foreground">檢查、設定、載入任務參數與航線規劃</p>
                            </CardContent>
                          </Card>
                          <Card className="border-t-4 border-t-primary">
                            <CardContent className="p-6">
                              <h5 className="text-lg font-semibold text-primary mb-2">任務中</h5>
                              <p className="text-sm text-muted-foreground">監看、調整、緊急應變與即時決策</p>
                            </CardContent>
                          </Card>
                          <Card className="border-t-4 border-t-primary">
                            <CardContent className="p-6">
                              <h5 className="text-lg font-semibold text-primary mb-2">任務後</h5>
                              <p className="text-sm text-muted-foreground">資料回收、紀錄檢視與任務報告</p>
                            </CardContent>
                          </Card>
                        </div>
                      </div>

                      <ul className="space-y-4 text-lg text-muted-foreground">
                        <li className="flex gap-3">
                          <span className="text-primary font-bold">→</span>
                          <span>針對關鍵畫面設計 wireframe 與 GUI，將地圖、即時影像、警示與系統狀態整合在同一視野中</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="text-primary font-bold">→</span>
                          <span>同時考量展會 demo 動線，讓業務能在短時間說清楚「這套系統的價值」</span>
                        </li>
                      </ul>

                      <ZoomableImage
                        src={imgDrone331}
                        alt="App IA 架構與任務流程"
                        figcaption="任務前/中/後的資訊架構"
                      />

                      <ZoomableImage
                        src={imgDrone332}
                        alt="關鍵畫面 GUI 設計"
                        figcaption="地圖、影像、警示整合介面"
                      />
                    </div>
                  )
                },
                {
                  id: "3.4",
                  title: (
                    <div className="flex items-center gap-4">
                      <span className="text-4xl font-bold text-primary/30">3.4</span>
                      <h3 className="text-xl font-semibold text-foreground">Prototype 測試：讓問題在展場前先發生完</h3>
                    </div>
                  ),
                  content: (
                    <div className="space-y-6">
                      <ul className="space-y-4 text-lg text-muted-foreground">
                        <li className="flex gap-3">
                          <span className="text-primary font-bold">→</span>
                          <span>實機模擬從開機、連線、起飛、執行任務到返航</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="text-primary font-bold">→</span>
                          <span>記錄所有「需要多想一下」的地方：狀態不明、資訊被蓋住、按鍵與畫面不一致、潛在誤觸風險</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="text-primary font-bold">→</span>
                          <span>整理成 issue list 與建議方案，與 PM、工程與合作公司一起調整</span>
                        </li>
                      </ul>

                      <ZoomableImage
                        src={imgDrone34}
                        alt="實機 Prototype 測試現場"
                        figcaption="模擬任務流程測試"
                      />

                      <div className="bg-primary/10 rounded-xl p-8">
                        <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">最終成果</p>
                        <p className="text-xl text-foreground font-semibold leading-relaxed">
                          這套控制站不只在國際展會順利 demo，也成功取得客戶訂單，並延伸到後台管理系統的 UX 規劃（機隊管理、任務紀錄、維運）
                        </p>
                      </div>
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
              <span className="block text-xl font-normal text-muted-foreground mt-2">資訊不完整時仍要做出可落地的設計</span>
            </h2>

            <div className="space-y-8">
              {/* Challenge 1 */}
              <div className="bg-background rounded-xl p-8 border border-border">
                <div className="flex items-start gap-4">
                  <span className="bg-primary/10 text-primary font-bold px-3 py-1 rounded-full text-sm">挑戰 1</span>
                </div>
                <h3 className="text-2xl font-semibold mt-4 mb-4 text-foreground">
                  軍事領域資訊受限，卻要設計「真的能用」的介面
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  客戶與任務細節多數無法公開，我們無法直接訪談實際操作者
                </p>
                <div className="bg-primary/5 rounded-lg p-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">解決方式：</strong>
                  </p>
                  <ul className="space-y-2 mt-3 text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="text-primary">•</span>
                      <span>以國際競品與公開案例建立 baseline</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary">•</span>
                      <span>用偵察、巡檢、救災等泛用任務情境設計流程與畫面</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary">•</span>
                      <span>保留足夠彈性，未來有實際客戶時可以調整，而不用推翻架構</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-secondary/50 rounded-lg p-4 mt-4">
                  <p className="text-foreground font-medium">
                    <strong>Impact：</strong>控制站設計同時支援展會 demo 與國防標案初步評估，在資訊有限的條件下，專案仍能持續向前
                  </p>
                </div>
              </div>

              {/* Challenge 2 */}
              <div className="bg-background rounded-xl p-8 border border-border">
                <div className="flex items-start gap-4">
                  <span className="bg-primary/10 text-primary font-bold px-3 py-1 rounded-full text-sm">挑戰 2</span>
                </div>
                <h3 className="text-2xl font-semibold mt-4 mb-4 text-foreground">
                  跨公司、多角色協作，對齊「這套系統是為了什麼」
                </h3>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-secondary/30 rounded-lg p-4">
                    <p className="text-sm font-semibold text-primary mb-1">內部</p>
                    <p className="text-sm text-muted-foreground">PM、AM、ME、ID、軟體工程師、高層</p>
                  </div>
                  <div className="bg-secondary/30 rounded-lg p-4">
                    <p className="text-sm font-semibold text-primary mb-1">外部</p>
                    <p className="text-sm text-muted-foreground">合作無人機公司、潛在客戶／標案單位</p>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  每個角色關心的點不同，我在其中扮演：
                </p>
                <div className="bg-primary/5 border-l-4 border-l-primary rounded-r-lg p-6">
                  <p className="text-xl text-foreground font-medium">
                    「用任務情境與畫面，把不同語言接起來的人。」
                  </p>
                </div>
              </div>

              {/* Image */}
              <ZoomableImage
                src={imgDrone41}
                alt="專案挑戰、解決方式與成果延伸影響的視覺化流程圖"
                figcaption="從資訊受限與多角色協作的挑戰，到以 UX 作為橋樑，最終達成國際展會 demo、確認訂單與擴展後台系統"
              />

              {/* Impact Summary */}
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-primary/10 rounded-xl p-6 text-center">
                  <p className="text-4xl font-bold text-primary mb-2">✓</p>
                  <p className="text-sm text-muted-foreground">國際展會成功 demo<br />吸引潛在客戶</p>
                </div>
                <div className="bg-primary/10 rounded-xl p-6 text-center">
                  <p className="text-4xl font-bold text-primary mb-2">→</p>
                  <p className="text-sm text-muted-foreground">確認實際訂單<br />擴大到後台管理系統</p>
                </div>
                <div className="bg-primary/10 rounded-xl p-6 text-center">
                  <p className="text-4xl font-bold text-primary mb-2">↑</p>
                  <p className="text-sm text-muted-foreground">內部理解 UX 價值<br />建立合作模式</p>
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
            </h2>

            {/* 核心引言 */}
            <div className="bg-primary/10 rounded-xl p-8 mb-10">
              <p className="text-2xl text-foreground font-semibold leading-relaxed">
                對我來說，這個 Drone 控制站專案，是在<mark className="bg-primary/30 text-foreground px-2 py-1 rounded">「自己原本不熟悉、資訊又有限」的領域裡</mark>，學會怎麼讓 UX 仍然發揮價值的一次實戰
              </p>
            </div>

            <div className="space-y-8 text-lg text-muted-foreground">
              {/* 段落一：策略選擇 */}
              <p className="leading-relaxed">
                一開始，我對無人機與軍用／產業任務的了解其實不深，很多真實需求也因為保密無法完全揭露。與其假裝很懂，我選擇做的是：
              </p>

              <ul className="space-y-4 pl-4">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>先用國際競品與公開案例建立一個<strong className="text-foreground">合理的 baseline</strong></span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>再透過任務情境、控制站資訊優先順序、實體鍵與螢幕分工去設計<mark className="bg-primary/20 text-foreground px-1 rounded">「一條可以靠近真實需求的路」</mark></span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>留下足夠彈性，讓未來實際導入客戶時可以調整，而不用全部推倒重來</span>
                </li>
              </ul>

              {/* 段落二：展會驗證 */}
              <div className="bg-secondary/50 rounded-xl p-6">
                <p className="leading-relaxed">
                  當控制站方案在 <strong className="text-foreground">XPONENTIAL 2025 美國休士頓展</strong> 上正式對外展出時，看到業務、合作夥伴與潛在客戶在攤位前實際操作、討論任務情境，對我是一個很重要的確認——
                </p>
                <p className="leading-relaxed mt-4">
                  那些在會議室裡對「資訊怎麼排」「實體鍵怎麼配置」「狀態要怎麼回饋」的細部拉扯，最後真的有幫助大家在一個嘈雜又忙碌的展場裡，<mark className="bg-primary/20 text-foreground px-1 rounded">把系統講清楚、示範順暢</mark>。
                </p>
              </div>

              {/* 展會圖片 */}
              <ZoomableImage
                src={imgDrone51}
                alt="XPONENTIAL 2025 美國休士頓展場中，無人機與地面控制站在攤位上展示，前景是與會者與客戶在展位前交流與觀察操作情境"
                figcaption="Drone 系統在 XPONENTIAL 2025 美國休士頓展正式對外展示，驗證控制站體驗在真實展場情境中也能被快速理解與採用"
              />

              {/* 段落三：核心體悟 */}
              <p className="leading-relaxed">
                這個專案讓我更確定：
              </p>

              <div className="bg-primary/5 border-l-4 border-l-primary rounded-r-lg p-6">
                <p className="text-xl text-foreground font-medium leading-relaxed">
                  在高門檻、資訊不透明的產業裡，UX 不一定能一開始就「定義所有細節」，但可以設計出一套<mark className="bg-primary/30 text-foreground px-2 py-1 rounded">讓團隊逐步靠近正確方向的結構與語言</mark>——讓工程、業務、高層和合作夥伴都有共同的畫面可以討論，並在真正走到展場與市場的那一刻，驗證自己做的選擇是不是站得住腳
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
};

export default DroneUXContent;
