export default function Pricing() {
  const plans = [
    {
      name: "Landing Page",
      price: "3,999",
      desc: "Perfect for personal portfolios.",
      features: [
        "1 Page Website",
        "Free Hosting (1 Year)",
        "Mobile Responsive",
        "Contact Form",
      ],
    },
    {
      name: "Business",
      price: "6,999",
      popular: true,
      desc: "For startups and small agencies.",
      features: [
        "5 Page Website",
        "Admin Dashboard",
        "SEO Optimization",
        "WhatsApp Chat Integration",
        "Google Analytics",
      ],
    },
    {
      name: "E-Commerce",
      price: "11,999",
      desc: "Sell products online fast.",
      features: [
        "Up to 50 Products",
        "Payment Gateway",
        "Order Management",
        "Customer Login",
        "1 Month Support",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Transparent Pricing
          </h2>
          <p className="text-gray-400">
            No hidden fees. You pay, we build, you launch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative p-8 rounded-2xl border transition-all duration-300 group
              ${
                plan.popular
                  ? "bg-gray-900 border-blue-500 shadow-2xl shadow-blue-900/20 scale-105 z-10"
                  : "bg-black border-gray-800 hover:border-gray-700"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">
                  POPULAR
                </div>
              )}

              <h3 className="text-xl font-bold text-white">{plan.name}</h3>
              <p className="text-gray-400 text-sm mt-2 mb-6">{plan.desc}</p>

              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-lg text-gray-400">₹</span>
                <span className="text-4xl font-extrabold text-white">
                  {plan.price}
                </span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((f, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-gray-300 text-sm"
                  >
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                        plan.popular
                          ? "bg-blue-500/20 text-blue-400"
                          : "bg-gray-800 text-gray-400"
                      }`}
                    >
                      ✓
                    </div>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-xl font-bold text-sm uppercase tracking-wider transition-all
                ${
                  plan.popular
                    ? "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/25"
                    : "bg-white text-black hover:bg-gray-200"
                }`}
              >
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
