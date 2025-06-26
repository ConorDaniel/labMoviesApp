import React from "react";
import PageTemplate from "../components/templateMoviePage";
import ReviewForm from "../components/reviewForm";
import { useLocation } from "react-router-dom";
import { MovieDetailsProps } from "../types/interfaces";

const WriteReviewPage: React.FC = () => {
  const location = useLocation();
  const movie = location.state?.movie as MovieDetailsProps;

  return (
    <>
      {movie ? (
        <PageTemplate movie={movie}>
          <ReviewForm {...movie} />
        </PageTemplate>
      ) : (
        <p>Waiting for movie review details</p>
      )}
    </>
  );
};

export default WriteReviewPage;
