// =================================================================
// 1. КОНСТАНТИ ТА ЕЛЕМЕНТИ DOM
// =================================================================
const burger = document.getElementById('burger');
const nav = document.getElementById('primary-nav');
const langButtons = document.querySelectorAll('.lang-btn');
const navLinks = document.querySelectorAll('.nav-list a');
const sections = document.querySelectorAll('main section[id]');
const contactForm = document.getElementById('contactForm');

// =================================================================
// 2. ОБ'ЄКТ ЛОКАЛІЗАЦІЇ (LOCALES)
// =================================================================
const LOCALES = {
  uk: {
    'site.title': 'Adwinitadwin — Frontend Розробник',
    'site.description': 'Андрій Шміло — Senior Frontend-розробник. Спеціалізація на інтерактивних веб-досвідах, 3D та високопродуктивних інтерфейсах (React, Next.js, WebGL).',
    'nav.home': 'Головна', 'nav.portfolio': 'Портфоліо', 'nav.services': 'Послуги', 'nav.about': 'Про мене', 'nav.blog': 'Блог', 'nav.faq': 'FAQ', 'nav.reviews': 'Відгуки', 'nav.contact': 'Контакти',
    'home.title': 'Привіт — я Андрій Шміло',
    'home.lead': 'Я створюю інтерактивні веб-досвіди, високопродуктивні інтерфейси та 3D-простори. **Код, що працює, як мистецтво.**',
    'home.viewPortfolio': 'Переглянути мої проєкти',
    'portfolio.title': 'Портфоліо. Вибрані Проєкти',
    'portfolio.subtitle': 'Демонстрація моїх ключових навичок: від високопродуктивних SPA до інтерактивних 3D-рішень та Web3-додатків.',
    'project1.title': 'React SPA: E-commerce Платформа', 'project1.desc': 'Високопродуктивний односторінковий додаток з React, Redux та REST API. Оптимізований UX/UI. (E-commerce)',
    'project2.title': 'Next.js: SSR Маркетплейс', 'project2.desc': 'Рішення для електронної комерції з Server-Side Rendering (SSR) на Next.js. Максимальна швидкість завантаження.',
    'project3.title': 'Vue.js: Аналітичний Дашборд', 'project3.desc': 'Складна адмін-панель для візуалізації великих даних. Створено на Vue.js з використанням D3.js та Chart.js.',
    'project4.title': 'WebGL (Three.js): 3D-Конфігуратор', 'project4.desc': 'Інтерактивний 3D-конфігуратор продукту, створений за допомогою Three.js та WebGL. (Візуалізація)',
    'project5.title': 'Web3 DApp: NFT-Галерея', 'project5.desc': 'Децентралізований додаток (DApp) з інтеграцією Web3.js та Metamask. (Blockchain)',
    'project6.title': 'Pure CSS: Інтерактивний Лендинг', 'project6.desc': 'Висока продуктивність завдяки оптимізованим CSS-анімаціям та переходам. (Промо-сайт)',
    'services.title': 'Мої Професійні Послуги', 'services.subtitle': 'Я зосереджений на створенні комплексних Frontend-рішень, що забезпечують високу швидкість та залученість користувачів. Тут інновації, якість та надійність.',
    'service1.title': 'Frontend Development (SPA/MPA)', 'service1.desc': 'Розробка швидких та масштабованих інтерфейсів на базі **React, Next.js, Vue.js** та TypeScript.',
    'service2.title': '3D & WebGL Експерименти', 'service2.desc': 'Створення захоплюючих інтерактивних 3D-досвідів, віртуальних турів та конфігураторів (**Three.js, Babylon.js**).',
    'service3.title': 'Animations & Performance UI', 'service3.desc': 'Розробка складних, але продуктивних CSS/JS анімацій, перехідних ефектів та мікроінтеракцій (**GSAP**).',
    'service4.title': 'Оптимізація та Core Web Vitals', 'service4.desc': 'Аудит та покращення існуючих проєктів. Підвищення швидкості завантаження та SEO-показників.',
    'service5.title': 'Web3 & Blockchain Frontend', 'service5.desc': 'Створення інтерфейсів для DApps, NFT-проєктів та інтеграція крипто-гаманців (**Ethers.js, Web3.js**).',
    'service6.title': 'Тестування та Доступність (A11y)', 'service6.desc': 'Забезпечення високої доступності (WCAG) та написання юніт/інтеграційних тестів (**Jest, Cypress**).',
    'about.title': 'Про Андрія Шміло',
    'about.lead': 'Я — Senior Frontend-розробник з 5+ роками досвіду, що прагне поєднувати технічну досконалість із візуальною естетикою. Моя мета — створювати веб-досвіди, які є не тільки функціональними, але й незабутніми.',
    'about.paragraph1': 'Моя пристрасть полягає в перетворенні складних концепцій дизайну на чистий, ефективний та кросбраузерний код. Я майстер у всьому, що стосується користувацького інтерфейсу: від чистого HTML/CSS до складних архітектур Redux/Zustand у React-додатках. Я гарантую, що кожен піксель працює ідеально, а код легко підтримується.',
    'about.paragraph2': 'Я постійно вивчаю нові інструменти — від Web Assembly до останніх можливостей CSS. Вважаю, що найкращий код — це чистий, протестований та доступний код. Я активно використовую методології Agile та Scrum для забезпечення прозорого та ефективного процесу розробки.',
    'about.skillsTitle': 'Ключові Технічні Навички',
    'blog.title': 'Блог. Технічні Нотатки та Статті', 'blog.subtitle': 'Мої думки про останні тренди у Frontend, поради щодо продуктивності та поглиблені гайди по WebGL/React/TypeScript.',
    'blog1.title': 'React 19: Що Нового для Продуктивності?', 'blog1.desc': 'Поглиблений аналіз нових можливостей React і того, як вони вплинуть на швидкість завантаження ваших SPA. Розбір Concurrent Mode та Server Components.',
    'blog2.title': 'Секрети CSS Grid для Адаптивного Дизайну', 'blog2.desc': 'Практичний гайд про те, як використовувати CSS Grid для створення складних адаптивних макетів без зайвого JavaScript. Поради для Mobile-First розробки.',
    'blog3.title': 'TypeScript та Frontend: Чому це must-have?', 'blog3.desc': 'Огляд переваг використання TypeScript у великих React-проєктах, як він підвищує якість коду та прискорює рефакторинг. (NEW)',
    'blog4.title': 'Налаштування оточення WebGL з Three.js + Vite', 'blog4.desc': 'Покроковий гайд із швидкого налаштування сучасного 3D-проєкту для веб за допомогою Three.js та інструментів Vite. (NEW)',
    'faq.title': 'Часті Запитання (FAQ)', 'faq.subtitle': 'Ось відповіді на найпоширеніші питання щодо мого досвіду та процесу роботи.',
    'faq1.q': 'З якими ключовими технологіями ви працюєте?', 'faq1.a': 'Основний стек: **JavaScript (ES6+), TypeScript, React.js (Next.js), Vue.js, Three.js/WebGL, HTML5, CSS3 (SASS/Tailwind).**',
    'faq2.q': 'Скільки часу займає розробка типового проєкту?', 'faq2.a': 'Це залежить від складності. Типовий корпоративний лендинг займає 2-4 тижні. Великий SPA/маркетплейс може зайняти 3-6 місяців. Обговорюємо деталі на першій консультації.',
    'faq3.q': 'Як відбувається процес співпраці?', 'faq3.a': '1. Обговорення ідеї. 2. Прототипування та дизайн. 3. Активна розробка (Agile/Scrum). 4. Тестування та запуск. 5. Підтримка та оптимізація.',
    'faq4.q': 'Чи оптимізуєте ви сайти для мобільних пристроїв?', 'faq4.a': 'Так, кожен проєкт створюється за принципом **Mobile-First** та проходить тестування на продуктивність (Core Web Vitals).',
    'reviews.title': 'Відгуки Клієнтів та Партнерів', 'reviews.subtitle': 'Що про мене говорять компанії, з якими я мав честь працювати.',
    'review1.text': 'Андрій не просто розробник, він — архітектор інтерфейсів. Його React-рішення для нашого SaaS-продукту збільшило швидкість завантаження на 40% та значно покращило оцінку Core Web Vitals. Це був чистий, тестований та високоякісний код.', 'review1.author': '- Іван К., CEO TechSolutions (Лондон)',
    'review2.text': 'Ми потребували унікального 3D-ефекту на головній сторінці для промо-кампанії. Андрій реалізував його на WebGL ідеально, зберігши при цьому високу частоту кадрів навіть на старих пристроях. Це був найкращий інтерактивний елемент, який ми коли-небудь мали.', 'review2.author': '- Ольга М., Project Lead, Digital Agency (Київ)',
    'review3.text': 'Шукали фахівця, який добре розуміється на Next.js та Server Components. Андрій швидко інтегрувався в команду та забезпечив миттєве завантаження критичних сторінок нашого маркетплейсу. Результат перевершив очікування.', 'review3.author': '- Дмитро С., CTO EcomSpace (Берлін)',
    'review4.text': 'Андрій допоміг нам пройти аудит доступності (A11y) та виправити ключові помилки. Його знання стандартів WCAG та вміння працювати з семантичним HTML є безцінним. Дуже рекомендую його для корпоративних проєктів.', 'review4.author': '- Анна Л., Head of Product, FinTech Startup (Варшава)',
    'contact.title': 'Зв\'яжіться зі Мною', 'contact.subtitle': 'Готові обговорити ваш наступний проєкт, інтерактивний експеримент або співпрацю? Напишіть мені, і я відповім протягом 24 годин.',
    'contact.send': 'Відправити Повідомлення',
    'contact.namePlaceholder': 'Ваше ім\'я', 'contact.emailPlaceholder': 'Ваш Email', 'contact.messagePlaceholder': 'Ваше повідомлення',
    'alert.fillFields': 'Заповніть всі поля!', 'alert.invalidEmail': 'Некоректний email', 'alert.success': 'Дякую! Повідомлення прийнято. Я зв\'яжуся з вами найближчим часом.'
  },
  en: { /* ... (Англійські переклади) ... */
    'site.title': 'Adwinitadwin — Frontend Developer',
    'site.description': 'Andrey Shmylo — Senior Frontend Developer. Specializing in interactive web experiences, 3D, and high-performance interfaces (React, Next.js, WebGL).',
    'nav.home': 'Home', 'nav.portfolio': 'Portfolio', 'nav.services': 'Services', 'nav.about': 'About Me', 'nav.blog': 'Blog', 'nav.faq': 'FAQ', 'nav.reviews': 'Reviews', 'nav.contact': 'Contact',
    'home.title': 'Hi — I\'m Andrey Shmylo',
    'home.lead': 'I create interactive web experiences, high-performance interfaces, and 3D spaces. **Code that works like art.**',
    'home.viewPortfolio': 'View My Projects',
    'portfolio.title': 'Portfolio. Selected Works',
    'portfolio.subtitle': 'Showcasing my key skills: from high-performance SPAs to interactive 3D solutions and Web3 applications.',
    'project1.title': 'React SPA: E-commerce Platform', 'project1.desc': 'High-performance Single Page Application using React, Redux, and REST API. Optimized UX/UI. (E-commerce)',
    'project2.title': 'Next.js: SSR Marketplace', 'project2.desc': 'E-commerce solution with Server-Side Rendering (SSR) on Next.js. Maximum loading speed.',
    'project3.title': 'Vue.js: Analytics Dashboard', 'project3.desc': 'Complex admin panel for visualizing large data. Built with Vue.js using D3.js and Chart.js.',
    'project4.title': 'WebGL (Three.js): 3D Configurator', 'project4.desc': 'An interactive 3D product configurator built using Three.js and WebGL. (Visualization)',
    'project5.title': 'Web3 DApp: NFT Gallery', 'project5.desc': 'Decentralized Application (DApp) with Web3.js and Metamask integration. (Blockchain)',
    'project6.title': 'Pure CSS: Interactive Landing Page', 'project6.desc': 'High performance thanks to optimized CSS animations and transitions. (Promo Site)',
    'services.title': 'My Professional Services', 'services.subtitle': 'I focus on creating comprehensive Frontend solutions that ensure high speed and user engagement. Innovation, quality, and reliability.',
    'service1.title': 'Frontend Development (SPA/MPA)', 'service1.desc': 'Development of fast and scalable interfaces based on **React, Next.js, Vue.js** and TypeScript.',
    'service2.title': '3D & WebGL Experiments', 'service2.desc': 'Creating immersive interactive 3D experiences, virtual tours, and configurators (**Three.js, Babylon.js**).',
    'service3.title': 'Animations & Performance UI', 'service3.desc': 'Developing complex yet performant CSS/JS animations, transition effects, and micro-interactions (**GSAP**).',
    'service4.title': 'Optimization & Core Web Vitals', 'service4.desc': 'Auditing and improving existing projects. Boosting load speed and SEO metrics.',
    'service5.title': 'Web3 & Blockchain Frontend', 'service5.desc': 'Creating interfaces for DApps, NFT projects, and crypto wallet integration (**Ethers.js, Web3.js**).',
    'service6.title': 'Testing & Accessibility (A11y)', 'service6.desc': 'Ensuring high accessibility (WCAG) and writing unit/integration tests (**Jest, Cypress**).',
    'about.title': 'About Andrey Shmylo',
    'about.lead': 'I am a Senior Frontend Developer with 5+ years of experience, aiming to blend technical excellence with visual aesthetics. My goal is to create web experiences that are not only functional but also memorable.',
    'about.paragraph1': 'My passion lies in transforming complex design concepts into clean, efficient, and cross-browser code. I am proficient in everything related to the user interface: from clean HTML/CSS to complex Redux/Zustand architectures in React applications. I ensure every pixel works perfectly and the code is easily maintainable.',
    'about.paragraph2': 'I constantly explore new tools—from Web Assembly to the latest CSS capabilities. I believe the best code is clean, tested, and accessible code. I actively use Agile and Scrum methodologies to ensure a transparent and efficient development process.',
    'about.skillsTitle': 'Key Technical Skills',
    'blog.title': 'Blog. Technical Notes & Articles', 'blog.subtitle': 'My thoughts on the latest Frontend trends, performance tips, and in-depth guides on WebGL/React/TypeScript.',
    'blog1.title': 'React 19: What\'s New for Performance?', 'blog1.desc': 'An in-depth analysis of new React features and how they will affect the loading speed of your SPAs. Concurrent Mode and Server Components breakdown.',
    'blog2.title': 'Secrets of CSS Grid for Adaptive Design', 'blog2.desc': 'A practical guide on how to use CSS Grid to create complex adaptive layouts without excessive JavaScript. Tips for Mobile-First development.',
    'blog3.title': 'TypeScript in Frontend: Why is it a must-have?', 'blog3.desc': 'An overview of the benefits of using TypeScript in large React projects, how it improves code quality and speeds up refactoring. (NEW)',
    'blog4.title': 'Setting up a WebGL Environment with Three.js + Vite', 'blog4.desc': 'A step-by-step guide to quickly setting up a modern 3D project for the web using Three.js and Vite tooling. (NEW)',
    'faq.title': 'Frequently Asked Questions (FAQ)', 'faq.subtitle': 'Here are answers to the most common questions about my experience and workflow.',
    'faq1.q': 'What key technologies do you work with?', 'faq1.a': 'Primary stack: **JavaScript (ES6+), TypeScript, React.js (Next.js), Vue.js, Three.js/WebGL, HTML5, CSS3 (SASS/Tailwind).**',
    'faq2.q': 'How long does a typical project take?', 'faq2.a': 'It depends on complexity. A typical corporate landing page takes 2-4 weeks. A large SPA/marketplace can take 3-6 months. We discuss details during the first consultation.',
    'faq3.q': 'What is the collaboration process like?', 'faq3.a': '1. Idea discussion. 2. Prototyping and design. 3. Active development (Agile/Scrum). 4. Testing and launch. 5. Support and optimization.',
    'faq4.q': 'Do you optimize websites for mobile devices?', 'faq4.a': 'Yes, every project is created using a **Mobile-First** approach and undergoes performance testing (Core Web Vitals).',
    'reviews.title': 'Client and Partner Testimonials', 'reviews.subtitle': 'What the companies I\'ve had the pleasure of working with say about me.',
    'review1.text': 'Andrey is not just a developer, he is an interface architect. His React solution for our SaaS product increased load speed by 40% and significantly improved Core Web Vitals score. The code was clean, tested, and high-quality.', 'review1.author': '- Ivan K., CEO TechSolutions (London)',
    'review2.text': 'We needed a unique 3D effect on the main page for a promo campaign. Andrey implemented it perfectly with WebGL, maintaining a high frame rate even on older devices. It was the best interactive element we\'ve ever had.', 'review2.author': '- Olga M., Project Lead, Digital Agency (Kyiv)',
    'review3.text': 'We were looking for an expert who understands Next.js and Server Components well. Andrey quickly integrated into the team and ensured instant loading of critical pages on our marketplace. The result exceeded expectations.', 'review3.author': '- Dmytro S., CTO EcomSpace (Berlin)',
    'review4.text': 'Andrey helped us pass the accessibility audit (A11y) and fix key errors. His knowledge of WCAG standards and ability to work with semantic HTML is invaluable. Highly recommend him for corporate projects.', 'review4.author': '- Anna L., Head of Product, FinTech Startup (Warsaw)',
    'contact.title': 'Contact Me', 'contact.subtitle': 'Ready to discuss your next project, interactive experiment, or collaboration? Send me a message, and I will reply within 24 hours.',
    'contact.send': 'Send Message',
    'contact.namePlaceholder': 'Your Name', 'contact.emailPlaceholder': 'Your Email', 'contact.messagePlaceholder': 'Your Message',
    'alert.fillFields': 'Please fill in all fields!', 'alert.invalidEmail': 'Invalid email address', 'alert.success': 'Thank you! Message received. I will contact you shortly.'
  },
  ru: { /* ... (Російські переклади) ... */
    'site.title': 'Adwinitadwin — Frontend Разработчик',
    'site.description': 'Андрей Шмило — Senior Frontend-разработчик. Специализация на интерактивных веб-опытах, 3D и высокопроизводительных интерфейсах (React, Next.js, WebGL).',
    'nav.home': 'Главная', 'nav.portfolio': 'Портфолио', 'nav.services': 'Услуги', 'nav.about': 'Обо мне', 'nav.blog': 'Блог', 'nav.faq': 'FAQ', 'nav.reviews': 'Отзывы', 'nav.contact': 'Контакты',
    'home.title': 'Привет — я Андрей Шмило',
    'home.lead': 'Я создаю интерактивные веб-опыты, высокопроизводительные интерфейсы и 3D-пространства. **Код, работающий как искусство.**',
    'home.viewPortfolio': 'Посмотреть мои проекты',
    'portfolio.title': 'Портфолио. Избранные Проекты',
    'portfolio.subtitle': 'Демонстрация моих ключевых навыков: от высокопроизводительных SPA до интерактивных 3D-решений и Web3-приложений.',
    'project1.title': 'React SPA: E-commerce Платформа', 'project1.desc': 'Высокопроизводительное одностраничное приложение с React, Redux и REST API. Оптимизированный UX/UI. (E-commerce)',
    'project2.title': 'Next.js: SSR Маркетплейс', 'project2.desc': 'Решение для электронной коммерции с Server-Side Rendering (SSR) на Next.js. Максимальная скорость загрузки.',
    'project3.title': 'Vue.js: Аналитический Дашборд', 'project3.desc': 'Сложная админ-панель для визуализации больших данных. Создано на Vue.js с использованием D3.js и Chart.js.',
    'project4.title': 'WebGL (Three.js): 3D-Конфигуратор', 'project4.desc': 'Интерактивный 3D-конфигуратор продукта, созданный с помощью Three.js и WebGL. (Визуализация)',
    'project5.title': 'Web3 DApp: NFT-Галерея', 'project5.desc': 'Децентрализованное приложение (DApp) с интеграцией Web3.js и Metamask. (Blockchain)',
    'project6.title': 'Pure CSS: Интерактивный Лендинг', 'project6.desc': 'Высокая производительность благодаря оптимизированным CSS-анимациям и переходам. (Промо-сайт)',
    'services.title': 'Мои Профессиональные Услуги', 'services.subtitle': 'Я сосредоточен на создании комплексных Frontend-решений, обеспечивающих высокую скорость и вовлеченность пользователей. Здесь инновации, качество и надежность.',
    'service1.title': 'Frontend Development (SPA/MPA)', 'service1.desc': 'Разработка быстрых и масштабируемых интерфейсов на базе **React, Next.js, Vue.js** и TypeScript.',
    'service2.title': '3D & WebGL Эксперименты', 'service2.desc': 'Создание захватывающих интерактивных 3D-опытов, виртуальных туров и конфигураторов (**Three.js, Babylon.js**).',
    'service3.title': 'Animations & Performance UI', 'service3.desc': 'Разработка сложных, но производительных CSS/JS анимаций, переходных эффектов и микроинтеракций (**GSAP**).',
    'service4.title': 'Оптимизация и Core Web Vitals', 'service4.desc': 'Аудит и улучшение существующих проектов. Повышение скорости загрузки и SEO-показателей.',
    'service5.title': 'Web3 & Blockchain Frontend', 'service5.desc': 'Создание интерфейсов для DApps, NFT-проектов и интеграция крипто-кошельков (**Ethers.js, Web3.js**).',
    'service6.title': 'Тестирование и Доступность (A11y)', 'service6.desc': 'Обеспечение высокой доступности (WCAG) и написание юнит/интеграционных тестов (**Jest, Cypress**).',
    'about.title': 'Об Андрее Шмило',
    'about.lead': 'Я — Senior Frontend-разработчик с 5+ годами опыта, стремящийся сочетать техническое совершенство с визуальной эстетикой. Моя цель — создавать веб-опыты, которые не только функциональны, но и незабываемы.',
    'about.paragraph1': 'Моя страсть заключается в преобразовании сложных дизайнерских концепций в чистый, эффективный и кроссбраузерный код. Я мастер во всем, что касается пользовательского интерфейса: от чистого HTML/CSS до сложных архитектур Redux/Zustand в React-приложениях. Я гарантирую, что каждый пиксель работает идеально, а код легко поддерживается.',
    'about.paragraph2': 'Я постоянно изучаю новые инструменты — от Web Assembly до последних возможностей CSS. Считаю, что лучший код — это чистый, протестированный и доступный код. Я активно использую методологии Agile и Scrum для обеспечения прозрачного и эффективного процесса разработки.',
    'about.skillsTitle': 'Ключевые Технические Навыки',
    'blog.title': 'Блог. Технические Заметки и Статьи', 'blog.subtitle': 'Мои мысли о последних трендах во Frontend, советы по производительности и углубленные гайды по WebGL/React/TypeScript.',
    'blog1.title': 'React 19: Что Нового для Производительности?', 'blog1.desc': 'Углубленный анализ новых возможностей React и того, как они повлияют на скорость загрузки ваших SPA. Разбор Concurrent Mode и Server Components.',
    'blog2.title': 'Секреты CSS Grid для Адаптивного Дизайна', 'blog2.desc': 'Практический гайд о том, как использовать CSS Grid для создания сложных адаптивных макетов без лишнего JavaScript. Советы для Mobile-First разработки.',
    'blog3.title': 'TypeScript во Frontend: Почему это must-have?', 'blog3.desc': 'Обзор преимуществ использования TypeScript в крупных React-проектах, как он повышает качество кода и ускоряет рефакторинг. (NEW)',
    'blog4.title': 'Настройка окружения WebGL с Three.js + Vite', 'blog4.desc': 'Пошаговый гайд по быстрому созданию современного 3D-проекта для веб с помощью Three.js и инструментов Vite. (NEW)',
    'faq.title': 'Часто Задаваемые Вопросы (FAQ)', 'faq.subtitle': 'Вот ответы на самые распространенные вопросы о моем опыте и рабочем процессе.',
    'faq1.q': 'С какими ключевыми технологиями вы работаете?', 'faq1.a': 'Основной стек: **JavaScript (ES6+), TypeScript, React.js (Next.js), Vue.js, Three.js/WebGL, HTML5, CSS3 (SASS/Tailwind).**',
    'faq2.q': 'Сколько времени занимает разработка типичного проекта?', 'faq2.a': 'Это зависит от сложности. Типичный корпоративный лендинг занимает 2-4 недели. Крупный SPA/маркетплейс может занять 3-6 месяцев. Обсуждаем детали на первой консультации.',
    'faq3.q': 'Как проходит процесс сотрудничества?', 'faq3.a': '1. Обсуждение идеи. 2. Прототипирование и дизайн. 3. Активная разработка (Agile/Scrum). 4. Тестирование и запуск. 5. Поддержка и оптимизация.',
    'faq4.q': 'Оптимизируете ли вы сайты для мобильных устройств?', 'faq4.a': 'Да, каждый проект создается по принципу **Mobile-First** и проходит тестирование на производительность (Core Web Vitals).',
    'reviews.title': 'Отзывы Клиентов и Партнеров', 'reviews.subtitle': 'Что обо мне говорят компании, с которыми я имел честь работать.',
    'review1.text': 'Андрей не просто разработчик, он — архитектор интерфейсов. Его React-решение для нашего SaaS-продукта увеличило скорость загрузки на 40% и значительно улучшило оценку Core Web Vitals. Код был чистым, протестированным и высококачественным.', 'review1.author': '- Иван К., CEO TechSolutions (Лондон)',
    'review2.text': 'Нам нужен был уникальный 3D-эффект на главной странице для промо-кампании. Андрей реализовал его на WebGL идеально, сохранив при этом высокую частоту кадров даже на старых устройствах. Это был лучший интерактивный элемент, который у нас когда-либо был.', 'review2.author': '- Ольга М., Project Lead, Digital Agency (Киев)',
    'review3.text': 'Искали специалиста, хорошо разбирающегося в Next.js и Server Components. Андрей быстро интегрировался в команду и обеспечил мгновенную загрузку критических страниц нашего маркетплейса. Результат превзошел ожидания.', 'review3.author': '- Дмитрий С., CTO EcomSpace (Берлин)',
    'review4.text': 'Андрей помог нам пройти аудит доступности (A11y) и исправить ключевые ошибки. Его знание стандартов WCAG и умение работать с семантическим HTML бесценно. Очень рекомендую его для корпоративных проектов.', 'review4.author': '- Анна Л., Head of Product, FinTech Startup (Варшава)',
    'contact.title': 'Свяжитесь со Мной', 'contact.subtitle': 'Готовы обсудить ваш следующий проект, интерактивный эксперимент или сотрудничество? Напишите мне, и я отвечу в течение 24 часов.',
    'contact.send': 'Отправить Сообщение',
    'contact.namePlaceholder': 'Ваше имя', 'contact.emailPlaceholder': 'Ваш Email', 'contact.messagePlaceholder': 'Ваше сообщение',
    'alert.fillFields': 'Заполните все поля!', 'alert.invalidEmail': 'Некорректный email', 'alert.success': 'Спасибо! Сообщение принято. Я свяжусь с вами в ближайшее время.'
  }
};

