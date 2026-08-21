import { AppBlueprint } from '../types';

export const SAMPLE_PROMPTS = [
  'Build a food delivery app for college students',
  'A habit tracker with social accountability for fitness lovers',
  'Split monthly expenses and grocery bills with flatmates',
  'AI flashcard study tool with spaced repetition for medical students',
];

export const COLLEGE_FOOD_BLUEPRINT: AppBlueprint = {
  id: 'campus-bites',
  appName: 'CampusBites',
  tagline: 'Affordable, fast canteen and dorm delivery for busy college students.',
  purpose: 'Streamline on-campus meal ordering, dorm-to-dorm delivery, and late-night cafeteria pickups with student-friendly pricing and campus ID payment integration.',
  targetUsers: [
    'Undergraduate & Graduate College Students',
    'Campus Cafeterias & Local Near-Campus Diners',
    'Student Peer-Couriers (Dorm Delivery)',
  ],
  keyFeatures: [
    {
      title: 'Dorm & Library Quick Drop',
      description: 'Pinpoint delivery to specific campus buildings, floor rooms, library study halls, or dormitory lounges.',
      category: 'Core',
    },
    {
      title: 'Group Order Bill Splitting',
      description: 'Allow roommates to combine items into one delivery cart with automatic instant bill splitting.',
      category: 'User Experience',
    },
    {
      title: 'Student ID & Dining Dollar Sync',
      description: 'Support meal credits, campus debit points, Apple Pay, and debit cards seamlessly.',
      category: 'Core',
    },
    {
      title: 'Late-Night Study Snack Flash Deals',
      description: 'Time-sensitive notifications when dining halls offer discounted surplus food after 9 PM.',
      category: 'Engagement',
    },
  ],
  suggestedScreens: [
    {
      name: 'Login Screen',
      purpose: 'Single sign-on using university .edu email or campus SSO portal.',
      iconName: 'log-in',
      keyElements: ['SSO .edu OAuth button', 'Dorm residence selector', 'Quick guest preview mode'],
    },
    {
      name: 'Home Screen',
      purpose: 'Explore nearby open cafeterias, daily specials, and active campus food deals.',
      iconName: 'home',
      keyElements: ['Active delivery banner', 'Campus zones filter', 'Canteen speed ratings', 'Popular late-night spots'],
    },
    {
      name: 'Profile Screen',
      purpose: 'Manage student identity, dining balance, saved dorm delivery spots, and dietary preferences.',
      iconName: 'user',
      keyElements: ['Dining points balance badge', 'Favorite meal shortcuts', 'Student verified badge', 'Order history'],
    },
    {
      name: 'Settings Screen',
      purpose: 'Configure notification alerts for orders, roommate invites, dark mode, and dietary tags.',
      iconName: 'settings',
      keyElements: ['Allergy / Halal / Vegan toggles', 'Roommate payment auto-approve', 'Push notifications', 'Help & Dorm support'],
    },
  ],
  suggestedTechStack: [
    {
      name: 'React (Vite)',
      category: 'Frontend',
      badge: 'Client / Web & PWA',
      reason: 'Fast, responsive single-page web app with mobile PWA support for instant campus access.',
    },
    {
      name: 'Spring Boot',
      category: 'Backend',
      badge: 'REST API & Microservices',
      reason: 'Enterprise-grade Java backend providing robust transaction safety and high concurrency for peak meal rushes.',
    },
    {
      name: 'PostgreSQL',
      category: 'Database',
      badge: 'Relational DB',
      reason: 'Reliable ACID-compliant relational storage for orders, menus, user balances, and spatial campus addresses.',
    },
    {
      name: 'Cloud Run / Docker',
      category: 'Cloud & Hosting',
      badge: 'Serverless Container',
      reason: 'Auto-scales to zero during lectures and scales up instantaneously during lunch and midnight dinner hours.',
    },
  ],
  architectureNotes: [
    'Client connects to Spring Boot REST endpoints via HTTPS with JWT tokens.',
    'PostgreSQL handles transactional order states, menu inventory, and user profiles.',
    'WebSocket / SSE channel for real-time live courier location updates on campus map.',
  ],
  complexity: 'Intermediate',
  estimatedTimeline: '3–4 Weeks for MVP',
};

