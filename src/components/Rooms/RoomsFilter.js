import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Title from "../Home/Title";
import {
  updateSortedRooms,
  updateFilterType,
  updateFilterCapacity,
  updateFilterPrice,
  updateFilterMinSize,
  updateFilterMaxSize,
  updateFilterBreakfast,
  updateFilterPets,
} from "../../actions";

const RoomsFilter = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  let {
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
    rooms,
  } = state.hotel;

  console.log("BREAKFAST", breakfast);

  const handleChange = (event) => {
    const target = event.target;
    console.log("TARGET", target.checked);
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    console.log("EVENT NAME", name);
    console.log("EVENT VALUE", value);
    if (name === "type") {
      dispatch(updateFilterType(value));
    } else if (name === "capacity") {
      dispatch(updateFilterCapacity(value));
    } else if (name === "price") {
      dispatch(updateFilterPrice(value));
    } else if (name === "minSize") {
      dispatch(updateFilterMinSize(value));
    } else if (name === "maxSize") {
      dispatch(updateFilterMaxSize(value));
    } else if (name === "breakfast") {
      dispatch(updateFilterBreakfast(value));
    } else if (name === "pets") {
      dispatch(updateFilterPets(value));
    }
  };

  useEffect(() => {
    filterRooms();
  }, [type, capacity, price, minSize, maxSize, breakfast, pets]);

  const filterRooms = () => {
    // Copy rooms
    let tempRooms = [...rooms];
    let filteredRooms = tempRooms;

    // Transform value
    capacity = parseInt(capacity);

    // Filter by Type
    if (type !== "all") {
      tempRooms = tempRooms.filter((room) => room.fields.type === type);
    }

    // Filter by Capacity
    if (capacity !== 1) {
      tempRooms = tempRooms.filter((room) => room.fields.capacity === capacity);
    }

    // Filter by Price
    tempRooms = tempRooms.filter((room) => room.fields.price <= price);

    // Filter by Size
    tempRooms = tempRooms.filter(
      (room) => room.fields.size >= minSize && room.fields.size <= maxSize
    );

    // Filter by Breakfast
    if (breakfast) {
      tempRooms = tempRooms.filter((room) => room.fields.breakfast === true);
    }

    // Filter by Pets
    if (pets) {
      tempRooms = tempRooms.filter((room) => room.fields.pets === true);
    }

    dispatch(updateSortedRooms(tempRooms));
  };

  const getUnique = (items, value) => {
    return [...new Set(items.map((item) => item.fields[value]))];
  };

  // Types for select
  let types = getUnique(rooms, "type");
  types = ["all", ...types];
  types = types.map((type, index) => {
    return (
      <option value={type} key={index}>
        {type}
      </option>
    );
  });

  let people = getUnique(rooms, "capacity");
  people = people.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/* Room Type Filter */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>

        {/* Guest Filter */}
        <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {people}
          </select>
        </div>

        {/* Price Filter */}
        <div className="form-group">
          <label htmlFor="price">room price ${price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        {/* Size Filter */}
        <div className="form-group">
          <label htmlFor="size">room size</label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              value={minSize}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              value={maxSize}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>

        {/* Extras Filter */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">pets</label>
          </div>
        </div>
      </form>
    </section>
  );
};

export default RoomsFilter;
