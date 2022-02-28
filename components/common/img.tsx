import Image from 'next/image'

export interface ImgProps {
  src: string
  alt?: string
}

const Img = (props: ImgProps) => {
  return <Image src={props.src} alt={props.alt || ''} layout="fill" />
}

export default Img
