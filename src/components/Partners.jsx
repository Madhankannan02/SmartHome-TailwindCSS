export function Partners() {
  return (
    <section aria-labelledby="partners" className="text-center grid gap-8 place-items-center">
      <div className="grid gap-4">
        <h2 id="partners" className="text-4xl font-bold text-amber-400">Our Partners</h2>
        <p className="w-full max-w-lg">
          We've partnered with hundreds of smart home brands to help you create a smart home that fits your needs and doesn't lock you in.
        </p>
      </div>

      {/* Responsive GRID layout */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 max-w-6xl mx-auto">
        {[
          "partner1.svg",
          "partner2.svg",
          "partner3.svg",
          "partner4.svg",
          "partner5.svg",
          "partner6.svg",
          "partner7.svg",
        ].map((img, i) => (
          <div
            key={i}
            className="p-4 bg-white dark:bg-white shadow-md dark:shadow-xl rounded-md flex items-center justify-center"
          >
            <img
              src={`./assets/images/${img}`}
              alt={`Partner ${i + 1}`}
              className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
