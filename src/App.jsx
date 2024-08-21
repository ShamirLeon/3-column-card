function App() {
  const items = [
    {
      id: 1,
      name: "Sedans",
      text: "Choose a sedan for its affordability and excellent fuel economy. Ideal fro cruising in te city or on your next road trip.",
      color: "bg-Bright-orange",
      colorText: "text-Bright-orange",
    },
    {
      id: 2,
      name: "Suvs",
      text: "Take a SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
      color: "bg-Dark-cyan",
      colorText: "text-Dark-cyan",
    },
    {
      id: 3,
      name: "Luxury",
      text: "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
      color: "bg-Very-dark-cyan",
      colorText: "text-Very-dark-cyan",
    },
  ];

  return (
    <>
      <div className="w-[100vw] h-[100vh] grid place-items-center bg-Light-white p-8">
        <div className="sm:grid sm:grid-flow-col grid-cols-3">
          {items.map((item) => (
            <div
              key={item.id}
              className={`item max-w-[350px] h-[500px] p-12 text-white ${item.color}`}
              style={{}}
            >
              <img
                src={`./images/icon-${item.name.toLowerCase()}.svg`}
                alt={item.name}
                className="mb-10 w-20"
              />
              <div className="relative h-[calc(100%-3rem)]">
                <h1 className="font-BigShoulders font-bold text-4xl tracking-wide mb-8">
                  {item.name.toUpperCase()}
                </h1>
                <p className="font-lexend font-light mb-8">{item.text}</p>
                <button
                  className={`absolute bottom-12 py-3 px-8 rounded-full bg-white text-sm font-lexend font-bold ${item.colorText}`}
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
