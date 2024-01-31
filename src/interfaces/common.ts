export type PageTypes =
  | 'login'
  | 'chat'
  | 'page404'
  | 'profile'
  | 'registration'
  | 'page500'
  | 'profile-edit'
  | 'change-password';

type ToPath<T extends string = string> = `/${T}`

export type PagePathsType = ToPath<PageTypes>
