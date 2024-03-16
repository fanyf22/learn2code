

export default {
  logo: <img src={'/logo.svg'} alt={'logo'} style={{height: '35px'}} />,
  logoLink: '/',
  project: {
    link: 'https://github.com/fanyf22/topfyf-web',
  },
  docsRepositoryBase: 'https://github.com/fanyf22/topfyf-web/tree/main',
  editLink: {
    text: '在 GitHub 上编辑此页',
  },
  feedback: {
    content: '有任何疑问？在这里给我们反馈→'
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s - Learn2Code',
    }
  }
}
