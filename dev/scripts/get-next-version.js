const { request } = require('undici')
const packageJson = require('../../package.json')

function convertToSemver(number) {
  const semverParts = String(number).split('.')
  const major = semverParts[0]
  const minor = semverParts[1] || 0
  const patch = semverParts[2] || 0

  return `${major}.${minor}.${patch}`
}

const main = async () => {
  const releasesUrl = 'https://api.github.com/repos/bitcoin/bitcoin/releases'
  const { body, statusCode } = await request(releasesUrl, {
    headers: {
      'User-Agent': 'undici',
    },
  })

  if (statusCode !== 200) {
    console.error('Github API not available')
    process.exit(1)
  }

  const releasesData = await body.json()
  const packageVersion = packageJson.version

  let nextVersionFound = false
  let nextVersion = ''
  let nextVersionTag = ''
  let nextVersionvTag = ''
  const versionRegex = /^\D*?(\d+\.\d+)/

  for (let i = releasesData.length - 1; i >= 0; i--) {
    const release = releasesData[i]
    const releaseVersion = release.tag_name
    const releaseVersionMatch = releaseVersion.match(versionRegex)
    const packageVersionMatch = packageVersion.match(versionRegex)

    if (
      releaseVersionMatch &&
      packageVersionMatch &&
      Number(releaseVersionMatch[1]) > Number(packageVersionMatch[1])
    ) {
      nextVersionVTag = releaseVersion
      nextVersionTag = releaseVersion.replace('v', '')
      nextVersion = convertToSemver(releaseVersionMatch[1])
      break
    }
  }

  if (nextVersion) {
    return JSON.stringify({
      next_version: nextVersion,
      next_version_tag: nextVersionTag,
      next_version_vtag: nextVersionVTag,
    })
  }

  console.log('No newer version available.')
  process.exit(1)
}

main()
  .then((result) => console.log(result))
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
