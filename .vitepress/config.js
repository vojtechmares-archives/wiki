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
      '/terraform/': getTerraformSidebar(),
      '/tools/': getToolsSidebar(),
      '/other/': getOtherSidebar(),
      '/': [],
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

function getOtherSidebar() {
  return []
}

function getToolsSidebar() {
  return [
    { text: 'Docker', link: '/tools/docker' },
    { text: 'GoReleaser', link: '/tools/goreleaser' },
    { text: 'Make', link: '/tools/make' },
    { text: 'RKE', link: '/tools/rke' },
    { text: 'Semantic Release', link: '/tools/semantic-release' },
    { text: 'Statica', link: '/tools/statica' },
  ]
}
