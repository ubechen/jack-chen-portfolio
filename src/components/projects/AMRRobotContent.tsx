import { Card, CardContent } from "@/components/ui/card";
import ScrollReveal from "@/components/ScrollReveal";

const AMRRobotContent = () => {
  return (
    <>
      {/* Section 1: Overview */}
      <ScrollReveal delay={100}>
        <section className="py-16 md:py-24 px-4 md:px-6">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold mb-12 text-foreground">
              1. Overview
              <span className="block text-xl font-normal text-muted-foreground mt-2">疫情後的新事業契機</span>
            </h2>
            
            <div className="space-y-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                2021 年，公司成立全新的機器人事業單位，希望在疫情後服務需求上升的時機點，打造一款<mark className="bg-primary/20 text-foreground px-1 rounded">「屬於台灣自己的服務型機器人」</mark>，與中國已經蓬勃發展的服務機器人品牌競爭
              </p>

              <div className="bg-secondary/50 rounded-xl p-8 my-8">
                <h3 className="text-xl font-semibold mb-4 text-foreground">產品路線與目標場域</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-foreground">產品路線</h4>
                    <p className="text-muted-foreground">送貨／送餐、迎賓導覽、消毒、巡檢等 AMR／服務型機器人</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-foreground">目標場域</h4>
                    <p className="text-muted-foreground">大型賣場、景點、飯店與醫院</p>
                  </div>
                </div>
              </div>

              {/* Image Placeholder */}
              <figure className="-mx-4 md:mx-0">
                <div className="aspect-video bg-muted md:rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground text-center px-4">疫情後服務型機器人市場機會</p>
                </div>
                <figcaption className="text-sm text-muted-foreground text-center mt-2 px-4">
                  2021 年新事業發展背景
                </figcaption>
              </figure>

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
                    <p className="text-muted-foreground">讓營運人員能有效管理多台機器人與多場域地圖</p>
                  </div>
                  <div className="bg-background border border-border rounded-lg p-5">
                    <h4 className="text-lg font-semibold mb-2 text-primary">機器人端 App</h4>
                    <p className="text-muted-foreground">讓現場服務人員與消費者都能輕鬆理解與互動</p>
                  </div>
                  <div className="bg-background border border-border rounded-lg p-5">
                    <h4 className="text-lg font-semibold mb-2 text-primary">品牌溝通</h4>
                    <p className="text-muted-foreground">網站、行銷影片與展場體驗，讓潛在客戶看見產品願景</p>
                  </div>
                </div>
              </div>

              {/* Image Placeholder */}
              <figure className="-mx-4 md:mx-0">
                <div className="aspect-video bg-muted md:rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground text-center px-4">整體服務流程架構示意</p>
                </div>
                <figcaption className="text-sm text-muted-foreground text-center mt-2 px-4">
                  後台系統、機器人 App、品牌溝通
                </figcaption>
              </figure>

              <div className="bg-primary/10 rounded-xl p-8 mt-8">
                <p className="text-2xl text-foreground font-semibold leading-relaxed">
                  這是一個跨越硬體、軟體、場域、營運與品牌的大型專案，也是我職涯中實際承擔角色最多、成長幅度最大的一段經歷之一
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Section 2: My Role */}
      <ScrollReveal delay={100}>
        <section className="py-16 md:py-24 px-4 md:px-6 bg-muted/60 shadow-sm">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold mb-12 text-foreground">
              2. My Role
              <span className="block text-xl font-normal text-muted-foreground mt-2">連接產品、系統與品牌的體驗設計者</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              這是一個長期大型專案，我不只是畫 UI，而是站在<mark className="bg-primary/20 text-foreground px-1 rounded">「整體服務」</mark>的角度把不同接觸點串起來，主要扮演三種角色：
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
                          <span>用競品研究與場域觀察，幫忙釐清：<mark className="bg-primary/20 text-foreground px-1 rounded">我們真正要解決的問題是什麼？</mark>而不是只列一張功能願望清單</span>
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
                          <span>隨著多代機器人與多場域導入，依據使用者回饋與營運需求持續調整操作與介面邏輯</span>
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
                          <span><strong className="text-foreground">對內：</strong>把技術與營運語言整理成高層與跨部門看得懂的畫面與簡報</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="text-primary">•</span>
                          <span><strong className="text-foreground">對外：</strong>協助網站、影片、展覽，把「這台機器人到底能帶來什麼價值」講清楚、說得動人</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Image Placeholder */}
            <figure className="-mx-4 md:mx-0 mt-10">
              <div className="aspect-[16/9] bg-muted md:rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground text-center px-4">專案角色與協作關係圖</p>
              </div>
              <figcaption className="text-sm text-muted-foreground text-center mt-2 px-4">
                跨部門協作網絡
              </figcaption>
            </figure>
          </div>
        </section>
      </ScrollReveal>

      {/* Section 3: What we did */}
      <ScrollReveal delay={100}>
        <section className="py-16 md:py-24 px-4 md:px-6">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold mb-12 text-foreground">
              3. What we did
              <span className="block text-xl font-normal text-muted-foreground mt-2">從市場研究到多場域實際導入</span>
            </h2>

            {/* 3.1 */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-6xl font-bold text-primary/20">3.1</span>
                <h3 className="text-2xl font-semibold text-foreground">看清題目：競品與市場研究</h3>
              </div>

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

                {/* Image Placeholder */}
                <figure className="-mx-4 md:mx-0">
                  <div className="aspect-video bg-muted md:rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground text-center px-4">中國與國際服務型機器人競品分析</p>
                  </div>
                  <figcaption className="text-sm text-muted-foreground text-center mt-2 px-4">
                    產品定位與價值主張比較
                  </figcaption>
                </figure>

                {/* Image Placeholder */}
                <figure className="-mx-4 md:mx-0">
                  <div className="aspect-[16/10] bg-muted md:rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground text-center px-4">競品實際操作記錄</p>
                  </div>
                  <figcaption className="text-sm text-muted-foreground text-center mt-2 px-4">
                    從建地圖到異常處理的完整流程
                  </figcaption>
                </figure>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-border my-16"></div>

            {/* 3.2 */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-6xl font-bold text-primary/20">3.2</span>
                <h3 className="text-2xl font-semibold text-foreground">讓營運端有工具：後台管理系統</h3>
              </div>

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
                        <p className="text-sm text-muted-foreground">管理多場域路線與任務</p>
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

                {/* Image Placeholder */}
                <figure className="-mx-4 md:mx-0">
                  <div className="aspect-video bg-muted md:rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground text-center px-4">後台管理系統介面設計</p>
                  </div>
                  <figcaption className="text-sm text-muted-foreground text-center mt-2 px-4">
                    儀表板與地圖管理畫面
                  </figcaption>
                </figure>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-border my-16"></div>

            {/* 3.3 */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-6xl font-bold text-primary/20">3.3</span>
                <h3 className="text-2xl font-semibold text-foreground">讓機器人現場好用：機器人端 App 與場域驗證</h3>
              </div>

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

                {/* Image Placeholder */}
                <figure className="-mx-4 md:mx-0">
                  <div className="aspect-video bg-muted md:rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground text-center px-4">機器人端 App UI 設計</p>
                  </div>
                  <figcaption className="text-sm text-muted-foreground text-center mt-2 px-4">
                    送餐、消毒、迎賓模式
                  </figcaption>
                </figure>

                {/* Image Placeholder */}
                <figure className="-mx-4 md:mx-0">
                  <div className="aspect-[16/10] bg-muted md:rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground text-center px-4">場域驗證現場照片</p>
                  </div>
                  <figcaption className="text-sm text-muted-foreground text-center mt-2 px-4">
                    賣場、飯店、醫院實際運行
                  </figcaption>
                </figure>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-border my-16"></div>

            {/* 3.4 */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <span className="text-6xl font-bold text-primary/20">3.4</span>
                <h3 className="text-2xl font-semibold text-foreground">讓外界看得懂：網站、影片與展覽</h3>
              </div>

              <div className="space-y-6">
                <ul className="space-y-4 text-lg text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">→</span>
                    <span>規劃並設計產品網站的架構與內容，整理各種場域的應用故事</span>
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

                {/* Image Placeholder */}
                <figure className="-mx-4 md:mx-0">
                  <div className="aspect-video bg-muted md:rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground text-center px-4">產品網站設計</p>
                  </div>
                  <figcaption className="text-sm text-muted-foreground text-center mt-2 px-4">
                    場域應用故事整理
                  </figcaption>
                </figure>

                {/* Image Placeholder */}
                <figure className="-mx-4 md:mx-0">
                  <div className="aspect-[16/10] bg-muted md:rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground text-center px-4">展場與影片製作</p>
                  </div>
                  <figcaption className="text-sm text-muted-foreground text-center mt-2 px-4">
                    展覽文宣與互動內容
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Section 4: Challenges & Impact */}
      <ScrollReveal delay={100}>
        <section className="py-16 md:py-24 px-4 md:px-6 bg-muted/60 shadow-sm">
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
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-secondary/30 rounded-lg p-4">
                    <p className="text-sm font-semibold text-primary mb-1">專案橫跨</p>
                    <p className="text-sm text-muted-foreground">新事業單位高層、PM / AM / ID / SW / HW、現場營運人員與終端客戶</p>
                  </div>
                  <div className="bg-secondary/30 rounded-lg p-4">
                    <p className="text-sm font-semibold text-primary mb-1">每個人關注的角度不同</p>
                    <p className="text-sm text-muted-foreground">我在其中扮演的角色</p>
                  </div>
                </div>
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
              <figure className="-mx-4 md:mx-0">
                <div className="aspect-video bg-muted md:rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground text-center px-4">專案挑戰與解決方式</p>
                </div>
                <figcaption className="text-sm text-muted-foreground text-center mt-2 px-4">
                  決策依據與協作過程
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Section 5: What I learned */}
      <ScrollReveal delay={100}>
        <section className="py-16 md:py-24 px-4 md:px-6">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold mb-12 text-foreground">
              5. What I learned
            </h2>

            <div className="bg-primary/10 rounded-xl p-8 mb-10">
              <p className="text-2xl text-foreground font-semibold leading-relaxed">
                AMR Robot 是一個最終被公司決策暫停的大型專案，即使有遺憾，仍帶來幾個重要體會
              </p>
            </div>

            <div className="space-y-6">
              <ul className="space-y-6 text-lg text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>UX 不只為「上線產品」服務，也要具備全局觀，為<mark className="bg-primary/20 text-foreground px-1 rounded">「要不要繼續投資／往下做」</mark>提供判斷依據</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>在高不確定性的新事業裡，持續把真實場域經驗帶回決策桌，是設計師真正能顯現價值的地方</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>即使專案被終止，過程中累積的設計系統、流程思維與跨部門協作方式，依然會成為下一個專案的基礎</span>
                </li>
              </ul>

              <div className="bg-background border-l-4 border-l-primary rounded-r-lg p-6 mt-8">
                <p className="text-xl text-foreground font-medium leading-relaxed">
                  AMR Robot 對我而言是一場長期的「全方位體驗實戰」—— 從產品、系統到品牌，從會議室一路走到賣場、飯店和醫院，也讓我在之後面對更複雜題目時，更有底氣說自己能陪團隊一起撐住
                </p>
              </div>
            </div>

            {/* Image Placeholder */}
            <figure className="-mx-4 md:mx-0 mt-10">
              <div className="aspect-[16/9] bg-muted md:rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground text-center px-4">專案反思與成長</p>
              </div>
              <figcaption className="text-sm text-muted-foreground text-center mt-2 px-4">
                從全方位體驗實戰中學習
              </figcaption>
            </figure>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
};

export default AMRRobotContent;
