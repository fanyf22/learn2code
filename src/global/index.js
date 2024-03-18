import Image from 'next/image'
import logo from '@/images/logo.svg'

module.exports = {
  author: 'Philip Fan',
  email: 'topfyf@qq.com',
  github: 'https://github.com/fanyf22',
  name: 'Learn2Code',
  description: 'Learn2Code - A website for learning web programming.',
  domain: 'learn2code.topfyf.cn',
  project: 'https://github.com/fanyf22/learn2code',
  Logo: () => <Image src={logo} alt={'logo'} />,
  license: 'MIT',
}
