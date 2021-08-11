const map = new Map()

const isProd = process.env.NODE_ENV === 'production'

// const prefix = () => (isProd ? 'https://asiablog' : 'http://localhost:3000')

const Set = (key, value, url) => {
  map.set(
    key,
    url
      ? value
      : `https://raw.githubusercontent.com/bajpai244/indiablogfilehosting/main/auhtors/${value}`
  )
}

Set('Athul Blesson', `athul.jpg`)
Set('Harsh Bajpai', 'harsh.png')
Set('Annlee Fores', 'annlee.jpg')
Set('Anna Grace Benny', 'anna.jpg')
Set('Arun Mani', 'arun.jpg')
Set('Thejaswi Prakash', 'thejaswi.jpg')
Set('Debajit Mallick', 'debajit.jpg')
Set('Swasthik Shetty', 'swasthik.jpg')
Set(
  'Shubhangi Gupta',
  'https://asiablog.hackclub.com/team/shubhangi.jpeg',
  true
)
Set('Hack Club CGC', 'https://annlee.party/cgc.jpeg', true)
Set(
  'Hack Club ITER',
  'https://cloud-djs4mi2sc-hack-club-bot.vercel.app/0logo-no-bg.png',
  true
)

export default map
