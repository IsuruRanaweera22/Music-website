const Songs = [
  {
    id: 1,
    favourite: false,
    songName: "Hotel Room Service",
    artist: "Pitbull",
    song: "https://firebasestorage.googleapis.com/v0/b/music-web-7be0d.appspot.com/o/Songs%2FPitbullHotelRoomService.mp3?alt=media&token=a58be6bd-5d0c-4873-8019-a70ecd6fdffa",
    imgSrc:"https://firebasestorage.googleapis.com/v0/b/music-web-7be0d.appspot.com/o/Images%2FHotel%20Room%20Service.jpeg?alt=media&token=f02ac75b-74b2-4557-8590-a08bb006bcb1",
  },
  {
    id: 2,
    favourite: false,
    songName: "No Mercy",
    artist: "Bravo Hits",
    song: "https://firebasestorage.googleapis.com/v0/b/music-web-7be0d.appspot.com/o/Songs%2FPlease%20don't%20go%20%20%20(No%20mercy).mp3?alt=media&token=f5273d3e-ad6b-4b85-9a96-9b23feaab15f",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/music-web-7be0d.appspot.com/o/Images%2FNo%20Mercy.jpeg?alt=media&token=320af061-19f2-4ec7-bab7-95b5732b4acb",
  },
  {
    id: 3,
    favourite: true,
    songName: "La La La",
    artist: "Shakira",
    song: "https://firebasestorage.googleapis.com/v0/b/music-web-7be0d.appspot.com/o/Songs%2FShakira%20-%20La%20La%20La%20(Brazil%202014)%20ft.%20Carlinhos%20Brown.mp3?alt=media&token=5a35b2e2-f730-4580-9dd6-4fdea41c74e8",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/music-web-7be0d.appspot.com/o/Images%2FLa%20La%20La.jpeg?alt=media&token=5bc6c94e-5465-45e2-8191-dc254827abaf",
  },
  {
    id: 4,
    favourite: false,
    songName: "Lo Quiero A Morir",
    artist: "Shakira",
    song: "https://firebasestorage.googleapis.com/v0/b/music-web-7be0d.appspot.com/o/Songs%2FShakira%20-%20Lo%20Quiero%20A%20Morir%20%5B320%5D.mp3?alt=media&token=3eaecb9a-6fbc-49d9-b6fd-1b484f0608f1",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/music-web-7be0d.appspot.com/o/Images%2FLo%20Quiero%20A%20Morir.jpeg?alt=media&token=246f75a6-2292-414e-ba29-c6b8c4015401",
  },
  {
    id: 5,
    favourite: false,
    songName: "Remix",
    artist: "Shakira",
    song: "https://firebasestorage.googleapis.com/v0/b/music-web-7be0d.appspot.com/o/Songs%2FShakira%20-%20The%20Remixes%20-%2001%20-%20Shakira%20DJ%20Memegamix.mp3?alt=media&token=3e1fd509-cb61-42c5-b0f7-390fe7c5ed5a",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/music-web-7be0d.appspot.com/o/Images%2FRemix.jpeg?alt=media&token=8dd330a5-dc43-4ea0-a651-41b3b6460bf9",
  },
  {
    id: 6,
    songName: "Addicted to you",
    artist: "Shakira",
    song: "https://firebasestorage.googleapis.com/v0/b/music-web-7be0d.appspot.com/o/Songs%2FShakira%20Ft%20BabyQ%20-%20Addicted%20To%20You.mp3?alt=media&token=a8afa4c7-db96-46de-a03a-4e0f91f17a8a",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/music-web-7be0d.appspot.com/o/Images%2FAddicted%20to%20you.jpeg?alt=media&token=36246eb7-aae5-4674-afc0-d822e810703e",
  },
  {
    id: 7,
    favourite: false,
    songName: "Shakira",
    artist: "Shakira",
    song: "https://firebasestorage.googleapis.com/v0/b/music-web-7be0d.appspot.com/o/Songs%2FShakira%20Ft%20LiDj-Boxer).mp3?alt=media&token=70768a11-46b6-4c90-9773-ee5c4fbd34bf",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/music-web-7be0d.appspot.com/o/Images%2FShakira.jpeg?alt=media&token=f92dcc5b-0818-44a7-84bf-1751eb17d253",
  },
  {
    id: 8,
    favourite: false,
    songName: "Sun Raha Hai",
    artist: "Aakshe",
    song: "https://firebasestorage.googleapis.com/v0/b/music-web-7be0d.appspot.com/o/Songs%2FSun%20Raha%20Hai%20Aakshe%20ReMiX-www.shaafm.lk.mp3?alt=media&token=f2431cf5-f25a-49cd-8bbf-49e45963fa52",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/music-web-7be0d.appspot.com/o/Images%2FSun%20Raha%20Hai.jpeg?alt=media&token=24e24a9d-23db-4aad-8a4c-31df099d97ea",
  },
  {
    id: 9,
    favourite: false,
    songName: "Pump It",
    artist: "Black Eyed Peas",
    song: "https://firebasestorage.googleapis.com/v0/b/music-web-7be0d.appspot.com/o/Songs%2FThe%20Black%20Eyed%20Peas%20-%20Pump%20It.mp3?alt=media&token=05bff7fc-b5fe-4bc8-b7ab-8cc1f0609ad4",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/music-web-7be0d.appspot.com/o/Images%2FPump%20It.jpeg?alt=media&token=aa2c8cac-4657-43d4-ba66-dc056223290e",
  },
  {
    id: 10,
    favourite: false,
    songName: "Party Dance",
    artist: "Pitbull",
    song: "https://firebasestorage.googleapis.com/v0/b/music-web-7be0d.appspot.com/o/Songs%2Fpitbull-party-dance.mp3?alt=media&token=96025049-f3d0-4591-8d0c-53f201fd7f00",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/music-web-7be0d.appspot.com/o/Images%2FParty%20Dance.jpeg?alt=media&token=ed021dfd-5a79-47b4-a25b-8ecd6631ee20",
  },
];

export { Songs };