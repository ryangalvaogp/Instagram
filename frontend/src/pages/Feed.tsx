import { Component } from 'react'
import { api } from '../services/api'
import more from '../assets/more.svg'
import like from '../assets/like.svg'
import comment from '../assets/comment.svg'
import send from '../assets/send.svg'
import { FeedProps } from '../types/Context'
import '../styles/pages/Feed.css'

export default class Feed extends Component {
    state = {
        feed: []
    }

    async componentDidMount() {
        const response = await api.get('posts')
        this.setState({ feed: response.data })
    }

    render() {
        return (
            <section id="post-list">
                {this.state.feed.map((post: FeedProps) => (
                    <article key={post._id}>
                        <header>
                            <div className="user-info">
                                <span>{post.author}</span>
                                <span className="place">{post.place}</span>
                            </div>
                            <img src={more} alt="Mais" />
                        </header>
                        <img src={`http://localhost:3333/files/${post.image}`} alt="a" />
                        <footer>
                            <div className="actions">
                                <img src={like} alt="like" />
                                <img src={comment} alt="comment" />
                                <img src={send} alt="send" />
                            </div>
                            <strong>{post.likes} curtidas</strong>
                            <p>
                                {post.description}
                                <span>{post.hashtags}</span>
                            </p>
                        </footer>
                    </article>
                ))}
            </section>
        );
    }
}