let CURRENT_LANG = localStorage.getItem('site_lang') || 'uk';

// =================================================================
// 3. ФУНКЦІЯ ЛОКАЛІЗАЦІЇ (i18n)
// =================================================================
function setLangUI(lang){
  const locale = LOCALES[lang];
  
  document.querySelectorAll('[data-i18n], [data-i18n-placeholder]').forEach(el=>{
    let key = el.dataset.i18n;
    
    // Якщо елемент має data-i18n-placeholder, використовуємо цей ключ для placeholder
    if (el.hasAttribute('data-i18n-placeholder')) {
        key = el.dataset.i18nPlaceholder;
        const translation = locale[key];
        if (translation) {
            el.placeholder = translation;
        }
        // Продовжуємо, якщо елемент також має data-i18n для тексту
        if (!el.hasAttribute('data-i18n')) return;
        key = el.dataset.i18n;
    }

    const translation = locale[key];
    
    if (translation) {
      // Спеціальна обробка:
      if(el.tagName === 'TITLE'){
        document.title = translation;
      } else if (el.tagName === 'META' && el.name === 'description') {
        el.content = translation;
      } else {
        // Звичайний текст (для всіх інших елементів)
        el.innerHTML = translation; // Використовуємо innerHTML, щоб підтримувати <strong> та <b> у перекладах
      }
    }
  });
  
  // Встановлення активного стану для прапорів
  langButtons.forEach(b=>b.setAttribute('aria-pressed', b.dataset.lang === lang));
  localStorage.setItem('site_lang', lang);
}

