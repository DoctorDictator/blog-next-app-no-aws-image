const sql = require("better-sqlite3");
const db = sql("posts.db");

const Posts = [
  {
    title: "Exploring the Future of Artificial Intelligence",
    slug: "future-of-ai",
    image: "/images/artificial-intelligence.jpg",
    body: `
      Artificial Intelligence (AI) is transforming the world at an unprecedented pace, integrating seamlessly into our daily lives through virtual assistants, recommendation systems, and more. The future of AI promises even greater advancements, with potential breakthroughs in autonomous vehicles, healthcare, and environmental science. Self-driving cars, for instance, are being tested globally, aiming to reduce accidents caused by human error and enhance transportation efficiency. In healthcare, AI's ability to analyze vast datasets enables earlier and more accurate disease diagnoses, such as detecting cancer patterns in medical images that might elude human eyes. Personalized medicine, tailored to individual genetic profiles, is another exciting frontier.

      However, these advancements come with challenges. Job displacement is a significant concern, as AI could automate millions of jobs in sectors like manufacturing and customer service. This raises questions about economic adaptation and the need for new job creation or retraining programs. Privacy is another critical issue, as AI systems rely on extensive data collection, prompting debates about data security and ethical use. Ethical dilemmas also arise, such as determining responsibility in AI-driven decisions, like accidents involving autonomous vehicles.

      In education, AI can personalize learning experiences, adapting to each student's pace and needs. In environmental science, AI models can predict climate change impacts and suggest mitigation strategies. Space exploration benefits from AI-controlled rovers, enabling efficient exploration of distant planets. To harness these benefits, society must address ethical, privacy, and economic challenges proactively, ensuring AI development is inclusive and beneficial. By fostering responsible innovation, AI can enhance human potential, creating a future where technology and humanity coexist harmoniously.

      The road ahead requires collaboration between governments, industries, and communities to establish regulations that balance innovation with safety. Public awareness and education about AI's capabilities and limitations will also be crucial. As AI continues to evolve, its potential to solve complex global problems is immense, but so is the responsibility to use it wisely. This exciting journey into AI's future invites us all to participate in shaping a world where technology serves humanity's best interests.
    `,
    creator: "Alice Thompson",
    email: "alice.thompson@example.com",
  },
  {
    title: "The Joys of Urban Gardening",
    slug: "urban-gardening",
    image: "/images/gardening.jpg",
    body: `
      Urban gardening is a growing trend that brings nature into city life, offering both practical and emotional benefits. With limited space, urban dwellers are creatively transforming balconies, rooftops, and even vertical walls into lush green spaces. This practice not only provides fresh produce but also enhances mental well-being and fosters community connections. Starting an urban garden begins with assessing available space and sunlight. Containers, raised beds, or hydroponic systems are ideal for small areas, allowing you to grow herbs, vegetables, or flowers.

      Choosing the right plants is key. Herbs like basil and mint thrive in pots, while tomatoes and peppers adapt well to urban settings. Soil quality matters—use a nutrient-rich mix and ensure proper drainage to prevent root rot. Watering consistently, especially in hot climates, keeps plants healthy. Urban gardening also promotes sustainability by reducing reliance on store-bought produce, which often involves significant transportation emissions. Composting kitchen scraps further enhances eco-friendliness, creating a closed-loop system.

      Beyond practicality, gardening offers therapeutic benefits. Tending to plants reduces stress and provides a sense of accomplishment. Community gardens, increasingly popular in cities, encourage collaboration and knowledge-sharing among neighbors. Challenges include limited space, pollution, and time constraints, but solutions like vertical gardening and automated watering systems help. Urban gardening also supports biodiversity by attracting pollinators like bees, contributing to local ecosystems.

      Getting started is simple: begin with a few pots, choose easy-to-grow plants, and learn as you go. Online resources and local gardening groups provide valuable tips. Whether you're growing food or flowers, urban gardening transforms city living, offering a rewarding way to connect with nature and build a sustainable future.
    `,
    creator: "Ben Carter",
    email: "ben.carter@example.com",
  },
  {
    title: "Mastering Remote Work Productivity",
    slug: "remote-work-productivity",
    image: "/images/remote-work.jpg",
    body: `
      Remote work has become a staple for many, offering flexibility but also unique challenges in maintaining productivity. Creating a productive remote work environment starts with a dedicated workspace. A quiet, organized area with ergonomic furniture boosts focus and comfort. Establishing a routine is equally important—set specific work hours and stick to them to create boundaries between work and personal life. Tools like Trello or Asana help manage tasks, while communication platforms like Slack keep teams connected.

      Distractions are a common hurdle. Minimize them by silencing non-essential notifications and setting clear expectations with household members. Taking regular breaks, such as a short walk or stretching, prevents burnout and maintains energy levels. The Pomodoro technique, working in focused intervals, can enhance efficiency. Staying connected with colleagues through virtual meetings fosters collaboration and reduces isolation, a common issue in remote work.

      Technology plays a crucial role. A reliable internet connection and up-to-date software ensure smooth operations. Cybersecurity is also vital—use VPNs and secure passwords to protect sensitive data. Balancing work and well-being requires discipline; incorporate exercise and mindfulness practices into your day. Remote work offers freedom, but without structure, it can lead to procrastination or overworking.

      Employers can support remote workers by providing clear guidelines and resources, such as stipends for home office setups. Flexibility in schedules accommodates diverse needs, enhancing job satisfaction. As remote work evolves, mastering productivity involves adapting to new tools and strategies, ensuring both personal and professional growth in a dynamic work landscape.
    `,
    creator: "Clara Nguyen",
    email: "clara.nguyen@example.com",
  },
  {
    title: "The Rise of Sustainable Fashion",
    slug: "sustainable-fashion",
    image: "/images/fashion.jpg",
    body: `
      Sustainable fashion is reshaping the industry, addressing environmental and ethical concerns in clothing production. Fast fashion's environmental toll—water waste, pollution, and landfill overflow—has spurred demand for eco-friendly alternatives. Sustainable fashion emphasizes ethical sourcing, eco-conscious materials, and fair labor practices. Brands are adopting organic cotton, recycled polyester, and biodegradable fabrics to reduce their carbon footprint. Consumers play a key role by choosing quality over quantity and supporting ethical brands.

      Thrifting and upcycling are gaining popularity, extending the life of garments and reducing waste. Renting clothes for special occasions is another sustainable trend, minimizing the need for new purchases. Transparency in supply chains is crucial—brands that disclose their sourcing and production processes build trust. Certifications like Fair Trade and GOTS (Global Organic Textile Standard) guide consumers toward ethical choices.

      Challenges include higher costs and limited accessibility, but innovations like lab-grown leather and circular fashion models are making sustainability more viable. Education is key—understanding the impact of fashion choices empowers consumers to make a difference. By supporting local artisans and repairing clothes, individuals contribute to a more sustainable future. Sustainable fashion isn't just a trend; it's a movement toward a healthier planet and fairer industry.
    `,
    creator: "Diana Patel",
    email: "diana.patel@example.com",
  },
  {
    title: "Adventures in Solo Travel",
    slug: "solo-travel",
    image: "/images/travel.jpg",
    body: `
      Solo travel is a transformative experience, offering freedom, self-discovery, and adventure. Unlike group travel, solo trips allow you to set your own pace and explore destinations that resonate with you. Planning is essential—research destinations, accommodations, and local customs to ensure safety and enjoyment. Popular solo travel destinations include Japan for its safety and culture, New Zealand for its landscapes, and Iceland for its natural wonders.

      Safety is a priority. Share your itinerary with trusted contacts, stay in well-reviewed accommodations, and avoid risky areas. Technology, like navigation apps and translation tools, enhances the experience. Solo travel fosters independence, but it can also feel isolating. Joining group tours or staying in hostels encourages social connections with fellow travelers. Budgeting is crucial—prioritize experiences like local cuisine or cultural sites over luxury.

      The benefits are immense: solo travel builds confidence, encourages adaptability, and deepens cultural understanding. Challenges like loneliness or decision fatigue can arise, but they teach resilience. Documenting your journey through journaling or photography creates lasting memories. Solo travel is about embracing the unknown, discovering your strengths, and creating stories that inspire others to explore the world on their own terms.
    `,
    creator: "Ethan Brooks",
    email: "ethan.brooks@example.com",
  },
  {
    title: "The Science of Sleep Optimization",
    slug: "sleep-optimization",
    image: "/images/sleep.jpg",
    body: `
      Sleep is fundamental to health, yet many struggle to achieve quality rest. Optimizing sleep involves understanding its science and adopting habits that enhance restfulness. The sleep cycle, consisting of REM and non-REM stages, regulates physical and mental restoration. Adults need 7-9 hours nightly, but quality matters as much as quantity. A consistent sleep schedule aligns your circadian rhythm, improving sleep efficiency.

      Creating a sleep-friendly environment is key. Keep your bedroom dark, quiet, and cool—around 65°F is ideal. Limit screen time before bed, as blue light suppresses melatonin production. Diet also plays a role; avoid caffeine and heavy meals late in the day. Relaxation techniques, like meditation or reading, signal your body to wind down. Regular exercise improves sleep but avoid intense workouts close to bedtime.

      Sleep disorders, like insomnia or sleep apnea, require professional attention. Tracking sleep with apps or wearables provides insights into patterns and disturbances. Optimizing sleep enhances cognitive function, mood, and physical health, reducing risks of chronic conditions like obesity and heart disease. By prioritizing sleep hygiene, you invest in long-term well-being, unlocking the benefits of restorative rest.
    `,
    creator: "Fiona Lee",
    email: "fiona.lee@example.com",
  },
  {
    title: "The Art of Minimalist Living",
    slug: "minimalist-living",
    image: "/images/minimalism.jpg",
    body: `
      Minimalist living is about simplifying your life by focusing on what truly matters. It’s not just about decluttering physical spaces but also about reducing mental and emotional clutter. Start by assessing your possessions—keep items that serve a purpose or bring joy, and donate or recycle the rest. The KonMari method, popularized by Marie Kondo, is a practical approach to decluttering, emphasizing intentionality.

      Minimalism extends beyond possessions. Simplify your schedule by prioritizing meaningful activities and saying no to unnecessary commitments. Financial minimalism involves budgeting wisely, avoiding impulse purchases, and investing in experiences over things. Technology can be streamlined too—limit notifications and curate your digital consumption to reduce overwhelm.

      The benefits are profound: minimalism reduces stress, saves money, and fosters clarity. It encourages sustainable living by reducing consumption and waste. Challenges include societal pressure to accumulate and the emotional difficulty of letting go. Minimalist living is a personal journey—define what simplicity means to you and embrace it gradually for a more intentional, fulfilling life.
    `,
    creator: "Grace Kim",
    email: "grace.kim@example.com",
  },
  {
    title: "The Power of Mindfulness Meditation",
    slug: "mindfulness-meditation",
    image: "/images/meditation.jpg",
    body: `
      Mindfulness meditation is a practice that cultivates present-moment awareness, offering mental and physical benefits. Rooted in ancient traditions, it’s now backed by science for reducing stress, improving focus, and enhancing emotional resilience. To start, find a quiet space, sit comfortably, and focus on your breath. When thoughts arise, acknowledge them without judgment and return to your breath. Even 10 minutes daily can make a difference.

      Research shows mindfulness reduces cortisol levels, alleviating stress and anxiety. It improves cognitive functions like memory and concentration, making it valuable for students and professionals. Regular practice can also lower blood pressure and improve sleep quality. Apps like Headspace or Calm guide beginners, while group classes foster community. Challenges include maintaining consistency and managing wandering thoughts, but patience is key.

      Mindfulness extends beyond meditation—apply it to daily activities like eating or walking to enhance awareness. It fosters empathy and better relationships by encouraging active listening. While not a cure-all, mindfulness is a powerful tool for navigating life’s challenges with clarity and calm, promoting overall well-being.
    `,
    creator: "Henry Walsh",
    email: "henry.walsh@example.com",
  },
  {
    title: "Exploring Renewable Energy Solutions",
    slug: "renewable-energy",
    image: "/images/energy.jpg",
    body: `
      Renewable energy is critical for a sustainable future, reducing reliance on fossil fuels and combating climate change. Solar, wind, hydro, and geothermal energy are leading solutions, each with unique benefits. Solar panels convert sunlight into electricity, ideal for homes and businesses. Wind turbines harness wind energy, effective in open areas. Hydropower uses water flow, while geothermal taps Earth’s heat for consistent energy.

      Adoption is growing, driven by declining costs and government incentives. Solar and wind are now cost-competitive with traditional energy in many regions. However, challenges include intermittency—solar and wind depend on weather—and the need for efficient energy storage solutions like batteries. Infrastructure upgrades and land use concerns also pose hurdles.

      Individuals can contribute by installing solar panels, supporting green energy providers, or advocating for policies that promote renewables. Businesses are investing in renewable energy to reduce costs and emissions. Education and innovation are key to overcoming barriers, ensuring renewable energy powers a cleaner, greener future for generations to come.
    `,
    creator: "Isabella Cruz",
    email: "isabella.cruz@example.com",
  },
  {
    title: "The Benefits of Learning a New Language",
    slug: "learn-new-language",
    image: "/images/language.jpg",
    body: `
      Learning a new language opens doors to cultural understanding, career opportunities, and cognitive benefits. It enhances brain function, improving memory, problem-solving, and multitasking skills. Bilingualism may even delay cognitive decline in aging. Languages like Spanish, Mandarin, or French are popular due to their global reach, but any language offers rewards.

      Start with immersive methods—apps like Duolingo or Rosetta Stone make learning accessible. Practice speaking with native speakers through platforms like iTalki or language exchange meetups. Consistency is crucial; dedicate 15-30 minutes daily to build vocabulary and grammar. Watching movies or listening to music in the target language enhances listening skills and cultural knowledge.

      Challenges include time constraints and frustration with complex grammar, but persistence pays off. Learning a language fosters empathy by exposing you to different perspectives. It’s also a career asset, as multilingual employees are in demand in global industries. Whether for travel, work, or personal growth, learning a new language is a rewarding journey that enriches life.
    `,
    creator: "James Liu",
    email: "james.liu@example.com",
  },
];

db.prepare(
  `
   CREATE TABLE IF NOT EXISTS posts (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       slug TEXT NOT NULL UNIQUE,
       title TEXT NOT NULL,
       image TEXT NOT NULL,
       body TEXT NOT NULL,
       creator TEXT NOT NULL,
       email TEXT NOT NULL
    )
`
).run();

function initData() {
  const stmt = db.prepare(`
      INSERT INTO posts VALUES (
         null,
         @slug,
         @title,
         @image,
         @body,
         @creator,
         @email
      )
   `);

  for (const post of Posts) {
    stmt.run(post);
  }
}

initData();
