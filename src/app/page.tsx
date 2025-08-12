import Image from "next/image"

export default function LaunchingSoonPage() {
  return (
    <main
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-cover bg-center text-white"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(50, 30, 20, 0.7), rgba(30, 50, 40, 0.7)), url('/images/launching-soon-background.png')`,
      }}
    >
      {/* Main content */}
      <div className="z-10 flex flex-col items-center text-center px-4">
        <div className="flex items-center space-x-2 mb-8">
          <Image
            src="/images/freelance-logo.png"
            alt="Freelance Logo"
            width={96} /* Changed from 48 to 96 */
            height={96} /* Changed from 48 to 96 */
            className="rounded-full"
          />
          <span className="text-4xl font-bold">Freelance</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">We&apos;re launching soon.</h1>
        <p className="text-xl md:text-2xl font-medium mb-8">Under Development</p>
        <p className="max-w-2xl text-lg md:text-xl leading-relaxed">
          We&apos;re putting the final touches on something special. freelancers, rentals, and more at your fingertips.
        </p>
      </div>

      {/* Decorative elements */}
      <Image
        src="/images/wavy-pattern.png"
        alt="Decorative wavy pattern"
        width={100}
        height={100}
        className="absolute top-[100px] left-[100px]"
      />
      <div
        className="absolute top-[200px] right-[150px] w-4 h-4 rounded-full"
        style={{ background: "radial-gradient(circle at center, #FF00FF, #8A2BE2)" }}
      />
      <div
        className="absolute bottom-[100px] left-[150px] w-3 h-3 rounded-full"
        style={{ background: "radial-gradient(circle at center, #00FFFF, #00BFFF)" }}
      />
      <div
        className="absolute bottom-[150px] right-[100px] w-2 h-2 rounded-full"
        style={{ background: "radial-gradient(circle at center, #FF4500, #FFD700)" }}
      />
    </main>
  )
}
