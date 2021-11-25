export enum AppScreenName {
  HOME = 'Home',
  REGISTER = 'Register',
}

export type RootStackParamList = {
  [AppScreenName.HOME]: undefined;
  [AppScreenName.REGISTER]: undefined;
};
