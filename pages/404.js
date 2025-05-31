import Link from 'next/link'

export default function Custom404() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '1rem',
      textAlign: 'center'
    }}>
      <h1 style={{
        fontSize: '2rem',
        fontWeight: 'bold',
        marginBottom: '1rem'
      }}>404 - Page Not Found</h1>
      <p style={{
        marginBottom: '2rem',
        color: '#666'
      }}>Sorry, we couldn't find the page you were looking for.</p>
      <Link 
        href="/"
        className="inline-block bg-[#1a2642] hover:bg-[#2a3752] text-white px-8 py-4 text-lg rounded-md"
      >
        Return Home
      </Link>
    </div>
  );
} 