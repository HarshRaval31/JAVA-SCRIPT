do{
    fun()
}while(false)

function fun(){

    let h = [

        {
            Image : "https://www.cnet.com/a/img/resize/8bb1425f478823277caf4d4adbdc5c04a05d416a/hub/2017/08/03/75c3b0ae-5a2d-4d75-b72b-055247b4378f/marvelinfinitywar-captainamerica.jpg?auto=webp&fit=crop&height=675&width=1200",
            Dailog : "In three words I can sum up everything I've learned about life: it goes on.",
            Speaker : "Robert Frost"
        },
        {
            Image :"https://de.web.img2.acsta.net/img/2d/e3/2de38b23060fdb571936e6ac78ebc40a.jpg",
            Dailog :"The only way to do great work is to love what you do.",
            Speaker : "Steve Jobs"
        },
        {
            Image : "https://imgcdn.stablediffusionweb.com/2024/3/17/a48b027b-6404-41c1-abb4-bcc698706ae5.jpg",
            Dailog : "You must be the change you wish to see in the world.",
            Speaker : "Mahatma Gandhi"
        },
        {
            Image : "https://images.indianexpress.com/2020/04/captain-america-avengers-endgame-759.jpg?w=600",
            Dailog : "Life is what happens when you're busy making other plans.",
            Speaker : "John Lennon"
        },
        {
            Image : "https://ftw.usatoday.com/wp-content/uploads/sites/90/2019/04/captain-america.jpg?w=1200&h=600&crop=1",
            Dailog : "The best way to predict the future is to create it.",
            Speaker :  "Peter Drucker"
        }
    
    ]

        let ans = Math.floor(Math.random()* h.length);
        let a = h[ans]
        document.getElementById("harsh").innerHTML =  ` <img src="${h[ans].Image}"></img><h1>${h[ans].Dailog}<br><br> :-: ${h[ans].Speaker}</h1>`

}

