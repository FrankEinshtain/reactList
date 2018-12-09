import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'
import CommentDetail from './components/CommentDetail'
import Card from './components/Card'

const App = () => {
  return (
    <div>
      <div className='ui container comments'>
        <Card>
          <CommentDetail
            author={faker.name.firstName()}
            timeAgo={(Date()).toString()}
            text={faker.lorem.sentence()}
            avatar={faker.image.avatar()} />
        </Card>
        <Card>
          <CommentDetail
            author={faker.name.firstName()}
            timeAgo={(Date()).toString()}
            text={faker.lorem.sentence()}
            avatar={faker.image.avatar()} />
        </Card>
        <Card>
          <CommentDetail
            author={faker.name.firstName()}
            timeAgo={(Date()).toString()}
            text={faker.lorem.sentence()}
            avatar={faker.image.avatar()} />
        </Card>
        <Card>
          <CommentDetail
            author={faker.name.firstName()}
            timeAgo={(Date()).toString()}
            text={faker.lorem.sentence()}
            avatar={faker.image.avatar()} />
        </Card>
        <Card>
          <CommentDetail
            author={faker.name.firstName()}
            timeAgo={(Date()).toString()}
            text={faker.lorem.sentence()}
            avatar={faker.image.avatar()} />
        </Card>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
