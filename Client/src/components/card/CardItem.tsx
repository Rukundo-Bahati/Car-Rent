import styled from "styled-components";

const CardItem = ({ img, children }) => {
  return (
    <Container>
      <img src={img} className="img" alt="hoverable" />
      <div className="hover-content">{children}</div>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: inline-block;

  .img {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 8px;
    transition: transform 0.4s, border 0.4s;
  }

  &:hover .img {
    transform: scale(1.1);
    border: 1px solid #0ef;
  }

  .hover-content {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5); /* Optional: for a dark overlay */
    color: white;
    text-align: center;
    border-radius: 8px; /* Adjust this if your image has rounded corners */
  }

  &:hover .hover-content {
    display: flex;
    width:100%;
    flex-direction: column;
  }
`;

export default CardItem;
