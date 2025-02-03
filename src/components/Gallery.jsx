// src/components/Gallery.jsx
import React, { useState } from "react";
import { Modal, Button, Dropdown } from "react-bootstrap";

const images = [
  { id: 1, src: "image1.jpg", category: "Nature", alt: "Nature Image 1" },
  { id: 2, src: "image2.jpg", category: "Tech", alt: "Tech Image 1" },
  { id: 3, src: "image3.jpg", category: "Art", alt: "Art Image 1" },
  { id: 4, src: "image4.jpg", category: "Nature", alt: "Nature Image 2" },
  { id: 5, src: "image5.jpg", category: "Tech", alt: "Tech Image 2" },
  { id: 6, src: "image6.jpg", category: "Art", alt: "Art Image 2" },
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const handleShow = (image) => {
    setModalImage(image);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  const filterImages = selectedCategory === "All" ? images : images.filter(img => img.category === selectedCategory);

  return (
    <div className="container mt-4">
      <Dropdown>
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          Filter by Category
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => setSelectedCategory("All")}>All</Dropdown.Item>
          <Dropdown.Item onClick={() => setSelectedCategory("Nature")}>Nature</Dropdown.Item>
          <Dropdown.Item onClick={() => setSelectedCategory("Tech")}>Tech</Dropdown.Item>
          <Dropdown.Item onClick={() => setSelectedCategory("Art")}>Art</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <div className="gallery-grid mt-4 row">
        {filterImages.map((image) => (
          <div key={image.id} className="col-md-4 col-6 mb-4">
            <img
              src={image.src}
              alt={image.alt}
              className="img-fluid"
              style={{ cursor: "pointer", objectFit: "cover", width: "100%", height: "200px" }}
              onClick={() => handleShow(image)}
            />
          </div>
        ))}
      </div>

      <Modal show={showModal} onHide={handleClose} centered size="lg">
        <Modal.Body>
          <img
            src={modalImage?.src}
            alt={modalImage?.alt}
            className="img-fluid"
            style={{ objectFit: "contain", width: "100%" }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Gallery;
