import Game from "@/components/game";

const data = 
[
  {
    name: "The Red Lion & Pineapple",
    area: "Acton",
    city: "London",
    images: [
      "https://www.jdwetherspoon.com/wp-content/uploads/2024/03/59_2-800x748.jpg.webp",
      "https://www.jdwetherspoon.com/wp-content/uploads/2024/03/59_1-800x748.jpg.webp",
      "https://www.jdwetherspoon.com/wp-content/uploads/2024/03/59_5-800x748.jpg.webp",
      "https://www.jdwetherspoon.com/wp-content/uploads/2024/03/59_6-800x748.jpg.webp",
      "https://www.jdwetherspoon.com/wp-content/uploads/2024/03/59_7-800x748.jpg.webp" 
    ]
  },
  {
    name: "The Crosse Keys",
    area: "Bank",
    city: "London",
    images: [
      "https://ocrpubs.s3-eu-west-1.amazonaws.com/3.jpg",
      "https://ocrpubs.s3-eu-west-1.amazonaws.com/7.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0XbN_d96fpbS4EdNrSaawGEt-6gVqn7oRxQ&s",
      "https://nightscard.com/wp-content/uploads/2021/08/The-Crosse-Keys-5.jpg",
      "https://www.goodbeergoodpubs.co.uk/wp-content/uploads/crosse-keys-monument-04.jpg"
    ]
  },
  {
    name: "Shakespeares Head",
    area: "Soho",
    city: "London",
    images: [
      "https://media-cdn.tripadvisor.com/media/photo-s/1e/5b/4c/5f/view-inside-the-pub.jpg",
      "https://www.londonworld.com/jpim-static/image/2023/02/21/09/Shakespeares%20Head%20%281%29.jpeg?crop=3:2,smart&trim=&width=640&quality=65",
      "https://farm5.static.flickr.com/4055/4463083846_f6c92c231a_m.jpg",
      "https://www.jdwetherspoon.com/wp-content/uploads/2024/06/506-feature-240x135.png",
      "https://staffblogs.le.ac.uk/consumingauthenticities/files/2015/02/image001.jpg"
    ]
  },
  {
    name: "Hamilton Hall",
    area: "Liverpool Street",
    city: "London",
    images: [
      "https://www.jdwetherspoon.com/wp-content/uploads/2024/06/42_14-800x748.jpg",
      "https://www.jdwetherspoon.com/wp-content/uploads/2024/06/42_19-800x748.jpg",
      "https://www.jdwetherspoon.com/wp-content/uploads/2024/06/42_7-800x748.jpg",
      "https://www.jdwetherspoon.com/wp-content/uploads/2024/06/42_22-800x748.jpg",
      "https://www.jdwetherspoon.com/wp-content/uploads/2024/06/42_23-800x748.jpg"
    ]
  },
  {
    name: "The Liberty Bounds",
    area: "Tower Hill",
    city: "London",
    images: [
      "https://media-cdn.tripadvisor.com/media/photo-s/10/ba/44/9a/liberty-bounds-interior.jpg",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/10/c6/34/photo9jpg.jpg?w=900&h=500&s=1",
      "https://www.londonworld.com/jpim-static/image/2023/02/21/09/Liberty%20Bounds%20final2.jpeg?crop=3:2,smart&trim=&width=640&quality=65",
      "https://img01.beerintheevening.com/1c/1cdf4e7f2de9051e158512094944da81.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-s/0c/f4/a7/56/20160910-120816-largejpg.jpg"
    ]
  },
  {
    name: "The Moon Under Water",
    area: "Leicester Square",
    city: "London",
    images: [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/61/e8/e7/the-bar.jpg?w=900&h=500&s=1",
      "https://s3-media0.fl.yelpcdn.com/bphoto/uATF0DVaAh2Z8jJA_MSwcA/348s.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-s/03/fe/b7/cf/the-moon-under-water.jpg",
      "https://s3-media0.fl.yelpcdn.com/bphoto/oDbArxBiKGd2UdD4pmi7Dw/348s.jpg",
      "https://www.jdwetherspoon.com/wp-content/uploads/2024/06/30_7-800x748.jpg"
    ]
  },
  {
    name: "Victoria Station",
    area: "Victoria",
    city: "London",
    images: [
      "https://www.jdwetherspoon.com/wp-content/uploads/2024/03/64-feature.jpg",
      "https://www.useyourlocal.com/imgs/pubs/1200x630/110324-034353_0064-dining04.jpg",
      "https://drunkenbunny.wordpress.com/wp-content/uploads/2016/10/victoria-station-spoons-back.jpg?w=1000&h=704",
      "https://media-cdn.tripadvisor.com/media/photo-s/0c/f4/3d/02/wetherspoons-victoria.jpg",
      "https://dineawardslondon.com/images/p912/wetherspoons-victoria-station-view-5.jpg"
    ]
  },
  {
    name: "The Willow Walk",
    area: "Victoria",
    city: "London",
    images: [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/30/18/69/9a/caption.jpg?w=700&h=700&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/a8/1c/07/photo1jpg.jpg?w=900&h=500&s=1",
      "https://media-cdn.tripadvisor.com/media/photo-s/0c/c1/2e/37/the-willow-walk-pub.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdqGzctEP-zc3XgZ0DdCNrm2ETOuj4uY3zuA&s",
      "https://static.standard.co.uk/s3fs-public/thumbnails/image/2018/09/14/16/willow-walk.jpg?quality=75&auto=webp&width=960"
    ]
  },
  {
    name: "The William Morris",
    area: "Hammersmith",
    city: "London",
    images: [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/31/71/69/6c/caption.jpg?w=1200&h=1200&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/98/f4/3f/ta-img-20180410-125846.jpg?w=1000&h=-1&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/3a/7d/d0/photo1jpg.jpg?w=1000&h=-1&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/3a/7d/ce/photo0jpg.jpg?w=1000&h=-1&s=1",
      "https://images.cdn.inapub.co.uk/photos/3dd43e90ba0640f0b85f5fc329419741.jpg?width=250&height=250&mode=max"
    ]
  },
  {
    name: "Walham Green",
    area: "Fulham",
    city: "London",
    images: [
      "https://www.jdwetherspoon.com/wp-content/uploads/2025/01/7634_-2-800x748.jpg",
      "https://www.jdwetherspoon.com/wp-content/uploads/2025/01/7634_-1-800x748.jpg",
      "https://www.jdwetherspoon.com/wp-content/uploads/2025/01/7634_-5-800x748.jpg",
      "https://www.jdwetherspoon.com/wp-content/uploads/2025/01/7634_-7-800x748.jpg",
      "https://www.jdwetherspoon.com/wp-content/uploads/2025/01/7634_-8-800x748.jpg"
    ]
  },
  {
    name: "The Rocket",
    area: "Putney",
    city: "London",
    images: [
      "https://www.jdwetherspoon.com/wp-content/uploads/2024/06/6283-feature.png",
      "https://www.jdwetherspoon.com/wp-content/uploads/2024/06/6283_3-800x748.jpg",
      "https://www.jdwetherspoon.com/wp-content/uploads/2024/06/6283_11-800x748.jpg",
      "https://www.jdwetherspoon.com/wp-content/uploads/2024/06/6283_28-800x748.jpg",
      "https://www.jdwetherspoon.com/wp-content/uploads/2024/06/6283_27-800x748.jpg"
    ]
  },
  {
    name: "The London & South Western",
    area: "Clapham Junction",
    city: "London",
    images: [
      "https://www.jdwetherspoon.com/wp-content/uploads/2024/03/7249_-2-800x748.jpg.webp",
      "https://www.jdwetherspoon.com/wp-content/uploads/2024/03/7249_-3-800x748.jpg.webp",
      "https://www.jdwetherspoon.com/wp-content/uploads/2024/03/7249_-4-800x748.jpg.webp",
      "https://www.jdwetherspoon.com/wp-content/uploads/2024/03/7249_-6-800x748.jpg.webp",
      "https://www.jdwetherspoon.com/wp-content/uploads/2024/03/7249_-9-800x748.jpg.webp"
    ]
  },
  {
    name: "The Rockingham Arms",
    area: "Elephant & Castle",
    city: "London",
    images: [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/4c/0d/b4/the-rockingham-arms.jpg?w=1200&h=1200&s=1",
      "https://www.jdwetherspoon.com/wp-content/uploads/2024/06/1260_14-800x748.jpg",
      "https://www.jdwetherspoon.com/wp-content/uploads/2024/06/1260_24-800x748.jpg",
      "https://www.jdwetherspoon.com/wp-content/uploads/2024/06/1260_47-800x748.jpg",
      "https://www.jdwetherspoon.com/wp-content/uploads/2024/06/1260_56-800x748.jpg"
    ]
  },
  {
    name: "The Masque Haunt",
    area: "Shoreditch",
    city: "London",
    images: [
      "https://img01.beerintheevening.com/70/70a00a0498400658b5ac287c4e901ee9.jpg",
      "https://www.jdwetherspoon.com/wp-content/uploads/2024/03/195-feature.jpg.webp",
      "https://d2s8km3brsjp0y.cloudfront.net/eyJidWNrZXQiOiJ3aGF0cHViIiwia2V5IjoiRUxDXC9FTEMrMTQ3NDAtNTg2MTUtNjAwLTQ1MC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgwMCwiaGVpZ2h0Ijo2MDAsImZpdCI6ImNvdmVyIn0sInJvdGF0ZSI6bnVsbH19",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/5a/2d/bf/photo0jpg.jpg?w=900&h=500&s=1",
      "https://media-cdn.tripadvisor.com/media/photo-s/07/ce/6b/3e/masque-haunt.jpg"
    ]
  }
];

async function getRandomIndex(length : number) {
  const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/random?length=${length}`, { cache: "no-store" });
  const data = await res.json();
  return data.index as number;
}

export default async function Home() {

  const selectedIndex = await getRandomIndex(data.length);

  return (
    <div className="flex min-h-screen justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="w-full flex justify-center mt-10 mb-20">
      <Game data={data} selectedIndex={selectedIndex}/>  
      </main>
    </div>
  );
}
