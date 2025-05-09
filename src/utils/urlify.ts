const urlify = (str: string) => {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9\s_-]/g, '') // remove non-standard chars
    .replace(/[\s-]+/g, '_') // spaces/hyphens to underscores
    .replace(/_+/g, '_') // collapse multiple underscores
    .replace(/^_+|_+$/g, '') // trim leading/trailing underscores
}

export default urlify
