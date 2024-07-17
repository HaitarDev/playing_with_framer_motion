"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
const TABS = [
  {
    id: 1,
    title: "stress",
    desc: "Factor has been so helpful keeping me eating balanced meals rather than processed junk. After a long day at work I was so tempted to hit the drive-thru but I said....wait! My dinner will take 2 minutes to cook!!! And I gladly went home and felt good about my choices",
  },
  {
    id: 2,
    title: "money",
    desc: "Flavorful, real, healthy food!!! Worth every penny!!! I need convenience & portion control!!! I have tried so many meal plans, but my quest is over!!! LOVE, LOVE, LOVE Factor!!!",
  },
  {
    id: 3,
    title: "time",
    desc: "Factor foods are delicious convenient and healthy - I have lost 27 pounds using the Keto menu with more energy and all my dishes are very tasty - with many variations to choose from - so never boring - the cheesecake desserts are so delicious and refreshing and love my banana/strawberry and Tropical fruit smoothies daily!!",
  },
  {
    id: 4,
    title: "stress",
    desc: "stress Amazing customer service. The kind you don’t see anymore these days. Truly appreciated you resolving a situation outside of both of our control. Customer and advocate of your brand for life now because of it!",
  },
];

export default function Home() {
  const [tab, setTab] = useState<number>(0);

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="w-1/3 flex flex-col items-center gap-4 bg-violet-400 rounded-md p-4">
        <div className="p-2 flex  gap-4 items-center">
          <p className="text-2xl ">We save you serious</p>
          <div className="border-red-100 border-b-4 text-xl w-20 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                initial={{ x: -200 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.4 }}
                exit={{ x: -200 }}
                key={tab}
                className={"mx-2 w-full"}
              >
                {TABS[tab].title}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={tab} // key here is important to make react know there is a new div was rendered
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
          >
            {TABS[tab].desc}
          </motion.div>
        </AnimatePresence>
        <div className="flex gap-2">
          {TABS.map((tab, i) => {
            return (
              <div key={tab.id}>
                <div
                  onClick={() => setTab(i)}
                  className="w-4 h-4 rounded-full bg-orange-300 border-2 cursor-pointer hover:scale-125 duration-200"
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
