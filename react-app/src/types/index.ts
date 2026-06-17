export interface Profile {
  name: string;
  isLogined: boolean;
}

export interface Movie {
  id: number;
  title: string;
  posterUrl: string;
}

export interface UserContextType {
  profiles: Profile[];
  currentUser: Profile | null;
  login: (userName: string) => void;
  logout: () => void;
  setProfiles: (profiles: Profile[]) => void;
}
