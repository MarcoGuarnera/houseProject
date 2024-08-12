export interface HouseProduct {
  AangebodenSinds: string;
  AangebodenSindsTekst: string;
  AantalBadkamers: number;
  AantalKamers: number;
  AantalSlaapkamers: number;
  AantalWoonlagen: string;
  Aanvaarding: string;
  Adres: string;
  AfgekochtDatum: any;
  BalkonDakterras: any;
  BedrijfsruimteCombinatieObject: any;
  BezichtingDagdelen: BezichtingDagdelen[];
  BezichtingDagen: BezichtingDagen[];
  BijdrageVVE: any;
  Bijzonderheden: any;
  Bouwjaar: string;
  Bouwvorm: string;
  BronCode: string;
  ContactpersoonEmail: any;
  ContactpersoonTelefoon: any;
  Cv: string;
  DatumOndertekeningAkte: any;
  Deeplink: any;
  DetailInfo: DetailInfo;
  EigendomsSituatie: any;
  Energielabel: Energielabel;
  ErfpachtBedrag: any;
  Garage: any;
  GarageIsolatie: any;
  GarageVoorzieningen: any;
  GelegenOp: any;
  GewijzigdDatum: string;
  HoofdFoto: string;
  HoofdFotoSecure: string;
  HoofdTuinType: string;
  Id: number;
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
  InternalId: string;
  IsIngetrokken: boolean;
  IsVerhuurd: boolean;
  IsVerkocht: boolean;
  Isolatie: string;
  Kenmerken: Kenmerken[];
  KenmerkenKort: KenmerkenKort;
  KenmerkenTitel: any;
  Ligging: string;
  MLIUrl: string;
  Makelaar: string;
  MakelaarId: number;
  MakelaarTelefoon: string;
  MedeAanbieders: any[];
  Media: Medum[];
  "Media-Foto": string[];
  MobileURL: string;
  ObjectType: string;
  ObjectTypeMetVoorvoegsel: string;
  OpenHuizen: any[];
  PerceelOppervlakte: number;
  PermanenteBewoning: string;
  Plaats: string;
  Postcode: string;
  Prijs: Prijs;
  PrijsGeformatteerd: string;
  Project: any;
  ProjectNaam: any;
  PublicatieDatum: string;
  PublicatieStatus: number;
  SchuurBerging: string;
  SchuurBergingIsolatie: any;
  SchuurBergingVoorzieningen: string;
  ScrambledId: string;
  ServiceKosten: number;
  SoortAanbod: number;
  SoortDak: string;
  SoortGarage: string;
  SoortParkeergelegenheid: string;
  SoortPlaatsing: number;
  SoortWoning: string;
  Titels: Titel[];
  ToonBezichtigingMaken: boolean;
  ToonBrochureAanvraag: boolean;
  ToonMakelaarWoningaanbod: boolean;
  ToonReageren: boolean;
  TransactieAfmeldDatum: any;
  TransactieMakelaarId: any;
  TransactieMakelaarNaam: any;
  TuinLigging: string;
  TypeProject: number;
  URL: string;
  Veiling: Veiling;
  VerkoopStatus: string;
  Verwarming: string;
  Video: any;
  VolledigeOmschrijving: string;
  Voorzieningen: string;
  WGS84_X: number;
  WGS84_Y: number;
  WarmWater: string;
  WoonOppervlakte: number;
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
  objectType: string;
  address: string;
  vveContribution: any;
  constructionYear: string;
  boilerInfo: string;
  tagline: DetailInfo;
  energyLabel: Energielabel;
  mainPhoto: string;
  id: number;
  rented: boolean;
  sold: boolean;
  insulation: string;
  summary: KenmerkenKort;
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
  price: Prijs;
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
