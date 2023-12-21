/* eslint-disable @typescript-eslint/no-unused-vars */
import { Form, Label } from "semantic-ui-react";
import { DisplayType } from ".";
import Card from "../../components/Card/Card";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { rateMovies, rateTvShows } from "./mutation";
import { toast } from "react-toastify";
import "react-toastify/ReactToastify.css";

export interface DisplayData {
  id: number;
  overview: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
  title: string;
  name: string;
  rating?: number;
}

interface ColumnDisplayProps {
  data: DisplayData[];
  displayType: DisplayType;
  isRated?: boolean;
}

const ColumnDisplay = (ColumnDisplayProps: ColumnDisplayProps) => {
  const [rating, setRating] = useState<number>(0);
  const { data, displayType } = ColumnDisplayProps;

  const onSuccess = () => {
    toast.success("Successfully Rated!");
  };

  const onError = () => {
    toast.success("Something went Wrong!");
  };

  const { mutate: rateMoviesMutation } = useMutation({
    mutationKey: ["rateMovie"],
    mutationFn: (id: number) => rateMovies(id, rating),
    onSuccess,
    onError,
  });

  const { mutate: rateTvShowMutation } = useMutation({
    mutationKey: ["rateTvShows"],
    mutationFn: (id: number) => rateTvShows(id, rating),
    onSuccess,
    onError,
  });

  const rate =
    displayType === DisplayType.Movies
      ? rateMoviesMutation
      : rateTvShowMutation;
  return (
    <div className="columndisplay">
      {data?.map((DisplayData: DisplayData) => (
        <div className="card-input-container" key={DisplayData.id}>
          <Card displayType={displayType} DisplayData={DisplayData} />
          {ColumnDisplayProps.isRated && (
            <Label
              style={{
                marginTop: "1rem",
                width: "10rem",
              }}
            >
              Your Rating : {DisplayData.rating}
            </Label>
          )}
          <Form
            style={{
              marginTop: 10,
            }}
          >
            <Form.Group inline>
              <Form.Field>
                <Form.Input
                  type="number"
                  min="0"
                  max="10"
                  step="0.5"
                  onChange={(e) => setRating(Number(e.target.value))}
                  action={{
                    labelPosition: "right",
                    icon: "star",
                    content: "Rate",
                    onClick: () => rate(DisplayData.id),
                  }}
                />
              </Form.Field>
            </Form.Group>
          </Form>
        </div>
      ))}
    </div>
  );
};

export default ColumnDisplay;
