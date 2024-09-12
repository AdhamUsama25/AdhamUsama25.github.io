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