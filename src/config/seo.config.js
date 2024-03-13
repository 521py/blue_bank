const SITE_NAME = 'Blue Bank'

export const getTitle = title => {
	return title ? `${title} | ${SITE_NAME}` : SITE_NAME
}
