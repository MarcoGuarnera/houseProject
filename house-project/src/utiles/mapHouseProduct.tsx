import { HouseProduct, MappedHouseProduct, Medum } from "./types/types";

export const mapHouseProduct = (house: HouseProduct): MappedHouseProduct => {
  return {
    publicationDate: house.AangebodenSinds,
    bathrooms: house.AantalBadkamers,
    rooms: house.AantalKamers,
    bedrooms: house.AantalSlaapkamers,
    floors: house.AantalWoonlagen,
    address: house.Adres,
    vveContribution: house.BijdrageVVE,
    constructionYear: house.Bouwjaar,
    boilerInfo: house.Cv,
    tagline: house.DetailInfo,
    energyLabel: house.Energielabel,
    mainPhoto: house.HoofdFoto,
    id: house.Id,
    rented: house.IsVerhuurd,
    sold: house.IsVerkocht,
    insulation: house.Isolatie,
    summary: house.KenmerkenKort,
    location: house.Ligging,
    objectType: house.ObjectType,
    realtor: {
      name: house.Makelaar,
      id: house.MakelaarId,
      phone: house.MakelaarTelefoon,
    },
    mediaPhotos: getSecureMediaUrls(house.Media),
    landArea: house.PerceelOppervlakte,
    city: house.Plaats,
    postcode: house.Postcode,
    price: house.Prijs,
    saleStatus: house.VerkoopStatus,
    heating: house.Verwarming,
    description: house.VolledigeOmschrijving,
    gardenLocation: house.TuinLigging,
    mapCoordinates: {
      lat: house.WGS84_Y,
      lng: house.WGS84_X,
    },
    livingArea: house.WoonOppervlakte,
    parkingType: house.SoortParkeergelegenheid,
    viewingCalendar: house.ToonBezichtigingMaken,
    brochureDownload: house.ToonBrochureAanvraag,
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
