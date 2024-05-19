import { createFlickr } from "flickr-sdk";

export const getPhotos = async () => {
  const { flickr } = createFlickr(process.env.REACT_APP_FLICKR_API_KEY);
  const serverId = process.env.REACT_APP_FLICKR_SERVER_ID;
  const res = await flickr("flickr.photosets.getPhotos", {
    photoset_id: process.env.REACT_APP_FLICKR_PHOTOSET_ID,
    user_id: process.env.REACT_APP_FLICKR_USER_ID,
  });

  //   type FlickrPhotoInfo = {
  //     farm: number;
  //     id: string;
  //     isfamily: number;
  //     isfriend: number;
  //     isprimary: string;
  //     ispublic: number;
  //     secret: string;
  //     server: string;
  //     title: string;
  //   };

  const photos = res.photoset.photo.map((item) => {
    console.log(item);
    const photoUrl = `https://live.staticflickr.com/${serverId}/${item.id}_${item.secret}.jpg`;
    return photoUrl;
  });
  return photos;
};
