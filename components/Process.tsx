export default function Process() {
  const steps = [
    "Submit Your Details",
    "We Build in 24 Hours",
    "Your Site Goes Live",
  ];
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-16">
      {steps.map((s, i) => (
        <div key={i} className="bg-gray-900 p-8 rounded-lg text-center">
          <h3 className="text-xl font-semibold">{s}</h3>
        </div>
      ))}
    </section>
  );
}
