// 타입 관리
export type RegisterRequest = {
  id: string;
  nickname: string;
  password: string;
};

export type LoginRequest = {
  id: string;
  password: string;
};

export type EditProfileRequest = {
  nickname: string;
  avatar: File | null;
};

export type ProfileResponse = {
  id: string;
  nickname: string;
  avatar: string;
  success: boolean;
};
