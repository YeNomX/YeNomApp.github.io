window.$docsify = {
  //routerMode: 'history', REF: https://github.com/docsifyjs/docsify/issues/235#issuecomment-322960245

  // General
  name    : 'YeNom Docs',
  nameLink: '/',
  //logo: '/_media/icon.svg'

  repo: '',

  //relativePath: true,

  formatUpdated: '{MM}/{DD} {HH}:{mm}',

  /*
   * Coverpage
   */
  //coverpage: ['/', '/zh-cn/'],
  
  /*
   * Navigation
   */
  loadNavbar : true,
  mergeNavbar: true,

  loadSidebar: true,
  autoHeader : true,
  maxLevel   : 3,
  subMaxLevel: 3,
  //sidebarDisplayLevel: 0, // https://github.com/iPeng6/docsify-sidebar-collapse

  auto2top: true,

  /*
   * Mapping Alias
   */
  alias: {
    '/.*/_navbar.md': '/_navbar.md',
    //'/.*/_sidebar.md': '/_sidebar.md', // https://github.com/docsifyjs/docsify/issues/301
    //'.*?/changelog': 'https://raw.githubusercontent.com/YeNomX/changelog/main/README.md',
    '/release_notes': 'https://raw.githubusercontent.com/YeNomX/ReleaseNotes/main/README.md',
    '(.*?)/release_notes': 'https://raw.githubusercontent.com/YeNomX/ReleaseNotes/main/$1/README.md',
    //'/zh_Hans/(.*)': '/zh_Hans/$1',
  },

  fallbackLanguages: ['en', 'zh_Hans', 'zh_Hant'],

  notFoundPage: {
    '/'       : '_404.md',
    '/en'     : 'en/_404.md',
    '/zh_Hans': 'zh_Hans/_404.md',
  },

  /*
   * Plugins
   */
  executeScript: true,

  // - Pagination
  pagination: {
    previousText    : '上一章节',
    nextText        : '下一章节',
    crossChapter    : true,
    crossChapterText: true,
  },

  // - Search
  search: {
    depth: 3,
    noData: {
      '/es/'     : '¡No hay resultados.',
      '/de-de/'  : 'Keine Ergebnisse.',
      '/ru-ru/'  : 'Никаких результатов.',
      '/zh_Hans/': '未匹配到结果。',
      '/zh_Hant/': '未匹配到結果。',
      '/en'      : 'No results.',
      '/'        : 'No results.',
    },
    paths: 'auto',
    placeholder: {
      '/es/'     : 'Buscar',
      '/de-de/'  : 'Suche',
      '/ru-ru/'  : 'Поиск',
      '/zh_Hans/': '搜索',
      '/zh_Hant/': '搜索',
      '/en'      : 'Search',
      '/'        : 'Search',
    },
  },

  // - Dark-light Theme
  darklightTheme: {
    dark: {
      // Base
      docsify_themeable_base_background_color: '#000000',
      // App
      docsify_themeable_theme_hue       : '203',
      docsify_themeable_theme_saturation: '92%',
      docsify_themeable_theme_lightness : '65%',
      // Sidebar
      docsify_themeable_sidebar_background  : '#0a0a0a',
      docsify_themeable_sidebar_border_color: '#1a1a1a',
      docsify_themeable_sidebar_name_color  : '#ffffff',
    },

    light: {
      // Base
      docsify_themeable_base_background_color: '#ffffff',
      // App
      docsify_themeable_theme_hue       : '204',
      docsify_themeable_theme_saturation: '90%',
      docsify_themeable_theme_lightness : '45%',
      // Sidebar
      docsify_themeable_sidebar_background  : '#f4f4f4',
      docsify_themeable_sidebar_border_color: '#eeeeee',
      docsify_themeable_sidebar_name_color  : '#000000',
    }
  }
};

