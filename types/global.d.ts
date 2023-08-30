declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  export default content
}

declare let __MAILCHIMP_ENDPOINT__: string
declare let __MAILCHIMP_TIMEOUT__: number
