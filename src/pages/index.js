import dynamic from 'next/dynamic'

const Index1 = dynamic(
  () => import('./home/content/index-1'),
  { ssr: false }
)
export default function Home() {
 
  return (
    <Index1 mode={""} />
  )
}
