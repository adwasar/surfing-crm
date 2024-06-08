export interface User {
  uid: string;
  photoURL?: string;
  name: string;
  lastMessage: string;
  dateLastMassage: string;
  isOpen?: boolean;
  isSent: boolean;
  isRead: boolean;
}

export interface Message {
  id: string;
  uid: string;
  text: string;
  date: string;
  isOut?: boolean;
  isIn?: boolean;
  isSent?: boolean;
  isRead?: boolean;
}
