const products = [
    { 
        id: '1', 
        name: 'Cafe americano', 
        price: 1000, 
        category: 'granos', 
        img:'img/coffee2.jpg', 
        stock: 10, 
        description:'El café americano o american coffee es un tipo de preparación de procedencia estadounidense, en la que se diluye el café espresso en agua caliente, reduciendo así la intensidad de su sabor, pero, ¿conoces su historia?.'
    },
    { 
        id: '2', 
        name: 'Cafe Moca', 
        price: 1000, 
        category: 'leche', 
        img:'img/coffee3.jpg', 
        stock: 15, 
        description:'El moka es un café potente, muy aromático, pero hay quien lo encuentra amargo o especiado. Se suele servir muy fuerte y muy azucarado, en tacitas. Es un sabor muy apreciado en pastelería, helados y confitería.'
    },
    { 
        id: '3', 
        name: 'Cafe con Leche', 
        price: 1000, 
        category: 'leche', 
        img:'img/coffee1.jpg', 
        stock: 5, 
        description:'El café con leche es una de las bebidas más comunes que incluyen café. Consta básicamente de dos ingredientes: café y leche, con una proporción que varía de acuerdo a las costumbres locales, pero ronda la mezcla por partes iguales.'
    },
    { 
        id: '4', 
        name: 'Cafe de Granos', 
        price: 1000, 
        category: 'granos', 
        img:'img/coffee5.jpg', 
        stock: 10, 
        description:'El café en grano es simplemente café verde tostado y envasado. Por su parte, el café soluble se obtiene, como vimos antes, tras un proceso de preparación de la infusión de café y secado del agua para obtener el polvo de café soluble.'
    },
    { 
        id: '5', 
        name: 'Capuccino', 
        price: 1000, 
        category: 'leche', 
        img:'img/coffee1.jpg', 
        stock: 15, 
        description:'Un capuchino contiene expreso, vapor y espuma de leche a partes iguales. La taza de un capuchino es más pequeña que la taza del café latte, generalmente de 150 a 180 ml. El tamaño de la taza es muy importante para conseguir el equilibrio perfecto entre el sabor del expreso y la cantidad exacta de leche.'
    },
    { 
        id: '6', 
        name: 'Latte', 
        price: 1000, 
        category: '', 
        img:'img/coffee1.jpg', 
        stock: 15, 
        description:'El café latte es el hermano mayor del capuchino, donde todo gira en torno a la espuma suave y sedosa. Normalmente, el café latte se prepara con una o dos dosis de expreso (1/3 de la bebida) y 2/3 de leche calentada con vapor, con una pequeña capa (alrededor de 1 cm) de espuma de leche.'
    },
    
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}