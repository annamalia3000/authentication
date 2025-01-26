import classes from './header.module.css'

type HeaderProps = {
  children: React.ReactNode
}

export const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <div className={classes['header']}>
      <h2 className={classes['header-title']}>Neto Social</h2>
      <div>{children}</div>
    </div>
  )
}
