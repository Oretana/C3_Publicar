var chart = c3.generate({

  bindto: "#chart",
  // size: {
  //   height: 400,
  //   width: 800,
  // },
  //
  // padding: {
  //   top:150,
  //   left: 300,
  // },

  data: {
    //   url:'Prueba.csv',
    //   type: 'spline'
    // },
    columns: [
      ["Madrid", 200, 50, 80, 100],
      ["Barcelona", 50, 600, 532, 50],
      ["Valencia", 400, 80, 56, 300]
    ]
  }
  //type: "spline"
  //},
  // grid: {
  //   x: {
  //     show: true
  //   },
  //   y: {
  //     show: true
  //   }
  // }
});

// setTimeout(function(){
//   c3.generate({
//     data:{
//       url:'Prueba.csv',
//       mimeType: 'csv'
//     }
//   });
// }, 2000);
// setTimeout(function(){
//   chart.unload({
//     ids: 'Madrid'
//   });
// }, 3000);
