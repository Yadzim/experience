import styled from "styled-components";
const getColor = (props: any) => {
  if (props.isDragAccept) {
    return "#00e676";
  }
  if (props.isDragReject) {
    return "#ff1744";
  }
  if (props.isDragActive) {
    return "#2196f3";
  }
  return "#cecece";
};
export const Wrapper = styled.div`
  flex: 2;
  display: flex;
  flex-wrap: wrap;
  transition: border 0.24s ease-in-out;
  text-align: center;
  border-radius: 10px;
  margin: 12px;
  min-width: 200px;
  width: 100%;
  padding: 1rem 0px;
  background: #f6f5f5;
  border: 2px dashed ${(props) => getColor(props)};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .example {
    color: #818181;
    opacity: 0.6;
  }

  .browse {
    margin: 0px 2px;
    cursor: pointer;
    color: var(--main-color);
  }
`;
