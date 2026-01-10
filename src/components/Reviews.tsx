import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Tririos",
    text: "Amazing product! Great productivity boost.",
    avatar: "T",
  },
  {
    name: "Abhay G",
    text: "Staily platform excels in enhancing our customer experience through easy to setup generative AI chatbot. Their recent pricing reduction really helps our startup business.",
    avatar: "A",
  },
  {
    name: "Leonardo S.",
    text: "After using it for a while, I can mention: many customization options, straightforward setup process, and seamless integration with various data sources.",
    avatar: "L",
  },
  {
    name: "Will Wei",
    text: "Finally something that doesn't just give generic responses but actually feels like a knowledgeable team member. 🎯",
    avatar: "W",
  },
  {
    name: "Nayan Lathiya",
    text: "It has made developing, training, and deploying my own chatbot/AI assistant very easy. The development platform is easy to setup and use.",
    avatar: "N",
  },
  {
    name: "Hitendra Rathore",
    text: "Amazing AI tool and a must-have on your website.",
    avatar: "H",
  },
];

export const Reviews = () => {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              People who love us
            </h2>
            <p className="text-lg text-muted-foreground">
              Hear what our users say. Real experiences, real impact
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="bg-card rounded-2xl p-6 border border-border card-shadow hover:card-shadow-lg transition-all cursor-pointer group"
              >
                <motion.div 
                  className="flex gap-1 mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        delay: index * 0.1 + 0.3 + i * 0.05,
                        type: "spring",
                        stiffness: 200
                      }}
                    >
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    </motion.div>
                  ))}
                </motion.div>
                <motion.p 
                  className="text-sm text-foreground mb-4 line-clamp-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                >
                  {review.text}
                </motion.p>
                <motion.div 
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  <motion.div 
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-sm font-bold text-primary">{review.avatar}</span>
                  </motion.div>
                  <span className="font-medium text-foreground">{review.name}</span>
                </motion.div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center">
            <a href="#" className="text-primary font-medium hover:underline">
              See all reviews →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
