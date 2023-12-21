import ContactMe from '@/components/home/ContactMe'
import LearnMore from '@/components/home/LearnMore'
import WelcomeBanner from '@/components/home/WelcomeBanner'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="w-full flex flex-col">
      <WelcomeBanner />
      <LearnMore />
      <ContactMe />
    </main>
  )
}
