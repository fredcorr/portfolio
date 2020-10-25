const previewSecret = 'My_preview' // Copy the string you used for SANITY_PREVIEW_SECRET
const projectUrl = 'http://fredcorr.com'

export default function resolveProductionUrl(document) {
  return `${projectUrl}/api/preview?secret=${previewSecret}&type=${ document._type }&slug=${document.slug.current}`
}