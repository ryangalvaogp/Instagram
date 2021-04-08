/* eslint-disable no-restricted-globals */

import { Component } from 'react'
import { api } from '../services/api'
import '../styles/pages/New.css'
import { EventParams } from '../types/File'




export default class New extends Component {

    state = {
        image: '',
        author: '',
        place: '',
        description: '',
        hashtags: ''
    }

    handleSubmit = async (e: any) => {
        e.preventDefault();

        const data = new FormData();
       
        data.append('image', this.state.image);
        data.append('author', this.state.author);
        data.append('place', this.state.place);
        data.append('description', this.state.description);
        data.append('hashtags', this.state.hashtags);

        await api.post('posts', data)

        history.back()




    }
    handleImage = (e: EventParams['handleImage']) => {
        this.setState({ image: e.target.files[0] })
    }
    handleChange = (e: EventParams['handleChange']) => {
        this.setState({ [e.target.name]: e.target.value })



    }
    render() {
        return (
            this.NewPost()
        )
    }

    private NewPost() {
        return <form id="new-post" onSubmit={this.handleSubmit}>
            <input
                type="file"
                onChange={this.handleImage} />

            <input
                type="text"
                name="author"
                placeholder="Autor do post"
                value={this.state.author}
                onChange={this.handleChange} />

            <input
                type="text"
                name="place"
                placeholder="Local"
                value={this.state.place}
                onChange={this.handleChange} />

            <input
                type="text"
                name="description"
                placeholder="Descrição"
                value={this.state.description}
                onChange={this.handleChange} />

            <input
                type="text"
                name="hashtags"
                placeholder="Hashtags"
                value={this.state.hashtags}
                onChange={this.handleChange} />

            <button type="submit">Enviar</button>
        </form>
    }
}