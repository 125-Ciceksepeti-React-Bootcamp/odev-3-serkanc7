import { useState } from 'react'
import './style.scss';
import closeSvg from '@/assets/svg/close.svg'

function Modal({ showModal, setShowModal, post, updatePost }) {

    const id = post.id;
    const category = post.category;
    const [title, setTitle] = useState(post.title);
    const [description, setDescrition] = useState(post.description);
    const [image, setImage] = useState(post.image);

    const updatedPost = { id, category, title, description, image };

    //Handle Submit
    const handleSubmit = (e) => {
        e.preventDefault();
        updatePost(id, updatedPost);
        setShowModal(prev => !prev)
    }

    return (
        <>
            {showModal &&
                <div className="modal">
                    <div className="modal__inner">
                        <header className="modal__header">
                            <h2 className="modal__title">Edit Post</h2>
                            <button className="modal__close" onClick={() => setShowModal(prev => !prev)}><img src={closeSvg} alt="close"></img></button>
                        </header>
                        <form className="form" onSubmit={handleSubmit}>
                            <div className="form__group">
                                <label className="form__label" htmlFor="title">Title</label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    className="form__input"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>
                            <div className="form__group">
                                <label className="form__label" htmlFor="image">İmage URL</label>
                                <input type="text" id="image" name="image" className="form__input" value={image} onChange={(e) => setImage(e.target.value)} />
                            </div>
                            <div className="form__group">
                                <label className="form__label" htmlFor="description">Description</label>
                                <textarea type="text" id="description" name="description" className="form__textarea" value={description} onChange={(e) => setDescrition(e.target.value)} />
                            </div>
                            <button className="form__button" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            }
        </>
    )
}

export default Modal
