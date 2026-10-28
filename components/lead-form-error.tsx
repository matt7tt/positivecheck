export function LeadFormError({ message }: { message: string }) {
  if (!message) return null
  return (
    <div role="alert" className="rounded-md border border-red-200 bg-red-50 p-4 text-sm text-red-800">
      <p>{message}</p>
      <a href="mailto:hello@positivecheck.com" className="mt-2 inline-block underline font-medium">Email Positive Check</a>
    </div>
  )
}
