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
  return [
    { text: 'Home', link: '/kubernetes/' },
    {
      text: 'Resources',
      children: [
        { text: 'Pod', link: '/kubernetes/resources/pod' },
        { text: 'Service', link: '/kubernetes/resources/service' },
        { text: 'Deployment', link: '/kubernetes/resources/deployment' },
        { text: 'Ingress', link: '/kubernetes/resources/ingress' },
        { text: 'StatefulSet', link: '/kubernetes/resources/statefulset' },
        { text: 'DaemonSet', link: '/kubernetes/resources/daemonset' },
      ],
    },
    {
      text: 'Deploy',
      children: [
        { text: 'Managed', link: '/kubernetes/deploy/managed' },
        { text: 'Self-Hosted', link: '/kubernetes/deploy/self-hosted' },
        { text: 'Bermetal', link: '/kubernetes/deploy/baremetal' },
        { text: 'Host OS', link: '/kubernetes/deploy/host-os' },
      ],
    },
    {
      text: 'Scaling',
      children: [
        { text: 'Intro', link: '/kubernetes/scaling/' },
        { text: 'Horizontal Pod Autoscaler', link: '/kubernetes/scaling/horizontal-pod-autoscaler' },
        { text: 'Vertical Pod Autoscaler', link: '/kubernetes/scaling/vertical-pod-autoscaler' },
        { text: 'Cluster Autoscaler', link: '/kubernetes/scaling/cluster-autoscaler' },
      ],
    },
    {
      text: 'k3s',
      children: [
        { text: 'Intro', link: '/kubernetes/k3s/' },
      ],
    },
    {
      text: 'Cluster Components',
      children: [
        { text: 'Intro', link: '/kubernetes/cluster-components/' },
        { text: 'kube-api', link: '/kubernetes/cluster-components/kube-api' },
        { text: 'kube-scheduler', link: '/kubernetes/cluster-components/kube-scheduler' },
        { text: 'kubelet', link: '/kubernetes/cluster-components/kubelet' },
        { text: 'kube-proxy', link: '/kubernetes/cluster-components/kube-proxy' },
        { text: 'CoreDNS', link: '/kubernetes/cluster-components/coredns' },
      ],
    },
    {
      text: 'Cluster Architecture',
      children: [
        { text: 'Intro', link: '/kubernetes/cluster-architecture/' },
        { text: 'Networking', link: '/kubernetes/cluster-architecture/networking' },
        { text: 'Load Balancing', link: '/kubernetes/cluster-architecture/load-balancing' },
      ],
    },
  ]
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
