declare module '*.hbs?raw' {
  const content: string
  export default content
}

declare module '*.scss' {
  const content: any
  export default content
}