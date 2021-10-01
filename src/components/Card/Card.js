import { useState } from 'react';
import Modal from '../Modal';
import StarRating from '../Stars';
import './Card.scss';

function Card({ post, deletePost, updatePost }) {

    const [showModal, setShowModal] = useState(false);

    //Open Modal
    const openModal = () => {
        setShowModal(prev => !prev);
    }

    return (
        <div className="card">
            <img className="card__img" src={post.image} alt={post.title} />
            <div className="card__category">{post.category}</div>
            <h2 className="card__title">{post.title}</h2>
            <StarRating />
            <p className="card__desc">{post.description}</p>
            <div className="card__buttons">
                <button className="card__button card__button--delete" onClick={() => deletePost(post.id)}>Delete</button>
                <button className="card__button card__button--edit" onClick={openModal}>Edit</button>
            </div>
            <Modal showModal={showModal} post={post} setShowModal={setShowModal} updatePost={updatePost} />
        </div>
    )
}

export default Card;