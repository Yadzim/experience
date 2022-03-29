import { FC, useState } from "react";
import {
  Subtitle,
  Title,
  Container,
  Flex,
} from "../common/global-style/global-style";
import { Img, Wrapper, Tabs, TabElement, TabText } from "./support.e";
import { SupportProps } from "./support.t";
import SwipeableViews from "react-swipeable-views";
import SupportImg from "../../assets/images/support/support.png";

const Support: FC<SupportProps> = () => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <>
      <Wrapper>
        <Container>
          <Title>Qo’llab - quvvatlash</Title>
          <Img src={SupportImg} />
          <Subtitle>Zoom Payment Address FAQ</Subtitle>
          <p>
            Customers may have received an email notification that Zoom’s
            payment lockbox is moving to a new location. Visit our FAQ page for
            more information.
          </p>
          <Subtitle>Quickstart Guides</Subtitle>
          <Tabs>
            <Flex>
              <TabElement
                onClick={() => setTabIndex(0)}
                className={tabIndex === 0 ? "active" : ""}
              >
                Owner & Admins
              </TabElement>
              <TabElement
                onClick={() => setTabIndex(1)}
                className={tabIndex === 1 ? "active" : ""}
              >
                Users & Participants
              </TabElement>
              <TabElement
                onClick={() => setTabIndex(2)}
                className={tabIndex === 2 ? "active" : ""}
              >
                Top 20 Recourses
              </TabElement>
              <SwipeableViews index={tabIndex}>
                <TabText>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose (injected humour
                  and the like)
                </TabText>
                <TabText>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose (injected humour
                  and the like)
                </TabText>
                <TabText>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose (injected humour
                  and the like)
                </TabText>
              </SwipeableViews>
            </Flex>
          </Tabs>
        </Container>
      </Wrapper>
    </>
  );
};

export default Support;
