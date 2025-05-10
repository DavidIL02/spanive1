export interface Teacher {
  id: string;
  name: string;
  expertise: string;
  rating: number;
  students: number;
  image?: string;
  experience?: string;
}

export interface TeacherState {
  isMuted: boolean;
  isVideoOff: boolean;
  isCallActive: boolean;
} 