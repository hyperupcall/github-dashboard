import gql from 'graphql-tag'

export const repositoriesQuery = gql`
	{
		viewer {
			avatarUrl
			bio
			bioHTML
			createdAt
			followers {
				totalCount
			}
			location
			login
			repositories(
				first: 100
				affiliations: [OWNER, COLLABORATOR]
				ownerAffiliations: [OWNER, COLLABORATOR, ORGANIZATION_MEMBER]
			) {
				totalCount
				nodes {
					# commitComments(first: 10) {
					# 	totalCount
					# 	nodes {
					# 		author {
					# 			login
					# 			url
					# 		}
					# 		authorAssociation
					# 		body
					# 		bodyText
					# 		createdAt
					# 		url
					# 	}
					# }
					# createdAt
					# description
					# descriptionHTML
					# diskUsage
					# forkCount
					# hasIssuesEnabled
					# hasProjectsEnabled
					# hasWikiEnabled
					# homepageUrl
					# isArchived
					# isDisabled
					# isEmpty
					# isFork
					# isLocked
					# isMirror
					# isPrivate
					# isTemplate
					# labels(first: 100) {
					# 	nodes {
					# 		name
					# 	}
					# }
					# languages(first: 100) {
					# 	totalCount
					# 	nodes {
					# 		color
					# 		name
					# 	}
					# }
					# licenseInfo {
					# 	key
					# 	name
					# 	nickname
					# 	spdxId
					# 	url
					# }
					# mirrorUrl
					name
					nameWithOwner
					owner {
						login
						url
					}
					# parent {
					# 	name
					# 	url
					# }
					# primaryLanguage {
					# 	color
					# 	name
					# }
					# sshUrl
					# stargazers(first: 100) {
					# 	nodes {
					# 		login
					# 		url
					# 	}
					# }
					# submodules(first: 100) {
					# 	nodes {
					# 		gitUrl
					# 		name
					# 		path
					# 	}
					# }
					url
					# viewerHasStarred
					# watchers {
					# 	totalCount
					# }
				}
			}
			repositoriesContributedTo(first: 100, contributionTypes: [COMMIT]) {
				totalCount
				nodes {
					name
					nameWithOwner
					owner {
						url
						login
					}
					url
				}
			}
			twitterUsername
			url
			websiteUrl
		}
	}
`
