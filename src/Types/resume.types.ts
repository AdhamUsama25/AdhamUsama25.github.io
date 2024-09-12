export interface IResumeInfo {
  organization: {
    name: string;
    logo?: string;
    url?: string;
  };
  title: string;
  startDate: string;
  endDate: string;
  location: string;
  responsibilities?: string[];
}

export interface ISkill {
  name: string;
  icon: string;
}
