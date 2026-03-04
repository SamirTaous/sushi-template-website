import { redirect } from 'next/navigation'
import { DEFAULT_BRAND } from '@/lib/brand-registry'

export default function Home() {
  // Redirect to default brand
  redirect(`/${DEFAULT_BRAND}`)
}
