export interface LinkStyleProps {
  highlight?: boolean | undefined;
  underline?: boolean | undefined;
}
export interface Link extends LinkStyleProps {
  text: string | undefined;
  path: string | undefined;
}

export interface HeaderProps {
  welcome?: string | undefined;
  links: Link[] | undefined;
}
