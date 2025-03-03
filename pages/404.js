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
      <a 
        href="/"
        style={{
          padding: '0.75rem 1.5rem',
          backgroundColor: '#1a2642',
          color: 'white',
          borderRadius: '0.375rem',
          textDecoration: 'none'
        }}
      >
        Return Home
      </a>
    </div>
  );
} 