import NextLink from 'next/link'
import homepage from '@/styles/homepage.module.css'

/**
 * Construct the header component.
 * @param children {JSX.Element | string | null} - The content to be displayed in the header.
 * @returns {JSX.Element} - The header component.
 * @constructor
 */
export function Header({ children }) {
  return (
    <h1 className={homepage.header}>
      {children}
    </h1>
  )
}

/**
 * Construct the sub-header component.
 * @param children {JSX.Element | string | null} - The content to be displayed in the sub-header.
 * @returns {JSX.Element} - The sub-header component.
 * @constructor
 */
export function SubHeader({ children }) {
  return (
    <h2 className={homepage.subHeader}>
      {children}
    </h2>
  )
}

/**
 * Construct the description component.
 * @param children {JSX.Element | string | null} - The content to be displayed in the description.
 * @returns {JSX.Element} - The description component.
 * @constructor
 */
export function Description({ children }) {
  return (
    <div className={homepage.description}>
      {children}
    </div>
  )
}

/**
 * Construct the link button component.
 * @param children {JSX.Element | string | null} - The content to be displayed in the link button.
 * @param props {object} - The props to be passed to the link button.
 * @returns {JSX.Element} - The link button component.
 * @constructor
 */
export function Link({ children, ...props }) {
  return (
    <NextLink {...props} className={homepage.link}>
      {children}<span>→</span>
    </NextLink>
  )
}
