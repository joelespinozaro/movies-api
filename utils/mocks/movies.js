const moviesMock = [
  {
    id: '0ac452eb-7753-4650-a4f1-e06c37b317ec',
    title: 'Millions Game, The (Das Millionenspiel)',
    year: 2000,
    cover: 'http://dummyimage.com/231x246.bmp/ff4444/ffffff',
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    duration: 2042,
    contentRating: 'PG',
    source:
      'https://bbb.org/aliquam/erat/volutpat/in.jpg?vivamus=phasellus&metus=sit&arcu=amet&adipiscing=erat&molestie=nulla&hendrerit=tempus&at=vivamus&vulputate=in&vitae=felis&nisl=eu&aenean=sapien&lectus=cursus&pellentesque=vestibulum&eget=proin&nunc=eu&donec=mi&quis=nulla&orci=ac&eget=enim&orci=in&vehicula=tempor&condimentum=turpis&curabitur=nec&in=euismod&libero=scelerisque&ut=quam&massa=turpis&volutpat=adipiscing&convallis=lorem&morbi=vitae&odio=mattis&odio=nibh&elementum=ligula&eu=nec&interdum=sem&eu=duis&tincidunt=aliquam&in=convallis&leo=nunc&maecenas=proin&pulvinar=at&lobortis=turpis&est=a&phasellus=pede&sit=posuere',
    tags: ['Comedy|Drama|Romance', 'Sci-Fi'],
  },
  {
    id: '0549a1ec-ba2c-4f2f-a12e-a1840b8e7b8b',
    title: 'Cannonball',
    year: 1986,
    cover: 'http://dummyimage.com/247x181.bmp/cc0000/ffffff',
    description:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.',
    duration: 2036,
    contentRating: 'PG',
    source:
      'http://multiply.com/semper/rutrum/nulla/nunc/purus/phasellus.json?sodales=eu&scelerisque=interdum&mauris=eu&sit=tincidunt&amet=in&eros=leo&suspendisse=maecenas&accumsan=pulvinar&tortor=lobortis&quis=est&turpis=phasellus&sed=sit&ante=amet&vivamus=erat&tortor=nulla&duis=tempus&mattis=vivamus&egestas=in&metus=felis&aenean=eu&fermentum=sapien&donec=cursus&ut=vestibulum&mauris=proin&eget=eu&massa=mi&tempor=nulla&convallis=ac&nulla=enim&neque=in&libero=tempor&convallis=turpis&eget=nec&eleifend=euismod&luctus=scelerisque&ultricies=quam&eu=turpis&nibh=adipiscing&quisque=lorem&id=vitae&justo=mattis&sit=nibh&amet=ligula&sapien=nec&dignissim=sem',
    tags: ['Horror', 'Animation|Comedy|Sci-Fi|War'],
  },
  {
    id: '0bd0400d-4e24-48bc-abd7-df9ca5f7f4e7',
    title: "Boston's Finest",
    year: 2000,
    cover: 'http://dummyimage.com/237x127.bmp/dddddd/000000',
    description:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    duration: 1982,
    contentRating: 'R',
    source:
      'http://nbcnews.com/iaculis/congue.jpg?nunc=a&nisl=feugiat&duis=et&bibendum=eros&felis=vestibulum&sed=ac&interdum=est&venenatis=lacinia&turpis=nisi&enim=venenatis&blandit=tristique&mi=fusce&in=congue&porttitor=diam&pede=id&justo=ornare&eu=imperdiet&massa=sapien&donec=urna&dapibus=pretium&duis=nisl&at=ut&velit=volutpat&eu=sapien&est=arcu&congue=sed&elementum=augue&in=aliquam&hac=erat&habitasse=volutpat&platea=in&dictumst=congue&morbi=etiam&vestibulum=justo&velit=etiam&id=pretium&pretium=iaculis&iaculis=justo&diam=in&erat=hac&fermentum=habitasse&justo=platea&nec=dictumst&condimentum=etiam&neque=faucibus&sapien=cursus&placerat=urna&ante=ut&nulla=tellus&justo=nulla&aliquam=ut&quis=erat&turpis=id&eget=mauris&elit=vulputate&sodales=elementum&scelerisque=nullam&mauris=varius&sit=nulla&amet=facilisi&eros=cras&suspendisse=non&accumsan=velit&tortor=nec&quis=nisi&turpis=vulputate&sed=nonummy&ante=maecenas',
    tags: [
      'Crime|Drama|Mystery|Thriller',
      'Action|Crime|Drama',
      'Romance|Sci-Fi|Thriller',
      'Documentary',
      'Adventure|Children|Comedy',
    ],
  },
  {
    id: '56740df1-6fa8-4558-bc12-f22e4f699da2',
    title: 'Suddenly',
    year: 1987,
    cover: 'http://dummyimage.com/245x222.png/5fa2dd/ffffff',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    duration: 2023,
    contentRating: 'R',
    source:
      'https://sohu.com/congue/eget/semper.xml?ultrices=mauris&posuere=enim&cubilia=leo&curae=rhoncus&donec=sed&pharetra=vestibulum&magna=sit&vestibulum=amet&aliquet=cursus&ultrices=id&erat=turpis&tortor=integer&sollicitudin=aliquet&mi=massa&sit=id&amet=lobortis&lobortis=convallis&sapien=tortor&sapien=risus&non=dapibus&mi=augue&integer=vel&ac=accumsan&neque=tellus&duis=nisi&bibendum=eu&morbi=orci&non=mauris&quam=lacinia&nec=sapien&dui=quis&luctus=libero&rutrum=nullam&nulla=sit&tellus=amet&in=turpis&sagittis=elementum&dui=ligula&vel=vehicula&nisl=consequat&duis=morbi&ac=a&nibh=ipsum&fusce=integer&lacus=a&purus=nibh&aliquet=in&at=quis&feugiat=justo&non=maecenas&pretium=rhoncus&quis=aliquam&lectus=lacus&suspendisse=morbi&potenti=quis&in=tortor&eleifend=id&quam=nulla&a=ultrices&odio=aliquet&in=maecenas&hac=leo&habitasse=odio&platea=condimentum&dictumst=id&maecenas=luctus&ut=nec&massa=molestie&quis=sed&augue=justo&luctus=pellentesque&tincidunt=viverra&nulla=pede&mollis=ac&molestie=diam&lorem=cras&quisque=pellentesque&ut=volutpat&erat=dui&curabitur=maecenas',
    tags: ['Action|Thriller', 'Crime|Drama|Mystery|Romance|Thriller'],
  },
  {
    id: 'd9a4e4e2-a9f0-455e-a003-c288afcd39ad',
    title: "Return to Salem's Lot, A",
    year: 2004,
    cover: 'http://dummyimage.com/239x150.jpg/dddddd/000000',
    description:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    duration: 1891,
    contentRating: 'R',
    source:
      'https://skyrock.com/elementum/pellentesque/quisque/porta.xml?integer=cras&pede=mi&justo=pede&lacinia=malesuada&eget=in&tincidunt=imperdiet&eget=et&tempus=commodo&vel=vulputate&pede=justo&morbi=in&porttitor=blandit&lorem=ultrices&id=enim&ligula=lorem&suspendisse=ipsum&ornare=dolor&consequat=sit&lectus=amet&in=consectetuer&est=adipiscing&risus=elit&auctor=proin&sed=interdum&tristique=mauris&in=non&tempus=ligula&sit=pellentesque&amet=ultrices&sem=phasellus&fusce=id&consequat=sapien&nulla=in&nisl=sapien&nunc=iaculis&nisl=congue&duis=vivamus&bibendum=metus&felis=arcu&sed=adipiscing&interdum=molestie&venenatis=hendrerit&turpis=at&enim=vulputate&blandit=vitae&mi=nisl&in=aenean&porttitor=lectus&pede=pellentesque&justo=eget&eu=nunc&massa=donec&donec=quis&dapibus=orci&duis=eget&at=orci&velit=vehicula&eu=condimentum&est=curabitur&congue=in&elementum=libero&in=ut&hac=massa&habitasse=volutpat&platea=convallis&dictumst=morbi&morbi=odio&vestibulum=odio&velit=elementum&id=eu&pretium=interdum&iaculis=eu&diam=tincidunt&erat=in&fermentum=leo&justo=maecenas&nec=pulvinar&condimentum=lobortis&neque=est&sapien=phasellus&placerat=sit&ante=amet&nulla=erat&justo=nulla&aliquam=tempus&quis=vivamus&turpis=in',
    tags: ['Horror|Thriller', 'Children|Comedy|Drama'],
  },
  {
    id: '32c9d831-7899-400b-a099-4b5eccf49613',
    title: 'Trainspotting',
    year: 2001,
    cover: 'http://dummyimage.com/141x167.jpg/dddddd/000000',
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.',
    duration: 2020,
    contentRating: 'R',
    source:
      'http://so-net.ne.jp/quis/lectus/suspendisse/potenti/in.xml?cras=rhoncus&mi=mauris&pede=enim&malesuada=leo&in=rhoncus&imperdiet=sed&et=vestibulum&commodo=sit&vulputate=amet&justo=cursus&in=id&blandit=turpis&ultrices=integer&enim=aliquet&lorem=massa&ipsum=id&dolor=lobortis&sit=convallis&amet=tortor&consectetuer=risus&adipiscing=dapibus&elit=augue&proin=vel&interdum=accumsan&mauris=tellus&non=nisi&ligula=eu&pellentesque=orci&ultrices=mauris&phasellus=lacinia&id=sapien&sapien=quis&in=libero&sapien=nullam&iaculis=sit&congue=amet&vivamus=turpis&metus=elementum&arcu=ligula&adipiscing=vehicula&molestie=consequat&hendrerit=morbi&at=a&vulputate=ipsum&vitae=integer&nisl=a&aenean=nibh&lectus=in&pellentesque=quis&eget=justo&nunc=maecenas&donec=rhoncus&quis=aliquam&orci=lacus&eget=morbi&orci=quis&vehicula=tortor&condimentum=id&curabitur=nulla',
    tags: ['Action|Comedy|Crime|Thriller', 'Drama|Musical|Romance'],
  },
  {
    id: 'eed1e184-ffdb-476d-984d-591862180963',
    title: "Brink's Job, The",
    year: 2007,
    cover: 'http://dummyimage.com/212x175.jpg/dddddd/000000',
    description:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    duration: 2005,
    contentRating: 'PG-13',
    source:
      'http://bloomberg.com/odio/odio/elementum/eu/interdum/eu.js?justo=nisl&aliquam=duis&quis=bibendum&turpis=felis&eget=sed&elit=interdum&sodales=venenatis&scelerisque=turpis&mauris=enim&sit=blandit&amet=mi&eros=in&suspendisse=porttitor&accumsan=pede&tortor=justo&quis=eu&turpis=massa&sed=donec&ante=dapibus&vivamus=duis&tortor=at&duis=velit&mattis=eu&egestas=est&metus=congue&aenean=elementum&fermentum=in&donec=hac&ut=habitasse&mauris=platea&eget=dictumst&massa=morbi&tempor=vestibulum&convallis=velit&nulla=id&neque=pretium&libero=iaculis&convallis=diam&eget=erat&eleifend=fermentum&luctus=justo&ultricies=nec&eu=condimentum&nibh=neque&quisque=sapien&id=placerat&justo=ante&sit=nulla&amet=justo&sapien=aliquam&dignissim=quis&vestibulum=turpis&vestibulum=eget&ante=elit&ipsum=sodales&primis=scelerisque&in=mauris&faucibus=sit&orci=amet&luctus=eros&et=suspendisse&ultrices=accumsan&posuere=tortor&cubilia=quis&curae=turpis&nulla=sed&dapibus=ante&dolor=vivamus&vel=tortor&est=duis&donec=mattis&odio=egestas&justo=metus&sollicitudin=aenean&ut=fermentum&suscipit=donec&a=ut&feugiat=mauris&et=eget&eros=massa&vestibulum=tempor&ac=convallis&est=nulla&lacinia=neque&nisi=libero&venenatis=convallis&tristique=eget&fusce=eleifend&congue=luctus&diam=ultricies&id=eu&ornare=nibh&imperdiet=quisque&sapien=id&urna=justo&pretium=sit&nisl=amet',
    tags: ['Comedy', 'Drama', 'Drama', 'Documentary|Drama', 'Comedy|Drama'],
  },
  {
    id: '8cc2f8b4-04a1-478a-8df3-ac1828409ab5',
    title: 'My Love Has Been Burning (Waga koi wa moenu)',
    year: 1995,
    cover: 'http://dummyimage.com/139x146.bmp/cc0000/ffffff',
    description:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    duration: 2027,
    contentRating: 'G',
    source:
      'https://blogs.com/eleifend/donec/ut.jsp?a=nulla&feugiat=eget&et=eros&eros=elementum&vestibulum=pellentesque&ac=quisque&est=porta&lacinia=volutpat&nisi=erat&venenatis=quisque&tristique=erat&fusce=eros&congue=viverra&diam=eget&id=congue&ornare=eget&imperdiet=semper&sapien=rutrum&urna=nulla&pretium=nunc&nisl=purus&ut=phasellus&volutpat=in&sapien=felis&arcu=donec&sed=semper&augue=sapien&aliquam=a&erat=libero&volutpat=nam&in=dui&congue=proin&etiam=leo&justo=odio&etiam=porttitor&pretium=id&iaculis=consequat&justo=in&in=consequat&hac=ut&habitasse=nulla&platea=sed&dictumst=accumsan&etiam=felis&faucibus=ut&cursus=at&urna=dolor&ut=quis&tellus=odio&nulla=consequat&ut=varius&erat=integer&id=ac&mauris=leo&vulputate=pellentesque&elementum=ultrices&nullam=mattis&varius=odio&nulla=donec&facilisi=vitae&cras=nisi&non=nam&velit=ultrices&nec=libero&nisi=non&vulputate=mattis&nonummy=pulvinar&maecenas=nulla&tincidunt=pede&lacus=ullamcorper&at=augue&velit=a&vivamus=suscipit&vel=nulla&nulla=elit&eget=ac',
    tags: ['Action|Romance|Western', 'Drama', 'Comedy', 'Musical|War'],
  },
  {
    id: '7ef68c7f-a03c-4b5a-8525-1d3fecab0235',
    title: 'Girls Against Boys ',
    year: 2013,
    cover: 'http://dummyimage.com/224x188.bmp/cc0000/ffffff',
    description:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    duration: 1977,
    contentRating: 'PG-13',
    source:
      'http://domainmarket.com/sed/augue/aliquam/erat.aspx?vitae=blandit&nisi=lacinia&nam=erat&ultrices=vestibulum&libero=sed&non=magna&mattis=at&pulvinar=nunc&nulla=commodo&pede=placerat&ullamcorper=praesent&augue=blandit&a=nam&suscipit=nulla&nulla=integer&elit=pede&ac=justo&nulla=lacinia&sed=eget&vel=tincidunt&enim=eget&sit=tempus&amet=vel&nunc=pede&viverra=morbi&dapibus=porttitor&nulla=lorem&suscipit=id&ligula=ligula&in=suspendisse&lacus=ornare&curabitur=consequat&at=lectus&ipsum=in&ac=est&tellus=risus&semper=auctor&interdum=sed&mauris=tristique&ullamcorper=in&purus=tempus&sit=sit',
    tags: [
      'Comedy|Sci-Fi',
      'Film-Noir|Thriller',
      'Comedy|Fantasy|Romance',
      'Adventure|Animation|Children',
      'Comedy|Romance',
    ],
  },
  {
    id: '415d2524-59fa-42c3-bc30-09077725b4f5',
    title: "Winchester '73",
    year: 1997,
    cover: 'http://dummyimage.com/151x158.png/5fa2dd/ffffff',
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    duration: 1998,
    contentRating: 'NC-17',
    source:
      'https://livejournal.com/fusce/consequat.json?molestie=semper&sed=porta&justo=volutpat&pellentesque=quam&viverra=pede&pede=lobortis&ac=ligula&diam=sit&cras=amet&pellentesque=eleifend&volutpat=pede&dui=libero&maecenas=quis&tristique=orci&est=nullam&et=molestie&tempus=nibh&semper=in&est=lectus&quam=pellentesque&pharetra=at&magna=nulla&ac=suspendisse&consequat=potenti&metus=cras&sapien=in&ut=purus&nunc=eu&vestibulum=magna&ante=vulputate&ipsum=luctus&primis=cum&in=sociis&faucibus=natoque&orci=penatibus&luctus=et&et=magnis&ultrices=dis&posuere=parturient&cubilia=montes&curae=nascetur&mauris=ridiculus&viverra=mus&diam=vivamus',
    tags: ['Drama', 'Thriller'],
  },
  {
    id: 'b501f79c-d901-4779-a400-e16fcc0d1c19',
    title: "My Architect: A Son's Journey",
    year: 1973,
    cover: 'http://dummyimage.com/173x227.bmp/dddddd/000000',
    description:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    duration: 2046,
    contentRating: 'PG',
    source:
      'https://sogou.com/eget.html?habitasse=ut&platea=erat&dictumst=id&maecenas=mauris&ut=vulputate&massa=elementum&quis=nullam',
    tags: ['Crime', 'Drama'],
  },
  {
    id: '37e33ef4-54a1-43c4-a501-578b05ea0d13',
    title: 'Hoosiers (a.k.a. Best Shot)',
    year: 1998,
    cover: 'http://dummyimage.com/190x203.jpg/5fa2dd/ffffff',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    duration: 1962,
    contentRating: 'G',
    source:
      'https://unesco.org/phasellus/sit/amet.jpg?luctus=in&nec=magna&molestie=bibendum&sed=imperdiet&justo=nullam&pellentesque=orci&viverra=pede&pede=venenatis&ac=non&diam=sodales&cras=sed&pellentesque=tincidunt&volutpat=eu&dui=felis&maecenas=fusce&tristique=posuere&est=felis&et=sed&tempus=lacus&semper=morbi&est=sem&quam=mauris&pharetra=laoreet&magna=ut&ac=rhoncus&consequat=aliquet&metus=pulvinar&sapien=sed&ut=nisl&nunc=nunc&vestibulum=rhoncus&ante=dui&ipsum=vel&primis=sem&in=sed&faucibus=sagittis&orci=nam&luctus=congue&et=risus&ultrices=semper&posuere=porta&cubilia=volutpat&curae=quam&mauris=pede&viverra=lobortis&diam=ligula&vitae=sit&quam=amet&suspendisse=eleifend&potenti=pede&nullam=libero&porttitor=quis&lacus=orci&at=nullam&turpis=molestie&donec=nibh&posuere=in&metus=lectus&vitae=pellentesque&ipsum=at&aliquam=nulla&non=suspendisse&mauris=potenti&morbi=cras&non=in&lectus=purus&aliquam=eu&sit=magna&amet=vulputate&diam=luctus&in=cum&magna=sociis&bibendum=natoque&imperdiet=penatibus&nullam=et&orci=magnis&pede=dis&venenatis=parturient&non=montes&sodales=nascetur&sed=ridiculus&tincidunt=mus&eu=vivamus',
    tags: ['Drama', 'Comedy', 'Children|Comedy'],
  },
  {
    id: '2b86a095-7015-44a0-9ee7-447f532fe842',
    title: 'Taistelu Näsilinnasta 1918',
    year: 1999,
    cover: 'http://dummyimage.com/210x216.png/dddddd/000000',
    description:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    duration: 2017,
    contentRating: 'PG-13',
    source:
      'http://businessinsider.com/vel/est.jsp?felis=aliquam&eu=non&sapien=mauris&cursus=morbi&vestibulum=non&proin=lectus&eu=aliquam&mi=sit&nulla=amet&ac=diam&enim=in&in=magna&tempor=bibendum&turpis=imperdiet&nec=nullam&euismod=orci&scelerisque=pede&quam=venenatis&turpis=non&adipiscing=sodales&lorem=sed&vitae=tincidunt&mattis=eu&nibh=felis&ligula=fusce&nec=posuere&sem=felis&duis=sed&aliquam=lacus&convallis=morbi&nunc=sem&proin=mauris&at=laoreet&turpis=ut&a=rhoncus&pede=aliquet&posuere=pulvinar&nonummy=sed&integer=nisl&non=nunc&velit=rhoncus&donec=dui&diam=vel&neque=sem&vestibulum=sed&eget=sagittis&vulputate=nam&ut=congue&ultrices=risus&vel=semper&augue=porta&vestibulum=volutpat&ante=quam&ipsum=pede&primis=lobortis&in=ligula&faucibus=sit&orci=amet&luctus=eleifend&et=pede&ultrices=libero&posuere=quis&cubilia=orci&curae=nullam&donec=molestie&pharetra=nibh&magna=in&vestibulum=lectus&aliquet=pellentesque&ultrices=at&erat=nulla&tortor=suspendisse&sollicitudin=potenti&mi=cras&sit=in&amet=purus&lobortis=eu',
    tags: [
      'Documentary',
      'Horror|Mystery',
      'Western',
      'Comedy|Romance',
      'Comedy|Drama|Romance|Sci-Fi',
    ],
  },
  {
    id: '5e947e97-d50f-48bf-9a61-7a5afdce1850',
    title: 'Internal Affairs',
    year: 2010,
    cover: 'http://dummyimage.com/204x226.jpg/ff4444/ffffff',
    description:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    duration: 1923,
    contentRating: 'NC-17',
    source:
      'https://imageshack.us/orci/eget/orci/vehicula/condimentum/curabitur/in.xml?quis=et&augue=tempus&luctus=semper&tincidunt=est&nulla=quam&mollis=pharetra&molestie=magna&lorem=ac&quisque=consequat&ut=metus&erat=sapien&curabitur=ut&gravida=nunc&nisi=vestibulum&at=ante&nibh=ipsum&in=primis&hac=in&habitasse=faucibus&platea=orci&dictumst=luctus&aliquam=et&augue=ultrices&quam=posuere&sollicitudin=cubilia&vitae=curae&consectetuer=mauris&eget=viverra&rutrum=diam&at=vitae&lorem=quam&integer=suspendisse&tincidunt=potenti&ante=nullam&vel=porttitor&ipsum=lacus&praesent=at&blandit=turpis&lacinia=donec&erat=posuere&vestibulum=metus&sed=vitae&magna=ipsum&at=aliquam&nunc=non&commodo=mauris&placerat=morbi&praesent=non&blandit=lectus&nam=aliquam&nulla=sit&integer=amet&pede=diam&justo=in&lacinia=magna&eget=bibendum&tincidunt=imperdiet&eget=nullam&tempus=orci&vel=pede&pede=venenatis&morbi=non&porttitor=sodales&lorem=sed&id=tincidunt&ligula=eu&suspendisse=felis&ornare=fusce&consequat=posuere&lectus=felis&in=sed&est=lacus&risus=morbi&auctor=sem&sed=mauris&tristique=laoreet&in=ut&tempus=rhoncus&sit=aliquet&amet=pulvinar&sem=sed&fusce=nisl&consequat=nunc&nulla=rhoncus&nisl=dui&nunc=vel&nisl=sem&duis=sed&bibendum=sagittis&felis=nam',
    tags: ['Horror|Sci-Fi', 'Action|Thriller', 'Animation', 'Comedy|Romance'],
  },
  {
    id: 'e02e2a22-6459-4dc8-ac68-8a927557af51',
    title: 'Moon of the Wolf',
    year: 2002,
    cover: 'http://dummyimage.com/113x182.png/ff4444/ffffff',
    description:
      'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    duration: 2023,
    contentRating: 'G',
    source:
      'https://jiathis.com/enim/lorem/ipsum/dolor/sit/amet.png?mattis=odio&nibh=justo&ligula=sollicitudin&nec=ut&sem=suscipit&duis=a&aliquam=feugiat&convallis=et&nunc=eros&proin=vestibulum&at=ac&turpis=est&a=lacinia&pede=nisi&posuere=venenatis&nonummy=tristique&integer=fusce&non=congue&velit=diam&donec=id&diam=ornare&neque=imperdiet&vestibulum=sapien&eget=urna&vulputate=pretium&ut=nisl&ultrices=ut&vel=volutpat&augue=sapien&vestibulum=arcu&ante=sed&ipsum=augue&primis=aliquam&in=erat&faucibus=volutpat&orci=in&luctus=congue&et=etiam&ultrices=justo&posuere=etiam&cubilia=pretium&curae=iaculis&donec=justo&pharetra=in&magna=hac&vestibulum=habitasse&aliquet=platea&ultrices=dictumst&erat=etiam&tortor=faucibus&sollicitudin=cursus&mi=urna&sit=ut&amet=tellus&lobortis=nulla&sapien=ut&sapien=erat&non=id&mi=mauris&integer=vulputate&ac=elementum&neque=nullam&duis=varius&bibendum=nulla&morbi=facilisi&non=cras&quam=non&nec=velit&dui=nec&luctus=nisi&rutrum=vulputate&nulla=nonummy&tellus=maecenas',
    tags: ['Comedy|Horror', 'Drama|War', 'Action|Sci-Fi', 'Drama'],
  },
  {
    id: 'f121aa83-17ec-420f-99ea-697f4b353e49',
    title: 'Full Tilt Boogie',
    year: 1990,
    cover: 'http://dummyimage.com/212x106.jpg/5fa2dd/ffffff',
    description:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    duration: 1982,
    contentRating: 'PG',
    source:
      'http://alibaba.com/massa/quis/augue.js?est=commodo&et=placerat&tempus=praesent&semper=blandit&est=nam&quam=nulla&pharetra=integer&magna=pede&ac=justo&consequat=lacinia&metus=eget&sapien=tincidunt&ut=eget&nunc=tempus&vestibulum=vel&ante=pede&ipsum=morbi&primis=porttitor&in=lorem&faucibus=id&orci=ligula&luctus=suspendisse&et=ornare&ultrices=consequat&posuere=lectus&cubilia=in&curae=est&mauris=risus&viverra=auctor&diam=sed&vitae=tristique&quam=in&suspendisse=tempus&potenti=sit&nullam=amet',
    tags: ['Drama', 'Drama', 'Drama'],
  },
  {
    id: 'ffcbd04d-181c-45c0-8382-5b77b45f8b82',
    title: 'Scooby-Doo! Abracadabra-Doo',
    year: 1997,
    cover: 'http://dummyimage.com/123x190.png/ff4444/ffffff',
    description:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    duration: 1964,
    contentRating: 'PG',
    source:
      'https://github.io/enim/lorem.js?mus=venenatis&vivamus=lacinia&vestibulum=aenean&sagittis=sit&sapien=amet&cum=justo&sociis=morbi&natoque=ut&penatibus=odio&et=cras&magnis=mi&dis=pede&parturient=malesuada&montes=in&nascetur=imperdiet&ridiculus=et&mus=commodo&etiam=vulputate&vel=justo&augue=in&vestibulum=blandit&rutrum=ultrices&rutrum=enim&neque=lorem&aenean=ipsum&auctor=dolor&gravida=sit&sem=amet&praesent=consectetuer&id=adipiscing&massa=elit&id=proin&nisl=interdum&venenatis=mauris&lacinia=non&aenean=ligula&sit=pellentesque&amet=ultrices&justo=phasellus&morbi=id&ut=sapien&odio=in&cras=sapien&mi=iaculis&pede=congue&malesuada=vivamus&in=metus&imperdiet=arcu&et=adipiscing&commodo=molestie',
    tags: [
      'Comedy|Drama',
      'Comedy|Horror|Thriller',
      'Action|Adventure|Children',
      'Drama',
    ],
  },
  {
    id: '970e2c34-118d-4548-97c6-43091d6faac4',
    title: 'Zero Dark Thirty',
    year: 2008,
    cover: 'http://dummyimage.com/135x131.bmp/ff4444/ffffff',
    description:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    duration: 2065,
    contentRating: 'PG-13',
    source:
      'http://gmpg.org/vulputate.aspx?laoreet=sem&ut=sed&rhoncus=sagittis&aliquet=nam&pulvinar=congue&sed=risus&nisl=semper&nunc=porta&rhoncus=volutpat&dui=quam&vel=pede&sem=lobortis&sed=ligula&sagittis=sit&nam=amet&congue=eleifend&risus=pede&semper=libero&porta=quis&volutpat=orci&quam=nullam&pede=molestie&lobortis=nibh&ligula=in&sit=lectus&amet=pellentesque&eleifend=at&pede=nulla&libero=suspendisse&quis=potenti&orci=cras&nullam=in&molestie=purus&nibh=eu&in=magna&lectus=vulputate&pellentesque=luctus&at=cum&nulla=sociis&suspendisse=natoque&potenti=penatibus&cras=et&in=magnis&purus=dis',
    tags: ['Comedy'],
  },
  {
    id: '669253f2-7420-4aba-9e7a-b12d65e876d4',
    title: 'Glen or Glenda',
    year: 2010,
    cover: 'http://dummyimage.com/165x180.bmp/ff4444/ffffff',
    description:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    duration: 1996,
    contentRating: 'PG-13',
    source:
      'https://disqus.com/justo/pellentesque/viverra.js?pretium=parturient&quis=montes&lectus=nascetur&suspendisse=ridiculus&potenti=mus&in=etiam&eleifend=vel&quam=augue&a=vestibulum&odio=rutrum&in=rutrum&hac=neque&habitasse=aenean&platea=auctor&dictumst=gravida&maecenas=sem&ut=praesent&massa=id&quis=massa&augue=id&luctus=nisl&tincidunt=venenatis&nulla=lacinia&mollis=aenean&molestie=sit&lorem=amet&quisque=justo&ut=morbi&erat=ut&curabitur=odio&gravida=cras&nisi=mi&at=pede&nibh=malesuada&in=in&hac=imperdiet&habitasse=et&platea=commodo&dictumst=vulputate&aliquam=justo&augue=in&quam=blandit&sollicitudin=ultrices&vitae=enim&consectetuer=lorem&eget=ipsum&rutrum=dolor&at=sit&lorem=amet&integer=consectetuer&tincidunt=adipiscing&ante=elit&vel=proin&ipsum=interdum&praesent=mauris&blandit=non&lacinia=ligula&erat=pellentesque&vestibulum=ultrices&sed=phasellus&magna=id&at=sapien&nunc=in&commodo=sapien&placerat=iaculis&praesent=congue&blandit=vivamus&nam=metus&nulla=arcu&integer=adipiscing&pede=molestie&justo=hendrerit&lacinia=at&eget=vulputate&tincidunt=vitae&eget=nisl&tempus=aenean&vel=lectus&pede=pellentesque&morbi=eget&porttitor=nunc&lorem=donec&id=quis&ligula=orci&suspendisse=eget&ornare=orci&consequat=vehicula&lectus=condimentum&in=curabitur&est=in&risus=libero&auctor=ut&sed=massa&tristique=volutpat&in=convallis&tempus=morbi',
    tags: ['Comedy|Crime', 'Drama', 'Crime|Drama'],
  },
  {
    id: '87e31e63-ff1b-4615-81b1-f6f6658fb4a5',
    title: 'Evocateur: The Morton Downey Jr. Movie',
    year: 2012,
    cover: 'http://dummyimage.com/197x118.jpg/5fa2dd/ffffff',
    description:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    duration: 1996,
    contentRating: 'R',
    source:
      'http://state.gov/libero.html?nec=faucibus&dui=orci&luctus=luctus&rutrum=et&nulla=ultrices&tellus=posuere&in=cubilia&sagittis=curae&dui=donec&vel=pharetra&nisl=magna&duis=vestibulum&ac=aliquet&nibh=ultrices&fusce=erat&lacus=tortor&purus=sollicitudin&aliquet=mi&at=sit&feugiat=amet&non=lobortis&pretium=sapien&quis=sapien&lectus=non&suspendisse=mi&potenti=integer&in=ac',
    tags: ['Comedy|Drama', 'Comedy|Drama', 'Comedy', 'Documentary', 'Drama'],
  },
  {
    id: '0ac452eb-7753-4650-a4f1-e06c37b317ec',
    title: 'Millions Game, The (Das Millionenspiel)',
    year: 2000,
    cover: 'http://dummyimage.com/231x246.bmp/ff4444/ffffff',
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    duration: 2042,
    contentRating: 'PG',
    source:
      'https://bbb.org/aliquam/erat/volutpat/in.jpg?vivamus=phasellus&metus=sit&arcu=amet&adipiscing=erat&molestie=nulla&hendrerit=tempus&at=vivamus&vulputate=in&vitae=felis&nisl=eu&aenean=sapien&lectus=cursus&pellentesque=vestibulum&eget=proin&nunc=eu&donec=mi&quis=nulla&orci=ac&eget=enim&orci=in&vehicula=tempor&condimentum=turpis&curabitur=nec&in=euismod&libero=scelerisque&ut=quam&massa=turpis&volutpat=adipiscing&convallis=lorem&morbi=vitae&odio=mattis&odio=nibh&elementum=ligula&eu=nec&interdum=sem&eu=duis&tincidunt=aliquam&in=convallis&leo=nunc&maecenas=proin&pulvinar=at&lobortis=turpis&est=a&phasellus=pede&sit=posuere',
    tags: ['Comedy|Drama|Romance', 'Sci-Fi'],
  },
  {
    id: '0549a1ec-ba2c-4f2f-a12e-a1840b8e7b8b',
    title: 'Cannonball',
    year: 1986,
    cover: 'http://dummyimage.com/247x181.bmp/cc0000/ffffff',
    description:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.',
    duration: 2036,
    contentRating: 'PG',
    source:
      'http://multiply.com/semper/rutrum/nulla/nunc/purus/phasellus.json?sodales=eu&scelerisque=interdum&mauris=eu&sit=tincidunt&amet=in&eros=leo&suspendisse=maecenas&accumsan=pulvinar&tortor=lobortis&quis=est&turpis=phasellus&sed=sit&ante=amet&vivamus=erat&tortor=nulla&duis=tempus&mattis=vivamus&egestas=in&metus=felis&aenean=eu&fermentum=sapien&donec=cursus&ut=vestibulum&mauris=proin&eget=eu&massa=mi&tempor=nulla&convallis=ac&nulla=enim&neque=in&libero=tempor&convallis=turpis&eget=nec&eleifend=euismod&luctus=scelerisque&ultricies=quam&eu=turpis&nibh=adipiscing&quisque=lorem&id=vitae&justo=mattis&sit=nibh&amet=ligula&sapien=nec&dignissim=sem',
    tags: ['Horror', 'Animation|Comedy|Sci-Fi|War'],
  },
  {
    id: '0bd0400d-4e24-48bc-abd7-df9ca5f7f4e7',
    title: "Boston's Finest",
    year: 2000,
    cover: 'http://dummyimage.com/237x127.bmp/dddddd/000000',
    description:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    duration: 1982,
    contentRating: 'R',
    source:
      'http://nbcnews.com/iaculis/congue.jpg?nunc=a&nisl=feugiat&duis=et&bibendum=eros&felis=vestibulum&sed=ac&interdum=est&venenatis=lacinia&turpis=nisi&enim=venenatis&blandit=tristique&mi=fusce&in=congue&porttitor=diam&pede=id&justo=ornare&eu=imperdiet&massa=sapien&donec=urna&dapibus=pretium&duis=nisl&at=ut&velit=volutpat&eu=sapien&est=arcu&congue=sed&elementum=augue&in=aliquam&hac=erat&habitasse=volutpat&platea=in&dictumst=congue&morbi=etiam&vestibulum=justo&velit=etiam&id=pretium&pretium=iaculis&iaculis=justo&diam=in&erat=hac&fermentum=habitasse&justo=platea&nec=dictumst&condimentum=etiam&neque=faucibus&sapien=cursus&placerat=urna&ante=ut&nulla=tellus&justo=nulla&aliquam=ut&quis=erat&turpis=id&eget=mauris&elit=vulputate&sodales=elementum&scelerisque=nullam&mauris=varius&sit=nulla&amet=facilisi&eros=cras&suspendisse=non&accumsan=velit&tortor=nec&quis=nisi&turpis=vulputate&sed=nonummy&ante=maecenas',
    tags: [
      'Crime|Drama|Mystery|Thriller',
      'Action|Crime|Drama',
      'Romance|Sci-Fi|Thriller',
      'Documentary',
      'Adventure|Children|Comedy',
    ],
  },
  {
    id: '56740df1-6fa8-4558-bc12-f22e4f699da2',
    title: 'Suddenly',
    year: 1987,
    cover: 'http://dummyimage.com/245x222.png/5fa2dd/ffffff',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    duration: 2023,
    contentRating: 'R',
    source:
      'https://sohu.com/congue/eget/semper.xml?ultrices=mauris&posuere=enim&cubilia=leo&curae=rhoncus&donec=sed&pharetra=vestibulum&magna=sit&vestibulum=amet&aliquet=cursus&ultrices=id&erat=turpis&tortor=integer&sollicitudin=aliquet&mi=massa&sit=id&amet=lobortis&lobortis=convallis&sapien=tortor&sapien=risus&non=dapibus&mi=augue&integer=vel&ac=accumsan&neque=tellus&duis=nisi&bibendum=eu&morbi=orci&non=mauris&quam=lacinia&nec=sapien&dui=quis&luctus=libero&rutrum=nullam&nulla=sit&tellus=amet&in=turpis&sagittis=elementum&dui=ligula&vel=vehicula&nisl=consequat&duis=morbi&ac=a&nibh=ipsum&fusce=integer&lacus=a&purus=nibh&aliquet=in&at=quis&feugiat=justo&non=maecenas&pretium=rhoncus&quis=aliquam&lectus=lacus&suspendisse=morbi&potenti=quis&in=tortor&eleifend=id&quam=nulla&a=ultrices&odio=aliquet&in=maecenas&hac=leo&habitasse=odio&platea=condimentum&dictumst=id&maecenas=luctus&ut=nec&massa=molestie&quis=sed&augue=justo&luctus=pellentesque&tincidunt=viverra&nulla=pede&mollis=ac&molestie=diam&lorem=cras&quisque=pellentesque&ut=volutpat&erat=dui&curabitur=maecenas',
    tags: ['Action|Thriller', 'Crime|Drama|Mystery|Romance|Thriller'],
  },
  {
    id: 'd9a4e4e2-a9f0-455e-a003-c288afcd39ad',
    title: "Return to Salem's Lot, A",
    year: 2004,
    cover: 'http://dummyimage.com/239x150.jpg/dddddd/000000',
    description:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    duration: 1891,
    contentRating: 'R',
    source:
      'https://skyrock.com/elementum/pellentesque/quisque/porta.xml?integer=cras&pede=mi&justo=pede&lacinia=malesuada&eget=in&tincidunt=imperdiet&eget=et&tempus=commodo&vel=vulputate&pede=justo&morbi=in&porttitor=blandit&lorem=ultrices&id=enim&ligula=lorem&suspendisse=ipsum&ornare=dolor&consequat=sit&lectus=amet&in=consectetuer&est=adipiscing&risus=elit&auctor=proin&sed=interdum&tristique=mauris&in=non&tempus=ligula&sit=pellentesque&amet=ultrices&sem=phasellus&fusce=id&consequat=sapien&nulla=in&nisl=sapien&nunc=iaculis&nisl=congue&duis=vivamus&bibendum=metus&felis=arcu&sed=adipiscing&interdum=molestie&venenatis=hendrerit&turpis=at&enim=vulputate&blandit=vitae&mi=nisl&in=aenean&porttitor=lectus&pede=pellentesque&justo=eget&eu=nunc&massa=donec&donec=quis&dapibus=orci&duis=eget&at=orci&velit=vehicula&eu=condimentum&est=curabitur&congue=in&elementum=libero&in=ut&hac=massa&habitasse=volutpat&platea=convallis&dictumst=morbi&morbi=odio&vestibulum=odio&velit=elementum&id=eu&pretium=interdum&iaculis=eu&diam=tincidunt&erat=in&fermentum=leo&justo=maecenas&nec=pulvinar&condimentum=lobortis&neque=est&sapien=phasellus&placerat=sit&ante=amet&nulla=erat&justo=nulla&aliquam=tempus&quis=vivamus&turpis=in',
    tags: ['Horror|Thriller', 'Children|Comedy|Drama'],
  },
  {
    id: '32c9d831-7899-400b-a099-4b5eccf49613',
    title: 'Trainspotting',
    year: 2001,
    cover: 'http://dummyimage.com/141x167.jpg/dddddd/000000',
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.',
    duration: 2020,
    contentRating: 'R',
    source:
      'http://so-net.ne.jp/quis/lectus/suspendisse/potenti/in.xml?cras=rhoncus&mi=mauris&pede=enim&malesuada=leo&in=rhoncus&imperdiet=sed&et=vestibulum&commodo=sit&vulputate=amet&justo=cursus&in=id&blandit=turpis&ultrices=integer&enim=aliquet&lorem=massa&ipsum=id&dolor=lobortis&sit=convallis&amet=tortor&consectetuer=risus&adipiscing=dapibus&elit=augue&proin=vel&interdum=accumsan&mauris=tellus&non=nisi&ligula=eu&pellentesque=orci&ultrices=mauris&phasellus=lacinia&id=sapien&sapien=quis&in=libero&sapien=nullam&iaculis=sit&congue=amet&vivamus=turpis&metus=elementum&arcu=ligula&adipiscing=vehicula&molestie=consequat&hendrerit=morbi&at=a&vulputate=ipsum&vitae=integer&nisl=a&aenean=nibh&lectus=in&pellentesque=quis&eget=justo&nunc=maecenas&donec=rhoncus&quis=aliquam&orci=lacus&eget=morbi&orci=quis&vehicula=tortor&condimentum=id&curabitur=nulla',
    tags: ['Action|Comedy|Crime|Thriller', 'Drama|Musical|Romance'],
  },
  {
    id: 'eed1e184-ffdb-476d-984d-591862180963',
    title: "Brink's Job, The",
    year: 2007,
    cover: 'http://dummyimage.com/212x175.jpg/dddddd/000000',
    description:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    duration: 2005,
    contentRating: 'PG-13',
    source:
      'http://bloomberg.com/odio/odio/elementum/eu/interdum/eu.js?justo=nisl&aliquam=duis&quis=bibendum&turpis=felis&eget=sed&elit=interdum&sodales=venenatis&scelerisque=turpis&mauris=enim&sit=blandit&amet=mi&eros=in&suspendisse=porttitor&accumsan=pede&tortor=justo&quis=eu&turpis=massa&sed=donec&ante=dapibus&vivamus=duis&tortor=at&duis=velit&mattis=eu&egestas=est&metus=congue&aenean=elementum&fermentum=in&donec=hac&ut=habitasse&mauris=platea&eget=dictumst&massa=morbi&tempor=vestibulum&convallis=velit&nulla=id&neque=pretium&libero=iaculis&convallis=diam&eget=erat&eleifend=fermentum&luctus=justo&ultricies=nec&eu=condimentum&nibh=neque&quisque=sapien&id=placerat&justo=ante&sit=nulla&amet=justo&sapien=aliquam&dignissim=quis&vestibulum=turpis&vestibulum=eget&ante=elit&ipsum=sodales&primis=scelerisque&in=mauris&faucibus=sit&orci=amet&luctus=eros&et=suspendisse&ultrices=accumsan&posuere=tortor&cubilia=quis&curae=turpis&nulla=sed&dapibus=ante&dolor=vivamus&vel=tortor&est=duis&donec=mattis&odio=egestas&justo=metus&sollicitudin=aenean&ut=fermentum&suscipit=donec&a=ut&feugiat=mauris&et=eget&eros=massa&vestibulum=tempor&ac=convallis&est=nulla&lacinia=neque&nisi=libero&venenatis=convallis&tristique=eget&fusce=eleifend&congue=luctus&diam=ultricies&id=eu&ornare=nibh&imperdiet=quisque&sapien=id&urna=justo&pretium=sit&nisl=amet',
    tags: ['Comedy', 'Drama', 'Drama', 'Documentary|Drama', 'Comedy|Drama'],
  },
  {
    id: '8cc2f8b4-04a1-478a-8df3-ac1828409ab5',
    title: 'My Love Has Been Burning (Waga koi wa moenu)',
    year: 1995,
    cover: 'http://dummyimage.com/139x146.bmp/cc0000/ffffff',
    description:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    duration: 2027,
    contentRating: 'G',
    source:
      'https://blogs.com/eleifend/donec/ut.jsp?a=nulla&feugiat=eget&et=eros&eros=elementum&vestibulum=pellentesque&ac=quisque&est=porta&lacinia=volutpat&nisi=erat&venenatis=quisque&tristique=erat&fusce=eros&congue=viverra&diam=eget&id=congue&ornare=eget&imperdiet=semper&sapien=rutrum&urna=nulla&pretium=nunc&nisl=purus&ut=phasellus&volutpat=in&sapien=felis&arcu=donec&sed=semper&augue=sapien&aliquam=a&erat=libero&volutpat=nam&in=dui&congue=proin&etiam=leo&justo=odio&etiam=porttitor&pretium=id&iaculis=consequat&justo=in&in=consequat&hac=ut&habitasse=nulla&platea=sed&dictumst=accumsan&etiam=felis&faucibus=ut&cursus=at&urna=dolor&ut=quis&tellus=odio&nulla=consequat&ut=varius&erat=integer&id=ac&mauris=leo&vulputate=pellentesque&elementum=ultrices&nullam=mattis&varius=odio&nulla=donec&facilisi=vitae&cras=nisi&non=nam&velit=ultrices&nec=libero&nisi=non&vulputate=mattis&nonummy=pulvinar&maecenas=nulla&tincidunt=pede&lacus=ullamcorper&at=augue&velit=a&vivamus=suscipit&vel=nulla&nulla=elit&eget=ac',
    tags: ['Action|Romance|Western', 'Drama', 'Comedy', 'Musical|War'],
  },
  {
    id: '7ef68c7f-a03c-4b5a-8525-1d3fecab0235',
    title: 'Girls Against Boys ',
    year: 2013,
    cover: 'http://dummyimage.com/224x188.bmp/cc0000/ffffff',
    description:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    duration: 1977,
    contentRating: 'PG-13',
    source:
      'http://domainmarket.com/sed/augue/aliquam/erat.aspx?vitae=blandit&nisi=lacinia&nam=erat&ultrices=vestibulum&libero=sed&non=magna&mattis=at&pulvinar=nunc&nulla=commodo&pede=placerat&ullamcorper=praesent&augue=blandit&a=nam&suscipit=nulla&nulla=integer&elit=pede&ac=justo&nulla=lacinia&sed=eget&vel=tincidunt&enim=eget&sit=tempus&amet=vel&nunc=pede&viverra=morbi&dapibus=porttitor&nulla=lorem&suscipit=id&ligula=ligula&in=suspendisse&lacus=ornare&curabitur=consequat&at=lectus&ipsum=in&ac=est&tellus=risus&semper=auctor&interdum=sed&mauris=tristique&ullamcorper=in&purus=tempus&sit=sit',
    tags: [
      'Comedy|Sci-Fi',
      'Film-Noir|Thriller',
      'Comedy|Fantasy|Romance',
      'Adventure|Animation|Children',
      'Comedy|Romance',
    ],
  },
  {
    id: '415d2524-59fa-42c3-bc30-09077725b4f5',
    title: "Winchester '73",
    year: 1997,
    cover: 'http://dummyimage.com/151x158.png/5fa2dd/ffffff',
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    duration: 1998,
    contentRating: 'NC-17',
    source:
      'https://livejournal.com/fusce/consequat.json?molestie=semper&sed=porta&justo=volutpat&pellentesque=quam&viverra=pede&pede=lobortis&ac=ligula&diam=sit&cras=amet&pellentesque=eleifend&volutpat=pede&dui=libero&maecenas=quis&tristique=orci&est=nullam&et=molestie&tempus=nibh&semper=in&est=lectus&quam=pellentesque&pharetra=at&magna=nulla&ac=suspendisse&consequat=potenti&metus=cras&sapien=in&ut=purus&nunc=eu&vestibulum=magna&ante=vulputate&ipsum=luctus&primis=cum&in=sociis&faucibus=natoque&orci=penatibus&luctus=et&et=magnis&ultrices=dis&posuere=parturient&cubilia=montes&curae=nascetur&mauris=ridiculus&viverra=mus&diam=vivamus',
    tags: ['Drama', 'Thriller'],
  },
  {
    id: 'b501f79c-d901-4779-a400-e16fcc0d1c19',
    title: "My Architect: A Son's Journey",
    year: 1973,
    cover: 'http://dummyimage.com/173x227.bmp/dddddd/000000',
    description:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    duration: 2046,
    contentRating: 'PG',
    source:
      'https://sogou.com/eget.html?habitasse=ut&platea=erat&dictumst=id&maecenas=mauris&ut=vulputate&massa=elementum&quis=nullam',
    tags: ['Crime', 'Drama'],
  },
  {
    id: '37e33ef4-54a1-43c4-a501-578b05ea0d13',
    title: 'Hoosiers (a.k.a. Best Shot)',
    year: 1998,
    cover: 'http://dummyimage.com/190x203.jpg/5fa2dd/ffffff',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    duration: 1962,
    contentRating: 'G',
    source:
      'https://unesco.org/phasellus/sit/amet.jpg?luctus=in&nec=magna&molestie=bibendum&sed=imperdiet&justo=nullam&pellentesque=orci&viverra=pede&pede=venenatis&ac=non&diam=sodales&cras=sed&pellentesque=tincidunt&volutpat=eu&dui=felis&maecenas=fusce&tristique=posuere&est=felis&et=sed&tempus=lacus&semper=morbi&est=sem&quam=mauris&pharetra=laoreet&magna=ut&ac=rhoncus&consequat=aliquet&metus=pulvinar&sapien=sed&ut=nisl&nunc=nunc&vestibulum=rhoncus&ante=dui&ipsum=vel&primis=sem&in=sed&faucibus=sagittis&orci=nam&luctus=congue&et=risus&ultrices=semper&posuere=porta&cubilia=volutpat&curae=quam&mauris=pede&viverra=lobortis&diam=ligula&vitae=sit&quam=amet&suspendisse=eleifend&potenti=pede&nullam=libero&porttitor=quis&lacus=orci&at=nullam&turpis=molestie&donec=nibh&posuere=in&metus=lectus&vitae=pellentesque&ipsum=at&aliquam=nulla&non=suspendisse&mauris=potenti&morbi=cras&non=in&lectus=purus&aliquam=eu&sit=magna&amet=vulputate&diam=luctus&in=cum&magna=sociis&bibendum=natoque&imperdiet=penatibus&nullam=et&orci=magnis&pede=dis&venenatis=parturient&non=montes&sodales=nascetur&sed=ridiculus&tincidunt=mus&eu=vivamus',
    tags: ['Drama', 'Comedy', 'Children|Comedy'],
  },
  {
    id: '2b86a095-7015-44a0-9ee7-447f532fe842',
    title: 'Taistelu Näsilinnasta 1918',
    year: 1999,
    cover: 'http://dummyimage.com/210x216.png/dddddd/000000',
    description:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    duration: 2017,
    contentRating: 'PG-13',
    source:
      'http://businessinsider.com/vel/est.jsp?felis=aliquam&eu=non&sapien=mauris&cursus=morbi&vestibulum=non&proin=lectus&eu=aliquam&mi=sit&nulla=amet&ac=diam&enim=in&in=magna&tempor=bibendum&turpis=imperdiet&nec=nullam&euismod=orci&scelerisque=pede&quam=venenatis&turpis=non&adipiscing=sodales&lorem=sed&vitae=tincidunt&mattis=eu&nibh=felis&ligula=fusce&nec=posuere&sem=felis&duis=sed&aliquam=lacus&convallis=morbi&nunc=sem&proin=mauris&at=laoreet&turpis=ut&a=rhoncus&pede=aliquet&posuere=pulvinar&nonummy=sed&integer=nisl&non=nunc&velit=rhoncus&donec=dui&diam=vel&neque=sem&vestibulum=sed&eget=sagittis&vulputate=nam&ut=congue&ultrices=risus&vel=semper&augue=porta&vestibulum=volutpat&ante=quam&ipsum=pede&primis=lobortis&in=ligula&faucibus=sit&orci=amet&luctus=eleifend&et=pede&ultrices=libero&posuere=quis&cubilia=orci&curae=nullam&donec=molestie&pharetra=nibh&magna=in&vestibulum=lectus&aliquet=pellentesque&ultrices=at&erat=nulla&tortor=suspendisse&sollicitudin=potenti&mi=cras&sit=in&amet=purus&lobortis=eu',
    tags: [
      'Documentary',
      'Horror|Mystery',
      'Western',
      'Comedy|Romance',
      'Comedy|Drama|Romance|Sci-Fi',
    ],
  },
  {
    id: '5e947e97-d50f-48bf-9a61-7a5afdce1850',
    title: 'Internal Affairs',
    year: 2010,
    cover: 'http://dummyimage.com/204x226.jpg/ff4444/ffffff',
    description:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    duration: 1923,
    contentRating: 'NC-17',
    source:
      'https://imageshack.us/orci/eget/orci/vehicula/condimentum/curabitur/in.xml?quis=et&augue=tempus&luctus=semper&tincidunt=est&nulla=quam&mollis=pharetra&molestie=magna&lorem=ac&quisque=consequat&ut=metus&erat=sapien&curabitur=ut&gravida=nunc&nisi=vestibulum&at=ante&nibh=ipsum&in=primis&hac=in&habitasse=faucibus&platea=orci&dictumst=luctus&aliquam=et&augue=ultrices&quam=posuere&sollicitudin=cubilia&vitae=curae&consectetuer=mauris&eget=viverra&rutrum=diam&at=vitae&lorem=quam&integer=suspendisse&tincidunt=potenti&ante=nullam&vel=porttitor&ipsum=lacus&praesent=at&blandit=turpis&lacinia=donec&erat=posuere&vestibulum=metus&sed=vitae&magna=ipsum&at=aliquam&nunc=non&commodo=mauris&placerat=morbi&praesent=non&blandit=lectus&nam=aliquam&nulla=sit&integer=amet&pede=diam&justo=in&lacinia=magna&eget=bibendum&tincidunt=imperdiet&eget=nullam&tempus=orci&vel=pede&pede=venenatis&morbi=non&porttitor=sodales&lorem=sed&id=tincidunt&ligula=eu&suspendisse=felis&ornare=fusce&consequat=posuere&lectus=felis&in=sed&est=lacus&risus=morbi&auctor=sem&sed=mauris&tristique=laoreet&in=ut&tempus=rhoncus&sit=aliquet&amet=pulvinar&sem=sed&fusce=nisl&consequat=nunc&nulla=rhoncus&nisl=dui&nunc=vel&nisl=sem&duis=sed&bibendum=sagittis&felis=nam',
    tags: ['Horror|Sci-Fi', 'Action|Thriller', 'Animation', 'Comedy|Romance'],
  },
  {
    id: 'e02e2a22-6459-4dc8-ac68-8a927557af51',
    title: 'Moon of the Wolf',
    year: 2002,
    cover: 'http://dummyimage.com/113x182.png/ff4444/ffffff',
    description:
      'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    duration: 2023,
    contentRating: 'G',
    source:
      'https://jiathis.com/enim/lorem/ipsum/dolor/sit/amet.png?mattis=odio&nibh=justo&ligula=sollicitudin&nec=ut&sem=suscipit&duis=a&aliquam=feugiat&convallis=et&nunc=eros&proin=vestibulum&at=ac&turpis=est&a=lacinia&pede=nisi&posuere=venenatis&nonummy=tristique&integer=fusce&non=congue&velit=diam&donec=id&diam=ornare&neque=imperdiet&vestibulum=sapien&eget=urna&vulputate=pretium&ut=nisl&ultrices=ut&vel=volutpat&augue=sapien&vestibulum=arcu&ante=sed&ipsum=augue&primis=aliquam&in=erat&faucibus=volutpat&orci=in&luctus=congue&et=etiam&ultrices=justo&posuere=etiam&cubilia=pretium&curae=iaculis&donec=justo&pharetra=in&magna=hac&vestibulum=habitasse&aliquet=platea&ultrices=dictumst&erat=etiam&tortor=faucibus&sollicitudin=cursus&mi=urna&sit=ut&amet=tellus&lobortis=nulla&sapien=ut&sapien=erat&non=id&mi=mauris&integer=vulputate&ac=elementum&neque=nullam&duis=varius&bibendum=nulla&morbi=facilisi&non=cras&quam=non&nec=velit&dui=nec&luctus=nisi&rutrum=vulputate&nulla=nonummy&tellus=maecenas',
    tags: ['Comedy|Horror', 'Drama|War', 'Action|Sci-Fi', 'Drama'],
  },
  {
    id: 'f121aa83-17ec-420f-99ea-697f4b353e49',
    title: 'Full Tilt Boogie',
    year: 1990,
    cover: 'http://dummyimage.com/212x106.jpg/5fa2dd/ffffff',
    description:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    duration: 1982,
    contentRating: 'PG',
    source:
      'http://alibaba.com/massa/quis/augue.js?est=commodo&et=placerat&tempus=praesent&semper=blandit&est=nam&quam=nulla&pharetra=integer&magna=pede&ac=justo&consequat=lacinia&metus=eget&sapien=tincidunt&ut=eget&nunc=tempus&vestibulum=vel&ante=pede&ipsum=morbi&primis=porttitor&in=lorem&faucibus=id&orci=ligula&luctus=suspendisse&et=ornare&ultrices=consequat&posuere=lectus&cubilia=in&curae=est&mauris=risus&viverra=auctor&diam=sed&vitae=tristique&quam=in&suspendisse=tempus&potenti=sit&nullam=amet',
    tags: ['Drama', 'Drama', 'Drama'],
  },
  {
    id: 'ffcbd04d-181c-45c0-8382-5b77b45f8b82',
    title: 'Scooby-Doo! Abracadabra-Doo',
    year: 1997,
    cover: 'http://dummyimage.com/123x190.png/ff4444/ffffff',
    description:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    duration: 1964,
    contentRating: 'PG',
    source:
      'https://github.io/enim/lorem.js?mus=venenatis&vivamus=lacinia&vestibulum=aenean&sagittis=sit&sapien=amet&cum=justo&sociis=morbi&natoque=ut&penatibus=odio&et=cras&magnis=mi&dis=pede&parturient=malesuada&montes=in&nascetur=imperdiet&ridiculus=et&mus=commodo&etiam=vulputate&vel=justo&augue=in&vestibulum=blandit&rutrum=ultrices&rutrum=enim&neque=lorem&aenean=ipsum&auctor=dolor&gravida=sit&sem=amet&praesent=consectetuer&id=adipiscing&massa=elit&id=proin&nisl=interdum&venenatis=mauris&lacinia=non&aenean=ligula&sit=pellentesque&amet=ultrices&justo=phasellus&morbi=id&ut=sapien&odio=in&cras=sapien&mi=iaculis&pede=congue&malesuada=vivamus&in=metus&imperdiet=arcu&et=adipiscing&commodo=molestie',
    tags: [
      'Comedy|Drama',
      'Comedy|Horror|Thriller',
      'Action|Adventure|Children',
      'Drama',
    ],
  },
  {
    id: '970e2c34-118d-4548-97c6-43091d6faac4',
    title: 'Zero Dark Thirty',
    year: 2008,
    cover: 'http://dummyimage.com/135x131.bmp/ff4444/ffffff',
    description:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    duration: 2065,
    contentRating: 'PG-13',
    source:
      'http://gmpg.org/vulputate.aspx?laoreet=sem&ut=sed&rhoncus=sagittis&aliquet=nam&pulvinar=congue&sed=risus&nisl=semper&nunc=porta&rhoncus=volutpat&dui=quam&vel=pede&sem=lobortis&sed=ligula&sagittis=sit&nam=amet&congue=eleifend&risus=pede&semper=libero&porta=quis&volutpat=orci&quam=nullam&pede=molestie&lobortis=nibh&ligula=in&sit=lectus&amet=pellentesque&eleifend=at&pede=nulla&libero=suspendisse&quis=potenti&orci=cras&nullam=in&molestie=purus&nibh=eu&in=magna&lectus=vulputate&pellentesque=luctus&at=cum&nulla=sociis&suspendisse=natoque&potenti=penatibus&cras=et&in=magnis&purus=dis',
    tags: ['Comedy'],
  },
  {
    id: '669253f2-7420-4aba-9e7a-b12d65e876d4',
    title: 'Glen or Glenda',
    year: 2010,
    cover: 'http://dummyimage.com/165x180.bmp/ff4444/ffffff',
    description:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    duration: 1996,
    contentRating: 'PG-13',
    source:
      'https://disqus.com/justo/pellentesque/viverra.js?pretium=parturient&quis=montes&lectus=nascetur&suspendisse=ridiculus&potenti=mus&in=etiam&eleifend=vel&quam=augue&a=vestibulum&odio=rutrum&in=rutrum&hac=neque&habitasse=aenean&platea=auctor&dictumst=gravida&maecenas=sem&ut=praesent&massa=id&quis=massa&augue=id&luctus=nisl&tincidunt=venenatis&nulla=lacinia&mollis=aenean&molestie=sit&lorem=amet&quisque=justo&ut=morbi&erat=ut&curabitur=odio&gravida=cras&nisi=mi&at=pede&nibh=malesuada&in=in&hac=imperdiet&habitasse=et&platea=commodo&dictumst=vulputate&aliquam=justo&augue=in&quam=blandit&sollicitudin=ultrices&vitae=enim&consectetuer=lorem&eget=ipsum&rutrum=dolor&at=sit&lorem=amet&integer=consectetuer&tincidunt=adipiscing&ante=elit&vel=proin&ipsum=interdum&praesent=mauris&blandit=non&lacinia=ligula&erat=pellentesque&vestibulum=ultrices&sed=phasellus&magna=id&at=sapien&nunc=in&commodo=sapien&placerat=iaculis&praesent=congue&blandit=vivamus&nam=metus&nulla=arcu&integer=adipiscing&pede=molestie&justo=hendrerit&lacinia=at&eget=vulputate&tincidunt=vitae&eget=nisl&tempus=aenean&vel=lectus&pede=pellentesque&morbi=eget&porttitor=nunc&lorem=donec&id=quis&ligula=orci&suspendisse=eget&ornare=orci&consequat=vehicula&lectus=condimentum&in=curabitur&est=in&risus=libero&auctor=ut&sed=massa&tristique=volutpat&in=convallis&tempus=morbi',
    tags: ['Comedy|Crime', 'Drama', 'Crime|Drama'],
  },
  {
    id: '87e31e63-ff1b-4615-81b1-f6f6658fb4a5',
    title: 'Evocateur: The Morton Downey Jr. Movie',
    year: 2012,
    cover: 'http://dummyimage.com/197x118.jpg/5fa2dd/ffffff',
    description:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    duration: 1996,
    contentRating: 'R',
    source:
      'http://state.gov/libero.html?nec=faucibus&dui=orci&luctus=luctus&rutrum=et&nulla=ultrices&tellus=posuere&in=cubilia&sagittis=curae&dui=donec&vel=pharetra&nisl=magna&duis=vestibulum&ac=aliquet&nibh=ultrices&fusce=erat&lacus=tortor&purus=sollicitudin&aliquet=mi&at=sit&feugiat=amet&non=lobortis&pretium=sapien&quis=sapien&lectus=non&suspendisse=mi&potenti=integer&in=ac',
    tags: ['Comedy|Drama', 'Comedy|Drama', 'Comedy', 'Documentary', 'Drama'],
  },
];

function filterMoviesMocks(tag) {
  return moviesMock.filter((movie) => movie.tags.includes(tag));
}

class MoviesServiceMock {
  async getMovies() {
    return Promise.resolve(moviesMock);
  }

  async createMovie() {
    return Promise.resolve(moviesMock[0]);
  }
}

module.exports = { moviesMock, filterMoviesMocks, MoviesServiceMock };
