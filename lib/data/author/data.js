const map = new Map()

const isProd = process.env.NODE_ENV === 'production'

const prefix = () => (isProd ? 'https://indiablog' : 'http://localhost:3000')

const Set = (key, value) => {
  map.set(key, `${prefix()}/${value}`)
}

Set('Athul Blesson', `img/profiles/athul.jpg`)
Set('Harsh Bajpai', 'img/profiles/harsh.png')
Set('Annlee Fores', 'img/profiles/annlee.jpg')

export default map
