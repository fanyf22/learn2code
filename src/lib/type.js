import {useConfig} from 'nextra-theme-docs';

export function useType() {
  const {frontMatter} = useConfig();
  return frontMatter.type || 'article';
}
