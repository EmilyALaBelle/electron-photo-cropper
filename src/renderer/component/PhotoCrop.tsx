import { Link } from "react-router-dom";

export default function PhotoCrop() {
  return (
    <>
      <h1>Please choose a photo to crop</h1>
       <input type="file" accept="image/*"></input>
      <Link to="/">back</Link>
    </>
  );
}
