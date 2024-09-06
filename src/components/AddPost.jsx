import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddPost() {
  const [image, setImage] = useState(null); // State for storing the image
  const [title, setTitle] = useState(""); // State for storing the post title
  const [category, setCategory] = useState(""); // State for storing the post category
  const [description, setDescription] = useState(""); // State for storing the post description

  const navigate = useNavigate();

  // Function to handle adding a new post
  const addPostInfo = async () => {
    let formField = new FormData(); // Using FormData to handle file uploads and other data

    formField.append("title", title);
    formField.append("category", category);
    formField.append("description", description);

    if (image !== null) {
      formField.append("image", image);
    }

    try {
      // Make a POST request to add a new post
      await axios({
        method: "post",
        url: "http://127.0.0.1:8000/posts/",
        data: formField,
      });
      alert("Post added successfully!");
      navigate("/agriculture"); // Redirect to the agriculture page after adding
    } catch (error) {
      console.error("Error adding the post:", error);
      alert("Failed to add the post.");
    }
  };

  return (
    <div className="container">
      <h2>Add New Post</h2>

      {/* Input for Title */}
      <div className="form-group">
        <input
          required
          type="text"
          className="form-control"
          placeholder="Post Title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      {/* Input for Category */}
      <div className="form-group">
        <input
          required
          type="text"
          className="form-control"
          placeholder="Category"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>

      {/* Input for Image */}
      <div className="form-group">
        <input
          required
          type="file"
          className="form-control"
          placeholder="Image"
          name="image"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </div>

      {/* Input for Description */}
      <div className="form-group">
        <textarea
          required
          className="form-control"
          placeholder="Description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>

      {/* Button to Submit the Form */}
      <button className="btn btn-success" onClick={addPostInfo}>
        Add Post
      </button>
    </div>
  );
}
