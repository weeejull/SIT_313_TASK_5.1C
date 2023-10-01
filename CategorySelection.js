import React, { useState } from 'react';
import './CategorySelection.css';

const NewPostPage = () => {
  // State to keep track of the selected post type
  const [selectedPostType, setSelectedPostType] = useState('');

  const handlePostTypeChange = (event) => {
    // Update the selected post type when a radio button is clicked
    setSelectedPostType(event.target.value);
  };

  return (
    <div className="question-article-box">
      <h1>CREATE A NEW POST</h1>
      <div className="post-type-selection">
        <div className='heading'>
          <label>SELECT POST TYPE :</label>
        </div>
        <div>
          <input
            type="radio"
            name="postType"
            value="question"
            checked={selectedPostType === 'question'}
            onChange={handlePostTypeChange}
          />
          <label>QUESTION</label>
        </div>
        <div>
          <input
            type="radio"
            name="postType"
            value="article"
            checked={selectedPostType === 'article'}
            onChange={handlePostTypeChange}
          />
          <label>ARTICLE</label>
        </div>
      </div>

      {selectedPostType === 'question' && (
        <div className="input-fields">
          <div className="input-group">
            <div className="input-title">
              <label htmlFor="questionTitle">Title:</label>
            </div>
          </div>
          <div className="input-group">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Start your question with how, what, why, etc"
              aria-label="Search"
            />
          </div>
          <div className="input-group">
            <label>Describe your problem:</label>
            <textarea id="questionDescription" name="questionDescription" rows="8" />
          </div>
          <div className="input-group">
            <div className="input-title">
              <label>Tags:</label>
            </div>
          </div>
          <div className="input-group">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Please add up to 3 tags to describe what your question is about e.g., Java"
              aria-label="Search"
            />
          </div>

        </div>
      )}

      {selectedPostType === 'article' && (
        <div className="input-fields">
          <div className="input-group">
            <div className="input-title">
              <label>Title</label>
            </div>
          </div>
          <div className="input-group">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Enter a descriptive title"
              aria-label="Search"
            />
          </div>
          <div className="input-group">
            <div className="input-title">
              <label>Abstract</label>
            </div>
          </div>
          <div className="input-group">
          <textarea id="questionDescription" name="questionDescription" rows="2" placeholder='Enter a 1 paragraph abstract'/>
          </div>
          <div className="input-group">
            <label>Article text</label>
            <textarea id="questionDescription" name="questionDescription" rows="4" placeholder='Enter a 1 paragraph abstract'/>
          </div>
          <div className="input-group">
            <div className="input-title">
              <label>Tags</label>
            </div>
          </div>
          <div className="input-group">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Please add up to 3 tags to describe what your question is about e.g., Java"
              aria-label="Search"
            />
          </div>
        </div>
      )}


      <button className="submit-button">Post</button>
    </div>
  );
};

export default NewPostPage;
