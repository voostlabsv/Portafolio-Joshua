// Inventario de muestra. Precios calibrados con anuncios reales de El Salvador (Marketplace / Encuentra24, nov 2026).
window.CARS=[
 {id:'yaris',  t:'sedan', mk:'Toyota', md:'Yaris Sedán', v:'1.5 XLI', y:2018, km:78000, mo:'1.5L', tr:'Automático', fu:'Gasolina', dr:'4x2', p:8900,  img:'yaris',  pos:'62% 62%', tag:'El más pedido'},
 {id:'corolla',t:'sedan', mk:'Toyota', md:'Corolla', v:'LE', y:2020, km:64000, mo:'1.8L', tr:'CVT', fu:'Gasolina', dr:'4x2', p:12900, img:'corolla', pos:'58% 60%'},
 {id:'elantra',t:'sedan', mk:'Hyundai',md:'Elantra', v:'SEL', y:2021, km:52000, mo:'2.0L', tr:'Automático', fu:'Gasolina', dr:'4x2', p:12500, img:'elantra', pos:'40% 62%'},
 {id:'civic',  t:'sedan', mk:'Honda',  md:'Civic', v:'EX', y:2019, km:71000, mo:'1.5L Turbo', tr:'CVT', fu:'Gasolina', dr:'4x2', p:13800, img:'civic', pos:'40% 62%'},
 {id:'tucson', t:'suv',   mk:'Hyundai',md:'Tucson', v:'SE', y:2019, km:69000, mo:'2.0L', tr:'Automático', fu:'Gasolina', dr:'4x2', p:14500, img:'tucson', pos:'40% 60%'},
 {id:'crv',    t:'suv',   mk:'Honda',  md:'CR-V', v:'EX', y:2018, km:83000, mo:'1.5L Turbo', tr:'CVT', fu:'Gasolina', dr:'AWD', p:16900, img:'crv2', pos:'40% 72%', zoom:1.9},
 {id:'rav4',   t:'suv',   mk:'Toyota', md:'RAV4', v:'XLE', y:2019, km:58000, mo:'2.5L', tr:'Automático', fu:'Gasolina', dr:'4x2', p:19900, img:'rav4', pos:'45% 62%', tag:'Recién llegado'},
 {id:'sportage',t:'suv',  mk:'Kia',    md:'Sportage', v:'EX', y:2023, km:31000, mo:'2.5L', tr:'Automático', fu:'Gasolina', dr:'4x2', p:22900, img:'sportage', pos:'55% 62%'},
 {id:'frontier',t:'pickup',mk:'Nissan',md:'Frontier', v:'LE 4x4', y:2019, km:96000, mo:'2.5L Diésel', tr:'Manual', fu:'Diésel', dr:'4x4', p:17900, img:'frontier', pos:'50% 62%'},
 {id:'dmax',   t:'pickup',mk:'Isuzu',  md:'D-Max', v:'LS 4x4', y:2020, km:88000, mo:'3.0L Diésel', tr:'Manual', fu:'Diésel', dr:'4x4', p:21500, img:'dmax', pos:'55% 60%'},
 {id:'tacoma', t:'pickup',mk:'Toyota', md:'Tacoma', v:'TRD Sport', y:2020, km:62000, mo:'3.5L V6', tr:'Automático', fu:'Gasolina', dr:'4x4', p:27500, img:'tacoma', pos:'50% 55%'},
 {id:'hilux',  t:'pickup',mk:'Toyota', md:'Hilux', v:'SRV 4x4', y:2021, km:75000, mo:'2.8L Turbo diésel', tr:'Automático', fu:'Diésel', dr:'4x4', p:37500, img:'hilux2', pos:'50% 62%', tag:'Full cuero'}
];
window.TYPES={sedan:'Sedán',suv:'SUV',pickup:'Pick-up'};
// Crédito de referencia: prima 25 %, 60 meses, 12.5 % anual (sujeto a aprobación)
window.CREDIT={down:.25,n:60,rate:.125};
window.cuota=(p,down=CREDIT.down,n=CREDIT.n,r=CREDIT.rate)=>{const P=p*(1-down),i=r/12;return P*i/(1-Math.pow(1+i,-n))};
window.usd=n=>'$'+Math.round(n).toLocaleString('en-US');
window.kmf=n=>Math.round(n).toLocaleString('en-US')+' km';
