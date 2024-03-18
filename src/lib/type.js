import {useConfig} from 'nextra-theme-docs';

export default function useType() {
  const {frontMatter} = useConfig();
  return frontMatter.type || 'article';
}
