import { useState } from "react";

import {
  HomeContainer,
  Heading,
  StyledForm,
  StyledTextArea,
  MediaLabel,
  MediaPreview,
  StyledButton,
  Divider,
} from "./Home.styled";

const Home = () => {
  const [src, setSrc] = useState("");
  // function to preview the image selected before posting
  const showPreview = (e) => {
    if (e.target.files.length > 0) {
      const url = URL.createObjectURL(e.target.files[0]);
      setSrc(url);
    }
  };

  return (
    <HomeContainer>
      <Heading>Post Something</Heading>

      <StyledForm>
        <StyledTextArea
          required
          placeholder="Type what’s happening around you, ask a question..."
        />
        <MediaLabel src={src}>
          Add a Picture or Video
          <input
            type="file"
            name="media"
            accept="image/*, video/*"
            onChange={(e) => showPreview(e)}
          />
        </MediaLabel>

        <MediaPreview src={src}>
          <img src={src} alt="" />
        </MediaPreview>

        <StyledButton>Post</StyledButton>

        <Divider />
      </StyledForm>
    </HomeContainer>
  );
};

export default Home;
