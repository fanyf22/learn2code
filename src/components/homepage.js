import homepage from '@/styles/homepage.module.css'

export function Header({ children }) {
  return (
    <h1 className={homepage.header}>
      {children}
    </h1>
  )
}

export function SubHeader({ children }) {
  return (
    <h2 className={homepage.subHeader}>
      {children}
    </h2>
  )
}

export function Description({ children }) {
  return (
    <div className={homepage.description}>
      {children}
    </div>
  )
}
