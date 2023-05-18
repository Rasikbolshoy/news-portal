import React from "react";
import styled from "styled-components";
import share from "../../assets/share-2.svg";
import urlImages from "../../assets/Rectangle-7.png";
import urlImage1 from "../../assets/Rectangle-8.svg";
import urlImage2 from "../../assets/Rectangle.png";
import urlImage3 from "../../assets/Rectangle-10.png";
import urlImage4 from "../../assets/Rectangle-11.png";
import likes from "../../assets/heart.svg";

const news = [
  {
    url: urlImages,
    date: "29.11.2022",
    likeIcon: likes,
    headNews: "Заголовок новости",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    next: "Читать дальше>>",
    img: share,
  },
  {
    url: urlImage1,
    date: "29.11.2022",
    likeIcon: likes,
    headNews: "Заголовок новости",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    next: "Читать дальше>>",
    img: share,
  },
  {
    url: urlImage2,
    date: "29.11.2022",
    likeIcon: likes,
    headNews: "Заголовок новости",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    next: "Читать дальше>>",
    img: share,
  },
  {
    url: urlImage3,
    date: "29.11.2022",
    likeIcon: likes,
    headNews: "Заголовок новости",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    next: "Читать дальше>>",
    img: share,
  },
  {
    url: urlImage4,
    date: "29.11.2022",
    likeIcon: likes,
    headNews: "Заголовок новости",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    next: "Читать дальше>>",
    img: share,
  },
];
export const Main = () => {
  return (
    <Container>
      <Form>
        <h3>Фильтрация</h3>
        <div>
          <input type="checkbox" />
          <h6>спорт</h6>
        </div>
        <div>
          <input type="checkbox" />
          <h6>Политика</h6>
        </div>{" "}
        <div>
          <input type="checkbox" />
          <h6>Звезды</h6>
        </div>{" "}
        <div>
          <input type="checkbox" />
          <h6>Искусство</h6>
        </div>
        <div>
          <input type="checkbox" />
          <h6>Мода</h6>
        </div>
        <button>Применить</button>
      </Form>
      <div>
        {news.map((item) => {
          console.log(item.url);
          return (
            <div>
            <ContainerBlock>
              <img src={item.url} />
              <BlockItem>
                <BlockImage>
                  <p>{item.date}</p>
                  <img src={item.likeIcon} />
                </BlockImage>
                <h1>{item.headNews}</h1>
                <p>{item.text}</p>
                <h5>{item.next}</h5>
                <img
                  style={{
                    width: "24px",
                    height: "24px",
                    marginTop: "15px",
                    marginBottom: "10px",
                  }}
                  src={item.img}
                />
              </BlockItem>
            </ContainerBlock>
            <Span/>
            </div>
          );
        })}
      </div>
    </Container>
  );
};
// const Div=styled.div`
// display:flex;
// flex-de`
const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 127px;
  margin: 46px 200px 16px 127px;
`;
const ContainerBlock = styled.div`
  width: 70%;
  height: 211px;
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 8px;
  margin-bottom: 32px;
`;
const BlockItem = styled.div`
  width: 100%;
  height: 211px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    color: #000000;
  }
  p {
    width: 546px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #858080;
  }
  h5 {
    width: 132px;
    height: 24px;
    font-weight: 400;
    font-size: 16px;
    text-decoration-line: underline;
    color: #7e5bc2;
  }
  img {
    width: 40px;
    height: 40px;
  }
`;

const BlockImage = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  p {
    font-weight: 400;
    color: #858080;
  }
  img {
    width: 24px;
    height: 24px;
  }
`;
const Form = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  margin-top: 10px;
  gap: 15px;
  div {
    display: flex;
    gap: 10px;
    h6 {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 18px;
      color: #000000;
      order: 1;
    }
  }
  h3 {
    width: 108px;
    height: 21px;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    color: #000000;
  }
  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 168px;
    height: 30px;
    background: #7e5bc2;
    border-radius: 10px;
    color: #fff;
    border-color: #7e5bc2;
    transition: 0.4s ease;
    &:hover {
      background-color: #fff;
      color: #000000;
      border-color:#000;
    }
  }
`;
const Span = styled.hr`
border: 1px solid #D9D9D9;
margin-bottom: 20px
`