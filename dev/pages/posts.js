import lib from '../../src/index.js'
const { render } = lib
const posts = [
  {id: 0, title: 'Amet totam tempore repudiandae distinctio'},
  {id: 1, title: 'Sit eveniet exercitationem vitae minima.'},
  {id: 2, title: 'Dolor sit dignissimos omnis ducimus'},
  {id: 3, title: 'Ipsum debitis eveniet veritatis iste!'}
]

const post = ({title, id }) => render`
  <li>
    <Link href=${`/posts/${id}`}>
      <a>${title}</a>
    </Link>
  </li>
`
export function Posts() {
  return render`
    <div>
      <h1>Posts</h1>
      <ul>
        ${posts.map(({ id, title }) => render`<${post} id=${id} title=${title} />`)}
      </ul>
    </div>
  `
}
