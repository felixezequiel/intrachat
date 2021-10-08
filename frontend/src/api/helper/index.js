export const buildQuery = data => {
  const keys = Object.keys(data)
  const newValues = keys.map(key => `${key}=${data[key]}`)
  if (!newValues.length) return ''
  return `?${ newValues.join('&') }`
}