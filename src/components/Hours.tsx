import { motion } from "framer-motion";
import { Clock, CheckCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Hours = () => {
  const { t } = useLanguage();

  // Monday-Friday: 07:00-12:00 & 13:00-17:00, Saturday: 08:00-12:00, Sunday: Closed
  const schedule = [
    { hours: "07:00 - 12:00, 13:00 - 17:00" }, // Monday
    { hours: "07:00 - 12:00, 13:00 - 17:00" }, // Tuesday
    { hours: "07:00 - 12:00, 13:00 - 17:00" }, // Wednesday
    { hours: "07:00 - 12:00, 13:00 - 17:00" }, // Thursday
    { hours: "07:00 - 12:00, 13:00 - 17:00" }, // Friday
    { hours: "08:00 - 12:00" }, // Saturday
    { hours: t.hours.closed }, // Sunday
  ];

  const todayIndex = [6, 0, 1, 2, 3, 4, 5][new Date().getDay()];

  return (
    <section id="horaires" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">
            {t.hours.label}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4">
            {t.hours.title}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-xl rounded-2xl border border-border bg-muted shadow-soft overflow-hidden"
        >
          <div className="flex items-center gap-3 border-b bg-primary/5 px-6 py-4">
            <Clock className="h-5 w-5 text-primary" />
            <span className="font-serif text-lg text-primary">
              {t.hours.header}
            </span>
          </div>
          <div className="divide-y">
            {schedule.map((item, i) => {
              const isToday = i === todayIndex;
              const isClosed = item.hours === t.hours.closed;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className={`px-6 py-4 flex justify-between items-center transition-colors ${
                    isToday ? "bg-primary/10" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {isToday && (
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    )}
                    <span
                      className={`text-sm ${
                        isToday ? "font-semibold text-primary" : "text-foreground"
                      }`}
                    >
                      {t.hours.days[i]}
                    </span>
                    {isToday && (
                      <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full">
                        {t.hours.today}
                      </span>
                    )}
                  </div>
                  <span
                    className={`text-sm font-medium ${
                      isClosed ? "text-muted-foreground" : "text-foreground"
                    }`}
                  >
                    {item.hours}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hours;
