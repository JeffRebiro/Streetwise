import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function UpdatePost() {
    const { id } = useParams(); // Get the post ID from the URL
    const navigate = useNavigate();

    // State for the post fields
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState(null);

    useEffect(() => {
        // Fetch post data when the component mounts
        const fetchPost = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/posts/${id}/`);
                const { title, description, category, image } = response.data;
                setTitle(title);
                setDescription(description);
                setCategory(category);
                setImage(image);
            } catch (error) {
                console.error('Error fetching the post:', error);
            }
        };
        fetchPost();
    }, [id]);

    // Function to handle updating the post
    const handleUpdate = async (e) => {
        e.preventDefault();

        // Prepare the data to be sent in the request
        let formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('category', category);

        if (image) {
            formData.append('image', image);
        }

        try {
            // Make a PUT request to update the post
            await axios.put(`http://127.0.0.1:8000/posts/${id}/`, formData);
            alert('Post updated successfully!');
            navigate('/agriculture'); // Redirect to the agriculture page after updating
        } catch (error) {
            console.error('Error updating the post:', error);
            alert('Failed to update the post.');
        }
    };

    return (
        <div className="container">
            <h2>Update Post</h2>
            <form onSubmit={handleUpdate}>
                <div className="form-group">
                    <label>Title</label>
                    <input
                        type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Description</label>
                    <textarea
                        className="form-control"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Category</label>
                    <input
                        type="text"
                        className="form-control"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Image</label>
                    <input
                        type="file"
                        className="form-control"
                        onChange={(e) => setImage(e.target.files[0])}
                    />
                    {image && <img src={image} alt="Current" height="100" />}
                </div>

                <button type="submit" className="btn btn-primary">
                    Update Post
                </button>
            </form>
        </div>
    );
}

export default UpdatePost;
