$(function(){
    $('#fullpage').fullpage({
      //Navigation
      menu: '#menu', //メニューのID
      lockAnchors: false, //メニューのアンカー有効化
      //anchors:['firstPage', 'secondPage'], //メニューのアンカー先
      anchors: ['top', '1st', '2nd', '3rd', 'last'],
      navigation: true, //スクロール位置のナビゲーション
      navigationPosition: 'right', //スクロールナビゲーションの位置
      navigationTooltips: ['', ''], //スクロールナビゲーションのツールチップ
      showActiveTooltip: false, //スクロールナビゲーションのツールチップ表示有無
      slidesNavigation: true, //スライドのナビゲーション表示
      slidesNavPosition: 'bottom', //スライドナビゲーションの位置
  
      //Scrolling
      css3: true, //CSS3のeasingを使用。falseでJavaScript使用
      scrollingSpeed: 900, //スクロールのスピード
      autoScrolling: true, //スクロールした際に自動で次の要素を表示
      fitToSection: true, //要素を自動で画面に合わせて調整
      fitToSectionDelay: 1000, //自動で画面に合わせる際のスピード
      scrollBar: false, //ブラウザのスクロールバーの表示
      easing: 'easeInOutCubic', //スクロールアニメーションの種類
      easingcss3: 'ease', //CSS3を使ったスクロールアニメーションの種類
      loopBottom: false, //一番下のコンテンツより下にスクロールしたら最初にループ
      loopTop: false, //一番上のコンテンツより上にスクロールしたら最後にループ
      loopHorizontal: true, //スライドのループ
      continuousVertical: false, //一番上もしくは一番下のコンテンツからさらにスクロールするとループ。loopBottom・loopTopとの併用不可
      continuousHorizontal: false, //スライドのループ
      scrollHorizontally: false, //水平スクロール
      interlockedSlides: false,
      dragAndMove: false, //ドラッグによる移動
      offsetSections: false,
      resetSliders: false,
      fadingEffect: false, //フェードエフェクト
      normalScrollElements: '#element1, .element2', //自動スクロールを無効化したい要素
      scrollOverflow: true, //コンテンツが画面より大きい時にスクロールして表示
      scrollOverflowReset: false,
      scrollOverflowOptions: null,
      touchSensitivity: 15, //タッチデバイスでのスワイプ感度
      normalScrollElementTouchThreshold: 5,
      bigSectionsDestination: null,
  
      //Accessibility
      keyboardScrolling: true, //キーボードによるスクロールの操作
      animateAnchor: true, //ページ内リンクのアニメーション有無
      recordHistory: true, //スクロールの履歴をブラウザに記録
  
      //Design
      controlArrows: true, //スライドの矢印表示
      verticalCentered: true, //天地中央
      sectionsColor : ['', ''], //各セクションの背景色
      paddingTop: '0', //上部の余白
      paddingBottom: '0', //下部の余白
      fixedElements: '#header, .footer', //固定表示する要素
      responsiveWidth: 0, //通常のスクロールに変化するデバイスの横幅
      responsiveHeight: 0, //通常のスクロールに変化するデバイスの高さ
      responsiveSlides: false,
      parallax: true, //パララックス効果
      parallaxOptions: {type: 'cover', percentage: 82, property: 'translate'}, //パララックス効果のオプション
      parallaxKey: 'cmNvZmZlZXN0YW5kLmNvbV9samxjR0Z5WVd4c1lYZz14UVU=',
  
      //Custom selectors
      sectionSelector: '.section', //セクションのクラス名
      slideSelector: '.slide', //スライドのクラス名
      lazyLoading: true, //遅延ロード
  
      //events
      onLeave: function(origin, destination, direction){}, //スクロール開始時に呼び出される関数
      afterLoad: function(origin, destination, direction){}, //スクロール完了時に呼び出される関数
      afterRender: function(){}, //ぺージ読み込み時に呼び出される関数
      afterResize: function(){width, height}, //ウインドウサイズのリサイズ時に呼び出される関数
      afterResponsive: function(isResponsive){}, //responsiveWidth・responsiveHeightの条件を満たした時に呼び出される関数
      afterSlideLoad: function(section, origin, destination, direction){}, //スライド開始時に呼び出される関数
      onSlideLeave: function(section, origin, destination, direction){} //スライド完了時に呼び出される関数
  
  
  
    });
  });
  