// =================================================================
// 4. ІНІЦІАЛІЗАЦІЯ (DOMContentLoaded)
// =================================================================
document.addEventListener('DOMContentLoaded', () => {
    // 4.1. Встановлення мови
    setLangUI(CURRENT_LANG);

    // 4.2. Обробник перемикання мови
    langButtons.forEach(btn=>{
      btn.addEventListener('click', ()=>{
        CURRENT_LANG = btn.dataset.lang;
        setLangUI(CURRENT_LANG);
      });
    });

    // 4.3. Ініціалізація AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true,
            // Додайте відключення на мобільних, якщо це потрібно для продуктивності
            // disable: 'mobile' 
        });
    }
});


// =================================================================
// 5. ЛОГІКА НАВІГАЦІЇ
// =================================================================

// 5.1. Burger toggle
function toggleNav(open){
  const isOpen = typeof open === 'boolean' ? open : !nav.classList.contains('open');
  nav.classList.toggle('open', isOpen);
  burger.setAttribute('aria-expanded', isOpen);
  // Відключення прокручування на мобільних при відкритому меню
  document.body.style.overflow = isOpen && window.innerWidth < 900 ? 'hidden' : ''; 
}
burger.addEventListener('click', ()=>toggleNav());

// 5.2. Закриття меню
document.addEventListener('click', e=>{
  // Закриття, якщо клікнуто поза меню та поза кнопкою
  if(nav.classList.contains('open') && !nav.contains(e.target) && !burger.contains(e.target)) toggleNav(false);
});
document.addEventListener('keydown', e=>{
  // Закриття по Esc
  if(e.key === 'Escape' && nav.classList.contains('open')) toggleNav(false);
});

