"use client";
import { useForm } from "react-hook-form";
import z from "zod";

const leadSchema = z.object({
  name: z.string().min(2),
  business: z.string().min(2),
  whatsapp: z.string().min(2),
});

export default function LeadForm() {
  const { register, handleSubmit } = useForm<z.infer<typeof leadSchema>>({
    defaultValues: {
      name: "",
      business: "",
      whatsapp: "",
    },
  });
  const onSubmit = (data: z.infer<typeof leadSchema>) => console.log(data);

  return (
    <section id="lead" className="py-24 px-6">
      <div className="max-w-2xl mx-auto bg-gradient-to-b from-gray-900 to-black p-10 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
        {/* Glow effect inside form */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[80px]" />

        <div className="relative z-10 text-center mb-10">
          <h2 className="text-3xl font-bold">Ready to Launch?</h2>
          <p className="text-gray-400 mt-2">
            Fill this out, we start building immediately.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 relative z-10"
        >
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-wider text-gray-500 font-semibold ml-1">
              Full Name
            </label>
            <input
              {...register("name")}
              className="w-full p-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all text-white placeholder-gray-600"
              placeholder="John Doe"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wider text-gray-500 font-semibold ml-1">
                Business Type
              </label>
              <input
                {...register("business")}
                className="w-full p-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all text-white placeholder-gray-600"
                placeholder="e.g. Real Estate"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wider text-gray-500 font-semibold ml-1">
                WhatsApp Number
              </label>
              <input
                {...register("whatsapp")}
                className="w-full p-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all text-white placeholder-gray-600"
                placeholder="+91 98765..."
              />
            </div>
          </div>

          <button className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 py-4 rounded-xl font-bold text-lg shadow-lg shadow-blue-500/25 transition-all mt-4">
            🚀 Start My Build
          </button>
        </form>
      </div>
    </section>
  );
}
