import { redirect } from 'next/navigation'

export default function ProviderLoginRedirect() {
  redirect('https://provider.positivecheck.com/admin-new/login')
}
