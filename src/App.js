import Particles from "react-particles"
import {loadFireworksPreset} from "tsparticles-preset-fireworks"
import { Typewriter } from "react-simple-typewriter"
import { useState } from "react"
import Countdown from "react-countdown"

function App() {
  // state
  const [newYearMessage, setNewYearMessage] = useState(["Bye 2023!"])

  // inisiasi partikel
  const particleInitialization = async(engine) => {
    await loadFireworksPreset(engine)
  }

  // fungsi untuk menghitung mundur waktu sebelum tahun baru
  function timeLeft() {
    // variable untuk mengatur posisi tahun baru itu tanggal berapa
    const newYearDate = new Date("January 1, 2024 00:00:00").getTime()
    // variable waktu sekarang
    const nowDate = new Date().getTime()
    // perhitungan selisih sekarang dengan tahun baru
    const remainingTime = newYearDate - nowDate
    return remainingTime
  }

  return (
    <>
      <Particles 
        init={particleInitialization}
        options={{ preset: "fireworks" }}
      />
      <div className="flex flex-col justify-center items-center min-h-screen gap-4">
      <span className="text-white text-4xl font-bold px-4 z-50">
          Daffa Budi Prasetya
        </span>
        <span className="text-white text-2xl font-bold px-4 z-50">
          Mengucapkan
        </span>
        <span className="text-white text-4xl font-bold px-4 z-50">
          <Typewriter 
            words={newYearMessage} 
            loop={false}
            cursorStyle={"✨"}
            typeSpeed={20}
            />
        </span>

        <div className="z-50 text-white">
          <Countdown date={Date.now() + timeLeft()} onComplete={() => setNewYearMessage(["Selamat", "Tahun", "Baru", "Happy New Year 2024!✨"])}/>
        </div>
      </div>
    </>
  );
}

export default App;
