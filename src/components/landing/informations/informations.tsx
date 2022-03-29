import React, { FC } from "react";
import { Element } from "react-scroll";
import { InformationsProps } from "./informations.t";
import { Container } from "../..";
import { Flex, FlexItem50 } from "../../common/global-style/global-style";
import { InformationsSection, InformationTitle } from "./information.e";

// Images
import img1 from "../../../assets/images/informations/info1.png";
import img2 from "../../../assets/images/informations/info2.png";
import img3 from "../../../assets/images/informations/info3.png";
import img4 from "../../../assets/images/informations/info4.png";
import Additional from "./additional/additional";
import Accordion from "../../common/accordion/accordion";

const sections = [
  {
    key: 1,
    title: "INTERNET DO’KON",
    description:
      "Endilikda mahsulot xarid qilish uchun soatlab savdo markazlarini aylanishga hojat yo'q. Bizning masofaviy xarid tizimimiz orqali mahsulotlarni sotib olishingiz qilishingiz mumkin.",
    imgURL: img3,
    isReverse: false,
    batafsil: [
      "Internet-do'kon bo'limiga kiring.",
      "Yoqtirgan mahsulotingiz ustiga bosing.",
      "Mahsulot bilan tanishib chiqing.",
      "To’lov tizimlari orqali to’lang. (Visa, MasterCard, Click, Payme...)",
      "Yashash manzilingizni va muntazam ishlab turuvchi telefon raqamingizni kiriting.",
      "Yetkazib berish xizmatidan kelayotgan xabarlarni tekshirib boring. Mahsulotingiz 1-3 kun davomida yetkazib beriladi.",
    ],
  },
  {
    key: 1,
    title: "IJARAGA UY VA XONALAR",
    description:
      "Biz sizga sifatli uylarni oson topib beramiz! Bizda uylarni uzoq muddatga yoki qisqa muddatga ijaraga olishingiz mumkin va biz siz va uy beruvchi o’rtasida vositachi bo’lib turamiz ya’ni uy bilan bog’liq qandaydir muammolar bo’ladigan bo’lsa biz bog’lanib muammoni hal etishingiz mumkin! Xa aytgancha, uylar narxi studentbop.",
    imgURL: img2,
    isReverse: true,
    batafsil: [
      "O’zingiz ma’qul kelgan uyni tanlaysiz.",
      "Uy yoki xona haqida tanishib chiqing.",
      "Tegishli ma’lumotlar so’rovnomasini to’ldirasiz.",
      "Bizga yuborasiz va biz ko’rib chiqib siz bilan bog’lanamiz!",
    ],
  },
  {
    key: 1,
    title: "qaynoq chegirmalar",
    description:
      "Biz tomonimizdan taqdim qilingan promo kodlardan unumli foydalaning. Bu hali hammasi emas. Biz siz uchun ko’plab chegirma imtiyozlarini taqdim qilib boramiz",
    imgURL: img1,
    isReverse: false,
    warning: (
      <span>
        Chegirmalar qanday ishlaydi?
        <br /> Eslatma! <br />
        Faqatgina studentlargina bizning platformadan foydalana olishadi. Agar
        siz registratsiya bo'limidan muvaffaqiyatli o'tgan bo'lsangiz, bizning
        yopiq chegirmalar bo'limimizga kirishingiz mumkin bo'ladi.
      </span>
    ),
    batafsil: [
      "O'zingizga yoqgan chegirma miqdori kiritilgan e'lon ustiga bosasiz",
      "E'londa joylashgan chegirma kodini olish qismiga bosasiz",
      "Chegirmaning maxsus raqami sizning akkauntingizga va brikitirilgan email pochtangizga yuboriladi.",
      "Chegirmani taqdim qiluvchi savdo markaziga borib shaxsiy StudentCo akkauntingizni ko'rsatish orqali belgilangan chegirmada mahsulotlarni harid qilib olishingiz mumkin bo’ladi.",
      "Xarid qilib olgan mahsulotingizni chegirmadan keyingi summasini savdo markazida belgilangan to’lov turlari orqali amalga oshiring.",
    ],
  },
  {
    key: 1,
    title: "ish takliflari",
    description:
      "Bu platforma studentlar uchun O’zbekistonda yangi formatdagi ish topib berish maydonchasi!  Biz sizga hamkor ish beruvchi kompaniyalar orqali yaxshi daromadli bo’lgan to’liq yoki yarim stavkali ishlarni taklif qilamiz. Biz berayotgan ish takliflariga asosan soatbay yoki oylik haq to’lanadi.",
    imgURL: img4,
    isReverse: true,
    batafsil: [
      "O’zingizga ma’qul kelgan ish taklifi ustiga bosasiz.",
      "Ish haqida to’liq tanishib chiqasiz (ish vaqti, maosh, ish kunlari va h.k) ",
      "Pastda joylashgan so’rovnomalarni to’ldirib bizga yuborasiz.",
      "Biz ko’rib chiqib siz bilan telefon yoki elektron pochta orqali bog’lanamiz.",
    ],
  },
];

const Informations: FC<InformationsProps> = () => {
  return (
    <React.Fragment>
      <InformationsSection>
        <Container>
          {sections.map((section) => (
            <Element name={section.title} key={section.key}>
              <Flex className={!section.isReverse ? "flex reverse" : "flex"}>
                <FlexItem50>
                  <img src={section.imgURL} alt="info" />
                </FlexItem50>
                <FlexItem50 className="padding">
                  <InformationTitle>{section.title}</InformationTitle>
                  <p>{section.description}</p>
                  <Accordion
                    items={section.batafsil}
                    warning={section.warning}
                  />
                </FlexItem50>
              </Flex>
            </Element>
          ))}
        </Container>
      </InformationsSection>
      <Additional />
    </React.Fragment>
  );
};

export default Informations;
