export interface HouseProduct {
  AangebodenSinds: string; //TODO: DATA PUBBLICAZIONE
  AangebodenSindsTekst: string;
  AantalBadkamers: number; //TODO: NUMERO BAGNI
  AantalKamers: number; //TODO: NUMERO CAMERE
  AantalSlaapkamers: number; //TODO: NUMERO CAMERE DA LETTO
  AantalWoonlagen: string; //TODO: NUMERO PIANI
  Aanvaarding: string;
  Adres: string; //TODO: ADDRESS
  AfgekochtDatum: any;
  BalkonDakterras: any;
  BedrijfsruimteCombinatieObject: any;
  BezichtingDagdelen: BezichtingDagdelen[];
  BezichtingDagen: BezichtingDagen[];
  BijdrageVVE: any; //TODO: contributo vve
  Bijzonderheden: any;
  Bouwjaar: string; //TODO: ANNO COSTRUZIONE
  Bouwvorm: string;
  BronCode: string;
  ContactpersoonEmail: any;
  ContactpersoonTelefoon: any;
  Cv: string; //TODO: info caldaia
  DatumOndertekeningAkte: any;
  Deeplink: any;
  DetailInfo: DetailInfo; //TODO: Tagline importante
  EigendomsSituatie: any;
  Energielabel: Energielabel; //TODO: importante
  ErfpachtBedrag: any;
  Garage: any;
  GarageIsolatie: any;
  GarageVoorzieningen: any;
  GelegenOp: any;
  GewijzigdDatum: string;
  HoofdFoto: string; //TODO: foto principale
  HoofdFotoSecure: string;
  HoofdTuinType: string;
  Id: number; //TODO: foto principale
  IndBasisPlaatsing: boolean;
  IndFotos: boolean;
  IndIpix: boolean;
  IndOpenhuizenTopper: boolean;
  IndPDF: boolean;
  IndPlattegrond: boolean;
  IndTop: boolean;
  IndVeilingProduct: boolean;
  IndVideo: boolean;
  Inhoud: number;
  InternalId: string; //TODO: importante
  IsIngetrokken: boolean;
  IsVerhuurd: boolean; //TODO: è affittato
  IsVerkocht: boolean; //TODO: è venduto
  Isolatie: string; //TODO: isolazione
  Kenmerken: Kenmerken[];
  KenmerkenKort: KenmerkenKort; //TODO: importante summary
  KenmerkenTitel: any;
  Ligging: string; //TODO: posizione
  MLIUrl: string;
  Makelaar: string; //TODO: makelaar
  MakelaarId: number; //TODO: makelaar
  MakelaarTelefoon: string; //TODO: makelaar
  MedeAanbieders: any[];
  Media: Medum[]; //TODO: Foto, creare mapper per ricavare array con solo url da ogni elemento Media > MediaItems > dove Category === 7 predere .UrlSecure
  "Media-Foto": string[];
  MobileURL: string;
  ObjectType: string;
  ObjectTypeMetVoorvoegsel: string;
  OpenHuizen: any[];
  PerceelOppervlakte: number; //TODO: area terreno
  PermanenteBewoning: string;
  Plaats: string; //TODO: cittá
  Postcode: string; //TODO: postcode
  Prijs: Prijs; //TODO: prezzo, prendere Koopprijs e KoopAbbreviation
  PrijsGeformatteerd: string;
  Project: any;
  ProjectNaam: any;
  PublicatieDatum: string; //TODO: DATA PUBBLICAZIONE
  PublicatieStatus: number;
  SchuurBerging: string;
  SchuurBergingIsolatie: any;
  SchuurBergingVoorzieningen: string;
  ScrambledId: string;
  ServiceKosten: number;
  SoortAanbod: number;
  SoortDak: string;
  SoortGarage: string;
  SoortParkeergelegenheid: string; //TODO: tipo parcheggio
  SoortPlaatsing: number;
  SoortWoning: string;
  Titels: Titel[];
  ToonBezichtigingMaken: boolean; //TODO: visualizzare calendario viweing
  ToonBrochureAanvraag: boolean; //TODO: visualizzare brochure download
  ToonMakelaarWoningaanbod: boolean;
  ToonReageren: boolean;
  TransactieAfmeldDatum: any;
  TransactieMakelaarId: any;
  TransactieMakelaarNaam: any;
  TuinLigging: string; //TODO: posizione giardino
  TypeProject: number;
  URL: string;
  Veiling: Veiling;
  VerkoopStatus: string; //TODO:  status abitazione (venduta, in vendita ecc)
  Verwarming: string; //TODO: tipo riscaldamento
  Video: any;
  VolledigeOmschrijving: string; //TODO: descrizione
  Voorzieningen: string;
  WGS84_X: number; //TODO: coordinate mappe
  WGS84_Y: number; //TODO: coordinate mappe
  WarmWater: string;
  WoonOppervlakte: number; ///TODO: metri quadri zona giorno
  EersteHuurPrijs: any;
  EersteHuurPrijsLang: any;
  EersteKoopPrijs: any;
  EersteKoopPrijsLang: any;
  HuurPrijs: any;
  HuurPrijsLang: any;
  HuurPrijsTot: any;
  Huurprijs: any;
  HuurprijsFormaat: any;
  KoopPrijs: number;
  KoopPrijsLang: string;
  Koopprijs: number;
  KoopprijsFormaat: string;
  KoopprijsTot: any;
  ShortURL: string;
  Tuin: string;
  VeilingGeformatteerd: any;
}

