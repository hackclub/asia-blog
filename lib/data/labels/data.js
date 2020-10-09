const map = new Map()

const Set = (key, value) => {
  map.set(key, value)
}

map.set('news', {
  imgurl: 'img/labels/news.png',
  styles: {
    width: ['5rem', '4.5rem'],
    height: ['7rem', '4.5rem'],
    bottom: ['-1.5rem'],
    right: ['0rem'],
    transform: 'rotate(15deg)'
  }
})
map.set('blog', {
  imgurl: 'img/labels/blog.png',
  styles: {
    width: ['5rem', '6rem'],
    height: ['7rem', '8rem'],
    bottom: ['-4rem'],
    right: ['-1.5rem'],
    transform: 'rotate(10deg)'
  }
})
map.set('hackstore', {
  imgurl: 'img/labels/hackstore.png',
  styles: {
    width: ['5rem', '5rem'],
    height: ['7rem', '7rem'],
    bottom: ['-4rem'],
    right: ['-1.5rem'],
    transform: 'rotate(5deg)'
  }
})

map.set('calendar', {
  imgurl: 'img/labels/calendar.png',
  styles: {
    width: ['5rem', '6rem'],
    height: ['7rem', '7rem'],
    bottom: ['-3.5rem'],
    right: ['-1rem'],
    transform: 'rotate(10deg)'
  }
})

map.set('event', {
  imgurl: 'img/labels/events-2.png',
  styles: {
    width: ['5rem', '6rem'],
    height: ['7rem', '7rem'],
    bottom: ['-3.5rem'],
    right: ['-3rem'],
    transform: 'rotate(10deg)'
  }
})

map.set('null', {
  imgurl: 'no-image-available',
  styles: {
    display: ['none']
  }
})

export default map
