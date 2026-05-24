export type AchievementType = "Certificate" | "Award" | "Competition";

export interface Achievement {
  name: string;
  type: AchievementType;
  issuer: string;
  date: string;
  description?: string;
  credentialUrl?: string;
}

export const ACHIEVEMENTS: Achievement[] = [];
