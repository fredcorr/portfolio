export interface BlockContentNodeBase {
  _key: string
  _type: string
}

export interface Image {
	_id: string
	_type: string
	assetId: string
	creditLine?: string
	extension: string
	metadata: {
		dimensions: {
			aspectRatio: number
			height: number
			width: number
		},
		hasAlpha: boolean
		isOpaque: boolean
		lqip: string
	},
	mimeType: string,
	originalFilename: string
	path: string
	sha1hash: string
	size: number
	source: {
		url: string
	},
	url: string
}

export interface Link {
  url?: {
    slug: string
  },
	extLink?: string
  anchor: string
  label: string
  type: string
}