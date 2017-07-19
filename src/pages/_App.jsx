import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'


class ModalSwitch extends React.Component {

  componentWillUpdate(nextProps) {
    const { location } = this.props
    console.log("location",location)
    console.log("nextProps.location",nextProps.location)
    
    
    // 如果 props.location 不是 modal 的话，就把 this.props.location 
    // 赋值给 previousLocation。
    if ( nextProps.history.action !== 'POP' && (!location.state || !location.state.modal) ) { 
      this.previousLocation = this.props.location
    }
  }

  render() {
    const { location } = this.props
    const isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location // 不是首次渲染。
    )
    console.log("isModal",isModal )
    return (
      <div>
        <Switch location={isModal ? this.previousLocation : location}>
          <Route exact path='/' component={Home}/>
          <Route path='/gallery' component={Gallery}/>
          <Route path='/img/:id' component={ImageView}/>
        </Switch>
        {isModal ? <Route path='/img/:id' component={Modal} /> : null}
      </div>
    )
  }
}

const IMAGES = [
  { id: 0, title: '深兰花紫', color: 'DarkOrchid' },
  { id: 1, title: '石灰绿', color: 'LimeGreen' },
  { id: 2, title: '番茄色', color: 'Tomato' },
  { id: 3, title: '#七八九', color: '#789' },
  { id: 4, title: '赤红色', color: 'Crimson' }
]

const Thumbnail = ({ color }) =>
  <div style={{
    width: 50,
    height: 50,
    background: color
  }}/>

const Image = ({ color }) =>
  <div style={{
    width: 400,
    height: 400,
    background: color
  }}></div>

const Home = () => (
  <div>
    <Link to='/gallery'>访问 Galary </Link>
    <h2>精选图片</h2>
    <ul>
      <li><Link to='/img/2'>番茄色</Link></li>
      <li><Link to='/img/4'>赤红色</Link></li>
    </ul>
  </div>
)

const Gallery = () => (
  <div>
    <h3>画廊首页</h3>
    {IMAGES.map(i => (
      <Link
        key={i.id}
        to={{
          pathname: `/img/${i.id}`,
          // 这里是关键！
          state: { modal: true}
        }}
      >
        <Thumbnail color={i.color} />
        <p>{i.title}</p>
      </Link>
    ))}
  </div>
)

const ImageView = ({ match }) => {
  const image = IMAGES[parseInt(match.params.id, 10)]
  if (!image) {
    return <div>找不到图片</div>
  }

  return (
    <div>
      <h1>{image.title}</h1>
      <Image color={image.color} />
    </div>
  )
}

// 弹出框
const Modal = ({ match, history }) => {
  const image = IMAGES[parseInt(match.params.id, 10)]
  if (!image) {
    return null
  }
  const back = (e) => {
    e.stopPropagation()
    history.goBack()
  }
  return (
    <div
      onClick={back}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        background: 'rgba(0, 0, 0, 0.15)'
      }}
    >
      <div className='modal' style={{
      position: 'absolute',
        background: '#fff',
        top: 25,
        left: '10%',
        right: '10%',
        padding: 15,
        border: '2px solid #444'
      }}>
        <h1>弹出框</h1>
        <h1>{image.title}</h1>
        <Image color={image.color} />
        <button type='button' onClick={back}>
          关闭
        </button>
      </div>
    </div>
  )
}

const ModalGallery = () => (
  <Router>
    <Route component={ModalSwitch} />
  </Router>
)

export default ModalGallery