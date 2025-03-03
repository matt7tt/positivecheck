import { redirect } from 'next/navigation';

export default function CatchAllPage() {
  // Redirect to the 404 page in the pages directory
  redirect('/404');
} 