import React, { FC } from "react";
import { Container } from "../../..";
import { Flex, FlexItem30 } from "../../../common/global-style/global-style";
import { AdditionalSection, AdditionTitle } from "./additional.e";
import { AdditionalProps } from "./additional.t";

const sections = [
  {
    id: 1,
    title: "Promo kod nima o’zi?",
    info: "Internetda xarid qilgan har bir kishi xarid uchun to‘lovni amalga oshirishdan oldin “promo-kodni kiriting” maydoniga e’tibor bergan bo‘lishi kerak. Havolani bosish orqali siz promo-kodlar haqida hamma narsani bilib olasiz.",
    urlText: "Promo-kodlar va kupon kodlari haqida ko'proq",
    url: "#",
  },
  {
    id: 2,
    title: "Xarid qilish bo'yicha maslahatlar",
    info: "Internetda xarid qilgan har bir kishi xarid uchun to‘lovni amalga oshirishdan oldin “promo-kodni kiriting” maydoniga e’tibor bergan bo‘lishi kerak. Havolani bosish orqali siz promo-kodlar haqida hamma narsani bilib olasiz.",
    urlText: "Promo-kodlar va kupon kodlari haqida ko'proq",
    url: "#",
  },
  {
    id: 3,
    title: "Sovg'a sertifikatlari",
    info: "Internetda xarid qilgan har bir kishi xarid uchun to‘lovni amalga oshirishdan oldin “promo-kodni kiriting” maydoniga e’tibor bergan bo‘lishi kerak. Havolani bosish orqali siz promo-kodlar haqida hamma narsani bilib olasiz.",
    urlText: "Promo-kodlar va kupon kodlari haqida ko'proq",
    url: "#",
  },
];

const Additional: FC<AdditionalProps> = () => {
  return (
    <React.Fragment>
      <AdditionalSection>
        <Container>
          <Flex>
            {sections.map((section) => {
              return (
                <FlexItem30 key={section.id}>
                  <AdditionTitle>{section.title}</AdditionTitle>
                  <p>{section.info}</p>
                  <a href={section.url}>{section.urlText}</a>
                </FlexItem30>
              );
            })}
          </Flex>
        </Container>
      </AdditionalSection>
    </React.Fragment>
  );
};

export default Additional;
