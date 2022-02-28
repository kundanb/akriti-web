import styles from 'scss/common/container.module.scss'
import { classNames } from 'helpers/functions'

export interface ContainerProps {
  className?: string
}

const Container = (props: ContainerProps & ChildrenProp) => {
  return (
    <div className={classNames(styles.container, props.className)}>
      {props.children}
    </div>
  )
}

export default Container
