import {useRouter} from 'next/router'
import {useConfig} from 'nextra-theme-docs'
import {Link} from 'nextra-theme-docs'
import {email, author, name, github, description, domain, project, Logo, license} from '@/global'
import {useType} from '@/lib/type'

const Header = () => {
  const {asPath, defaultLocale, locale} = useRouter();
  const {title, frontMatter} = useConfig();
  const path = defaultLocale === locale ? asPath : `/${locale}${asPath}`;
  const url = `https://${domain}${path}`;
  const titl = title ? `${title} - ${name}` : name;
  const desc = frontMatter.description || description;
  return (
    <>
      <title>{titl}</title>
      <meta name="description" content={desc} />
      <meta property="og:title" content={titl} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
    </>
  );
}

const Footer = () => {
  return (
    <span>
      {license} {new Date().getFullYear()} ©{' '}
      <a href={github} target="_blank">{author}</a>.
      <br/>
      Contact me via email <Link href={`mailto:${email}`} alt={email}>{email}</Link>.
    </span>
  )
}

const GitTimestamp = ({timestamp}) => {
  const type = useType();
  if (type == 'page') return '';
  return `最后更新于 ${timestamp.toLocaleDateString()}`;
}

export default {
  logo: <Logo/>,
  project: {link: project},
  docsRepositoryBase: `${project}/tree/main`,
  toc: {title: '目录', backToTop: false},
  editLink: {content: '在 GitHub 上编辑此页',},
  feedback: {content: '有任何疑问？在这里给我们反馈→'},
  head: Header,
  footer: {content: <Footer/>},
  gitTimestamp: GitTimestamp,
}
