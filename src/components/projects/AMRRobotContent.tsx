import { Card, CardContent } from "@/components/ui/card";
import ScrollReveal from "@/components/ScrollReveal";
import ProcessAccordion from "@/components/projects/ProcessAccordion";
import ZoomableImage from "@/components/ZoomableImage";
import imgAMR1_1 from "@/assets/img_amr_1-1.webp";
import imgAMR1_2 from "@/assets/img_amr_1-2.webp";
import imgAMR2_1 from "@/assets/img_amr_2-1.webp";
import imgAMR3_2 from "@/assets/img_amr_3-2.webp";
import imgAMR3_3_1 from "@/assets/img_amr_3-3-1.webp";
import imgAMR3_3_2 from "@/assets/img_amr_3-3-2.webp";
import imgAMR4_1 from "@/assets/img_amr_4-1.webp";
import imgAMR5_1 from "@/assets/img_amr_5-1.webp";
import imgAMR3_4 from "@/assets/img_amr_3-4.webp";
const AMRRobotContent = () => {
  return (
    <>
      {/* Section 1: Overview */}
      <ScrollReveal delay={100}>
        <section id="overview" className="py-16 md:py-24 px-4 md:px-6">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold mb-12 text-foreground">
              1. Overview
              <span className="block text-xl font-normal text-muted-foreground mt-2">疫情後的新事業與 Wifundity 品牌起點</span>
            </h2>
            
            <div className="space-y-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                2021 年，公司成立全新的機器人事業單位，希望在疫情後服務需求上升的時機點，打造一款<mark className="bg-primary/20 text-foreground px-1 rounded">「屬於台灣自己的服務型機器人」</mark>，以 Wifundity 品牌進入自主移動機器人市場，與已經蓬勃發展的中國服務型機器人品牌競爭
              </p>

              <div className="bg-secondary/50 rounded-xl p-8 my-8">
                <h3 className="text-xl font-semibold mb-4 text-foreground">產品路線與目標場域</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-foreground">產品路線</h4>
                    <p className="text-muted-foreground mb-2">涵蓋多款 AMR／服務型機器人，對應不同場域與任務：</p>
                    <ul className="space-y-1 text-muted-foreground">
                      <li className="flex gap-2"><span className="text-primary">•</span>送貨／送餐</li>
                      <li className="flex gap-2"><span className="text-primary">•</span>迎賓與導覽</li>
                      <li className="flex gap-2"><span className="text-primary">•</span>消毒</li>
                      <li className="flex gap-2"><span className="text-primary">•</span>巡檢</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-foreground">目標場域</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li className="flex gap-2"><span className="text-primary">•</span>大型賣場</li>
                      <li className="flex gap-2"><span className="text-primary">•</span>景點空間</li>
                      <li className="flex gap-2"><span className="text-primary">•</span>飯店與旅館</li>
                      <li className="flex gap-2"><span className="text-primary">•</span>醫院與醫療院所</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Image 1-1 */}
              <ZoomableImage
                src={imgAMR1_1}
                alt="疫情後服務型機器人市場機會"
                figcaption="2021 年新事業發展背景"
              />

              <div className="bg-primary/5 border-l-4 border-l-primary rounded-r-lg p-6 my-8">
                <p className="text-xl text-foreground font-medium">
                  在這樣的目標下，不只是機器人本體，「整體服務流程體驗」變得關鍵
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6 text-foreground">整體服務流程三大面向</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-background border border-border rounded-lg p-5">
                    <h4 className="text-lg font-semibold mb-2 text-primary">後台管理系統</h4>
                    <p className="text-muted-foreground">讓營運單位能有效管理多台機器人與多場域地圖</p>
                  </div>
                  <div className="bg-background border border-border rounded-lg p-5">
                    <h4 className="text-lg font-semibold mb-2 text-primary">機器人端 App</h4>
                    <p className="text-muted-foreground">讓現場服務人員與消費者都能輕鬆理解與互動</p>
                  </div>
                  <div className="bg-background border border-border rounded-lg p-5">
                    <h4 className="text-lg font-semibold mb-2 text-primary">Wifundity 品牌溝通</h4>
                    <p className="text-muted-foreground">品牌網站、行銷影片與展場體驗，讓潛在客戶看見產品願景與實際應用</p>
                  </div>
                </div>
              </div>

              {/* Image 1-2 */}
              <ZoomableImage
                src={imgAMR1_2}
                alt="整體服務流程架構示意"
                figcaption="後台系統、機器人 App、品牌溝通"
              />

              <div className="bg-primary/10 rounded-xl p-8 mt-8">
                <p className="text-2xl text-foreground font-semibold leading-relaxed">
                  這是一個跨越硬體、軟體、場域、營運與品牌的大型專案，也是我職涯中實際承擔角色最多、成長幅度最大的一段經歷之一
                </p>
              </div>

              <div className="bg-muted/50 border border-border rounded-lg px-4 py-3 text-center mt-8">
                <p className="text-sm text-muted-foreground">
                  本專案配圖部分為重新製作的示意圖與 AI 合成畫面
                </p>
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
              <span className="block text-xl font-normal text-muted-foreground mt-2">連接產品、系統與品牌的體驗設計者</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              這是一個長期大型專案，我不只是畫 UI，而是站在<mark className="bg-primary/20 text-foreground px-1 rounded">「整體服務」</mark>的角度，把 Wifundity 旗下的產品與對外溝通串成一條完整體驗，主要扮演三種角色：
            </p>

            <div className="space-y-6">
              {/* Role 1 */}
              <Card className="border-l-4 border-l-primary overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl font-bold text-primary/30">01</span>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-4 text-foreground">產品與場景的「題目釐清者」</h3>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex gap-3">
                          <span className="text-primary">•</span>
                          <span>協助專案成員理解具體使用情境：飯店送餐、醫院送藥、賣場導覽…背後各自的成功條件是什麼</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="text-primary">•</span>
                          <span>用競品研究與場域觀察，幫忙釐清：<mark className="bg-primary/20 text-foreground px-1 rounded">我們真正要解決的問題是什麼</mark>，而不是只列一張功能願望清單</span>
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
                      <h3 className="text-2xl font-semibold mb-4 text-foreground">系統與介面的「體驗設計者」</h3>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex gap-3">
                          <span className="text-primary">•</span>
                          <span>負責從後台管理系統到機器人端 App 的 UX / UI：資訊架構、流程、wireframe 到 GUI</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="text-primary">•</span>
                          <span>隨著多代機器人與多場域導入，依據使用者回饋與營運需求，持續調整操作與介面邏輯</span>
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
                      <h3 className="text-2xl font-semibold mb-4 text-foreground">對內對外溝通的「故事整理者」</h3>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex gap-3">
                          <span className="text-primary">•</span>
                          <span><strong className="text-foreground">對內：</strong>把技術與營運語言，整理成高層與跨部門看得懂的畫面與簡報</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="text-primary">•</span>
                          <span><strong className="text-foreground">對外：</strong>協助 Wifundity 網站、影片、展覽，把「這台機器人與整體解決方案能帶來什麼價值」講清楚、說得動人</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Image 2-1 */}
            <ZoomableImage
              src={imgAMR2_1}
              alt="專案角色與協作關係圖"
              figcaption="跨部門協作網絡"
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
                  <span className="block text-xl font-normal text-muted-foreground mt-2">從市場研究到多場域實際導入</span>
                </h2>
              }
              introContent={
                <p className="text-lg text-muted-foreground leading-relaxed">
                  透過競品研究、後台系統設計、機器人 App 開發與品牌溝通，我們打造了一套完整的服務型機器人體驗。
                </p>
              }
              subSections={[
                {
                  id: "3.1",
                  title: (
                    <div className="flex items-center gap-4">
                      <span className="text-4xl font-bold text-primary/30">3.1</span>
                      <h3 className="text-xl font-semibold text-foreground">看清題目：競品與市場研究</h3>
                    </div>
                  ),
                  content: (
                    <div className="space-y-6">
                      <ul className="space-y-4 text-lg text-muted-foreground">
                        <li className="flex gap-3">
                          <span className="text-primary font-bold">→</span>
                          <span>系統整理中國與國際服務型機器人：產品定位、場域應用、價值主張</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="text-primary font-bold">→</span>
                          <span>實際操作中國競品，記錄從建地圖、派任務到異常處理等完整流程</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="text-primary font-bold">→</span>
                          <span>整理成研究報告，讓高層與團隊看見</span>
                        </li>
                      </ul>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-background border border-border rounded-lg p-5">
                          <p className="text-muted-foreground">哪些是必須跟上的<mark className="bg-primary/20 text-foreground px-1 rounded">「市場基本門檻」</mark></p>
                        </div>
                        <div className="bg-background border border-border rounded-lg p-5">
                          <p className="text-muted-foreground">哪些是我們可以<mark className="bg-primary/20 text-foreground px-1 rounded">差異化</mark>，而不是全部照抄的方向</p>
                        </div>
                      </div>

                    </div>
                  )
                },
                {
                  id: "3.2",
                  title: (
                    <div className="flex items-center gap-4">
                      <span className="text-4xl font-bold text-primary/30">3.2</span>
                      <h3 className="text-xl font-semibold text-foreground">讓營運端有工具：後台管理系統</h3>
                    </div>
                  ),
                  content: (
                    <div className="space-y-6">
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        與 PM、營運人員定義後台的核心任務：
                      </p>

                      <div className="bg-secondary/50 rounded-xl p-8">
                        <div className="grid md:grid-cols-3 gap-6">
                          <Card className="border-t-4 border-t-primary">
                            <CardContent className="p-6">
                              <h5 className="text-lg font-semibold text-primary mb-2">儀表板</h5>
                              <p className="text-sm text-muted-foreground">一眼掌握機器人全局狀態</p>
                            </CardContent>
                          </Card>
                          <Card className="border-t-4 border-t-primary">
                            <CardContent className="p-6">
                              <h5 className="text-lg font-semibold text-primary mb-2">地圖與任務管理</h5>
                              <p className="text-sm text-muted-foreground">管理地圖、多場域路線與任務</p>
                            </CardContent>
                          </Card>
                          <Card className="border-t-4 border-t-primary">
                            <CardContent className="p-6">
                              <h5 className="text-lg font-semibold text-primary mb-2">異常處理</h5>
                              <p className="text-sm text-muted-foreground">快速處理異常與通知</p>
                            </CardContent>
                          </Card>
                        </div>
                      </div>

                      <div className="bg-primary/5 border-l-4 border-l-primary rounded-r-lg p-6">
                        <p className="text-lg text-foreground font-medium">
                          設計後台 IA、操作流程與畫面，讓它不是只給工程看的控制台，而是場域營運人員也能輕易掌握的介面
                        </p>
                      </div>

                      <ZoomableImage
                        src={imgAMR3_2}
                        alt="後台管理系統介面設計，展示儀表板、地圖管理與機器人狀態監控等功能畫面"
                        figcaption="儀表板與地圖管理畫面"
                      />
                    </div>
                  )
                },
                {
                  id: "3.3",
                  title: (
                    <div className="flex items-center gap-4">
                      <span className="text-4xl font-bold text-primary/30">3.3</span>
                      <h3 className="text-xl font-semibold text-foreground">讓機器人現場好用：機器人端 App 與場域驗證</h3>
                    </div>
                  ),
                  content: (
                    <div className="space-y-6">
                      <ul className="space-y-4 text-lg text-muted-foreground">
                        <li className="flex gap-3">
                          <span className="text-primary font-bold">→</span>
                          <span>為送餐、消毒、迎賓等不同模式設計 UI 流程與畫面，在<mark className="bg-primary/20 text-foreground px-1 rounded">「現場人員怎麼用」</mark>與<mark className="bg-primary/20 text-foreground px-1 rounded">「顧客怎麼理解」</mark>之間取得平衡</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="text-primary font-bold">→</span>
                          <span>隨著一代、二代機器人外型與能力變化，重新檢視操作流程與行為邏輯</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="text-primary font-bold">→</span>
                          <span>走進賣場、飯店、醫院觀察真實運行，把這些觀察轉成具體 issue 與設計調整，而不是只停留在 prototype</span>
                        </li>
                      </ul>

                      <ZoomableImage
                        src={imgAMR3_3_1}
                        alt="機器人端 App UI 設計，包含送餐流程、密碼輸入、箱門操作與任務派送等介面"
                        figcaption="送餐、消毒、迎賓模式"
                      />

                      <ZoomableImage
                        src={imgAMR3_3_2}
                        alt="機器人在賣場實際運行的場域驗證照片，展示消費者與機器人互動情境"
                        figcaption="賣場、飯店、醫院實際運行"
                      />
                    </div>
                  )
                },
                {
                  id: "3.4",
                  title: (
                    <div className="flex items-center gap-4">
                      <span className="text-4xl font-bold text-primary/30">3.4</span>
                      <h3 className="text-xl font-semibold text-foreground">讓外界看得懂：Wifundity 網站、影片與展覽</h3>
                    </div>
                  ),
                  content: (
                    <div className="space-y-6">
                      <ul className="space-y-4 text-lg text-muted-foreground">
                        <li className="flex gap-3">
                          <span className="text-primary font-bold">→</span>
                          <span>規劃並設計 Wifundity 產品與解決方案網站的架構與內容，整理各種場域的應用故事</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="text-primary font-bold">→</span>
                          <span>參與多支形象與功能影片，從腳本到畫面，把技術拆成一般人聽得懂的情境</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="text-primary font-bold">→</span>
                          <span>支援媒體發佈與展覽：展場文宣、看板輸出與互動內容，確保對外展示的畫面與實際產品能力一致</span>
                        </li>
                      </ul>

                      <ZoomableImage
                        src={imgAMR3_4}
                        alt="AMR Robot 專案團隊合作過程與場域驗證，包含設計討論、工程開發、賣場飯店醫院實際運行等情境"
                        figcaption="設計、開發、展覽與場域驗證"
                      />
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
              <span className="block text-xl font-normal text-muted-foreground mt-2">專案過程中的關鍵挑戰</span>
            </h2>

            <div className="space-y-8">
              {/* Challenge 1 */}
              <div className="bg-background rounded-xl p-8 border border-border">
                <div className="flex items-start gap-4">
                  <span className="bg-primary/10 text-primary font-bold px-3 py-1 rounded-full text-sm">挑戰 1</span>
                </div>
                <h3 className="text-2xl font-semibold mt-4 mb-4 text-foreground">
                  對標中國成熟競品，卻不能只是「跟著做」
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  中國服務型機器人市場起步早，品牌多、價格具競爭力，我們不能只是把功能列一遍照抄
                </p>
                <div className="bg-primary/5 rounded-lg p-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">透過競品研究與場域觀察，我協助團隊思考：</strong>
                  </p>
                  <ul className="space-y-2 mt-3 text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="text-primary">•</span>
                      <span>哪些是必須跟上的基本能力</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary">•</span>
                      <span>哪些是可以避開正面競爭、做出差異化的地方</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-secondary/50 rounded-lg p-4 mt-4">
                  <p className="text-foreground font-medium">
                    <strong>Impact：</strong>即使專案最終在商業與政策考量下被終止，這段過程仍讓團隊在「要不要做某個功能／產品線」時，有更具體的市場與使用者依據
                  </p>
                </div>
              </div>

              {/* Challenge 2 */}
              <div className="bg-background rounded-xl p-8 border border-border">
                <div className="flex items-start gap-4">
                  <span className="bg-primary/10 text-primary font-bold px-3 py-1 rounded-full text-sm">挑戰 2</span>
                </div>
                <h3 className="text-2xl font-semibold mt-4 mb-4 text-foreground">
                  多方利害關係人之間的說服與對齊
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  專案橫跨：
                </p>
                <ul className="space-y-2 text-muted-foreground mb-4">
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>新事業單位高層</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>PM / AM / ID / SW / HW</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>現場營運人員與終端客戶</span>
                  </li>
                </ul>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  每個人關注的角度不同，我在其中扮演的是：
                </p>
                <div className="bg-primary/5 border-l-4 border-l-primary rounded-r-lg p-6 mb-4">
                  <p className="text-xl text-foreground font-medium">
                    把需求、限制與機會，整理成「可被看見、可被討論的畫面」的人
                  </p>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">具體包括：</strong>
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>把場域中的真實問題帶回會議，避免討論只停留在 spec</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>在設計評估時，用任務情境而不是單一畫面來說明取捨</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>在需要爭取認同時，練習用對方聽得懂的語言說服，而不只談設計語言</span>
                  </li>
                </ul>
                <div className="bg-secondary/50 rounded-lg p-4 mt-4">
                  <p className="text-foreground font-medium">
                    對我來說，這是一個高頻實戰<mark className="bg-primary/20 text-foreground px-1 rounded">「說服、對齊與重新 framing 題目」</mark>的專案
                  </p>
                </div>
              </div>

              {/* Image Placeholder */}
              <ZoomableImage
                src={imgAMR4_1}
                alt="專案挑戰示意圖：對標中國成熟競品尋求差異化創新，以及多方利害關係人之間的說服與對齊"
                figcaption="決策依據與協作過程"
              />
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

            <div className="bg-primary/10 rounded-xl p-8 mb-10">
              <p className="text-2xl text-foreground font-semibold leading-relaxed">
                AMR Robot 是一個最終被公司決策暫停的大型專案，即使結局有遺憾，仍帶來幾個重要體會：
              </p>
            </div>

            <div className="space-y-6">
              <ul className="space-y-6 text-lg text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>UX 不只為「上線那一刻」服務，也要具備全局觀，為<mark className="bg-primary/20 text-foreground px-1 rounded">「要不要繼續投資／擴大導入」</mark>提供判斷依據</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>在高不確定性的新事業裡，持續把賣場、飯店、醫院等真實場域的觀察與數據帶回決策桌，是設計師真正能顯現價值的地方</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>看到機器人在醫院病房走廊與飯店客房樓層實際運行，聽到現場人員的回饋，比任何簡報都更清楚地驗證設計是否真的有用</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>即使專案最終被喊停，過程中累積的設計系統、流程思維與跨部門協作方式，依然成為之後面對 AI PC、無人機等專案時的重要基礎</span>
                </li>
              </ul>

              <div className="bg-background border-l-4 border-l-primary rounded-r-lg p-6 mt-8">
                <p className="text-xl text-foreground font-medium leading-relaxed">
                  對我來說，AMR Robot 是一場長期的「全方位體驗實戰」：從產品、系統到品牌，從會議室一路走到賣場、飯店和醫院，也讓我在之後面對更複雜題目時，更有底氣說自己能陪團隊一起撐住
                </p>
              </div>
            </div>

            {/* Image 5-1 */}
            <ZoomableImage
              src={imgAMR5_1}
              alt="AMR Robot 在醫院與飯店實際運行的情境，包含病房走廊送物與飯店樓層配送服務"
              figcaption="即使專案最終被暫停，機器人仍在醫院與飯店等真實場域提供服務，驗證產品與體驗的實際價值"
              className="mt-10"
            />
          </div>
        </section>
      </ScrollReveal>
    </>
  );
};

export default AMRRobotContent;