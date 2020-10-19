const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
  //insere dados na tabela:
  // await saveOrphanage(db, {
  //   lat: "-27.222633",
  //   lng: "-49.6555874",
  //   name: "Lar dos meninos",
  //   about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
  //   whatsapp: "987654321",
  //   images: [
  //     "https://images.unsplash.com/photo-1598454444314-28649fcaa0e9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

  //     "https://images.unsplash.com/photo-1600712243189-aaa2152723b4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
  //   ].toString(),
  //   instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
  //   opening_hours: "Horário de visitas Das 18h até 8h",
  //   open_on_weekends: "0"
  // })
  
  
  //consulta dados na tabela:
  const selectedOrphanages = await db.all("SELECT * FROM orphanages")
  console.log(selectedOrphanages)

  // //consulta somente 1 orphanato, pelo ID:
  // const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"')
  // console.log(orphanage)

  // //deleta dado da tabela:
  // console.log(await db.run("DELETE FROM orphanages WHERE id = '2'"))
  // console.log(await db.run("DELETE FROM orphanages WHERE id = '5'"))
})