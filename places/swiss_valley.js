const swiss_valley = {
    name: 'swiss_valley',
    style: {},
    portals: [
        {
            name: 'lenina',
            transformPortal: [{translate: [10, 1, -8]}]
        },
        {
            name: 'toys',
            transformPortal: [{translate: [2, 1.5, 10]}]
        },
        {
            name: 'ozheshko',
            transformPortal: [{translate: [-14, 2, 10]}]
        }
    ],
    labels: [
        {
            offset: -90,
            viewStyle: {
                transform: [{translate: [-13, 3, 1]}, { scale : 3 }, { rotateY: 90 }]
            },
            text: 'Швейцарская долина (Парк Ж.Э.Жилибера)',
            description: `Швейцарская долина в Гродно - живописный парковый комплекс в центральной части города. История его создания уходит корнями в 18 век и связана с именем гродненского старосты А.Тизенгауза. По его решению в 1765 году началась постройка пригорода Гродно - Городницы. Построенный здесь дворец был окружён прекрасным садом с уникальной коллекцией растений. Его пересекала извилистая система прудов. Рядом был построен театр, открылось кадетское училище. Начали свою работу школы по подготовке акушеров, строителей и бухгалтеров. Важную роль в судьбе старинного парка сыграл второй раздел Речи Посполитой. Тогда дворец превратился в резиденцию губернатора, а вся территория вокруг приобрела статус губернской. В это же время через реку Городничанку, пересекавшую парк, были перекинуты мостики, берега были облагорожены и оборудованы лавочками. Так в Гродно и родилась маленькая уютная Швейцария.\n
                          Ныне долина - это часть парка имени Жана Эммануэля Жилибера - французского ученого-медика, сделавшего очень многое для Гродно. В город его пригласил А.Тизенгауз и под покровительством могущественного друга Жан основал первое высшее медицинское учебное заведение на территории Беларуси - Гродненскую медицинскую академую. Помимо этого, он был одним из создателей акушерской школы и гродненского госпиталя, показал новаторские методы работы местным аптекарям и основал ботанический сад. Именно на месте сада, созданного под началом «гродненского француза», сегодня расположен городской парк, названный в честь Жилибера. Сад был заложен в 1775 году и служил наглядным учебным пособием для учащихся в Академии. Здесь же росли редкие представители флоры, привезённые Жилибером из родного Лиона и прижившиеся на гродненской земле. Спустя три года после создания, сад уже считался одним из лучших в Европе и насчитывал 2000 растительных видов.  Текст grodno.in`,
            infoPosition: 500, // pixels
            galleryStyle: {
                transform: [{translate: [-11, 4.5, 0]}, { rotateY: 90 }]
            },
            oldImages: [
                {
                    source: 'places/swiss_valley/old/valleyXX.png',
                    year: 'XX в. Фото oldgrodno.by',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/swiss_valley/old/valleyXX-1.png',
                    year: 'XX в. Фото oldgrodno.by, Ф.Ворошильский',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/swiss_valley/old/valleyXX-2.png',
                    year: 'XX в. Фото oldgrodno.by, Ф.Ворошильский',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/swiss_valley/old/valleyXX-3.png',
                    year: 'XX в. Фото oldgrodno.by, Ф.Ворошильский',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/swiss_valley/old/valleyXX-4.png',
                    year: 'XX в. Фото oldgrodno.by, Ф.Ворошильский',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                }
            ]
        }
    ]
};

export default swiss_valley;