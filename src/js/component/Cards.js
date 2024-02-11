import React from 'react'
import Card from './Card'
const cardsInfo = [
    {title: "Meet the new AMR24", 
    text: "We are excited to announce the new AMR24 for the 2024 F1 season. Come and meet the new Fernando Alonso and Lance Stroll F1 Car.", 
    image:"https://speedcafe.com/wp-content/uploads/2023/09/f9690b8b-877f-3dc6-dc1b-a5f5a0afea7e.jpg_12x8.jpg",
    link:"https://www.gpblog.com/en/news/255151/aston-martin-presentation-car-with-alonso-and-stroll.html"},
    {title: "Boeing faces new crisis", 
    text: "The last incident with the Boeing 737-MAX is delaying the production. Boeing is facing a new crisis with delays in their deliverys and cancelations.", 
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Boeing_737-8_MAX_N8704Q_rotated.jpg/1200px-Boeing_737-8_MAX_N8704Q_rotated.jpg",
    link: "https://www.nytimes.com/2024/02/05/business/boeing-737-max-problems.html"},
    {title: "Travelling around the world?", 
    text: "Preparing for travelling is sometimes a nightmare. Here you can find some tips to prepare your travell and survive the process.", 
    image:"https://www.usnews.com/object/image/00000186-7a58-d975-aff7-fffbc8910000/iguazu-falls-stock.jpg?update-time=1677089883729&size=responsive640",
    link: "https://www.nationalgeographic.com/travel/article/how-to-plan-a-trip-around-the-world"},
    {title: "Some Popcorn tonight?", 
    text: "Want to have a popcorn night and you don't know what to watch?. Let us help you choose a movie. Just tell us your preferences", 
    image:"https://www.simplyrecipes.com/thmb/Xzggu-Md45HKhhYSw4DK8tGlZ_I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Perfect-Popcorn-LEAD-41-4a75a18443ae45aa96053f30a3ed0a6b.JPG",
    link: "https://pickamovieforme.com/"}
]

const Cards = () => {
  return (
    <div className='container row mx-auto mt-3 mb-5 px-0'>
        {cardsInfo.map((card, index) => {
            return <Card title={card.title} text={card.text} image={card.image} link={card.link} key={index}/>
        })}
    </div>
  )
}

export default Cards