export function generateBlueprintFromIdea(ideaText: string): AppBlueprint {
  const trimmed = ideaText.trim().toLowerCase();

  // If match food / college
  if (trimmed.includes('food') || trimmed.includes('delivery') || trimmed.includes('restaurant') || trimmed.includes('canteen') || trimmed.includes('college')) {
    return {
      ...COLLEGE_FOOD_BLUEPRINT,
      appName: trimmed.includes('college') ? 'CampusBites' : 'BiteSync',
      purpose: ideaText.trim().length > 10 ? ideaText.trim() : COLLEGE_FOOD_BLUEPRINT.purpose,
    };
  }

  // If match fitness / habit / health
  if (trimmed.includes('fitness') || trimmed.includes('workout') || trimmed.includes('habit') || trimmed.includes('gym') || trimmed.includes('health')) {
    return {
      id: 'habit-forge',
      appName: 'FitPulse',
      tagline: 'Track routines, build unbreakable streaks, and stay accountable with fitness peers.',
      purpose: ideaText.trim().length > 10 ? ideaText.trim() : 'Empower health enthusiasts to log workouts, track progressive overload, and maintain daily wellness streaks.',
      targetUsers: [
        'Daily Gym Goers & Fitness Enthusiasts',
        'Personal Trainers and Coaches',
        'People building morning & evening habits',
      ],
      keyFeatures: [
        {
          title: 'Daily Streak & Habit Rings',
          description: 'Visual progress rings and milestone celebration badges for consecutive workout days.',
          category: 'Core',
        },
        {
          title: 'Social Squad Accountability',
          description: 'Share workout check-ins with friends with automated encouragement reminders.',
          category: 'Engagement',
        },
        {
          title: 'Smart Workout Log & Rest Timer',
          description: 'Log reps, weights, and supersets with automated acoustic rest timers.',
          category: 'Core',
        },
        {
          title: 'Health & Biometrics Sync',
          description: 'Sync heart rate, steps, and sleep metrics with Apple Health and Google Fit.',
          category: 'User Experience',
        },
      ],
      suggestedScreens: [
        {
          name: 'Login Screen',
          purpose: 'Fast onboarding with Google or Apple authentication.',
          iconName: 'log-in',
          keyElements: ['Social OAuth buttons', 'Fitness goal questionnaire', 'Body stats baseline setup'],
        },
        {
          name: 'Home Screen',
          purpose: 'Dashboard displaying today’s workout plan, habit streak counters, and motivational quote.',
          iconName: 'home',
          keyElements: ['Daily routine checklist', 'Streak heat map', 'Next scheduled workout card', 'Quick-log floating action'],
        },
        {
          name: 'Profile Screen',
          purpose: 'Historical workout analytics, weight progression charts, and earned achievement badges.',
          iconName: 'user',
          keyElements: ['Total volume lifted tracker', 'Milestone badges trophy case', 'Personal records list'],
        },
        {
          name: 'Settings Screen',
          purpose: 'Manage reminder push notifications, metric vs imperial units, and connected health devices.',
          iconName: 'settings',
          keyElements: ['Workout reminder alarms', 'Unit switcher (kg/lbs)', 'Dark mode toggle', 'Export workout data to CSV'],
        },
      ],
      suggestedTechStack: [
        {
          name: 'React (Vite) + Tailwind',
          category: 'Frontend',
          badge: 'Client Web/Mobile App',
          reason: 'Smooth animations for habit streak loops and instant interaction feedback.',
        },
        {
          name: 'Spring Boot (Java)',
          category: 'Backend',
          badge: 'REST API',
          reason: 'High-throughput architecture for crunching historical analytics and scheduled notification jobs.',
        },
        {
          name: 'PostgreSQL',
          category: 'Database',
          badge: 'Relational DB',
          reason: 'Structured schemas for time-series workout logs, exercise libraries, and user relationships.',
        },
        {
          name: 'Redis + Docker',
          category: 'Cloud & Hosting',
          badge: 'Caching & Queue',
          reason: 'Sub-millisecond leaderboard caching and streak calculation processing.',
        },
      ],
      architectureNotes: [
        'React frontend renders responsive data charts and interactive habit checkboxes.',
        'Spring Boot backend provides REST API endpoints for workout CRUD and streak state transitions.',
        'PostgreSQL persists user activity histories with relational consistency.',
      ],
      complexity: 'Beginner',
      estimatedTimeline: '2–3 Weeks for MVP',
    };
  }

  // If match expense / finance / money / flatmates
  if (trimmed.includes('expense') || trimmed.includes('budget') || trimmed.includes('money') || trimmed.includes('bill') || trimmed.includes('split') || trimmed.includes('finance')) {
    return {
      id: 'split-mate',
      appName: 'SplitMate',
      tagline: 'Effortless shared expense tracking and instant bill settlement for flatmates & groups.',
      purpose: ideaText.trim().length > 10 ? ideaText.trim() : 'Simplify splitting groceries, rent, utilities, and dining bills with zero awkward money talks.',
      targetUsers: [
        'Roommates & Flatmates sharing rent/utilities',
        'Couples managing joint household expenses',
        'Travel groups and friends on vacation trips',
      ],
      keyFeatures: [
        {
          title: 'Smart Bill & Receipt Scanner',
          description: 'Snap a picture of any receipt and auto-extract itemized amounts and tax percentages.',
          category: 'Core',
        },
        {
          title: 'Debt Simplification Engine',
          description: 'Minimizes the total number of transactions required to settle up across group members.',
          category: 'Core',
        },
        {
          title: 'Recurring Rent & Utility Reminders',
          description: 'Automated recurring splits for monthly WiFi, electricity, and water bills.',
          category: 'Engagement',
        },
        {
          title: 'Direct UPI / Venmo / Card Integration',
          description: 'One-tap settlement links directly launching the user’s preferred payment application.',
          category: 'User Experience',
        },
      ],
      suggestedScreens: [
        {
          name: 'Login Screen',
          purpose: 'Fast phone number or email authentication with invite code recognition.',
          iconName: 'log-in',
          keyElements: ['Phone OTP verification', 'Join existing household code input', 'Biometric face unlock'],
        },
        {
          name: 'Home Screen',
          purpose: 'High-level financial balance snapshot: Who owes you and who you owe.',
          iconName: 'home',
          keyElements: ['Total net balance hero banner', 'Recent shared group expenses', 'Quick "Add Bill" action button'],
        },
        {
          name: 'Profile Screen',
          purpose: 'Personal payment IDs, monthly spending breakdown, and payment history ledger.',
          iconName: 'user',
          keyElements: ['Linked payment handles', 'Monthly expense category charts', 'Export tax summary'],
        },
        {
          name: 'Settings Screen',
          purpose: 'Configure currency preferences, household members, and push notification thresholds.',
          iconName: 'settings',
          keyElements: ['Currency selector ($ / € / ₹ / £)', 'Manage flatmates list', 'Settlement reminder schedule'],
        },
      ],
      suggestedTechStack: [
        {
          name: 'React (Vite)',
          category: 'Frontend',
          badge: 'Client SPA',
          reason: 'Instant arithmetic calculations and interactive item assignment drag-and-drop.',
        },
        {
          name: 'Spring Boot',
          category: 'Backend',
          badge: 'Backend API',
          reason: 'Robust financial ledger calculations and strict mathematical accuracy for balances.',
        },
        {
          name: 'PostgreSQL',
          category: 'Database',
          badge: 'Relational DB',
          reason: 'ACID transactions prevent double-spending and ledger inconsistencies.',
        },
        {
          name: 'AWS / Cloud Run',
          category: 'Cloud & Hosting',
          badge: 'Cloud Deployment',
          reason: 'Secure TLS encrypted container hosting with high availability.',
        },
      ],
      architectureNotes: [
        'Client-side state gives instant visual updates when splitting bills.',
        'Spring Boot executes graph-based debt simplification algorithms.',
        'PostgreSQL maintains an immutable double-entry style ledger.',
      ],
      complexity: 'Intermediate',
      estimatedTimeline: '3 Weeks for MVP',
    };
  }

  // Dynamic Generic Fallback Blueprint intelligently adapted to the user's sentence!
  const rawWords = ideaText.trim().split(/\s+/).filter(w => w.length > 2);
  const cleanFirstWord = rawWords[0] ? rawWords[0].charAt(0).toUpperCase() + rawWords[0].slice(1) : 'Nova';
  const cleanSecondWord = rawWords[1] ? rawWords[1].charAt(0).toUpperCase() + rawWords[1].slice(1) : 'Craft';
  const customName = `${cleanFirstWord}${cleanSecondWord.replace(/[^a-zA-Z]/g, '')}`;

  return {
    id: 'custom-app-blueprint',
    appName: customName.length > 3 ? customName : 'BodhX Studio App',
    tagline: `AI-engineered blueprint designed specifically for "${ideaText.slice(0, 60)}..."`,
    purpose: ideaText.trim().length > 5 ? ideaText.trim() : 'Deliver a streamlined, scalable application solving key user workflows with modern UX.',
    targetUsers: [
      'Primary End Users seeking intuitive digital tools',
      'Power users requiring advanced filters & shortcuts',
      'Administrators & content managers',
    ],
    keyFeatures: [
      {
        title: 'Core Workflow Automation',
        description: 'Guided step-by-step interface designed to make the main user task seamless and fast.',
        category: 'Core',
      },
      {
        title: 'Real-time State & Live Updates',
        description: 'Instant client-side feedback with optimistic UI states and status indicators.',
        category: 'User Experience',
      },
      {
        title: 'Personalized User Dashboard',
        description: 'Customizable views, recent activity logs, and quick action shortcuts.',
        category: 'Engagement',
      },
      {
        title: 'Secure Data Encryption & Export',
        description: 'Role-based data access control with options to backup and export data in JSON/CSV.',
        category: 'Security',
      },
    ],
    suggestedScreens: [
      {
        name: 'Login Screen',
        purpose: 'Secure entry gateway with passwordless OTP, SSO, and initial onboarding tour.',
        iconName: 'log-in',
        keyElements: ['Email & Social Auth options', 'Remember device toggle', 'Welcome & value proposition intro'],
      },
      {
        name: 'Home Screen',
        purpose: 'Central dashboard showcasing main metrics, recent items, and primary creation flow.',
        iconName: 'home',
        keyElements: ['Primary action launcher', 'Live status cards', 'Recent history feed', 'Quick search / filters'],
      },
      {
        name: 'Profile Screen',
        purpose: 'User identity management, achievements, activity stats, and security credentials.',
        iconName: 'user',
        keyElements: ['User avatar & bio details', 'Activity summary timeline', 'Linked accounts & API tokens'],
      },
      {
        name: 'Settings Screen',
        purpose: 'System preferences, dark/light theme, notification rules, and workspace configuration.',
        iconName: 'settings',
        keyElements: ['Theme & Appearance customization', 'Push / Email alerts toggle', 'Data privacy & Export tools'],
      },
    ],
    suggestedTechStack: [
      {
        name: 'React (Vite)',
        category: 'Frontend',
        badge: 'Modern SPA',
        reason: 'Declarative component architecture paired with Tailwind CSS for high responsiveness.',
      },
      {
        name: 'Spring Boot',
        category: 'Backend',
        badge: 'Enterprise Java',
        reason: 'Robust RESTful API architecture with comprehensive security filters and validation.',
      },
      {
        name: 'PostgreSQL',
        category: 'Database',
        badge: 'Relational DB',
        reason: 'Structured relational data storage ensuring ACID compliance and query performance.',
      },
      {
        name: 'Docker / Cloud Run',
        category: 'Cloud & Hosting',
        badge: 'Containerized Deployment',
        reason: 'Effortless continuous delivery and low-latency global edge scaling.',
      },
    ],
    architectureNotes: [
      'Modular client architecture separated into views, components, and state hooks.',
      'Spring Boot backend exposes stateless REST API endpoints secured with bearer tokens.',
      'PostgreSQL handles relational entity schemas with indexed query lookups.',
    ],
    complexity: 'Intermediate',
    estimatedTimeline: '2–4 Weeks for MVP',
  };
}
