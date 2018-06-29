const zamkovaja = {
    name: 'zamkovaja',
    style: {},
    portals: [
        {
            name: 'castles',
            transformPortal: [{translate: [-13, 0, 2]}]
        },
        {
            name: 'center',
            transformPortal: [{translate: [12, 0, 7]}]
        }
    ],
    labels: [
        {
            offset: -90,
            viewStyle: {
                transform: [{translate: [-13, 3, 1]}, { scale : 3 }, { rotateY: 90 }]
            },
            text: 'Левая сторона Замковой улицы',
            description: `Замковая улица - одна из самых старых городских улиц в центре города Гродно. Является одним из символов города. Протяженность около 360 м, от советской площади до территории нового и старого замков, от которых и пошло название улицы. Является единственной улицей в Беларусии, на которой находятся сразу два королевских замка. В 17 веке произошёл расцвет улицы, на ней было не меньше, чем 7 дворцов магнатов Речи Посполитой.\n
                          Текст wikipedia.org\n
                          В конце улицы можно увидеть Пожарную Каланчу - памятник архитектуры 20 века, на территории которого располагается действующая пожарно-спасательная часть.\n
                          Несмотря на все войны, восстания и революции, главным врагом Гродно был огонь. Поэтому в 1870 году в городе появилась первая деревянная башня пожарной части. Тем не менее, даже тогда не удалось побороть стихию. В мае 1885 года вследствие засухи загорелись соломенные крыши домов. Ветер быстро разнёс огонь по городу, а пожарные хоть и прибыли вовремя, всё равно не успели ничего предпринять. Пожар бушевал в городе 3 дня, унеся десятки жизней и уничтожив 500 строений.\n
                          В начале 20 века деревянную каланчу заменили на каменную. Она была более высокая (32 метра), что позволяло вести круговой обзор города. При обнаружении возгорания дежурный на вершине башни громко звонил в колокол.\n
                          Текст grodno.in`,
            infoPosition: 500, // pixels
            galleryStyle: {
                transform: [{translate: [-11, 4.5, 0]}, { rotateY: 90 }]
            },
            oldImages: [
                {
                    source: 'places/zamkovaja/old/zamkovajaLeftXX-3.png',
                    year: 'XX в.',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/zamkovaja/old/zamkovajaLeftXX.jpg',
                    year: 'XX в. Фото grodnonews.by, В.Саяпин',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/zamkovaja/old/zamkovajaLeftXX-1.jpg',
                    year: 'XX в. Фото grodnonews.by, В.Саяпин',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/zamkovaja/old/zamkovajaLeftXX-2.jpg',
                    year: 'XX в. Фото grodnonews.by, Ф.Ворошильский',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                }
            ]
        },
        {
            offset: 120,
            viewStyle: {
                transform: [{translate: [11, 3, 5]}, { scale : 3 }, { rotateY: -120 }]
            },
            text: 'Правая сторона Замковой улицы',
            description: `Замковая улица - одна из самых старых городских улиц в центре города Гродно. Является одним из символов города. Протяженность около 360 м, от советской площади до территории нового и старого замков, от которых и пошло название улицы. Является единственной улицей в Беларусии, на которой находятся сразу два королевских замка.\n
                          На улице расположены архитектурные памятники разных эпох: начиная от древнерусского периода и кончая началом 20 века. Улица претерпела на себе все испытания и лихолетья, выпавшие на долю города, её застройка много раз разрушалась и восстанавливалась. В 17 веке произошёл расцвет улицы, на ней было не меньше, чем 7 дворцов магнатов Речи Посполитой. Улица успешно перенесла две мировые войны, однако наибольшие потери понесла в мирное время, когда советскими властями была снесена самая старая и ценная застройка четной стороны улицы, а также взорвано самое высотное на то время здание в городе - Фара Витовта.\n
                          \n Текст wikipedia.org`,
            infoPosition: 3700, // pixels
            galleryStyle: {
                transform: [{translate: [4, 5, 4]}, { rotateY: -120 }]
            },
            oldImages: [
                {
                    source: 'places/zamkovaja/old/zamkovajaRightXX.jpg',
                    year: 'XX в. Фото grodnonews.by, автор В.Саяпин',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/zamkovaja/old/zamkovajaRightXX-1.jpg',
                    year: 'XX в. Фото grodnonews.by, автор В.Саяпин',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/zamkovaja/old/zamkovajaRightXX-2.png',
                    year: 'XX в. Фото oldgrodno.by, автор Ф.Ворошильский',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/zamkovaja/old/zamkovajaRight30.png',
                    year: '1930-е, Фото oldgrodno.by',
                    style: {
                        width: 6.2,
                        height: 5.2
                    }
                },
                {
                    source: 'places/zamkovaja/old/zamkovajaRight1915.png',
                    year: '1915 г. Фото oldgrodno.by, автор Ф.Ворошильский',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                }

            ]
        },
        {
            offset: 0,
            viewStyle: {
                transform: [{translate: [-1, 2, -5]}, { scale : 1.5 }]
            },
            text: 'Памятная табличка на входе в бывшее гетто',
            description: `Гетто в Гродно (ноябрь 1941 - 12 марта 1943) - еврейское гетто, место принудительного переселения евреев города Гродно в процессе преследования и уничтожения евреев во время оккупации территории Беларусии войсками нацистской Германии в период Второй мировой войны.\n
            В сентябре 1941 года нацисты начали организовать в Гродно 2 гетто, которые заняли площадь около 1,5 гектаров (улица Иерусалимская (современная улица Антонова) и район улицы Большая Троицкая).\n
            Гетто было создано в центральной части города, в «Старом городе», недалеко от замка и вокруг Большой синагоги, - на улицах Скидельской и Переца, в районе Скидельской площади, а его центральный вход находился со стороны улицы Замковой. На площади меньше половины квадратного километра оно вместило 15 000 узников и просуществовало с ноября 1941 года по март 1943 года. Гетто было окружено 2-метровым забором.\n
            В 1991 года на улице Замковой, находящейся во время войны на территории одного из двух гетто, установлена мемориальная плита в память о евреях Гродно и близлежащих населённых пунктов, убитых нацистами и их пособниками\n
            \n Текст wikipedia.org`,
            infoPosition: 1800, // pixels
            infoWidth: 1300, // pixels,
            infoHeight: 900, // pixels
            model: {
                style: {
                    transform: [
                        { translate: [18, 3.5, -18] },
                        { rotateZ: -55 },
                        { rotateX: 0 },
                        { rotateY: -10 }
                    ]
                },
                rotationAxis: 'rotateZ',
                obj: 'models/getto/getto.obj',
                mtl: 'models/getto/getto.mtl',
                controls: {
                    transform: [{translate: [-1, -0.5, -10]}, { rotateY: -30 }]
                }
            },
            galleryStyle: {
                transform: [{translate: [-5, 5, -8]}]
            },
            oldImages: [
                {
                    source: 'places/zamkovaja/old/ghetto.jpg',
                    year: '1941 г. Фото wikipedia.org',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/zamkovaja/old/ghetto1.jpg',
                    year: '1941 г. Фото wikipedia.org',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                }
            ]
        },
        {
            offset: -180,
            viewStyle: {
                transform: [{translate: [-1, 2, 5]}, { scale : 1.5 }, { rotateY: 180 }]
            },
            text: 'Дом быта',
            // description: `---`,
            infoPosition: 5, // pixels
            galleryStyle: {
                transform: [{translate: [-5, 5, 8]}, { rotateY: 180 }]
            },
            oldImages: [
                {
                    source: 'places/zamkovaja/old/dom1971.jpg',
                    year: '1971 г. Фото old.grodno.net',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/zamkovaja/old/dom1971-1.jpg',
                    year: '1971 г. Фото old.grodno.net',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                }
            ]
        }
    ]
};

export default zamkovaja;