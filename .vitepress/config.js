export default {
  lang: 'en-US',
  title: 'Wiki',
  description: 'Vojtech Mares\'s DevOps wiki',

  head: [
    [
      'script',
      {},
      '(() => { const afsefe = window.foo;\n    console.log(afsefe);})()'
    ]
  ],

  themeConfig: {
    repo: 'vojtechmares/wiki',
    docsDir: '.',
    docsBranch: 'trunk',
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',

    // algolia: {
    //   appId: '',
    //   apiKey: '',
    //   indexName: ''
    // },

    // carbonAds: {
    //   carbon: '',
    //   custom: '',
    //   placement: ''
    // },

    nav: [
      { text: 'Git', link: '/git/', activeMatch: '^/git/' },
      { text: 'Kubernetes', link: '/kubernetes/', activeMatch: '^/kubernetes/' },
      { text: 'Terraform', link: '/terraform/', activeMatch: '^/terraform/' },
      { text: 'Tools', link: '/tools/', activeMatch: '^/tools/' },
      { text: 'Other', link: '/other/', activeMatch: '^/other/' }
    ],

    sidebar: {
      '/git/': getGitSidebar(),
      '/kubernetes/': getKubernetesSidebar(),
      '/guide/': getGuideSidebar(),
      '/config/': getConfigSidebar(),
      '/': []
    }
  }
}

function getKubernetesSidebar() {
  return []
}

function getTerraformSidebar() {
  return []
}

function getGitSidebar() {
  return [
    {
      text: 'Basics',
      children: [
        { text: 'Intro', link: '/git/' },
        { text: 'Commit', link: '/git/commit' },
        { text: 'Branch', link: '/git/branch' },
        { text: 'Tag', link: '/git/tag' },
        { text: 'Rebase', link: '/git/rebase' },
        { text: 'Cherry Pick', link: '/git/cherry-pick' },
      ],
    },
    {
      text: 'Advanced',
      children: [
        { text: '.gitconfig', link: '/git/gitconfig' },
        { text: 'Commit Signing (GPG)', link: '/git/commit-signing' },
      ],
    },
    {
      text: 'Merge Strategies',
      children: [
        { text: 'Merge Commit', link: '/git/merge/merge-commit' },
        { text: 'Merge Commit with Semi-linear history', link: '/git/merge/merge-commit-semilinear' },
        { text: 'Fast Forward Only', link: '/git/merge/fast-forward-only' },
      ],
    },
    // {
    //   text: 'GitHub',
    //   children: [],
    // },
    // {
    //   text: 'GitLab',
    //   children: [],
    // },
    {
      text: 'Continuous Integration',
      children: [
        {
          text: 'GitHub Actions',
          link: '/git/ci/github-actions',
        },
        { text: 'GitLab CI', link: '/git/ci/gitlab-ci' },
      ],
    }
  ]
}

function getMiscSidebar() {
  return []
}

function getGuideSidebar() {
  return [
    {
      text: 'Introduction',
      children: [
        { text: 'What is VitePress?', link: '/' },
        { text: 'Getting Started', link: '/guide/getting-started' },
        { text: 'Configuration', link: '/guide/configuration' },
        { text: 'Asset Handling', link: '/guide/assets' },
        { text: 'Markdown Extensions', link: '/guide/markdown' },
        { text: 'Using Vue in Markdown', link: '/guide/using-vue' },
        { text: 'Deploying', link: '/guide/deploy' }
      ]
    },
    {
      text: 'Advanced',
      children: [
        { text: 'Frontmatter', link: '/guide/frontmatter' },
        { text: 'Theming', link: '/guide/theming' },
        { text: 'API Reference', link: '/guide/api' },
        {
          text: 'Differences from Vuepress',
          link: '/guide/differences-from-vuepress'
        }
      ]
    }
  ]
}

function getConfigSidebar() {
  return [
    {
      text: 'App Config',
      children: [{ text: 'Basics', link: '/config/basics' }]
    },
    {
      text: 'Theme Config',
      children: [
        { text: 'Homepage', link: '/config/homepage' },
        { text: 'Algolia Search', link: '/config/algolia-search' },
        { text: 'Carbon Ads', link: '/config/carbon-ads' }
      ]
    }
  ]
}
