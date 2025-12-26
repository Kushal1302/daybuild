export default function Trust() {
  const stats = [
    { label: "Delivery Time", value: "24 Hours" },
    { label: "Happy Clients", value: "150+" },
    { label: "Satisfaction", value: "100%" },
    { label: "Support", value: "24/7" },
  ];

  return (
    <section className="border-y border-white/5 bg-black/40 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center border-r border-white/5 last:border-0">
              <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
              <p className="text-sm text-gray-500 uppercase tracking-widest font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}