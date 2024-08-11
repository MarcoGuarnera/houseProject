import { HouseProduct, MappedHouseProduct, Medum } from "./types/types";

export const mapHouseProduct = (house: HouseProduct): MappedHouseProduct => {
  return {
    publicationDate: house.AangebodenSinds, // DATA PUBBLICAZIONE
    bathrooms: house.AantalBadkamers, // NUMERO BAGNI
    rooms: house.AantalKamers, // NUMERO CAMERE
    bedrooms: house.AantalSlaapkamers, // NUMERO CAMERE DA LETTO
    floors: house.AantalWoonlagen, // NUMERO PIANI
    address: house.Adres, // ADDRESS
    vveContribution: house.BijdrageVVE, // contributo vve
    constructionYear: house.Bouwjaar, // ANNO COSTRUZIONE
    boilerInfo: house.Cv, // info caldaia
    tagline: house.DetailInfo, // Tagline importante
    energyLabel: house.Energielabel, // importante
    mainPhoto: house.HoofdFoto, // foto principale
    id: house.Id, // id
    rented: house.IsVerhuurd, // è affittato
    sold: house.IsVerkocht, // è venduto
    insulation: house.Isolatie, // isolazione
    summary: house.KenmerkenKort, // importante summary
    location: house.Ligging, // posizione
    realtor: {
      name: house.Makelaar,
      id: house.MakelaarId,
      phone: house.MakelaarTelefoon,
    }, // makelaar
    mediaPhotos: getSecureMediaUrls(house.Media), // Foto, creating an array with only the URLs
    landArea: house.PerceelOppervlakte, // area terreno
    city: house.Plaats, // cittá
    postcode: house.Postcode, // postcode
    price: house.Prijs, // prezzo
    saleStatus: house.VerkoopStatus, // status abitazione (venduta, in vendita ecc)
    heating: house.Verwarming, // tipo riscaldamento
    description: house.VolledigeOmschrijving, // descrizione
    gardenLocation: house.TuinLigging, // posizione giardino
    mapCoordinates: {
      lat: house.WGS84_Y, // latitudine
      lng: house.WGS84_X, // longitudine
    }, // coordinate mappe
    livingArea: house.WoonOppervlakte, // metri quadri zona giorno
    parkingType: house.SoortParkeergelegenheid, // tipo parcheggio
    viewingCalendar: house.ToonBezichtigingMaken, // visualizzare calendario viewing
    brochureDownload: house.ToonBrochureAanvraag, // visualizzare brochure download
  };
};

const getSecureMediaUrls = (mediaArray: Medum[]): string[] => {
  // Map over the Media array, filter MediaItems by Category, and return the UrlSecure
  return mediaArray
    .flatMap((media) =>
      media.MediaItems.filter((item) => item.Category === 7).map(
        (item) => item.UrlSecure
      )
    )
    .filter((url): url is string => !!url); // Filter out any undefined UrlSecure values
};
