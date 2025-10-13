import Image from "next/image";
import { AnimatedSection } from "./components/AnimatedSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* ヘッダー */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 animate-[fade-in-up_0.6s_ease-out]">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-[#76E0EA] to-[#5BC4CF] bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
              Yumenium
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-slate-700 hover:text-[#76E0EA] transition-all duration-300 hover:scale-110">
                Services
              </a>
              <a href="#contact" className="text-slate-700 hover:text-[#76E0EA] transition-all duration-300 hover:scale-110">
                Contact
              </a>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSedOYkhEDQh5i7lrHIkJLHw74Sx-UAHu9u9HBlljPgTkrvVKQ/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-gradient-to-r from-[#76E0EA] to-[#5BC4CF] text-white rounded-full hover:shadow-lg hover:shadow-[#76E0EA]/50 hover:scale-105 transition-all duration-300"
              >
                無料相談
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* ヒーローセクション */}
      <section className="pt-32 pb-20 px-6 relative">
        {/* 背景のアニメーショングラデーション */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#76E0EA]/30 rounded-full blur-3xl animate-[pulse-glow_4s_ease-in-out_infinite]"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#5BC4CF]/20 rounded-full blur-3xl animate-[pulse-glow_6s_ease-in-out_infinite]"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="inline-block animate-[slide-in-left_0.8s_ease-out] bg-gradient-to-r from-[#76E0EA] to-[#5BC4CF] bg-clip-text text-transparent">
                  生成AI
                </span>
                <br />
                <span className="inline-block animate-[slide-in-left_1s_ease-out] text-slate-900">で</span>
                <br />
                <span className="inline-block animate-[slide-in-left_1.2s_ease-out] text-slate-900">ビジネスを変革</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed animate-[fade-in-up_1s_ease-out_0.4s_both]">
                生成AIシステム開発と自社プロダクトで
                <br />
                ビジネスの新しい可能性を切り拓きます。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-[fade-in-up_1s_ease-out_0.6s_both]">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSedOYkhEDQh5i7lrHIkJLHw74Sx-UAHu9u9HBlljPgTkrvVKQ/viewform?usp=dialog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-gradient-to-r from-[#76E0EA] to-[#5BC4CF] text-white rounded-full font-semibold hover:shadow-xl hover:shadow-[#76E0EA]/50 hover:scale-105 transition-all duration-300 text-center"
                >
                  お問い合わせフォーム
                </a>
                <a
                  href="#services"
                  className="px-8 py-4 border-2 border-[#76E0EA] text-[#5BC4CF] rounded-full font-semibold hover:bg-[#76E0EA]/10 hover:scale-105 transition-all duration-300 text-center"
                >
                  サービスを見る
                </a>
              </div>
            </div>
            <div className="relative animate-[slide-in-right_1s_ease-out_0.4s_both]">
              {/* 背景グロー効果 */}
              <div className="absolute -inset-8 bg-gradient-to-r from-[#76E0EA]/30 to-[#5BC4CF]/30 rounded-full blur-3xl animate-[pulse-glow_4s_ease-in-out_infinite]"></div>
              
              {/* メイン画像コンテナ */}
              <div className="relative">
                {/* 装飾的なグラデーションボーダー */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#76E0EA] to-[#5BC4CF] rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500"></div>
                
                {/* 画像 */}
                <div className="relative animate-[float_6s_ease-in-out_infinite]">
                  <Image
                    src="/visual-collaboration.svg"
                    alt="ビジュアルコラボレーション"
                    width={700}
                    height={600}
                    className="w-full h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-700"
                    priority
                  />
                </div>
                
                {/* 装飾的な要素 */}
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-[#76E0EA] to-[#5BC4CF] rounded-full opacity-20 blur-2xl animate-[pulse-glow_5s_ease-in-out_infinite_1s]"></div>
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-[#5BC4CF] to-[#76E0EA] rounded-full opacity-20 blur-2xl animate-[pulse-glow_6s_ease-in-out_infinite_2s]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* サービス紹介セクション */}
      <section id="services" className="py-20 px-6 bg-slate-50 relative overflow-hidden">
        {/* 背景デコレーション */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#76E0EA]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#5BC4CF]/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Services
            </h2>
            <p className="text-xl text-slate-600">
              お客様企業向けの受託開発と、自社で運営するプロダクトの2軸で展開
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {/* 生成AIシステム受託開発 */}
            <AnimatedSection delay={100}>
              <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:shadow-[#76E0EA]/10 transition-all duration-500 hover:-translate-y-3 border-2 border-[#76E0EA]/20 h-full">
                <div className="mb-6">
                  <span className="inline-block px-4 py-1.5 bg-[#76E0EA]/10 text-[#5BC4CF] text-sm font-semibold rounded-full mb-4 group-hover:scale-105 transition-transform duration-300">
                    for Business / 企業向け
                  </span>
                  <div className="relative overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#76E0EA]/10 to-[#5BC4CF]/10 rounded-2xl blur-xl group-hover:scale-110 transition-transform duration-500"></div>
                    <div className="relative bg-gradient-to-br from-[#76E0EA]/5 to-[#5BC4CF]/5 p-6 rounded-2xl">
                      <Image
                        src="/work-with-the-best.svg"
                        alt="生成AIシステム受託開発"
                        width={400}
                        height={300}
                        className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-[#5BC4CF] transition-colors duration-300">
                  生成AIシステム開発
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  <strong className="text-slate-900">お客様企業の課題</strong>を深く理解し、ビジネス目標を実現する生成AIシステムを<strong className="text-slate-900">オーダーメイドで開発</strong>します。
                  ChatGPT、Claude、Geminiなど最新のLLMを活用し、御社に最適なソリューションを提供します。
                </p>
                <ul className="space-y-4 text-slate-600">
                  <li className="flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-300">
                    <div className="text-[#76E0EA]  text-lg">●</div>
                    <div><strong className="text-slate-800">AI導入支援：</strong>現状分析から導入計画まで</div>
                  </li>
                  <li className="flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-300 delay-75">
                    <div className="text-[#76E0EA]  text-lg">●</div>
                    <div><strong className="text-slate-800">カスタム開発：</strong>業務に特化したAIシステム</div>
                  </li>
                  <li className="flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-300 delay-100">
                    <div className="text-[#76E0EA]  text-lg">●</div>
                    <div><strong className="text-slate-800">システム連携：</strong>既存環境へのシームレスな統合</div>
                  </li>
                  <li className="flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-300 delay-150">
                    <div className="text-[#76E0EA]  text-lg">●</div>
                    <div><strong className="text-slate-800">継続支援：</strong>運用・保守・機能拡張まで</div>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            {/* 自社プロダクト運営 */}
            <AnimatedSection delay={300}>
              <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:shadow-[#76E0EA]/10 transition-all duration-500 hover:-translate-y-3 border-2 border-[#76E0EA]/20 h-full">
                <div className="mb-6">
                  <span className="inline-block px-4 py-1.5 bg-[#76E0EA]/10 text-[#5BC4CF] text-sm font-semibold rounded-full mb-4 group-hover:scale-105 transition-transform duration-300">
                    Own Products / 自社サービス
                  </span>
                  <div className="relative overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#76E0EA]/10 to-[#5BC4CF]/10 rounded-2xl blur-xl group-hover:scale-110 transition-transform duration-500"></div>
                    <div className="relative bg-gradient-to-br from-[#76E0EA]/5 to-[#5BC4CF]/5 p-6 rounded-2xl">
                      <Image
                        src="/writing-a-blog.svg"
                        alt="プロダクト運営"
                        width={400}
                        height={300}
                        className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-[#5BC4CF] transition-colors duration-300">
                  自社プロダクト運営
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  <strong className="text-slate-900">Yumenium独自の</strong>生成AIサービスを企画・開発・運営しています。
                  誰もが手軽にAIの恩恵を受けられる<strong className="text-slate-900">直接利用可能なプロダクト</strong>として、継続的な価値提供を行います。
                </p>
                <ul className="space-y-4 text-slate-600">
                  <li className="flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-300 delay-75">
                    <div className="text-[#76E0EA]  text-lg">●</div>
                    <div><strong className="text-slate-800">最新技術：</strong>最新の技術を活用したプロダクト</div>
                  </li>
                  <li className="flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-300 delay-100">
                    <div className="text-[#76E0EA]  text-lg">●</div>
                    <div><strong className="text-slate-800">継続改善：</strong>ユーザーの声を反映して進化</div>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* お問い合わせセクション */}
      <section id="contact" className="py-20 px-6 relative overflow-hidden">
        {/* 背景アニメーション */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#76E0EA]/10 rounded-full blur-3xl animate-[pulse-glow_5s_ease-in-out_infinite]"></div>
        </div>
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <AnimatedSection>
            <div className="bg-gradient-to-br from-[#76E0EA] to-[#5BC4CF] rounded-3xl p-12 text-center text-white shadow-2xl hover:shadow-[#76E0EA]/30 transition-all duration-500 relative overflow-hidden group">
              {/* グラデーションの動的効果 */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#5BC4CF]/20 to-[#76E0EA]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="mb-8 animate-[float_4s_ease-in-out_infinite]">
                  <Image
                    src="/tell-us-about-your-needs-product.svg"
                    alt="お問い合わせ"
                    width={200}
                    height={200}
                    className="w-48 h-auto mx-auto group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Contact
                </h2>
                <p className="text-xl mb-8 text-white/90">
                  生成AIの導入や活用方法について、お気軽にご相談ください。
                  <br />
                  お客様のビジネス課題に最適なソリューションをご提案します。
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSedOYkhEDQh5i7lrHIkJLHw74Sx-UAHu9u9HBlljPgTkrvVKQ/viewform?usp=dialog"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-white text-[#5BC4CF] rounded-full font-semibold hover:shadow-xl hover:scale-110 transition-all duration-300"
                  >
                    お問い合わせフォーム
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-slate-900 text-white py-12 px-6 relative overflow-hidden">
        {/* 背景デコレーション */}
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#76E0EA]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#5BC4CF]/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="group">
                <div className="text-2xl font-bold bg-gradient-to-r from-[#76E0EA] to-[#5BC4CF] bg-clip-text text-transparent mb-4 group-hover:scale-105 transition-transform duration-300">
                  Yumenium
                </div>
                <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                  生成AIでビジネスを変革する
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">サービス</h4>
                <ul className="space-y-2 text-slate-400">
                  <li className="hover:translate-x-1 transition-transform duration-300">
                    <a href="#services" className="hover:text-[#76E0EA] transition-colors">
                      生成AIシステム受託開発
                    </a>
                  </li>
                  <li className="hover:translate-x-1 transition-transform duration-300">
                    <a href="#services" className="hover:text-[#76E0EA] transition-colors">
                      自社プロダクト運営
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">お問い合わせ</h4>
                <ul className="space-y-2 text-slate-400">
                  <li className="hover:translate-x-1 transition-transform duration-300">
                    <a href="mailto:contact@yumenium.com" className="hover:text-[#76E0EA] transition-colors">
                      yumenium.inc@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </AnimatedSection>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400 animate-[fade-in-up_1s_ease-out]">
            <p>&copy; {new Date().getFullYear()} Yumenium. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

