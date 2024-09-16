"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to dashboard when the page is visited
    router.push('/dashboard');
  }, [router]);

  return null; // No need to render anything here
}
