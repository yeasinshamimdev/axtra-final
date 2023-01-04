import dynamic from 'next/dynamic'

const Index2 = dynamic(
  () => import('./home/content/index-2'),
  { ssr: false }
)
export default function Home2() {
    return (
        <Index2 mode={""} />
    )
}