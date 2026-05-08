export interface SPLocation {
  name: string;
  slug: string;
  type: 'city' | 'neighborhood';
  primaryKeyword: string;
  secondaryService: string;
  trendSearch: string;
}

export const spCities: SPLocation[] = [
  { name: "São Paulo", slug: "advogado-em-sao-paulo", type: 'city', primaryKeyword: "Advogado Especialista em Planos de Saúde", secondaryService: "Direito do Paciente", trendSearch: "liminar contra plano de saúde sp" },
  { name: "Osasco", slug: "advogado-em-osasco", type: 'city', primaryKeyword: "Advogado Especialista em Direito da Saúde", secondaryService: "Negativa de Cirurgia", trendSearch: "advogado trabalhista osasco plano de saúde" },
  { name: "Barueri", slug: "advogado-em-barueri", type: 'city', primaryKeyword: "Advogado Especialista em Direito da Saúde", secondaryService: "Direito Empresarial de Saúde", trendSearch: "reembolso médico alphaville barueri" },
  { name: "Guarulhos", slug: "advogado-em-guarulhos", type: 'city', primaryKeyword: "Advogado Especialista em Direito da Saúde", secondaryService: "Medicamentos de Alto Custo", trendSearch: "processo contra plano de saúde guarulhos" },
  { name: "Santo André", slug: "advogado-em-santo-andre", type: 'city', primaryKeyword: "Advogado Especialista em Direito da Saúde", secondaryService: "Home Care e Internação", trendSearch: "advogado inventário santo andré saúde" },
  { name: "São Bernardo do Campo", slug: "advogado-em-sao-bernardo-do-campo", type: 'city', primaryKeyword: "Advogado Especialista em Direito da Saúde", secondaryService: "Prazos de Carência", trendSearch: "advogado aposentadoria sbc plano de saúde" },
  { name: "São Caetano do Sul", slug: "advogado-em-sao-caetano-do-sul", type: 'city', primaryKeyword: "Advogado Especialista em Direito da Saúde", secondaryService: "Reajuste Abusivo", trendSearch: "direito da saúde são caetano" },
  { name: "Diadema", slug: "advogado-em-diadema", type: 'city', primaryKeyword: "Advogado Especialista em Direito da Saúde", secondaryService: "Atendimento de Urgência", trendSearch: "liminar médica diadema" },
  { name: "Taboão da Serra", slug: "advogado-em-taboao-da-serra", type: 'city', primaryKeyword: "Advogado Especialista em Direito da Saúde", secondaryService: "Cirurgia Bariátrica", trendSearch: "advogado plano de saúde taboão" },
  { name: "Cotia", slug: "advogado-em-cotia", type: 'city', primaryKeyword: "Advogado Especialista em Direito da Saúde", secondaryService: "Autismo e Terapias ABA", trendSearch: "tratamento autismo plano de saúde cotia" },
  { name: "Itapevi", slug: "advogado-em-itapevi", type: 'city', primaryKeyword: "Advogado Especialista em Direito da Saúde", secondaryService: "Reajustes de Mensalidade", trendSearch: "liminar medica itapevi" },
  { name: "Carapicuíba", slug: "advogado-em-carapicuiba", type: 'city', primaryKeyword: "Advogado Especialista em Direito da Saúde", secondaryService: "Direito do Paciente", trendSearch: "advogado carapicuiba plano de saude" },
  { name: "Suzano", slug: "advogado-em-suzano", type: 'city', primaryKeyword: "Advogado Especialista em Direito da Saúde", secondaryService: "Liminares Médicas", trendSearch: "advogado suzano sp plano saude" },
  { name: "Mauá", slug: "advogado-em-maua", type: 'city', primaryKeyword: "Advogado Especialista em Direito da Saúde", secondaryService: "Saúde Pública", trendSearch: "processo maua plano de saude" },
  { name: "Mogi das Cruzes", slug: "advogado-em-mogi-das-cruzes", type: 'city', primaryKeyword: "Advogado Especialista em Direito da Saúde", secondaryService: "Planos Coletivos", trendSearch: "revisão plano de saude mogi" },
];

const neighborhoodNames = [
  "Centro", "Sé", "República", "Consolação", "Bela Vista", "Liberdade", "Cambuci", "Bom Retiro", "Santa Cecília", "Higienópolis", 
  "Barra Funda", "Perdizes", "Pacaembu", "Vila Mariana", "Moema", "Itaim Bibi", "Vila Olímpia", "Brooklin", "Campo Belo", "Santo Amaro", 
  "Morumbi", "Butantã", "Pinheiros", "Alto de Pinheiros", "Jardim Paulista", "Jardins", "Cerqueira César", "Jardim Europa", "Jardim América", 
  "Jardim Paulistano", "Indianópolis", "Saúde", "Jabaquara", "Ipiranga", "Sacomã", "Mooca", "Tatuapé", "Belém", "Brás", "Pari", 
  "Água Rasa", "Vila Prudente", "São Mateus", "Sapopemba", "Aricanduva", "Carrão", "Penha", "Vila Matilde", "Itaquera", "Guaianases", 
  "São Miguel Paulista", "Ermelino Matarazzo", "Itaim Paulista", "Cidade Tiradentes", "Vila Curuçá", "Jaçanã", "Tremembé", "Tucuruvi", 
  "Santana", "Casa Verde", "Limão", "Freguesia do Ó", "Brasilândia", "Pirituba", "Jaraguá", "Perus", "Lapa", "Jaguaré", "Vila Leopoldina", 
  "Alto da Lapa", "City Lapa", "Rio Pequeno", "Raposo Tavares", "Campo Limpo", "Capão Redondo", "Jardim São Luís", "Jardim Ângela", 
  "Grajaú", "Cidade Dutra", "Socorro", "Interlagos", "Parelheiros", "Marsilac", "Vila Andrade", "Panamby", "Parque do Carmo", 
  "Anália Franco", "Água Fria", "Vila Guilherme", "Vila Maria", "Parque Novo Mundo", "Cachoeirinha", "Mandaqui", "Lauzane Paulista", 
  "Vila Medeiros", "Cangaíba", "Artur Alvim", "José Bonifácio", "Parque São Lucas", "Parque Bristol", "Vila Formosa", "Vila Ré", 
  "Cidade Líder", "Vila Sônia", "Real Parque", "Cidade Jardim", "Chácara Flora", "Alto da Boa Vista", "Jardim Prudência", "Aclimação", 
  "Paraíso", "Mirandópolis", "Bosque da Saúde", "Vila Clementino", "Chácara Klabin", "Jardim da Glória", "Vila Gumercindo", 
  "Parque da Mooca", "Vila Alpina", "Vila Ema", "São Lucas", "Cidade Ademar", "Pedreira", "Campo Grande", "Vila Mascote", 
  "Americanópolis", "Jardim Miriam", "Jardim Marajoara", "Jardim Bonfiglioli", "Vila Romana", "Sumaré", "Pompeia", "Vila Madalena", 
  "Vila Anglo Brasileira", "Parque Continental", "Jardim Arpoador", "Vila Jaguara", "Água Branca", "Parque São Domingos", 
  "Jardim Peri", "Horto Florestal", "Serra da Cantareira"
];

export const spNeighborhoods: SPLocation[] = neighborhoodNames.map(name => ({
  name,
  slug: `advogado-em-${name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-")}`,
  type: 'neighborhood',
  primaryKeyword: `Advogado Especialista em Direito da Saúde`,
  secondaryService: "Direito da Saúde e Planos",
  trendSearch: `liminar plano de saúde ${name} sp`
}));

export const allSPLocations = [...spCities, ...spNeighborhoods];