// 5.3. Плавна прокрутка + Закриття меню при кліку на посилання
navLinks.forEach(link=>{
  link.addEventListener('click', e=>{
    const href = link.getAttribute('href');
    if(href && href.startsWith('#')){
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({behavior:'smooth', block:'start'});
      toggleNav(false); // Закриття меню після кліку
    }
  });
});

// 5.4. Active section highlight (Intersection Observer)
if('IntersectionObserver' in window && sections.length > 0){
  const observerOptions = {
    root: null, 
    rootMargin: "0px 0px -70% 0px", // Підсвічування, коли 30% секції видно
    threshold: 0 
  };

  const io = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      const id = entry.target.id;
      const link = document.querySelector(`.nav-list a[href="#${id}"]`);

      if(link){
        if (entry.isIntersecting) {
          navLinks.forEach(l => l.classList.remove('active')); 
          link.classList.add('active'); 
        }
      }
    });
  }, observerOptions);

  sections.forEach(s=>io.observe(s));
}

// =================================================================
// 6. ОБРОБНИК КОНТАКТНОЇ ФОРМИ
// =================================================================
if(contactForm){
  contactForm.addEventListener('submit', e=>{
    e.preventDefault();
    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();
    
    const locale = LOCALES[CURRENT_LANG];

    // Валідація полів
    if(!name || !email || !message){
      alert(locale['alert.fillFields']);
      return;
    }
    // Проста валідація email
    if(!/^\S+@\S+\.\S+$/.test(email)){
      alert(locale['alert.invalidEmail']);
      return;
    }
    
    // Імітація відправки
    // ТУТ МАЄ БУТИ AJAX-ЗАПИТ (fetch/XMLHttpRequest) ДО ВАШОГО БЕКЕНДУ!
    
    alert(locale['alert.success']);
    contactForm.reset();
  });
}


