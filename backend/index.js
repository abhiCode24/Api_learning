import express from 'express';

const app = express();

const port = process.env.PORT || 3000;

app.get('/api/foodProd', (req,res) => {           // this is an api route ismai api ka data hoga...
    const foodData = [
        {
            name: "Boilded Egg",
            price: 10,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/egg.png",
            type: "breakfast",
        },
        {
            name: "RAMEN",
            price: 25,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/ramen.png",
            type: "lunch",
        },
        {
            name: "GRILLED CHICKEN",
            price: 45,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/chicken.png",
            type: "dinner",
        },
        {
            name: "CAKE",
            price: 18,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/cake.png",
            type: "breakfast",
        },
        {
            name: "BURGER",
            price: 23,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/burger.png",
            type: "lunch",
        },
        {
            name: "PANCAKE",
            price: 25,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "dinner",
        },
    ];

    // http://localhost:3000/api/foodprod?search=       // So this is query parameter google pr bhi ese hi search hota h ab equals to mai jo bhi likhoge vo vaha search hoga...
    if(req.query.search){
        console.log(req.query.search);
        const SelectedFood = foodData.filter(food => food.name.includes(req.query.search))
        res.send(SelectedFood);
        return;
    }

    setTimeout(()=>{
        res.send(foodData);
    }, 3000)
})

app.listen(port, ()=>{
    console.log('the server is running')
    // console.log(req.query.search);
})