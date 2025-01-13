Company.create!({
  company_name: "AUTO FORCE PLATAFORMA DE MARKETING DIGITAL LTDA",
  cnpj: "22.580.947/0001-06",
  address: "Av. Prudente de Morais, 3966, Lagoa Nova, Natal/RN – CEP 59056-200",
  phone: "84987654321",
  whatsapp: "84912345678"
})

puts "Company created!"

Vehicle.create!({
  name: "BMW Série 4 Cabrio",
  price: 179950,
  image: "https://imgur.com/gnISsZt",
  video: "https://www.youtube.com/watch?v=Fr5lt86dPyU",
  legal_text: "Valor de tabela (código 823839), ano/modelo 18/19 à vista a partir de R$ 179.950 ou financiado com entrada de R$ 40.490 (40%) e mais 24 prestações mensais de R$ 1.286, taxa de juros 0% a.m. e 0% a.a. Total da operação: R$ 205.874. Oferta válida para veículos com pintura sólida.",
  consumption: "14.7 km/l",
  engine: "999 cm3",
  power: "75 cv",
  speed: "154 km/h"
})

puts "Vehicle created!"
