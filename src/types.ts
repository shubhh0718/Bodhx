export interface ScreenItem {
  name: string;
  purpose: string;
  iconName: 'log-in' | 'home' | 'user' | 'settings' | 'shopping-bag' | 'credit-card' | 'bar-chart' | 'compass' | 'bell';
  keyElements: string[];
}

export interface FeatureItem {
  title: string;
  description: string;
  category: 'Core' | 'User Experience' | 'Engagement' | 'Security';
}

export interface TechStackItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Cloud & Hosting';
  badge: string;
  reason: string;
}

export interface AppBlueprint {
  id: string;
  appName: string;
  tagline: string;
  purpose: string;
  targetUsers: string[];
  keyFeatures: FeatureItem[];
  suggestedScreens: ScreenItem[];
  suggestedTechStack: TechStackItem[];
  architectureNotes?: string[];
  complexity: 'Beginner' | 'Intermediate' | 'Advanced';
  estimatedTimeline: string;
}
