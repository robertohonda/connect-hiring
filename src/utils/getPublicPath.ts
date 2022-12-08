export const getPublicPath = (path: string) : string => process.env.PUBLIC_URL + path

export default getPublicPath