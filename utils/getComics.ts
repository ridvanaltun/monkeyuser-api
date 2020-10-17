import axios from "axios";
import xml2js from "xml2js";

const imageRegex = new RegExp('(?<=img src=")(.*)(?=" alt)', "s");

const parser = new xml2js.Parser();

const MONKEYUSER_FEED_URL = "https://www.monkeyuser.com/feed.xml";

const execImage = (str) => {
  return imageRegex.test(str) && imageRegex.exec(str).length > 0
    ? imageRegex.exec(str)[0]
    : "";
};

const getComics = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(MONKEYUSER_FEED_URL)
      .then((response) => {
        parser
          .parseStringPromise(response.data)
          .then(function (result) {
            const comics = result.rss.channel[0].item
            // delete 147, there is no image
            let comicCount = comics.length
            comics.splice(comicCount - 147, 1)
            comicCount--
            resolve(
              result.rss.channel[0].item.map((comic, index) => {
                return {
                  id: comicCount - index,
                  title: comic.title[0],
                  published_at: comic.pubDate[0],
                  link: comic.link[0],
                  image_url: execImage(comic.description),
                };
              })
            );
          })
          .catch(function (err) {
            reject(err);
          });
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export default getComics;
