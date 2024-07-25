import React, { useState } from "react";

const TourForm = ({ tour, onClose }) => {
  const [name, setName] = useState(tour ? tour.name : "");
  const [images, setImage] = useState(tour ? tour.images : "");
  const [description, setDescription] = useState(tour ? tour.description : "");
  const [price, setPrice] = useState(tour ? tour.price : "");
  const [destination, setDestination] = useState(tour ? tour.destination : "");
  const [maxGroupSize, setMaxGroupSize] = useState(
    tour ? tour.maxGroupSize : ""
  );
  console.log(tour);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitted tour:", {
      id: tour?.id,
      name,
      images,
      description,
      price,
      destination,
      maxGroupSize,
    });
    try {
      const res = await fetch(`/api/v1/tours/${tour._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          images,
          description,
          price,
          destination,
          maxGroupSize,
        }),
      });
      const data = res.json();
      if ((data.success = false)) {
        return;
      }
    } catch (error) {
      console.log(error);
    }

    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <h2 className="text-2xl">{tour ? "Edit Tour" : "Add Tour"}</h2>
      <label className="flex flex-col">
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="border p-2 rounded"
        />
      </label>
      <label className="flex flex-col">
        Image URL:
        <input
          type="text"
          value={images}
          onChange={(e) => setImage(e.target.value)}
          required
          className="border p-2 rounded"
        />
      </label>
      <label className="flex flex-col">
        Description:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="border p-2 rounded"
        ></textarea>
      </label>
      <label className="flex flex-col">
        Price:
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
          className="border p-2 rounded"
        />
      </label>
      <label className="flex flex-col">
        Destination:
        <input
          type="text"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          required
          className="border p-2 rounded"
        />
      </label>
      <label className="flex flex-col">
        Max Group Size:
        <input
          type="number"
          value={maxGroupSize}
          onChange={(e) => setMaxGroupSize(e.target.value)}
          required
          className="border p-2 rounded"
        />
      </label>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        {tour ? "Update" : "Create"}
      </button>
    </form>
  );
};

export default TourForm;
