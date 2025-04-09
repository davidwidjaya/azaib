'use client';
import "@/src/styles/globals.scss";

export default function Login() {

  return (
    <main className='h-screen'>
      <div className="flex flex-col-reverse sm:flex-row h-full">
        {/* Left side */}
        <section className='flex-1 azaib-login-page__info-wrapper justify-center items-center text-center'>
          <span className="text-black text-2xl font-bold text-white mb-24">4 Alasan Ajaib Dipercaya 1 Juta++ Pengguna</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-93">
            <div className="bg-white"></div>
            <div className="bg-white"></div>
            <div className="bg-white"></div>
            <div className="bg-white"></div>
          </div>
          {/* <h2 className="text-2xl text-black">Left side</h2> */}
        </section>

        {/* Right side */}
        <section className='flex-1 bg-white'>
          <h2 className="text-2xl text-black">Right side</h2>
        </section>
      </div>
    </main>
  );
}
