import withApollo from '../../lib/withApollo'

import Container from '../../components/Container'
import Header from '../../components/Header'
import Post from '../../components/Post'

export default withApollo(() => (
  <Container>
    <Header />
    <Post />
  </Container>
))
