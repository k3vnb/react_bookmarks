import React, { Component } from 'react'
import './AddBookmark.css'

export default class AddBookmark extends Component {
    render() {
        return (
            <div className="addbookmark__form">
                <h2>Add Bookmark</h2>
                <form action="" className="addbookmark__form">
                    <label htmlFor="title">Title:</label>
                    <input type="text" name="title" id="title" placeholder="Title"/>
                    <label htmlFor="url">Url:</label>
                    <input type="text" name="url" id="url" placeholder="url"/>
                    <label htmlFor="description">Description:</label>
                    <textarea name="description" id="description" placeholder="description" cols="30" rows="10"></textarea>
                    <label htmlFor="rating">Rating:</label>
                    <input 
                        type="number"
                        name="rating"
                        id="rating"
                        min="1"
                        max="5"
                    />
                    <div className="addbookmark__buttons">
                        <button onClick={e => this.props.showForm(false)}>Cancel</button>
                        <button type="submit">Save</button>
                    </div>
                </form>
            </div>
        )
    }
}
