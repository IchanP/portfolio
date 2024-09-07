export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 sm:p-8 md:p-20 pb-20 gap-8 sm:gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-4 sm:gap-8 row-start-2 items-center sm:items-start">
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl">Template</h1>
        </div>
      </main>
      <footer className="row-start-3 flex gap-4 sm:gap-6 flex-wrap items-center justify-center">
        <p className="text-sm sm:text-base">Template</p>
      </footer>
    </div>
  );
}