export interface BezichtingDagdelen {
  Naam: string;
  Waarde: string;
}

export interface BezichtingDagen {
  Naam: string;
  Waarde: string;
}

export interface DetailInfo {
  HasPromotionLabel: boolean;
  PromotionLabelType: number;
  RibbonColor: number;
  RibbonText: any;
  Tagline: string;
}

export interface Energielabel {
  Definitief: boolean;
  Index: any;
  Label: string;
  NietBeschikbaar: boolean;
  NietVerplicht: boolean;
}

export interface Kenmerken {
  Ad: any;
  Kenmerken: Kenmerken2[];
  LokNummer: number;
  SubKenmerk?: SubKenmerk;
  Titel: string;
}

export interface Kenmerken2 {
  Naam: string;
  NaamCss?: string;
  Waarde: string;
  WaardeCss?: string;
}

export interface SubKenmerk {
  Ad: string;
  Kenmerken: any[];
  LokNummer: number;
  SubKenmerk: any;
  Titel: string;
}

export interface KenmerkenKort {
  Ad: any;
  Kenmerken: Kenmerken3[];
  LokNummer: number;
  SubKenmerk: any;
  Titel: any;
}

export interface Kenmerken3 {
  Naam: string;
  NaamCss: any;
  Waarde: string;
  WaardeCss: any;
}

export interface Medum {
  Categorie: number;
  ContentType: number;
  Id: string;
  IndexNumber: number;
  MediaItems: MediaItem[];
  Metadata?: string;
  Omschrijving?: string;
  RegistratieVerplicht: boolean;
  Soort: number;
}

export interface MediaItem {
  Category: number;
  Height: number;
  Url: string;
  UrlSecure?: string;
  Width: number;
}

export interface Prijs {
  GeenExtraKosten: any;
  HuurAbbreviation: string;
  Huurprijs: any;
  HuurprijsOpAanvraag: string;
  HuurprijsTot: any;
  KoopAbbreviation: string;
  Koopprijs: number;
  KoopprijsOpAanvraag: string;
  KoopprijsTot: any;
  OriginelePrijs: any;
  VeilingText: string;
}

export interface Titel {
  Omschrijving: string;
  Pagina: number;
}

export interface Veiling {
  EindDatum: any;
  Link: any;
  StartDatum: any;
  VeilingPartij: any;
}

export interface MappedHouseProduct {
  publicationDate: string;
  bathrooms: number;
  rooms: number;
  bedrooms: number;
  floors: string;
  address: string;
  vveContribution: any;
  constructionYear: string;
  boilerInfo: string;
  tagline: DetailInfo; // Assuming DetailInfo is already defined
  energyLabel: Energielabel; // Assuming Energielabel is already defined
  mainPhoto: string;
  id: number;
  rented: boolean;
  sold: boolean;
  insulation: string;
  summary: KenmerkenKort; // Assuming KenmerkenKort is already defined
  location: string;
  realtor: {
    name: string;
    id: number;
    phone: string;
  };
  mediaPhotos: string[];
  landArea: number;
  city: string;
  postcode: string;
  price: Prijs; // Assuming Prijs is already defined
  saleStatus: string;
  heating: string;
  description: string;
  gardenLocation: string;
  mapCoordinates: {
    lat: number;
    lng: number;
  };
  livingArea: number;
  parkingType: string;
  viewingCalendar: boolean;
  brochureDownload: boolean;
}
