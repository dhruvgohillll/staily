import { motion } from "framer-motion";

const brands = [
  "AJIO",
  "Samsonite",
  "Hathway",
  "ToysRUs",
  "GUESS",
  "Netmeds",
  "Wonderfly",
];

export const TrustedBrands = () => {
  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-lg font-medium text-muted-foreground mb-10">
            Trusted by 100+ global brands
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
            {brands.map((brand, index) => (
              <motion.div
                key={brand}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="relative group"
              >
                <span className="text-lg lg:text-xl font-bold text-foreground/20 hover:text-foreground/40 transition-colors cursor-pointer tracking-wider">
                  {brand}
                </span>
                {index === 0 && (
                  <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Case study
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
