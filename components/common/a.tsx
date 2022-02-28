import Link from 'next/link'

export interface AProps {
  href: string
  className?: string
  content?: React.ReactNode
}

const A = (props: AProps & Partial<ChildrenProp>) => {
  return (
    <Link href={props.href}>
      <a className={props.className}>{props.content ?? props.children}</a>
    </Link>
  )
}

export default A
