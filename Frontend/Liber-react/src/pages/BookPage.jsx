import { useLocation, Navigate } from "react-router-dom";
import BookInfoPanel from "../components/BookInfoPanel";
import "../style/BookPage.css";
import Navbar from "../components/Navbar";

export function BookPage(){
    const location = useLocation();
    const book = location.state?.book;

    if (!book) return <Navigate to="/HomePage" replace />;

    return (
        <>
            <Navbar/>
            <div className="sfondo-book-page">
                <BookInfoPanel book={book} />
            </div>
        </>
    );
}