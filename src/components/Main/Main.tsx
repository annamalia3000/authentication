import classes from './main.module.css'

type MainProps = {
  children: React.ReactNode
}

export const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <div className={classes['main']}>
      {children}
    </div>
  )
}