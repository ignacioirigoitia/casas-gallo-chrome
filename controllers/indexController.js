module.exports = {
    index: (req, res) => {
        res.render('index', { title: 'Tu Hospedaje Delta' })
    },
    puertoGallo: (req, res) => {

        let imagenes = ["puertogallo1.jpg","puertogallo3.jpg","puertogallo4.jpg","puertogallo5.jpg","puertogallo6.jpg","puertogallo7.jpg","puertogallo8.jpg","puertogallo9.jpg","puertogallo10.jpg","puertogallo11.jpg","puertogallo12.jpg","puertogallo13.jpg","puertogallo14.jpg","puertogallo15.jpg","puertogallo16.jpg","puertogallo2.jpg",]

        res.render("puertoGallo", { title: "Puerto Gallo", imagenes })
    },
    timbu: (req, res) => {

        let imagenes = ["chana.jpg","chana1.jpg","chana2.jpg","chana3.jpg","chana4.jpg","chana5.jpg","chana6.jpg","chana7.jpg","chana8.jpg","chana9.jpg","chana10.jpg","chana11.jpg","chana12.jpg",]

        res.render("timbu", { title: "Timbu", imagenes })
    },
    chana: (req, res) => {

        let imagenes = ["chana.jpg","chana1.jpg","chana2.jpg","chana3.jpg","chana4.jpg","chana5.jpg","chana6.jpg","chana7.jpg","chana8.jpg","chana9.jpg","chana10.jpg","chana11.jpg","chana12.jpg",]

        res.render("chana", { title: "Chana", imagenes })
    },
};