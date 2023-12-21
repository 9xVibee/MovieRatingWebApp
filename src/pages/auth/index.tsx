import { Form, Grid, Header } from "semantic-ui-react";
import "./index.css";
import { useMutation } from "@tanstack/react-query";
import { mutationLogin } from "./mutation";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();
  // useMutation is use to send the data
  const { mutate } = useMutation({
    mutationKey: ["login"],
    mutationFn: mutationLogin,
  });

  const handleLogin = async () => {
    // in order to make fetching we must call mutate
    await mutate();
    navigate("/");
  };

  return (
    <Grid
      textAlign="center"
      verticalAlign="middle"
      style={{
        height: "calc(100vh - 5rem)",
      }}
    >
      <Grid.Column
        style={{
          maxWidth: 450,
        }}
      >
        <Header
          as={"h2"}
          color="black"
          textAlign="center"
          className="heading-auth"
          style={{
            marginTop : "10rem"
          }}
        >
          Welcome! Login by registering as a Guest below.
        </Header>
        <Form size="large">
          <button onClick={handleLogin} className="button-54 login">
            Login
          </button>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default Auth;
