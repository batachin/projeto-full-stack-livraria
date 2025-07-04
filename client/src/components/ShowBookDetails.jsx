import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "../App.css";
import axios from "axios";
function ShowBookDetails(props) {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [book, setBook] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`${apiUrl}/api/books/${id}`)
      .then((res) => {
        setBook(res.data);
      })
      .catch((err) => {
        console.log("Error from ShowBookDetails");
      });
  }, [id]);
  const onDeleteClick = (id) => {
    axios
      .delete(`${apiUrl}/api/books/${id}`)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        console.log("Error form ShowBookDetails_deleteClick");
      });
  };
  const BookItem = (
    <div>
      <table className="table table-hover table-dark">
        <tbody>
          <tr>
            <th className="number" scope="row">1</th>
            <td className="writing">Title</td>
            <td className="details">{book.title}</td>
          </tr>
          <tr>
            <th className="number" scope="row">2</th>
            <td className="writing">Author</td>
            <td className="details">{book.author}</td>
          </tr>
          <tr>
            <th className="number" scope="row">3</th>
            <td className="writing">ISBN</td>
            <td className="details">{book.isbn}</td>
          </tr>
          <tr>
            <th className="number" scope="row">4</th>
            <td className="writing">Publisher</td>
            <td className="details">{book.publisher}</td>
          </tr>
          <tr>
            <th className="number" scope="row">5</th>
            <td className="writing">Published Date</td>
            <td className="details">{book.published_date}</td>
          </tr>
          <tr>
            <th className="number" scope="row">6</th>
            <td className="writing">Description</td>
            <td className="details">{book.description}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
  return (
    <div className="ShowBookDetails">
      <div className="container">
        <div className="row">
          <div className="col-md-10 m-auto">
            <br /> <br />
            <Link
              to="/"
              className="btn-outline-warning-float-left"
            >
              Show Book List
            </Link>
          </div>
          <br />
          <div className="col-md-8 m-auto">
            <h1 className="display-4-text-center">Book's Record</h1>
            <p className="lead-text-center">View Book's Info</p>
            <hr /> <br />
          </div>
          <div className="col-md-10 m-auto">{BookItem}</div>
          <div className="options-edit">
          <div className="col-md-6 m-auto">
            <button
              type="button"
              className="btn-delete"
              onClick={() => {
                onDeleteClick(book._id);
              }}
            >
              Delete Book
            </button>
          </div>

            <Link
              to={`/edit-book/${book._id}`}
            >
              <button className="btn-edit">
                Edit Book
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ShowBookDetails;
