export type NewsItem = {
    id: number;
    image: string;
    title: string;
    content: string;
  };
  
  export type Profile = {
    id: number;
    login: string;
    name: string;
    avatar: string;
  };
  
  export type LoginResponse = {
    token: string;
  };