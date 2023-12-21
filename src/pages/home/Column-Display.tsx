/* eslint-disable @typescript-eslint/no-unused-vars */
import { Form } from "semantic-ui-react";
import { DisplayType } from ".";
import Card from "../../components/Card/Card";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

export interface DisplayData {
  id: number;
  overview: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
  title: string;
  name: string;
}

interface ColumnDisplayProps {
  data: DisplayData[];
  displayType: DisplayType;
}

const ColumnDisplay = (ColumnDisplayProps: ColumnDisplayProps) => {
  const [rating, setRating] = useState<number>(0);
  const { data, displayType } = ColumnDisplayProps;

  const {} = useMutation({
    mutationKey: ["rateMovie"],
    mutationFn: (id: number) => rateMovies(id, rating),
  });

  const {} = useMutation({
    mutationKey: ["rateTvShows"],
    mutationFn: (id: number) => rateTvShows(id, rating),
  });

  return (
    <div className="columndisplay">
      {data.map((DisplayData: DisplayData) => (
        <div className="card-input-container">
          <Card displayType={displayType} DisplayData={DisplayData} />
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
                    onClick: () => console.log(rating),
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
