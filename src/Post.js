import React from "react";
import { HotelPostGridLoader } from "./ContentLoader";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

function Post({ loading, data = [], loadingMore }) {
  const limits = Array(6).fill(0);
  const limitMore = Array(3).fill(0);
  return (
    <div className="row">
      {data && data.length
        ? data.map(item => {
            return (
                <div className="col-lg-4 mb-5" key={item.id}>
                  <Card>
                    <CardImg
                      top
                      width="100%"
                      src={item.thumbnailUrl}
                      onLoad={() => console.log('loaded')}
                      alt="Card image cap"
                    />
                    <CardBody>
                      <CardTitle>
                        {item.title.length > 5
                          ? item.title.substring(0, 5)
                          : item.title}
                      </CardTitle>
                      <CardText>
                        {item.title.length > 50
                          ? item.title.substring(0, 50)
                          : item.title}
                      </CardText>
                      <Button color="info">Button</Button>
                    </CardBody>
                  </Card>
                </div>
            );
          })
        : null}
      {loading &&
        limits.map((item, i) => {
          return (
            <div className="col-lg-4 mb-5" key={i}>
              <HotelPostGridLoader />
            </div>
          );
        })}
        {loadingMore &&
        limitMore.map((item, i) => {
          return (
            <div className="col-lg-4 mb-5" key={i}>
              <HotelPostGridLoader />
            </div>
          );
        })}
    </div>

  );
}


export default Post;