// =================================================================
// 7. ФОНОВИЙ ЕФЕКТ ЧАСТИНК (PARTICLE CANVAS)
// =================================================================
(function(){
  const canvas = document.getElementById('particleCanvas');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  let w = canvas.width = window.innerWidth;
  let h = canvas.height = window.innerHeight;
  
  // Кількість частинок залежить від розміру екрана
  const count = Math.min(100, Math.floor((w*h)/10000)); 
  const maxSpeed = 0.5;

  const particles = Array.from({length:count}).map(()=>({
    x: Math.random()*w,
    y: Math.random()*h,
    r: Math.random()*1.5 + 0.5, 
    dx: (Math.random()-0.5) * maxSpeed,
    dy: (Math.random()-0.5) * maxSpeed,
    // Напівпрозорий неоновий колір
    color: `rgba(0, 255, 255, ${Math.random()*0.5 + 0.2})` 
  }));
  
  window.addEventListener('resize', ()=>{
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  });
  
  function draw(){
    requestAnimationFrame(draw);
    
    // Заповнення з невеликою прозорістю для ефекту "сліду"
    ctx.fillStyle = 'rgba(13, 13, 15, 0.1)'; 
    ctx.fillRect(0, 0, w, h);

    particles.forEach((p, i)=>{
      p.x += p.dx;
      p.y += p.dy;
      
      // Обробка меж: поява з протилежного боку
      if(p.x < 0) p.x = w;
      if(p.x > w) p.x = 0;
      if(p.y < 0) p.y = h;
      if(p.y > h) p.y = 0;
      
      // 7.1. Малювання частинки
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
      ctx.fillStyle = p.color;
      ctx.fill();

      // 7.2. З'єднання частинок, що знаходяться близько
      for(let j = i + 1; j < particles.length; j++){
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          const maxDist = 100;

          if(dist < maxDist){
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              // Прозорість лінії залежить від відстані
              ctx.strokeStyle = `rgba(0, 255, 255, ${0.5 * (1 - dist / maxDist)})`; 
              ctx.lineWidth = 0.5;
              ctx.stroke();
          }
      }
    });
  }
  
  draw();
})();