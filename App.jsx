import { useEffect, useState } from 'react';

export default function App() {
  const [loading, setLoading] = useState(true);

  const leaders = ['Cirasy','Rap','Bally','Arch','Fatz','Fajar','Chael'];
  const tiktokLink = 'https://www.tiktok.com/@margamda2023?_r=1&_t=ZS-96B5PKi3Y6m';
  const whatsappLink = 'https://chat.whatsapp.com/CafvZG2QXLXHRjbhPNlVf1';

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleJoin = () => {
    window.open(tiktokLink, '_blank');
    setTimeout(() => {
      const lanjut = window.confirm('Sudah follow TikTok Marga MDA?');
      if (lanjut) window.open(whatsappLink, '_blank');
    }, 2000);
  };

  if (loading) {
    return (
      <div className="h-screen bg-black flex items-center justify-center">
        <audio autoPlay>
          <source src="/intro.mp3" type="audio/mpeg" />
        </audio>
        <video autoPlay muted loop className="w-full h-full object-cover">
          <source src="/intro.mp4" type="video/mp4" />
        </video>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="h-screen flex flex-col items-center justify-center text-center px-6">
        <img src="/logo.png" alt="logo" className="w-40 h-40 rounded-3xl mb-6" />
        <h1 className="text-6xl font-bold mb-4">Marga MDA</h1>
        <p>Brotherhood Never Ends</p>
        <button onClick={handleJoin}>Join Clan</button>
      </section>

      <section>
        <h2>Leader & Admin</h2>
        {leaders.map((leader) => <div key={leader}>{leader}</div>)}
      </section>
    </div>
  );
}